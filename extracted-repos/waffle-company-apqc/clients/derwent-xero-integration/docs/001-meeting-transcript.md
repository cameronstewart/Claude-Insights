---
title: "Meeting Transcript"
project: "Derwent Xero Integration"
project_uuid: "019714fd-bc07-72af-87df-f3c55cce8608"
doc_uuid: "f6f0abaa-f4d6-4b2d-be25-5b685998445a"
created_at: "2025-05-28T03:57:17.145882+00:00"
doc_index: 1
---

[00:00:00.000] Lee Whitaker (Unverified): I'm the AI in automation specialist at Derwin and I have previous experience. Integrating 0 into. And I didn't say Scrm, so I'm fairly over the current setup. How it works out operates, but also what the business is looking to do is to go forward and what's possible with zero. So have done a fair few 0 integration is not to Microsoft but to bullhorn through the APIs in my previous role.
[00:00:22.911] Leonie Meissner (Unverified): Including our one that we're about to ditch. Yeah, so.
[00:00:27.676] Lee Whitaker (Unverified): Yeah, including learning.
[00:00:29.788] Leonie Meissner (Unverified): I'll introduce Kayla cause she forgot to pay her Internet bill and has been a nightmare today on the screen. So Kayla is our um management accountant, I think is her title, but she doubles a lot in the revenue side of things. So in the zero and the database connection, um, Kayla's based in Perth as is Chloe, which is a good segue, Chloe.
[00:00:58.069] Chloe McFadden (Unverified): Ohh they've they've met me. They know me.
[00:01:01.529] Lee Whitaker (Unverified): Yes.
[00:01:02.110] Leonie Meissner (Unverified): Ohh, there you go, alright.
[00:01:05.886] Chloe McFadden (Unverified): Christmas, officially on mat leave. So Yep, I'm.
[00:01:07.895] Leonie Meissner (Unverified): Awesome. Yeah. Yeah, we're happy about that. And I'm the accountant, so I'm very, very, very interested in the the the 0 integration. So yeah, there we go.
[00:01:23.003] Cameron Stewart: True. So, so Chloe and Kayla, you're both in Perth. It's fantastic. So good. Ohh I'm in Perth as well, so that's an interest. Interesting aside, so we can have. Technically, we could have some light in a day meetings and the East Coast E Coasters will have to have to deal with that. That time issue, right?
[00:01:46.414] Leonie Meissner (Unverified): No, I don't have a problem with that. I know I'm a late starter. Late finisher, so it doesn't bother me. I don't know about Ashton, Ashton Lee, but Olli's used to Lee was the Lee, was the CEO of a UK based business, so she probably up at midnight and she'll be right. So yeah.
[00:02:06.750] Lee Whitaker (Unverified): I've got a 17 year old, so I don't. I'm like, yeah, 11:00 PM. Bedtime. Alright, normal. My house. Yeah.
[00:02:17.231] Cameron Stewart: So in terms of today, I think a good starting point, well from what I understand so far, this is a new piece of work, Lee. There's probably been an initial meeting or something. Lee has gone and started to put a dog some documentation together around what is I guess, the labour land. Kind of what? So if we use that as a starting point, is that a good, cool place? I think what's the apple we need out of this meeting is the next step will be that we need to come and but I propose or something together is that that's basically um, yeah. What? Where we.
[00:03:01.499] Leonie Meissner (Unverified): Yeah, I think this is a a separate piece of work that wasn't well. Some of it was in the original scope. I think, Ashton, we might have to fight over. We'll have a little Barney about that later, but let's just assume for the minute that. That we wanna get. So at the moment we initiate invoicing from Bourne, a bullhorn database which has been frankensteined to put fields in there to facilitate invoicing. Um, and that is a labour saving device in that we're not rekeying information. We send stuff through um and we do get some go back the other way. So for example, when we create an invoice, the invoice number is recorded in bullhorn. At the moment, um, but what we're seeking to do is now that we're gonna have all this wonderful information in. Always forget the name of what it's in in wave. I'm gonna call it wave. Then we think that we'll just forget about bullhorn. Let's just get some sort of integration going between wave and 0 to replicate slash. Improve that process.
[00:04:18.598] Cameron Stewart: OK.
[00:04:20.888] Lee Whitaker (Unverified): And probably Karen, if I give it a really top line summary of ohh, you might Draw Something ready. I was gonna say they kind of top end summary is basically for the data and wave to create draught invoices and specific ways and 0 and for a very small amount of information to come back. Obviously, apart from IDs which you need to match up and contacts and customers and things you don't duplicate them to have the invoice ID in the invoice status come back the way, but it mainly is a wave to 0 push to create draught invoices. Um, just just ensuring we've got that, you know, that's the kind of overarching project summary. And then there's some we put quite a lot of detail. Kayla and I went through all the different scenarios and that's what we detailed in the document. What fields we use? How they're being used? What's been mapped today or what isn't working, so isn't possible in the current integration, and that's what created this first scope of the Word document that I shared with you.
[00:05:14.501] Cameron Stewart: Ohh so when we say current integration, we're talking with this this piece up here, right? Yep, that's so this is new. So we don't need to as far as our work, I don't need to consider anything about bull horn, right? Like that's.
[00:05:27.782] Lee Whitaker (Unverified): And the only consideration will be there is a customer or what's called contact ID that are stored in the back of bullhorn that connect up bullhorn to 0 to ensure that it doesn't make new customer slash contacts in zero. So there is an association under the hood there that will need to be considered for when we actually get into. How do we go live and ensure that it isn't making you customers?
[00:05:52.909] Cameron Stewart: Isn't doing that. OK, so the as is. Is this right? So that does save you work. You do a little it's predominantly that.
[00:05:59.611] Lee Whitaker (Unverified): So what does come back with the invoice ID is the if it creates a new customer record at the same time, it also puts out I D back into bullhorn just so you've got that as well.
[00:06:07.971] Leonie Meissner (Unverified): He puts the invoice number and it changed.
[00:06:11.271] Cameron Stewart: Because the customer ID, if it's created One South, it's a gotcha, right? So.
[00:06:17.189] Lee Whitaker (Unverified): Yep.
[00:06:19.378] Cameron Stewart: Uh, like an invoice status or a job status?
[00:06:23.285] Leonie Meissner (Unverified): Yeah, it goes from forecast to invoiced as a status, yeah.
[00:06:28.295] Cameron Stewart: Ohh that. Ohh yeah yeah, just catch up or just trying to get the conceptual so changes from invoice to ohh sorry. Forecast to invoice Yep, that.
[00:06:43.423] Lee Whitaker (Unverified): That's all documented in that Word document as well, cause it's not actually a field and the net new field only for the new one was also the invoice status come back. So that could be seen in the revenue control and wave.
[00:06:56.204] Cameron Stewart: Okay. So the two B state is that a. So bullhorn, still going to push the customer creation is this. Is this what happens?
[00:07:06.498] Lee Whitaker (Unverified): Like, no, it'll come from all come from bolt. No, no bull or into zero connection being deleted, yeah.
[00:07:14.074] Cameron Stewart: So I if so, we're just doing that. Obviously there's some more detail around there. Um. I just trying to think can I can we spend some time just going through the the? Document say this the expectation here will be something similar to that. Then imagine in terms of what what comes back is that right?
[00:07:36.886] Lee Whitaker (Unverified): And the invoice status as well. Say any that you yeah, yeah.
[00:07:44.243] Leonie Meissner (Unverified): Maybe a maybe a date if I don't have one. Might have one.
[00:07:50.724] Cameron Stewart: Like a date invoiced.
[00:07:53.755] Leonie Meissner (Unverified): Invoice date. I think there's a field for that isn't there in, in bulk, Yep.
[00:07:59.900] Lee Whitaker (Unverified): Yep, yeah.
[00:08:00.176] Cameron Stewart: Yeah. Alright, cool. Cool. So. So that's essentially a high level. What we're doing here, right?
[00:08:06.587] Kayla Dooley (Unverified): Then also the invoice amount.
[00:08:12.363] Leonie Meissner (Unverified): Were you sent that through from bald? So you're not gonna write it back, are you?
[00:08:17.377] Lee Whitaker (Unverified): Then what goes forward? It's all documented in the Word document.
[00:08:21.464] Cameron Stewart: But so let's just spend some time having a quick look at that. She going. The the.
[00:08:35.077] Leonie Meissner (Unverified): Ohh if ignore me then so are we proposing we will change it to invoiced are we?
[00:08:44.199] Kayla Dooley (Unverified): That's what pushes it through.
[00:08:47.410] Chloe McFadden (Unverified): This is the task. This is what triggers it.
[00:08:49.504] Leonie Meissner (Unverified): Like I, so we're that's a change from the current process there, right? So that's what we're saying. We're gonna. We're gonna actually say invoice, so we don't need the status to be written back. It'll be already that okay.
[00:09:02.095] Lee Whitaker (Unverified): Yeah, but at the end of the invoice status is different. That would be if it's paid outstanding. Uh Jude, that invoice status from zero. If you want that.
[00:09:13.492] Leonie Meissner (Unverified): Are you are you proposing that flows through from zero?
[00:09:16.107] Lee Whitaker (Unverified): 0 back to the revenue control.
[00:09:19.995] Leonie Meissner (Unverified): Okay that's new.
[00:09:22.439] Lee Whitaker (Unverified): That is new. That's added on there as a net new as the only net new coming back.
[00:09:28.970] Leonie Meissner (Unverified): So that means you've got to run a process every 24 hours or whatever you're going to do, right? And push it back.
[00:09:35.077] Cameron Stewart: What? So it needs something, doesn't it?
[00:09:38.477] Lee Whitaker (Unverified): Yeah.
[00:09:38.582] Cameron Stewart: So in terms of technology like we, we can be not as creative, but we could suggest. So there's going to be work is with the zero API integration. Obviously there's work there, and then there's the effectively an API integration out of. Is what what the apps built on. So there's two pieces I know in some of the 0 integration stuff I've done before, some of the no slash low code platforms actually already have 0 integrations built, so there may be an opportunity to leverage that. What that basically will mean is that some of the development costs as opposed to doing direct API calls we can use.
[00:10:26.398] Lee Whitaker (Unverified): So you might look at you out I path or automation anywhere or work hard or something. Yeah.
[00:10:34.188] Cameron Stewart: Do you have any guidelines around that or you we can just give over?
[00:10:37.113] Lee Whitaker (Unverified): I just say not safe here, it's it's rubbish. The 0. Zapier so.
[00:10:40.203] Cameron Stewart: Yeah. Yeah, I wouldn't go there, but Yep.
[00:10:44.130] Lee Whitaker (Unverified): But yeah, UI pass I think or Ricardo would be the two that I've worked with before and I've got a pretty decent pre built out of the Box 0 integration.
[00:10:52.863] Cameron Stewart: Yep. Ohh, I'm so we'll just need to do a bit of analysis also on that and also the. On the dot of their side as well, so.
[00:11:03.618] Lee Whitaker (Unverified): Yeah, cause I don't know that I don't know their integrations with other obviously only know them with other systems, so.
[00:11:07.964] Cameron Stewart: And so we have a question whether we need to build something in between or not quite sure architecturally yet, but there's a range of ways that we'll be able to solve this. Um. All right. So so are we best just to spend some so obviously. The this is the essential trigger. So trickle records can be sent to 0 when the status is changed from approved to invoice. The default to forecast it's that. So so the intent is that the entire in invoice creation process prior to sending it out to a customer is automated. To draught a draught invoices created. Yep. What sort of volume is going through here?
[00:12:04.075] Lee Whitaker (Unverified): Leone okayla.
[00:12:06.992] Kayla Dooley (Unverified): And being 5A day to a day 10A day depends. It's probably a rough guide.
[00:12:14.702] Cameron Stewart: So if we said like up to 250 a month or something, would that be cause they're more high ticket like it's?
[00:12:21.288] Kayla Dooley (Unverified): Ohh, two 50s. Quite a lot. Hmmm. Probably not more than 100. I do agree learning.
[00:12:30.866] Leonie Meissner (Unverified): Ohh, I think very roughly we would do about 1400 a year, so.
[00:12:36.897] Lee Whitaker (Unverified): Okay. Yeah, 150. Yeah.
[00:12:40.345] Cameron Stewart: Yeah, yeah. No, that's OK.
[00:12:41.504] Leonie Meissner (Unverified): Yeah, that.
[00:12:42.890] Cameron Stewart: It just is giving for me this I create a contact. Stand. What sort of. Uh, what sort of service expectation do you have of this? So the creation of draught invoices triggered based on. This is.
[00:13:07.413] Lee Whitaker (Unverified): At present it be a there's a button to say send to zero in bullhorn, but the IT just we don't want it to be unless the invoice has been approved. We don't want it to be that option to be available, so it would be a you can only hit, press the send to 0 button when it's set to approve from proved invoiced event.
[00:13:31.285] Cameron Stewart: Do you want this to be a user triggered action? So it's sent to invoice or just the once things get to an approved status, it just triggers automatically.
[00:13:44.039] Lee Whitaker (Unverified): I would recommend to Caitlin Leone that it's user triggered because if not everything else has to be completely right and set up before you hit you change the status of the billing. So you would choose when you're pressing to send zero like you do now.
[00:13:59.692] Kayla Dooley (Unverified): Yep.
[00:14:02.157] Lee Whitaker (Unverified): Yeah, yeah, the too many other moving parts. After we done in mapped and fields for UM for it to go the other way.
[00:14:11.871] Cameron Stewart: Yep. It's not that it touches that to the existing records, that's OK.
[00:14:22.383] Lee Whitaker (Unverified): And I put which you'll have a look up tables between what's in wave and what is in zero. So there's some fixed lookup tables. I haven't put them in here. I just made notes where is lookup tables and we can get them later down into a full solution design.
[00:14:36.078] Cameron Stewart: Yeah. Yeah, I appreciate that. So then we've got. So there's a few different splits, few different ways that we have to do this smallest thing.
[00:14:48.810] Lee Whitaker (Unverified): And if you need, Kayla could provide you some sample and redacted invoices if you wanna see a couple of different variations of Milestone 123 with them without splits and and Kaylee, we talked about getting those, didn't we? Yep.
[00:15:00.517] Leonie Meissner (Unverified): So this is a. This is a process improvement though, right?
[00:15:06.090] Lee Whitaker (Unverified): There's a process improvement.
[00:15:09.194] Leonie Meissner (Unverified): We don't, we don't have this functionality currently.
[00:15:11.264] Cameron Stewart: So, so we should probably. Matt has the process been mapped? Who? Yeah. Ohh. Like, is there a a corresponding flow chart or something to this? We could. Yeah. Yeah, just as I.
[00:15:33.093] Lee Whitaker (Unverified): And share one yet and I'll do the as is and then mark what would be net new improvement lead only on there. So we can look at the cost between doing what it does now versus making it better.
[00:15:44.088] Cameron Stewart: So to your question there, and if we just use this as the SPIC that that's that would be the appropriate. White crust to. Reply. Back to this. So to respond back to this right, so we assume this is this the spec. Guys weren't free, so there's a few different. Has. One thing I. So we'll just have to also validate Lee just with the the 0API. So one of the things I was just having a quick look at, but came to attention was whether or not we can select the invoice type via either template via API. So yeah, what would make?
[00:16:45.784] Lee Whitaker (Unverified): Ohh I didn't cost compared this to the API field, but if you let us know if there's any that aren't in there then I think it that that would be net new features that don't exist because obviously it wouldn't exist in the current integration either.
[00:16:55.291] Cameron Stewart: Okay um, it's worth having a little bit of time. Just maybe run through like a how this works in bullhorn just as a. A comparison. Um, I should say.
[00:17:10.234] Lee Whitaker (Unverified): Yep, threatening to that flow chart for you, mark and share current state and net new state and mark on their what's new functionality for you, Leoni as well. So I'll do that. So you can have that.
[00:17:21.281] Kayla Dooley (Unverified): Ohh would you like me to run you through a bullhorn billing? Alright, thankfully my and hopefully blame my Internet.
[00:17:31.694] Chloe McFadden (Unverified): Could use that Chris Lynn test job if you want that, had those building stages we talked about this morning.
[00:17:36.870] Kayla Dooley (Unverified): Yeah or no deal. Just pull that up.
[00:17:40.998] Leonie Meissner (Unverified): Turn your camera off, Kayla. It'll save your bandwidth if you.
[00:17:46.000] Kayla Dooley (Unverified): You see, I clean. Alright, sorry, share my screen. So at the moment we've got the billing stage in bullhorn and so this one is a place filling stage and that the invoice total amount. So this carries through to AH0. It will populate so if this is $50, it will carry through. Then the next pot is down. Here we've got the zero ID, so this will populate once sent to 0, so flows back into bullhorn and then we've got our zero invoice text. So depending on the billing stage in this case that the placement so it will populate the invoice with this data. And then when a job is set up in bullhorn, if there's a a purchase order number, it will populate there. In this case it's NA. So once we're happy with that, we can tick the billing stage and click sent to 0.
[00:19:07.370] Cameron Stewart: And bullhorn does all your job job ads, all your managers, their applications, and all of that stuff. Right. Like that's? Yep. OK. Applicant tracking systems there. Yep.
[00:19:22.228] Lee Whitaker (Unverified): Yeah.
[00:19:22.303] Kayla Dooley (Unverified): And then so if the client is not created in zero, we'll get a connect to 0 button and then that will create it in zero. So I've got to create the billing company. This just creates the client. It doesn't add a bn just populates client name. So click the file we wanted to go into allow access. From that again. Then create new contact. And.
[00:20:11.888] Cameron Stewart: Yep. So so we can we can automate this. Yeah. OK.
[00:20:22.714] Kayla Dooley (Unverified): Okay um so I'll just have to try that again. Sometimes it doesn't push through properly. Zero. And company not linked um. OK. Sent to 0. And it will populate with an invoice number. There we go. So I can click on that and open 0.
[00:21:03.000] Cameron Stewart: Yep. So that takes about 30 seconds or so each step.
[00:21:18.882] Lee Whitaker (Unverified): I went into that.
[00:21:23.288] Kayla Dooley (Unverified): Come on. There we go. And so now it's populated the purchase price, the text.
[00:21:30.497] Lee Whitaker (Unverified): Sorry, you're a little bit behind your screen's loading. I think faster on your side on our side. Type.
[00:21:36.778] Kayla Dooley (Unverified): All right. So then populates the text, the price and the billing contact. Anyways, the date. Yep. And the job ID.
[00:21:47.134] Leonie Meissner (Unverified): The reference number? Yep.
[00:21:49.870] Kayla Dooley (Unverified): Yeah.
[00:21:50.189] Leonie Meissner (Unverified): But it doesn't pick the branding. From what I'm I don't, I don't think it picks the branding theme so.
[00:21:58.190] Lee Whitaker (Unverified): I see you.
[00:21:58.236] Kayla Dooley (Unverified): No.
[00:21:58.243] Lee Whitaker (Unverified): Yeah. And you have that set default though, so it just picks up your default when you log in. Yep, no.
[00:22:06.361] Leonie Meissner (Unverified): What it all say doesn't do Cam is it's not doing any of these splits that we talk about in the document. So we are manually doing that and the next thing Kayla would do if she was actually preparing this invoice is put the split in here. Um put and the split is how we track what revenue is assigned to each consultant. Every single dollar is attracted to a particular consultant, and it's really important to us. Um, and then we use the tracking codes. We have 3 in effect we have the Ledger code General Ledger code which is the account code we allocate to a consultant for the tracking of the revenue and then we allocate to an industry subsector, yeah.
[00:22:55.519] Lee Whitaker (Unverified): And there's ruled the mapping where I mentioned mapping tables and the document I called out the name in wave and the name in zero that we wont mapping tables in place for because again this all manually done.
[00:23:07.205] Leonie Meissner (Unverified): There are some. Sorry, Kim. Do you like ham or do you like Cameron?
[00:23:14.225] Cameron Stewart: I was just gonna ohh it's it's a either. It's okay. I can I can work with both. I can respond to both, but but not at the same time. Uh, that's. Different.
[00:23:27.182] Leonie Meissner (Unverified): I was just going to say the other thing. It doesn't. There I don't know how you guys got around this or if you did it all, but there are some complexities to the fact that we can't put a face split on there if we also have to put an engagement fee on there. Um, so did you guys ignore that?
[00:23:44.000] Lee Whitaker (Unverified): Ohh well in the scoping document, yeah, that's a little detail. Kayla took me through the different internal versus external and the different engagement set on milestone one. That's all documented in the scoping document.
[00:23:56.489] Leonie Meissner (Unverified): Yeah, but I'm assuming, Kayla, that you didn't get round the split and the engagement fee problem on an M1.
[00:24:02.682] Kayla Dooley (Unverified): And I'm going to go back and check the doc, but um, I think that was a.
[00:24:08.978] Leonie Meissner (Unverified): I'm going to guess you didn't know. It doesn't work in zero, so I'm guessing there is no way. Well, I don't even know how you'd tell it. Ohh, I suppose you could. We'll talk about that. I'll have a look another look at the document.
[00:24:22.996] Lee Whitaker (Unverified): Yeah, I'll make a little nightly only on the side for us to pick that up. That wasn't saying that. Kaitlyn I captured so Cam will pick that up and come back if there's an update to the document.
[00:24:29.264] Cameron Stewart: It's to do that, Yep.
[00:24:31.707] Leonie Meissner (Unverified): It's a 0 limitation. It's a. It's. I'll just explain Kayla, if you put the engagement fee on their plays. Um, for most of our segments, we charge an engagement fee, which covers your police. Check your qualifications. Check and various other things and it has to be shown separately, which means we have to use an invoice template that displays lines on the invoice whenever we do a face split, we don't wanna show clients that we don't want to show them how the sausage is carved up or cooked or manufactured. So we don't wanna show the fee split, so whenever there is a fee split, we use a invoice template that doesn't show the lines, it just shows it comes up with the total at the bottom. We can't have it both ways. It's a 0 limitation, so the best we could do I think in that instance is send the info through. But yeah, what? What does have to have a look at that?
[00:25:30.376] Lee Whitaker (Unverified): Okay. Lionel. I thought our side to make play around with.
[00:25:33.782] Cameron Stewart: That the intent is that that on the same invoice Leonie.
[00:25:39.269] Leonie Meissner (Unverified): Ohh you can't. It's a 0 limitation to my knowledge. Yeah, I've never found a way around it.
[00:25:47.093] Cameron Stewart: So can you can turn voices.
[00:25:49.587] Leonie Meissner (Unverified): No, no, we do this really complicated, annoying thing whereby Kayla will just put, we won't put the feast, but on there we put the fee, we put it as one line and then we put the engagement fee on. We send that to the client once we've sent us the client, we come back into the invoice and we edit it. Um, and we sometimes forget and we have to run a process at the end of the month whereby we verify the splits in bullhorn at the moment to the splits in zero. We do a whole reconciliation of it because our consultants will jump up and down pretty quick, smart if we have not recognised their revenue properly so.
[00:26:30.350] Cameron Stewart: And and and that the revenue applies the engagement fees is what I'm understanding as well.
[00:26:36.476] Leonie Meissner (Unverified): No, the engagement fee is all mine. So no, it doesn't get allocated. It's only the fee non engagement fee component.
[00:26:47.075] Cameron Stewart: Okay and sorry, just to clarify, so you create an invoice. They pay the invoice, then you go and edit the invoice is that.
[00:26:56.117] Leonie Meissner (Unverified): No, as soon as I've sent it out, I will go in and do the edit. So I don't wait for them to pay it as soon as I've sent them the copy that needs to look a certain way. I will then go in and edit it so the data is the way I need it to be, so I can't send them another copy out of zero. I have to go back to my original email to.
[00:27:16.990] Cameron Stewart: They have the smart link to the invoice. You don't. You just sending like a PDF, so it is what it is.
[00:27:24.091] Leonie Meissner (Unverified): We send a parade because I don't want them to see how the sausage is made, right.
[00:27:26.891] Cameron Stewart: But that that was that was my question. I came just don't.
[00:27:32.840] Leonie Meissner (Unverified): Which isn't great if you think about, um, what's that thing called pepple Poppel? Um, invoicing. That's what it is, isn't it? Yeah. Pepple poppel something, yeah. But zero is 0 is 0, right? It's a very cost effective, but not very customisable thing.
[00:27:55.794] Lee Whitaker (Unverified): Think I'm just from the the invoice number won't change and the total doesn't change when it's being edited. Post being sent, it's just all the different line items and tracking codes. So the way back when impact a status check backwards integration.
[00:28:11.106] Leonie Meissner (Unverified): It's exactly what you said, like it's just the tracking codes. It's just, yeah.
[00:28:16.256] Cameron Stewart: Yeah, I understand there was more. I a smart link to it, I was wondering how you are managing that, but if if you don't have it then it does make sense. Um, so items. So with the current bullhorn integration, the items not populated the item code.
[00:28:32.498] Leonie Meissner (Unverified): No.
[00:28:33.388] Lee Whitaker (Unverified): No. Or the account codes consultant in industry. Is that right or the? Yep, it's.
[00:28:43.573] Leonie Meissner (Unverified): But I will take, I will take them if you can do it.
[00:28:46.262] Cameron Stewart: Should be able to do that. That's just a A. Yeah. Yeah, that's some.
[00:28:53.216] Lee Whitaker (Unverified): There's no free texts or fixed map from set fields in waves that drop downs to the code. So we would give you a fixed mapping table for those.
[00:29:02.296] Cameron Stewart: How many item codes are active like in dear 10?
[00:29:07.462] Leonie Meissner (Unverified): Ohh. Well I have.
[00:29:11.663] Cameron Stewart: Ohh so in the item 1 Kayla the the first column.
[00:29:15.476] Kayla Dooley (Unverified): Ohh, I'm at the moment we have the engagement fee on charge to client and engagement fee. Internal allocation. They're really the ones that we use and the fee splits send out, which is when we do the adjustment after we sent the invoice.
[00:29:28.804] Leonie Meissner (Unverified): Basically none.
[00:29:31.574] Kayla Dooley (Unverified): But so we only use three of them.
[00:29:34.798] Cameron Stewart: OK, so the intent of this piece is so magic happens in the the power app. It gets sent on Trigger Bina a button and it intent is that I am most complete invoice as possible is generated.
[00:29:55.202] Lee Whitaker (Unverified): Yep, draught.
[00:29:57.290] Cameron Stewart: In draught status. Yeah, yeah, yeah, yeah.
[00:30:00.706] Leonie Meissner (Unverified): Yeah. And attached to the right client.
[00:30:04.055] Cameron Stewart: So yeah, so I just the question on the client. Thanks. Thanks Leoni so. In the event that there's multiple we have in built to the event is multiple contacts at a company. Me.
[00:30:24.481] Lee Whitaker (Unverified): But they're not, so that contacts in zero are companies are not actual contacts. They're just companies. They're just zero calls and contacts.
[00:30:31.680] Cameron Stewart: You still made an email address.
[00:30:33.798] Leonie Meissner (Unverified): We don't address our we don't address our invoices to a contact. So, Kayla, if you can hit the preview button please. So the only thing we put on there is the company name and the ABN number. There's not a name. There's not an admin, there's not even an B number on that one. But. Um, yeah, that's so you imagine ABN 111111 underneath that name line. That's all we do. Um, a.
[00:30:57.796] Cameron Stewart: I see he send these out. He sent these out via 0.
[00:31:03.704] Kayla Dooley (Unverified): And.
[00:31:06.390] Leonie Meissner (Unverified): Yes, we email them via 0.
[00:31:06.719] Cameron Stewart: So sorry. You go to your point first. I'll. I'll come back there anytime.
[00:31:11.700] Leonie Meissner (Unverified): I was just going to say very occasionally we got a client who says, can you put my address on the invoice and we'll go? Yes. And we have a different template for that and we type their address into zero and off we go. But we would that would probably be less than, I don't know, it's probably a one percenter.
[00:31:29.102] Lee Whitaker (Unverified): Hmm, it so can. It wouldn't matter if there's multiple concert on in wave. If you gotta company in many contexts for company, those contacts are irrelevant. IF00A company in wave will become a contact. Do you Recon contacts? But it's actually the company.
[00:31:49.544] Leonie Meissner (Unverified): Just think it's the BN number. It's the ABN number that matters.
[00:31:53.289] Cameron Stewart: I understand you. The other field that you need to have in there will be email address, right?
[00:32:01.199] Leonie Meissner (Unverified): Hmm, no.
[00:32:02.925] Cameron Stewart: On creation.
[00:32:06.980] Leonie Meissner (Unverified): So um. What? What would be so this is this is the problem. Cam missus, the bane of my existence, the bane of Kayla's existence. So if you can solve this, we will hold a parade in your honour through the streets of Perth, OK?
[00:32:25.202] Cameron Stewart: Actually, can you just get that one? It's just it. But ten terms and conditions got galian.
[00:32:35.689] Leonie Meissner (Unverified): So just imagine for a minute that we're doing work for soap and over the course of the year we do 10 assignments for soap. You guys are really gearing up and hiring lots of people. I could have for each of those assignments I could send them to 10 different people. And they all could be highly confidential. And if I send ash the wrong invoice and she finds out her jobs being hired for and she hasn't been told yet, she might lose her shit and blow things up. Or call Fair Work or her lawyer, or anything. So the bane of our existence is making sure we email to the correct contact and not get it wrong. We can't. Can't afford a single mistake? Enjoying that? So at the moment we basically manage that manually with a lot of double checking and cross referencing. Um, and this is Kyle's. Decide. So once this invoice is approved, we come in here and we put the email address in. Now we have made mistakes and it has dire consequences, so I'm assuming in wave we have an email address for the invoice contact. Where we have it in bolts at the moment. Um, but if we could somehow bring that through as a text field, cause I don't want it riding into zero, it's useless to me in the zero contact page. Right. Because it'll just be wrong for the next job. Or if I've got two jobs running, it could get really messy, but if we could, I know with the current solution, if I went back to Kylo Lee, I could probably say in the invoice text append this field in bullhorn where it tells me who the invoice there is.
[00:34:27.171] Lee Whitaker (Unverified): Add it to the yeah, add into the notes or comments or something on the invoice. So it's somewhere else, yeah.
[00:34:33.475] Leonie Meissner (Unverified): So we could, if if that could be done, that would be fantastic.
[00:34:38.364] Lee Whitaker (Unverified): Yeah, so, so can we go back? Yeah.
[00:34:42.983] Chloe McFadden (Unverified): So the only one that in the projects side of life, there's no currently there's no field for contact email address. That all there is is a toss that saying, you know Bryce M to invoice and when you say yes.
[00:34:53.885] Leonie Meissner (Unverified): So that's a good point, Chloe. Because I'm gonna say that's an oversight from our point of view, cause otherwise to raise an invoice, I have to go back to bullhorn to look for that detail. Right.
[00:35:06.279] Lee Whitaker (Unverified): And so that'll be a netting you fields to pull into away.
[00:35:10.694] Chloe McFadden (Unverified): But they're there is toss that were we've been talking to camera about with say we go like a free tax field. So we could force not force but request the project associates when they're saying yes invoiced, they have to every time they raise an invoice, they need to reconfirm the email address. If it's going to, which is probably a nicer check than the current bullhorn system. Because bullhorn just keeps what the lot whatever we set the job up as.
[00:35:37.763] Leonie Meissner (Unverified): As long as, as long as I could see it and copy it straight down. Chloe, though. Otherwise, I'll just call that a pain in my arse.
[00:35:44.085] Kayla Dooley (Unverified): So.
[00:35:46.515] Chloe McFadden (Unverified): But I mean it would be a pain for the project associates rather than you.
[00:35:48.670] Leonie Meissner (Unverified): I do think about my little darlings so. I don't want it to be a pain in their arse either.
[00:35:57.490] Chloe McFadden (Unverified): It's I I think it's a nice and Kayla, tell me if you disagree. It's probably a nice check that yes, I want to send voice rise and this is who it's going to. His where we've run into problems as if the project says it hasn't necessarily checked that it's changed from when the job was initially set up.
[00:36:16.205] Leonie Meissner (Unverified): Ohh, we've run into problems on our end too, but yes it would be a.
[00:36:20.951] Kayla Dooley (Unverified): Yeah.
[00:36:21.380] Cameron Stewart: So there's a potentially any task that gets at it from understanding Chloe. So down here prior to wherever billing as blah blah. Yep.
[00:36:33.803] Chloe McFadden (Unverified): So yeah, so rather than when we market completed it kind of like we were going to do that free text field for the meetings. If we could do it that way, so when we mark those, you know. Certain tasks. So those three billing stages as completed as in, yes, we can invoice, there's a free text field that the project says he puts in the contact cause if.
[00:36:56.877] Cameron Stewart: Yeah, this you don't actually have a concept of what would the label of that person be like. Key contact is it but.
[00:37:05.067] Chloe McFadden (Unverified): Yeah, come, job, job, job. Contact. Something like that.
[00:37:07.865] Leonie Meissner (Unverified): Ohh, I'd be calling it email email invoice too. Let's be really super clear. And can there is the there is a. Sorry, Kayla, did you wanna say something?
[00:37:20.809] Kayla Dooley (Unverified): I was just going to mention the invoicing notes, but you may be about to touch on that. Um, so at the moment you'll see that there's a table called invoicing notes. So this links up to a job. So at the moment the job is created by the revenue team and we pick up the invoicing contact from bullhorn and put the invoicing contact their email address in that field below. So when I click on a job, I can see that's where the invoice is being sent to. And in that tags to decline and a tags to the job I date.
[00:37:54.690] Cameron Stewart: They so you've got that data.
[00:37:56.855] Kayla Dooley (Unverified): Yeah. And we're feeling that in at the moment, based on what's in bullhorn. So I think the point is if we want to transfer that all over into wave that's being managed by the revenue team at the moment, but it maybe needs to be a field that the project team can also update.
[00:38:18.130] Leonie Meissner (Unverified): Ohh you wanted it? You'd want it in the same screen though, Kayla. You wouldn't have to come looking over here, would you?
[00:38:23.083] Cameron Stewart: It.
[00:38:25.578] Kayla Dooley (Unverified): Yes.
[00:38:28.108] Lee Whitaker (Unverified): So you would need a new field.
[00:38:30.078] Cameron Stewart: And and say this, this is up to you to remember to go in there like obviously that's what you're doing. So you remember. But yeah, for someone that wouldn't be doing this all the time, this is a bit of obscure, alright?
[00:38:41.769] Kayla Dooley (Unverified): So we actually if you go into the revenue control please and if you click on a job ID, it's in the invoicing notes tab. See, you can click in there and it's and if there's an active invoicing note, it will appear in here and not this one. This one doesn't have an ID.
[00:38:59.595] Cameron Stewart: No, this is this is just dummy data or anyway so.
[00:39:02.179] Lee Whitaker (Unverified): Yeah, but ideally you'd want on the general screen. I think what we're saying wasn't email invoice to as a new field. Yeah. And then we need to look at where we can set that Cam.
[00:39:14.490] Chloe McFadden (Unverified): Yeah, so so we could do it at job initiation instead of task level. So when we set up the job in and wife instead of better toss level kind of like we do currently in bullhorn, when we set the job up, that's one of the fields we have to fill in.
[00:39:31.082] Lee Whitaker (Unverified): Yep. And then came maybe, you know, I can look in the 0API for the draught invoice, if we can put that email address into the either the notes which you get under all draught invoices or somewhere that's really easy to then be cut out and put onto the send email field.
[00:39:49.472] Cameron Stewart: Yep. Yep, Yep, Yep.
[00:39:52.679] Lee Whitaker (Unverified): So they've got the notes section in the draw in all the invoices and 0. So if that's an easy field to just add it in. As a note in there and where can we cook it and pasted?
[00:40:02.383] Cameron Stewart: So just. Sick. Just so I can understand the business process a little bit better. So you're not sending these out to like an accounts@bhp.com dot a U, right? So they invoices sometimes. The. Yep.
[00:40:32.071] Leonie Meissner (Unverified): Because if you imagine I'm replacing the CEO at soap, you probably don't want the first person to know to be the accounts payable clerk.
[00:40:40.565] Cameron Stewart: Ohh my God, they getting it promotion.
[00:40:44.186] Leonie Meissner (Unverified): Well, they they may, and they're welcome. They're very welcome to apply. We assess everybody equally, but. Yeah you can.
[00:40:53.367] Cameron Stewart: Just done this before. That's that's fine. And so it's, we'll just have to see whether we need a default address in there to be able to save the contact. We'll go through all of that part. Um, so the ends they would be there as if the data was fed into 0 collected in bolt. Wave and then it's fed in somehow that that there's a copy and paste with your final validation prior to sending out the draught invoice. That's that's still a step change from now.
[00:41:24.364] Leonie Meissner (Unverified): Talk. Tell me what you mean by the validation part.
[00:41:28.419] Cameron Stewart: Add sorry in your final validation. So you've done all your bits and pieces of the invoice looks right, so we're not gonna automata send. Where automating to production of draught so you still got a human reviewing? Yep.
[00:41:41.970] Leonie Meissner (Unverified): So I'm I'm expecting to go into the draught list in zero and see something there for me to then review, edit and dispatch.
[00:41:49.421] Cameron Stewart: Yep.
[00:41:49.691] Leonie Meissner (Unverified): So our our just for completeness, our invoicing process is 2 steps even from there. So we will draught the invoice. Then we will send it to it for approval to the consultant or their project. Associate they will approve the invoice and who it's being sent to. We asked them for confirmation. At that point in the email, and then when they come back with approval, then we send it.
[00:42:13.467] Cameron Stewart: OK. And are you using the zero approval mechanism or you're just doing that out out of system?
[00:42:19.795] Kayla Dooley (Unverified): OK.
[00:42:22.380] Leonie Meissner (Unverified): Um, we send it as a draught and then we save it as awaiting approval and then we save it like we approve it. Once we've got our approval from the internal team. So if that's what you mean by the 0 system, yes, we use it, but there's no other system I'm aware of where they're pressing a button to approve or anything. It's all done via email.
[00:42:46.592] Lee Whitaker (Unverified): And Kayla, could you just pop up? Have you got that zero open? Still with that draught invoice.
[00:42:52.504] Cameron Stewart: Ohh stop sharing mine. You might have to reshare Kayla.
[00:42:56.574] Kayla Dooley (Unverified): Yep, on screen. Hey.
[00:43:05.086] Lee Whitaker (Unverified): It's O Leary, just we're wants to cover that up. Where I was thinking and I'm pretty sure it's on the Pi, but I'll check the API docs as well and where you go. The notes and history and notes having it done there is a note. So you go back one Kayla.
[00:43:22.822] Kayla Dooley (Unverified): In here.
[00:43:26.888] Lee Whitaker (Unverified): Yes, if you just put add note. So having it automate dropping the billing email address, email address, invoice to in there so you don't have to worry about copying and pasting it off the text and the invoice. And then you've got used to the email.
[00:43:38.626] Leonie Meissner (Unverified): I'd I'd love. Well, Kayla, I don't know what you think, but. And Chloe, jump in, but I'd love it to be a line on the invoice.
[00:43:46.772] Lee Whitaker (Unverified): They just cut it from there.
[00:43:48.871] Leonie Meissner (Unverified): Will because then then the person looking. I don't have to type it in the email, it would be on the invoice when they open it to approve. What do you think, Chloe? Kayla.
[00:44:00.751] Chloe McFadden (Unverified): Is this the invoice in contact?
[00:44:02.585] Cameron Stewart: The invoicing contact, yeah.
[00:44:05.214] Lee Whitaker (Unverified): Yeah, it making you line item with no no other information apart from this is to be invoiced to or email to Allah and that bill that says in the description.
[00:44:14.061] Chloe McFadden (Unverified): Well, it would force people to open it to check. I do know there's a bit going on where people are not opening the actual invoice. Not hypothetically.
[00:44:27.074] Kayla Dooley (Unverified): Sorry the other one.
[00:44:29.880] Chloe McFadden (Unverified): But it would encourage it would force people that they do have to open the invoice and folly check it, which isn't a bad idea.
[00:44:35.190] Kayla Dooley (Unverified): The other option would be. I'm not sure if possible, but is it possible to update the OK then?
[00:44:43.668] Leonie Meissner (Unverified): That's just that.
[00:44:43.691] Lee Whitaker (Unverified): You can't get in there and the Pi, yeah.
[00:44:46.867] Kayla Dooley (Unverified): Okay, then, yeah, on the invoice as a row here cause then I could cause then I can just pick like he can stay there and then when they approve the invoice I can pick it up from here.
[00:44:58.581] Lee Whitaker (Unverified): Yep. To Mark, I'll add that to the scope of work. Then um, that information we just talked about.
[00:45:05.162] Leonie Meissner (Unverified): Ohh, just press the email button for me. Doesn't matter if you approve it or just email it.
[00:45:12.632] Kayla Dooley (Unverified): It's so if we had that in there. Ohh sorry industry. Create an email.
[00:45:21.109] Leonie Meissner (Unverified): Not what work. OK, it won't work. Anyway, forget that it isn't going to work, so just move on. Sorry.
[00:45:37.788] Lee Whitaker (Unverified): Yeah.
[00:45:38.524] Cameron Stewart: 2.
[00:45:40.571] Leonie Meissner (Unverified): Once you're in that draught screen, you can't edit it. You have to come back. So that's OK, that's OK. Awesome. Alright.
[00:45:49.178] Lee Whitaker (Unverified): Well, can we walk, will you know I can look. And if you can share with me and mark before he left had started. But if you've got that pull down into your API fields already, then it just lets us look at what isn't there and what are options specifically for this use case to get the best outcome.
[00:46:05.171] Cameron Stewart: Yeah, I've just. I've started I that templating one was something that I hadn't done before, so that's where my eyes went to.
[00:46:11.718] Lee Whitaker (Unverified): And it's called brand. Well, scored a template I think in zero it's called brand. Yeah, but yeah, you know, I can maybe have a call and if you need that detail to do to send pricing, then you know I can recall to go through field by field.
[00:46:24.868] Cameron Stewart: Yep. Can I just ask a question just on what we've been discussing? So this is around that creation piece. So it seems like for various business reasons we're you're preferring work around instead of creating a. It's not called. What's a person associated to that company in? Zero, he said. A better outcome that the the email address is actually pretty filled there.
[00:46:55.371] Leonie Meissner (Unverified): No cause. What if it's wrong? What if? What if it doesn't get changed on the second one? So what are you gonna do? Override it every time and if I've got two jobs in process for the same business, it's how do I distinguish?
[00:47:10.512] Cameron Stewart: But what was, is and what we're saying. So we're producing invoices for job milestones, right? Like, that's the task. Yep. And so if, as my preparation for that, we're going to have the billing person assigned to a particular job, so send it in invoice, email to whatever that fields called.
[00:47:35.559] Lee Whitaker (Unverified): It yet, but can Karen in zero? They're not actually people. So you've got the contact, which is a company. Then you can add other email addresses, but they don't have an ID or they don't exist as an entity that you could map. So you couldn't force that. This goes to BP and is assigned to Lee is the contact and then it gets emailed to her. That's not how the zero kind of connection works with people.
[00:48:01.346] Leonie Meissner (Unverified): Zero and he has one. It's a one on one relationship.
[00:48:06.808] Lee Whitaker (Unverified): Yeah, you got the company which is contact and you can drop, you can add other emails as CC, but you can't set, yeah.
[00:48:10.295] Cameron Stewart: Bye at at you can set a date. We can sit.
[00:48:12.621] Lee Whitaker (Unverified): Yeah, you can do the default for the first one here. Yeah, yeah.
[00:48:19.879] Cameron Stewart: But can I just have a look at that just from flag, but it feels like that would be the first scenario and if you can't support that then you're looking at the work arounds.
[00:48:30.149] Leonie Meissner (Unverified): Well, that and if you look in the. If you just look in the zero contact card for a contact, there is no facility for more than one email address.
[00:48:43.790] Lee Whitaker (Unverified): And you can add C's. You can add, but you can't add different people that you nominate per invoice.
[00:48:49.366] Kayla Dooley (Unverified): Yeah, it's got a primary person and then you can add additional people.
[00:48:54.274] Cameron Stewart: Have you got that screen there, Kayla, please. You might need to just reshare.
[00:49:03.144] Kayla Dooley (Unverified): Yep. Sorry, we've got the primary person and then you can add your additional paint.
[00:49:10.294] Cameron Stewart: That it had additional peso. That.
[00:49:12.689] Lee Whitaker (Unverified): Yeah, but Tiki seek care. What it says. So if you do that, you still can't link them. You have to then include them in the emails that are sent to the contact and that means it's included all the email addresses.
[00:49:23.588] Cameron Stewart: Ohh all right. Let me just keep that like I'll, I'll just go and validate like like I'm not disagreeing with you. I I've done something in that space, but not in the last five minutes. I just need to refresh.
[00:49:39.582] Lee Whitaker (Unverified): And also I think the only from even if you could if you had done, I don't know, 20 invoices with a company, it was 20 different contacts. You're not gonna have them all 20 of them added as added extra persons in that company record.
[00:49:51.983] Leonie Meissner (Unverified): I don't. I don't want people in there the the risk to me, the risk to me of 0 picking up the wrong ones scares the crap out of me.
[00:50:00.608] Lee Whitaker (Unverified): Yeah. They from, yeah.
[00:50:03.298] Leonie Meissner (Unverified): So I don't want any email addresses in there. Um, yeah, but happy to happy to hear that. If there's something that we could look at.
[00:50:12.390] Cameron Stewart: Yeah. Now that that's that's OK and and the would be better to keep a single company record in your.
[00:50:20.980] Leonie Meissner (Unverified): We we have to, we have to be able to report.
[00:50:24.611] Cameron Stewart: Okay, that's cool.
[00:50:31.888] Leonie Meissner (Unverified): Not only that, I can't apart if you had ten of them, I wouldn't be able to tell them apart.
[00:50:35.780] Cameron Stewart: Ohh, and marriages Leonie emojis. Come on.
[00:50:40.790] Lee Whitaker (Unverified): The. Yeah, no.
[00:50:45.293] Cameron Stewart: Take the point. Alright, so few things to go and look at for that. Uh, so where to from here? You need to. We'll get a couple more inputs from you, said Lady. Just but I'm the process.
[00:51:01.465] Lee Whitaker (Unverified): Process Nikki Alexander Buttner. Yep.
[00:51:01.508] Cameron Stewart: Ohh did I miss something nice? I'm do that. I'll just go through the spec in a few more one once I get that just in line with the process map and just see if there's any other questions or decision points that we need to come back and review. Lee um.
[00:51:19.610] Lee Whitaker (Unverified): So my actions I took were we're gonna add a note that there's an outstanding known issue with zero to do with splits on the M1 invoice when it has an engagement, and that's a known 0 issue that we can look at on the side to send you the process diagram and to add new scope for this new field called email invoicing at the job initiation level. That will also flow through to hopefully something like the notes on the invoice. So you can use it for the email send. And to look at brand is available or not as an option for the API.
[00:51:52.300] Cameron Stewart: We'll have to just go through the API and detail and just that's the the bit we'll need to add in time to your backing. I'm just to make sure we can track everything. Obviously down the track will be some look up tables. That's all fine. Umm is there anything else that um, Kayla or any other considerations from?
[00:52:16.186] Kayla Dooley (Unverified): Not at this stage.
[00:52:20.601] Chloe McFadden (Unverified): Kayla, I haven't sent on to Cameron your revenue control screen changes yet. And because Kayla and I think Chris and I mentioned it to common cause, there's a few things from our wave um process that a very they've changed their mind on or would like some updates. Um, but which was going to be more of a phase two potentially LinkedIn with this so we can send that on to you, but might be better for Kayla to actually explain the changes.
[00:52:54.048] Cameron Stewart: Yet so I think to that point like we say, where there's that exception, Lee, that not any screenshots whatever that just support that just to assist with the knowledge transfer would be appreciated. Don't mind doing another piece around that, Kayla. Just around that revenue control, I must admit I haven't had our hallway cause that's been existing app. I haven't had a good look at that yet, so I'm happy to do the learning at the appropriate time. If there's an expert to take me through that from the user perspective, that's even better. I'm what is 0 piece just that the high level. I know Ash would want me to ask. So are we seeing in terms of like the go live a ramping up of the enhancements to date it we've seen that there's zero is a um must have pace to be able to roll out the updates. What's where's the? The latest. Yeah, to launch white, yeah.
[00:53:52.974] Ashley Kenny: Yeah, that's the better question. Answer the launch of wave and this integration was zero. Are they tied or does the wave launch without when and then zero integration comes when it's done?
[00:54:05.992] Chloe McFadden (Unverified): That was more our plan, so zero to come lighter to get weighed up and running, get people using it with A and, you know, TBC invoicing will be changing.
[00:54:18.562] Lee Whitaker (Unverified): There are is ohh very good. I was gonna just say there is a bit of a timing. Um from the derwentside that the existing integration between bullhead and zero will end on the 30 June. That's not being extended cause it was going into annular expensive contracts. So any longer than that will become a lot of manual additional manual work for the team. So just if you think about that scope of work, a bit of a timeline would be really appreciated, Cameron as well. And I know using some of those Ricardo UI parts should take a lot of the heavy lifting out of building anything with zero the ice.
[00:54:54.891] Cameron Stewart: Yeah, they're awesome. He is there any decommissioning that needs to happen at your bullhorn side? Probably not in our scope of work, but I'm just conscious that you don't really want to methods in ohh production at the same time right? So when zeros?
[00:55:12.081] Leonie Meissner (Unverified): Ohh, when will well I presume the code will get switched off if I'm not paying for it anymore and there will be some fields we'll need to hide or retire involved on through.
[00:55:26.599] Lee Whitaker (Unverified): Lee only if the company contact ID from bullhorn S0, they're in bullhorn companies, but they won't delete when Kylo deletes the code, they'll always be stored in your bullhorn. So we can extract those later. So just be some decommissioning your fields and but running them in parallel as they're different API connections, you can have multiple connections into zero getting case, so that wouldn't be the concern if it was, you know you wouldn't wanna cut fast with you know you. So we can duel test and you know to draughts and then just delete them and keep the ball when running while we're you 18.
[00:55:58.764] Cameron Stewart: I I.
[00:56:00.878] Leonie Meissner (Unverified): Well, I I think we just need to let Ashton Cam come back to us about what's possible. I'm just very mindful that it's exactly probably like 30-3 days, 30-4 days till 30 June. So we need to look at what's possible before we get. Um carried away.
[00:56:17.147] Lee Whitaker (Unverified): Which are two phase approach of an as is versus the new stuff. Maybe auction Cam and if you wanna look at what this looks like, it's only if I pay you the process for as is. I'll give you a bit of an idea. You probably saw from Kayla's walk through this a lot of fields that don't currently map or do things, and it maybe we take an as is and then enhance it to then do all the more complicated stuff. That removes a lot more manual work.
[00:56:40.161] Cameron Stewart: Yeah. OK, so we might be able to have a couple of guys that get it base one in. Yeah. I was just thinking the only parades take a bit longer than 30 days to organise, so it's some.
[00:56:50.109] Leonie Meissner (Unverified): Ohh no, Chloe can very good at organising things.
[00:56:53.126] Cameron Stewart: What?
[00:56:53.137] Chloe McFadden (Unverified): The had love last minute event.
[00:56:58.371] Leonie Meissner (Unverified): So yeah. Yeah, not we'll be right. We'll be right. Well, shall we leave it with you guys to have a think and see what Lee will do her magic? Um.
[00:57:09.782] Cameron Stewart: Yep, I and I'll just come back to Chloe and Lee. Just thought to run point on this one with any questions that we might have throughout this week.
[00:57:19.200] Lee Whitaker (Unverified): No, that's perfect. Yeah.
[00:57:22.884] Leonie Meissner (Unverified): Alrighty.
[00:57:25.780] Cameron Stewart: Thank you everybody.
[00:57:25.904] Leonie Meissner (Unverified): Um. Chloe and Lee, can I grab you for one second, please? If we don't mind us hanging on your call here, soap. If that's OK, alright.
[00:57:36.501] Lee Whitaker (Unverified): We just end the recording in the transcript.
[00:57:38.752] Cameron Stewart: Yeah, I'll pick that out. Skills. How do I do that? People I've never beated someone out of a meeting. Here we go.
[00:57:45.556] Chloe McFadden (Unverified): We can call each other's separately. If that works fine.
[00:57:46.761] Leonie Meissner (Unverified): Thanks guys.
