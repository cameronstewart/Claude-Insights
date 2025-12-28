---
title: "woodside_analysis.md"
project: "INF561 - Foundations for Information Studies -  Assessment item 2 - Report: Information sector investigations"
project_uuid: "019b1011-cc3c-73ef-957b-c1239d7280fa"
doc_uuid: "cdb44969-8355-472f-a8b1-14b1d24e6848"
created_at: "2025-12-12T01:34:53.024123+00:00"
doc_index: 9
---

# Woodside Information Management Service - Transcript Analysis

## Executive Summary

This transcript captures an interview for a **SharePoint/Information Management Specialist** role within Woodside's Digital team. The conversation reveals insights into Woodside's centralised information management service, its challenges, team structure, and strategic direction.

---

## 1. Roles Identified

### Internal Roles (Woodside)

| Role | Description | Current Holder |
|------|-------------|----------------|
| **Service Line Owner** | Oversees centralised IM service, governance frameworks | Julie (Interviewer) |
| **Information Management Specialist** | Focus on IM, document control, records management | Belinda |
| **Microsoft 365 Architect** | Technical architecture for M365 environment | Unnamed (on leave in January) |
| **SharePoint Functional Specialist** | Business requirements, site builds, consulting (ROLE BEING RECRUITED) | Outgoing staff member (5 years tenure) |
| **Managed Service Team** | Incidents, generic service requests, access permissions | Bangalore/Hyderabad team |

### External/Candidate Background

| Role Type | Experience Areas |
|-----------|------------------|
| **Consultant** | SharePoint implementations, migrations, governance frameworks |
| **Solution Architect** | DMS builds, classification schemes, metadata standards |
| **Change Manager** | Adoption, training, stakeholder engagement |

---

## 2. Processes Identified

### 2.1 Service Request Workflow

```mermaid
flowchart TD
    A[Business Request] --> B{Request Type?}
    B -->|Minor Enhancement| C[Service Now Queue]
    B -->|Large Project >1 month| D[Formal Project Methodology]
    
    C --> E[Triage & Assignment]
    E --> F{Complexity?}
    F -->|Simple| G[Managed Service Team<br/>Bangalore/Hyderabad]
    F -->|Functional/Consulting| H[Local Specialist Team]
    
    G --> I[Incident Resolution<br/>Access Permissions<br/>Generic Requests]
    
    H --> J[Requirements Gathering]
    J --> K[Design & Recommendations]
    K --> L{Build Required?}
    L -->|Yes| M[Site Build/Configuration]
    L -->|No| N[Guidance/Training]
    
    M --> O[Handover to Business]
    N --> O
    
    D --> P[Scoping]
    P --> Q[Resource Assignment]
    Q --> R[Project Delivery]
    R --> S[SME Input from Service Line]
    
    style H fill:#e1f5fe
    style G fill:#fff3e0
    style D fill:#f3e5f5
```

### 2.2 SharePoint Site Provisioning & Enhancement

```mermaid
flowchart TD
    A[Business Need Identified] --> B[Discovery Workshop]
    B --> C[Understand Pain Points]
    C --> D[Document Requirements]
    
    D --> E{Approach?}
    E -->|Quick Win| F[Out-of-box Features<br/>Already Available]
    E -->|Enhancement| G[Design Mock-up/POC]
    E -->|Restructure| H[Information Architecture Design]
    
    G --> I[Business Sign-off]
    H --> I
    
    I --> J[Site Build/Configuration]
    J --> K[Testing with Personas]
    K --> L{Acceptable?}
    L -->|No| J
    L -->|Yes| M[Change Management & Training]
    M --> N[Go Live]
    N --> O[Operational Support]
    
    style B fill:#e8f5e9
    style I fill:#fff9c4
    style M fill:#ffebee
```

### 2.3 Migration Process

```mermaid
flowchart TD
    A[Migration Trigger] --> B[Source Analysis]
    B --> C[Content Audit & Classification]
    C --> D[Risk Assessment]
    
    D --> E[Architecture Design]
    E --> F[Metadata Mapping]
    F --> G[Site/Library Structure]
    
    G --> H[Script Development]
    H --> I[Test Migration]
    I --> J{Validation}
    J -->|Fail| H
    J -->|Pass| K[Stakeholder Review]
    
    K --> L[Permission Testing<br/>Persona-based]
    L --> M{Security OK?}
    M -->|No| N[Remediation]
    N --> L
    M -->|Yes| O[Full Migration]
    
    O --> P[User Adoption & Training]
    P --> Q[Decommission Legacy]
    
    style D fill:#ffcdd2
    style L fill:#fff9c4
    style P fill:#c8e6c9
```

### 2.4 Records Management Lifecycle

```mermaid
flowchart TD
    A[Information Created] --> B[Classification]
    B --> C[Apply Retention Policy]
    C --> D[Active Use Phase]
    
    D --> E[Retention Period Expires]
    E --> F{Disposal Decision}
    
    F -->|High Risk| G[Risk-based Review]
    F -->|Low Risk| H[Retain - No Action]
    F -->|Must Dispose| I[Disposal Execution]
    
    G --> J{Confidence to Delete?}
    J -->|No - Missing Context| H
    J -->|Yes| I
    
    I --> K[Audit Trail]
    
    subgraph Purview Controls
        L[Sensitivity Labels]
        M[Automated Classification]
        N[PII Scrubbing]
        O[DLP Rules]
    end
    
    B --> L
    B --> M
    I --> N
    D --> O
    
    style F fill:#fff3e0
    style H fill:#ffcdd2
    style I fill:#c8e6c9
```

---

## 3. Systems Identified

```mermaid
graph TB
    subgraph "Core Platforms"
        SP[SharePoint Online]
        Teams[Microsoft Teams]
        M365[Microsoft 365]
    end
    
    subgraph "Governance & Compliance"
        PV[Microsoft Purview]
        DLP[Data Loss Prevention]
        SL[Sensitivity Labels]
    end
    
    subgraph "Service Management"
        SN[ServiceNow]
    end
    
    subgraph "Development & Migration Tools"
        PnP[PnP PowerShell]
        SG[ShareGate]
        PS[PowerShell Scripts]
    end
    
    subgraph "Content Management"
        Doc[Documentum]
        ES[Enterprise Search]
        Adobe[Adobe Products<br/>e.g. Adobe Sign]
    end
    
    subgraph "Physical Records"
        HCR[Hard Copy Records<br/>~70,000 cartons]
    end
    
    subgraph "AI/Emerging"
        CP[Microsoft Copilot]
    end
    
    SP --> Teams
    SP --> PV
    PV --> SL
    PV --> DLP
    SN --> SP
    PnP --> SP
    SG --> SP
    
    style SP fill:#0078d4,color:#fff
    style PV fill:#742774,color:#fff
    style CP fill:#10a37f,color:#fff
```

---

## 4. Challenges & Issues

### Strategic Challenges

| Challenge | Description | Impact |
|-----------|-------------|--------|
| **SharePoint Sprawl** | Uncontrolled site/content proliferation due to focus on usability | Findability issues, governance gaps |
| **90 Million Files** | Massive content volume in SharePoint | Storage costs, search performance, AI readiness |
| **AI Readiness** | Copilot adoption requires trusted vs untrusted content differentiation | Risk of AI hallucination on unreliable data |
| **Disposal Paralysis** | People lack context/confidence to make disposal decisions | Endless retention, storage costs |

### Operational Challenges

| Challenge | Description |
|-----------|-------------|
| **Scale vs Control** | Too large to control everything - must prioritise |
| **Legacy Content** | Inherited structures from 7+ year old implementations |
| **Third-party Collaboration** | Project spaces with external parties are complex |
| **Cross-skilling Gaps** | Small team needs coverage across multiple domains |
| **Change Management** | Technology is 20% of solution; 80% is people/process |

### Technical Challenges

| Challenge | Description |
|-----------|-------------|
| **Microsoft Feature Churn** | Constant new features require assessment (help or hinder?) |
| **Teams/SharePoint Confusion** | Historical confusion about where content belongs |
| **Customisation Debt** | Past customisations create upgrade/support issues |
| **Cloud Testing** | "It's live" - no sandbox for Purview/compliance changes |

---

## 5. Information Behaviour & Information Systems (IBIS) Analysis

```mermaid
mindmap
  root((Information<br/>Behaviour))
    Information Creation
      Document authoring
      Project deliverables
      Operational records
      Control documents
    Information Storage
      SharePoint sites
      Teams channels
      File shares legacy
      Physical cartons
    Information Seeking
      Enterprise search
      Site navigation
      Colleague asking
      Pain point: Cant find anything
    Information Sharing
      Internal collaboration
      Third-party project spaces
      Cross-site visibility
      Health & Safety best practice
    Information Governance
      Classification schemes
      Retention periods
      Sensitivity labels
      Disposal decisions
    Information Use
      Day-to-day operations
      Decision making
      Compliance evidence
      AI/Copilot consumption
```

### Key IBIS Observations

1. **Search Behaviour**: Users struggle with findability ("this is a mess, I can't find anything")
2. **Storage Behaviour**: Default to storing everything; disposal avoidance
3. **Classification Behaviour**: Inconsistent metadata application unless mandated
4. **Sharing Behaviour**: Sprawl indicates preference for creating new spaces vs reusing
5. **Trust Behaviour**: Need to differentiate trusted vs untrusted content for AI

---

## 6. Opportunities Identified

```mermaid
quadrantChart
    title Opportunity Assessment Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Strategic Wins
    quadrant-2 Quick Wins
    quadrant-3 Fill-ins
    quadrant-4 Major Projects
    
    "Quick SharePoint training": [0.25, 0.4]
    "OOB feature adoption": [0.3, 0.5]
    "Site consolidation": [0.5, 0.7]
    "Purview implementation": [0.75, 0.85]
    "AI-ready architecture": [0.85, 0.9]
    "Disposal automation": [0.7, 0.65]
    "Register to List conversion": [0.35, 0.6]
    "Control doc maturity": [0.55, 0.5]
```

### Detailed Opportunities

| Opportunity | Description | Value |
|-------------|-------------|-------|
| **Purview Records Management** | Embed retention controls across SharePoint | Risk reduction, compliance |
| **AI/Copilot Preparation** | Classify and structure content for AI consumption | Competitive advantage |
| **Site Consolidation** | Address sprawl through IA redesign | Improved findability |
| **Control Document Maturity** | Build on new service, increase adoption | Operational efficiency |
| **Register Conversion** | Transform Word/Excel registers to SharePoint Lists | Audit trails, data integrity |
| **Scan-on-Demand** | Reduce physical records through digitisation | Cost reduction |
| **Self-Service Enablement** | Coach users to manage own sites | Scale support capacity |

---

## 7. Strengths

| Strength | Evidence |
|----------|----------|
| **Established Governance Frameworks** | Documented processes, ITIL, service management standards |
| **Risk-based Approach** | Pragmatic prioritisation - focus on what matters |
| **Strong M365 Adoption** | "Wildly successful" platform rollout |
| **Dedicated Service Line** | Centralised ownership and accountability |
| **Managed Service Partnership** | Bangalore/Hyderabad team handles volume |
| **Outgoing Knowledge Transfer** | Previous role holder available for handover |
| **Executive Support** | AI/Copilot early adopter indicates leadership buy-in |
| **Flexibility Culture** | Work from home options, adaptable to urgent requests |

---

## 8. SWOT Analysis

```mermaid
quadrantChart
    title SWOT Analysis
    x-axis Harmful --> Helpful
    y-axis External --> Internal
    quadrant-1 Strengths
    quadrant-2 Weaknesses
    quadrant-3 Threats
    quadrant-4 Opportunities
    
    "Established frameworks": [0.75, 0.8]
    "Strong M365 adoption": [0.85, 0.7]
    "Dedicated service line": [0.7, 0.85]
    "Risk-based approach": [0.8, 0.75]
    "Content sprawl": [0.25, 0.8]
    "Disposal paralysis": [0.2, 0.7]
    "Small team capacity": [0.3, 0.85]
    "AI readiness gaps": [0.75, 0.25]
    "Copilot opportunity": [0.85, 0.3]
    "Microsoft feature velocity": [0.2, 0.2]
    "Regulatory pressure": [0.25, 0.15]
```

### SWOT Detail

| Category | Items |
|----------|-------|
| **Strengths** | Risk-based governance, Strong M365 adoption, Established service line, Documented standards, Executive support for digital |
| **Weaknesses** | Content sprawl (90M files), Small team capacity, Disposal decision paralysis, Legacy architecture debt, Cross-skilling gaps |
| **Opportunities** | AI/Copilot preparation, Purview records management, Site consolidation, Control document maturity, Physical records digitisation |
| **Threats** | Microsoft feature churn, Regulatory compliance gaps, Storage cost escalation, AI consuming untrustworthy content, Key person dependencies |

---

## 9. Frameworks Mentioned

| Framework | Context |
|-----------|---------|
| **ITIL** | Service management standards referenced |
| **Risk-based Governance** | Core philosophy for prioritisation |
| **Agile** | Mentioned as delivery approach (with flexibility) |
| **Information Architecture** | Site structure, hub design, metadata |
| **Classification Schemes** | Records management, retention mapping |
| **Metadata Standards** | 14 required fields example from candidate |
| **Persona-based Testing** | User acceptance and permission validation |
| **MVP Approach** | Deliver value incrementally, then expand |
| **Change Management** | 80% of solution is people/process |

---

## 10. Team Overview

```mermaid
graph TB
    subgraph "Woodside Digital - Information Management Service"
        JL[Julie<br/>Service Line Owner]
        
        JL --> BL[Belinda<br/>Information Management<br/>Specialist]
        JL --> AR[M365 Architect<br/>Leave Jan]
        JL --> NR[NEW ROLE<br/>SharePoint Functional<br/>Specialist]
        JL --> MS[Managed Service<br/>Bangalore/Hyderabad]
    end
    
    subgraph "Scope Areas"
        BL --> RM[Records Management<br/>Hard Copy Focus]
        BL --> CD[Control Documents]
        AR --> TA[Technical Architecture]
        NR --> FC[Functional Consulting]
        NR --> SB[Site Builds]
        NR --> MG[Migration Support]
        MS --> IN[Incidents]
        MS --> AP[Access/Permissions]
        MS --> SR[Generic Service Requests]
    end
    
    style NR fill:#4caf50,color:#fff
    style JL fill:#1976d2,color:#fff
```

### Team Characteristics

- **Location**: Level 17, Perth office
- **Work Model**: 1 day WFH standard, flexibility available
- **Service Model**: Centralised service ownership
- **Support Model**: Hybrid local expertise + offshore managed service

---

## 11. Key Relationships

### Internal Relationships

```mermaid
graph LR
    subgraph "IM Service Line"
        IMS[Information Management<br/>Service]
    end
    
    subgraph "Internal Stakeholders"
        BU[Business Units]
        PM[Project Managers]
        EX[Executives]
        IT[IT Platform Team]
        RM[Records Management]
    end
    
    IMS <-->|Requirements & Consulting| BU
    IMS <-->|SME Input| PM
    IMS <-->|Strategy & Reporting| EX
    IMS <-->|Feature Assessment| IT
    IMS <-->|Policy & Compliance| RM
    
    style IMS fill:#1976d2,color:#fff
```

### External Relationships

```mermaid
graph LR
    subgraph "IM Service Line"
        IMS[Information Management<br/>Service]
    end
    
    subgraph "External Partners"
        TCS[Managed Service<br/>TCS/Similar<br/>Bangalore/Hyderabad]
        MS[Microsoft]
        TP[Third-party<br/>Project Partners]
        VN[Vendors<br/>ShareGate etc]
    end
    
    IMS <-->|Incident & Request| TCS
    IMS <-->|Licensing & Features| MS
    IMS <-->|Collaboration Spaces| TP
    IMS <-->|Tools & Support| VN
    
    style IMS fill:#1976d2,color:#fff
    style TCS fill:#ff9800,color:#fff
```

---

## 12. Role Requirements Summary (Position Being Recruited)

### Core Competencies Required

```mermaid
mindmap
  root((SharePoint<br/>Functional<br/>Specialist))
    Technical
      SharePoint Online expertise
      Microsoft Teams
      PnP PowerShell
      Purview basics
      Site architecture
      Migration experience
    Functional
      Requirements gathering
      Solution design
      Business analysis
      Documentation
      Training delivery
    Soft Skills
      Stakeholder management
      Translation business to tech
      Flexibility
      Communication
      Consulting mindset
    Domain
      Information management
      Records management basics
      Governance frameworks
      Risk-based thinking
```

### Key Deliverables Expected

1. Functional consulting and guidance
2. Site builds and configurations
3. Migration planning and execution support
4. Requirements documentation for technical teams
5. Business training and adoption support
6. Contribution to governance and standards
7. Input to strategic initiatives (AI readiness, Purview)

---

## 13. Key Quotes & Insights

> "We're too big. The scale is too much for us to control everything... what our ethos is is really to understand where our risks are and then focus on those."

> "We have around 90 million files in SharePoint... we've now got a bit of a headache."

> "The issue with the disposal part is, especially after a long time, the people having to make the disposal decision don't have the context or confidence to make a decision. So you end up just keeping everything."

> "Technology is really 20% of the solution, it was taking the business, the executive, the stakeholders on the journey."

> "With AI, they're very heavy early adopters... needing to differentiate between the stuff we can trust and stuff we can't."

---

## 14. Organisational Context

| Attribute | Detail |
|-----------|--------|
| **Company** | Woodside Energy |
| **Industry** | Oil & Gas / Energy |
| **Location** | Perth, Western Australia |
| **Office** | Mia Yellagonga (Level 17 mentioned) |
| **Digital Maturity** | High - early AI/Copilot adopters |
| **IM Maturity** | Medium - strong adoption, governance gaps |
| **Scale** | ~90 million files, ~70,000 physical cartons |
| **Engagement Type** | 12-month full-time contract |
| **Start** | January 2025 target |

---

*Analysis generated from interview transcript dated 11 December 2024*
