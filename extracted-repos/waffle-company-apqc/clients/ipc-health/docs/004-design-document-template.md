---
title: "Design Document Template"
project: "IPC Health"
project_uuid: "01980380-acaa-773d-93e6-9692031fae2f"
doc_uuid: "2961dd3e-92ee-487d-909c-66af78e8cf26"
created_at: "2025-07-13T11:31:10.658192+00:00"
doc_index: 4
---

# Design Document Template

## Table of Contents
1. [Overview](#1-overview)
2. [Client Input Required](#2-client-input-required)
   1. [Items to Review](#21-items-to-review)
   2. [Design Document Sign-off](#22-design-document-sign-off)
3. [Project Scope](#3-project-scope)
   1. [In Scope](#31-in-scope)
   2. [Out of Scope](#32-out-of-scope)
   3. [Identified Potential Risks](#33-identified-potential-risks)
4. [Site Navigation](#4-site-navigation)
5. [Site Setup](#5-site-setup)
   1. [Primary Site](#51-primary-site)
   2. [Secondary Sites](#52-secondary-sites)
   3. [Team Sites](#53-team-sites)
6. [Visual Design](#6-visual-design)
   1. [Design Elements](#61-design-elements)
   2. [Colors and Theme](#62-colors-and-theme)
   3. [Fonts / Advanced Styling](#63-fonts--advanced-styling)
7. [Page Layouts](#7-page-layouts)
   1. [Main Page](#71-main-page)
   2. [Section Overview](#72-section-overview)
   3. [Team Site](#73-team-site)
8. [Feature One](#8-feature-one)
   1. [Fields to Display](#81-fields-to-display)
9. [Feature Two](#9-feature-two)
   1. [Fields to Display](#91-fields-to-display)
10. [Feature Three](#10-feature-three)
    1. [Category List](#101-category-list)
    2. [Additional Options](#102-additional-options)
11. [Feature Four](#11-feature-four)
12. [System Integration](#12-system-integration)
13. [Workflow Documentation](#13-workflow-documentation)
    1. [Workflow Example](#131-workflow-example)
14. [Appendix](#14-appendix)
    1. [Components](#141-components)

## 1. Overview
This design document details the design criteria for the [Project Name] implementation. This is designed to be a collaborative document which will guide the [Consultant Team] and the [Client] project team in delivering a high-quality solution which will deliver great business outcomes for the organization.

## 2. Client Input Required
### 2.1. Items to Review

| Task | Document Section | Client Notes | Reviewed By | Reviewed |
|------|------------------|--------------|-------------|----------|
| Confirm Site Navigation | Site Navigation | | | ☐ |
| Confirm Site Setup | Site Setup | | | ☐ |
| Confirm Existing Sites | Team Sites | | | ☐ |
| Confirm Feature One Fields | Fields to Display | | | ☐ |
| Confirm Feature Two Fields | Fields to Display | | | ☐ |
| Confirm Feature Three Categories | Category List | | | ☐ |

### 2.2. Design Document Sign-off

| Task | Date | Approved By | Approved |
|------|------|-------------|----------|
| Design Document Sign Off | | | ☐ |

## 3. Project Scope
### 3.1. In Scope
The following items have been identified as being in scope:

**Phase 1: Design & Discovery**
- Kick Off Meeting
- Basic Design as per style guide
- Navigation & Information Architecture
- Page Designs
- Design Document
- Current State Analysis
- Source System Analysis
- Current State Document

**Phase 2: Build & Configuration**
- Installation
- Basic Implementation Design
- Build (including page designs & placeholder content)
- Feature Setup [with workflows]
- System Integration
- Templates (Organization assets)
- Admin Training & Handover
- Configuration Workshop
- Configuration Document
- Mapping Documentation

**Phase 3: Refinement & Migration**
- Permissions Matrix
- Scenario Testing
- Governance Plan
- System Refinement - moving, renaming, any changes, mini workshops
- Admin Training & Support
- Source System to Target System - Initial Migration
- Migration Handover & Validation

**Phase 4: Launch**
- Launch Preparation & Go Live Support
- Standard User Guides
- End User Training Sessions
- Help Centre - storage for videos and training guides
- Walkthrough Video
- Launch Preparation
- Final Migration
- Post-Migration Audit

### 3.2. Out of Scope
The following items have been identified as out of scope and will require an engagement variation:
- Feature A Implementation
- Feature B Implementation

### 3.3. Identified Potential Risks
The following items have been identified as a potential risk for this engagement:
- Data Migration Risk 1
- Data Migration Risk 2

**Key:**
- Primary Component
- Secondary Component
- Team Component
- Page Component
- Link/Header
- Storage Component
- List Component

## 4. Site Navigation
[Navigation diagram or description goes here]

## 5. Site Setup
This section helps determine the technical structure of the system. When setting up a new area, there are three different templates:

**Primary Site:** Main site that provides consistent navigation and roll-up of all subsequent sites.

**Secondary Site:** A site that should be accessible to a wide range of users and is used to push and display shared information. These sites can contain pages, news, events, lists, and document storage.

**Team Site:** A secure and collaborative space to work within a defined group of people with the ability to link to team collaboration tools. These sites can contain pages, news, events, lists, and document storage.

### 5.1. Primary Site
This will be the primary site and be registered as the main site. This is the landing page and home page where the main navigation, branding etc. are controlled.

| Site Name | [Site Name] |
|-----------|-------------|
| URL | [URL] |
| Proposed URL Suffix | [Suffix] |

### 5.2. Secondary Sites
These sites are available to all users and will include a home page with optional sub-pages of information, documents, and relevant news, contacts, and FAQs.

| Site Name | Proposed URL Suffix | Notes |
|-----------|---------------------|-------|
| Site 1 | suffix-1 | This site will house site pages with company information |
| Site 2 | suffix-2 | This site will house a series of document libraries, lists, and a specialized custom search page |
| Site 3 | suffix-3 | These section overview sites will be based on a simple template to highlight key contacts, related policies and procedures, news, and quick links |
| Site 4 | suffix-4 | |
| Site 5 | suffix-5 | |
| Site 6 | suffix-6 | These team overview sites will be based on a simple template to highlight key contacts, related policies and procedures, news, and quick links |
| Site 7 | suffix-7 | |
| Site 8 | suffix-8 | |

### 5.3. Team Sites
These sites will only be available to the specific team and will house internal news, documents, and quick links. These sites can also be connected to collaboration tools. Some of these team sites may already exist.

| Site Name | Proposed URL Suffix | Existing Site (Y/N) | Existing Site URL |
|-----------|---------------------|---------------------|-------------------|
| Team Site 1 | team-site-1 | | |
| Team Site 2 | team-site-2 | | |
| Team Site 3 | team-site-3 | | |
| Team Site 4 | team-site-4 | | |
| Team Site 5 | team-site-5 | | |
| Team Site 6 | team-site-6 | | |
| Team Site 7 | team-site-7 | | |
| Team Site 8 | team-site-8 | | |
| Team Site 9 | team-site-9 | | |
| Team Site 10 | team-site-10 | | |
| Team Site 11 | team-site-11 | | |

## 6. Visual Design
### 6.1. Design Elements
The visual design is a combination of colors and page styling. The following indicates which color elements are being targeted and will be adjusted based on the [Client] brand guidelines and best practices.

1. UI Element 1
2. UI Element 2
3. Menu Navigation
4. Primary Color Theme
5. Secondary Color Theme (hover effects, etc.)

[Visual reference image]

### 6.2. Colors and Theme
The following color codes will be used to achieve the overall look and feel.

| No. | Feature | Color |
|-----|---------|-------|
| 1 | UI Element 1 | Header Color: #XXXXXX (Description) |
|  |  | Accent Color: #XXXXXX (Description) |
|  |  | Font Color: #XXXXXX (Description) |
| 2 | UI Element 2 | Background Color: #XXXXXX (Description) |
|  |  | Border: Bottom Border – #XXXXXX (Description) – 4px |
|  |  | Font Color: #XXXXXX (Description) |
|  |  | Icon Color: #XXXXXX (Description) |
|  |  | Logo: [Description] |
| 3 | Menu Navigation | Font Color: #XXXXXX (Description) |
|  |  | Background Color: #XXXXXX (Description) |
|  |  | Hover Effect Color: #XXXXXX (Description) |
| 4 | Primary Theme | Primary Theme Color: #XXXXXX (Description) |
| 5 | Secondary Theme | Secondary Theme Color: #XXXXXX (Description) |

### 6.3. Fonts / Advanced Styling
[Client] has chosen to use [Font Name] for the system, matching the font used on their public website. This font will be applied across the system.

## 7. Page Layouts
### 7.1. Main Page
**Main Section**
- Component 1
- Component 2
- Component 3
- Component 4
- Component 5
- Component 6

**Right Section**
- Component 7
- Component 8
- Component 9
- Component 10

### 7.2. Section Overview
**Main Section**
- Header Image
- Introduction Text
- Component 1
- Component 2
- Component 3
- Component 4
- Component 5

**Right Section**
- Key Contacts
- Quick Links

### 7.3. Team Site
**Main Section**
- Component 1
- Component 2

**Right Section**
- Component 3

## 8. Feature One
This component displays all locations on a map. With integration with other components, users can find a location and then click through to see all related information.

### 8.1. Fields to Display
- Field 1
- Field 2
- Field 3
- Field 4
- Field 5
- Field 6
- Field 7
- Field 8
  - Category 1

## 9. Feature Two
As your organization grows and changes, the people within it change too. This interactive directory allows you to easily track these changes by displaying up-to-date details. Put a face to the name, filter and search based on profile information, and click through to see relationships. Easily contact your team members and get to know your evolving workforce.

### 9.1. Fields to Display
The component pulls its information from your organization's directory. The Manager field must be populated at a minimum for certain features to function. However, it's suggested that the following fields are also updated to ensure relevancy and usefulness:

- Field 1
- Field 2
- Field 3
- Field 4
- Field 5
- Field 6
- Field 7 (mandatory)

[Interface example images for different views]

## 10. Feature Three
This component allows you to filter based on various parameters. This is the one-stop shop to see all content and to be able to filter it down to what you are looking for.

[Interface example image]

Filtering based on parameters.

[Interface filtering example image]

You can use 'Category' to differentiate between important updates and other content.

### 10.1. Category List
If [Client] would like to use Categories, please provide a list below which can be rolled out to the main site and/or all sites:
- [Category list]

### 10.2. Additional Options
You can aggregate content that you can send via email – like a newsletter, but without the extra work of creating this manually. You can also utilize the built-in automation (enabled by default) which will send regular automated messages to users tailored to content they have missed that relates to them.

[Interface example images]

## 11. Feature Four
This component allows you to filter based on multiple parameters. You can switch between different views. This is the one-stop shop to see all events and to be able to filter them down to what you are looking for.

[Interface example image]

Filter based on parameters with multi-select color-coded options. View in multiple formats.

## 12. System Integration
[System Name] is your gateway to a modern user experience. Through integration with other tools, this can provide your users with a cohesive, holistic experience.

The main site will be configured as the home site, which will appear in the integrated experience for users.

[Interface example image]

When configuring the integration for [Client] at Go Live, the following will be required:
1. Color Icon – [dimensions]
2. Outline Icon – [dimensions]
3. Accent color – [usage]

Examples:
[Icon examples]

## 13. Workflow Documentation
This section provides details on how each workflow is triggered and the resulting outcomes.

Workflow Names – are in *italics*
Column & Property Names – are in **bold**
"values" – are in "quotes"

### 13.1. Workflow Example

| Name | Notes |
|------|-------|
| Overview | Description of the workflow purpose and function |
| Trigger | This workflow is triggered by [trigger action] |
| Actions | 1. Action 1 description<br>2. Action 2 description<br>3. Action 3 description<br>4. Action 4 description |

## 14. Appendix
### 14.1. Components
See the table below for a list of component names, as well as a brief description. You can find a full list of components, as well as detailed videos and written material on how to use them at [documentation URL].

| Component Name | Description | Learn More |
|----------------|-------------|------------|
| Component 1 | Description of Component 1 | [URL] |
| Component 2 | Description of Component 2 | [URL] |
| Component 3 | Description of Component 3 | [URL] |
| Component 4 | Description of Component 4 | [URL] |
| Component 5 | Description of Component 5 | [URL] |
| Component 6 | Description of Component 6 | [URL] |
| Component 7 | Description of Component 7 | [URL] |
| Component 8 | Description of Component 8 | [URL] |
| Component 9 | Description of Component 9 | [URL] |
| Component 10 | Description of Component 10 | [URL] |
| Component 11 | Description of Component 11 | [URL] |
| Component 12 | Description of Component 12 | [URL] |
| Component 13 | Description of Component 13 | [URL] |
| Component 14 | Description of Component 14 | [URL] |
| Component 15 | Description of Component 15 | [URL] |
| Component 16 | Description of Component 16 | [URL] |
| Component 17 | Description of Component 17 | [URL] |
| Component 18 | Description of Component 18 | [URL] |
| Component 19 | Description of Component 19 | [URL] |
| Component 20 | Description of Component 20 | [URL] |