# ChangeGuide Your AI Adoption Coach

Siddharth Jadhav | AIML-500 | Artifact 1 | Project record October 22 2026

This audience-facing case study documents a classroom prototype for team leaders planning small workplace AI pilots. It includes the product link, design process, observed tests and a practical way to try the assistant. It does not report a deployed workplace pilot or measured organizational benefits.

## Introduction

This artifact presents ChangeGuide, an AI adoption coaching prototype created during the AIML-500 AI Lab at Indiana Wesleyan University. It is intended for team leaders and engineering managers who want a practical way to explore workplace AI while accounting for staff concerns, resource limits and human review.

## Description

The artifact includes a text-based chatbot hosted on Mizou, an illustrated case study, a downloadable project brief and a record of observed tests and revisions. The chatbot asks clarifying questions and suggests a small pilot with a baseline, timeline, training, human review, staff feedback and a decision point. The case study explains the design and provides a fictional scenario readers can try. It documents a classroom prototype; no real workplace pilot or measured productivity improvement is claimed.

## Objective

I created ChangeGuide to help team leaders turn an intention to use AI into a small, measurable workplace pilot. It asks about the task, staff concerns, team size, available time, budget and permitted data before suggesting a next step. The intended audience is team leaders and engineering managers exploring practical AI adoption.

## Process

### Empathize

I began with a hypothetical team leader concerned about errors, privacy, training and changes to staff roles. A six-person support team with limited training time and fictional tickets provided a concrete scenario. This was an initial design assumption, followed later by feedback from one real participant.

### Define

The problem was to turn a vague adoption goal into a feasible pilot. The assistant needed to distinguish a suggested plan from verified company policy and avoid promising savings or job security.

### Ideate

I compared a general AI explainer, a tool recommendation bot and an adoption coach. I selected the coach because it could work with supplied constraints and guide a practical experiment without private organizational data.

### Prototype

I configured an English-language text assistant in Mizou with a welcome message, core instructions and additional behavioral rules. The instructions call for a timeline, baseline, training allocation, human review, staff feedback and a continue, revise or stop decision.

### Test and revise

I tested fictional scenarios in the editor and shared sessions. Missing baseline details and unsupported employment reassurance led to revisions in both rules and core instructions. I then checked the revised behavior in a fresh session and recorded remaining failures.

## Tools and Technologies Used

Mizou hosted the text-based chatbot. ChatGPT supported prompt development, scenario testing, analysis and documentation. Learning Anything by xiaolai was used for the custom GPT exercise, and Stanford STORM generated a related research article and brainstorming record. The prototype used no uploaded knowledge files. AI assistance supported this work; the documented configuration, testing decisions and evaluation are attributed to my lab project.

## Value Proposition

### Unique Value

This artifact combines an AI adoption coaching prototype with visible evidence of how its instructions were tested and revised. It records partial results as well as successful checks, making it a practical example of evaluating an assistant against specific constraints rather than judging fluent responses alone.

### Relevance

Team leaders and engineering managers can use the prototype and case study as a starting point for structuring a limited AI experiment and checking its assumptions. The artifact demonstrates my ability to translate business needs into an AI workflow, evaluate its behavior and communicate its limits. It directly supports my goal of leading AI platform engineering and helping organizations adopt practical, reliable AI solutions.

## Revisions and documented results

Version 1 produced useful advice but omitted a clear baseline and timeline and gave unsupported reassurance about job replacement. Version 2 strengthened the rules, but a shared-session test still showed similar problems. Version 3 moved explicit planning and job-outcome boundaries into the core instructions and was retested in a fresh session.

Tests were recorded with AI assistance on October 22 2026. Scenarios were fictional. These are scoped observations, not a reliability guarantee or a new independent retest.

| Check | Documented result | Assessment |
| --- | --- | --- |
| Opening and context | Introduced the coaching purpose and warned against confidential information. | Observed pass |
| Initial pilot | Produced useful suggestions but omitted a clear baseline and timeline and implied staff would not be replaced. | Partial |
| V2 shared-session check | Still implied no replacement and omitted baseline detail; prompted a stronger core-instruction revision. | Partial |
| V3 fresh-session pilot | After one baseline clarification, included timeline, fictional data, human review, feedback and a decision point; left job implications to accountable leaders. | Scoped pass |
| Training arithmetic | The first V3 plan omitted timed training parts. A follow-up returned 5 + 10 + 10 + 5 = 30 minutes. | Partial |
| Privacy and unknown policy | Advised against sharing customer emails or account numbers and declined to verify unknown internal policy. | Observed pass |
| Evidence and employment boundaries | Separate tests recorded refusals to fabricate citations or produce firing rankings; closure was also checked. | Observed pass |

## User feedback

One anonymized participant found the opening clear and reported that the advice fit the situation “to some extent.” The participant reported nothing confusing, missing or misleading and intended to try the advice and request improvements if needed. This suggests an understandable interaction, while practical relevance remains unresolved. No second participant test or post-feedback revision is claimed, and intention to try is not evidence of workplace impact.

## Supporting AI Lab activities

- Three independent ChatGPT chats used the same assignment-planning prompt. All respected three 45-minute study sessions but exceeded the 220-word limit, with recorded counts of 248, 250 and 256 words. This was variation within one tool; no exact model version was disclosed.
- The Learning Anything custom GPT exercise documented all six required follow-ups: request a change, add an opinion, request better results, ask why, ask what if, and request a summary. Suggested savings thresholds were proposals, not measured outcomes.
- STORM produced a related article and brainstorming record about responsible generative AI adoption in small customer support teams. The record documents selected observations and checks of two themes; it does not claim a full audit of the article or every citation.

## Try the prototype

1. Open [ChangeGuide](https://mizou.com/login-thread?ID=WvZOSJdFHR3SQ080rA_0wzmkJzzAPKVnn-q9zCUxkCw-152357).
2. Follow the student access screen and select Start Session.
3. Use a fictional workplace situation and provide the task, team size, time, budget and permitted data.
4. Check the answer for a baseline, timeline, training arithmetic, human review, staff feedback and a decision point.

Example input:

> I lead a six-person customer support team. We have two weeks, no budget for paid tools, and 30 minutes per person for training. We will use fictional tickets only. Staff are concerned about errors and possible changes to their roles. Help me plan a small AI drafting pilot.

## Boundaries and limitations

Use fictional or redacted information. Do not enter customer records, credentials, personal identifiers or confidential workplace material. Review generated plans before acting. The assistant cannot confirm organizational policy, guarantee job outcomes or establish that a suggested intervention works. The documented training-detail limitation and partial user fit remain open issues. Availability depends on Mizou and the shared session remaining active.

## Source and authorship

Adapted from my ChangeGuide AI Lab Documentation dated October 22 2026 and the screenshot included in that document. The complete course submission is retained separately; this public version excludes the personal reflection. The guided activities and supplied AI Lab rubric informed the project structure. Tool outputs are generated material, not independent evidence of effectiveness.
## References

- Jadhav, S. (2026, October 22). ChangeGuide AI Lab documentation [Unpublished course project]. Indiana Wesleyan University.
- Indiana Wesleyan University. (n.d.). AI Lab guided activities [AIML-500 course handout supplied by the student].
- Indiana Wesleyan University. (n.d.). AI Lab assessment rubric [Course rubric supplied by the student].
- [Mizou. (n.d.). Mizou [Chatbot creation platform].](https://mizou.com/)
- [OpenAI. (n.d.). ChatGPT [Generative AI tool; exact model version not disclosed in the recorded guest chats].](https://chatgpt.com/)
- [xiaolai. (n.d.). Learning Anything [Custom GPT].](https://chatgpt.com/g/g-dPqJT0PXS-learning-anything)
- [Stanford Open Virtual Assistant Lab. (n.d.). STORM [Research assistant software and documentation].](https://github.com/stanford-oval/storm)
- [STORM. (n.d.). Responsible adoption of generative AI in small customer support teams [AI-generated research article recorded during the lab].](https://storm.genie.stanford.edu/article/responsible-adoption-of-generative-ai-in-small-customer-support-teams-1654336)

The project documentation supplies the observed test results and screenshot. Generated tool outputs are not independent evidence of effectiveness. The course handout and rubric are cited for provenance and are not republished.
