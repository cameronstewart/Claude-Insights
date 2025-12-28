---
title: "New Age Home Care - Initial Meeting Summary.md"
project: "QU-0338 - Power Automate Dataverse Consulting Services - New Age Support"
project_uuid: "01975794-3b40-74c0-a6b0-5e8c77e24058"
doc_uuid: "7466b61c-a14e-49f7-bb13-22407ed72b46"
created_at: "2025-06-10T07:45:44.352403+00:00"
doc_index: 5
---

# Initial Meeting Summary: New Age Home Care Power Platform Performance Issues

## Meeting Overview
**Date:** Long weekend (referenced in transcript)  
**Participants:** 
- Cameron Stewart (Senior Consultant, Power Platform expert)
- Lazard (Prd1 - unverified)
- Cameron Gorham (Director)

**Duration:** Approximately 1 hour 44 minutes  
**Purpose:** Power Automate Dataverse consulting services for performance optimization

## Key Issues Identified

### 1. Performance Problem - Primary Issue
**Timestamp:** [00:05:46] - [00:06:53]
- **Problem:** Microsoft Outlook calendar API reading is extremely slow
- **Current Performance:** 15 minutes to process ~100 calendars for one week
- **Rate:** Approximately 5 seconds per calendar (900 seconds ÷ 173 calendars)
- **Business Impact:** Users must wait 15 minutes after clicking button to see results

### 2. Two-Minute Timeout Issue
**Timestamp:** [00:47:32] - [00:51:07]
- **Problem:** Canvas app times out after 2 minutes when calling flows
- **Impact:** UI shows failure even though flow continues running in background
- **Current Workaround:** Email notifications to users when flow completes

### 3. Architecture Details
**Timestamp:** [00:02:03] - [00:04:19]
- **Application Type:** Canvas app inside model-driven app
- **Database:** 15-17 connected tables in Dataverse
- **Flows:** 40-45 flows (batch processing + real-time)
- **Users:** 15-20 end users
- **Industry:** Aged care and disability rostering

## Business Context

### Use Case - Rostering Validation
**Timestamp:** [00:23:49] - [00:26:13]
- **Purpose:** Compare rostering calendars to ensure accuracy
- **Users:** 2 rostering staff members who coordinate efforts
- **Frequency:** Multiple times per day as roster changes occur
- **Scope:** Current week + next week processing required

### Technical Architecture
**Timestamp:** [00:11:31] - [00:13:15]
- **Service Account:** PRD account with shared calendar access (read-only)
- **Calendar Count:** ~173 calendars (100 client + ~73 carer calendars)
- **Data Flow:** Outlook → Dataverse tables → Comparison reports
- **API Calls:** Two connected APIs (get calendars → get calendar events)

## Demonstrated Issues

### Performance Demo
**Timestamp:** [00:47:46] - [00:52:07]
- **Test Run:** Single day processing (June 4-5)
- **Result:** 2 minutes 6 seconds for 83 calendars (carers only)
- **Filtering:** Applied after data retrieval, not before

### Current Flow Structure
**Timestamp:** [00:29:11] - [00:42:27]
1. Get all calendars (9 seconds)
2. Filter calendar array locally
3. Apply to each loop through filtered calendars
4. For each calendar: get events by date range
5. Process and write to Dataverse tables

## Proposed Solutions Discussed

### 1. Concurrent Processing
**Timestamp:** [00:44:01] - [00:45:37]
- **Concept:** Split 173 calendars into 5 loops of ~40 each
- **Challenge:** Cannot modify variables in concurrent loops
- **Potential:** Raw data import first, then processing

### 2. API Optimization
**Timestamp:** [00:39:21] - [00:42:27]
- **Approach:** Reduce data transfer using advanced options
- **Method:** Select only required fields (5 fields vs full record)
- **Implementation:** Already used in other flows

### 3. Pre-filtering Solutions
**Timestamp:** [00:31:39] - [00:34:11]
- **Concept:** Filter calendars with events before processing
- **Challenge:** Current API requires calendar ID to check for events
- **Alternative:** Different API or Graph API exploration

### 4. Scheduled Processing
**Timestamp:** [00:36:13] - [00:37:13]
- **Concept:** Automated 20-minute refresh cycles
- **Challenge:** Real-time changes require immediate validation
- **Issue:** Potential 28-minute worst-case delay (current + next cycle)

### 5. Data Flow Alternative
**Timestamp:** [01:17:42] - [01:22:56]
- **Tool:** Power BI Data Flows for ETL processing
- **Limitation:** Personal calendars only, not shared calendars
- **Status:** Requires further investigation

## Technical Requirements

### Go-Live Timeline
**Timestamp:** [01:26:34] - [01:26:48]
- **Target Date:** July 1st
- **Criticality:** Essential business tool for rostering validation

### Development Environment
**Timestamp:** [01:11:07] - [01:16:04]
- **Current:** Development environment with test environment available
- **Access Required:** Consultant access to test environment
- **Security:** NDA required for sensitive healthcare data

## Next Steps Identified

### 1. Environment Access Setup
- Create user account for consultant in test environment
- Execute NDA for data protection
- Provide access instructions documentation

### 2. Solution Export for Analysis
**Timestamp:** [01:38:05] - [01:43:17]
- **Method:** Export specific flows/apps to separate solution
- **Content:** Flow + canvas app (without sensitive data/tables)
- **Delivery:** Email to consultant for independent analysis

### 3. Follow-up Session
- **Scheduled:** Thursday (referenced multiple times)
- **Focus:** Implementation of performance optimizations
- **Approach:** Work on copies, not production flows

## Key Technical Constraints

1. **Microsoft API Limitations:** Connected APIs require sequential processing
2. **Data Sensitivity:** Healthcare rostering data requires strict confidentiality
3. **Real-time Requirements:** Changes need immediate validation capability
4. **User Experience:** 2-minute timeout creates poor user experience
5. **Concurrent Users:** Only 2 users but require coordination

## Project Scope Summary

**Quote Reference:** QU-0338 - NEW_AGE|PowerPlatform  
**Services:** Power Automate Dataverse Consulting Services  
**Duration:** 2 days via Microsoft Teams (flexible 2-4 hour blocks)  
**Focus Areas:**
- Performance optimization of Outlook calendar API integration
- Resolution of 2-minute timeout issues
- Implementation of efficient data processing workflows

This comprehensive summary captures the performance challenges, proposed solutions, and action items for optimizing the Power Platform solution for New Age Home Care's rostering validation system.