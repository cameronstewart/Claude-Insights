---
title: "Simple Invoicing Process - Current State.mermaid"
project: "Derwent Xero Integration"
project_uuid: "019714fd-bc07-72af-87df-f3c55cce8608"
doc_uuid: "355e8045-5b70-436e-b8af-76718e842fb1"
created_at: "2025-06-06T02:54:36.161688+00:00"
doc_index: 3
---

sequenceDiagram
    participant FT as Finance Team
    participant Wave as Wave
    participant Xero as Xero
    participant PA as Project Associate
    participant Client as Client

    Note over FT,Client: As Is Process
    participant FT as Finance Team
    participant Wave as Wave
    participant Xero as Xero
    participant PA as Project Associate
    participant Client as Client

    FT->>Wave: Click button to send to Xero
    Wave->>Xero: Mail merge - create draft invoice & produce PDF
    Note right of Xero: Xero is effectively doing a mail merge
    FT->>PA: Send PDF to Project Associate for approval (via email)
    PA-->>FT: Approve invoice (via email)
    FT->>Client: Send to Client (via email)
    FT->>Xero: Edit invoice and add splits/tracking codes