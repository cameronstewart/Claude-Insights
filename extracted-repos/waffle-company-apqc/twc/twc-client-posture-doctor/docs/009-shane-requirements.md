---
title: "Shane requirements"
project: "TWC - Client Posture Doctor"
project_uuid: "019752ea-f102-71f8-b4a3-2d653c40d993"
doc_uuid: "8b504b4b-f59d-4411-8d9f-4d020c1a4dba"
created_at: "2025-07-02T19:42:46.525836+00:00"
doc_index: 9
---

Below is a paint-by-numbers recipe that lets a first-time builder create a voice bot (Voiceflow + ElevenLabs or Voiceflow’s default TTS) that talks to the PracticeHub.io REST API in real time:

1 Gather the three things you need (5 min)
What
Where to click
PracticeHub API key
PracticeHub ▶ Settings ▶ Integrations ▶ API Keys ▶ New → copy the long string (starts ph_live_…)


Appointment-Type ID
Setup ▶ Appointment Types → open “New-Patient Exam” → read the id in the URL
Location & Practitioner IDs
Setup ▶ Locations and Practitioners – open each record and copy the numeric id in the address bar

(If you ever need more than one doctor or service, you’ll add rows for each later.)

2 Spin up a fresh Voiceflow project (10 min)
creator.voiceflow.com ▶ + New Assistant → pick “Agent”.
Settings ▶ Integrations ▶ Dialog API – note the Voiceflow key & Version ID.
Settings ▶ Variables → add:
PH_KEY        ph_live_xxxxx
BASE_URL      https://YOURSUBDOMAIN.practicehub.io
LOC_ID        123         // locationId
PRAC_ID       456         // practitionerId
TYPE_ID       789         // appointmentTypeId
Optional premium voice – paste your ElevenLabs key under Settings ▶ Text-to-Speech ▶ Custom Provider and you’re done; otherwise stick with Voiceflow’s default Amazon Polly.

3 Design the conversation on the canvas (20 min)
(The four “blocks” below sit left-to-right on the canvas.)
3-A Capture patient details
Bot  : “Hi! Let’s get you booked for a New-Patient Exam.
        What’s your first name?”
        → slot: firstName
Bot  : “Great, and a mobile number we can confirm with?”
        → slot: mobile
Bot  : “What day would you like to come in?”
        → slot: bookDate   (date)
Bot  : “And what time?”
        → slot: bookTime   (time)
3-B API block #1 – fetch free slots
Field
Value
Method
GET
URL
{{BASE_URL}}/api/v1/appointments/slots
Headers
x-api-key: {{PH_KEY}}
Query params
locationId={{LOC_ID}}practitionerId={{PRAC_ID}}appointmentTypeId={{TYPE_ID}}fromDate={{bookDate}}days=1

If branch – response.slots.length > 0
Bot  : “I have {{response.slots[0].time | time:'h:mma'}}
        or {{response.slots[1].time | time:'h:mma'}}.
        Which works better?”
→ save vars.chosen = response.slots[0].time
Else branch – “That day’s full—any other day?”
3-C API block #2 – create the appointment
Field
Value
Method
POST
URL
{{BASE_URL}}/api/v1/appointments
Headers
x-api-key: {{PH_KEY}}, Content-Type: application/json
Body (raw JSON)



{
  "patient": {
    "firstName": "{{firstName}}",
    "mobile":    "{{mobile}}"
  },
  "start": "{{vars.chosen}}",
  "locationId":      {{LOC_ID}},
  "practitionerId":  {{PRAC_ID}},
  "appointmentTypeId": {{TYPE_ID}}
}
3-D Confirmation block
Bot : “All set! See you {{vars.chosen | date:'dddd h:mma'}}.
       We’ve sent you a confirmation text. Have a great day!”

4 Hook the voice channel (5 min)
Channel
How
Phone (Twilio)
Channels ▶ Telephony → connect Twilio SID + Auth-Token → buy an AU number → Voice URL auto-populates to Voiceflow.
GHL Voice Agent
In GHL Workflow use Send Webhook: POST to https://general-runtime.voiceflow.com/state/user/{{caller}} with JSON from the Voice Agent → include Authorization: Bearer VF_KEY.

(Web chat works by simply toggling Channels ▶ Web Chat and pasting the snippet into your site.)

5 Full live test (5 min)
Dial the Twilio/GHL number or open web-chat.
Say: “I’d like an appointment next Tuesday at 4 PM.”
Bot lists available times → choose one.
Refresh PracticeHub calendar → the new-patient exam is there instantly.

6 Option: cancellations & reschedules (10 min extra)
New Intent: “CancelVisit” → capture cancelDate, cancelTime.
API GET /appointments?from={{cancelDate}}&to={{cancelDate}}&status=booked → locate the id.
API PATCH /appointments/{{id}} { "status":"cancelled" }
Run the slot-finding & booking blocks again to re-fit within the plan.

7 Time budget recap
Task
Minutes
API key + IDs
5
Voiceflow project & vars
10
2 API blocks + dialog
20
Telephony / web hookup
5
Test call & adjust
5
Total
≈ 45 min


Key take-aways
PracticeHub already gives you simple /slots and /appointments endpoints; no middleware needed.
Voiceflow is 100 % drag-and-drop, and you can bolt on ElevenLabs if you need premium voice timbre.
Entire build-time for a first-timer is under an hour, and every subsequent flow (e.g., progress exams, recalls, cancellations) re-uses the same two endpoint patterns.

