# TESTING.md
# AI Learning Path Generator — Verification & Test Log

This document records the formal test cases and test execution results across all implemented milestones:
- **Phase 1:** User Input Form & Responsive Design
- **Phase 2:** Input Validation & Profile Normalization
- **Phase 3:** MCP Tool Diagnostics & Architecture Inspection
- **Phase 4:** AI Personalized Roadmap Generation
- **Phase 5:** Learning Path Interactive Display & Print/Export
- **Phase 6:** Real-time Progress Tracking & Habit Dashboard

---

## 1. Test Suite Summary

| Test ID | Category | Scenario Description | Expected Outcome | Status |
|---|---|---|---|---|
| **TC-01** | Validation | Submit complete valid form | 200 OK, structured JSON profile rendered | **PASS** |
| **TC-02** | Validation | Missing required full name | Field highlighted with `.is-invalid`, error in summary | **PASS** |
| **TC-03** | Validation | Input containing only whitespace | Trim check fails; prompt shown | **PASS** |
| **TC-04** | Conditional UI | Select "Other" without custom goal | Prompts for custom career goal | **PASS** |
| **TC-05** | Conditional UI | Select "Other" with custom goal | Custom goal assigned as `career_goal` in profile | **PASS** |
| **TC-06** | Data Processing | Skills formatted as comma/newline list | Converted to deduplicated array of clean strings | **PASS** |
| **TC-07** | Reset Action | Click "Clear Form" button | All inputs and validation states cleanly reset | **PASS** |
| **TC-08** | Preset Demos | Load Demo Preset (e.g. Data Analyst, AI Engineer) | Auto-fills all fields and updates hour calculations | **PASS** |
| **TC-09** | Skill Chips | Click quick skill chip (e.g. `+ Python`, `+ PyTorch`) | Appends skill neatly with comma separation | **PASS** |
| **TC-10** | Roadmap Engine | Generate roadmap for Data Analyst (2 mos, 2 hrs/day) | Synthesizes 8 weekly modules, ~112 hours total | **PASS** |
| **TC-11** | Roadmap Engine | Custom goal roadmap (e.g. Autonomous Vehicle AI) | Synthesizes customized weekly curriculum & capstone | **PASS** |
| **TC-12** | Interactive UI | Toggle topic checkbox in weekly module | Checkbox marks done, updates % progress and meter | **PASS** |
| **TC-13** | Persistence | State reload in browser (`localStorage`) | Preserves completed topics across page refreshes | **PASS** |
| **TC-14** | Export & Print | Export JSON & Print/Save PDF | Triggers clean JSON download and print layout | **PASS** |
| **TC-15** | MCP Diagnostics | Query MCP Tool health check modal | Modal displays live protocol, tool list, and JSON status | **PASS** |

---

## 2. Test Execution Details

### TC-10: 8-Week Roadmap Generation Test
- **Input:**
  - Name: `Alex Morgan`
  - Career Goal: `Data Analyst`
  - Experience: `Beginner`
  - Current Skills: `Python basics, SQL`
  - Skills to Learn: `Pandas, Power BI, Statistics, Tableau`
  - Daily Study Time: `2 hours`
  - Duration: `2 months`
- **Output:**
  - Status: 200 OK
  - Total Weeks: 8
  - Total Hours: 112 hours
  - Weekly Modules: 8 modules with objectives, topic checkboxes, hands-on exercises, and weekly mini-projects.
  - Result: **PASS**

### TC-11: Custom Goal Curriculum Test
- **Input:**
  - Career Goal: `Other`
  - Custom Career Goal: `Autonomous Vehicle AI Engineer`
  - Duration: `3 months`
  - Daily Study Time: `3 hours`
- **Output:**
  - Status: 200 OK
  - Profile: `"career_goal": "Autonomous Vehicle AI Engineer"`
  - Total Weeks: 12
  - Total Hours: 252 hours
  - Capstone: `Enterprise-Ready Autonomous Vehicle AI Engineer Portfolio Project`
  - Result: **PASS**
