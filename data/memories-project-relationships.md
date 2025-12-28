# Project Relationships Diagram

## Primary Network Diagram

```mermaid
graph TD
    Cameron[Cameron Stewart<br/>The Waffle Co]

    %% Business Operations
    Cameron --> Business[Business Operations<br/>PowerApps, Xero, Consulting]
    Cameron --> Legal[Legal Templates<br/>International NDAs]

    %% Academic
    Cameron --> Academic[Academic Studies<br/>MIS Masters - CSU]
    Academic --> INF501[INF501 Assessment<br/>Corporate Info Services]
    Academic --> Courses[INF561/562/567<br/>Due Dec-Jan 2025]
    Academic --> Research[Research Interests<br/>Business-as-Code, Semantics]

    %% Career
    Cameron --> Career[Career Development<br/>Executive Roles]
    Career -.credentials.-> Academic
    Career -.clearance.-> NV1[NV1 Security Clearance]

    %% Client Work
    Cameron --> SOPE_Work[SOPE Contracting]
    SOPE_Work --> KC[Kimberly-Clark Project<br/>E-commerce Content]

    %% Legal Disputes - Critical Path
    Cameron --> Disputes[Legal Disputes<br/>$108-121K Total]
    Disputes --> SOPE_Dispute[SOPE Payment Dispute<br/>$93-105K unpaid]
    Disputes --> Forge[Forge Outdoors<br/>$15-16K PowerBI]

    SOPE_Work -.conflict.-> SOPE_Dispute
    KC -.reassignment.-> SOPE_Dispute

    %% Financial Impact
    SOPE_Dispute --> Cash[Cash Flow Crisis]
    Cash --> ATO[ATO Debt<br/>Tax Obligations]
    Cash --> SGC[Superannuation<br/>Guarantee Issues]
    Cash -.threatens.-> Business

    %% Technical Projects
    Cameron --> Tech[Technical Development]
    Tech --> Agents[Multi-Agent Systems<br/>Organizational AI]
    Tech --> Edu_Research[University AI Programs<br/>Research]

    %% Other Issues
    Cameron --> Contract_Issues[Contract Issues<br/>WorkPro Biometric]
    Cameron --> Business_Models[Business Model Research<br/>Expert-Led Consulting]

    %% Styling
    classDef critical fill:#ff6b6b,stroke:#c92a2a,color:#fff
    classDef financial fill:#ffd43b,stroke:#f59f00,color:#000
    classDef academic fill:#74c0fc,stroke:#1971c2,color:#000
    classDef business fill:#b2f2bb,stroke:#2f9e44,color:#000
    classDef tech fill:#d0bfff,stroke:#7950f2,color:#fff

    class SOPE_Dispute,Forge,Disputes critical
    class Cash,ATO,SGC financial
    class Academic,INF501,Courses,Research academic
    class Business,SOPE_Work,KC business
    class Agents,Tech,Edu_Research tech
```

## Temporal Relationships

```mermaid
gantt
    title Critical Timeline - Dec 2025 to Jan 2026
    dateFormat YYYY-MM-DD

    section Academic
    INF561/562/567 Assessments    :crit, 2025-12-22, 2025-12-23
    Additional Assessments         :crit, 2026-01-26, 2026-01-28

    section Legal
    SOPE Dispute Active           :active, 2025-12-01, 2026-01-31
    Fair Work Deadline            :milestone, 2026-01-23, 0d
    Forge Debt Collection         :2025-11-01, 2026-02-28

    section Business
    Contract Termination (SOPE)   :milestone, 2026-01-01, 0d
    Cash Flow Crisis              :crit, 2025-12-01, 2026-01-31
    ATO Debt Resolution           :2025-12-15, 2026-03-31

    section Career
    Executive Job Applications    :2025-12-01, 2026-02-28
    Woodside Opportunity          :2025-12-15, 2026-01-15
```

## Stakeholder Network

```mermaid
graph LR
    Cameron[Cameron Stewart]

    %% Primary Business Entity
    Cameron --> Waffle[The Waffle Co<br/>ABN: 42 642 737 406]

    %% Clients/Partners
    Waffle --> SOPE[SOPE Web Technologies<br/>CEO: Trent Allday<br/>PM: Ashley Kenny]
    SOPE --> KC[Kimberly-Clark]
    SOPE --> ARPC[ARPC]

    Waffle --> Forge[Forge Outdoors<br/>Adrian Trimmer, Nina Wilson]
    Waffle --> Other_Clients[Other Clients<br/>TORObLACK, Pivotel]

    %% Legal/Financial
    Cameron --> Slater[Slater Byrne Recoveries<br/>Shaun Lunn]
    Slater -.vs.-> Forge

    Cameron --> ATO[Australian Tax Office<br/>Debts & SGC]

    %% Academic
    Cameron --> CSU[Charles Sturt University<br/>Master of Info Studies]

    %% Professional Network
    Cameron --> Recruiters[Recruitment Network<br/>Hays, StepChange<br/>Peoplebank, Ignite]

    %% Tools/Services
    Cameron --> Tools[Core Tools<br/>Xero, Obsidian<br/>SharePoint, Claude<br/>Power BI, Zotero]

    classDef dispute fill:#ff6b6b,stroke:#c92a2a,color:#fff
    classDef partner fill:#b2f2bb,stroke:#2f9e44,color:#000
    classDef service fill:#d0bfff,stroke:#7950f2,color:#fff

    class SOPE,Forge dispute
    class KC,ARPC,Other_Clients partner
    class Tools,Slater,CSU service
```

## Project Categorization by Status

```mermaid
mindmap
  root((Cameron<br/>13 Projects))
    CRITICAL_URGENT
      SOPE Dispute $93-105K
      Cash Flow Crisis
      Academic Deadlines Dec-Jan
      ATO/SGC Compliance
    ACTIVE_ONGOING
      Career Development
      Academic Studies MIS
      Multi-Agent Systems Dev
      Business Operations
    RESOLUTION_PHASE
      Forge Debt Collection $15-16K
      Kimberly-Clark Complaint
    RESEARCH_EXPLORATION
      Business-as-Code Research
      University AI Programs
      Business Model Innovation
      Contract Issues Analysis
```

## Financial Flow Diagram

```mermaid
graph TB
    subgraph Revenue_Expected [Expected Revenue - BLOCKED]
        SOPE_KC[SOPE - KC Project<br/>Invoice B-4147]
        SOPE_ARPC[SOPE - ARPC Project<br/>Invoice B-4148]
        Forge_Invoice[Forge Outdoors<br/>PowerBI Work<br/>$15-16K]
        Total_AR[Total AR: $108-121K]
    end

    subgraph Expenses_Due [Immediate Obligations]
        ATO_Tax[ATO Tax Debt]
        SGC_Super[Superannuation Guarantee<br/>Sep 2022 - Mar 2025]
        Xero_Costs[Xero Subscription<br/>Downgraded to $35/mo]
        Operating[Operating Expenses]
    end

    subgraph Business_Impact [Business Impact]
        Insolvency[Potential Insolvency<br/>Risk]
        Operations[Limited Operations<br/>Capacity]
    end

    SOPE_KC -.blocked.-> Total_AR
    SOPE_ARPC -.blocked.-> Total_AR
    Forge_Invoice -.collection.-> Total_AR

    Total_AR -.needed for.-> ATO_Tax
    Total_AR -.needed for.-> SGC_Super

    ATO_Tax --> Insolvency
    SGC_Super --> Insolvency
    Operating --> Operations
    Insolvency -.threatens.-> WaffleCo[The Waffle Co<br/>Survival]

    classDef blocked fill:#ff6b6b,stroke:#c92a2a,color:#fff
    classDef debt fill:#ffd43b,stroke:#f59f00,color:#000
    classDef impact fill:#ff8787,stroke:#fa5252,color:#fff

    class SOPE_KC,SOPE_ARPC,Forge_Invoice blocked
    class ATO_Tax,SGC_Super,Operating debt
    class Insolvency,Operations,WaffleCo impact
```

---

## Key Relationship Patterns Identified

### 1. **SOPE Centrality**
- Appears in 4 separate project memories
- Creates direct connection between client work and legal disputes
- Root cause of financial crisis affecting business operations

### 2. **Financial Cascade**
- Unpaid invoices → Cash flow crisis → ATO debt → Potential insolvency
- Multiple feedback loops amplifying financial pressure

### 3. **Academic-Career Integration**
- MIS studies provide credentials for executive roles
- Research interests inform business development
- Time pressure from assessments during critical business period

### 4. **Legal Complexity**
- Two major disputes totaling $108-121K
- Multiple legal mechanisms (debt collection, promissory estoppel, Fair Work)
- Professional relationship damage limiting future opportunities

### 5. **Tool Ecosystem**
- Highly integrated: Xero, Obsidian, SharePoint, Claude form interconnected workflow
- Documentation-heavy approach across all projects
- Systematic evidence preservation for legal matters
