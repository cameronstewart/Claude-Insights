---
title: "Service Directory - Management Interface Mockup.html"
project: "IPC Health"
project_uuid: "01980380-acaa-773d-93e6-9692031fae2f"
doc_uuid: "4560b408-efad-4421-b5a9-4f24e19d5470"
created_at: "2025-07-13T23:32:22.118674+00:00"
doc_index: 10
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Directory - Management Interface Mockup</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            line-height: 1.6;
            padding: 20px;
            background-color: #f7f7f7;
        }
        .mockup-container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        h1 {
            color: #0078d4;
            margin-bottom: 30px;
            font-weight: 600;
        }
        h2 {
            color: #0078d4;
            margin-top: 40px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e0e0;
            font-weight: 600;
        }
        .form-row {
            margin-bottom: 15px;
        }
        .form-label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }
        .form-input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 2px;
        }
        .form-input.required {
            border-left: 3px solid #d83b01;
        }
        .form-input:focus {
            outline: none;
            border-color: #0078d4;
        }
        .validation-error {
            color: #d83b01;
            font-size: 12px;
            margin-top: 5px;
        }
        .status-indicator {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .status-draft {
            background-color: #ffe8cc;
            color: #d83b01;
        }
    </style>
</head>
<body>
    <div class="mockup-container">
        <h1>Service Directory - Management Interface</h1>

        <!-- SharePoint Header -->
        <div style="background-color: #0078d4; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-weight: bold; font-size: 18px;">IPC Health</div>
            <div style="display: flex; align-items: center;">
                Jane Smith
                <div style="width: 30px; height: 30px; background-color: white; border-radius: 50%; margin-left: 10px; display: flex; align-items: center; justify-content: center; color: #0078d4; font-weight: bold;">JS</div>
            </div>
        </div>

        <!-- SharePoint Navigation -->
        <div style="background-color: #f0f0f0; padding: 10px; margin-bottom: 20px;">
            <span style="margin-right: 20px;">Home</span>
            <span style="margin-right: 20px; color: #0078d4; border-bottom: 2px solid #0078d4;">Service Directory</span>
            <span>Administration</span>
        </div>

        <!-- Service Management Interface -->
        <div style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="font-size: 24px; color: #0078d4;">Edit Service: Dental Services</div>
                <div style="display: flex; gap: 10px;">
                    <button style="padding: 8px 15px; background-color: #f0f0f0; color: #333; border: none; border-radius: 2px; cursor: pointer;">Cancel</button>
                    <button style="padding: 8px 15px; background-color: #0078d4; color: white; border: none; border-radius: 2px; cursor: pointer;">Save as Draft</button>
                    <button style="padding: 8px 15px; background-color: #0078d4; color: white; border: none; border-radius: 2px; cursor: pointer;">Publish</button>
                </div>
            </div>

            <!-- Status Indicator -->
            <div class="status-indicator status-draft">Status: Draft</div>

            <!-- Review Notification -->
            <div style="background-color: #ffe8cc; border-left: 3px solid #d83b01; padding: 10px 15px; margin-bottom: 20px;">
                <strong>Review Due:</strong> This service information is due for review on July 15, 2025.
            </div>

            <!-- Form Section: Basic Information -->
            <div style="background-color: white; padding: 20px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h3 style="color: #0078d4; margin-top: 0; margin-bottom: 15px;">Basic Information</h3>
                
                <div class="form-row">
                    <label class="form-label">Service Name</label>
                    <input type="text" class="form-input required" value="Dental Services">
                </div>

                <div class="form-row">
                    <label class="form-label">Service Goals</label>
                    <textarea class="form-input required" rows="3">Providing comprehensive dental care to improve oral health in our community</textarea>
                </div>

                <div class="form-row">
                    <label class="form-label">Service Type</label>
                    <select class="form-input required">
                        <option selected>Client-facing</option>
                        <option>Business Support</option>
                    </select>
                </div>

                <div class="form-row">
                    <label class="form-label">Service Tags</label>
                    <input type="text" class="form-input" value="Dental, Health, Oral Care">
                </div>
            </div>

            <!-- Form Section: Service Details -->
            <div style="background-color: white; padding: 20px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h3 style="color: #0078d4; margin-top: 0; margin-bottom: 15px;">Service Details</h3>
                
                <div class="form-row">
                    <label class="form-label">Service Offerings</label>
                    <textarea class="form-input required" rows="6">Our dental services include:
* General check-ups and cleanings
* Fillings and extractions
* Preventative care and education
* Children's dentistry
* Emergency dental care</textarea>
                </div>

                <div class="form-row">
                    <label class="form-label">Eligibility Criteria</label>
                    <textarea class="form-input required" rows="6">Our dental services are available to:
* Health Care Card holders
* Pensioner Concession Card holders
* All children aged 0-12 years
* Aboriginal and Torres Strait Islander people
* Refugees and asylum seekers</textarea>
                    <div class="validation-error">This field is required</div>
                </div>

                <div class="form-row">
                    <label class="form-label">Referral Process</label>
                    <textarea class="form-input required" rows="6">Clients can be referred to the Dental Service through:
* Self-referral (clients can call the service directly)
* GP referral (using the standard referral form)
* Internal referral from other IPC Health services

Please note that all clients will be assessed for priority access based on clinical need.</textarea>
                </div>

                <div class="form-row">
                    <label class="form-label">Service Exclusions</label>
                    <textarea class="form-input" rows="6">Our dental service does not provide:
* Orthodontic treatment (braces)
* Cosmetic dental procedures
* Dental implants</textarea>
                </div>
            </div>

            <!-- Form Section: Contact Information -->
            <div style="background-color: white; padding: 20px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h3 style="color: #0078d4; margin-top: 0; margin-bottom: 15px;">Contact Information</h3>
                
                <div class="form-row">
                    <label class="form-label">Service Contacts</label>
                    <textarea class="form-input required" rows="6">**Service Owner:** Jane Smith
**Phone:** (03) 9999 9999
**Email:** dental@ipchealth.com.au
**Hours:** Monday-Friday, 9am-5pm</textarea>
                </div>

                <div class="form-row">
                    <label class="form-label">Service Locations</label>
                    <select class="form-input required" multiple size="5">
                        <option selected>Sunshine</option>
                        <option selected>Deer Park</option>
                        <option>Hoppers Crossing</option>
                        <option>St Albans</option>
                        <option>Wyndham Vale</option>
                        <option>Altona Meadows</option>
                    </select>
                </div>

                <div class="form-row">
                    <label class="form-label">Wait Times</label>
                    <textarea class="form-input" rows="4">**General Dental:** 3-4 months
**Emergency Dental:** 1-2 days</textarea>
                </div>
            </div>

            <!-- Form Section: Management Information -->
            <div style="background-color: white; padding: 20px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h3 style="color: #0078d4; margin-top: 0; margin-bottom: 15px;">Management Information</h3>
                
                <div class="form-row">
                    <label class="form-label">Service Owner</label>
                    <input type="text" class="form-input required" value="Jane Smith">
                </div>

                <div class="form-row">
                    <label class="form-label">Accountable Person</label>
                    <input type="text" class="form-input required" value="Michael Johnson">
                </div>

                <div class="form-row">
                    <label class="form-label">Last Review Date</label>
                    <input type="date" class="form-input required" value="2025-01-15">
                </div>

                <div class="form-row">
                    <label class="form-label">Next Review Date</label>
                    <input type="date" class="form-input required" value="2025-07-15">
                </div>
            </div>

            <!-- Version History -->
            <div style="margin-top: 30px;">
                <h3 style="color: #0078d4; margin-top: 0; margin-bottom: 15px;">Version History</h3>
                
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <div style="font-size: 14px;">Version 3.0 - Published on January 15, 2025 by Jane Smith</div>
                    <div style="color: #0078d4; cursor: pointer;">View | Restore</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <div style="font-size: 14px;">Version 2.1 - Draft on January 10, 2025 by Jane Smith</div>
                    <div style="color: #0078d4; cursor: pointer;">View | Restore</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <div style="font-size: 14px;">Version 2.0 - Published on July 20, 2024 by Jane Smith</div>
                    <div style="color: #0078d4; cursor: pointer;">View | Restore</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                    <div style="font-size: 14px;">Version 1.0 - Published on January 5, 2024 by Robert Brown</div>
                    <div style="color: #0078d4; cursor: pointer;">View | Restore</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>