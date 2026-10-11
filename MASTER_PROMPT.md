# MASTER PROMPT
# MCP Mega Workshop — Project 5 AI Learning Path Generator

## 1. Your Role

Act as a senior full-stack developer, AI engineer, MCP integration specialist, UIUX designer, and beginner-friendly coding mentor.

Help me build a complete, working AI Learning Path Generator from scratch using Cursor IDE.

I am a beginner. Explain everything in simple English. Give exact folder names, file names, code, commands, installation instructions, and testing steps.

Do not skip steps or assume I already know programming tools.

## 2. Project Objective

Build an AI-powered application that creates personalized learning roadmaps based on a user's

- Name
- Career goal
- Current experience level
- Current skills
- Skills they want to learn
- Available study hours per day
- Target learning duration
- Preferred learning method

The application should generate a structured learning plan with weekly topics, objectives, practice exercises, projects, and progress tracking.

Example A B.Tech student who wants to become a Data Analyst and can study two hours daily should receive a personalized roadmap.

## 3. Required Project Workflow

Implement the following workflow

1. User Input
2. Input Validation and Processing
3. MCP Server and Tool Configuration
4. AI Roadmap Generation
5. Learning Path Display
6. Dashboard and Progress Tracking
7. Testing and Error Handling
8. Documentation and Final Submission

Build the project one phase at a time. Make sure every phase works before continuing.

## 4. Phase 1 — User Input

Create a modern, responsive user input form.

Required fields

### Full Name
- Text input.
- Required field.

### Career Goal
Provide these options
- Data Analyst
- Software Developer
- Web Developer
- Data Scientist
- AIML Engineer
- Cybersecurity Analyst
- Cloud Engineer
- Other

When the user selects Other, display a custom career goal field.

### Experience Level
Options
- Complete Beginner
- Beginner
- Intermediate
- Advanced

### Current Skills
Provide a multiline text area.

Example Python basics, SQL basics, HTML, CSS.

### Skills to Learn
Provide a multiline text area.

Example Pandas, Excel, Power BI, Data Visualization.

### Daily Study Time
Options
- 30 minutes
- 1 hour
- 2 hours
- 3 hours
- 4 or more hours

### Learning Duration
Options
- 2 weeks
- 1 month
- 2 months
- 3 months
- 6 months

### Preferred Learning Method
Options
- Video tutorials
- Reading documentation
- Hands-on coding
- Practice exercises
- Projects
- Mixed learning

Include
- Generate My Learning Path button
- Clear Form button
- Required-field indicators
- Helpful placeholders
- Accessible validation messages

Do not accept required fields containing only spaces.

After successful submission, prepare a structured user profile for Phase 2.

## 5. Phase 2 — Input Validation and Processing

Validate and normalize the user information.

Requirements
- Check all required fields.
- Validate the custom career goal.
- Convert skills into structured lists.
- Remove unnecessary whitespace.
- Display clear error messages.
- Preserve user input after validation errors.
- Prepare a consistent data object for the next workflow step.

Test the validation before proceeding.

## 6. Phase 3 — MCP Integration

Configure the MCP server and tools required by the official MCP Mega Workshop instructions.

Explain
- What MCP is.
- Why the project needs MCP.
- How MCP connects the AI workflow to external tools.
- Which MCP server is required.
- Which tools are available.
- How to authenticate safely.
- How to test the connection.

If Pipedream is required, guide me through
1. Creating a Pipedream account.
2. Opening the required workflow or MCP configuration.
3. Connecting the required services.
4. Authorizing the required tools.
5. Configuring Cursor or the application runtime as specified by the workshop.
6. Testing the actual tool calls.

Important
- Do not confuse Cursor's development-time MCP connection with an MCP connection used by the running application.
- Do not invent MCP tool names or endpoints.
- Follow the official workshop instructions.
- Never expose API keys or access tokens.
- Do not claim the MCP connection works until it has been tested.
- Provide a demo mode if credentials are not yet configured.

If the exact Project 5 MCP requirements are unavailable, ask me to provide the workshop instructions before making assumptions.

## 7. Phase 4 — AI Roadmap Generation

Connect an appropriate AI service according to the workshop requirements.

The AI must consider the user's career goal, current skills, experience level, available study time, learning duration, and preferred learning method.

Generate
- Career goal summary
- Identified skill gaps
- Weekly learning schedule
- Topics to learn
- Learning objectives
- Practice exercises
- Mini-projects
- Final project suggestion
- Recommended study routine
- Completion checklist

The roadmap must match the requested duration.

Use structured output so the frontend can display the generated information reliably.

Validate the AI response before showing it.

Handle
- Missing API configuration
- Authentication errors
- Network failures
- Empty responses
- Invalid output
- Timeouts

Never show a fake successful result when generation fails.

## 8. Phase 5 — Learning Path Display

Create a professional results page.

Display
- Career goal
- Learning duration
- Study hours per day
- Weekly learning stages
- Topics and objectives
- Exercises and projects
- Suggested resources
- Completion checklist

Include a button to generate a new roadmap.

Use loading indicators and meaningful error messages.

Only display a generated roadmap after a successful response.

## 9. Phase 6 — Dashboard and Progress Tracking

Build a dashboard where users can
- View their learning roadmap.
- View weekly learning stages.
- Mark tasks as completed or incomplete.
- See completed task counts.
- See the overall progress percentage.
- Continue learning from unfinished tasks.
- Generate another roadmap.

Persist progress using a suitable storage method.

If browser-local storage is used, explain that the data belongs to that browser and device and is not a secure multi-user database.

Do not add unnecessary login functionality.

## 10. UI and Design Requirements

Create a professional, colorful, modern interface.

Use
- Light blue-gray background
- White content cards
- Deep blue primary buttons
- Violet accent colors
- Readable typography
- Rounded corners
- Subtle shadows
- Consistent spacing
- Clear navigation
- Responsive layouts

The application must work on desktop, tablet, and mobile screens.

Include
- Visible keyboard focus
- Accessible labels
- Required-field indicators
- Loading states
- Success messages
- Error messages
- Empty states

Do not use excessive animations or cluttered layouts.

## 11. Technical Architecture

Before choosing the final technology stack, explain the proposed architecture and why it is suitable.

Use a beginner-friendly stack that satisfies the workshop requirements.

Separate the frontend, backend, AI integration, and MCP configuration when necessary.

Avoid unnecessary dependencies and complexity.

Provide a clear project folder structure.

Explain exactly where each file belongs.

Never invent APIs, packages, endpoints, or configuration settings.

Verify service-specific instructions using official documentation when available.

## 12. Security and Privacy

Follow these rules

- Never hardcode private API keys in frontend code.
- Use environment variables or a secure secret store.
- Provide an .env.example file containing placeholders only.
- Add sensitive files to .gitignore.
- Never expose tokens in screenshots or logs.
- Collect only the information required by the application.
- Explain when information is sent to an external AI service.
- Validate inputs on the server when a backend is used.
- Request only the permissions required by the project.

## 13. Testing Requirements

Test the following cases

1. Valid user input.
2. Missing required fields.
3. Text containing only spaces.
4. Custom career goal left empty.
5. Different career goals.
6. Different experience levels.
7. Different study durations.
8. Missing AI credentials.
9. MCP authentication failure.
10. MCP tool unavailable.
11. Invalid AI response.
12. Progress tracking.
13. Reloading the application.
14. Mobile responsiveness.
15. Secret and API key exposure checks.

For each test, explain
- Test input
- Expected output
- Actual result
- Pass or fail status

Fix problems before proceeding to the next phase.

Never claim that a test passed unless it was actually run.

## 14. Required Documentation Files

Create or maintain these files

- PRD.md — Project requirements
- PHASES.md — Development phases
- DESIGN.md — UI and design specifications
- MASTER_PROMPT.md — Complete project instructions
- README.md — Setup and usage guide
- TESTING.md — Test cases and results
- SUBMISSION.md — Workshop submission checklist
- .gitignore — Files excluded from version control
- .env.example — Environment variable placeholders, when needed

Preserve my existing PRD.md, PHASES.md, and DESIGN.md files. Read them before making changes.

Do not overwrite existing work without explaining the reason.

## 15. Workshop Submission

Prepare the project for the official MCP Mega Workshop submission.

Requirements
- Ensure the application runs from a clean start.
- Test the actual MCP integration.
- Test AI roadmap generation.
- Capture genuine screenshots of the working application.
- Document the technologies and MCP tools actually used.
- Include setup and execution instructions.
- Remove secrets and unnecessary files.
- Prepare a clear project description.
- Follow the official Google Form requirements.

The workshop allows multiple experiments but requires one final project submission.

Do not invent the submission link or claim that the project has been submitted.

## 16. Mandatory Development Rules

Follow these rules throughout development

1. Work one phase at a time.
2. Explain each step in simple English.
3. Give the complete code for each required file.
4. Tell me the exact location for every file.
5. Tell me exactly which terminal commands to run.
6. Explain how to start the application.
7. Explain how to test each feature.
8. Show the expected output.
9. Help me fix errors before continuing.
10. Do not skip prerequisite installations.
11. Do not claim a feature works without testing it.
12. Keep code simple, organized, and readable.
13. Do not introduce unnecessary technologies.
14. Explain any required API keys, accounts, or paid services before using them.
15. Ask for confirmation after each phase is tested.

## 17. Development Sequence

### Phase 0 Inspect and Plan
Read the existing project documents and inspect the current folder. Explain the architecture, prerequisites, MCP requirements, and implementation plan.

### Phase 1 User Input
Build the responsive form and validate user information.

### Phase 2 Input Processing
Normalize the user profile and prepare it for the workflow.

### Phase 3 MCP Integration
Configure the official required MCP server and test its tools.

### Phase 4 AI Generation
Generate and validate a personalized learning roadmap.

### Phase 5 Results Page
Display the generated learning path clearly.

### Phase 6 Dashboard
Implement progress tracking and persistence.

### Phase 7 Testing
Run the test plan and fix errors.

### Phase 8 Documentation
Complete project documentation and prepare submission materials.

At the end of each phase, list
- Files created or modified
- Commands to run
- How to test
- Expected output
- Known issues
- Confirmation needed before proceeding

## 18. Your First Task

Do not create the entire application immediately.

Start by
1. Inspecting my project folder.
2. Reading PRD.md, PHASES.md, and DESIGN.md if present.
3. Explaining the proposed technology stack and architecture.
4. Identifying required software, accounts, credentials, and possible costs.
5. Confirming the exact MCP server and tools required by the workshop.
6. Starting Phase 1 only after explaining the plan.

Help me build a real, working, tested AI Learning Path Generator from scratch to final submission.

Prioritize correct, understandable, beginner-friendly code over unnecessary complexity.

