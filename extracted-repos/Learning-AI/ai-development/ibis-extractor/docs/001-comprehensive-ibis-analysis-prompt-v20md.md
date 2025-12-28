---
title: "Comprehensive IBIS Analysis Prompt v2.0.md"
project: "IBIS Extractor"
project_uuid: "01990986-5925-737e-8f66-c26eadcd5311"
doc_uuid: "228eea1b-f31c-4060-a032-6a3962f569f9"
created_at: "2025-09-02T09:40:13.754659+00:00"
doc_index: 1
---

# Comprehensive IBIS Analysis Prompt v2.0

## Core Instruction
Convert the provided document into a comprehensive JSON data structure that captures all IBIS (Issue-Based Information System) content, methodology, contextual information, and the rich experiential knowledge that traditional argument mapping often misses. This enhanced version includes granular source attribution, entity extraction, temporal context, and multi-dimensional knowledge capture.

## Analysis Framework

### 1. Document Identification & Metadata
- **Source Information**: Author(s), publication date, organization, version, URL/citation
- **Document Type**: Academic paper, tutorial, blog post, presentation transcript, manual, etc.
- **Primary Purpose**: Research, instruction, case study, theoretical discussion, practical guide
- **Target Audience**: Researchers, practitioners, students, general public
- **Discourse Type**: Formal argument, expert reflection, teaching dialogue, personal narrative
- **Format Details**: Page count, multimedia elements, interactive components
- **Access Context**: Open/paywall/restricted, original language, translation status

### 2. IBIS Core Elements Analysis
Extract and structure with precise attribution:
- **Issues/Questions**: Central problems or queries being addressed
- **Positions/Options/Ideas**: Proposed responses, solutions, or alternatives
- **Arguments**: Supporting (Pro) and opposing (Con) evidence, reasoning, cases
- **Sub-Issues**: Nested questions that emerge from main issues
- **Relationships**: How elements connect according to IBIS grammar rules
- **Source Attribution**: Exact quotes, page numbers, timestamps for each element

### 3. Extended IBIS Framework
If present, capture with full context:
- **Criteria**: Evaluation standards or decision-making factors
- **Positions**: Overarching stances or viewpoints
- **Assumptions**: Underlying beliefs or premises
- **Evidence**: Supporting data, case studies, examples
- **Outcomes**: Decisions made or conclusions reached
- **Decision Points**: Moments where choices were made or recommended

### 4. Process and Temporal Knowledge
- **Workflows**: Sequential procedures with decision points and variations
- **Evolution**: How ideas, practices, or understanding has changed over time
- **Learning Progressions**: Beginner to expert development paths
- **Contextual Adaptations**: How approaches vary by situation, audience, or constraint
- **Historical Development**: IBIS evolution timeline with key milestones

### 5. Experiential and Tacit Knowledge
- **Phenomenology**: What the experience feels like for practitioners
- **Embodied Knowledge**: Physical, sensory, or somatic aspects
- **Intuitive Recognition**: Pattern recognition that can't be fully articulated
- **Aesthetic Judgments**: Qualitative assessments of form, style, or appropriateness
- **Expert Intuition**: Insights that come from deep practice experience

### 6. Pedagogical Structure
- **Teaching Methods**: How knowledge is transmitted (metaphors, examples, exercises)
- **Common Misconceptions**: Frequent errors and how to address them
- **Scaffolding**: How complex ideas are built up from simpler ones
- **Assessment**: How competence is recognized or evaluated
- **Learning Resources**: References, tools, exercises mentioned

### 7. People, Organizations, and Tools
- **Key Figures**: IBIS theorists, practitioners, researchers with roles and contributions
- **Organizations**: Institutions, companies, research groups involved in IBIS
- **Software Tools**: Compendium, other applications with features and limitations
- **Related Methods**: Alternative or complementary approaches mentioned
- **Community Networks**: How people and organizations connect

### 8. Source Attribution and Evidence
- **Direct Quotes**: Verbatim text with precise location and context
- **Key Passages**: Important sections with analysis of significance
- **Citations**: All references with relevance and accessibility notes
- **Evidence Quality**: Assessment of supporting material strength
- **Missing Sources**: What should be cited but isn't

### 9. Tensions and Paradoxes
- **Productive Contradictions**: Seemingly opposing ideas that both have value
- **Unresolved Questions**: Areas where expert acknowledges uncertainty
- **Trade-offs**: Situations where benefits come at costs
- **Contextual Dependencies**: Where the "right" answer depends on circumstances
- **Methodological Tensions**: Conflicts between different approaches

### 10. Values and Philosophical Foundations
- **Aesthetic Commitments**: Core preferences that shape all decisions
- **Ethical Considerations**: Moral dimensions of choices and practices
- **Worldview Assumptions**: Fundamental beliefs about reality, knowledge, or human nature
- **Cultural Context**: How practices relate to broader cultural movements or traditions
- **Design Philosophy**: Underlying principles guiding IBIS approach

### 11. Practical Implementation
- **Step-by-Step Procedures**: Detailed workflows with decision points
- **Technical Requirements**: Software, hardware, skill prerequisites
- **Success Factors**: What makes IBIS implementation effective
- **Common Pitfalls**: Frequent mistakes and how to avoid them
- **Adaptation Guidelines**: How to modify for different contexts

### 12. Critical Analysis and Assessment
- **Strengths**: Advantages over alternatives with evidence
- **Weaknesses**: Limitations, criticisms, gaps with supporting analysis
- **Bias Assessment**: Potential blind spots or one-sided presentations
- **Evidence Quality**: Strength of supporting research/examples
- **Currency**: How current the information remains

### 13. Temporal and Evolution Context
- **Historical Timeline**: When key developments occurred
- **Version Changes**: How IBIS understanding/tools have evolved
- **Future Directions**: Anticipated developments or needed research
- **Generational Differences**: How different cohorts approach IBIS
- **Technology Impact**: How digital tools have changed practice

### 14. Multimedia and Interactive Elements
- **Diagrams**: IBIS maps, flowcharts, concept maps with descriptions
- **Examples**: Worked examples with full context
- **Exercises**: Interactive elements with instructions and objectives
- **Case Studies**: Real-world applications with outcomes
- **Visual Elements**: Charts, images, screenshots with analysis

## Enhanced JSON Structure

```json
{
  "document_metadata": {
    "source_info": {
      "authors": [],
      "publication_date": "",
      "organization": "",
      "version": "",
      "url": "",
      "doi": "",
      "citation": ""
    },
    "document_characteristics": {
      "type": "",
      "format": "",
      "length": "",
      "language": "",
      "target_audience": "",
      "primary_purpose": "",
      "access_level": ""
    },
    "temporal_context": {
      "creation_date": "",
      "last_modified": "",
      "historical_context": "",
      "field_state_at_time": "",
      "currency_assessment": ""
    }
  },
  
  "source_attribution": {
    "key_quotes": [
      {
        "id": "",
        "text": "",
        "location": {
          "page": "",
          "section": "",
          "paragraph": "",
          "timestamp": ""
        },
        "speaker": "",
        "context": "",
        "significance": "",
        "related_elements": []
      }
    ],
    "key_passages": [
      {
        "id": "",
        "location": "",
        "summary": "",
        "verbatim_excerpt": "",
        "analysis": "",
        "themes": []
      }
    ]
  },

  "people_entities": {
    "key_figures": [
      {
        "name": "",
        "role": "",
        "contributions": [],
        "quotes_about": [],
        "quotes_from": [],
        "context": "",
        "time_period": "",
        "affiliations": []
      }
    ],
    "organizations": [
      {
        "name": "",
        "type": "",
        "role": "",
        "projects": [],
        "time_period": "",
        "relationship_to_ibis": ""
      }
    ],
    "software_tools": [
      {
        "name": "",
        "type": "",
        "description": "",
        "features": [],
        "limitations": [],
        "usage_context": "",
        "alternatives": [],
        "current_status": ""
      }
    ]
  },

  "references": {
    "citations": [
      {
        "id": "",
        "full_citation": "",
        "type": "",
        "relevance": "",
        "key_contribution": "",
        "accessibility": "",
        "mentioned_locations": [],
        "credibility": ""
      }
    ],
    "recommended_reading": [
      {
        "source": "",
        "reason": "",
        "difficulty_level": "",
        "priority": "",
        "availability": ""
      }
    ],
    "missing_citations": []
  },

  "ibis_content": {
    "issues": [
      {
        "id": "",
        "issue": "",
        "description": "",
        "context": "",
        "stakeholders": [],
        "complexity_level": "",
        "source_location": "",
        "sub_issues": [
          {
            "id": "",
            "sub_issue": "",
            "relationship": "",
            "source_location": ""
          }
        ]
      }
    ],
    "positions": [
      {
        "id": "",
        "position": "",
        "description": "",
        "responds_to": [],
        "supported_by": [],
        "opposed_by": [],
        "source_location": "",
        "strength": ""
      }
    ],
    "arguments": {
      "supporting": [
        {
          "id": "",
          "argument": "",
          "supports": [],
          "evidence": "",
          "evidence_type": "",
          "strength": "",
          "limitations": "",
          "source": "",
          "credibility": ""
        }
      ],
      "opposing": []
    },
    "relationships": [
      {
        "from": "",
        "to": "",
        "type": "",
        "description": "",
        "strength": ""
      }
    ]
  },

  "process_knowledge": {
    "workflows": [
      {
        "id": "",
        "name": "",
        "description": "",
        "context": "",
        "steps": [
          {
            "step_number": "",
            "action": "",
            "decision_points": [],
            "common_issues": [],
            "success_indicators": [],
            "alternatives": []
          }
        ],
        "prerequisites": [],
        "outcomes": [],
        "variations": [],
        "source_location": ""
      }
    ],
    "temporal_evolution": [
      {
        "period": "",
        "characteristics": "",
        "key_changes": [],
        "triggers_for_change": [],
        "continuities": [],
        "evidence": ""
      }
    ],
    "learning_progressions": [
      {
        "stage": "",
        "characteristics": "",
        "common_challenges": [],
        "development_methods": [],
        "assessment_criteria": []
      }
    ]
  },

  "experiential_knowledge": {
    "phenomenology": [
      {
        "experience_type": "",
        "description": "",
        "recognition_cues": [],
        "cultivation_methods": [],
        "expert_quotes": [],
        "development_stages": []
      }
    ],
    "embodied_aspects": [
      {
        "physical_dimension": "",
        "description": "",
        "techniques": [],
        "common_difficulties": [],
        "development_exercises": []
      }
    ],
    "tacit_understanding": [
      {
        "domain": "",
        "description": "",
        "manifestations": [],
        "development": [],
        "expert_examples": []
      }
    ],
    "intuitive_recognition": [
      {
        "pattern_type": "",
        "description": "",
        "development": "",
        "indicators": [],
        "expert_insights": []
      }
    ]
  },

  "pedagogical_structure": {
    "teaching_methods": [
      {
        "method": "",
        "description": "",
        "effectiveness": "",
        "contexts": [],
        "examples": [],
        "source_location": ""
      }
    ],
    "common_misconceptions": [
      {
        "misconception": "",
        "correct_understanding": "",
        "why_it_occurs": "",
        "correction_strategies": [],
        "evidence": ""
      }
    ],
    "scaffolding": [
      {
        "concept": "",
        "prerequisites": [],
        "building_blocks": [],
        "progression": [],
        "assessment_points": []
      }
    ],
    "exercises": [
      {
        "name": "",
        "type": "",
        "instructions": "",
        "learning_objectives": [],
        "materials_needed": [],
        "variations": [],
        "source_location": ""
      }
    ]
  },

  "tensions_paradoxes": {
    "productive_contradictions": [
      {
        "tension": "",
        "position_a": "",
        "position_b": "",
        "resolution_approach": "",
        "contextual_factors": [],
        "expert_perspective": "",
        "source_location": ""
      }
    ],
    "unresolved_questions": [
      {
        "question": "",
        "why_unresolved": "",
        "implications": "",
        "expert_stance": "",
        "research_needed": [],
        "different_perspectives": []
      }
    ],
    "trade_offs": [
      {
        "decision_point": "",
        "benefits": [],
        "costs": [],
        "contextual_factors": [],
        "expert_guidance": ""
      }
    ]
  },

  "values_philosophy": {
    "aesthetic_commitments": [
      {
        "value": "",
        "description": "",
        "manifestations": [],
        "trade_offs": [],
        "expert_examples": [],
        "source_evidence": ""
      }
    ],
    "ethical_considerations": [
      {
        "ethical_dimension": "",
        "description": "",
        "implications": [],
        "guidelines": [],
        "dilemmas": []
      }
    ],
    "worldview_assumptions": [
      {
        "assumption": "",
        "implications": [],
        "alternatives": [],
        "consequences": [],
        "expert_stance": ""
      }
    ],
    "design_philosophy": [
      {
        "principle": "",
        "rationale": "",
        "applications": [],
        "limitations": [],
        "evolution": ""
      }
    ]
  },

  "methodology": {
    "ibis_notation": {
      "visual_symbols": [],
      "color_schemes": [],
      "layout_principles": [],
      "software_implementations": []
    },
    "grammar_rules": [
      {
        "rule": "",
        "description": "",
        "examples": [],
        "exceptions": [],
        "rationale": ""
      }
    ],
    "best_practices": [
      {
        "practice": "",
        "rationale": "",
        "contexts": [],
        "evidence": "",
        "common_violations": []
      }
    ],
    "limitations": [
      {
        "limitation": "",
        "contexts": [],
        "workarounds": [],
        "research_needed": ""
      }
    ]
  },

  "multimedia_elements": {
    "diagrams": [
      {
        "id": "",
        "type": "",
        "description": "",
        "location": "",
        "key_insights": "",
        "text_alternative": "",
        "relationships_shown": []
      }
    ],
    "examples": [
      {
        "id": "",
        "type": "",
        "description": "",
        "context": "",
        "learning_value": "",
        "source_location": ""
      }
    ],
    "interactive_elements": [
      {
        "type": "",
        "description": "",
        "instructions": "",
        "learning_objectives": [],
        "materials_needed": [],
        "expected_outcomes": []
      }
    ]
  },

  "practical_guidance": {
    "implementation_steps": [
      {
        "phase": "",
        "activities": [],
        "deliverables": [],
        "success_criteria": [],
        "common_challenges": [],
        "mitigation_strategies": []
      }
    ],
    "technical_requirements": {
      "software": [],
      "hardware": [],
      "skills": [],
      "time_investment": "",
      "cost_considerations": []
    },
    "success_factors": [
      {
        "factor": "",
        "description": "",
        "evidence": "",
        "implementation_tips": []
      }
    ],
    "common_pitfalls": [
      {
        "pitfall": "",
        "why_it_happens": "",
        "consequences": [],
        "prevention": [],
        "recovery": []
      }
    ]
  },

  "case_studies": [
    {
      "id": "",
      "title": "",
      "context": "",
      "participants": [],
      "methodology": "",
      "timeline": "",
      "outcomes": [],
      "lessons_learned": [],
      "generalizable_insights": [],
      "limitations": [],
      "follow_up": "",
      "source_location": ""
    }
  ],

  "comparative_context": {
    "related_methods": [
      {
        "method": "",
        "relationship": "",
        "similarities": [],
        "differences": [],
        "integration_potential": "",
        "when_to_use_each": []
      }
    ],
    "positioning": {
      "unique_contributions": [],
      "overlapping_domains": [],
      "competitive_advantages": [],
      "complementary_approaches": []
    },
    "evolution_context": {
      "predecessors": [],
      "contemporaries": [],
      "influenced_by": [],
      "influences": []
    }
  },

  "audience_analysis": {
    "primary_audience": {
      "description": "",
      "assumed_knowledge": [],
      "terminology_level": "",
      "experience_level": ""
    },
    "secondary_audiences": [],
    "usage_scenarios": [
      {
        "scenario": "",
        "audience": "",
        "value_proposition": "",
        "adaptation_needed": []
      }
    ],
    "accessibility_barriers": [],
    "cultural_considerations": []
  },

  "critical_assessment": {
    "strengths": [
      {
        "strength": "",
        "evidence": "",
        "contexts": [],
        "limitations_of_strength": []
      }
    ],
    "weaknesses": [
      {
        "weakness": "",
        "evidence": "",
        "impact": "",
        "mitigation": []
      }
    ],
    "credibility_factors": {
      "author_expertise": "",
      "evidence_quality": "",
      "peer_review": "",
      "replication_potential": "",
      "bias_assessment": []
    },
    "internal_consistency": {
      "coherence_score": "",
      "contradictions": [],
      "gaps": [],
      "logical_flow": ""
    },
    "external_validity": {
      "generalizability": "",
      "context_dependencies": [],
      "supporting_evidence": [],
      "conflicting_evidence": []
    }
  },

  "knowledge_gaps": [
    {
      "gap": "",
      "importance": "",
      "research_needed": "",
      "potential_impact": "",
      "investigation_methods": []
    }
  ],

  "actionable_insights": {
    "immediate_applications": [
      {
        "insight": "",
        "application": "",
        "context": "",
        "prerequisites": [],
        "expected_outcomes": [],
        "risk_factors": []
      }
    ],
    "research_opportunities": [
      {
        "question": "",
        "methodology": "",
        "importance": "",
        "feasibility": "",
        "resources_needed": []
      }
    ],
    "tool_development": [
      {
        "opportunity": "",
        "requirements": [],
        "target_users": [],
        "technical_challenges": [],
        "market_potential": ""
      }
    ]
  },

  "cross_document_metadata": {
    "tagging_scheme": {
      "topics": [],
      "methods": [],
      "domains": [],
      "complexity_level": "",
      "document_type": "",
      "time_period": ""
    },
    "linkage_potential": {
      "builds_on": [],
      "conflicts_with": [],
      "complements": [],
      "updates": [],
      "references": []
    },
    "search_keywords": [],
    "classification": {
      "primary_category": "",
      "secondary_categories": [],
      "interdisciplinary_connections": []
    }
  },

  "temporal_evolution": {
    "historical_timeline": [
      {
        "period": "",
        "key_developments": [],
        "influential_figures": [],
        "paradigm_shifts": [],
        "document_perspective": ""
      }
    ],
    "version_tracking": {
      "ibis_versions": [],
      "tool_versions": [],
      "methodological_changes": [],
      "theoretical_developments": []
    },
    "future_directions": [
      {
        "trend": "",
        "evidence": "",
        "implications": [],
        "uncertainties": []
      }
    ]
  },

  "quality_metadata": {
    "completeness_score": "",
    "confidence_level": "",
    "verification_status": "",
    "last_updated": "",
    "reviewer_notes": [],
    "extraction_challenges": [],
    "recommended_follow_ups": []
  }
}
```

## Enhanced Analysis Guidelines

### Source Attribution Standards
- **Quote Precision**: Include exact text, location (page/timestamp), and sufficient context
- **Attribution Chain**: Track how ideas flow through the document
- **Verification**: Note when claims can be independently verified
- **Ambiguity Handling**: Mark uncertain attributions clearly

### People and Entity Extraction
- **Role Clarity**: Distinguish between theorists, practitioners, critics, and commentators
- **Temporal Context**: Note when people were active and how field has changed
- **Influence Mapping**: Track who influenced whom and how
- **Network Analysis**: Identify collaboration patterns and institutional connections

### Evidence Quality Assessment
- **Source Types**: Primary research, expert opinion, anecdotal evidence, speculation
- **Credibility Indicators**: Peer review, replication, expert consensus, methodological rigor
- **Bias Detection**: Financial interests, ideological positions, limited perspectives
- **Currency**: How recent and relevant the evidence remains

### Cross-Reference Validation
- **Internal Consistency**: Check for contradictions within document
- **External Verification**: Note claims that could be checked against other sources
- **Missing Context**: Identify what background knowledge is assumed
- **Completeness**: Assess what important topics are not covered

## Special Instructions by Document Type

### Academic Papers
- Extract research questions, methodology, findings, and limitations with precise attribution
- Note sample characteristics, statistical methods, and generalizability claims
- Identify theoretical contributions and how they build on prior work
- Assess peer review indicators and journal reputation
- Extract discussion of future research needs

### Expert Interviews/Reflections
- Capture evolution of expertise over time with specific examples
- Extract both explicit teachings and implicit wisdom
- Note areas of uncertainty or ongoing learning
- Identify signature practices or unique approaches
- Document meta-cognitive awareness and reflection processes

### Tutorials/Manuals
- Capture complete step-by-step procedures with decision points
- Include all technical requirements, dependencies, and version information
- Note common problems, troubleshooting steps, and solutions
- Extract best practices, conventions, and warnings
- Document learning progressions and skill development stages

### Case Studies
- Document complete context including timeline, stakeholders, and constraints
- Note decision rationales and alternative approaches considered
- Extract what worked, what didn't, and why
- Identify generalizable lessons and context-specific factors
- Capture stakeholder perspectives and outcome measurements

### Presentations/Discussions
- Capture dialogue flow, argument development, and interaction patterns
- Note audience questions, challenges, and responses
- Include unresolved tensions and areas of disagreement
- Identify emergent insights from the discussion process
- Document presenter expertise and audience characteristics

## Quality Assurance Framework

### Completeness Checks
- [ ] All IBIS elements identified and properly categorized
- [ ] Source attribution complete for major claims and insights
- [ ] People, organizations, and tools properly extracted
- [ ] Temporal context and evolution captured
- [ ] Process knowledge and experiential insights included
- [ ] Cross-references and relationships mapped

### Accuracy Verification
- [ ] Quotes and attributions verified against source
- [ ] Technical details and procedures complete
- [ ] Relationships between elements correctly identified
- [ ] Temporal information accurate
- [ ] Author credentials and expertise properly noted

### Analytical Quality
- [ ] Critical assessment balanced and evidence-based
- [ ] Multiple perspectives represented where present
- [ ] Limitations and uncertainties acknowledged
- [ ] Bias potential identified and assessed
- [ ] Knowledge gaps and research opportunities noted

### Structural Integrity
- [ ] JSON structure valid and complete
- [ ] Cross-references work correctly across all sections
- [ ] ID schemes consistent throughout
- [ ] Hierarchical relationships properly maintained
- [ ] Metadata complete and accurate

### Utility Assessment
- [ ] Searchable and filterable across multiple dimensions
- [ ] Sufficient detail for practical application
- [ ] Clear attribution enables verification
- [ ] Comparative analysis across documents supported
- [ ] Multiple use cases (research, teaching, practice) served

## Usage and Application

### For Researchers
- Complete bibliographic information enables citation and follow-up
- Detailed evidence assessment supports critical analysis
- Historical context aids understanding of field development
- Gap identification guides future research directions

### For Practitioners
- Step-by-step procedures enable implementation
- Case studies provide real-world examples
- Success factors and pitfalls guide practical application
- Tool information supports technology decisions

### For Educators
- Pedagogical structure supports curriculum development
- Common misconceptions guide teaching strategies
- Learning progressions inform skill development
- Exercises and examples enhance instruction

### For Tool Developers
- Technical requirements inform development decisions
- User needs and contexts guide design choices
- Integration opportunities suggest partnerships
- Limitations highlight innovation opportunities

---

**Implementation Note**: This comprehensive framework captures the full richness of expert knowledge while maintaining the logical structure that makes IBIS analysis valuable. The enhanced attribution and entity extraction make it particularly useful for building cumulative knowledge bases and conducting meta-analyses across multiple documents.