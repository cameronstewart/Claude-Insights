---
title: "Analysis prompt v3"
project: "IBIS Extractor"
project_uuid: "01990986-5925-737e-8f66-c26eadcd5311"
doc_uuid: "bd925425-cf61-4c44-85e7-7731ad75b2c0"
created_at: "2025-09-02T17:32:54.101950+00:00"
doc_index: 2
---

# Universal IBIS-Based Analysis Prompt v3.0

## Core Instruction
Convert ANY document into a comprehensive JSON data structure using IBIS (Issue-Based Information System) methodology as the analytical foundation. This framework extracts argumentative structure, decision-making patterns, knowledge relationships, and contextual information from any content - whether it explicitly uses IBIS or not. The analysis captures both explicit reasoning and implicit knowledge structures present in human discourse.

## Universal Application Philosophy

This prompt applies IBIS thinking to **any content type**:
- Academic papers (extract research arguments)
- Business documents (capture strategic reasoning) 
- Technical manuals (map procedural decisions)
- Interviews/conversations (identify implicit debates)
- Policy documents (analyze decision frameworks)
- Creative works (uncover thematic tensions)
- Personal reflections (map internal reasoning)
- Historical texts (identify period debates)

**Key Principle**: Every human communication contains implicit issues, positions, and arguments - even when not formally structured. This analysis makes that reasoning visible and queryable.

## Enhanced Analysis Framework

### 1. Document Identification & Metadata
- **Source Information**: Author(s), publication date, organization, version, URL/citation, DOI
- **Document Type**: Academic paper, business report, interview, manual, policy, creative work, etc.
- **Primary Purpose**: Inform, persuade, instruct, explore, document, decide, create
- **Target Audience**: Researchers, practitioners, students, executives, general public
- **Discourse Type**: Formal argument, expert reflection, teaching dialogue, narrative, policy analysis
- **Format Details**: Page count, multimedia elements, interactive components, accessibility features
- **Access Context**: Open/paywall/restricted, original language, translation status
- **Cultural Context**: Geographic origin, institutional context, historical period

### 2. Complete IBIS Node Structure

#### Core Argumentative Elements
- **Issues/Questions**: Problems, challenges, uncertainties being addressed
- **Positions/Options**: Proposed responses, solutions, stances, approaches  
- **Arguments**: Supporting (Pro) and opposing (Con) reasoning, evidence, cases
- **Sub-Issues**: Nested questions, clarifying problems, component issues

#### Decision & Evaluation Elements
- **Criteria**: Evaluation standards, success metrics, decision factors
- **Alternatives**: Distinct solution options with trade-off analysis
- **Assumptions**: Underlying beliefs, premises, taken-for-granted ideas
- **Evidence**: Supporting data, research, examples, testimonials, case studies
- **Constraints**: Technical, resource, political, temporal, ethical limitations
- **Trade-offs**: Benefit/cost tensions, competing values, resource allocation

#### Stakeholder & Context Elements  
- **Stakeholders**: Individuals, groups, organizations with interests in outcomes
- **Goals/Objectives**: Explicit and implicit desired outcomes, success definitions
- **Scenarios**: Contextual situations, use cases, environmental conditions
- **Decision Points**: Moments of choice, branching paths, commitment points
- **Outcomes**: Results achieved, consequences, unintended effects

#### Process & Knowledge Elements
- **Workflows**: Sequential procedures, decision trees, process flows
- **References/Citations**: External sources, authorities, supporting materials
- **Relationships**: Logical, temporal, causal, hierarchical connections between elements

### 3. Universal Relationship Types

#### Logical Relationships
- **Supports/Opposes**: Argumentative relationships
- **Questions/Challenges**: Critical examination relationships
- **Clarifies/Confuses**: Understanding relationships
- **Generalizes/Specializes**: Abstraction level relationships

#### Temporal Relationships  
- **Precedes/Follows**: Sequential dependencies
- **Enables/Blocks**: Causal facilitation/impedance
- **Triggers/Results**: Cause-effect chains
- **Evolves_from/Evolves_to**: Development progressions

#### Structural Relationships
- **Contains/Part_of**: Hierarchical composition
- **Similar_to/Different_from**: Comparison relationships
- **Conflicts_with/Aligns_with**: Tension/harmony relationships
- **Depends_on/Enables**: Dependency relationships

### 4. Cross-Document Integration Framework

#### Entity Normalization
- **People**: `LastName_FirstName_YYYY` (birth/prominence year)
- **Organizations**: `OrgName_YYYY_Location` (founding year, headquarters)
- **Concepts**: Standardized terminology from field glossaries
- **Software Tools**: `ToolName_vX.X_YYYY` (version, release year)
- **Methods**: `MethodName_Creator_YYYY` (originator, development year)

#### Global Reference System
```json
"cross_document_metadata": {
  "document_id": "unique_global_identifier",
  "entity_references": {
    "people": ["Person_ID1", "Person_ID2"],
    "organizations": ["Org_ID1", "Org_ID2"], 
    "concepts": ["Concept_ID1", "Concept_ID2"],
    "methods": ["Method_ID1", "Method_ID2"]
  },
  "document_relationships": [
    {
      "related_doc_id": "target_document_id",
      "relationship_type": "builds_on|contradicts|complements|updates|critiques|extends",
      "specific_connections": ["element_IDs_that_connect"],
      "strength": "strong|moderate|weak",
      "evidence": "basis for relationship claim"
    }
  ],
  "linkage_potential": {
    "builds_on": ["prior_document_ids"],
    "conflicts_with": ["contradictory_document_ids"], 
    "complements": ["synergistic_document_ids"],
    "updates": ["superseded_document_ids"],
    "references": ["cited_document_ids"]
  }
}
```

### 5. Enhanced Knowledge Extraction

#### Explicit Knowledge (Directly Stated)
- **Declarative**: Facts, definitions, classifications
- **Procedural**: Steps, methods, algorithms  
- **Conditional**: If-then rules, decision criteria
- **Causal**: Cause-effect relationships, mechanisms

#### Implicit Knowledge (Inferred/Contextual)
- **Assumptions**: Unstated premises, background beliefs
- **Values**: Priorities revealed through choices, language
- **Mental Models**: Underlying conceptual frameworks
- **Cultural Context**: Shared understandings, norms

#### Tacit Knowledge (Experiential/Embodied)
- **Phenomenology**: Subjective experience descriptions
- **Embodied Knowing**: Physical, sensory, somatic aspects
- **Intuitive Recognition**: Pattern recognition, "feel" for situations
- **Aesthetic Judgment**: Qualitative assessments, style preferences
- **Expert Intuition**: Insights from deep practice experience

#### Process Knowledge (Temporal/Dynamic)
- **Workflows**: Complete procedures with decision points
- **Evolution**: How ideas/practices change over time
- **Learning Progressions**: Skill development pathways
- **Adaptation Patterns**: Context-sensitive modifications
- **Emergence**: How new properties/insights arise

### 6. Multi-Dimensional Context Capture

#### Temporal Context
- **Historical Timeline**: Key developments, paradigm shifts
- **Version Evolution**: How understanding has changed
- **Future Projections**: Anticipated developments, trends
- **Currency Assessment**: How current information remains
- **Generational Differences**: Varying approaches across cohorts

#### Social Context  
- **Community Networks**: Relationships between actors
- **Institutional Context**: Organizational influences, constraints
- **Power Dynamics**: Authority, influence, resource distribution
- **Cultural Factors**: Shared values, practices, assumptions
- **Collaboration Patterns**: How people work together

#### Epistemological Context
- **Knowledge Sources**: Research, experience, tradition, intuition
- **Validation Methods**: How claims are verified, tested
- **Uncertainty Handling**: Approaches to ambiguity, risk
- **Bias Recognition**: Acknowledged limitations, blind spots
- **Paradigmatic Assumptions**: Fundamental worldview commitments

### 7. Enhanced Source Attribution

#### Precision Requirements
- **Direct Quotes**: Exact text with location (page/timestamp/section)
- **Paraphrases**: Clear attribution with confidence level
- **Inferences**: Explicitly marked interpretative claims
- **Context**: Sufficient surrounding information for verification
- **Speaker Attribution**: Who said what, in what role/context

#### Evidence Quality Assessment
- **Source Types**: Primary research, expert opinion, anecdotal, speculative
- **Credibility Indicators**: Peer review, replication, consensus, methodology
- **Bias Detection**: Conflicts of interest, ideological positions, limitations
- **Currency**: How recent and relevant evidence remains
- **Accessibility**: Can claims be independently verified

### 8. Comprehensive JSON Structure

```json
{
  "document_metadata": {
    "source_info": {
      "authors": [
        {
          "name": "",
          "role": "",
          "affiliation": "",
          "credentials": "",
          "standardized_id": "Author_LastFirst_YYYY"
        }
      ],
      "publication_date": "ISO_8601_date",
      "organization": "",
      "version": "",
      "url": "", 
      "doi": "",
      "isbn": "",
      "citation_format": "",
      "access_date": "ISO_8601_date"
    },
    "document_characteristics": {
      "type": "academic_paper|business_document|interview|manual|policy|creative_work|personal_reflection",
      "format": "text|audio|video|interactive|multimedia",
      "length": "pages/duration",
      "language": "primary_language",
      "translation_status": "original|translated_from",
      "target_audience": ["audience_types"],
      "primary_purpose": "inform|persuade|instruct|explore|document|decide|create",
      "discourse_style": "formal|conversational|technical|narrative|poetic",
      "access_level": "open|restricted|paywall|confidential",
      "interactive_elements": ["element_types"]
    },
    "temporal_context": {
      "creation_date": "ISO_8601_date",
      "last_modified": "ISO_8601_date", 
      "historical_period": "",
      "field_state_at_time": "",
      "technological_context": "",
      "social_context": "",
      "currency_assessment": "current|recent|dated|historical",
      "anticipated_shelf_life": ""
    },
    "cultural_context": {
      "geographic_origin": "",
      "institutional_context": "",
      "disciplinary_tradition": "",
      "methodological_school": "",
      "cultural_assumptions": [],
      "language_conventions": [],
      "implicit_audiences": []
    }
  },

  "cross_document_metadata": {
    "document_id": "unique_global_identifier",
    "entity_references": {
      "people": ["standardized_person_ids"],
      "organizations": ["standardized_org_ids"],
      "concepts": ["standardized_concept_ids"],
      "methods": ["standardized_method_ids"],
      "tools": ["standardized_tool_ids"]
    },
    "document_relationships": [
      {
        "related_doc_id": "",
        "relationship_type": "builds_on|contradicts|complements|updates|critiques|extends|applies|generalizes",
        "specific_connections": ["connecting_element_ids"],
        "strength": "strong|moderate|weak",
        "confidence": "high|medium|low",
        "evidence": "",
        "temporal_relationship": "precedes|follows|contemporary|updates"
      }
    ],
    "tagging_scheme": {
      "primary_topics": [],
      "methodologies": [],
      "domains": [],
      "complexity_level": "introductory|intermediate|advanced|expert",
      "document_function": "foundational|developmental|critical|synthetic|applied",
      "interdisciplinary_connections": []
    },
    "search_optimization": {
      "keywords": [],
      "concepts": [],
      "research_questions": [],
      "practical_applications": [],
      "theoretical_contributions": []
    }
  },

  "source_attribution": {
    "direct_quotes": [
      {
        "id": "Q001",
        "text": "exact_verbatim_text", 
        "speaker": "attributed_source",
        "location": {
          "page": "page_number",
          "section": "section_title",
          "paragraph": "paragraph_number",
          "timestamp": "MM:SS_or_HH:MM:SS",
          "line_number": "line_reference"
        },
        "context": "surrounding_situation_description",
        "purpose": "why_quoted",
        "significance": "analytical_importance",
        "confidence": "high|medium|low",
        "related_elements": ["element_ids_this_supports"]
      }
    ],
    "key_passages": [
      {
        "id": "P001",
        "location": "detailed_location_reference",
        "summary": "passage_main_point",
        "verbatim_excerpt": "key_sentence_or_phrase",
        "paraphrase": "author_interpretation",
        "significance": "why_important",
        "themes": ["thematic_categories"],
        "knowledge_type": "explicit|implicit|tacit",
        "related_elements": ["connected_ibis_elements"]
      }
    ],
    "inferred_claims": [
      {
        "id": "I001",
        "claim": "analyst_interpretation",
        "evidence_basis": ["supporting_quotes_or_passages"],
        "confidence": "high|medium|low",
        "alternative_interpretations": ["other_possible_readings"],
        "methodology": "how_inference_was_made"
      }
    ]
  },

  "people_entities": {
    "key_figures": [
      {
        "standardized_id": "LastName_FirstName_YYYY",
        "name": "full_name_as_appears",
        "role": "relationship_to_content",
        "contributions": ["specific_contributions_mentioned"],
        "quotes_about": ["what_others_say_about_them"],
        "quotes_from": ["their_own_statements"],
        "context": "why_they_matter_here",
        "time_period": "when_active",
        "affiliations": ["organizations_associated"],
        "expertise_areas": ["domains_of_knowledge"],
        "influence_assessment": "major|moderate|minor|historical",
        "credibility_indicators": ["credentials_expertise_recognition"]
      }
    ],
    "organizations": [
      {
        "standardized_id": "OrgName_YYYY_Location", 
        "name": "official_organization_name",
        "type": "university|company|government|nonprofit|research_institute",
        "role": "relationship_to_content",
        "projects": ["relevant_projects_mentioned"],
        "time_period": "active_period",
        "location": "geographic_location",
        "relationship_to_topic": "how_they_relate",
        "influence_level": "major|moderate|minor",
        "current_status": "active|inactive|merged|transformed"
      }
    ],
    "software_tools": [
      {
        "standardized_id": "ToolName_vX.X_YYYY",
        "name": "tool_name",
        "type": "software_category",
        "description": "what_it_does",
        "features": ["key_capabilities"],
        "limitations": ["known_constraints"],
        "usage_context": ["when_where_used"],
        "alternatives": ["competing_tools"],
        "current_status": "active|deprecated|superseded|evolved",
        "technical_requirements": ["system_requirements"],
        "learning_curve": "low|moderate|steep"
      }
    ]
  },

  "references": {
    "citations": [
      {
        "id": "C001",
        "full_citation": "complete_bibliographic_reference",
        "type": "book|journal_article|conference_paper|web_resource|personal_communication",
        "authors": ["author_names"],
        "title": "",
        "publication_venue": "",
        "date": "publication_date",
        "relevance": "why_cited_here",
        "key_contribution": "what_it_adds",
        "accessibility": "open|restricted|paywall|out_of_print",
        "credibility": "peer_reviewed|editorial_review|self_published|unknown",
        "mentioned_locations": ["where_referenced_in_document"],
        "usage_type": "supporting_evidence|contrasting_view|methodological_reference|background_context"
      }
    ],
    "recommended_resources": [
      {
        "resource": "full_description",
        "type": "book|article|course|tool|website",
        "reason": "why_recommended", 
        "difficulty_level": "beginner|intermediate|advanced",
        "priority": "essential|important|supplementary|optional",
        "availability": "freely_available|purchase_required|restricted_access",
        "current_relevance": "current|dated|historical"
      }
    ],
    "missing_citations": [
      {
        "claim": "unsupported_claim_made",
        "should_cite": "what_type_of_source_needed",
        "importance": "critical|moderate|minor",
        "availability": "exists_but_not_cited|does_not_exist|unknown"
      }
    ]
  },

  "ibis_content": {
    "issues": [
      {
        "id": "I001",
        "issue": "core_question_or_problem",
        "description": "detailed_explanation",
        "context": "why_this_matters",
        "stakeholders": ["who_cares_about_this"],
        "scope": "narrow|moderate|broad",
        "complexity_level": "simple|moderate|complex|wicked",
        "urgency": "immediate|near_term|long_term|ongoing",
        "source_location": "where_identified_in_document",
        "related_issues": ["other_issue_ids"],
        "historical_context": "how_this_issue_developed",
        "sub_issues": [
          {
            "id": "SI001a",
            "sub_issue": "more_specific_question",
            "relationship": "clarifies|challenges|extends|components",
            "source_location": "where_found"
          }
        ]
      }
    ],
    "positions": [
      {
        "id": "POS001",
        "position": "stance_or_viewpoint",
        "description": "detailed_explanation",
        "responds_to": ["issue_ids_addressed"],
        "position_type": "solution|approach|stance|preference|recommendation",
        "specificity": "general_principle|specific_recommendation|detailed_procedure",
        "supported_by": ["argument_ids"],
        "opposed_by": ["counter_argument_ids"],
        "source_location": "where_stated",
        "confidence_level": "high|medium|low|tentative",
        "scope_of_application": "universal|contextual|limited",
        "implementation_requirements": ["what_needed_to_adopt"],
        "evolution": "how_position_has_changed_over_time"
      }
    ],
    "alternatives": [
      {
        "id": "ALT001",
        "alternative": "distinct_option_or_approach",
        "description": "detailed_explanation", 
        "addresses": ["issue_ids"],
        "differentiators": ["how_distinct_from_other_options"],
        "advantages": ["benefits_and_strengths"],
        "disadvantages": ["limitations_and_weaknesses"],
        "trade_offs": ["what_you_gain_vs_lose"],
        "feasibility": "high|medium|low",
        "resource_requirements": ["what_needed"],
        "implementation_complexity": "simple|moderate|complex",
        "risk_factors": ["potential_problems"],
        "success_conditions": ["what_needed_for_success"]
      }
    ],
    "arguments": {
      "supporting": [
        {
          "id": "AS001",
          "argument": "reasoning_or_justification",
          "supports": ["element_ids_supported"],
          "argument_type": "empirical_evidence|logical_reasoning|expert_authority|analogical|precedent|pragmatic",
          "evidence": "specific_supporting_material",
          "evidence_type": "research_study|case_study|expert_opinion|statistical_data|anecdotal|theoretical",
          "strength": "compelling|moderate|weak|speculative",
          "limitations": "acknowledged_weaknesses",
          "scope": "general|contextual|limited",
          "source": "where_argument_originates",
          "credibility": "high|medium|low",
          "replication_status": "replicated|single_study|untested",
          "counterarguments_acknowledged": ["opposing_views_addressed"]
        }
      ],
      "opposing": [
        {
          "id": "AO001",
          "argument": "counter_reasoning",
          "opposes": ["element_ids_opposed"],
          "argument_type": "empirical_evidence|logical_reasoning|expert_authority|analogical|precedent|pragmatic",
          "evidence": "specific_contradicting_material",
          "evidence_type": "research_study|case_study|expert_opinion|statistical_data|anecdotal|theoretical",
          "strength": "compelling|moderate|weak|speculative",
          "scope": "complete_refutation|partial_challenge|contextual_limitation",
          "source": "where_counter_argument_originates",
          "responses_to": ["how_supporters_respond"]
        }
      ]
    },
    "criteria": [
      {
        "id": "CR001",
        "criterion": "evaluation_standard",
        "description": "what_this_means",
        "applies_to": ["what_being_evaluated"],
        "measurement_approach": "quantitative|qualitative|subjective|objective",
        "importance_weight": "critical|important|moderate|minor",
        "stakeholder_perspectives": ["who_values_this_criterion"],
        "potential_conflicts": ["criteria_that_compete_with_this"],
        "measurement_challenges": ["difficulties_in_assessment"]
      }
    ],
    "assumptions": [
      {
        "id": "ASM001", 
        "assumption": "underlying_belief_or_premise",
        "type": "methodological|theoretical|practical|cultural|technological",
        "explicitness": "stated|implied|unconscious",
        "universality": "universal|contextual|personal",
        "evidence_status": "supported|unsupported|disputed|unknown",
        "consequences": ["what_follows_if_assumption_true"],
        "alternatives": ["different_assumptions_possible"],
        "challenge_potential": ["why_might_be_questioned"],
        "historical_stability": "longstanding|recent|emerging|declining"
      }
    ],
    "constraints": [
      {
        "id": "CON001",
        "constraint": "limitation_or_restriction", 
        "type": "technical|resource|political|temporal|ethical|legal|cultural",
        "affects": ["element_ids_constrained"],
        "severity": "absolute_barrier|significant_impediment|minor_limitation|preference",
        "workarounds": ["possible_ways_to_address"],
        "changeability": "fixed|difficult_to_change|modifiable|temporary",
        "stakeholder_control": ["who_has_power_to_modify"],
        "time_sensitivity": "immediate|near_term|long_term|permanent"
      }
    ],
    "stakeholders": [
      {
        "id": "SH001",
        "stakeholder": "individual_group_or_organization",
        "role": "decision_maker|implementer|affected_party|expert|advocate|critic",
        "interests": ["what_they_care_about"],
        "concerns": ["what_they_worry_about"],
        "influence_level": "high|medium|low|none",
        "resources": ["what_they_can_contribute"],
        "constraints": ["limitations_they_face"],
        "relationships": ["connections_to_other_stakeholders"],
        "change_readiness": "champion|supporter|neutral|skeptic|opponent"
      }
    ],
    "goals": [
      {
        "id": "G001",
        "goal": "desired_outcome_or_objective",
        "type": "end_state|performance_target|process_improvement|learning_objective",
        "specificity": "specific|general|aspirational",
        "measurability": "quantifiable|qualitative|subjective",
        "time_frame": "immediate|short_term|long_term|ongoing",
        "priority": "primary|secondary|supporting",
        "stakeholders": ["who_holds_this_goal"],
        "potential_conflicts": ["competing_goals"],
        "success_indicators": ["how_achievement_recognized"]
      }
    ],
    "evidence": [
      {
        "id": "EV001",
        "evidence": "supporting_material_or_data",
        "type": "quantitative_research|qualitative_research|case_study|expert_testimony|historical_precedent|theoretical_analysis",
        "description": "what_evidence_shows",
        "source": "where_evidence_comes_from",
        "credibility": "high|medium|low",
        "relevance": "directly_applicable|analogous|suggestive|tangential",
        "recency": "current|recent|dated|historical",
        "scope": "comprehensive|limited|preliminary|anecdotal",
        "supports": ["argument_or_position_ids"],
        "limitations": ["acknowledged_weaknesses"],
        "replication_status": "replicated|single_instance|untested",
        "peer_review_status": "peer_reviewed|editorial_review|unpublished|self_reported"
      }
    ],
    "trade_offs": [
      {
        "id": "TO001",
        "trade_off": "competing_values_or_outcomes",
        "description": "nature_of_tension",
        "benefits": ["positive_aspects"],
        "costs": ["negative_aspects"],
        "affected_stakeholders": ["who_gains_and_loses"],
        "decision_factors": ["what_influences_choice"],
        "contextual_dependencies": ["when_trade_off_applies"],
        "mitigation_strategies": ["ways_to_reduce_negative_impacts"],
        "optimization_potential": ["possibilities_for_improvement"]
      }
    ],
    "scenarios": [
      {
        "id": "SC001", 
        "scenario": "situational_context_or_use_case",
        "description": "detailed_situation",
        "conditions": ["contextual_factors"],
        "stakeholders": ["relevant_actors"],
        "applicable_approaches": ["what_works_in_this_context"],
        "constraints": ["limiting_factors"],
        "success_factors": ["what_enables_success"],
        "risks": ["potential_problems"],
        "variations": ["scenario_modifications"]
      }
    ],
    "decision_points": [
      {
        "id": "DP001",
        "decision_point": "moment_of_choice",
        "description": "what_must_be_decided",
        "options": ["available_choices"],
        "decision_criteria": ["factors_to_consider"],
        "information_needed": ["what_helps_decide"],
        "stakeholders": ["who_decides"],
        "timing_constraints": ["when_decision_needed"],
        "consequences": ["implications_of_choices"],
        "reversibility": "reversible|difficult_to_reverse|irreversible"
      }
    ],
    "outcomes": [
      {
        "id": "OUT001",
        "outcome": "result_or_consequence",
        "type": "intended|unintended|mixed",
        "description": "what_happened",
        "measurement": "how_assessed",
        "stakeholder_impacts": ["who_affected_and_how"],
        "sustainability": "temporary|stable|growing|declining",
        "generalizability": ["broader_applicability"],
        "lessons_learned": ["insights_gained"],
        "follow_up_needed": ["next_steps_or_monitoring"]
      }
    ],
    "relationships": [
      {
        "id": "R001",
        "from": "source_element_id",
        "to": "target_element_id",
        "relationship_type": "supports|opposes|questions|clarifies|builds_on|enables|blocks|precedes|follows|contains|generalizes",
        "strength": "strong|moderate|weak",
        "confidence": "high|medium|low",
        "evidence_basis": "explicit|implicit|inferred",
        "temporal_aspect": "static|dynamic|evolving",
        "context": "when_relationship_applies",
        "source_document": "this_document_id",
        "target_document": "other_document_id_if_cross_reference"
      }
    ]
  },

  "knowledge_extraction": {
    "explicit_knowledge": {
      "declarative": [
        {
          "fact": "stated_factual_claim",
          "domain": "subject_area",
          "certainty": "established|probable|speculative",
          "source": "where_stated",
          "verification_status": "verified|unverified|disputed"
        }
      ],
      "procedural": [
        {
          "procedure": "step_by_step_process",
          "domain": "application_area",
          "completeness": "complete|partial|outline",
          "complexity": "simple|moderate|complex",
          "prerequisites": ["required_knowledge_skills"],
          "variations": ["alternative_approaches"]
        }
      ],
      "conditional": [
        {
          "condition": "if_this",
          "consequence": "then_that",
          "certainty": "always|usually|sometimes|rarely",
          "exceptions": ["when_rule_doesnt_apply"],
          "evidence": "supporting_basis"
        }
      ],
      "causal": [
        {
          "cause": "causal_factor",
          "effect": "resulting_outcome",
          "mechanism": "how_cause_produces_effect",
          "strength": "strong|moderate|weak",
          "conditions": ["when_relationship_holds"]
        }
      ]
    },
    "implicit_knowledge": {
      "assumptions": [
        {
          "assumption": "unstated_premise",
          "evidence": "how_detected",
          "universality": "widespread|contextual|personal",
          "consequences": ["implications_if_true"]
        }
      ],
      "values": [
        {
          "value": "priority_or_preference",
          "manifestation": "how_revealed",
          "conflicts": ["competing_values"],
          "stakeholders": ["who_holds_this_value"]
        }
      ],
      "mental_models": [
        {
          "model": "conceptual_framework",
          "domain": "area_of_application", 
          "components": ["key_elements"],
          "relationships": ["how_elements_connect"],
          "limitations": ["where_model_breaks_down"]
        }
      ]
    },
    "tacit_knowledge": {
      "experiential": [
        {
          "experience_type": "category_of_experience",
          "description": "phenomenological_account",
          "development": "how_experience_acquired",
          "indicators": ["signs_of_expertise"],
          "transmission": "how_taught_or_shared"
        }
      ],
      "embodied": [
        {
          "physical_aspect": "bodily_dimension",
          "description": "somatic_experience",
          "techniques": ["development_methods"],
          "recognition": ["how_identified"]
        }
      ],
      "intuitive": [
        {
          "intuition_type": "category_of_insight",
          "description": "nature_of_knowing",
          "development": "how_cultivated",
          "validation": "how_checked",
          "limitations": ["when_unreliable"]
        }
      ]
    },
    "process_knowledge": {
      "workflows": [
        {
          "id": "WF001",
          "workflow_name": "process_identifier",
          "description": "overall_process_purpose",
          "context": "when_where_used",
          "steps": [
            {
              "step_number": "sequence_position",
              "action": "what_to_do",
              "inputs": ["required_resources"],
              "outputs": ["produced_results"],
              "decision_points": ["choices_to_make"],
              "success_criteria": ["how_to_know_step_succeeded"],
              "common_problems": ["typical_difficulties"],
              "troubleshooting": ["how_to_fix_problems"],
              "alternatives": ["other_ways_to_do_step"],
              "skills_required": ["needed_competencies"],
              "time_estimate": "duration_expectation",
              "quality_checks": ["verification_methods"]
            }
          ],
          "prerequisites": ["what_needed_before_starting"],
          "resources": ["required_materials_tools"],
          "roles": ["who_does_what"],
          "outcomes": ["expected_results"],
          "success_factors": ["what_makes_it_work"],
          "failure_modes": ["how_it_can_go_wrong"],
          "variations": ["adaptations_for_different_contexts"],
          "improvement_opportunities": ["potential_optimizations"],
          "measurement": ["how_to_assess_effectiveness"]
        }
      ],
      "evolution": [
        {
          "time_period": "historical_phase",
          "characteristics": "what_was_typical",
          "key_changes": ["major_developments"],
          "driving_forces": ["causes_of_change"],
          "continuities": ["what_remained_stable"],
          "evidence": "supporting_documentation"
        }
      ],
      "learning_progressions": [
        {
          "stage": "development_phase",
          "characteristics": ["typical_abilities_limitations"],
          "challenges": ["common_difficulties"],
          "development_methods": ["how_to_advance"],
          "assessment": ["how_to_recognize_stage"],
          "duration": "typical_time_in_stage",
          "prerequisites": ["what_needed_to_reach_stage"],
          "next_stage": "subsequent_development"
        }
      ]
    }
  },

  "multimedia_elements": {
    "diagrams": [
      {
        "id": "D001",
        "type": "flowchart|concept_map|organizational_chart|network_diagram|timeline",
        "title": "diagram_title",
        "description": "what_diagram_shows",
        "location": "where_found_in_document",
        "key_insights": "main_takeaways",
        "text_alternative": "accessible_description",
        "relationships_shown": ["connections_illustrated"],
        "complexity": "simple|moderate|complex",
        "readability": "clear|moderate|difficult",
        "completeness": "comprehensive|partial|overview"
      }
    ],
    "examples": [
      {
        "id": "EX001",
        "type": "case_study|illustration|demonstration|exercise",
        "title": "example_title",
        "description": "what_example_demonstrates",
        "context": "situational_background",
        "learning_value": "educational_purpose",
        "complexity": "simple|moderate|complex",
        "realism": "real_world|hypothetical|simplified",
        "transferability": "specific|generalizable|analogical",
        "source_location": "where_found"
      }
    ],
    "interactive_elements": [
      {
        "id": "INT001",
        "type": "exercise|simulation|quiz|discussion_prompt|reflection_question",
        "title": "element_title",
        "description": "what_element_involves",
        "instructions": "how_to_engage",
        "learning_objectives": ["intended_outcomes"],
        "materials_needed": ["required_resources"],
        "time_required": "duration_estimate",
        "difficulty_level": "beginner|intermediate|advanced",
        "assessment_method": "how_success_measured",
        "variations": ["adaptations_possible"]
      }
    ]
  },

  "pedagogical_structure": {
    "teaching_methods": [
      {
        "method": "instructional_approach",
        "description": "how_method_works",
        "learning_theory": "underlying_educational_principle",
        "effectiveness": "research_support_evidence",
        "contexts": ["when_where_appropriate"],
        "implementation": ["practical_steps"],
        "materials": ["resources_needed"],
        "assessment": ["evaluation_approaches"],
        "limitations": ["when_not_appropriate"],
        "variations": ["adaptations_possible"]
      }
    ],
    "common_misconceptions": [
      {
        "misconception": "incorrect_understanding",
        "correct_understanding": "accurate_version",
        "why_occurs": "psychological_reasons",
        "indicators": ["signs_of_misconception"],
        "correction_strategies": ["how_to_address"],
        "persistence": "easy_to_correct|requires_effort|deeply_rooted",
        "consequences": ["problems_if_uncorrected"],
        "prevention": ["how_to_avoid"]
      }
    ],
    "scaffolding": [
      {
        "target_concept": "what_being_learned",
        "prerequisites": ["required_foundation"],
        "building_blocks": ["component_skills_knowledge"],
        "sequence": ["learning_progression"],
        "support_structures": ["temporary_aids"],
        "independence_indicators": ["signs_ready_for_independence"],
        "common_sticking_points": ["where_learners_struggle"],
        "assessment_checkpoints": ["progress_monitoring"]
      }
    ],
    "exercises": [
      {
        "id": "EXE001",
        "name": "exercise_title",
        "type": "practice|application|reflection|analysis|synthesis",
        "instructions": "step_by_step_directions",
        "learning_objectives": ["what_learner_gains"],
        "materials": ["resources_needed"],
        "time_estimate": "duration",
        "difficulty": "beginner|intermediate|advanced",
        "individual_or_group": "solo|collaborative|either",
        "assessment": ["evaluation_criteria"],
        "variations": ["adaptations_for_different_contexts"],
        "follow_up": ["subsequent_activities"],
        "real_world_connection": "practical_application"
      }
    ]
  },

  "tensions_paradoxes": {
    "productive_contradictions": [
      {
        "tension": "apparent_contradiction",
        "position_a": "first_perspective",
        "position_b": "opposing_perspective", 
        "synthesis_approach": "how_both_can_be_true",
        "contextual_factors": ["when_each_applies"],
        "expert_guidance": "how_practitioners_navigate",
        "learning_value": "educational_benefit",
        "resolution_maturity": "beginner_confusion|expert_integration"
      }
    ],
    "unresolved_questions": [
      {
        "question": "open_inquiry",
        "why_unresolved": "reasons_for_uncertainty",
        "implications": "consequences_of_not_knowing",
        "different_positions": ["various_viewpoints"],
        "research_approaches": ["investigation_methods"],
        "practical_impact": "how_uncertainty_affects_practice",
        "expert_strategies": "how_professionals_cope"
      }
    ],
    "value_conflicts": [
      {
        "conflict": "competing_priorities",
        "values_in_tension": ["conflicting_principles"],
        "stakeholder_positions": ["who_prioritizes_what"],
        "decision_approaches": ["resolution_strategies"],
        "contextual_factors": ["situational_influences"],
        "compromise_possibilities": ["middle_ground_options"],
        "non_negotiables": ["absolute_requirements"]
      }
    ]
  },

  "practical_implementation": {
    "step_by_step_procedures": [
      {
        "procedure_id": "PROC001",
        "name": "procedure_title",
        "purpose": "what_procedure_accomplishes",
        "context": "when_where_used",
        "phases": [
          {
            "phase_name": "phase_identifier",
            "objectives": ["phase_goals"],
            "activities": ["what_to_do"],
            "deliverables": ["expected_outputs"],
            "success_criteria": ["completion_indicators"],
            "resources_needed": ["required_inputs"],
            "roles_responsibilities": ["who_does_what"],
            "time_estimate": "duration",
            "dependencies": ["prerequisite_phases"],
            "risks": ["potential_problems"],
            "mitigation": ["risk_management"],
            "quality_assurance": ["verification_methods"]
          }
        ],
        "overall_success_factors": ["critical_enablers"],
        "common_pitfalls": ["typical_mistakes"],
        "troubleshooting": ["problem_resolution"],
        "variations": ["adaptations_for_context"],
        "measurement": ["effectiveness_assessment"],
        "continuous_improvement": ["optimization_approaches"]
      }
    ],
    "technical_requirements": {
      "software": ["required_applications"],
      "hardware": ["necessary_equipment"], 
      "skills": ["competencies_needed"],
      "knowledge": ["background_understanding"],
      "experience": ["helpful_preparation"],
      "certifications": ["formal_qualifications"],
      "time_investment": "learning_curve_expectation",
      "cost_considerations": ["financial_requirements"],
      "support_resources": ["help_available"]
    },
    "success_factors": [
      {
        "factor": "critical_enabler",
        "description": "what_makes_difference",
        "evidence": "supporting_research_experience",
        "implementation_tips": ["practical_advice"],
        "measurement": ["how_to_assess"],
        "stakeholder_roles": ["who_contributes_how"],
        "common_obstacles": ["barriers_to_factor"],
        "development_strategies": ["how_to_strengthen"]
      }
    ],
    "failure_modes": [
      {
        "failure_type": "category_of_failure",
        "description": "what_goes_wrong",
        "warning_signs": ["early_indicators"],
        "root_causes": ["underlying_reasons"],
        "prevention": ["avoidance_strategies"],
        "recovery": ["corrective_actions"],
        "learning_opportunities": ["insights_from_failure"]
      }
    ]
  },

  "case_studies": [
    {
      "id": "CS001",
      "title": "case_study_title",
      "context": {
        "setting": "organizational_situational_context",
        "timeframe": "when_occurred",
        "participants": ["key_actors_involved"],
        "background": "relevant_history",
        "challenges": ["problems_faced"],
        "constraints": ["limiting_factors"]
      },
      "methodology": "how_case_developed",
      "narrative": {
        "phases": [
          {
            "phase": "time_period_stage",
            "events": ["what_happened"],
            "decisions": ["choices_made"],
            "rationale": ["reasoning_behind_decisions"],
            "actions": ["implementation_steps"],
            "reactions": ["stakeholder_responses"],
            "outcomes": ["immediate_results"]
          }
        ]
      },
      "analysis": {
        "success_factors": ["what_worked_well"],
        "challenges": ["difficulties_encountered"],
        "critical_decisions": ["key_choice_points"],
        "stakeholder_perspectives": ["different_viewpoints"],
        "unintended_consequences": ["unexpected_results"],
        "lessons_learned": ["insights_gained"]
      },
      "outcomes": {
        "immediate_results": ["short_term_effects"],
        "long_term_impact": ["sustained_changes"],
        "stakeholder_satisfaction": ["participant_views"],
        "measurement_data": ["quantitative_results"],
        "qualitative_assessment": ["subjective_evaluation"]
      },
      "transferability": {
        "generalizable_principles": ["broadly_applicable_insights"],
        "context_dependencies": ["situation_specific_factors"],
        "replication_potential": ["applicability_elsewhere"],
        "adaptation_requirements": ["necessary_modifications"],
        "similar_cases": ["comparable_examples"]
      },
      "follow_up": {
        "subsequent_developments": ["what_happened_later"],
        "ongoing_monitoring": ["continued_assessment"],
        "additional_research": ["further_investigation"],
        "implementation_elsewhere": ["adoption_by_others"]
      }
    }
  ],

  "comparative_analysis": {
    "related_approaches": [
      {
        "approach": "alternative_method",
        "relationship": "competitive|complementary|foundational|derived",
        "similarities": ["shared_characteristics"],
        "differences": ["distinguishing_features"],
        "advantages": ["when_superior"],
        "disadvantages": ["when_inferior"],
        "integration_potential": ["combination_possibilities"],
        "selection_criteria": ["when_to_choose_each"],
        "evolution_relationship": "predecessor|contemporary|successor"
      }
    ],
    "positioning": {
      "unique_contributions": ["distinctive_value"],
      "overlapping_domains": ["shared_territories"],
      "competitive_advantages": ["superior_aspects"],
      "market_position": "established|emerging|declining|niche",
      "adoption_patterns": ["who_uses_when"]
    }
  },

  "critical_assessment": {
    "strengths": [
      {
        "strength": "positive_aspect",
        "evidence": "supporting_data_experience",
        "contexts": ["where_strength_applies"],
        "comparison_basis": ["superior_to_what"],
        "sustainability": "enduring|contextual|temporary",
        "stakeholder_agreement": "universal|majority|minority",
        "limitations_of_strength": ["when_becomes_weakness"]
      }
    ],
    "weaknesses": [
      {
        "weakness": "limitation_or_problem",
        "evidence": "supporting_analysis",
        "severity": "critical|significant|moderate|minor",
        "scope": "universal|contextual|edge_case",
        "impact": "consequences_of_weakness",
        "addressability": "easily_fixed|requires_effort|fundamental",
        "workarounds": ["mitigation_strategies"],
        "improvement_potential": "research_development_needed"
      }
    ],
    "credibility_assessment": {
      "author_expertise": {
        "qualifications": ["relevant_credentials"],
        "experience": ["practical_background"],
        "reputation": ["field_recognition"],
        "potential_biases": ["conflicts_of_interest"],
        "perspective_limitations": ["blind_spots"]
      },
      "evidence_quality": {
        "research_basis": "strong|moderate|weak|absent",
        "methodology_rigor": "high|medium|low",
        "sample_representativeness": "representative|limited|biased",
        "replication_status": "replicated|single_study|untested",
        "peer_review": "peer_reviewed|editorial|self_published"
      },
      "internal_consistency": {
        "logical_coherence": "consistent|mostly_consistent|contradictory",
        "evidence_alignment": "evidence_supports_claims|mixed|contradicts",
        "argument_strength": "compelling|reasonable|weak|flawed"
      },
      "external_validity": {
        "generalizability": "broadly_applicable|context_specific|limited",
        "supporting_literature": "strong_support|some_support|contradicted|isolated",
        "expert_consensus": "widely_accepted|debated|rejected|unknown"
      }
    },
    "bias_analysis": {
      "potential_biases": [
        {
          "bias_type": "confirmation|selection|authority|cultural|temporal",
          "description": "how_bias_manifests",
          "evidence": "signs_of_bias",
          "impact": "how_affects_conclusions",
          "mitigation": "author_acknowledgment_steps"
        }
      ],
      "perspective_limitations": ["whose_voices_missing"],
      "cultural_assumptions": ["unstated_cultural_premises"],
      "temporal_constraints": ["time_period_limitations"]
    }
  },

  "knowledge_gaps": [
    {
      "gap": "missing_knowledge_area",
      "type": "empirical|theoretical|methodological|practical",
      "importance": "critical|important|useful|interesting",
      "consequences": "impact_of_not_knowing",
      "research_feasibility": "easy|moderate|difficult|currently_impossible",
      "resource_requirements": ["what_needed_for_investigation"],
      "timeline": "immediate|short_term|long_term",
      "interdisciplinary_needs": ["required_expertise_areas"],
      "practical_implications": ["how_gap_affects_practice"],
      "theoretical_significance": ["scholarly_importance"]
    }
  ],

  "actionable_insights": {
    "immediate_applications": [
      {
        "insight": "practical_takeaway",
        "application_context": "where_when_to_apply",
        "implementation_steps": ["how_to_put_into_practice"],
        "prerequisites": ["what_needed_first"],
        "expected_benefits": ["anticipated_outcomes"],
        "success_indicators": ["how_to_measure_success"],
        "potential_obstacles": ["implementation_challenges"],
        "adaptation_guidance": ["contextual_modifications"],
        "resource_requirements": ["what_needed"],
        "timeline": "implementation_duration",
        "risk_mitigation": ["problem_prevention"]
      }
    ],
    "research_opportunities": [
      {
        "research_question": "investigatable_inquiry",
        "methodology": ["appropriate_research_methods"],
        "importance": "significance_for_field",
        "feasibility": "practical_doability",
        "timeline": "research_duration",
        "resources_needed": ["required_support"],
        "potential_impact": ["expected_contributions"],
        "collaboration_opportunities": ["partnership_possibilities"],
        "funding_prospects": ["financial_support_likelihood"]
      }
    ],
    "development_opportunities": [
      {
        "opportunity": "improvement_innovation_possibility",
        "type": "tool|method|theory|practice",
        "target_beneficiaries": ["who_would_benefit"],
        "requirements": ["development_needs"],
        "technical_challenges": ["implementation_difficulties"],
        "market_potential": "commercial_viability",
        "timeline": "development_duration",
        "success_probability": "likelihood_of_success"
      }
    ]
  },

  "temporal_evolution": {
    "historical_development": [
      {
        "period": "time_range",
        "key_developments": ["major_advances"],
        "influential_figures": ["important_people"],
        "paradigm_characteristics": ["defining_features"],
        "dominant_methods": ["prevalent_approaches"],
        "major_debates": ["contentious_issues"],
        "technological_context": ["available_tools"],
        "social_context": ["cultural_factors"],
        "transition_factors": ["causes_of_change"]
      }
    ],
    "current_state": {
      "dominant_paradigms": ["prevailing_approaches"],
      "active_debates": ["ongoing_controversies"],
      "emerging_trends": ["developing_directions"],
      "technological_influences": ["current_tool_impact"],
      "institutional_factors": ["organizational_influences"],
      "generational_differences": ["cohort_variations"]
    },
    "future_directions": [
      {
        "trend": "anticipated_development",
        "evidence": "supporting_indicators",
        "timeline": "expected_timeframe",
        "probability": "likelihood_assessment",
        "implications": ["potential_consequences"],
        "enabling_factors": ["what_would_accelerate"],
        "blocking_factors": ["what_would_prevent"],
        "preparation_needed": ["readiness_requirements"]
      }
    ]
  },

  "quality_metadata": {
    "analysis_completeness": {
      "coverage_assessment": "comprehensive|substantial|partial|limited",
      "missing_elements": ["uncaptured_aspects"],
      "depth_variation": ["areas_of_detail_vs_overview"],
      "confidence_distribution": ["high_medium_low_confidence_areas"]
    },
    "extraction_challenges": [
      {
        "challenge": "difficulty_encountered",
        "impact": "how_affected_analysis",
        "mitigation": "how_addressed",
        "remaining_uncertainty": "unresolved_aspects"
      }
    ],
    "verification_status": {
      "source_checking": "quotes_verified|locations_confirmed|citations_checked",
      "consistency_review": "internal_contradictions_resolved",
      "completeness_audit": "major_elements_captured",
      "accuracy_confidence": "high|medium|low"
    },
    "improvement_opportunities": [
      {
        "area": "aspect_for_enhancement",
        "specific_need": "what_could_be_better",
        "method": "how_to_improve",
        "resource_requirement": "what_needed"
      }
    ],
    "usage_recommendations": [
      {
        "use_case": "application_scenario",
        "suitability": "excellent|good|adequate|limited",
        "caveats": ["important_limitations"],
        "supplementation_needs": ["additional_resources_recommended"]
      }
    ],
    "maintenance_notes": {
      "currency_decay": "how_quickly_information_becomes_outdated",
      "update_triggers": ["events_requiring_revision"],
      "monitoring_needs": ["ongoing_tracking_requirements"],
      "revision_schedule": "recommended_update_frequency"
    }
  }
}
```

## Universal Analysis Guidelines

### Application Flexibility
- **Adapt Node Types**: Not every document will have all node types - capture what's present
- **Infer Structure**: Extract implicit argumentative patterns even when not explicitly structured
- **Context Sensitivity**: Adjust analysis depth and focus based on document type and purpose
- **Multiple Perspectives**: Recognize that different stakeholders may see different argument structures

### Cross-Domain Translation
- **Business Documents**: Map strategic options as positions, market forces as constraints
- **Technical Documentation**: Treat design decisions as positions, requirements as criteria
- **Academic Papers**: Extract research questions as issues, findings as evidence
- **Policy Analysis**: Identify policy options as alternatives, stakeholder concerns as criteria

### Quality Assurance
- **Completeness Verification**: Ensure all major argumentative elements are captured
- **Relationship Validation**: Confirm logical connections between elements
- **Source Attribution**: Maintain precise documentation of all claims and insights
- **Bias Recognition**: Identify and acknowledge analytical limitations and perspectives

### Integration Capabilities
- **Entity Normalization**: Standardize references across documents for comparison
- **Relationship Mapping**: Enable cross-document analysis and synthesis
- **Temporal Tracking**: Capture evolution of ideas across time and sources
- **Multi-perspective Analysis**: Accommodate different stakeholder viewpoints

---

**Usage**: Apply this framework to ANY document to extract its underlying argumentative structure, decision-making patterns, and knowledge relationships. The IBIS foundation provides analytical rigor while the enhanced framework captures the full richness of human reasoning and knowledge transmission.