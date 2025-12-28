# Derwent Project Analysis

**Analysis Date:** 2025-12-28
**Source:** Claude Projects Export
**Analyst:** Claude Code

---

## Executive Summary

The Claude Projects export contains comprehensive documentation for two interconnected Derwent projects representing a critical business system migration from Bullhorn to Wave PowerApp, with a focus on automating Xero invoice generation. This analysis covers database architecture, integration requirements, business processes, and technical implementation details for an executive search firm's invoicing automation.

---

## Project Overview

### Project 1: Derwent (PowerApp Launch)

**Metadata:**
- **UUID:** `0197e4da-7943-74b4-8be4-9bd371e87073`
- **Creator:** Cameron Stewart
- **Created:** 2025-07-07T12:26:52.614625+00:00
- **Category:** clients
- **Documents:** 1
- **Location:** `extracted-repos/waffle-company-apqc/clients/derwent/`

**Description:** Launch PowerApp for Derwent's recruitment operations.

**Content:**
- Entity Relationship Diagram for CONSULT-258 Database Schema
- Complete data model for recruitment/placement tracking system

### Project 2: Derwent Xero Integration

**Metadata:**
- **UUID:** `019714fd-bc07-72af-87df-f3c55cce8608`
- **Creator:** Cameron Stewart
- **Created:** 2025-05-28T03:44:22.539606+00:00
- **Category:** clients
- **Documents:** 3
- **Location:** `extracted-repos/waffle-company-apqc/clients/derwent-xero-integration/`

**Description:** Automation between PowerApp and Xero accounting system.

**Content:**
- Meeting transcript (58KB) - Full scoping discussion
- Two-phase integration specification
- Current state process diagrams

---

## Business Context

### Company Profile: Derwent

**Industry:** Executive Search & Recruitment
**Service Model:** Contingent placement with milestone-based billing
**Invoice Volume:** ~1,400 invoices/year (~100-150/month)
**Key Stakeholders:**
- Lee Whitaker - AI & Automation Specialist
- Leonie Meissner - Accountant
- Kayla Dooley - Management Accountant
- Chloe McFadden - Project Associate
- Cameron Stewart - Integration Consultant

### Critical Business Requirements

1. **Revenue Attribution**
   - Every dollar must be tracked to specific consultants
   - Fee splits determine consultant compensation
   - Up to 3 consultants per placement (maximum 3-way split)

2. **Confidentiality Management**
   - Executive placements are highly sensitive
   - Wrong invoice routing can expose confidential hires
   - Risk of legal/HR issues if mistakes occur

3. **Industry Tracking**
   - Revenue tracked by industry and sub-industry
   - Supports business intelligence and practice group analysis

4. **Compliance & Audit Trail**
   - Monthly reconciliation between systems
   - Consultants verify revenue attribution
   - ABN tracking for Australian tax compliance

---

## Database Architecture

### Core Entities (CONSULT-258 Schema)

#### cr5a0_client
**Purpose:** Client companies
**Key Relationships:**
- Has multiple revenue control records
- Has multiple job initiations
- Can be parent company for placements
- Can be private equity firm
- Belongs to industry and sub-industry

**Foreign Keys:**
- cr5a0_privateequity
- sope_industry
- sope_subindustry
- sope_revenuecontrol

#### cr5a0_revenuecontrol
**Purpose:** Job/engagement revenue tracking (central entity)
**Key Relationships:**
- Belongs to client
- Has associated job initiations
- Has associated placements
- Tracked by practice group, industry, sub-industry
- Has role type and invoicing notes

**Foreign Keys:**
- cr5a0_client
- cr5a0_practicegroup
- cr5a0_privateequity
- sope_genericroletype
- sope_industry
- sope_invoicingnote
- sope_role
- sope_subindustry
- tr_jobinitiation

#### cr5a0_jobinitiation
**Purpose:** Job setup and workflow
**Key Relationships:**
- Belongs to client
- Links to revenue control (job number)
- Links to placement
- Has multiple tasks

**Foreign Keys:**
- cr5a0_client
- cr5a0_jobnumberrevenuecontrol
- tr_placement

#### cr5a0_placements
**Purpose:** Successful candidate placements
**Key Relationships:**
- Links to job number (revenue control)
- Has parent company and private equity associations
- Has research, admin, and meeting attendee records

**Foreign Keys:**
- cr5a0_jobnumberlookup
- sope_parentcompany
- sope_privateequity

#### cr5a0_task
**Purpose:** Workflow tasks within job initiation
**Key Relationships:**
- Belongs to job initiation
- Has task type
- Can be based on template task

**Foreign Keys:**
- cr5a0_jobinitiation
- cr5a0_tasktype
- cr5a0_templatetask

### Supporting Entities

- **sope_industry / sope_subindustry:** Industry classification
- **sope_role / sope_genericroletype:** Role categorization
- **cr5a0_practicegroup:** Practice area organization
- **cr5a0_privateequity:** Private equity firm tracking
- **sope_invoicingnotes:** Invoice-specific notes and contact details
- **cr5a0_templatetask / cr5a0_tasktype:** Workflow templates
- **sope_research / sope_admin:** Activity tracking
- **sope_internalkickoffattendees:** Meeting participants
- **sope_clientbriefingattendees:** Client meeting tracking
- **sope_brainstormmeetingattendees:** Planning meeting tracking

---

## Integration Requirements

### Current State: Bullhorn → Xero

**Process Flow:**
1. Finance team clicks "Send to Xero" button in Bullhorn
2. Xero integration creates draft invoice (mail merge style)
3. Finance exports PDF
4. PDF sent to Project Associate for approval via email
5. After email approval, invoice sent to client
6. Finance team manually edits Xero invoice to add:
   - Fee splits (consultant revenue attribution)
   - Tracking codes (consultant, industry, sub-industry)
   - Account codes

**Limitations:**
- Manual data entry for splits and tracking
- Risk of errors in consultant attribution
- Time-consuming reconciliation process
- Limited automation
- Bullhorn integration expiring June 30, 2025

**Data Stored in Bullhorn:**
- Xero Contact ID (prevents duplicate customer creation)
- Xero Invoice ID (links systems)
- Invoice status update (Forecast → Invoiced)

### Target State: Wave → Xero

**Migration Driver:** Moving from Bullhorn to Wave PowerApp for operations management

**Critical Deadline:** June 30, 2025 (Bullhorn-Xero integration contract expiry)

---

## Two-Phase Implementation Plan

### Phase 1: Baseline Integration (Urgent - Pre-June 30)

**Goal:** Replicate current Bullhorn functionality with minimal enhancements

**Features:**

1. **User-Triggered Invoice Creation**
   - "Send to Xero" button (not automatic)
   - Only available when Milestone Status = "Approved"
   - Accessible to defined users only

2. **Company/Contact Management**
   - Check if company exists in Xero
   - Create Xero Contact if not exists
   - Store Xero Contact ID in Wave to prevent duplicates

3. **Basic Invoice Fields**

| Wave Field | Location | Xero Field | Notes |
|------------|----------|------------|-------|
| Xero Invoice ID | Revenue Control | Invoice ID | Written back to Wave |
| Bullhorn ID | Job Initiation | Reference | Job tracking |
| Billing Date | M1/M2/M3 Date Billed | Invoice Date | Per milestone |
| Billed Amount | M1/M2/M3 Amount | Amount | Per milestone |
| Company Name | Job Initiation | Contact Name | |
| ABN | Client | ABN | Australian tax ID |

4. **Invoice Status**
   - All invoices created as "Draft" in Xero
   - 14-day payment terms (default)

5. **Invoice Description Logic**

**Milestone 1 (M1) - Commencement:**
- **Non-Confidential:** "milestone 1 - commencement of services (milestone 1 - retainer) in relation to the role of {job title}"
- **Confidential:** "milestone 1 - commencement of services (milestone 1 - retainer)"
- **With PO:** Append "PON {purchase order}" if PO ≠ "N/A"

**Milestone 2 (M2) - Delivery:**
- **Non-Confidential:** "milestone 2 - delivery of services (milestone 2 - retainer) in relation to the role of {job title}"
- **Confidential:** "milestone 2 - delivery of services (milestone 2 - retainer)"
- **With PO:** Append "PON {purchase order}" if PO ≠ "N/A"

**Milestone 3 (M3) - Completion:**
- **Non-Confidential:** "milestone 3 - completion of services (placement) in relation to the role of {job title}"
- **Confidential:** "milestone 3 - completion of services (placement)"
- **With PO:** Append "PON {purchase order}" if PO ≠ "N/A"

6. **New Fields Required in Wave**
   - Xero Invoice ID (per milestone: M1, M2, M3)
   - Xero Contact ID (per company)

### Phase 2: Enhanced Automation

**Goal:** Reduce manual work and automate complex business logic

**Features:**

1. **Company/Contact Enhanced Mapping**

| Wave Field | Location | Xero Field | Mapping Logic |
|------------|----------|------------|---------------|
| Company Industry | Client | Sales Account | Lookup table: Industry → Account Code |
| Company Sub Industry | Client | Industry | Lookup table: Sub-industry → Industry |

2. **Invoice Enhanced Mapping**

| Wave Field | Location | Xero Field | Mapping Logic |
|------------|----------|------------|---------------|
| Consultant (Executor) | Job Initiation | Tracking Code | Lookup table: Consultant → Code |
| Xero Invoice Status | Revenue Control | Status | Write back: Draft/Paid/Outstanding |

3. **Fee Split Automation**

**Business Rule:** Revenue must be attributed to consultants for compensation tracking

**Implementation:**
- **Single Consultant:**
  - Template: Standard invoice template
  - Line items: 1
  - Quantity: 1 (100%)

- **Multiple Consultants (2-3 splits):**
  - Template: "Derwent - no line" (hides line items from client)
  - Line items: Number of consultants
  - Quantity per line: Fee split % (e.g., 0.75 for 75%, 0.25 for 25%)
  - Tracking code per line: Respective consultant code
  - Description: Only on first line (subsequent lines blank)

**Rationale:** Clients shouldn't see how "the sausage is made" (internal revenue split)

4. **Engagement Fee Handling (M1 Only)**

**External Engagement Fee:**
- Item Code: "Engagement Fee"
- Description: "Engagement Fee"
- Quantity: 1
- Amount: Engagement Fee field from Revenue Control
- Account Code: 50200 - Engagement Fee

**Internal Engagement Fee:**
- Item Code: "Engagement Fee - Internal Allocation"
- Description: "deduct internal engagement fee"
- Quantity: 1
- Amount: Engagement Fee field from Revenue Control
- Account Code: 50250 - Engagement Fee

**Known Issue:** Xero limitation prevents showing line items AND fee splits on same invoice template
- Current workaround: Manual editing post-send
- Phase 2 goal: Automate what's possible, document what's not

5. **Invoice Contact Email Challenge**

**Critical Business Problem:**
- Same client may have 10+ jobs/year
- Each job invoice goes to different contact
- Sending to wrong person can leak confidential information
- "Bane of our existence" - direct quote from accountant
- Current process: Manual email lookup and copy/paste

**Xero Constraint:**
- Contacts are companies, not people
- Can add additional email addresses but all receive invoice
- Cannot dynamically select per-invoice recipient within Xero

**Proposed Solution:**
- Add "Email Invoice To" field in Wave (at Job Initiation level)
- Project Associates update this field when marking milestone complete
- Include email as invoice line item in Xero draft invoice
- Finance team copies email from line item when sending
- After sending, manually edit invoice to remove email line

**Alternative Considered:**
- Add email to invoice notes field
- Finance team would copy from notes when sending

6. **Milestone-Specific Logic**

**M1 Invoice:**
- Use M1 fee split for line item/quantity logic
- Add engagement fee line (if applicable)
- Invoice amount: M1 Billed field
- Invoice date: M1 Date Billed field

**M2 Invoice:**
- Use M2 fee split for line item/quantity logic
- Invoice amount: M2 Billed field
- Invoice date: M2 Date Billed field

**M3 Invoice:**
- Use M3 fee split for line item/quantity logic
- Invoice amount: M3 Billed field
- Invoice date: M3 Date Billed field

7. **Status Synchronization**

**Wave → Xero:** Send invoice data when "Send to Xero" clicked
**Xero → Wave:** Return invoice status (Draft/Paid/Outstanding/Voided)

**Frequency:** To be determined (daily batch vs. on-demand)

8. **New Fields Required in Wave**
   - Xero Invoice Status (per milestone)
   - Email Invoice To (at Job Initiation level)

9. **Mapping Tables to Provide**

| From | To | Purpose |
|------|-----|---------|
| Industry | Sales Account | Revenue categorization |
| Sub-Industry | Industry | Hierarchy mapping |
| Consultant Name | Tracking Code | Revenue attribution |
| Item Codes | Item Codes | Standard items (currently 3 active) |

---

## Technical Architecture

### Recommended Integration Platform

**Options Discussed:**
1. **UI Path** - Recommended by Lee Whitaker (prior experience)
2. **Make.com (Integromat)** - Recommended by Lee Whitaker (prior experience)
3. **Automation Anywhere** - Alternative
4. **Workato** - Alternative
5. **Zapier** - Explicitly rejected (poor Xero integration quality)

**Selection Criteria:**
- Pre-built Xero connectors
- Quality of integration (avoid Zapier's issues)
- Wave/PowerApp connectivity
- Cost-effectiveness for ~1,400 invoices/year
- Maintenance and support

### Integration Pattern

```
Wave PowerApp → Integration Platform → Xero API
                      ↓
              Lookup Tables / Mapping Logic
                      ↓
              Data Transformation Rules
```

### API Requirements

**Wave/PowerApp API:**
- Read revenue control records
- Read job initiation records
- Read client records
- Write Xero IDs back to records
- Write invoice status back to records
- Trigger: "Send to Xero" button event

**Xero API:**
- Check if contact exists (by name/ABN)
- Create contact (if not exists)
- Create draft invoice
- Set invoice fields (date, amount, reference, etc.)
- Create invoice line items (with quantities, tracking codes)
- Set invoice template/brand
- Retrieve invoice status
- (Phase 2) Set tracking categories per line item

**API Validation Needed:**
- Can Xero API set invoice template/brand dynamically?
- Can line items have individual tracking codes?
- What fields are available for notes/reference?

---

## Business Process Improvements

### Current Manual Steps (To Be Automated)

1. ❌ **Manual fee split entry** → ✅ Automated based on Wave data
2. ❌ **Manual tracking code assignment** → ✅ Automated via consultant mapping
3. ❌ **Manual account code selection** → ✅ Automated via industry mapping
4. ❌ **Manual invoice text entry** → ✅ Automated via milestone + confidentiality logic
5. ❌ **Manual engagement fee entry** → ✅ Automated based on type (external/internal)
6. ❌ **Manual template selection** → ✅ Automated based on fee split count

### Remaining Manual Steps (Cannot Automate)

1. **Email recipient selection** - Due to Xero limitations, copy/paste still required
2. **Final invoice review** - Draft review before sending (by design, not limitation)
3. **Project Associate approval** - Human approval required for accuracy
4. **Post-send editing** - When engagement fee + fee split on M1 (Xero limitation)

### Time Savings Estimate

**Current Process Per Invoice:**
- Create draft in Bullhorn/Xero: 2 minutes
- Manual data entry (splits, codes): 5-8 minutes
- Review and send: 2 minutes
- Post-send editing: 3 minutes
- **Total: ~12-15 minutes**

**Automated Process Per Invoice:**
- Click "Send to Xero": 30 seconds
- Review automated draft: 2 minutes
- Copy email address: 30 seconds
- Send: 1 minute
- Post-send editing (if needed): 2 minutes
- **Total: ~6 minutes**

**Annual Savings:**
- Per invoice savings: ~7 minutes
- Annual volume: 1,400 invoices
- **Total savings: ~163 hours/year (4+ weeks of work)**

### Risk Reduction

**Current Risks:**
- ❌ Wrong consultant attribution → Compensation disputes
- ❌ Wrong email recipient → Confidentiality breach
- ❌ Wrong tracking codes → Inaccurate business intelligence
- ❌ Reconciliation errors → Month-end delays

**Mitigated Risks (Phase 2):**
- ✅ Automated consultant attribution from source data
- ✅ Email address visible on invoice draft (harder to miss)
- ✅ Automated tracking codes (no manual selection errors)
- ✅ Automated mapping reduces reconciliation discrepancies

**Remaining Risks:**
- ⚠️ Email copy/paste error still possible (Xero limitation)
- ⚠️ Source data errors in Wave will propagate
- ⚠️ Mapping table maintenance required

---

## Implementation Considerations

### Data Migration

**Xero Contact IDs from Bullhorn:**
- Extract Contact ID mappings before Bullhorn decommissioning
- Import into Wave to prevent duplicate customer creation
- Store: Company Name → Xero Contact ID

**Cleanup Required:**
- Hide/retire Bullhorn-specific fields in Bullhorn
- Archive old Bullhorn billing records
- Document field mappings for future reference

### Testing Strategy

**Parallel Running:**
- Run both Bullhorn and Wave integrations simultaneously during UAT
- Create test invoices in both systems
- Compare outputs for accuracy
- Delete test invoices in Xero after validation

**Test Scenarios:**
1. Single consultant, no engagement fee, non-confidential
2. Single consultant, external engagement fee, confidential
3. 2-way fee split, internal engagement fee, with PO number
4. 3-way fee split, no engagement fee, non-confidential
5. New customer (not in Xero)
6. Existing customer (already in Xero)
7. All three milestones for same job
8. Edge case: 100% fee split with engagement fee (known Xero issue)

**UAT Participants:**
- Finance team (Leonie, Kayla)
- Project Associates (Chloe)
- Automation specialist (Lee)
- Consultant representative (verify revenue tracking)

### Rollout Plan

**Phase 1 Rollout:**
1. Complete development and testing by mid-June 2025
2. UAT: June 15-25, 2025
3. Go-live: June 26, 2025 (4 days before Bullhorn cutoff)
4. Bullhorn decommission: June 30, 2025
5. Post-go-live support: Daily check-ins for first week

**Phase 2 Rollout:**
- Assess Phase 1 success and stabilization
- Prioritize based on ROI (fee splits = highest value)
- Develop and test without disrupting Phase 1
- Rollout incrementally (one enhancement at a time)

### Training Requirements

**Finance Team:**
- New "Send to Xero" button location in Wave
- How to verify automated data before sending
- What to do if automation fails
- How to handle edge cases

**Project Associates:**
- Update "Email Invoice To" field when marking milestones complete
- Verify invoice email in approval process
- Escalation path for errors

**Revenue Team:**
- Importance of accurate fee split data entry in Wave
- Impact of data errors on consultant compensation
- New Xero Invoice Status visibility in Wave

### Success Metrics

**Phase 1:**
- ✅ 100% of invoices created without integration errors
- ✅ Zero duplicate customers created in Xero
- ✅ Invoice creation time reduced by 30%
- ✅ No Bullhorn dependency after June 30

**Phase 2:**
- ✅ Manual data entry time reduced by 70%
- ✅ Fee split accuracy = 100% (no reconciliation discrepancies)
- ✅ Tracking code accuracy = 100%
- ✅ Consultant compensation disputes = 0

---

## Open Questions & Action Items

### Open Questions (From Meeting)

1. **Can Xero API set invoice template/brand?**
   - Action: Cameron to validate API capabilities
   - Impact: Phase 2 fee split automation

2. **M1 engagement fee + fee split limitation**
   - Known Xero limitation (can't show lines AND hide lines)
   - Current workaround: Post-send manual edit
   - Action: Lee to investigate if any workaround exists
   - Alternative: Accept manual step for this edge case

3. **Email field placement in invoice**
   - Option 1: Line item (forces invoice open for review)
   - Option 2: Notes field (easier to miss)
   - Action: Lee to confirm API support for adding line item with $0 amount

4. **Wave field for "Email Invoice To"**
   - Should Project Associates update at task completion?
   - Should Revenue team pre-populate from Bullhorn data?
   - Action: Determine data ownership and update workflow

5. **Status sync frequency**
   - Daily batch (sufficient for most invoices)?
   - On-demand when user refreshes?
   - Action: Define business requirement for status timeliness

### Action Items (From Meeting)

**Lee Whitaker:**
- ✅ Create as-is and to-be process flow diagrams
- ✅ Mark new functionality on diagrams
- ✅ Document M1 engagement fee + split known issue
- ✅ Add "Email Invoice To" field to scope document
- ✅ Investigate invoice template/brand API support
- ⏳ Provide mapping tables (Industry, Sub-Industry, Consultant, Item Codes)

**Cameron Stewart:**
- ⏳ Review Xero API documentation in detail
- ⏳ Validate all field mappings against API
- ⏳ Assess UI Path vs Make.com integration platforms
- ⏳ Prepare cost estimate for Phase 1 and Phase 2
- ⏳ Document architectural approach
- ⏳ Provide implementation timeline

**Kayla Dooley:**
- ⏳ Provide sample redacted invoices (various scenarios)
- ⏳ Document edge cases not covered in initial scope
- ⏳ Review revenue control screen change requests

**Chloe McFadden:**
- ⏳ Define "Email Invoice To" field update workflow
- ⏳ Document current Project Associate approval process
- ⏳ Identify training needs for Project Associates

**Leonie Meissner:**
- ⏳ Review and approve final scope document
- ⏳ Provide budget approval
- ⏳ Coordinate with stakeholders on timeline
- ⏳ Plan Bullhorn decommissioning

---

## Related Context

### Other Project References

The Derwent projects are also referenced in:

1. **Legal/SOPE Dispute Documents**
   - `extracted-repos/waffle-company-apqc/legal/sope-dispute/docs/`
   - References to "Derwent Search Reassignment"
   - Related to project assignment agreements
   - Context: Legal dispute regarding project ownership

2. **Kimberly-Clark Client Project**
   - `extracted-repos/waffle-company-apqc/clients/kimberly-clark-global-ethics/`
   - Communication breakdown summary mentions Derwent

### Contractor Context (Cameron Stewart)

From job application documents in Learning-AI repository:
- Cameron Stewart appears to be an external consultant
- Perth-based (same as Kayla and Chloe)
- Experience with Xero integrations and Microsoft PowerApps
- Working on this integration project for Derwent via consultancy

---

## Risk Assessment

### High Risks

1. **Timeline Risk (Critical)**
   - Deadline: June 30, 2025
   - Only ~30 days mentioned in meeting
   - Complexity: API integration, data migration, UAT
   - Mitigation: Two-phase approach, prioritize Phase 1

2. **Data Quality Risk (High)**
   - Garbage in, garbage out principle applies
   - Errors in Wave fee splits = wrong consultant compensation
   - Missing/incorrect email addresses = confidentiality breaches
   - Mitigation: Data validation rules, mandatory fields, training

3. **Business Continuity Risk (High)**
   - Invoice processing is revenue-critical
   - Any outage blocks invoicing → cash flow impact
   - Mitigation: Parallel running period, rollback plan, manual fallback

### Medium Risks

4. **Integration Platform Risk (Medium)**
   - UI Path/Make.com learning curve
   - Platform-specific limitations
   - Vendor lock-in
   - Mitigation: Proof of concept before full build, API-first design

5. **Xero API Limitation Risk (Medium)**
   - Known issue: Can't show + hide line items simultaneously
   - Unknown limitations may emerge during development
   - API changes by Xero could break integration
   - Mitigation: Early API validation, design for manual fallback

6. **Change Management Risk (Medium)**
   - Users resistant to new workflow
   - Training gaps
   - Process not followed correctly
   - Mitigation: User involvement in UAT, clear training, support period

### Low Risks

7. **Scope Creep (Low-Medium)**
   - Two-phase approach already defined
   - Clear distinction between must-have (Phase 1) and nice-to-have (Phase 2)
   - Mitigation: Formal change control, Phase 2 as separate project

8. **Technical Complexity (Low)**
   - Standard API integration pattern
   - Well-documented Xero API
   - Experienced team (Lee, Cameron)
   - Mitigation: Existing expertise, proven platforms

---

## Success Factors

### Critical Success Factors

1. ✅ **Executive Sponsorship:** Leonie (Accountant) is highly engaged and motivated
2. ✅ **Business Driver:** Clear ROI (time savings, error reduction, compliance)
3. ✅ **Deadline Pressure:** June 30 contract expiry forces focus
4. ✅ **Two-Phase Approach:** Reduces risk, ensures baseline functionality first
5. ✅ **Experienced Team:** Lee (automation), Cameron (integration), Kayla/Chloe (business)

### Enablers

- Existing Xero integration experience to learn from (Bullhorn)
- Well-documented current state (meeting transcript, diagrams)
- Clear business rules (milestone logic, fee splits, etc.)
- Small, focused team with decision-making authority
- Perth-based team members can meet in person if needed

### Challenges

- Aggressive timeline (30-34 days)
- Xero platform limitations (line item display)
- Email routing complexity (confidentiality requirements)
- Data migration from Bullhorn
- Testing in parallel without disrupting production

---

## Recommendations

### Immediate (Next 7 Days)

1. **Cameron:** Complete Xero API validation document
   - Confirm all field mappings are supported
   - Test template/brand API capability
   - Identify any blockers or gaps

2. **Lee:** Finalize process diagrams and scoping document
   - Get sign-off from Leonie and stakeholders
   - Lock scope for Phase 1
   - Estimate Phase 2 as separate project

3. **Team:** Platform selection (UI Path vs Make.com)
   - Proof of concept for critical features
   - Cost comparison
   - Go/no-go decision by end of week

4. **Kayla:** Extract Xero Contact IDs from Bullhorn
   - Create mapping spreadsheet
   - Identify any data quality issues
   - Plan for import into Wave

### Short-Term (Next 2 Weeks)

5. **Development:** Build Phase 1 integration
   - Start with contact creation (de-risks duplication issue)
   - Then basic invoice creation
   - Test with sample data early and often

6. **Wave Configuration:** Add new fields
   - Xero Invoice ID (M1, M2, M3)
   - Xero Contact ID
   - Email Invoice To (discuss placement: Job Initiation vs Task level)

7. **Testing:** Create test plan and test data
   - Document test scenarios
   - Set up test Xero organization (if possible)
   - Recruit UAT participants

### Medium-Term (Weeks 3-4)

8. **UAT Execution:** June 15-25 window
   - Daily testing sessions
   - Bug fixes same-day if possible
   - User training during UAT

9. **Go-Live Preparation:**
   - Parallel running plan
   - Rollback procedure documented
   - Support schedule (daily check-ins first week)

10. **Bullhorn Decommission:**
    - Extract all historical Xero IDs
    - Archive Bullhorn data
    - Disable Bullhorn-Xero integration June 30

### Long-Term (Phase 2)

11. **Phase 2 Planning:** Post-Phase 1 stabilization
    - Prioritize: Fee splits (highest ROI)
    - Then: Tracking codes
    - Then: Invoice status sync
    - Finally: Engagement fee automation

12. **Continuous Improvement:**
    - Monthly reconciliation process review
    - User feedback sessions
    - Identify additional automation opportunities

---

## Appendices

### A. Document Inventory

| Document | Size | Location | Content Summary |
|----------|------|----------|-----------------|
| Entity Relationship Diagram | ~4KB | `derwent/docs/001-*.md` | CONSULT-258 database schema (Mermaid ERD) |
| Meeting Transcript | 58KB | `derwent-xero-integration/docs/001-*.md` | Full scoping meeting May 28, 2025 |
| Integration Scoping (2-Phase) | 8KB | `derwent-xero-integration/docs/002-*.md` | Phase 1 & 2 specifications |
| Current Process Diagram | 1KB | `derwent-xero-integration/docs/003-*.md` | As-is process (Mermaid sequence) |

### B. Key Terminology

- **Revenue Control:** Central entity tracking job revenue and billing
- **Job Initiation:** Job setup record with client and role details
- **Placement:** Successful candidate placement record
- **Milestone (M1/M2/M3):** Billing stages (Commencement / Delivery / Completion)
- **Fee Split:** % of revenue attributed to each consultant (compensation basis)
- **Engagement Fee:** Upfront fee for background checks, etc. (M1 only)
- **Tracking Code:** Xero category for reporting (consultant, industry, sub-industry)
- **Wave:** PowerApp platform (replacing Bullhorn)
- **Bullhorn:** Legacy ATS (Applicant Tracking System) being phased out
- **Draft Invoice:** Xero invoice status before approval/sending

### C. Timeline Summary

| Date | Milestone |
|------|-----------|
| 2025-05-28 | Scoping meeting held |
| 2025-07-07 | Derwent PowerApp project created |
| 2025-06-15 (est.) | UAT start |
| 2025-06-25 (est.) | UAT end |
| 2025-06-26 (est.) | Phase 1 go-live |
| **2025-06-30** | **Bullhorn integration expires (hard deadline)** |
| 2025-Q3 (TBD) | Phase 2 planning |
| 2025-Q4 (TBD) | Phase 2 delivery |

### D. Contact Information

| Name | Role | Location | Key Responsibility |
|------|------|----------|-------------------|
| Lee Whitaker | AI & Automation Specialist | Derwent | Integration design, process mapping |
| Leonie Meissner | Accountant | Derwent | Business owner, approvals |
| Kayla Dooley | Management Accountant | Perth | Invoice processing, UAT |
| Chloe McFadden | Project Associate | Perth | Project workflow, UAT |
| Cameron Stewart | Integration Consultant | Perth | Technical delivery |
| Ashley Kenny | (Role TBD) | (TBD) | Stakeholder |

---

## Conclusion

The Derwent project documentation provides a comprehensive view of a time-critical business system migration with clear business value. The two-phase approach balances urgency (June 30 deadline) with quality (enhanced automation in Phase 2).

**Key Takeaways:**

1. **Business Impact:** 163 hours/year time savings + reduced errors in consultant compensation
2. **Timeline Challenge:** 30-day delivery window requires focused execution
3. **Technical Approach:** Proven integration platforms (UI Path/Make.com) reduce risk
4. **Data Quality Critical:** Automation amplifies both good data and bad data
5. **Change Management:** Clear business driver and engaged stakeholders support adoption

**Next Steps:**

- Cameron: Complete Xero API validation (this week)
- Lee: Finalize scoping document with action items (this week)
- Team: Platform selection decision (end of week)
- Development: Begin Phase 1 build (week 2)

**Overall Assessment:** ✅ Well-scoped project with clear requirements, experienced team, and strong business case. Timeline is aggressive but achievable with two-phase approach. Primary risks are managed through parallel running, UAT, and rollback planning.

---

**Document Version:** 1.0
**Last Updated:** 2025-12-28
**Next Review:** Post-Phase 1 go-live (est. July 2025)
