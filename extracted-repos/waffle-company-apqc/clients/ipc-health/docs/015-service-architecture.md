---
title: "Service Architecture"
project: "IPC Health"
project_uuid: "01980380-acaa-773d-93e6-9692031fae2f"
doc_uuid: "ec65c7c8-3cb4-4494-a92f-0d1abfc65545"
created_at: "2025-08-05T14:51:06.139959+00:00"
doc_index: 15
---

graph LR
    subgraph "SharePoint Site: Service Directory"
        subgraph "Site Pages"
            HomePage[Home Page]
            ServiceDetailPage[Service Search Listing]
            AdminDashboard[Admin Dashboard]
        end
        
        subgraph "Forms"
            ServiceEntryForm[Service Entry Form]
            ServiceEditForm[Service Edit Form]
            FeedbackForm[Feedback Form]
            SharePointForms[SharePoint Forms]
        end
        
        subgraph "Admin Views"
            ServicesReviewList[Services Due for Review]
            MyServicesList[My Services]
            AnalyticsDashboard[Analytics Dashboard]
        end
    end
    
    subgraph "Web Parts Layer"
        PnPSearchWebPart[PnP Search Web Part]
        FilterWebPart[Filter Web Part]
        ListViewWebPart[List View Web Part]
        ServiceDetailWebPart[Search Result Web Part]
        JSONFormattedForms[JSON Formatted Forms]
    end
    
    subgraph "SharePoint Lists"
        ServicesMainList[Services List - Main Data Store]
        FeedbackList[Feedback List]
        
        subgraph "Supporting Data"
            ManagedMetadata[Managed Metadata Terms]
            ChoiceFields[Choice Field Definitions]
            DocumentLibrary[Document Library]
        end
    end
    
    subgraph "Power Automate Workflows"
        ReviewReminderFlow[Review Reminder Flow]
        OverdueNotificationFlow[Overdue Notification Flow]
        FeedbackProcessingFlow[Feedback Processing Flow]
    end
    
    subgraph "Microsoft 365 Integration"
        M365Authentication[M365 Authentication]
        SharePointPlatform[SharePoint Platform Services]
        SharePointAnalytics[SharePoint Analytics]
    end
    
    HomePage --> PnPSearchWebPart
    HomePage --> FilterWebPart
    HomePage --> ListViewWebPart
    
    ServiceDetailPage --> ServiceDetailWebPart
    ServiceEditForm --> JSONFormattedForms
    ServiceEntryForm --> JSONFormattedForms
    
    AdminDashboard --> ServicesReviewList
    AdminDashboard --> MyServicesList
    AdminDashboard --> AnalyticsDashboard
    
    PnPSearchWebPart --> ServicesMainList
    FilterWebPart --> ManagedMetadata
    ListViewWebPart --> ServicesMainList
    ServiceDetailWebPart --> ServicesMainList
    JSONFormattedForms --> ServicesMainList
    JSONFormattedForms --> ManagedMetadata
    JSONFormattedForms --> ChoiceFields
    
    ServicesMainList --> ReviewReminderFlow
    ServicesMainList --> OverdueNotificationFlow
    FeedbackForm --> FeedbackProcessingFlow
    FeedbackForm --> FeedbackList
    
    SharePointPlatform --> ServicesMainList
    SharePointPlatform --> FeedbackList
    M365Authentication --> HomePage
    SharePointForms --> FeedbackForm
    SharePointForms --> ServiceEditForm
    SharePointForms --> ServiceEntryForm
    SharePointAnalytics --> AnalyticsDashboard
    
    ServicesMainList -.-> DocumentLibrary
    FeedbackProcessingFlow --> FeedbackList