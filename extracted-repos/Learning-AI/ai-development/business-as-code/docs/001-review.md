---
title: "Review"
project: "Business As Code"
project_uuid: "019b2299-0f28-7612-a2ff-6586795e6022"
doc_uuid: "fd03f1ba-80a1-4226-bb5f-344b93926c05"
created_at: "2025-12-15T15:20:38.437940+00:00"
doc_index: 1
---

Review: Firm - "Business-as-Code" Tool
Executive Summary
Firm is an open-source CLI tool that implements "business-as-code" by representing business entities and relationships in plain-text DSL files stored locally and version-controlled.
GitHub: https://github.com/42futures/firm
Language: Rust (firm_core, firm_lang, firm_cli)
License: Likely open source (check repo)
What Firm Actually Does
Core Concept
Your business as a text-based graph database that you own and control
The Problem Firm Solves:
"Your data is scattered across SaaS tools you don't control, so you piece together answers by jumping between platforms."
The Solution:
Define your business entities and relationships in .firm DSL files:
person john_doe {
    name = "John Doe"
    email = "john@doe.com"
}

organization megacorp {
    name = "Megacorp Ltd."
    email = "mega@corp.com"
}

contact john_at_megacorp {
    person_ref = person.john_doe
    organization_ref = organization.megacorp
}
Architecture
Plain Text Files (.firm)
        ↓
    firm_lang (Parser)
        ↓
    firm_core (Entity Graph)
        ↓
    firm_cli (Query Interface)
        ↓
    Your Automations
Key Features
1. Own Your Data
Plain text files (not proprietary database)
Runs locally on your machine
Version control with Git
No vendor lock-in
No cloud dependencies
2. Graph-Based Model
Your business IS a graph:
Customers → Projects
Projects → Tasks
People → Organizations
Tasks → Deliverables
3. Rich Type System
my_task design_homepage {
    title = "Design new homepage"        // String
    priority = 1                         // Integer
    completed = false                    // Boolean
    budget = 5000.00 USD                 // Currency
    due_date = 2024-12-01 at 17:00 UTC   // DateTime
    tags = ["ui", "ux"]                  // List
    assignee = person.jane_doe           // Reference
    deliverable = path"./homepage.zip"   // Path
}
Supported Types:
String, Integer, Float, Boolean
Currency (with currency code)
DateTime (with timezone)
Lists
References (entity relationships)
File paths
4. Custom Schemas
Define your own entity types:
schema custom_project {
    field {
        name = "title"
        type = "string"
        required = true
    }
    field {
        name = "budget"
        type = "currency"
        required = false
    }
}

custom_project my_project {
    title  = "My custom project"
    budget = 42000 EUR
}
5. Built-in Entities
Pre-defined schemas for common business needs:
Person, Organization
Contact, Lead
Project, Task
Interaction, Document
Based on:
REA model (Resources, Events, Agents)
Schema.org inspiration
6. Query Interface
# List entities
$ firm list task

# Get single entity
$ firm get person john_doe

# Explore relationships
$ firm related contact john_doe
7. Programmable
Use as Rust library:
use firm_lang::workspace::Workspace;
use firm_core::EntityGraph;

let mut workspace = Workspace::new();
workspace.load_directory("./my_workspace")?;
let build = workspace.build()?;

let mut graph = EntityGraph::new();
graph.add_entities(build.entities)?;
graph.build();

let lead = graph.get_entity(&EntityId::new("lead.ai_validation_project"))?;
8. AI-Ready
"LLMs can read, write, and query your business structure"
Plain text DSL is:
Human-readable
Machine-parseable
LLM-friendly for generation/analysis
Comparison to Palantir's "Business as Code"
What Firm Does (Similar)
✅ Business entities as code
Plain text representation
Version controlled
Structured DSL
✅ Graph-based relationships
Entities connected by references
Traversable graph
Queryable connections
✅ Extensible schema
Custom entity types
Field validation
Type system
✅ Local ownership
Your data, your machine
No vendor lock-in
Open source
What Firm Doesn't Do (Palantir Advantage)
❌ No system orchestration
Doesn't call SAP, Salesforce, etc.
No integration with transactional systems
Not an execution engine
❌ No semantic reasoning
Graph traversal, not ontological inference
No rules engine
No automated decision-making
❌ No workflow automation
Doesn't trigger business processes
No action execution
No event-driven automation
❌ No UI/visualization
CLI only (no dashboards)
No process diagrams
No visual query builder
❌ No production orchestration
Data modeling tool, not runtime system
Can't execute business logic
No integration with enterprise systems
What Firm Actually Is
Best Description:
Local-first, text-based CRM/work management system with graph querying
Think of it as:
Airtable/Notion as plain text files
Personal CRM you own completely
Business metadata catalog
Structured note-taking for business entities
Graph database you can Git
NOT:
Business process automation platform
Workflow orchestration engine
Integration middleware
Palantir Foundry alternative
Strengths
1. Data Sovereignty
You truly own your data:
Plain text = readable forever
Git-compatible = full version history
No cloud = no privacy concerns
No subscription = no vendor leverage
2. Developer-Friendly
DSL is clean and readable
Rust implementation (fast, safe)
Library usage enables automation
CLI for quick operations
3. Flexible Schema
Define your own entity types
Not locked to predefined models
Extensible field types
Custom validation
4. Graph Model
Natural for business relationships
Traversable connections
No SQL joins needed
Query patterns built-in
5. Open Source
Inspect the code
Contribute changes
Fork if needed
No black box
Weaknesses
1. No Execution Layer
Critical limitation:
Models business, doesn't execute it
Can't trigger workflows
Can't integrate with other systems
Static data, not active processes
2. Local-Only
No collaboration features
No multi-user access
No concurrent editing
No cloud sync (by design, but limiting)
3. CLI-First
No GUI
Technical barrier for non-developers
No visual representation
Limited discoverability
4. Manual Maintenance
Must manually add/update entities
No auto-sync from other systems
No webhooks or integrations
Becomes stale without discipline
5. No Analytics/Reporting
Query one entity at a time
No aggregations mentioned
No reporting framework
No metrics/dashboards
6. Early Stage
Installation from GitHub releases
Limited documentation shown
Community size unclear
Production readiness uncertain
Use Cases
What Firm Is Good For:
✅ Personal/Small Team CRM
Track contacts, organizations
Manage opportunities
Version control your relationships
✅ Freelancer/Consultant Work Management
Track projects, clients
Manage tasks, deliverables
Own your business data
✅ Research/Knowledge Management
Connected note-taking
Bibliography management
Concept mapping
✅ Development/Prototyping
Model business domain
Prototype entity relationships
Generate test data
✅ Privacy-Focused Organizations
Healthcare, legal, sensitive data
Don't trust cloud providers
Need complete audit trail (Git)
What Firm Is NOT Good For:
❌ Enterprise Business Process Management
No workflow automation
No system integration
Can't orchestrate SAP, Salesforce
❌ Multi-User Collaboration
No real-time sync
No conflict resolution
No permission management
❌ Analytics/BI
Limited query capabilities
No aggregations
No visualization
❌ Production Systems
Not a transactional system
Not a workflow engine
Not an integration platform
Technical Assessment
Architecture: Well-Designed
Separation of Concerns:
firm_lang:  Parsing/generation (tree-sitter)
firm_core:  Data model and graph
firm_cli:   User interface
Good Practices:
Rust (memory-safe, performant)
Tree-sitter grammar (standard parser)
Clear separation of DSL from model
Entity graph as first-class concept
Extensibility:
Use as library (not just CLI)
Custom schemas
Programmatic access to graph
DSL: Clean and Expressive
Readable:
person john_doe {
    name = "John Doe"
    email = "john@doe.com"
}
Typed:
budget = 5000.00 USD
due_date = 2024-12-01 at 17:00 UTC
Relational:
assignee = person.jane_doe
Data Model: Solid Foundation
REA Model (Resources, Events, Agents):
Sound theoretical basis
Clear categorization
Flexible composition
Schema.org Inspiration:
Established vocabulary
Wide adoption
Interoperability potential
Separation of Concerns:
Fundamental entities (Person, Org)
Contextual entities (Contact, Lead)
References over inheritance
Comparison to Other Tools
vs. Airtable/Notion
Feature
Firm
Airtable/Notion
Data ownership
✓ Full
✗ Vendor-owned
Collaboration
✗ None
✓ Real-time
UI
✗ CLI only
✓ Rich GUI
Version control
✓ Git
✗ Limited
Offline
✓ Always
~ Cached
Cost
✓ Free
💰 Subscription
vs. Personal CRM (Monica, etc.)
Feature
Firm
Monica CRM
Self-hosted
✓ Yes
✓ Yes
Format
✓ Plain text
✗ Database
Extensible
✓ Custom schemas
~ Limited
Developer-friendly
✓ Library API
~ Web API
UI
✗ None
✓ Web UI
vs. Org-mode/Obsidian
Feature
Firm
Org-mode/Obsidian
Plain text
✓ DSL
✓ Markdown
Structured
✓✓ Typed
~ Loose
Graph
✓ Native
✓ Backlinks
Query
✓ CLI
~ Search
Programmatic
✓ Rust API
~ Limited
Research Relevance
For Your MIS Research:
What Firm Demonstrates:
Business entities CAN be represented as code
Plain text DSL works
Type system handles business concepts
References create relationships
Graph model fits business naturally
Entities are nodes
References are edges
Traversal enables queries
Local-first is viable
No cloud required
Git for versioning/collaboration
Developer-centric approach
The Gap Is Execution
Firm models business
Doesn't execute business
No system orchestration
No workflow automation
The Research Question This Raises:
What's the path from static business model to dynamic business execution?
Firm provides:
Semantic model (entities + schema)
Graph structure (relationships)
Query capability (traversal)
Firm lacks:
Execution engine (workflows)
System integration (orchestration)
Rules engine (automated decisions)
Real-time updates (event-driven)
This Is Your Research Territory:
The gap between:
Static business model (Firm)
Dynamic business orchestration (Palantir)
Questions:
What semantic layer bridges this gap?
How do ontological commitments enable/constrain execution?
Can declarative business models generate executable logic?
What's the relationship between data model and process model?
Verdict
What Firm Is:
✅ Excellent local-first business metadata tool
✅ Clean DSL for business entities
✅ Solid graph-based foundation
✅ Developer-friendly architecture
✅ True data ownership
What Firm Is Not:
❌ Business process automation platform
❌ Workflow orchestration engine
❌ Enterprise integration middleware
❌ Palantir Foundry alternative
Production Readiness:
⚠️ Early stage - Evaluate carefully:
Check GitHub activity
Assess community size
Review documentation
Test stability
Plan migration strategy if needed
Best Use:
Personal/small team knowledge management and relationship tracking with complete data ownership
Not for: Enterprise business automation, multi-user collaboration, or production workflows
Recommendations
For Evaluation:
Try it hands-on - Install and test with sample data
Check the repo - Issues, commits, community activity
Test edge cases - Large graphs, complex queries
Assess stability - Bug frequency, breaking changes
Plan exit strategy - Plain text makes migration easy
For Your Research:
Study the DSL - How business concepts map to syntax
Analyze the type system - What's expressible vs. constrained
Examine the graph model - How relationships are represented
Identify the gaps - What's needed for execution
Compare to Palantir - Where does ontology add value
For MIS Students:
This is a real-world example of:
Information architecture in practice
Semantic modeling of business domain
Trade-offs between local and cloud
Developer-centric information management
Study it to understand:
How business knowledge can be structured
What plain text enables (and limits)
The gap between model and execution
Why ontologies matter for complex systems
Final Assessment
Firm is a thoughtful, well-designed tool that solves a real problem for a specific audience.
Strengths: Data ownership, clean design, developer-friendly
Limitations: No execution, no collaboration, early stage
Best for: Personal/small team business metadata management
Not for: Enterprise automation or production workflows
Research Value: Demonstrates "business-as-code" concept but highlights the gap between static models and dynamic execution that your research could address.
Score: 7/10 for its niche, 4/10 as enterprise solution