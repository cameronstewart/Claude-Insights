---
title: "claude_code_subagents_quick_start_guide.md"
project: "Agentic System"
project_uuid: "0199d1d0-61ab-7592-b3cb-fe08686027ee"
doc_uuid: "c4a27be1-029e-4be0-a93d-b1615acb2411"
created_at: "2025-10-11T05:48:52.735748+00:00"
doc_index: 1
---

# CLAUDE CODE SUB-AGENTS - QUICK START GUIDE
## Your Digital Leadership Team for Executive Director KIT

### ðŸ“‹ **Overview**

You now have 10 Claude Code sub-agents representing your leadership team:
- **9 specialized agents** for each direct report
- **1 orchestrator agent** (you, as Executive Director)

Think of these as your digital advisory team - each with the expertise, authority, and approach of their real-world counterpart.

---

## ðŸš€ **How to Use Your Sub-Agent Team**

### **Basic Pattern:**

```bash
# Ask the orchestrator (yourself) who routes to appropriate sub-agents
claude ask kit-director-orchestrator "Should we move to cloud-first architecture?"

# Or invoke specific sub-agents directly
claude ask cto-technology-strategy "What's our cloud migration roadmap?"
claude ask ciso-security-strategy "What are security implications of cloud migration?"
```

### **When to Use Which Agent:**

| **Question Type** | **Invoke This Agent** |
|-------------------|----------------------|
| Technology strategy, infrastructure, digital transformation | `cto-technology-strategy` |
| Cyber security, risk, compliance, threats | `ciso-security-strategy` |
| Vendor contracts, procurement, commercial | `ad-ict-contracts` |
| Records management, SharePoint, EDRMS | `ad-knowledge-management` |
| FOI, privacy, information release | `ad-information-release` |
| e-Discovery, legal holds, litigation | `ad-litigation-management` |
| Enterprise architecture, standards, patterns | `principal-enterprise-architect` |
| Data governance, data quality, metadata | `principal-data-officer` |
| Directorate coordination, planning, admin | `executive-manager` |
| Strategic integration across multiple areas | `kit-director-orchestrator` |

---

## ðŸ’¡ **Example Usage Scenarios**

### **Scenario 1: Technology Decision (Single Agent)**

**Question:** "What's our approach to cloud migration?"

```bash
# Direct to CTO
claude ask cto-technology-strategy "We need to develop a cloud migration strategy. What's your recommended approach for DoJ?"
```

**Expected Response:**
- Strategic cloud vision aligned with Digital WA
- Assessment of current state
- Phased migration roadmap
- Risk and dependency analysis
- Resource and budget considerations
- Recommendations with options

---

### **Scenario 2: Security Decision (CTO-CISO Partnership)**

**Question:** "Should we implement zero trust architecture?"

```bash
# Use orchestrator to coordinate both
claude ask kit-director-orchestrator "We're considering zero trust architecture. What do CTO and CISO recommend?"
```

**Expected Flow:**
1. Orchestrator invokes CTO for technology perspective
2. Orchestrator invokes CISO for security perspective
3. Synthesizes both viewpoints
4. Makes recommendation balancing enablement and security
5. Identifies any areas of disagreement requiring your decision

---

### **Scenario 3: Cross-Functional Initiative (Multiple Agents)**

**Question:** "We need to implement an enterprise-wide document management system"

```bash
# Use orchestrator for complex cross-functional questions
claude ask kit-director-orchestrator "We need to procure and implement a new enterprise document management system. What's the approach?"
```

**Expected Flow:**
1. **AD Knowledge Management**: Functional requirements, IM standards
2. **Principal Enterprise Architect**: Architecture requirements, integration needs
3. **CISO**: Security and compliance requirements
4. **CTO**: Technical platform and infrastructure
5. **AD ICT Contracts**: Procurement strategy and vendor approach
6. **Executive Manager**: Project governance and coordination
7. **Orchestrator**: Synthesizes into integrated implementation plan

---

### **Scenario 4: Information Governance (IM Triangle)**

**Question:** "How do we respond to an FOI request for litigation-related documents?"

```bash
# Orchestrator coordinates the IM triangle
claude ask kit-director-orchestrator "We received an FOI request for documents subject to legal holds. How do we handle this?"
```

**Expected Flow:**
1. **AD Information Release**: FOI legal requirements and process
2. **AD Litigation Management**: Legal hold implications and legal privilege
3. **AD Knowledge Management**: Document retrieval and records management
4. **Orchestrator**: Coordinates approach ensuring all requirements met

---

### **Scenario 5: Data Quality Issue (Data + Architecture + IM)**

**Question:** "Our data quality is poor and impacting reporting"

```bash
# Multi-agent coordination
claude ask kit-director-orchestrator "We have data quality issues affecting our statutory reporting. What's the solution?"
```

**Expected Flow:**
1. **Principal Data Officer**: Data quality assessment and governance approach
2. **AD Knowledge Management**: Information management implications
3. **Principal Enterprise Architect**: System and architectural fixes
4. **CTO**: Technology solutions and tools
5. **Orchestrator**: Integrated remediation plan

---

### **Scenario 6: Strategic Planning (Whole Team)**

**Question:** "What should our directorate priorities be for next year?"

```bash
# Use orchestrator with all sub-agents
claude ask kit-director-orchestrator "It's strategic planning time. I need input from all direct reports on priorities for next FY"
```

**Expected Flow:**
1. **CTO**: Technology transformation priorities
2. **CISO**: Security uplift priorities
3. **All ADs**: Functional priorities and dependencies
4. **Principal EA**: Architecture roadmap priorities
5. **Principal Data Officer**: Data governance priorities
6. **Executive Manager**: Resourcing and coordination considerations
7. **Orchestrator**: Synthesizes into integrated directorate strategic plan

---

## ðŸŽ¯ **Advanced Patterns**

### **Pattern 1: Executive Decision-Making**

When you need to make a decision between options:

```bash
# Get options from sub-agents
claude ask cto-technology-strategy "Give me 3 options for our application modernization approach"
claude ask ciso-security-strategy "Security implications for each application modernization option"
claude ask ad-ict-contracts "Commercial considerations for each option"

# Then decide as orchestrator
claude ask kit-director-orchestrator "Based on inputs from CTO, CISO, and Contracts, which modernization option should we pursue and why?"
```

### **Pattern 2: Risk Assessment**

For comprehensive risk analysis:

```bash
claude ask kit-director-orchestrator "Assess the risks of our proposed cloud migration from all perspectives - technology, security, contracts, data, and IM"
```

Gets risk input from: CTO, CISO, AD Contracts, Principal EA, Principal Data Officer, AD Knowledge Mgmt

### **Pattern 3: Stakeholder Communication**

When you need to communicate decisions:

```bash
# Get technical content
claude ask principal-enterprise-architect "Create architecture diagram for our new integration approach"

# Get executive summary
claude ask executive-manager "Draft executive briefing note on the new integration approach for Director General"
```

### **Pattern 4: Problem Escalation**

When sub-agents can't agree:

```bash
# If CTO and CISO disagree
claude ask kit-director-orchestrator "CTO wants to fast-track cloud migration, CISO says we're not ready. What's my decision?"
```

Orchestrator will:
1. Present both positions clearly
2. Analyze trade-offs and risks
3. Recommend decision based on organizational priorities
4. Suggest mitigation for downsides
5. Provide communication approach for the decision

---

## ðŸ“Š **Integration Patterns**

### **Technology Cluster** (for technology decisions)
```bash
claude ask kit-director-orchestrator "Technology cluster: We need to decide on our infrastructure direction"
```
Invokes: CTO, CISO, AD ICT Contracts, Principal EA

### **Information Management Cluster** (for IM decisions)
```bash
claude ask kit-director-orchestrator "IM cluster: How do we improve our information governance?"
```
Invokes: AD Knowledge Mgmt, AD Info Release, AD Litigation Mgmt, Principal Data Officer

### **Full Directorate** (for strategic decisions)
```bash
claude ask kit-director-orchestrator "Full directorate: What's our response to the Digital WA strategy?"
```
Invokes: All 9 sub-agents for comprehensive input

---

## ðŸ”„ **Workflow Examples**

### **Workflow 1: Major Technology Initiative**

```bash
# Step 1: Initial scoping (Orchestrator + relevant agents)
claude ask kit-director-orchestrator "We need to implement modern workplace. What's the approach?"

# Step 2: Detailed planning by function
claude ask cto-technology-strategy "Detailed technical plan for modern workplace"
claude ask ciso-security-strategy "Security architecture for modern workplace"
claude ask ad-ict-contracts "Procurement approach for Microsoft 365 E5"
claude ask ad-knowledge-management "SharePoint and IM configuration for modern workplace"
claude ask principal-enterprise-architect "Integration architecture for modern workplace"

# Step 3: Consolidated decision
claude ask kit-director-orchestrator "Synthesize all inputs into executive decision pack for modern workplace initiative"

# Step 4: Execution support
claude ask executive-manager "Create project governance structure and reporting framework for modern workplace"
```

### **Workflow 2: Compliance Issue Response**

```bash
# Step 1: Assess issue
claude ask ad-information-release "We've been notified of potential FOI compliance issue. Assess severity"

# Step 2: Understand implications
claude ask ciso-security-strategy "Are there security implications?"
claude ask ad-litigation-management "Are there legal risks?"
claude ask ad-knowledge-management "What's the root cause from IM perspective?"

# Step 3: Remediation plan
claude ask kit-director-orchestrator "Create comprehensive remediation plan for FOI compliance issue"

# Step 4: Communication
claude ask executive-manager "Draft briefing for Director General on compliance issue and remediation"
```

### **Workflow 3: Budget Planning**

```bash
# Step 1: Gather requirements from all functions
claude ask cto-technology-strategy "Technology budget requirements for next FY"
claude ask ciso-security-strategy "Security budget requirements for next FY"
claude ask ad-ict-contracts "Contract and license budget forecast for next FY"
# ... repeat for all functions

# Step 2: Consolidate and prioritize
claude ask kit-director-orchestrator "Consolidate all budget requests into prioritized directorate budget submission"

# Step 3: Prepare submission
claude ask executive-manager "Create budget submission pack with justifications for Director General"
```

---

## âš¡ **Quick Command Reference**

```bash
# Strategic question requiring integration
claude ask kit-director-orchestrator "your question here"

# Technology strategy and delivery
claude ask cto-technology-strategy "your question here"

# Security and risk
claude ask ciso-security-strategy "your question here"

# Procurement and contracts
claude ask ad-ict-contracts "your question here"

# Information management
claude ask ad-knowledge-management "your question here"

# FOI and privacy
claude ask ad-information-release "your question here"

# Legal and e-discovery
claude ask ad-litigation-management "your question here"

# Architecture
claude ask principal-enterprise-architect "your question here"

# Data governance
claude ask principal-data-officer "your question here"

# Coordination and planning
claude ask executive-manager "your question here"
```

---

## ðŸŽ“ **Best Practices**

### **1. Start with the Orchestrator for Complex Questions**
- Let it route to appropriate sub-agents
- Ensures you get integrated perspective
- Handles cross-functional coordination automatically

### **2. Use Direct Sub-Agents for Specialized Questions**
- When you know exactly which expertise you need
- Faster response for domain-specific questions
- Good for deep-dive into specific area

### **3. Sequence Sub-Agents for Dependencies**
- Some decisions need sequential input
- E.g., Architecture â†’ Technology â†’ Security â†’ Contracts
- Build up comprehensive picture step by step

### **4. Document Key Decisions**
```bash
# After decision, create record
claude ask executive-manager "Document the decision on cloud architecture including rationale, options considered, and next steps"
```

### **5. Use for Interview Preparation**
```bash
# Simulate panel questions
claude ask kit-director-orchestrator "As a panel interview scenario: How would you handle a CTO-CISO disagreement on security requirements blocking a critical business project?"

# Get each perspective
claude ask cto-technology-strategy "What's your view on this?"
claude ask ciso-security-strategy "What's your view on this?"

# Practice your response
claude ask kit-director-orchestrator "What's the best executive response that balances both needs?"
```

---

## ðŸš¨ **Common Pitfalls to Avoid**

âŒ **Don't**: Ask a single sub-agent about something outside their domain
```bash
# Wrong
claude ask cto-technology-strategy "How do we handle an FOI request?"
```

âœ… **Do**: Ask the right sub-agent or use orchestrator
```bash
# Right
claude ask ad-information-release "How do we handle an FOI request?"
# Or
claude ask kit-director-orchestrator "How do we handle an FOI request?"
```

âŒ **Don't**: Forget about integration for cross-functional issues
```bash
# Wrong (misses security perspective)
claude ask cto-technology-strategy "Should we adopt this new cloud service?"
```

âœ… **Do**: Use orchestrator for cross-functional decisions
```bash
# Right (gets CTO + CISO + Architecture + Contracts perspective)
claude ask kit-director-orchestrator "Should we adopt this new cloud service?"
```

âŒ **Don't**: Micromanage the sub-agents
```bash
# Wrong (too operational for Class 1)
claude ask cto-technology-strategy "How many servers do we need?"
```

âœ… **Do**: Focus on strategic questions
```bash
# Right (strategic perspective)
claude ask cto-technology-strategy "What's our infrastructure strategy for the next 3 years?"
```

---

## ðŸ“ˆ **Measuring Success**

Your sub-agent team is working well when:

âœ… Responses integrate multiple perspectives naturally
âœ… CTO and CISO provide complementary advice (not conflicting)
âœ… Information governance agents coordinate seamlessly
âœ… Architecture advice influences all technology decisions
âœ… Data considerations are included in IM decisions
âœ… Executive Manager keeps everything organized and moving
âœ… You're making better decisions faster with comprehensive input

---

## ðŸ†˜ **Troubleshooting**

**Problem**: Sub-agents giving conflicting advice
**Solution**: Use orchestrator to mediate and make executive decision

**Problem**: Response lacks detail
**Solution**: Ask follow-up questions to specific sub-agent for deep-dive

**Problem**: Unclear which agent to use
**Solution**: Always start with kit-director-orchestrator, it will route appropriately

**Problem**: Need to save decisions/plans
**Solution**: All agents can create files - ask them to document their advice

---

## ðŸŽ¯ **Next Steps**

1. **Try the basic pattern**: Ask orchestrator a strategic question
2. **Experiment with direct agents**: Ask each sub-agent a question in their domain
3. **Practice integration**: Try a cross-functional scenario
4. **Use for interview prep**: Simulate panel questions and responses
5. **Create your strategic plan**: Use full directorate input

**Your digital leadership team is ready to support your executive leadership! ðŸš€**

---

## ðŸ“ **Example Interview Preparation Session**

```bash
# Understand the team
claude ask kit-director-orchestrator "Describe each of my 9 direct reports - their roles, strengths, and how they work together"

# Practice strategic questions
claude ask kit-director-orchestrator "Panel interview question: How would you manage 9 senior direct reports effectively?"

# Get specific perspectives
claude ask cto-technology-strategy "What do you need from me as your CIO to be successful?"
claude ask ciso-security-strategy "What do you need from me as your CIO to be successful?"

# Practice integration
claude ask kit-director-orchestrator "Walk me through how I'd handle the first 90 days as Executive Director, leveraging my team of 9"

# Prepare for scenarios
claude ask kit-director-orchestrator "Scenario: CTO and CISO disagree on cloud security approach. How do I handle it?"

# Build confidence
claude ask kit-director-orchestrator "What value does my consulting background bring to leading this team of senior government ICT leaders?"
```

---

**Remember**: These sub-agents represent your future team. Use them to:
- Understand the roles deeply
- Practice strategic leadership
- Prepare for interview questions  
- Build confidence in your approach
- Demonstrate your leadership capability

**You're not managing 9 people - you're orchestrating 9 senior experts. That's executive leadership!** ðŸŽ¯
