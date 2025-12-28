---
title: "Entity Relationship Diagram - CONSULT-258 Database Schema.mermaid"
project: "Derwent"
project_uuid: "0197e4da-7943-74b4-8be4-9bd371e87073"
doc_uuid: "eedbc976-62f4-454c-854d-b2e31dbd0bac"
created_at: "2025-07-07T13:18:07.231463+00:00"
doc_index: 1
---

erDiagram
    cr5a0_client ||--o{ cr5a0_revenuecontrol : "has"
    cr5a0_client ||--o{ cr5a0_jobinitiation : "has"
    cr5a0_client ||--o{ cr5a0_placements : "parent_company"
    cr5a0_client ||--o{ cr5a0_placements : "private_equity"
    cr5a0_client }|--o| cr5a0_privateequity : "has"
    cr5a0_client }|--o| sope_industry : "in"
    cr5a0_client }|--o| sope_subindustry : "in"
    cr5a0_client }|--o| cr5a0_revenuecontrol : "has_revenue"
    
    cr5a0_revenuecontrol ||--o{ cr5a0_jobinitiation : "has"
    cr5a0_revenuecontrol ||--o{ cr5a0_placements : "job_number"
    cr5a0_revenuecontrol }|--o| cr5a0_client : "for"
    cr5a0_revenuecontrol }|--o| cr5a0_practicegroup : "has"
    cr5a0_revenuecontrol }|--o| cr5a0_privateequity : "has"
    cr5a0_revenuecontrol }|--o| sope_genericroletype : "has"
    cr5a0_revenuecontrol }|--o| sope_industry : "in"
    cr5a0_revenuecontrol }|--o| sope_invoicingnotes : "has"
    cr5a0_revenuecontrol }|--o| sope_role : "has"
    cr5a0_revenuecontrol }|--o| sope_subindustry : "in"
    cr5a0_revenuecontrol }|--o| cr5a0_jobinitiation : "job_initiation"
    
    cr5a0_jobinitiation }|--o| cr5a0_client : "for"
    cr5a0_jobinitiation }|--o| cr5a0_revenuecontrol : "job_number"
    cr5a0_jobinitiation }|--o| cr5a0_placements : "placement"
    cr5a0_jobinitiation ||--o{ cr5a0_task : "has"
    
    cr5a0_placements ||--o{ sope_research : "has"
    cr5a0_placements ||--o{ sope_clientbriefingattendees : "has"
    cr5a0_placements ||--o{ sope_brainstormmeetingattendees : "has"
    cr5a0_placements ||--o{ sope_admin : "has"
    cr5a0_placements }|--o| cr5a0_revenuecontrol : "job_number"
    cr5a0_placements }|--o| cr5a0_client : "parent_company"
    cr5a0_placements }|--o| cr5a0_client : "private_equity"
    cr5a0_placements ||--o{ sope_internalkickoffattendees : "has"
    
    sope_invoicingnotes }|--o| cr5a0_client : "for"
    sope_invoicingnotes }|--o| cr5a0_revenuecontrol : "client2"
    sope_invoicingnotes }|--o| cr5a0_revenuecontrol : "job_number"
    
    sope_internalkickoffattendees }|--o| cr5a0_revenuecontrol : "job_number"
    sope_internalkickoffattendees }|--o| cr5a0_placements : "placement"
    
    sope_industry ||--o{ sope_subindustry : "has"
    sope_industry ||--o{ cr5a0_privateequity : "has"
    
    sope_genericroletype }|--o| sope_role : "has"
    
    cr5a0_privateequity }|--o| sope_industry : "in"
    cr5a0_privateequity }|--o| sope_subindustry : "in"
    
    cr5a0_task }|--o| cr5a0_jobinitiation : "for"
    cr5a0_task }|--o| cr5a0_tasktype : "has"
    cr5a0_task }|--o| cr5a0_templatetask : "from"
    
    cr5a0_templatetask }|--o| cr5a0_practicegroup : "related"
    cr5a0_templatetask }|--o| cr5a0_tasktype : "has"
    
    cr5a0_client {
        uniqueidentifier cr5a0_clientid PK
        uniqueidentifier cr5a0_privateequity FK
        uniqueidentifier sope_industry FK
        uniqueidentifier sope_revenuecontrol FK
        uniqueidentifier sope_subindustry FK
    }
    
    cr5a0_revenuecontrol {
        uniqueidentifier cr5a0_revenuecontrolid PK
        uniqueidentifier cr5a0_client FK
        uniqueidentifier cr5a0_practicegroup FK
        uniqueidentifier cr5a0_privateequity FK
        uniqueidentifier sope_genericroletype FK
        uniqueidentifier sope_industry FK
        uniqueidentifier sope_invoicingnote FK
        uniqueidentifier sope_role FK
        uniqueidentifier sope_subindustry FK
        uniqueidentifier tr_jobinitiation FK
    }
    
    cr5a0_jobinitiation {
        uniqueidentifier cr5a0_jobinitiationid PK
        uniqueidentifier cr5a0_client FK
        uniqueidentifier cr5a0_jobnumberrevenuecontrol FK
        uniqueidentifier tr_placement FK
    }
    
    cr5a0_placements {
        uniqueidentifier cr5a0_placementsid PK
        uniqueidentifier cr5a0_jobnumberlookup FK
        uniqueidentifier sope_parentcompany FK
        uniqueidentifier sope_privateequity FK
    }
    
    cr5a0_task {
        uniqueidentifier cr5a0_taskid PK
        uniqueidentifier cr5a0_jobinitiation FK
        uniqueidentifier cr5a0_tasktype FK
        uniqueidentifier cr5a0_templatetask FK
    }
    
    sope_subindustry {
        uniqueidentifier sope_subindustryid PK
        uniqueidentifier sope_industry FK
    }
    
    sope_industry {
        uniqueidentifier sope_industryid PK
    }
    
    sope_role {
        uniqueidentifier sope_roleid PK
    }
    
    cr5a0_practicegroup {
        uniqueidentifier cr5a0_practicegroupid PK
    }
    
    sope_genericroletype {
        uniqueidentifier sope_genericroletypeid PK
        uniqueidentifier sope_role FK
    }
    
    cr5a0_tasktype {
        uniqueidentifier cr5a0_tasktypeid PK
    }
    
    cr5a0_templatetask {
        uniqueidentifier cr5a0_templatetaskid PK
        uniqueidentifier cr5a0_relatedpracticegroup FK
        uniqueidentifier cr5a0_tasktype FK
    }
    
    cr5a0_privateequity {
        uniqueidentifier cr5a0_privateequityid PK
        uniqueidentifier cr5a0_industry FK
        uniqueidentifier cr5a0_subindustry FK
    }
    
    sope_invoicingnotes {
        uniqueidentifier sope_invoicingnotesid PK
        uniqueidentifier sope_client FK
        uniqueidentifier sope_client2 FK
        uniqueidentifier sope_jobnumber FK
    }
    
    sope_research {
        uniqueidentifier sope_researchid PK
        uniqueidentifier sope_job_number FK
    }
    
    sope_admin {
        uniqueidentifier sope_adminid PK
        uniqueidentifier sope_jobnumber FK
        uniqueidentifier sope_revenuecontrol FK
    }
    
    sope_internalkickoffattendees {
        uniqueidentifier sope_internalkickoffattendeesid PK
        uniqueidentifier sope_jobnumber FK
        uniqueidentifier sope_placements FK
    }
    
    sope_clientbriefingattendees {
        uniqueidentifier sope_clientbriefingattendeesid PK
        uniqueidentifier sope_jobnumber FK
        uniqueidentifier sope_placements FK
    }
    
    sope_brainstormmeetingattendees {
        uniqueidentifier sope_brainstormmeetingattendeesid PK
        uniqueidentifier sope_jobnumber FK
        uniqueidentifier sope_placements FK
    }
    
    sope_closeout {
        uniqueidentifier sope_closeoutid PK
    }
