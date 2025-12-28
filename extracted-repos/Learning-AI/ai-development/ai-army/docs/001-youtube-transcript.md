---
title: "Youtube Transcript"
project: "Ai Army"
project_uuid: "0197170f-cd62-7295-9d0c-4b7e5a399688"
doc_uuid: "aec64576-d85f-42f7-9ef9-274a20f9e7dc"
created_at: "2025-05-29T02:45:34.591243+00:00"
doc_index: 1
---

Opening: Building Agent Army from One Prompt
0:00
imagine building an entire army of
0:02
agents from just one prompt in this
0:04
video I'm going to show you exactly how
0:06
to use the new Cloud 4 Opus to instantly
0:09
generate an entire set of workflows
0:11
you'll see firsthand how easy it is to
0:13
spin up a master orchestrating agent
0:16
create specialized subworkflows that
0:18
report to that agent and lastly adding
0:21
tools dynamically to those sub agents
0:24
without you writing a line of code
0:25
yourself and here's the craziest part
0:27
this entire process will only take
0:30
minutes from start to finish i'm going
0:32
to walk you through step by step on the
0:34
fastest way to build sophisticated agent
0:36
systems even if you're completely new to
0:38
automation let's dive in all right so
Two Methods: Claude Project vs Direct Chat
0:40
we're going to tackle two different ways
0:42
to assemble your agent army both involve
0:45
only one prompt each but one of them is
0:47
going to use a cloud project and one of
0:48
them we're going to just send a straight
0:50
chat message and before I show you how
0:52
this prompt works and how this entire
0:54
system works let's just prove that it
Live Demo Proof of Concept
0:56
does work now if you send this entire
0:59
prompt we have here along with a series
1:01
of files these are all JSON files with
1:04
one master agent right here called
1:07
retrofure master assistant then you have
1:10
all these subworkflows that report to
1:12
this orchestrating agent so pretty much
1:15
we're using Cloud4 opus and the power of
1:18
extended thinking and web search to be
1:21
able to look at these files get a handle
Claude 4 Opus + Extended Thinking + Web Search
1:23
for how to create the AI agent module
1:26
how they connect together what kind of
1:28
tools can be attached and if we need to
1:30
supplement this information with
1:32
additional information not in Claude's
1:34
training we can use web search which is
1:36
a newer feature in the past couple
1:38
months and if we're using Opus all we
5-10 Minute Generation Process
1:40
have to do is wait around five to 10
1:42
minutes for it to run through this
1:44
entire workflow and you'll see it first
1:46
drafts multiple sets of agents that it
1:49
could put together and then if I ask it
1:51
for just a sample of three of these
1:53
agents and after 5 to 10 minutes Claude
1:56
4 Opus uses all its tools at its
1:58
disposal to come up with not just a
2:00
draft of different agents but it will
2:03
create a draft of the first three agents
2:05
and if you want you can keep going and
2:07
say create the rest and the result is
Copy-Paste Import into n8n
2:09
you get a series of JSON files like this
2:12
one and you can click on the little drop
2:14
down here you'll see we've put together
2:16
all of these different agents with one
2:18
single prompt and then we can just go
2:21
here copy and seamlessly go into NANE
2:25
paste this and now you have an agent
2:28
that isn't just an empty agent you can
2:30
double click and you'll see that an
2:32
entire prompt on how the agent works and
2:35
how it should use all of its sub tools
2:37
is set up for you literally in minutes
2:40
and ready to go and if you click out
2:42
you'll see all the different sub
2:43
workflows that it's come up with that it
Creating Specialized Subworkflows
2:45
thinks would be suitable for this kind
2:47
of business or this kind of task they're
2:50
trying to accomplish but wait there's
2:52
more we don't just create these
2:54
subworkflow drafts it actually can
2:56
create the subworkflows themselves so if
2:59
we click from tab to tab here this is
3:01
the first workflow put together which is
3:03
called the sustainability impact agent
3:06
where it has access to different tools
3:08
that it has decided make the most sense
3:10
given this agents ambitions and once
3:13
again all of these sub agents have
3:15
instructions of their own with a
3:17
reference material on how to call their
3:19
subtools as well so now we basically are
Multi-Level Agent Architecture
3:22
creating agent section where each agent
3:24
has another agent and both of them have
3:26
instructions on how they should operate
3:28
if we keep going you'll see all the
3:29
different agents here from the lodge
3:31
coordination agent to the real-time
3:33
conditions agent each with not only its
3:36
own set of tools but it's smart enough
Dynamic Model Selection
3:38
to decide whether or not it should use
3:40
maybe chat GBT OpenAI or anthropics
3:43
model for the given task as well so we
3:45
have that dynamic nature there and then
3:48
you have your entire set of agents with
3:51
different tools with different
3:52
functionalities and ambitions all
3:54
reporting to the central agent itself
3:56
now before we get into the nitty-gritty
3:58
of the prompt itself I want to walk you
4:00
through the logic of how this works and
Why This Works: Claude 4 Capabilities
4:02
why this works so not too long ago we
4:04
were all blessed with yet another model
4:07
in this case we got the Cloud 4 model
4:09
where we have Claude 4 sonnet and Cloud4
4:11
opus not only that when you combine
4:14
Claude 4 with extended thinking a
4:16
feature available to all as well as web
4:19
search something also newly available in
4:21
the past month or so it becomes a
4:23
trifecta this perfect marriage of
4:26
intelligence with the ability to search
4:28
as well as an extension of reflection
n8n Workflows Background
4:31
over time if you've watched my past
4:32
video you already know that it's
4:34
possible to create out of the box and
4:36
end workflows just using claude and
4:39
previously I had to supplement it with a
4:41
cheat sheet a series of nodes for it to
4:43
understand but now that we have web
4:44
search at our disposal and extended
4:46
thinking together we can not only use
4:49
the power of claude that natively is
4:51
decent at any workflows but now we can
4:53
really supercharge it with examples of
4:56
these agents and just allow it to do a
4:58
monkey see monkey do understand the
5:01
structure understand how these tools are
5:03
attached and understand the relationship
5:05
of subworkflows to different types of
5:08
agents now the most central concept here
AI Agent Module: LangChain Framework
5:10
is the AI agent module in NAIDEN and
5:13
this module is based on something called
5:15
Langchain which is a framework that
5:17
really changed the entire course of the
5:19
NAN community where now you have some
5:22
central agent that takes in a prompt
5:24
that can speak to different tools can
5:26
use a language model and can use an
5:28
internal memory and overall NADN like
5:30
every other automation tool uses JSON
5:33
which stands for JavaScript object
5:35
notation to denote and be able to bring
5:38
these workflows to life the way you see
5:40
them visually the fact that they're all
5:42
based on JSON allows us to manipulate
5:45
and generate these JSONs using a
5:47
language model like Cloudfar Opus to be
5:49
able to basically be able to create the
5:51
JSON itself the entire schema and import
5:54
it into any but unlike typical workflows
5:57
they would have seen my tutorial and
5:59
probably tons of other tutorials coming
6:00
out on this AI agent tool is special not
6:04
just in the sense of what it can do but
6:06
how it operates so if we take a look at
Tool Restrictions: What AI Agents Can/Cannot Use
6:08
the tools here you can't just use any
6:11
tool from a specific provider there are
6:13
different functionalities or methods
6:15
available to the AI agent that aren't
6:18
necessarily the only functionalities you
6:20
can have for example you might have a
6:21
node that allows you to watch new rows
6:24
being added to a Google sheet right and
6:26
every time you watch a new row come in
6:28
that triggers an entire workflow
6:31
technically with an AI agent they
6:32
wouldn't really play very well an AI
6:34
agent would want some form of very
6:37
specific action to occur that's
6:39
triggered externally from the agent
6:40
itself so taking the Google Sheets
6:42
example it would be able to add a new
6:44
row receive new rows search new rows
6:47
something that's very functional and
6:48
isn't necessarily triggerbased
Claude's Tool Understanding Limitations
6:52
so keeping that in mind if you were just
6:54
to ask Claude out of the box build me an
6:56
AI agent workflow you could get some
6:59
results that are decent but it will
7:00
basically struggle with understanding
7:03
what tools it can use but most likely it
7:05
will struggle to delineate between what
7:08
tools can it use what are the nodes that
7:10
I can write JSON for to visualize those
7:13
tools and most importantly what are the
7:15
different tiers of methods that I can
7:17
have access to as an AI agent which is
7:19
different from a standard workflow you
7:21
put together and edit it in and I'm not
7:23
spoiling the rest of the video by
7:24
telling you that the crux of being able
Core Challenge: Creating Compatible Tools
7:26
to do this entire process relies on the
7:29
ability to create these tools reliably
7:31
in the exact way that the AI agent node
7:34
expects so the overall goal is that
7:36
we're able to create a series of JSONs
7:39
one that acts as our orchestrator and
7:42
the others that act as our sub aents all
7:45
of which ideally don't have their own
7:46
subworkflows because then you'll have
7:48
agents with subworkflows with
7:50
subworkflows and this entire chain can
7:52
keep going on now you can totally do
7:54
that if you wish but for simplicity sake
7:57
I ideally wanted to just go from
7:59
orchestrating agent to sub workflows
8:01
that all have tools so that's the
8:03
general structure that we're going for
8:04
at least with our approach so now that
8:06
we have that background we're safe to
8:08
dive straight into this prompt and just
8:10
for the pure comprehension of every part
8:13
I will read through it and basically
8:14
give a voice over for the parts you
8:16
should really care about okay so let's
Master Prompt Breakdown
8:18
give it a read you are an expert NAND
8:21
workflow architect and systems designer
8:24
your primary mission is to generate a
8:26
comprehensive functional and importable
8:28
NAN AI agent system based on the
8:31
provided business description strictly
8:34
emulating the structural patterns node
8:36
types and connection methods so in this
8:38
case I'm just giving it a series of
8:39
examples here so especially for the AI
8:42
agent nodes and their tools via AI tool
8:45
so this here is a part of the underlying
8:47
JSON that basically denotes to the agent
8:50
what is attached to that agent and
8:52
that's where the attachment of the tools
8:54
comes into play we then say your
100% Valid JSON Requirement
8:55
paramount goals are to ensure all
8:57
generated N&N workflow JSON is 100%
9:00
valid meaning it's not corrupt
9:01
importable and entirely free of property
9:04
value errors now what are property value
9:06
errors these errors pop up quite a bit
9:08
when the JSON is generated by some form
9:10
of language model but it's missing key
9:13
parameters or key components that any is
9:15
expecting because it's expecting those
9:17
and it needs those to be able to
9:18
visualize it the way you see it on a
9:20
screen it's not able to actually import
9:22
it so I'm trying to have it reflect
9:24
using that extended thinking function
9:26
and make sure that before we import it
9:28
into NADN there's a very high likelihood
9:31
that it's going to actually work next I
Two-Stage Process Explained
9:33
instructed that there's going to be two
9:34
distinct stages first after analyzing
9:37
the business description provided at the
9:38
end of this message you must
9:40
conceptualize and list directly in the
9:42
chat six to eight potential specialized
9:44
AI agent names so in this case I'm
9:46
saying I want you to come up with six to
9:49
eight ideas brainstorm on the types of
9:51
agents we want to create this gives us a
9:53
baseline to actually work from now the
9:56
next part is for each of the conceptual
9:57
agents provide a concise
Tool Verification: Real APIs Only
10:03
one-sensit nodes or verifiable public
10:06
APIs that your web search for tools not
10:09
covered in provided examples indicates
10:11
would be the most appropriate for these
10:12
tasks do not proceed with any unverified
10:15
or hallucinated tools or APIs now what
10:18
is this last part about here
10:19
hallucinated tools or APIs once in a
Avoiding Fictional API Problem
10:22
while even using Opus it will create a
10:25
tool that is a fictional non-existent
10:28
API specific to company X so imagine you
10:31
said company X has these services they
10:34
have this stack it might accidentally
10:36
create an HTTP request which is a
10:38
request to an API and call it
10:41
company.x.api and basically make it out
10:43
of thin air which is not what we want we
10:46
want our tools to have a high likelihood
10:48
of being grounded and being actually
10:50
functional and from these six to eight
10:52
ideas we come up with we actually just
10:53
want to start with creating three of the
Why Start with Three Agents
10:55
most impactful of these workflows now
10:58
there's two different reasons why I'm
10:59
saying three here first of all if you
11:01
let it create six to eight workflows in
11:03
one shot and you're just on the Claude
11:05
Pro plan using Cloud Opus and extended
11:08
thinking you might completely use all
11:11
your credits in one shot so when I say
11:13
three it just gives you the ability to
11:15
quickly audit whether or not it's
11:17
working whether or not it's adding the
11:19
tools you'd expect before you commit and
11:22
donate all your credits for the next 6
11:24
to 7 hours to Anthropic and the second
11:26
reason is obviously time because this
11:28
will take at least 5 to 10 minutes to
11:29
put together and you don't want to wait
11:31
half an hour all to find out that seven
11:34
of your workflows are completely not
11:35
usable now this second stage is
11:37
completely optional and if you want to
11:39
move ahead and complete the remaining of
11:41
the initial draft of agents they came up
11:43
with then you can just say "Cool you did
11:45
a great job let's finish off with the
11:47
rest of the agents." And then with this
11:49
instruction it should know exactly what
11:50
it next step should be now if we scroll
11:52
down I want to focus on this specific
2-3 Tools Maximum per Agent
11:54
instruction here that says "These
11:56
specialized agents should utilize two to
11:59
three with an absolute maximum of five
12:02
if genuinely distinct critical and
12:04
verifiable real tools and must have
Success/Error Handling Setup
12:07
correctly connected response and try
12:09
again set nodes wired to the respective
12:11
AI agent node success and error
12:13
outputs." And what does that mean in
12:15
plain English if we pop over to the
12:17
second tab here all we're asking is that
12:19
whatever tools you choose make sure
12:21
they're legit tools they're not made up
12:23
and number two connect a set response
12:26
and a try again step for the AI agent in
12:30
case something goes wrong it can try
12:31
again in case there's some form of
12:32
temporary error and with that if we go
12:35
back we just finish off by adding the
12:38
business description of the underlying
12:40
business and this is what makes this so
12:42
powerful that you can use this entire
12:44
prompt and you just change the very
12:46
bottom and the reason why I added this
12:48
business at the very bottom is when it
Prompt Engineering Strategy
12:49
comes to prompt engineering at least for
12:51
now a prompt will typically be paid
12:54
attention to at the very beginning and
12:56
the very end of the prompt so we want to
12:58
make sure that the business and the
13:00
underlying mechanisms of that business
13:02
are really paid attention to by the
13:03
language model in this case I won't read
13:05
all of this but pretty much it goes
13:07
through this fake business that I came
13:08
up with that has a series of different
13:11
operations and we're just trying to find
13:13
ways to optimize for those operations
13:15
now where this becomes super exciting is
13:17
when we add specifications for what kind
13:19
of tools are using and we find a way to
13:22
create a cloud project to make a much
13:24
more sophisticated version of this
13:26
prompt but just in case you missed
13:27
something on this prompt I'll be making
13:29
this available in the description below
13:31
so you can go through it change it and
13:33
do whatever you want to your heart's
13:34
content to optimize it for your oneshot
Three Business Examples Introduction
13:37
workflow now for our next three samples
13:39
we're going to take a look at we're
13:40
going to analyze three completely
13:42
hypothetical businesses one is called
Flexiflow Studios: TikTok Agency
13:45
Flexiflow Studios that's a Tik Tok
13:47
agency we're going to look at a dessert
13:49
place called Unicorn Milkshake and then
13:52
we're going to look at Chaos Coffee each
13:54
of them uses different tools but they
13:57
have some similarities so Flexiflow uses
14:00
things like ClickUp Air Table and Slack
14:02
and Google and then Unicorn Milkshake
14:05
uses Zoom as well as those tools as well
14:08
and monday.com and then Chaos Coffee
14:11
uses a mixture of what both of these use
14:13
now this is a purposeful example because
14:15
of the big trick and the big nugget I'm
14:18
about to show you next if we pop into
Claude Project Components
14:19
our Cloud project we have quite a few
14:21
different things going on here we have a
14:23
cheat sheet guide that we put together
14:26
we also have a special file here called
agents_tools.json: The Golden Nugget
14:30
agents_tools.json and this is going to
14:32
be the golden nugget you're going to
14:33
learn from this video and then we have
14:35
just another set of workflows that have
14:37
some form of master orchestrating agent
14:39
and sub aents and what I'll do is along
14:42
with that prompt I provided you
14:43
initially I'll also provide you with a
14:45
series of files that you can use as well
14:47
to add to a project or use in a prompt
14:50
so you can use this as well without
14:51
having to build that initial workflow
14:53
yourself now for this prompt it took so
14:55
much time that I refused for it to be
14:56
copycatted all over YouTube so this
14:59
prompt will be available to my early AI
15:01
adopters community members exclusively
15:03
in the community but for the rest I will
15:05
walk you through how this agent tools
15:08
file works because this will open so
15:10
many doors for you if we go into this
15:12
agent tools aen you'll think that I'm a
15:15
madman for putting one AI agent with
15:19
multiple many tools now do I intend on
15:23
ever running this workflow no what I'm
The Cheat Code Concept
15:26
doing is a bit of a cheat code if you
15:28
remember before if you go to something
Asana Example: Tool Limitations
15:30
like let's say Asana which is a project
15:33
management tool and you go under
15:35
options while you can use all of these
15:37
in any the AI agent module like I said
15:41
before can't necessarily use all of
15:42
these tools it can use a subset of these
15:45
different methods so if I had some form
15:48
of trigger action let's go here on a new
15:50
asana event let's just bring this to the
15:52
board because this is the easiest way
15:54
for you to understand what's happening i
15:56
physically can't connect this as a tool
15:59
it will not accept it because this is a
16:00
trigger it's not something that the
16:02
agent module can actually play nice with
16:05
which is why you'll see that when you
16:07
add a tool to the agent module and you
16:10
click on asauna we won't have as many
16:13
options as we saw before i think we had
16:15
22 options before but now we can only do
16:19
these operations using the agent module
16:21
which is where this complexity comes in
16:23
that's made me spend hours trying to
16:26
figure this out and knowing that a lot
Real Business Tools vs Limited Options
16:28
of these different services like Zoho
16:30
like Monday like ClickUp which are
16:32
actual services that most businesses use
16:34
not all businesses use Air Table and not
16:37
all businesses use Google Sheets so what
16:38
happens if you have these kinds of tools
16:41
in your toolbox well if we can't use web
16:45
search reliably to understand how to
16:48
attach these to the agent and if we
16:50
don't have a knowledge base we want to
16:51
constantly feed of examples of workflows
16:54
with these exact tools what we could do
Creating Custom Knowledge Base
16:56
is just put all of the tools that we
16:58
care about attach it to one agent and
17:01
then download that as a JSON and
17:04
technically we can use that as our mini
17:06
knowledge base now to pseudo fine-tune
17:09
our agent in Claude to understand how to
17:12
put together a Slack connection to an
17:14
agent how to put together an ASA
17:16
connection to an agent same with Monday
17:18
same with Zoho so this becomes your
17:20
cheat code where you can use whatever
17:22
you want depending on your particular
17:24
business or service you're offering you
17:26
can add whatever node you wish let's say
17:28
a quadrant node or let's say an airtop
17:32
tool node and then you can just hook up
17:34
all the different functionalities you
17:36
think you'd want to use and then use
17:37
that JSON as a part of your knowledge
17:40
base to allow Claw to have a better
17:42
understanding of how to put everything
17:44
together when it comes to the AI agent
17:46
module once you have that put together
17:48
along with the cheat sheet you now have
17:49
something super potent that you only
17:52
have to just provide a description of a
17:53
business as well as the tools used in
17:55
that business and you can crank out
17:57
these workflows fairly reliably over and
18:00
over again and for our first example we
Flexiflow Studios Implementation
18:02
have Flexiflow Studios which is a
18:04
beautiful name now all we have as an
18:06
instruction is build an agent army for
18:08
this business we describe the business
18:11
itself and all we do is we just drop in
18:14
the names of the tools so we're using
18:16
Zoom ClickUp we're using Slack some
18:19
Google Sheets some Air Table and then we
18:21
basically contextualize it in one big
18:23
paragraph and with our supercharged
18:25
prompt I put together specifically for
18:27
this claude project this just takes this
18:30
specific snippet and then creates a list
18:33
of hypothetical agents that it could put
18:36
together and then it creates a short
18:37
list of three agents a client request
Three Generated Agents Demo
18:40
handler agent a project setup agent and
18:43
a team coordination agent and then after
18:46
some contemplation it puts together the
18:49
JSON for the master coordinator the
18:52
request handler and the rest and all you
18:54
have to do is either download the actual
18:57
text file or you can copy it and import
Import Process Walkthrough
19:00
it directly into any and what you get is
19:02
the following where you have the
19:04
Flexiflow master AI coordinator with all
19:07
the subworkflows it's drafted and then
19:10
you have a draft of those subworkflows
19:12
where you have things like Air Table you
19:14
have Slack and notice how they're not
19:17
invalid they're all valid we now have
19:19
monday.com we have Slack again and
19:22
they're not broken because it had that
19:24
additional training data that cheat
19:26
sheet of the different nodes that it
19:27
could use and repurpose from and then if
19:30
we take a look at the final one here we
19:32
now have you can see here ClickUp as
19:34
well as Zoom and all of these are
19:37
logical so this one a team coordination
19:39
AI agent has something for scheduling
19:42
Zoom meetings team availability checks
19:44
by sending messages and then creating
19:46
tasks for that team and if you so wanted
19:49
to add more tools you could just change
19:51
the underlying prompt and tell it you
19:53
know what draft five tools for each
19:55
thing now as you add more tools you
19:57
might add some more bloat some
19:59
unnecessary tooling but the whole point
20:01
of this exercise is to get you started
20:04
getting you from zero to 80% is this
20:07
going to be perfect out of the box is
20:08
this going to run on its first try no
20:10
but being able to set the foundation
20:12
with this head start will help you speed
20:14
things up and also help you brainstorm
20:17
in a short amount of time what could be
20:19
possible for the second business we have
Pet Pal Concierge Example
20:20
Pet Pal concurge which is the Uber for
20:23
pet care connecting busy pet parents
20:25
with trusted local sitters in this case
20:27
we seem to also be using Air Table Slack
20:30
Zoom um and in this time ASA right here
Emergency Care & Provider Management
20:34
and then we get the following workflows
20:36
where we have the master agent with a
20:39
series of different nodes we have the
20:41
emergency care coordinator the provider
20:44
management agent the booking and
20:45
scheduling agent and then something like
20:47
the photo update agent i would imagine
20:49
the photos of the pets themselves maybe
20:51
their profiles on some form of portal or
20:53
website and in terms of the subworkflows
20:56
we have the emergency care AI agent that
20:59
has access to air table to search
21:00
available providers for a given dog's
21:03
doctors and then we have Slack to alert
21:06
nearby providers and then for ASA now we
21:09
have create urgent task if needed so
21:11
it's trying to come up and rationalize
21:13
through different workflows and like I
21:15
said before each one has a starter
21:18
prompt that you can use that's already
21:19
pretty sophisticated out of the box and
21:21
all you can do is kind of just fine-tune
21:23
it for your specific use case we also
21:26
have a provider management AI agent that
21:28
uses in this case money.com airtable and
21:31
Gmail and then we have one more which is
21:33
the booking scheduling that uses a
21:35
combination of Google Sheets ASA and
21:37
scheduling a consultation using Zoom so
21:39
now that we have all the puzzle pieces
21:41
set up so it can just pick and choose
21:43
these different nodes and we don't have
21:45
to obsess over the functionality the
21:48
fact that these nodes are connecting
21:49
properly to the agent it can now also
21:51
focus on the higher level business
21:53
decisions on what is practical what kind
21:55
of agents make the most sense for this
21:57
kind of business given the profile and
Chaos Coffee Co: 15 Coffee Shops
22:00
last but not least we have Chaos Coffee
22:02
Co that runs 15 quirky coffee shops
22:05
known for their organized chaos and in
22:08
this case we mention once again Google
22:10
Sheets Air Table and ClickUp obviously I
22:12
could have added more i just wanted to
22:13
be able to use that one file for all of
22:15
these use cases so just bear with me and
22:18
in this case yet again we're able to
22:19
crank out this operator agent here that
22:22
has its set of instructions and then we
Inventory & Recipe Innovation Agents
22:25
have subworkflows like inventory
22:27
ingredient discovery a recipe innovation
22:30
agent and a quality control agent as
22:32
well as a financial analytics agent as
22:34
well so it's very dynamic to the
22:36
specific business we have and if we pop
22:38
into the subworkflows we have an
22:41
interlocation coordinator AI that has
22:43
access to track deliveries via
22:45
monday.com send coordination alerts in
22:48
Slack and then create a coordination
22:49
task in ClickUp we have an inventory
22:53
discovery agent that also has the
22:55
ability to in this case also update
22:57
ingredients in the database in Air Table
22:59
update inventory board in money.com and
23:02
yet again create a task and last but not
23:04
least we have my favorite which is the
23:06
recipe innovation agent that has access
23:09
to schedule tasting sessions with Zoom
23:12
document recipes in Google Sheets and
23:14
announce any big recipes to the whole
23:16
crew i think there's 15 locations in
23:18
this hypothetical company so this would
23:20
be the final result here and then you
23:22
have once again yet another prompt
23:24
orchestrating these agents you can see
23:26
it's pretty consistent from workflow to
23:28
workflow and that's pretty much it so
Wrap-up: 0 to 80% Creation
23:29
hopefully you found this as cool as I
23:31
did building it and this will be
23:33
something useful to you to create your
23:35
own drafts of AI agent networks to get
23:38
you off the ground and get you from 0 to
23:39
80 as quickly as possible once again if
Resource Access Information
23:42
you want access to the very first prompt
23:43
along with a sample agent network that
23:45
you can use to try to repurpose this
23:47
then I'll make that available in the
23:49
first link in the description below but
23:50
if you want access to the supercharged
23:52
prompt along with the underlying cheat
23:54
sheet guide for the Claude project then
23:56
that will be in my community in the
23:58
second link in the description below
23:59
where you'll have access to more mad
24:01
scientist experiments than you can
24:02
imagine and exclusive content that
Community Exclusive Content
24:04
you'll never see on YouTube enjoy
24:06
building and I'll see you in the next

Sage™ - Best-in-Class Cloud Software
The Smart Solution T