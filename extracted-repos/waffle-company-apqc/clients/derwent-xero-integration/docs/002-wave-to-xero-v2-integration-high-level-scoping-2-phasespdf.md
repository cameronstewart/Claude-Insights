---
title: "Wave to Xero v2 Integration High Level Scoping - 2 Phases.pdf"
project: "Derwent Xero Integration"
project_uuid: "019714fd-bc07-72af-87df-f3c55cce8608"
doc_uuid: "0969ef7b-dd9a-454e-8a43-6c3855ee0aea"
created_at: "2025-05-30T01:48:16.228708+00:00"
doc_index: 2
---

High Level Scoping Doc – Xero integration from Wave
This project has been split into two phases to decrease the time to have an integration.
• Phase One will be a light integration like the current Bullhorn – Xero integration
• Phase Two will be an enhancement to the integration to include more functionality and reduce
the duplicate and manual work carried out by the Finance team.
Current State (Bullhorn to Xero):
Phase One:
Availability of “Send to Xero” option:
• Button for “Send to Xero” (accessible to defined users only) for each Milestone on the Revenue
records will only appear when the Milestone Status is set to “Approved” for each billing stage
(M1, M2, M3)
Invoice creation:
• If the revenue control company does not exist as a Xero Contact then make the Xero contact
record with the company details before making the draft invoice
Bullhorn
Placement
Made
Bullhorn
Select "Send to
Xero"
Xero Connector
Check if Bulllhorn
Company/Xero
Contact exists
NO
YES
Xero
Create Xero
Contact using
Bullhorn
Company details
Xero
Create draft
Invoice against
Xero Contact
Xero Connector
Invoice ID sent back
Placement status updated

• If the company does exist in Xero then attach the draft invoice to the existing Xero contact
record
Phase One – Company/Contact Mapping
Field in Revenue
Control
Location for look
up
Field in Xero Note
Company Name Job initiation table Contact Name
ABN ABN
Phase One – Invoice Mapping
- Creation of basic draft invoice with one line item only with basic rules for the invoice
description text
Field in Revenue
Control
Location Field in Xero Note
Xero Invoice ID Invoice – Invoice ID To be populated in
revenue control
once the invoice
has been created in
Xero
Bullhorn ID Job initiation table Invoice – Reference
Field
- Invoice Status Set all created
invoices as “Draft”
in Xero
Billing Date Invoice Date M1 date billed, M2
date billed, m3
date billed
- Invoice Due Date Default to 14 day
terms
Billed Amount Amount
Invoice description logic:
Milestone 1 (M1)
• If the field for “Confidential” in the job initiation table is set to No then make the invoice
description of “milestone 1 - commencement of services (milestone 1 - retainer) in relation to
the role of {job title}”
o The job title is a field on the revenue control
• If the field for “Confidential” in the job initiation table is set to Yes then make the invoice
description of “milestone 1 - commencement of services (milestone 1 - retainer)”

• For both descriptions, if the purchase order field in the revenue control is not “N/A” then add at
the end of the invoice description “PON {purchase order}”
Milestone 2 (M2)
• If the field for “Confidential” in the job initiation table is set to No then make the invoice
description of “milestone 2 - delivery of services (milestone 2 - retainer) in relation to the role of
{job title}”
o The job title is a field on the revenue control
• If the field for “Confidential” in the job initiation table is set to Yes then make the invoice
description of “milestone 2 - delivery of services (milestone 2 - retainer)”
• For both descriptions, if the purchase order field in the revenue control is not “N/A” then add at
the end of the invoice description “PON {purchase order}”
Milestone 3 (M3)
• If the field for “Confidential” in the job initiation table is set to No then make the invoice
description of “milestone 3 - completion of services (placement) in relation to the role of {job
title}”
o The job title is a field on the revenue control
• If the field for “Confidential” in the job initiation table is set to Yes then make the invoice
description of “milestone 3 - completion of services (placement)”
• For both descriptions, if the purchase order field in the revenue control is not “N/A” then add at
the end of the invoice description “PON {purchase order}”
New fields required in revenue control
- Xero Invoice ID for each milestone
- Xero Contact ID for each company

Phase Two:
- Additional mapping of company/contact fields
- Additional mapping of invoice fields
- Creation of different invoice line items based on outlined rules
o Fee Splits
o Engagement Fee on M1 invoice
- Creation of different invoice text lines based on outlined rules
Phase Two - Company/Contact Mapping
Field in Revenue
Control
Location for look
up
Field in Xero Note
Company Industry Sales Account* This will have a mapped
list from industry to sales
account
Company Sub
Industry
Client card Industry* This will have a mapped
list from the sub industry
to the industry
Phase Two – Invoice Mapping
Field in Revenue
Control
Location Field in Xero Note
Consultant
(Executor)
Job Initiation table Tracking Code* Mapped list from
consultant to tracking
code
- Line Items Dependent on the number
of fee splits and the type of
invoice (see notes)
- Quantity Dependent on the amount
of the fee splits and the
type of invoice (see notes)
- Description Dependent on the type of
invoice (see notes)
- Invoice
Template/Brand
Dependent on the number
of fee splits (see notes)
- Account code Milestone 1 only,
dependent on type of
engagement fee (see
notes)

Rules:
Fee Split
If the revenue control record has more than one fee split then the following needs to occur, note that
there will only evener be a maximum of 3 fee splits
o Set the Invoice Template as “Derwent – no line”
o Only populate the description on the first line of the invoice (see later note on the
invoice text)
o Set the number of line items based on the number of fee splits, e.g. 2 fee splits would be
2 line items
o Set the quantity of each line item based on the fee split % e.g if fee split is 75% set the
quantity to be 0.75
o Set the consultant for each fee split as the tracking category on each line of the invoice
Milestone 1 (M1)
When the M1 invoice is created the following needs to occur:
- Use M1 fee split to determine the invoice template, number of line items and quantities as per
above
- Add an additional line item for the “Engagement Fee” – see notes:
- M1 billed field on the revenue control is the invoice amount
- M1 date field on the revenue control is the invoice date
Milestone 1 (M1) – Engagement Fee
For Milestone 1 (M1) only, a further last line needs to be added onto the invoice for the Engagement
fee.
There are two types of engagement fee which can be selected on Revenue Control. For the type of
“External” then set
- Item Code to be set as “Engagement Fee”
- Description to be set as “Engagement Fee”
- Quantity to be set as 1
- Amount to be the “Engagement Fee” in revenue control
- Account code is “50200 – engagement fee”
For the type of “Internal” then set
- Item Code to be set as “Engagement Fee – Internal Allocation”
- Description to be set as “deduct internal engagement fee”
- Quantity to be set as 1

- Amount to be the “Engagement Fee” in revenue control
- Account code is “50250 – engagement fee”
Milestone 2 (M2)
When the M2 invoice is created the following needs to occur:
- Use M2 fee split to determine the invoice template, number of line items and quantities as per
above
- M2 billed field on the revenue control is the invoice amount
- M2 date field on the revenue control is the invoice date
Milestone 3 (M3)
When the M3 invoice is created the following needs to occur:
- Use M3 fee split to determine the invoice template, number of line items and quantities as per
above
- M3 billed field on the revenue control is the invoice amount
- M3 date field on the revenue control is the invoice date
New fields required in revenue control
- Xero Invoice Status for each milestone
Mapping tables to be provided
- Industry
- Sub Industry
- Tracking Codes