# PHASES.md
# MCP Mega Workshop — Project 5: AI Learning Path Generator

## Project Goal
Build an AI-powered application that creates a personalized learning roadmap from a user's career goal, current skills, experience level, available study time, and learning preferences.

## Phase 1: User Input
**Goal:** Collect the information needed to personalize a learning path.

Tasks:
- Create a clear, responsive input form.
- Collect name, career goal, experience level, current skills, skills to learn, daily study time, target duration, and preferred learning method.
- Include dropdowns, text areas, helpful placeholders, and required-field indicators.
- Add a “Generate My Learning Path” button and a reset option.
- Validate required fields and support a custom career goal when “Other” is selected.

Deliverable:
- A working input page that produces a structured user profile.

Completion check:
- Users can fill in the form, see validation messages, and submit valid information.

## Phase 2: Input Validation and Processing
**Goal:** Check and normalize submitted information before it is used.

Tasks:
- Check required fields and reject blank-only text.
- Normalize skills into lists.
- Convert the submitted form into a consistent data structure.
- Show helpful errors without losing valid user entries.

Deliverable:
- A validated user profile ready for the workflow.

Completion check:
- Valid input is accepted and incomplete or invalid input is handled clearly.

## Phase 3: MCP Server and Tool Configuration
**Goal:** Connect the application workflow to the MCP server and the tools required by the workshop.

Tasks:
- Configure the required MCP server in the chosen environment.
- Authenticate through the official service flow.
- Select and authorize only the tools needed for the project.
- Test each connected tool.
- Document any credentials or environment variables needed; never commit secrets to source control.

Deliverable:
- A verified MCP connection and a documented list of available tools.

Completion check:
- The required tools are visible and respond to test requests. Do not mark this phase complete based only on a configuration file.

## Phase 4: AI Roadmap Generation
**Goal:** Generate a realistic personalized plan from the validated profile.

Tasks:
- Choose and configure the AI service required by the workshop.
- Create a prompt using the user's goal, skills, experience, schedule, and preferred learning method.
- Request a structured roadmap containing weeks, topics, objectives, exercises, and projects.
- Handle service errors, empty responses, and invalid output.
- Avoid inventing external links or claiming tools were used when they were not.

Deliverable:
- A generated roadmap tailored to the submitted user profile.

Completion check:
- Different input profiles produce appropriately different roadmaps.

## Phase 5: Learning Path Display
**Goal:** Present the generated roadmap in an easy-to-follow format.

Tasks:
- Display a roadmap summary and weekly learning stages.
- Show topics, learning objectives, practice tasks, and mini-projects.
- Include clear loading, success, and error states.
- Provide an option to generate another roadmap.

Deliverable:
- A readable learning-path results page.

Completion check:
- A user can review the complete generated roadmap.

## Phase 6: Dashboard and Progress Tracking
**Goal:** Help users track their learning progress.

Tasks:
- Display roadmap stages and tasks.
- Let users mark tasks as complete or incomplete.
- Show completion counts or a progress indicator.
- Save progress using an appropriate storage method if persistence is required.
- Explain any limitations if progress is stored only in the current browser.

Deliverable:
- A dashboard with usable progress tracking.

Completion check:
- Progress updates correctly when tasks are marked complete or incomplete.

## Phase 7: Testing and Error Handling
**Goal:** Verify the complete workflow.

Test cases:
- Submit a complete valid form.
- Submit with required fields missing.
- Enter text containing only spaces.
- Select “Other” without entering a custom goal.
- Generate a roadmap for different career goals.
- Test MCP or AI service failures.
- Test on desktop and mobile screen sizes.
- Verify that private keys and tokens are not exposed in the interface or repository.

Deliverable:
- A tested application with clear error messages.

Completion check:
- Critical test cases pass and known limitations are documented.

## Phase 8: Documentation and Submission
**Goal:** Prepare the project for workshop evaluation.

Tasks:
- Write the project overview and setup instructions.
- Document the architecture and actual MCP tools used.
- Add screenshots of the working application.
- Include sample inputs and generated output.
- Remove secrets and temporary files from the submission.
- Follow the workshop's official Google Form and submission instructions.
- Submit only one final project, as directed by the cheat sheet.

Deliverable:
- A documented, tested project ready for submission.

Completion check:
- The application can be run using the documented instructions and the submission materials are ready.

## Overall Workflow

User Input
→ Input Validation
→ MCP Server and Tool Configuration
→ AI Roadmap Generation
→ Learning Path Display
→ Dashboard and Progress Tracking
→ Testing
→ Documentation and Submission

## Important Notes
- Complete and test each phase before moving to the next.
- MCP is a connection protocol; it does not itself generate the learning roadmap.
- The exact AI provider, MCP tools, and submission requirements must match the official workshop instructions.
- Never claim an integration is working until it has been tested.
