# Project Mapping to Existing Repositories

**Strategy:** Use existing repos with organized directory structures instead of creating new repos.

---

## 📁 Repository: `waffle-company-apqc`
**Rename to:** `Business-Operations` (optional)
**Purpose:** All business consulting, client work, and operations

### Directory Structure:
```
waffle-company-apqc/
├── apqc/
│   └── [existing APQC agent content]
├── twc/                          # The Workspace Company projects (8 projects, 18 docs)
│   ├── client-posture-doctor/    # 9 docs - Integration
│   ├── financials/               # 0 docs
│   ├── marketing/                # 4 docs
│   ├── operations/               # 1 doc
│   ├── people/                   # 1 doc - HR and recruitment
│   ├── proposals/                # 0 docs
│   ├── sales/                    # 1 doc
│   └── business-development/     # 2 docs - Business Improvement
├── clients/                      # Major client projects (8 projects, 232 docs)
│   ├── jeerau/                   # 200 docs - 🔥 LARGEST
│   ├── ipc-health/               # 15 docs - SharePoint service directory
│   ├── elle-health/              # 0 docs
│   ├── derwent/                  # 1 doc - Launch PowerApp
│   ├── derwent-xero-integration/ # 3 docs - Automation
│   ├── kimberly-clark/           # 5 docs - Supplier justification review
│   ├── new-age-support/          # 6 docs - QU-0338 Power Automate
│   └── ufinancial-demo/          # 2 docs - POC PowerShell
├── legal/                        # Legal & disputes (4 projects, 22 docs)
│   ├── forge/                    # 0 docs
│   ├── forge-non-payment/        # 12 docs
│   ├── forge-waterfall/          # 0 docs
│   └── sope-dispute/             # 10 docs
└── ventures/                     # Business ventures (5 projects, 2 docs)
    ├── toroblack-coffee/         # 0 docs - Perth coffee roasters
    ├── steel-frame-homes/        # 1 doc
    ├── happy-base/               # 1 doc
    ├── happybase/                # 0 docs
    └── business-development/     # 0 docs - General business help
```

**Total:** 25 projects, 274 documents

---

## 📁 Repository: `Learning-AI`
**Purpose:** AI development, research, education, and academic work

### Directory Structure:
```
Learning-AI/
├── education/                    # Academic work (3 projects, 26 docs)
│   ├── csu-3710us01/             # 15 docs - Master of Information Studies
│   ├── inf561/                   # 11 docs - University assignment
│   └── masters-ai-research/      # 0 docs - Research notes
├── ai-development/               # AI projects (8 projects, 20 docs)
│   ├── agentic-system/           # 3 docs
│   ├── ai-army/                  # 9 docs
│   ├── claude-code/              # 1 doc
│   ├── how-to-use-claude/        # 1 doc - Example project guide
│   ├── local-ai/                 # 1 doc
│   ├── business-as-code/         # 1 doc - Verbs and nouns
│   ├── ibis-extractor/           # 2 docs - IBIS Analysis
│   └── fasthml/                  # 2 docs
├── career/                       # Job applications (7 projects, 31 docs)
│   ├── job-applications/         # 17 docs - General applications
│   ├── asic-job/                 # 0 docs - Application prep
│   ├── deloitte-interview/       # 0 docs - Senior Analyst Risk & Regulatory
│   ├── housing-job/              # 0 docs - Review org context
│   ├── infosys-job/              # 4 docs - Information architect
│   ├── afp/                      # 10 docs - Australia Federal Police
│   └── arpc/                     # 0 docs
└── guides/
    └── claude-usage/             # How to use Claude effectively
```

**Total:** 18 projects, 77 documents

---

## 📁 Repository: `File-Shares`
**Purpose:** File share analysis and Microsoft solutions

### Directory Structure:
```
File-Shares/
├── analysis/                     # Existing file share analysis
├── microsoft-solutions/          # Microsoft projects (5 projects, 9 docs)
│   ├── purview-implementation/   # 9 docs - Records management
│   ├── purview/                  # 0 docs
│   ├── opal-consultation-hub/    # 0 docs - SharePoint Portal
│   ├── document-hub-opal/        # 0 docs - SharePoint Portal
│   └── power-apps-estimation/    # 0 docs - Forms, Workflows evaluation
└── tools/
    └── folderstats/              # Python module integration
```

**Total:** 5 projects, 9 documents

---

## 📁 Repository: `church_data`
**Purpose:** Church and community data

### Directory Structure:
```
church_data/
└── [existing church data content]
```

**Total:** 0 new projects (no church projects in export)

---

## 📁 Repository: `cameronstewart` (Personal)
**Purpose:** Personal projects and miscellaneous

### Directory Structure:
```
cameronstewart/
├── personal/                     # Personal projects (5 projects, 0 docs)
│   ├── 1-sooty-lane/             # 0 docs
│   ├── health/                   # 0 docs
│   ├── character-design/         # 0 docs
│   ├── meeting-recorder/         # 0 docs
│   └── document-set/             # 0 docs
├── government/                   # Government research (2 projects, 0 docs)
│   ├── au-legislation/           # 0 docs
│   └── pmhc/                     # 0 docs
└── tech-research/                # Technology research (4 projects, 4 docs)
    ├── document-driven-design/   # 0 docs
    ├── master-hugo/              # 0 docs
    ├── www/                      # 4 docs
    └── yha-phone-report/         # 0 docs - Power BI
```

**Total:** 11 projects, 4 documents

---

## 📁 Repository: `Claude-Insights` (This repo)
**Purpose:** Keep as the master index and analysis hub

### Directory Structure:
```
Claude-Insights/
├── data/
│   └── projects.json             # Master export file
├── analysis/
│   ├── project-repo-mapping.md
│   └── project-to-existing-repo-mapping.md
├── scripts/
│   └── extract-projects.py       # To be created
└── README.md                     # Overview of all projects
```

**Total:** Keep analysis and tooling here

---

## 📁 Repositories with Potential Integration

### `langextract` - LLM extraction library
- **Candidate:** IBIS Extractor project (2 docs)
- **Action:** Add as example/use case in docs

### `n8n` - Workflow automation fork
- **Candidate:** Agentic System, AI Army (if workflow-related)
- **Action:** Review content, add if relevant

### `markdown-site` - AI agent publishing
- **Candidate:** Claude guides, AI development docs
- **Action:** Publish selected content

### `scholar-lite` - Academic portal
- **Candidate:** Masters research, academic papers
- **Action:** Consider as alternative to Learning-AI for education content

---

## 📋 Unmapped / Unclear (4 projects, 0 docs)

| Project | Docs | Notes | Suggested Repo |
|---------|------|-------|----------------|
| Viva | 0 | No context | `cameronstewart/personal/viva/` |
| KCC | 0 | Duplicate of Kimberly Clark? | Delete or merge |
| Opportunity History Rework | 0 | Power Query fixes | `File-Shares/microsoft-solutions/` |
| Risk Management | 0 | No content yet | `waffle-company-apqc/risk-management/` |

---

## 📊 Summary by Repository

| Repository | Projects | Docs | Priority |
|-----------|----------|------|----------|
| `waffle-company-apqc` | 25 | 274 | 🔥 HIGH (includes JEERAU 200 docs) |
| `Learning-AI` | 18 | 77 | 🔥 HIGH (career + education) |
| `File-Shares` | 5 | 9 | ⚡ MEDIUM |
| `cameronstewart` | 11 | 4 | 📋 LOW (mostly empty) |
| `Claude-Insights` | - | - | Analysis hub |
| Other integrations | 3-5 | varies | Optional |

**Total Mapped:** 59+ projects, 364+ documents

---

## 🚀 Migration Action Plan

### Phase 1: High Priority (274+ docs)
1. **waffle-company-apqc** restructure:
   ```bash
   # Rename repo (optional)
   # Create directory structure
   # Extract JEERAU (200 docs) first
   # Add TWC projects (18 docs)
   # Add client projects (54 docs)
   # Add legal cases (22 docs)
   ```

### Phase 2: Medium Priority (77 docs)
2. **Learning-AI** expansion:
   ```bash
   # Add education directory (26 docs)
   # Add AI development (20 docs)
   # Add career portfolio (31 docs)
   ```

### Phase 3: Low Priority (13 docs)
3. **File-Shares** enhancement:
   ```bash
   # Add Microsoft solutions (9 docs)
   ```

4. **cameronstewart** personal:
   ```bash
   # Add misc projects (4 docs)
   ```

---

## 🛠️ Next Steps

Would you like me to:

1. **Create extraction script** that:
   - Reads projects.json
   - Extracts projects by category
   - Creates markdown files in correct repo directory structure
   - Preserves metadata (dates, creators, etc.)

2. **Generate migration commands** for each repo:
   - Directory creation
   - File placement
   - Git commits per project

3. **Build specific migration** (e.g., start with JEERAU → waffle-company-apqc)?

4. **Create README templates** for each new directory?

---

## Example: JEERAU Migration

```bash
# In waffle-company-apqc repo
mkdir -p clients/jeerau/docs
cd clients/jeerau

# Extract 200 documents
# Create index.md with project metadata
# Organize docs by type/date
# Commit with descriptive message
```

Each document becomes:
```
clients/jeerau/docs/
├── 001-document-name.md
├── 002-another-doc.md
├── ...
└── 200-final-doc.md
```

With frontmatter:
```markdown
---
title: Document Name
created: 2025-06-15T10:30:00Z
project: JEERAU
uuid: abc-123
---

[document content]
```
