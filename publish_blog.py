#!/usr/bin/env python3
import os
import re
import sys
import subprocess
from datetime import datetime

def parse_markdown_multi(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 以 --- 分隔多篇文章
    raw_posts = content.split("\n---")
    parsed_posts = []

    for raw in raw_posts:
        lines = raw.strip().split("\n")
        title = ""
        paragraphs = []
        current_para = []
        
        for line in lines:
            stripped = line.strip()
            if not title and stripped.startswith("# "):
                title = stripped[2:].strip()
                continue
            if not stripped:
                if current_para:
                    paragraphs.append("\n".join(current_para))
                    current_para = []
                continue
            current_para.append(stripped)
            
        if current_para:
            paragraphs.append("\n".join(current_para))

        # 根據標題關鍵字生成 slug
        slug = ""
        if "Deloitte" in title: slug = "deloitte-2026-ai"
        elif "HBR" in title: slug = "hbr-ai"
        elif "BCG" in title: slug = "bcg-2026"
        elif "併購" in title: slug = "it"
        elif "Gartner" in title: slug = "gartner-2026-ai"
        else: slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower()).strip("-")

        excerpt = paragraphs[0] if paragraphs else ""
        if len(excerpt) > 150: excerpt = excerpt[:147] + "..."

        parsed_posts.append({
            "title": title,
            "slug": slug,
            "excerpt": excerpt,
            "paragraphs": paragraphs,
            "date": datetime.now().strftime("%Y-%m-%d")
        })
    return parsed_posts

def js_escape(text):
    return text.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")

def update_files(posts, project_root):
    blog_tsx = os.path.join(project_root, "client/src/pages/Blog.tsx")
    blog_post_tsx = os.path.join(project_root, "client/src/pages/BlogPost.tsx")

    # 更新 Blog.tsx (列表摘要)
    with open(blog_tsx, "r", encoding="utf-8") as f:
        content = f.read()
    
    for post in posts:
        # 使用正則表達式尋找對應 slug 的 excerpt 並替換
        pattern = rf'(slug:\s*"{post["slug"]}",\s*title:\s*".*?",\s*excerpt:\s*").*?(")'
        replacement = rf'\1{js_escape(post["excerpt"])}\2'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(blog_tsx, "w", encoding="utf-8") as f:
        f.write(content)

    # 更新 BlogPost.tsx (詳細內容)
    with open(blog_post_tsx, "r", encoding="utf-8") as f:
        content = f.read()
    
    for post in posts:
        # 尋找對應 slug 的 content 陣列並替換
        para_js = ",\n".join([f'      "{js_escape(p)}"' for p in post["paragraphs"]])
        pattern = rf'"{post["slug"]}":\s*\{{.*?content:\s*\[.*?\]\s*,\s*\}}'
        replacement = f'"{post["slug"]}": {{\n    title: "{js_escape(post["title"])}",\n    date: "{post["date"]}",\n    readTime: "12 分鐘",\n    tags: ["深度洞察", "AI 策略"],\n    content: [\n{para_js}\n    ],\n  }}'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(blog_post_tsx, "w", encoding="utf-8") as f:
        f.write(content)

def main():
    md_path = sys.argv[1]
    project_root = os.path.dirname(os.path.abspath(__file__))
    posts = parse_markdown_multi(md_path)
    update_files(posts, project_root)
    print(f"成功更新 {len(posts)} 篇文章內容。")

if __name__ == "__main__":
    main()
