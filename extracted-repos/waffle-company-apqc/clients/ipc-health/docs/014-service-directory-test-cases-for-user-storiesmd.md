---
title: "Service Directory - Test Cases for User Stories.md"
project: "IPC Health"
project_uuid: "01980380-acaa-773d-93e6-9692031fae2f"
doc_uuid: "ad0a850b-b805-4416-b2eb-0c6dac90bca0"
created_at: "2025-08-05T14:03:27.135163+00:00"
doc_index: 14
---

# Service Directory - Test Cases for User Stories

## 1. Must Have Requirements - Test Cases

### 1.1 User Story: Search for services by various parameters
**As a staff member, I want to search for services by various parameters, so that I can find relevant services for clients or internal needs.**

#### Test Cases:

**TC-1.1.1: Basic text search functionality**
- **Given:** User is on the Service Directory homepage
- **When:** User enters "Audiology" in the search field and clicks search
- **Then:** System displays Audiology service in search results
- **Expected Result:** Service title "Audiology" appears in results

**TC-1.1.2: Search by service type**
- **Given:** User is on the Service Directory
- **When:** User searches for "health" 
- **Then:** System returns all health-related services (Audiology, Living Well Program, Sexual and Reproductive Health Hub, etc.)
- **Expected Result:** Multiple health services displayed

**TC-1.1.3: Search by eligibility criteria**
- **Given:** User wants to find services for children
- **When:** User searches for "children" or filters by age group
- **Then:** System returns services like "Brimbank Melton Children's Health & Wellbeing Local" and "Audiology" (1 year+)
- **Expected Result:** Only services accepting children are displayed

**TC-1.1.4: Search with no results**
- **Given:** User is searching for services
- **When:** User enters a term that doesn't match any service (e.g., "xyz123")
- **Then:** System displays "No services found" message with suggestions
- **Expected Result:** Clear messaging and search suggestions provided

**TC-1.1.5: Search by location**
- **Given:** User needs services at a specific location
- **When:** User searches for "Deer Park"
- **Then:** System returns all services available at Deer Park location
- **Expected Result:** Services like Audiology, Living Well Program, IT, etc. are displayed

---

### 1.2 User Story: View services by location
**As a staff member, I want to see which services are available at specific locations, so that I can refer clients to services in their area.**

#### Test Cases:

**TC-1.2.1: Filter services by single location**
- **Given:** User wants to see services at Sunshine campus
- **When:** User selects "Sunshine" from location filter
- **Then:** System displays only services available at Sunshine (Living Well Program, Sexual and Reproductive Health Hub, etc.)
- **Expected Result:** Location-specific service list displayed

**TC-1.2.2: View service locations on service detail page**
- **Given:** User is viewing Living Well Program details
- **When:** User looks at the locations section
- **Then:** System displays "St Albans, Hoppers Crossing, Wyndham Vale, Deer Park, Sunshine"
- **Expected Result:** All service locations clearly listed

**TC-1.2.3: Multi-location service display**
- **Given:** User is searching for services
- **When:** User views services available across multiple locations
- **Then:** System clearly indicates all locations for each service
- **Expected Result:** Multiple locations displayed per service where applicable

**TC-1.2.4: Home visit services identification**
- **Given:** User is looking for services that visit clients
- **When:** User views Occupational Therapy service
- **Then:** System shows "At clients own home" in locations
- **Expected Result:** Home visit option clearly identified

---

### 1.3 User Story: Expected timeframes for support
**As a staff member, I want to know expected timeframes for support, so that I can provide accurate information to clients about service availability.**

#### Test Cases:

**TC-1.3.1: Display waiting times for services**
- **Given:** User is viewing Audiology service details
- **When:** User looks for waiting time information
- **Then:** System displays "Wait times vary (usually no longer than 1 month)"
- **Expected Result:** Current waiting time information clearly shown

**TC-1.3.2: Display no wait time services**
- **Given:** User is viewing Living Well Program
- **When:** User checks waiting times
- **Then:** System shows "No wait time for individual appointments"
- **Expected Result:** Immediate availability clearly communicated

**TC-1.3.3: Variable wait time indication**
- **Given:** User is viewing Occupational Therapy
- **When:** User checks availability
- **Then:** System shows "Wait times vary" with link to current waitlist status
- **Expected Result:** Dynamic wait time information with reference to current status

**TC-1.3.4: Service closure indication**
- **Given:** A service is temporarily closed to new referrals
- **When:** User views the service
- **Then:** System displays clear closure notice and alternative options
- **Expected Result:** Service unavailability clearly communicated

---

### 1.4 User Story: Easy service information updates
**As a service leader, I want to update information about my service easily, so that all staff have access to the most current information.**

#### Test Cases:

**TC-1.4.1: Access edit functionality**
- **Given:** Service leader is logged in as "Responsible Person" for their service
- **When:** User navigates to their service page and clicks "Edit"
- **Then:** System opens editable form with current service information
- **Expected Result:** Edit interface accessible to authorized users only

**TC-1.4.2: Update service information**
- **Given:** Service leader is editing their service information
- **When:** User updates waiting times from "1 month" to "2 weeks" and saves
- **Then:** System saves changes and displays updated information
- **Expected Result:** Changes immediately visible to all users

**TC-1.4.3: Validate required fields**
- **Given:** Service leader is editing service information
- **When:** User attempts to save with required fields empty
- **Then:** System displays validation errors and prevents saving
- **Expected Result:** Data integrity maintained through validation

**TC-1.4.4: Track update history**
- **Given:** Service information has been updated
- **When:** System processes the update
- **Then:** "Date last updated" field is automatically updated
- **Expected Result:** Update timestamp accurately recorded

---

### 1.5 User Story: Service capabilities and limitations
**As a staff member, I want to see what a service can and cannot provide, so that I can make appropriate referrals.**

#### Test Cases:

**TC-1.5.1: Display service capabilities**
- **Given:** User is viewing Audiology service
- **When:** User looks at service capabilities
- **Then:** System displays detailed list of what service can help with (hearing tests, assessments, etc.)
- **Expected Result:** Comprehensive capability list displayed

**TC-1.5.2: Display service limitations**
- **Given:** User is viewing Audiology service
- **When:** User looks at service limitations
- **Then:** System shows "Services/support we don't provide" section with specific exclusions
- **Expected Result:** Clear limitations and exclusions listed

**TC-1.5.3: Display referral alternatives**
- **Given:** User viewing service limitations
- **When:** Service cannot provide needed support
- **Then:** System shows alternative services (e.g., "Hearing Australia provides services to these clients")
- **Expected Result:** Alternative service options provided

**TC-1.5.4: Age-specific limitations**
- **Given:** User is checking service eligibility
- **When:** User views Audiology service for infant referral
- **Then:** System shows "Infants under 12 months old" in exclusions with RCH alternative
- **Expected Result:** Age restrictions clearly communicated with alternatives

---

### 1.6 User Story: Information currency indicators
**As a staff member, I want to see the date information was last updated and/or reviewed so that I have confidence that the information is current.**

#### Test Cases:

**TC-1.6.1: Display last updated date**
- **Given:** User is viewing any service page
- **When:** User looks for currency information
- **Then:** System displays "Date last updated" field
- **Expected Result:** Update date clearly visible on service page

**TC-1.6.2: Display last reviewed date**
- **Given:** User is viewing service information
- **When:** User checks information currency
- **Then:** System shows "Date last reviewed" when available
- **Expected Result:** Review date displayed when applicable

**TC-1.6.3: Highlight outdated information**
- **Given:** Service information hasn't been updated in 6+ months
- **When:** User views the service
- **Then:** System displays warning indicator about information age
- **Expected Result:** Visual cue for potentially outdated information

**TC-1.6.4: Show responsible person**
- **Given:** User wants to know who maintains the information
- **When:** User views service details
- **Then:** System displays "Responsible Person" and "Owner" fields
- **Expected Result:** Contact person for updates clearly identified

---

### 1.7 User Story: Service locations
**As a staff member, I want to see where the service is available so that I can inform client.**

#### Test Cases:

**TC-1.7.1: Single location service display**
- **Given:** User is viewing Audiology service
- **When:** User checks service locations
- **Then:** System shows "Deer Park" as the only location
- **Expected Result:** Single location clearly displayed

**TC-1.7.2: Multiple location service display**
- **Given:** User is viewing Living Well Program
- **When:** User checks service locations
- **Then:** System displays all locations: "St Albans, Hoppers Crossing, Wyndham Vale, Deer Park, Sunshine"
- **Expected Result:** Multiple locations clearly listed

**TC-1.7.3: Home-based service indication**
- **Given:** User is viewing Occupational Therapy
- **When:** User checks service delivery options
- **Then:** System shows "At clients own home" option
- **Expected Result:** Home visit option clearly identified

**TC-1.7.4: Location-specific contact information**
- **Given:** Service operates at multiple locations
- **When:** User needs location-specific contact details
- **Then:** System provides appropriate contact information for each location
- **Expected Result:** Location-relevant contact details available

---

### 1.8 User Story: Internal business service access
**As a staff member, I want to know how to request support from an internal business service.**

#### Test Cases:

**TC-1.8.1: Display internal service request process**
- **Given:** User is viewing IT service page
- **When:** User looks for how to request support
- **Then:** System shows "Email a member of the team directly" under "How to request support"
- **Expected Result:** Clear process for requesting internal support

**TC-1.8.2: Distinguish internal vs client services**
- **Given:** User is browsing services
- **When:** User views different service types
- **Then:** System clearly differentiates between client-facing and internal business services
- **Expected Result:** Service type clearly identified

**TC-1.8.3: Internal service timeframes**
- **Given:** User is viewing internal business service
- **When:** User checks expected timeframes
- **Then:** System displays relevant timeframe information for business services
- **Expected Result:** Business-appropriate timeframes displayed

**TC-1.8.4: Internal service contact methods**
- **Given:** User needs to contact internal service
- **When:** User views contact information
- **Then:** System provides appropriate contact methods for internal requests
- **Expected Result:** Business-relevant contact options available

---

### 1.9 User Story: Client referral process
**As a staff member, I want to know how to refer a client to the service so I can make a referral in the appropriate way.**

#### Test Cases:

**TC-1.9.1: Display referral process**
- **Given:** User is viewing Audiology service
- **When:** User looks for referral information
- **Then:** System shows detailed referral process including "All referrals are managed by the General Intake Team"
- **Expected Result:** Complete referral process clearly outlined

**TC-1.9.2: Internal referral instructions**
- **Given:** User needs to make internal referral
- **When:** User views referral process
- **Then:** System provides TrakCare internal referral instructions
- **Expected Result:** Internal referral steps clearly documented

**TC-1.9.3: External referral requirements**
- **Given:** User is viewing Occupational Therapy for older clients
- **When:** User checks referral process
- **Then:** System shows My Aged Care requirement for 65+ clients
- **Expected Result:** Age-specific referral pathways clearly explained

**TC-1.9.4: Self-referral options**
- **Given:** User is viewing Living Well Program
- **When:** User checks referral options
- **Then:** System shows both professional and self-referral options
- **Expected Result:** Multiple referral pathways clearly identified

---

### 1.10 User Story: Alternative external services
**As a staff member, I want to see alternative external services or community supports so that I can refer clients that are ineligible for the IPC Service.**

#### Test Cases:

**TC-1.10.1: Display external alternatives**
- **Given:** User is viewing Audiology service limitations
- **When:** Client is ineligible for IPC service
- **Then:** System shows "Hearing Australia provides services to these clients"
- **Expected Result:** Specific external service alternatives provided

**TC-1.10.2: Age-specific alternatives**
- **Given:** User has infant client for audiology
- **When:** Client is under 12 months
- **Then:** System shows "Royal Children's Hospital (RCH) Victorian Infant Hearing Screening Program"
- **Expected Result:** Age-appropriate alternative services listed

**TC-1.10.3: Condition-specific alternatives**
- **Given:** User has client with complex needs
- **When:** Client requires specialist services
- **Then:** System shows "Western Health provide specialist Audiology services"
- **Expected Result:** Condition-specific alternatives provided

**TC-1.10.4: External service contact information**
- **Given:** External alternatives are listed
- **When:** User needs to make external referral
- **Then:** System provides contact information or referral process for external services
- **Expected Result:** Actionable external service information available

---

### 1.11 User Story: Service overview
**As a staff member, I want to see an overview of each service so I can quickly assess if the service matches my/a client's needs.**

#### Test Cases:

**TC-1.11.1: Display service summary**
- **Given:** User is browsing services
- **When:** User views service overview
- **Then:** System displays concise service description and key capabilities
- **Expected Result:** Quick service assessment possible from overview

**TC-1.11.2: Service goals display**
- **Given:** User is viewing service details
- **When:** User looks at service objectives
- **Then:** System shows "What are the goals of the service" section
- **Expected Result:** Service purpose clearly communicated

**TC-1.11.3: Key service features highlighted**
- **Given:** User needs quick service assessment
- **When:** User views service overview
- **Then:** System highlights key features, eligibility, and delivery methods
- **Expected Result:** Essential service information immediately visible

**TC-1.11.4: Service category identification**
- **Given:** User is browsing services
- **When:** User views service listings
- **Then:** System clearly identifies service category (health, business support, etc.)
- **Expected Result:** Service type immediately recognizable

---

### 1.12 User Story: Service fees and costs
**As a staff member, I want to see any fees or costs associated with the service so that I can inform the client before I make a referral.**

#### Test Cases:

**TC-1.12.1: Display fee structure**
- **Given:** User is viewing Audiology service
- **When:** User checks cost information
- **Then:** System displays detailed fee structure by income level and age group
- **Expected Result:** Complete fee structure clearly displayed

**TC-1.12.2: Free service indication**
- **Given:** User is viewing Living Well Program
- **When:** User checks service costs
- **Then:** System clearly states "This is a free service"
- **Expected Result:** Free services clearly identified

**TC-1.12.3: Fee variation by circumstances**
- **Given:** User is viewing Audiology fees
- **When:** User checks different client situations
- **Then:** System shows fees vary by income level, age, and card type
- **Expected Result:** Fee variations clearly explained

**TC-1.12.4: Funding source impact on fees**
- **Given:** User is viewing Occupational Therapy
- **When:** User checks fees for different funding types
- **Then:** System shows different fee structures for HACC, NDIS, and fee-for-service clients
- **Expected Result:** Funding-specific fee information available

---

### 1.13 User Story: CRM system information
**As a service leader, I want to know what services are using which CRM to support collaboration and client care.**

#### Test Cases:

**TC-1.13.1: Display CRM system used**
- **Given:** Service leader is viewing service details
- **When:** User looks for CRM information
- **Then:** System displays "What CRM does the service use?" field (e.g., "TrakCare", "Nookal")
- **Expected Result:** CRM system clearly identified

**TC-1.13.2: Multiple CRM systems**
- **Given:** Service uses multiple systems
- **When:** User views CRM information
- **Then:** System shows all systems used (e.g., "TrakCare; Nookal")
- **Expected Result:** All CRM systems listed

**TC-1.13.3: Filter services by CRM**
- **Given:** Service leader wants to find services using specific CRM
- **When:** User filters by CRM type
- **Then:** System displays all services using that CRM system
- **Expected Result:** CRM-based service filtering available

**TC-1.13.4: CRM integration implications**
- **Given:** Service leader is planning collaboration
- **When:** User views CRM information
- **Then:** System provides relevant information about system compatibility
- **Expected Result:** Collaboration-relevant CRM information available

---

### 1.14 User Story: PROM information
**As a service leader, I want to know which PROMs the service uses so that I know who to liaise with if I want to find out more about that particular PROM.**

#### Test Cases:

**TC-1.14.1: Display PROM measures used**
- **Given:** Service leader is viewing service details
- **When:** User looks for evaluation measures
- **Then:** System displays PROMs used (e.g., "Canadian Occupational Performance Measure HONOSKA")
- **Expected Result:** PROM measures clearly listed

**TC-1.14.2: Service-specific PROMs**
- **Given:** Different services use different measures
- **When:** User views evaluation data
- **Then:** System shows "Different teams will use different measures" where applicable
- **Expected Result:** PROM variation acknowledged

**TC-1.14.3: PROM contact information**
- **Given:** Service leader wants to learn about specific PROM
- **When:** User views PROM information
- **Then:** System provides contact information for team using that PROM
- **Expected Result:** Liaison contact information available

**TC-1.14.4: No PROM indication**
- **Given:** Service doesn't use formal PROMs
- **When:** User checks evaluation measures
- **Then:** System clearly indicates when no formal PROMs are used
- **Expected Result:** Absence of PROMs clearly communicated

---

### 1.15 User Story: Service funding information
**As a service leader, I want to know how a service is funded, so that I understand the context the service operates in.**

#### Test Cases:

**TC-1.15.1: Display funding source**
- **Given:** Service leader is viewing service details
- **When:** User looks for funding information
- **Then:** System displays funding source (e.g., "Community Health", "Victorian Department of Health")
- **Expected Result:** Funding source clearly identified

**TC-1.15.2: Multiple funding streams**
- **Given:** Service has multiple funding sources
- **When:** User views funding information
- **Then:** System shows all funding streams (e.g., "Jointly funded by Victorian Department of Health and Head to Health")
- **Expected Result:** All funding sources listed

**TC-1.15.3: Funding-specific service variations**
- **Given:** Service operates under different funding models
- **When:** User views service details
- **Then:** System explains how funding affects service delivery
- **Expected Result:** Funding impact on service delivery explained

**TC-1.15.4: Funding constraints**
- **Given:** Service has funding-related limitations
- **When:** User views service information
- **Then:** System explains any funding-related service constraints
- **Expected Result:** Funding limitations clearly communicated

---

### 1.16 User Story: Service eligibility criteria
**As a staff member, I want to know eligibility criteria for services, so that I can determine if a client is eligible.**

#### Test Cases:

**TC-1.16.1: Age-based eligibility**
- **Given:** User is checking client eligibility for Audiology
- **When:** User views eligibility criteria
- **Then:** System shows "All adults and children 1 year or older"
- **Expected Result:** Age requirements clearly specified

**TC-1.16.2: Geographic eligibility**
- **Given:** User has client from specific area
- **When:** User checks eligibility
- **Then:** System shows geographic requirements (e.g., "living or working in the Brimbank, Hobson's Bay or Wyndham Local Government Areas")
- **Expected Result:** Geographic eligibility clearly defined

**TC-1.16.3: Condition-based eligibility**
- **Given:** User is checking service eligibility
- **When:** User views eligibility criteria
- **Then:** System shows condition-specific requirements where applicable
- **Expected Result:** Medical/condition criteria clearly specified

**TC-1.16.4: Exclusion criteria**
- **Given:** User needs to determine if client is excluded
- **When:** User views eligibility information
- **Then:** System clearly lists exclusion criteria with explanations
- **Expected Result:** Exclusions clearly identified with rationale

---

## 2. Should Have Requirements - Test Cases

### 2.1 User Story: Contact information
**As a staff member, I want to see contact information for services, so that I can direct queries appropriately.**

#### Test Cases:

**TC-2.1.1: Display primary contact information**
- **Given:** User is viewing service details
- **When:** User looks for contact information
- **Then:** System displays relevant contact details (email, phone, team leader)
- **Expected Result:** Contact information clearly visible

**TC-2.1.2: Role-specific contacts**
- **Given:** User needs to contact specific team member
- **When:** User views contact information
- **Then:** System shows role-based contacts (Team Leader, Manager, etc.)
- **Expected Result:** Appropriate contact person identified

**TC-2.1.3: Service-specific contact methods**
- **Given:** Different services have different contact preferences
- **When:** User views contact information
- **Then:** System shows preferred contact method for each service
- **Expected Result:** Service-appropriate contact methods displayed

**TC-2.1.4: Emergency or urgent contact information**
- **Given:** User has urgent query
- **When:** User looks for contact information
- **Then:** System provides appropriate urgency-based contact options
- **Expected Result:** Urgent contact pathways available

---

### 2.2 User Story: Support delivery types
**As a staff member, I want to see what types of support are available (in-person, telehealth, etc.), so that I can inform clients of service delivery options.**

#### Test Cases:

**TC-2.2.1: Display delivery methods**
- **Given:** User is viewing service details
- **When:** User checks service delivery options
- **Then:** System shows available delivery types (e.g., "In person on campus", "via phone/Teams")
- **Expected Result:** All delivery methods clearly listed

**TC-2.2.2: Location-specific delivery**
- **Given:** Service offers different delivery types at different locations
- **When:** User views delivery options
- **Then:** System shows location-specific delivery methods
- **Expected Result:** Location-relevant delivery options displayed

**TC-2.2.3: Home visit services**
- **Given:** Service offers home visits
- **When:** User checks delivery options
- **Then:** System clearly indicates "At clients own home" option
- **Expected Result:** Home visit option clearly identified

**TC-2.2.4: Technology requirements**
- **Given:** Service offers telehealth
- **When:** User views delivery options
- **Then:** System provides information about technology requirements
- **Expected Result:** Technical requirements for telehealth clearly stated

---

### 2.3 User Story: Group program information
**As a service leader, I want to share information about group programs, so that staff can refer appropriate clients.**

#### Test Cases:

**TC-2.3.1: Display group programs**
- **Given:** User is viewing Living Well Program
- **When:** User looks for group options
- **Then:** System shows "Learn to Relax" group program details
- **Expected Result:** Group programs clearly described

**TC-2.3.2: Group program details**
- **Given:** User is viewing group program information
- **When:** User needs program specifics
- **Then:** System shows duration, frequency, and content (e.g., "6-week program: weekly session for 1 hour")
- **Expected Result:** Complete program details available

**TC-2.3.3: Group eligibility**
- **Given:** User is considering group referral
- **When:** User checks group requirements
- **Then:** System shows specific eligibility for group programs
- **Expected Result:** Group-specific eligibility clearly stated

**TC-2.3.4: Group availability**
- **Given:** User wants to refer to group program
- **When:** User checks program availability
- **Then:** System shows current group schedule and waiting times
- **Expected Result:** Group availability information current

---

### 2.4 User Story: Training information
**As a support leader, I want to share information about training my business unit offers, so that staff know what is available.**

#### Test Cases:

**TC-2.4.1: Display training offerings**
- **Given:** User is viewing IT service
- **When:** User looks for training information
- **Then:** System shows available training (e.g., "MS Teams", "Audio Visual equipment")
- **Expected Result:** Training options clearly listed

**TC-2.4.2: Training contact information**
- **Given:** User wants to access training
- **When:** User views training details
- **Then:** System provides contact information for training requests
- **Expected Result:** Training contact details available

**TC-2.4.3: Training schedules**
- **Given:** Training is offered regularly
- **When:** User checks training availability
- **Then:** System shows training schedule and booking information
- **Expected Result:** Training schedule clearly displayed

**TC-2.4.4: Training prerequisites**
- **Given:** Training has specific requirements
- **When:** User views training details
- **Then:** System shows any prerequisites or requirements
- **Expected Result:** Training requirements clearly stated

---

### 2.5 User Story: Service resources and brochures
**As a staff member, I want to access brochures and other resources for the service so that I can provide service information to clients.**

#### Test Cases:

**TC-2.5.1: Display available resources**
- **Given:** User is viewing service details
- **When:** User looks for client resources
- **Then:** System shows available brochures, forms, and information materials
- **Expected Result:** Resource library accessible

**TC-2.5.2: Download functionality**
- **Given:** Resources are available
- **When:** User clicks on resource link
- **Then:** System allows download or viewing of resource
- **Expected Result:** Resources easily accessible

**TC-2.5.3: Resource currency**
- **Given:** Resources may become outdated
- **When:** User views resources
- **Then:** System shows last updated date for resources
- **Expected Result:** Resource currency clearly indicated

**TC-2.5.4: Resource categorization**
- **Given:** Multiple resources are available
- **When:** User browses resources
- **Then:** System categorizes resources by type and purpose
- **Expected Result:** Resources organized for easy access

---

### 2.6 User Story: Team documents
**As a service leader, I want to share key documents that inform my team's work.**

#### Test Cases:

**TC-2.6.1: Display team documents**
- **Given:** Service leader has uploaded team documents
- **When:** Staff member views service information
- **Then:** System shows available team documents
- **Expected Result:** Team documents accessible to relevant staff

**TC-2.6.2: Document access control**
- **Given:** Some documents are confidential
- **When:** User attempts to access documents
- **Then:** System controls access based on user permissions
- **Expected Result:** Appropriate document security maintained

**TC-2.6.3: Document version control**
- **Given:** Team documents are updated
- **When:** User accesses documents
- **Then:** System ensures latest version is available
- **Expected Result:** Current document versions accessible

**TC-2.6.4: Document organization**
- **Given:** Multiple team documents exist
- **When:** User browses documents
- **Then:** System organizes documents by type and relevance
- **Expected Result:** Documents logically organized

---

### 2.7 User Story: Research and quality improvement projects
**As a service leader, I want to share recent research or quality improvement projects by my team so that learnings can be shared with other teams.**

#### Test Cases:

**TC-2.7.1: Display research projects**
- **Given:** Service has completed research projects
- **When:** User views service information
- **Then:** System shows recent research and QI projects
- **Expected Result:** Research activities clearly documented

**TC-2.7.2: Project outcomes**
- **Given:** Research projects have outcomes
- **When:** User views project information
- **Then:** System shows project results and learnings
- **Expected Result:** Project outcomes accessible

**TC-2.7.3: Cross-team learning**
- **Given:** Projects have broader applicability
- **When:** Other teams view research information
- **Then:** System facilitates knowledge sharing across teams
- **Expected Result:** Research learnings widely accessible

**TC-2.7.4: Project contact information**
- **Given:** Teams want to learn more about projects
- **When:** User views research information
- **Then:** System provides contact information for project leads
- **Expected Result:** Research collaboration facilitated

---

### 2.8 User Story: Team meetings information
**As a staff member, I want to know when and where teams hold regular meetings so that I can schedule collaboration, training and information sharing activities.**

#### Test Cases:

**TC-2.8.1: Display meeting schedules**
- **Given:** User is viewing service information
- **When:** User looks for meeting information
- **Then:** System shows meeting frequency, day, time, and location
- **Expected Result:** Complete meeting schedule displayed

**TC-2.8.2: Multiple meeting types**
- **Given:** Team has different types of meetings
- **When:** User views meeting information
- **Then:** System distinguishes between different meeting types (team meetings, case conferences)
- **Expected Result:** Meeting types clearly differentiated

**TC-2.8.3: Hybrid meeting information**
- **Given:** Meetings are held in hybrid format
- **When:** User views meeting details
- **Then:** System shows both physical and virtual meeting options
- **Expected Result:** Hybrid meeting options clearly indicated

**TC-2.8.4: Meeting contact information**
- **Given:** User wants to join team meetings
- **When:** User views meeting information
- **Then:** System provides contact information for meeting attendance
- **Expected Result:** Meeting participation facilitated

---

### 2.9 User Story: FAQ information
**As a service leader, I want to provide answers to FAQ so that staff can access routine information without contacting my team.**

#### Test Cases:

**TC-2.9.1: Display FAQ section**
- **Given:** Service has frequently asked questions
- **When:** User views service information
- **Then:** System shows FAQ section with common questions and answers
- **Expected Result:** FAQ easily accessible

**TC-2.9.2: FAQ search functionality**
- **Given:** FAQ section contains multiple questions
- **When:** User searches within FAQ
- **Then:** System allows searching FAQ content
- **Expected Result:** FAQ search functionality available

**TC-2.9.3: FAQ currency**
- **Given:** FAQ information may become outdated
- **When:** User views FAQ
- **Then:** System shows when FAQ was last updated
- **Expected Result:** FAQ currency clearly indicated

**TC-2.9.4: FAQ categorization**
- **Given:** FAQ covers multiple topics
- **When:** User browses FAQ
- **Then:** System organizes FAQ by topic or category
- **Expected Result:** FAQ logically organized

---

### 2.10 User Story: Service filtering by tags
**As a staff member, I want to filter services by tags (e.g., client groups), so that I can find relevant services based on specific needs.**

#### Test Cases:

**TC-2.10.1: Filter by client age group**
- **Given:** User needs services for children
- **When:** User applies "children" tag filter
- **Then:** System shows services appropriate for children
- **Expected Result:** Age-appropriate services displayed

**TC-2.10.2: Filter by service type**
- **Given:** User needs specific type of service
- **When:** User applies service type filter (e.g., "mental health")
- **Then:** System shows services of that type
- **Expected Result:** Service type filtering works correctly

**TC-2.10.3: Multiple tag filtering**
- **Given:** User needs services meeting multiple criteria
- **When:** User applies multiple tag filters
- **Then:** System shows services meeting all selected criteria
- **Expected Result:** Multi-criteria filtering functions correctly

**TC-2.10.4: Clear filter functionality**
- **Given:** User has applied filters
- **When:** User wants to see all services again
- **Then:** System provides easy way to clear all filters
- **Expected Result:** Filter clearing functionality available

---

## 3. Could Have Requirements - Test Cases

### 3.1 User Story: Mobile device access
**As a staff member, I want to access the Service Directory on my mobile device, so that I can find information when away from my desk.**

#### Test Cases:

**TC-3.1.1: Mobile responsive design**
- **Given:** User accesses Service Directory on mobile device
- **When:** User navigates the site
- **Then:** System displays content appropriately for mobile screen
- **Expected Result:** Mobile-friendly interface displayed

**TC-3.1.2: Mobile search functionality**
- **Given:** User is using mobile device
- **When:** User searches for services
- **Then:** Search functionality works optimally on mobile
- **Expected Result:** Mobile search performs correctly

**TC-3.1.3: Mobile service details display**
- **Given:** User views service details on mobile
- **When:** User accesses service information
- **Then:** All service details are readable and accessible on mobile
- **Expected Result:** Complete service information available on mobile

**TC-3.1.4: Mobile performance**
- **Given:** User accesses Service Directory on mobile
- **When:** User performs various actions
- **Then:** System responds quickly on mobile devices
- **Expected Result:** Acceptable mobile performance maintained

---

### 3.2 User Story: Usage statistics
**As a service leader, I want to see usage statistics for my service information, so that I can understand how often it is being accessed.**

#### Test Cases:

**TC-3.2.1: Display view statistics**
- **Given:** Service leader accesses their service analytics
- **When:** User views usage statistics
- **Then:** System shows number of page views and unique visitors
- **Expected Result:** Usage statistics clearly displayed

**TC-3.2.2: Time-based analytics**
- **Given:** Service leader wants to see usage trends
- **When:** User views analytics dashboard
- **Then:** System shows usage over time (daily, weekly, monthly)
- **Expected Result:** Time-based usage trends available

**TC-3.2.3: Search analytics**
- **Given:** Service leader wants to understand discoverability
- **When:** User views search analytics
- **Then:** System shows how often service appears in search results
- **Expected Result:** Search performance metrics available

**TC-3.2.4: Export analytics data**
- **Given:** Service leader wants to use analytics data
- **When:** User requests data export
- **Then:** System allows export of usage statistics
- **Expected Result:** Analytics data exportable

---

### 3.3 User Story: Feedback on service information
**As a staff member, I want to provide feedback on service information, so that it can be continually improved.**

#### Test Cases:

**TC-3.3.1: Feedback submission**
- **Given:** User identifies issue with service information
- **When:** User submits feedback
- **Then:** System accepts and processes feedback
- **Expected Result:** Feedback successfully submitted

**TC-3.3.2: Feedback routing**
- **Given:** Feedback is submitted about service
- **When:** System processes feedback
- **Then:** Feedback is routed to appropriate service leader
- **Expected Result:** Feedback reaches responsible person

**TC-3.3.3: Feedback tracking**
- **Given:** User has submitted feedback
- **When:** User wants to check status
- **Then:** System provides feedback status updates
- **Expected Result:** Feedback status trackable

**TC-3.3.4: Feedback analysis**
- **Given:** Service receives multiple feedback items
- **When:** Service leader reviews feedback
- **Then:** System provides feedback analysis and trends
- **Expected Result:** Feedback patterns identifiable

---

### 3.4 User Story: Browse services by category
**As a staff member, I want to browse services by category, so that I can explore available services in a structured way.**

#### Test Cases:

**TC-3.4.1: Category navigation**
- **Given:** User wants to browse services by category
- **When:** User selects a service category
- **Then:** System displays all services in that category
- **Expected Result:** Category-based browsing available

**TC-3.4.2: Category hierarchy**
- **Given:** Services are organized in hierarchical categories
- **When:** User navigates category structure
- **Then:** System shows clear category relationships
- **Expected Result:** Category hierarchy clearly displayed

**TC-3.4.3: Cross-category services**
- **Given:** Some services fit multiple categories
- **When:** User browses categories
- **Then:** System shows services in all relevant categories
- **Expected Result:** Services appear in appropriate categories

**TC-3.4.4: Category descriptions**
- **Given:** Categories may need explanation
- **When:** User views category
- **Then:** System provides category descriptions where helpful
- **Expected Result:** Category context clearly provided

---

### 3.5 User Story: Bookmark frequently used services
**As a staff member, I want to bookmark services I frequently refer to, so that I can quickly access them in the future.**

#### Test Cases:

**TC-3.5.1: Bookmark services**
- **Given:** User frequently accesses certain services
- **When:** User bookmarks a service
- **Then:** System saves service to user's bookmarks
- **Expected Result:** Bookmarking functionality available

**TC-3.5.2: Access bookmarked services**
- **Given:** User has bookmarked services
- **When:** User accesses bookmark section
- **Then:** System displays all bookmarked services
- **Expected Result:** Bookmarked services easily accessible

**TC-3.5.3: Manage bookmarks**
- **Given:** User wants to organize bookmarks
- **When:** User manages bookmark list
- **Then:** System allows bookmark organization and removal
- **Expected Result:** Bookmark management functionality available

**TC-3.5.4: Bookmark persistence**
- **Given:** User has created bookmarks
- **When:** User logs out and back in
- **Then:** System maintains user's bookmarks
- **Expected Result:** Bookmarks persist across sessions

---

## 4. Cross-Functional Test Cases

### 4.1 Security and Access Control

**TC-4.1.1: User authentication**
- **Given:** User accesses Service Directory
- **When:** User attempts to view content
- **Then:** System requires appropriate authentication
- **Expected Result:** Only authenticated users can access content

**TC-4.1.2: Role-based access**
- **Given:** Different users have different roles
- **When:** User accesses service information
- **Then:** System shows content appropriate to user role
- **Expected Result:** Role-appropriate content displayed

**TC-4.1.3: Edit permissions**
- **Given:** User attempts to edit service information
- **When:** User is not authorized to edit
- **Then:** System prevents unauthorized editing
- **Expected Result:** Edit access properly controlled

---

### 4.2 Performance and Usability

**TC-4.2.1: Page load performance**
- **Given:** User accesses any page in Service Directory
- **When:** Page loads
- **Then:** Page loads within acceptable time (< 3 seconds)
- **Expected Result:** Good page performance maintained

**TC-4.2.2: Search performance**
- **Given:** User performs search
- **When:** Search is executed
- **Then:** Results appear within 2 seconds
- **Expected Result:** Search performance acceptable

**TC-4.2.3: Accessibility compliance**
- **Given:** User with accessibility needs accesses Service Directory
- **When:** User navigates and uses functionality
- **Then:** System meets accessibility standards
- **Expected Result:** Accessibility requirements met

---

### 4.3 Data Integrity and Validation

**TC-4.3.1: Required field validation**
- **Given:** User updates service information
- **When:** User attempts to save with missing required fields
- **Then:** System prevents saving and shows validation errors
- **Expected Result:** Data integrity maintained

**TC-4.3.2: Data format validation**
- **Given:** User enters data in incorrect format
- **When:** User attempts to save
- **Then:** System validates data format and shows errors
- **Expected Result:** Data format consistency maintained

**TC-4.3.3: Automatic timestamp updates**
- **Given:** Service information is updated
- **When:** Changes are saved
- **Then:** System automatically updates "Date last updated" field
- **Expected Result:** Update timestamps accurate

---

This comprehensive test suite covers all user stories with specific, measurable test cases that validate both functional requirements and user experience expectations. Each test case includes clear preconditions, actions, and expected results that can be executed by testing teams to ensure the Service Directory meets all specified requirements.