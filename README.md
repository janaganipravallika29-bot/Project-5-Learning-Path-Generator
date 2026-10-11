# AI Learning Path Generator
> **MCP Mega Workshop — Project 5**  
> An enterprise-grade, personalized AI learning roadmap platform that analyzes user skill gaps, schedule bandwidth, and career targets to synthesize tailored week-by-week curriculums.

---

## ✨ Features & Architecture

### 1. Phase 1 & 2: User Input & Intelligent Profile Processing
- **9 Input Dimensions:** Full Name, Career Goal, Custom Goal (dynamic), Experience Level, Current Skills, Skills to Learn, Daily Study Time, Target Duration, and Preferred Learning Method.
- **Quick Demo Presets:** 1-click loading for *Data Analyst*, *Full Stack Developer*, *AI/ML Engineer*, and *Cybersecurity Analyst*.
- **Interactive Skill Chips:** Click-to-add chips for high-demand tools (`+ Python`, `+ SQL`, `+ PyTorch`, `+ Docker`, etc.).
- **Live Estimation Engine:** Real-time calculation of total learning hours based on daily study time and target duration.
- **Strict Validation:** Form sanitization, whitespace rejection, error summary banner, and field-level hints.
- **Data Contract:** Normalized user profile conforming to `PRD.md Section 8`.

### 2. Phase 3: MCP Tool Integration & Diagnostics
- **Protocol:** Model Context Protocol (MCP) compliant architecture.
- **Tools:** `profile_analyzer`, `roadmap_synthesizer`, and `progress_tracker`.
- **Diagnostics Inspector:** In-app MCP Modal displaying protocol handshake and live health telemetry from `/api/health`.

### 3. Phase 4 & 5: AI Roadmap Generation & Interactive Display
- **Curriculum Engine:** Dynamically calculates total weeks, allocates topic hours, and scaffolds weekly stages from fundamentals to advanced patterns.
- **Weekly Modules:** Features collapsible accordions, topic objectives, hands-on coding exercises, and weekly mini-projects.
- **Interactive Checklist:** Clickable checkboxes for every topic item.
- **Daily Study Breakdown:** Pedagogical routine dividing time between theory, hands-on building, and review.
- **Capstone Project:** Portfolio-ready final project tailored to the specific role.
- **Export Capabilities:** 1-click "Export JSON" and clean print/PDF layout.

### 4. Phase 6: Progress Tracking & Habit Dashboard
- **Live Metric Counters:** Completed tasks, remaining tasks, hours invested, and current milestone stage.
- **Persistent Storage:** Checkbox completions are saved automatically in `localStorage`.
- **Interactive Habit View:** Clean summary table displaying upcoming module milestones.

---

## 🚀 Quickstart Guide

### 1. Prerequisites
Ensure Python is installed on your machine:
```bash
python --version
```

### Option A: Python Flask Backend (Recommended)
1. Install dependencies:
   ```bash
   python -m pip install flask python-dotenv requests
   ```
2. Start the server:
   ```bash
   python app.py
   ```
3. Open in browser: `http://127.0.0.1:5000/`

### Option B: VS Code Live Server (Static Mode)
1. Right-click `index.html` (or `templates/index.html`) in VS Code.
2. Click **Open with Live Server** (`http://127.0.0.1:5500/`).
3. The application features built-in CORS resolution and a client-side roadmap fallback engine that works 100% out-of-the-box in static mode!


---

## 📂 Project Structure
```text
Project 5 — Learning Path Generator/
├── app.py                  # Flask backend (REST API & Curriculum Generator)
├── static/
│   ├── css/
│   │   └── style.css       # Design system tokens, responsive layout, animations
│   └── js/
│       └── app.js          # Tab routing, form validation, presets, checklist state
├── templates/
│   └── index.html          # Semantic HTML with tabs, modals, and roadmap views
├── DESIGN.md               # UI design specification & tokens (preserved)
├── PRD.md                  # Product Requirements Document (preserved)
├── PHASES.md               # Development phase checklist (preserved)
├── MASTER_PROMPT.md        # Complete workshop instructions & rules
├── TESTING.md              # Formal test cases (TC-01 through TC-15)
├── SUBMISSION.md           # Workshop evaluation criteria checklist
├── .env.example            # Environment variables template
└── .gitignore              # Version control ignore list
```

---

## 🧪 Testing Endpoints

### Health & MCP Diagnostic Check:
```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/health" -Method Get
```

### Direct Roadmap Generation API:
```powershell
$body = @{
  full_name = "Alex Morgan"
  career_goal = "Data Analyst"
  experience_level = "Beginner"
  current_skills = "Python, SQL"
  skills_to_learn = "Pandas, Power BI, Statistics"
  study_time = "2 hours"
  learning_duration = "2 months"
  preferred_learning_method = "Hands-on coding"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/api/generate-roadmap" -Method Post -ContentType "application/json" -Body $body
```
