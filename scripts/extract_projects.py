#!/usr/bin/env python3
"""
Extract projects from projects.json and organize into repository directory structures.

Usage:
    python extract_projects.py --project "JEERAU" --output-dir /path/to/waffle-company-apqc/clients/jeerau
    python extract_projects.py --category twc --output-dir /path/to/waffle-company-apqc/twc
    python extract_projects.py --all --base-dir /path/to/repos
"""

import json
import argparse
import os
from pathlib import Path
from datetime import datetime
import re
import sys

# Project to repository mapping
PROJECT_MAPPING = {
    # waffle-company-apqc repo
    "twc": {
        "repo": "waffle-company-apqc",
        "base_dir": "twc",
        "projects": [
            "TWC - Client Posture Doctor",
            "TWC - Financials $",
            "TWC - Marketing",
            "TWC - Operations",
            "TWC - People",
            "TWC - Proposals",
            "TWC - Sales",
            "TWC Business Development for my Business"
        ]
    },
    "clients": {
        "repo": "waffle-company-apqc",
        "base_dir": "clients",
        "projects": [
            "JEERAU",
            "IPC Health",
            "Derwent",
            "Derwent Xero Integration",
            "Kimberly Clark Global Ethics",
            "QU-0338 - Power Automate Dataverse Consulting Services - New Age Support",
            "UFinancial Demo",
            "YHA - Phone Report PBIX"
        ]
    },
    "legal": {
        "repo": "waffle-company-apqc",
        "base_dir": "legal",
        "projects": [
            "FORGE",
            "Forge Non Payment",
            "Forge Waterfall",
            "SOPE Dispute"
        ]
    },
    "ventures": {
        "repo": "waffle-company-apqc",
        "base_dir": "ventures",
        "projects": [
            "Toroblack Coffee",
            "Steel Frame Homes",
            "Happy base",
            "HappyBase",
            "Business Development"
        ]
    },
    # Learning-AI repo
    "education": {
        "repo": "Learning-AI",
        "base_dir": "education",
        "projects": [
            "CSU 3710US01 - Master of Information Studies",
            "INF561 - Foundations for Information Studies -  Assessment item 2 - Report: Information sector investigations",
            "Masters AI Research"
        ]
    },
    "ai-development": {
        "repo": "Learning-AI",
        "base_dir": "ai-development",
        "projects": [
            "Agentic System",
            "Ai Army",
            "Claude code",
            "How to use Claude",
            "Local AI",
            "Business As Code",
            "IBIS Extractor",
            "Fasthml"
        ]
    },
    "career": {
        "repo": "Learning-AI",
        "base_dir": "career",
        "projects": [
            "Job Applications",
            "ASIC Job",
            "Dolitte Interview",
            "Housing Job Application",
            "Infosys Job",
            "Australia Federal Police",
            "ARPC"
        ]
    },
    # File-Shares repo
    "microsoft-solutions": {
        "repo": "File-Shares",
        "base_dir": "microsoft-solutions",
        "projects": [
            "Purview Implementation",
            "Purview",
            "OPAL - Consultation Hub",
            "Document Hub - Opal",
            "Forms, Workflows, Power Apps Estimation"
        ]
    },
    # cameronstewart repo
    "personal": {
        "repo": "cameronstewart",
        "base_dir": "personal",
        "projects": [
            "1 Sooty Lane",
            "Personal - Health",
            "Character Design",
            "Meeting Recorder",
            "Document Set",
            "Elle Health"
        ]
    },
    "government": {
        "repo": "cameronstewart",
        "base_dir": "government",
        "projects": [
            "AU Legislation",
            "PMHC"
        ]
    },
    "tech-research": {
        "repo": "cameronstewart",
        "base_dir": "tech-research",
        "projects": [
            "Document Driven Design",
            "Master Hugo",
            "WWW"
        ]
    }
}


def slugify(text):
    """Convert text to filesystem-safe slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def load_projects(json_path):
    """Load projects from JSON file."""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def create_markdown_doc(doc, index, project_name, project_uuid):
    """Create markdown content from document with frontmatter."""
    filename = doc.get('filename', f'document-{index:03d}')
    content = doc.get('content', '')
    created_at = doc.get('created_at', '')
    doc_uuid = doc.get('uuid', '')

    frontmatter = f"""---
title: "{filename}"
project: "{project_name}"
project_uuid: "{project_uuid}"
doc_uuid: "{doc_uuid}"
created_at: "{created_at}"
doc_index: {index}
---

"""

    return frontmatter + content


def create_project_readme(project, doc_count, category):
    """Create README.md for project directory."""
    name = project['name']
    description = project.get('description', 'No description')
    created_at = project.get('created_at', '')
    updated_at = project.get('updated_at', '')
    uuid = project.get('uuid', '')
    creator = project.get('creator', {}).get('full_name', 'Unknown')

    readme = f"""# {name}

**Description:** {description}

## Project Information

- **UUID:** `{uuid}`
- **Creator:** {creator}
- **Created:** {created_at}
- **Updated:** {updated_at}
- **Category:** {category}
- **Documents:** {doc_count}

## Documents

This project contains {doc_count} document(s). Each document is stored as a separate markdown file with metadata in the frontmatter.

## Original Export

This project was extracted from Claude Projects export on {datetime.now().strftime('%Y-%m-%d')}.

"""

    return readme


def extract_project(project, output_dir, category):
    """Extract a single project to output directory."""
    project_name = project['name']
    project_slug = slugify(project_name)
    docs = project.get('docs', [])

    # Create project directory
    project_dir = Path(output_dir) / project_slug
    project_dir.mkdir(parents=True, exist_ok=True)

    # Create docs subdirectory if there are documents
    if docs:
        docs_dir = project_dir / 'docs'
        docs_dir.mkdir(exist_ok=True)

        # Extract each document
        for idx, doc in enumerate(docs, 1):
            doc_filename = f"{idx:03d}-{slugify(doc.get('filename', 'document'))}.md"
            doc_path = docs_dir / doc_filename

            doc_content = create_markdown_doc(doc, idx, project_name, project['uuid'])

            with open(doc_path, 'w', encoding='utf-8') as f:
                f.write(doc_content)

            print(f"  ✓ Created: {doc_path}")

    # Create README.md
    readme_path = project_dir / 'README.md'
    readme_content = create_project_readme(project, len(docs), category)

    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)

    print(f"  ✓ Created: {readme_path}")

    return len(docs)


def extract_by_project_name(projects_data, project_name, output_dir):
    """Extract a specific project by name."""
    for project in projects_data:
        if project['name'] == project_name:
            print(f"\n📦 Extracting project: {project_name}")
            print(f"   Output: {output_dir}")

            # Find category for this project
            category = "unknown"
            for cat, info in PROJECT_MAPPING.items():
                if project_name in info['projects']:
                    category = cat
                    break

            doc_count = extract_project(project, output_dir, category)
            print(f"\n✅ Extracted {doc_count} documents")
            return True

    print(f"❌ Project '{project_name}' not found")
    return False


def extract_by_category(projects_data, category, output_dir):
    """Extract all projects in a category."""
    if category not in PROJECT_MAPPING:
        print(f"❌ Category '{category}' not found")
        print(f"Available categories: {', '.join(PROJECT_MAPPING.keys())}")
        return False

    category_info = PROJECT_MAPPING[category]
    project_names = category_info['projects']

    print(f"\n📦 Extracting category: {category}")
    print(f"   Repository: {category_info['repo']}")
    print(f"   Base directory: {category_info['base_dir']}")
    print(f"   Projects: {len(project_names)}")
    print(f"   Output: {output_dir}")

    total_docs = 0
    extracted_count = 0

    for project_name in project_names:
        # Find project in data
        project = None
        for p in projects_data:
            if p['name'] == project_name:
                project = p
                break

        if not project:
            print(f"\n⚠️  Project '{project_name}' not found in data")
            continue

        print(f"\n  📄 {project_name} ({len(project.get('docs', []))} docs)")
        doc_count = extract_project(project, output_dir, category)
        total_docs += doc_count
        extracted_count += 1

    print(f"\n✅ Extracted {extracted_count} projects, {total_docs} total documents")
    return True


def extract_all(projects_data, base_dir):
    """Extract all projects to their respective repositories."""
    print(f"\n📦 Extracting ALL projects")
    print(f"   Base directory: {base_dir}\n")

    stats = {}

    for category, info in PROJECT_MAPPING.items():
        repo = info['repo']
        base_path = info['base_dir']

        # Create output directory
        output_dir = Path(base_dir) / repo / base_path

        print(f"\n{'='*60}")
        print(f"Category: {category} → {repo}/{base_path}")
        print(f"{'='*60}")

        category_docs = 0
        category_projects = 0

        for project_name in info['projects']:
            # Find project
            project = None
            for p in projects_data:
                if p['name'] == project_name:
                    project = p
                    break

            if not project:
                print(f"  ⚠️  '{project_name}' not found")
                continue

            doc_count = len(project.get('docs', []))
            print(f"\n  📄 {project_name} ({doc_count} docs)")

            docs_extracted = extract_project(project, output_dir, category)
            category_docs += docs_extracted
            category_projects += 1

        stats[category] = {
            'repo': repo,
            'projects': category_projects,
            'docs': category_docs
        }

    # Print summary
    print(f"\n\n{'='*60}")
    print("EXTRACTION SUMMARY")
    print(f"{'='*60}\n")

    repo_stats = {}
    for category, data in stats.items():
        repo = data['repo']
        if repo not in repo_stats:
            repo_stats[repo] = {'projects': 0, 'docs': 0, 'categories': []}
        repo_stats[repo]['projects'] += data['projects']
        repo_stats[repo]['docs'] += data['docs']
        repo_stats[repo]['categories'].append(f"{category} ({data['projects']} projects, {data['docs']} docs)")

    for repo, data in repo_stats.items():
        print(f"\n📁 {repo}")
        print(f"   Total: {data['projects']} projects, {data['docs']} documents")
        for cat in data['categories']:
            print(f"   - {cat}")

    total_projects = sum(d['projects'] for d in stats.values())
    total_docs = sum(d['docs'] for d in stats.values())

    print(f"\n{'='*60}")
    print(f"✅ TOTAL: {total_projects} projects, {total_docs} documents")
    print(f"{'='*60}\n")


def main():
    parser = argparse.ArgumentParser(
        description='Extract Claude projects to repository directories'
    )
    parser.add_argument(
        '--json',
        default='./data/projects.json',
        help='Path to projects.json file'
    )
    parser.add_argument(
        '--project',
        help='Extract specific project by name (e.g., "JEERAU")'
    )
    parser.add_argument(
        '--category',
        help='Extract all projects in category (e.g., "twc", "clients", "education")'
    )
    parser.add_argument(
        '--all',
        action='store_true',
        help='Extract all projects to their repositories'
    )
    parser.add_argument(
        '--output-dir',
        help='Output directory for extracted project(s)'
    )
    parser.add_argument(
        '--base-dir',
        help='Base directory containing all repos (for --all mode)'
    )
    parser.add_argument(
        '--list-categories',
        action='store_true',
        help='List all available categories'
    )

    args = parser.parse_args()

    # List categories
    if args.list_categories:
        print("\nAvailable categories:\n")
        for category, info in PROJECT_MAPPING.items():
            print(f"  {category}")
            print(f"    Repository: {info['repo']}")
            print(f"    Base path: {info['base_dir']}")
            print(f"    Projects: {len(info['projects'])}")
            print()
        return

    # Load projects data
    if not os.path.exists(args.json):
        print(f"❌ Error: {args.json} not found")
        sys.exit(1)

    print(f"📖 Loading projects from: {args.json}")
    projects_data = load_projects(args.json)
    print(f"   Found {len(projects_data)} projects\n")

    # Execute based on mode
    if args.all:
        if not args.base_dir:
            print("❌ Error: --base-dir required for --all mode")
            sys.exit(1)
        extract_all(projects_data, args.base_dir)

    elif args.project:
        if not args.output_dir:
            print("❌ Error: --output-dir required for --project mode")
            sys.exit(1)
        extract_by_project_name(projects_data, args.project, args.output_dir)

    elif args.category:
        if not args.output_dir:
            print("❌ Error: --output-dir required for --category mode")
            sys.exit(1)
        extract_by_category(projects_data, args.category, args.output_dir)

    else:
        parser.print_help()
        print("\n💡 Examples:")
        print("  # Extract JEERAU project")
        print('  python extract_projects.py --project "JEERAU" --output-dir ./output/clients')
        print("\n  # Extract all TWC projects")
        print('  python extract_projects.py --category twc --output-dir ./output/twc')
        print("\n  # Extract everything")
        print('  python extract_projects.py --all --base-dir ~/repos')
        print("\n  # List categories")
        print('  python extract_projects.py --list-categories')


if __name__ == '__main__':
    main()
