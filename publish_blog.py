#!/usr/bin/env python3
"""
UNIMA Blog 一鍵發佈腳本

用法:
    python3 publish_blog.py <markdown_file_path> <cover_image_url> [--no-push]

說明:
    1. 解析 Markdown 檔案的標題、摘要與內文
    2. 自動更新 client/src/pages/Blog.tsx (文章列表)
    3. 自動更新 client/src/pages/BlogPost.tsx (文章詳細內容)
    4. 自動執行 git commit 與 push (除非加上 --no-push)
    5. 提醒至 Manus 控制台點擊 Publish 觸發部署

Markdown 格式範例:
    # 文章標題

    這是文章摘要 (第一段)

    ## 段落 1
    段落 1 內容

    ## 段落 2
    段落 2 內容
"""
import os
import re
import sys
import subprocess
from datetime import datetime

# Slug 對照表 (中文標題 -> 英文 slug)
TITLE_TO_SLUG = {
    "AI Agent 不是聊天機器人": "ai-agent-delivery-cost-center",
    "監管退潮": "ai-compliance-debt-2026",
    "別再說 SME": "sme-ai-inclusivity-double-revenue",
    "AI 決策還在": "ai-hallucination-agentic-solution",
    "數位螢幕": "physical-ai-supply-chain-revolution",
}


def parse_markdown(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")
    title = ""
    paragraphs = []
    excerpt = ""
    current_para = []

    for line in lines:
        stripped = line.strip()
        if not title and stripped.startswith("# "):
            title = stripped[2:].strip()
            continue
        if stripped.startswith("#"):
            if current_para:
                para_text = " ".join(current_para).strip()
                if para_text:
                    paragraphs.append(para_text)
                current_para = []
            continue
        if not stripped:
            if current_para:
                para_text = " ".join(current_para).strip()
                if para_text:
                    paragraphs.append(para_text)
                current_para = []
            continue
        current_para.append(stripped.lstrip("*-> "))

    if current_para:
        para_text = " ".join(current_para).strip()
        if para_text:
            paragraphs.append(para_text)

    if paragraphs:
        excerpt = paragraphs[0]
        if len(excerpt) > 120:
            excerpt = excerpt[:120] + "..."

    # 自動匹配 slug
    slug = ""
    for keyword, slug_value in TITLE_TO_SLUG.items():
        if keyword in title:
            slug = slug_value
            break
    if not slug:
        slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower()).strip("-")
        if not slug:
            slug = f"post-{datetime.now().strftime('%Y%m%d-%H%M%S')}"

    return {
        "title": title or "未命名文章",
        "slug": slug,
        "excerpt": excerpt or "(摘要未提供)",
        "paragraphs": paragraphs,
        "date": datetime.now().strftime("%Y-%m-%d"),
    }


def js_escape(text):
    return text.replace("\\", "\\\\").replace('"', '\\"')


def update_blog_tsx(post, cover_url, project_root):
    blog_tsx = os.path.join(project_root, "client/src/pages/Blog.tsx")
    with open(blog_tsx, "r", encoding="utf-8") as f:
        content = f.read()

    # 跳過已存在的條目
    if f'slug: "{post["slug"]}"' in content:
        print(f"  > Blog.tsx 已包含 slug={post['slug']}，跳過")
        return True

    match = re.search(r"const posts = \[\s*", content)
    if not match:
        print("  ! Blog.tsx 找不到 'const posts = ['")
        return False
    insert_pos = match.end()

    new_entry = (
        f'  {{\n'
        f'    slug: "{js_escape(post["slug"])}",\n'
        f'    title: "{js_escape(post["title"])}",\n'
        f'    excerpt: "{js_escape(post["excerpt"])}",\n'
        f'    date: "{post["date"]}",\n'
        f'    readTime: "8 分鐘",\n'
        f'    tags: ["最新洞察", "AI 轉型"],\n'
        f'    featured: true,\n'
        f'  }},\n'
    )
    new_content = content[:insert_pos] + new_entry + content[insert_pos:]
    with open(blog_tsx, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  > Blog.tsx 已新增 slug={post['slug']}")
    return True


def update_blog_post_tsx(post, cover_url, project_root):
    blog_post_tsx = os.path.join(project_root, "client/src/pages/BlogPost.tsx")
    with open(blog_post_tsx, "r", encoding="utf-8") as f:
        content = f.read()

    if f'"{post["slug"]}":' in content:
        print(f"  > BlogPost.tsx 已包含 slug={post['slug']}，跳過")
        return True

    match = re.search(r"const blogContent.*?=\s*\{\s*", content)
    if not match:
        print("  ! BlogPost.tsx 找不到 'const blogContent = {'")
        return False
    insert_pos = match.end()

    para_lines = ",\n".join([f'      "{js_escape(p)}"' for p in post["paragraphs"]])
    new_entry = (
        f'  "{js_escape(post["slug"])}": {{\n'
        f'    title: "{js_escape(post["title"])}",\n'
        f'    date: "{post["date"]}",\n'
        f'    readTime: "8 分鐘",\n'
        f'    tags: ["最新洞察", "AI 轉型"],\n'
        f'    content: [\n{para_lines}\n    ],\n'
        f'  }},\n'
    )
    new_content = content[:insert_pos] + new_entry + content[insert_pos:]
    with open(blog_post_tsx, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  > BlogPost.tsx 已新增 slug={post['slug']}")
    return True


def git_commit_and_push(post, project_root):
    try:
        subprocess.run(
            ["git", "add", "client/src/pages/Blog.tsx", "client/src/pages/BlogPost.tsx"],
            cwd=project_root, check=True,
        )
        subprocess.run(
            ["git", "commit", "-m", f"feat: 發佈新文章 - {post['title']}"],
            cwd=project_root, check=True,
        )
        subprocess.run(["git", "push", "origin", "main"], cwd=project_root, check=True)
        print("  > Git push 成功")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ! Git 操作失敗: {e}")
        return False


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    no_push = "--no-push" in sys.argv

    if len(args) < 2:
        print("用法: python3 publish_blog.py <markdown_file_path> <cover_image_url> [--no-push]")
        sys.exit(1)

    md_path, cover_url = args[0], args[1]
    project_root = os.path.dirname(os.path.abspath(__file__))

    if not os.path.exists(md_path):
        print(f"找不到檔案: {md_path}")
        sys.exit(1)

    print(f"\n處理中: {md_path}")
    post = parse_markdown(md_path)
    print(f"  標題: {post['title']}")
    print(f"  Slug: {post['slug']}")
    print(f"  段落數: {len(post['paragraphs'])}")

    if not update_blog_tsx(post, cover_url, project_root):
        sys.exit(1)
    if not update_blog_post_tsx(post, cover_url, project_root):
        sys.exit(1)

    if not no_push:
        if not git_commit_and_push(post, project_root):
            sys.exit(1)
    else:
        print("  > 已跳過 git push (--no-push)")

    print(f"\n✅ 完成: {post['title']}")
    if not no_push:
        print("\n⚠️  請至 Manus 控制台點擊「Publish」按鈕，讓變更生效至線上 unima.com.tw")


if __name__ == "__main__":
    main()
