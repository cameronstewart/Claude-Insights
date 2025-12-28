# IBIS Extractor

**Description:** # Comprehensive IBIS Analysis Prompt

## Core Instruction
Convert the provided document into a comprehensive JSON data structure that captures all IBIS (Issue-Based Information System) content, methodology, and contextual information.

## Analysis Framework

### 1. Document Identification
- **Source Information**: Author(s), publication date, organization, version, URL/citation
- **Document Type**: Academic paper, tutorial, blog post, presentation transcript, manual, etc.
- **Primary Purpose**: Research, instruction, case study, theoretical discussion, practical guide
- **Target Audience**: Researchers, practitioners, students, general public

### 2. IBIS Core Elements Analysis
Extract and structure:
- **Issues/Questions**: Central problems or queries being addressed
- **Positions/Options/Ideas**: Proposed responses, solutions, or alternatives
- **Arguments**: Supporting (Pro) and opposing (Con) evidence, reasoning, cases
- **Sub-Issues**: Nested questions that emerge from main issues
- **Relationships**: How elements connect according to IBIS grammar rules

### 3. Extended IBIS Framework
If present, capture:
- **Criteria**: Evaluation standards or decision-making factors
- **Positions**: Overarching stances or viewpoints
- **Assumptions**: Underlying beliefs or premises
- **Evidence**: Supporting data, case studies, examples
- **Outcomes**: Decisions made or conclusions reached

### 4. Methodological Context
- **IBIS Notation**: Visual symbols, colors, software tools mentioned
- **Grammar Rules**: Connection rules between node types
- **Best Practices**: Recommended approaches, conventions, warnings
- **Software Tools**: Compendium, other applications, technical requirements
- **Limitations**: Known constraints, challenges, or criticisms

### 5. Historical and Theoretical Context
- **Origins**: Rittel, Kunz, historical development
- **Evolution**: How IBIS has changed over time
- **Applications**: Domain areas, use cases, success stories
- **Research Community**: Key figures, institutions, developments
- **Related Methods**: Dialogue mapping, argument mapping, other techniques

### 6. Practical Implementation
- **Procedures**: Step-by-step instructions, workflows
- **Case Studies**: Real examples with details
- **Lessons Learned**: Insights from practice, common mistakes
- **Success Factors**: What makes IBIS implementation effective
- **Adoption Challenges**: Barriers, resistance, solutions

### 7. Critical Analysis
- **Strengths**: Advantages over alternatives
- **Weaknesses**: Limitations, criticisms, gaps
- **Evidence Quality**: Strength of supporting research/examples
- **Bias Assessment**: Potential blind spots or one-sided presentations
- **Missing Elements**: What's not addressed that should be

## JSON Structure Requirements

### Top-Level Organization
```json
{
  "document_metadata": { },
  "ibis_content": { },
  "methodology": { },
  "practical_guidance": { },
  "case_studies": [ ],
  "historical_context": { },
  "critical_assessment": { },
  "knowledge_gaps": [ ],
  "implementation_guidance": { }
}
```

### Detailed Specifications

#### Arguments Structure
```json
"arguments": {
  "supporting": [
    {
      "id": "AS1",
      "argument": "Brief description",
      "supports": ["node_id1", "node_id2"],
      "evidence": "Specific evidence or case study",
      "strength": "strong|moderate|weak",
      "limitations": "Noted weaknesses or caveats",
      "source": "Where this argument originates"
    }
  ],
  "opposing": [ /* similar structure */ ]
}
```

#### Issues Hierarchy
```json
"issues": [
  {
    "id": "I1",
    "issue": "Main question or problem",
    "sub_issues": [
      {
        "id": "SI1a",
        "sub_issue": "More specific question",
        "relationship": "clarifies|challenges|extends"
      }
    ],
    "context": "Why this issue matters",
    "stakeholders": ["who cares about this"],
    "complexity_level": "simple|moderate|complex|wicked"
  }
]
```

#### Evidence and Sources
```json
"evidence": [
  {
    "id": "E1",
    "type": "case_study|research|anecdote|expert_opinion",
    "description": "What the evidence shows",
    "source": "Where it comes from",
    "credibility": "high|medium|low",
    "supports": ["argument_ids"],
    "limitations": "Noted constraints"
  }
]
```

## Output Requirements

### Comprehensiveness
- Capture ALL IBIS-related content, not just the main points
- Include metadata about document quality and reliability
- Note what's missing or underdeveloped
- Preserve nuance and complexity

### Structure Fidelity
- Maintain logical relationships between elements
- Use consistent ID schemes for cross-referencing
- Include both explicit and implicit connections
- Note uncertainty or ambiguity where present

### Critical Analysis
- Assess argument strength and evidence quality
- Identify potential biases or blind spots
- Note methodological limitations
- Suggest areas for further investigation

### Practical Utility
- Make the JSON queryable and filterable
- Include enough detail for practical application
- Provide clear attribution and source tracking
- Enable comparison across different documents

## Special Instructions

### For Academic Papers
- Extract theoretical contributions and empirical findings
- Note research methodology and sample characteristics
- Identify gaps in current knowledge
- Assess generalizability of findings

### For Tutorials/Manuals
- Capture step-by-step procedures completely
- Include all technical requirements and dependencies
- Note common problems and solutions
- Extract best practices and conventions

### For Case Studies
- Document context, stakeholders, and outcomes
- Note what worked and what didn't
- Extract generalizable lessons
- Identify success and failure factors

### For Presentations/Discussions
- Capture dialogue flow and argument development
- Note unresolved tensions and questions
- Include audience reactions or challenges
- Identify areas of consensus and disagreement

## Quality Checks
Before finalizing, ensure:
- [ ] All IBIS elements are properly categorized
- [ ] Relationships between elements are clear
- [ ] Evidence is properly attributed
- [ ] Critical analysis is balanced and fair
- [ ] JSON structure is valid and complete
- [ ] Cross-references work correctly
- [ ] Nothing important has been omitted

---

**Usage**: Paste this prompt along with any document containing IBIS content, methodology, or case studies. The analysis will produce a comprehensive JSON structure suitable for research, teaching, software development, or comparative analysis.

## Project Information

- **UUID:** `01990986-5925-737e-8f66-c26eadcd5311`
- **Creator:** Cameron Stewart
- **Created:** 2025-09-02T08:23:43.656746+00:00
- **Updated:** 2025-09-02T08:23:50.119638+00:00
- **Category:** ai-development
- **Documents:** 2

## Documents

This project contains 2 document(s). Each document is stored as a separate markdown file with metadata in the frontmatter.

## Original Export

This project was extracted from Claude Projects export on 2025-12-28.

