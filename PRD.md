# PRD.md
# AI Learning Path Generator — Step 1: User Input

## 1. Project Overview

The AI Learning Path Generator is an AI-powered application that creates personalized learning roadmaps based on the user's skills, career goals, experience level, and available study time.

This document defines the requirements for **Step 1: User Input**.

## 2. Objective

To collect the information required from users before generating a personalized learning path.

The interface must be simple, attractive, responsive, and easy for beginners to use.

## 3. Target Users

- College students
- Beginners learning programming
- Job seekers preparing for placements
- Professionals who want to learn new skills
- Students preparing for technical careers

## 4. User Input Requirements

The application must collect the following information.

### 4.1 Full Name
- Input type: Text
- Required: Yes
- Purpose: Personalize the learning experience.

### 4.2 Career Goal
- Input type: Dropdown
- Required: Yes
- Options:
  - Data Analyst
  - Software Developer
  - Web Developer
  - Data Scientist
  - AI/ML Engineer
  - Cybersecurity Analyst
  - Cloud Engineer
  - Other

If the user selects Other, display a text field to enter a custom career goal.

### 4.3 Current Experience Level
- Input type: Dropdown or radio buttons
- Required: Yes
- Options:
  - Complete Beginner
  - Beginner
  - Intermediate
  - Advanced

### 4.4 Current Skills
- Input type: Multi-line text field
- Required: Yes
- Placeholder: "Example: Python basics, SQL, HTML, CSS"
- Purpose: Understand what the user already knows.

### 4.5 Skills to Learn
- Input type: Multi-line text field
- Required: Yes
- Placeholder: "Example: Pandas, Excel, Power BI, Data Visualization"
- Purpose: Identify the user's learning priorities.

### 4.6 Available Study Time
- Input type: Dropdown
- Required: Yes
- Options:
  - 30 minutes per day
  - 1 hour per day
  - 2 hours per day
  - 3 hours per day
  - 4 or more hours per day

### 4.7 Learning Duration
- Input type: Dropdown
- Required: Yes
- Options:
  - 2 weeks
  - 1 month
  - 2 months
  - 3 months
  - 6 months

### 4.8 Preferred Learning Method
- Input type: Dropdown
- Required: No
- Options:
  - Video tutorials
  - Reading documentation
  - Hands-on coding
  - Practice exercises
  - Projects
  - Mixed learning

## 5. User Interface Requirements

The user input page must contain:

- Project title: AI Learning Path Generator
- Short introduction explaining the application
- Clearly labeled input fields
- Dropdown menus and text areas
- Required-field indicators
- Helpful placeholder text
- A primary button labeled "Generate My Learning Path"
- A reset or clear-form option
- A responsive layout for desktop, tablet, and mobile

## 6. Validation Requirements

Before submitting the form, the application must:

1. Check that all required fields are completed.
2. Display a clear message when a required field is missing.
3. Reject inputs containing only spaces.
4. Validate custom career goals when Other is selected.
5. Prevent accidental submission of an incomplete form.
6. Preserve entered values when validation fails.

## 7. Functional Requirements

- Users can enter and edit their information.
- Users can select their career goal and experience level.
- Users can specify their current skills and desired skills.
- Users can select their study time and learning duration.
- Users can clear the form if needed.
- On successful submission, the application validates the data and prepares a structured user profile.
- The structured profile is passed to Step 2: Input Validation and Processing.

## 8. Data Structure

After successful submission, the user input should be organized in the following structure:

```json
{
  "full_name": "Student Name",
  "career_goal": "Data Analyst",
  "experience_level": "Beginner",
  "current_skills": ["Python basics", "SQL basics"],
  "skills_to_learn": ["Pandas", "Excel", "Power BI"],
  "study_time": "2 hours per day",
  "learning_duration": "2 months",
  "preferred_learning_method": "Hands-on coding"
}
```

The values above are sample data, not real user information.

## 9. Privacy and Security

- Collect only the information needed to generate the learning path.
- Do not request passwords or unnecessary personal information.
- Do not expose submitted user data in public logs.
- Use secure handling when transmitting data to an AI service.
- Obtain appropriate authorization before sending data to connected external services.

## 10. Design Requirements

- Modern and professional appearance
- Clean typography and consistent spacing
- Accessible labels and readable colors
- Simple navigation
- Responsive form layout
- Clear success and error messages
- Consistent branding throughout the application

## 11. Acceptance Criteria

Step 1 is complete when:

- All required fields are displayed.
- Users can enter or select the requested information.
- Required fields are validated.
- Custom career goals can be entered.
- The form produces a structured user profile after successful submission.
- The profile can be passed to the next workflow step.
- The form works on desktop and mobile screens.

## 12. Project Workflow Position

User Input
→ Input Validation
→ MCP Integration
→ AI Roadmap Generation
→ Learning Path Display
→ Dashboard and Progress Tracking

## 13. Future Enhancements

- User account and login support
- Saving multiple learning paths
- Downloading roadmaps as PDF
- Recommended learning resources
- Daily reminders
- Progress tracking and completion reports

## 14. Deliverable

A functional, responsive user input page that collects the information necessary to generate a personalized AI learning path.
