/**
 * PathForge AI — Interactive Application Controller
 * Handles Navigation, Presets, Form Validation, AI Roadmap Engine,
 * Real-time Progress Tracking, and LocalStorage State
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
  const form = document.getElementById('learning-path-form');
  const careerGoalSelect = document.getElementById('career_goal');
  const customGoalContainer = document.getElementById('custom-goal-container');
  const customGoalInput = document.getElementById('custom_career_goal');
  const clearBtn = document.getElementById('clear-btn');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const btnArrow = document.getElementById('btn-arrow');
  
  const studyTimeSelect = document.getElementById('study_time');
  const durationSelect = document.getElementById('learning_duration');
  const studyEstimateText = document.getElementById('study-estimate-text');

  const errorSummary = document.getElementById('error-summary');
  const errorList = document.getElementById('error-list');
  const successBanner = document.getElementById('success-banner');
  const resultSection = document.getElementById('profile-result-section');
  const jsonPreview = document.getElementById('json-preview');

  // Navigation Tabs
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const btnTabRoadmap = document.getElementById('btn-tab-roadmap');
  const btnTabDashboard = document.getElementById('btn-tab-dashboard');
  const roadmapBadge = document.getElementById('roadmap-badge');

  // Preset Dropdown
  const presetDropdownBtn = document.getElementById('preset-dropdown-btn');
  const presetMenu = document.getElementById('preset-menu');
  const btnHeroLoadDemo = document.getElementById('btn-hero-load-demo');
  const btnHeroGetStarted = document.getElementById('btn-hero-get-started');

  // MCP Diagnostics Modal
  const mcpDiagnosticsBtn = document.getElementById('mcp-diagnostics-btn');
  const mcpModal = document.getElementById('mcp-modal');
  const mcpModalClose = document.getElementById('mcp-modal-close');
  const mcpModalCloseBtn = document.getElementById('mcp-modal-close-btn');
  const mcpLiveJson = document.getElementById('mcp-live-json');

  // Global State
  let currentRoadmapData = null;
  const STORAGE_KEY = 'pathforge_ai_progress_v2';

  // =========================================================================
  // 1. Tab Navigation System
  // =========================================================================
  function switchTab(tabId) {
    tabContents.forEach(tab => {
      tab.classList.remove('active');
      tab.style.display = 'none';
    });
    tabBtns.forEach(btn => btn.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    const activeBtn = document.querySelector(`.nav-tab-btn[data-tab="${tabId}"]`);

    if (activeTab) {
      activeTab.style.display = 'block';
      activeTab.classList.add('active');
    }
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.disabled) {
        switchTab(btn.getAttribute('data-tab'));
      }
    });
  });

  document.getElementById('view-roadmap-direct-btn')?.addEventListener('click', () => {
    switchTab('tab-roadmap');
  });

  document.getElementById('btn-modify-goals')?.addEventListener('click', () => {
    switchTab('tab-form');
    document.getElementById('form-section-anchor')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btn-go-to-dashboard')?.addEventListener('click', () => {
    switchTab('tab-dashboard');
  });

  // Hero Smooth Scroll
  btnHeroGetStarted?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('form-section-anchor')?.scrollIntoView({ behavior: 'smooth' });
  });

  // =========================================================================
  // 2. Dynamic Study Time Calculation Widget
  // =========================================================================
  const durationWeeks = {
    '2 weeks': 2,
    '1 month': 4,
    '2 months': 8,
    '3 months': 12,
    '6 months': 24
  };

  const hoursPerDay = {
    '30 minutes': 0.5,
    '1 hour': 1.0,
    '2 hours': 2.0,
    '3 hours': 3.0,
    '4 or more hours': 4.0
  };

  function updateStudyEstimate() {
    const durVal = durationSelect.value;
    const timeVal = studyTimeSelect.value;
    const weeks = durationWeeks[durVal] || 8;
    const hours = hoursPerDay[timeVal] || 2.0;
    const totalHours = Math.round(weeks * 7 * hours);

    studyEstimateText.textContent = `~${totalHours} hours total (${weeks} weeks @ ${hours}h/day)`;
  }

  studyTimeSelect.addEventListener('change', updateStudyEstimate);
  durationSelect.addEventListener('change', updateStudyEstimate);

  // =========================================================================
  // 3. Quick Demo Presets
  // =========================================================================
  const PRESETS = {
    'data-analyst': {
      full_name: 'Ananya Sharma',
      career_goal: 'Data Analyst',
      experience_level: 'Beginner',
      current_skills: 'Python basics, SQL fundamentals, Excel, Spreadsheets',
      skills_to_learn: 'Pandas, NumPy, Power BI, Data Visualization, Statistical Analysis',
      study_time: '2 hours',
      learning_duration: '2 months',
      preferred_learning_method: 'Hands-on coding'
    },
    'software-developer': {
      full_name: 'David Kim',
      career_goal: 'Software Developer',
      experience_level: 'Intermediate',
      current_skills: 'JavaScript, HTML5, CSS3, Git, REST APIs',
      skills_to_learn: 'TypeScript, React, Node.js, PostgreSQL, Docker, Testing with Jest',
      study_time: '3 hours',
      learning_duration: '3 months',
      preferred_learning_method: 'Projects'
    },
    'ai-engineer': {
      full_name: 'Rohan Verma',
      career_goal: 'AI/ML Engineer',
      experience_level: 'Beginner',
      current_skills: 'Python, Linear Algebra, Object-Oriented Programming',
      skills_to_learn: 'PyTorch, Scikit-Learn, Deep Learning, Computer Vision, MLOps, Model Deployment',
      study_time: '3 hours',
      learning_duration: '3 months',
      preferred_learning_method: 'Hands-on coding'
    },
    'cybersecurity': {
      full_name: 'Priya Nair',
      career_goal: 'Cybersecurity Analyst',
      experience_level: 'Complete Beginner',
      current_skills: 'Computer Basics, Operating Systems, Command Line',
      skills_to_learn: 'Network Protocols, Linux Security, Wireshark, SIEM Tools, Ethical Hacking Basics',
      study_time: '2 hours',
      learning_duration: '2 months',
      preferred_learning_method: 'Practice exercises'
    }
  };

  function applyPreset(presetKey) {
    const data = PRESETS[presetKey];
    if (!data) return;

    document.getElementById('full_name').value = data.full_name;
    careerGoalSelect.value = data.career_goal;
    customGoalContainer.classList.remove('active');
    document.getElementById('experience_level').value = data.experience_level;
    document.getElementById('current_skills').value = data.current_skills;
    document.getElementById('skills_to_learn').value = data.skills_to_learn;
    studyTimeSelect.value = data.study_time;
    durationSelect.value = data.learning_duration;
    document.getElementById('preferred_learning_method').value = data.preferred_learning_method;

    updateStudyEstimate();
    clearAllErrors();
    switchTab('tab-form');
    document.getElementById('form-section-anchor')?.scrollIntoView({ behavior: 'smooth' });
  }

  presetDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    presetMenu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    presetMenu?.classList.remove('show');
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const presetKey = item.getAttribute('data-preset');
      applyPreset(presetKey);
    });
  });

  btnHeroLoadDemo?.addEventListener('click', () => {
    applyPreset('data-analyst');
  });

  // =========================================================================
  // 4. Quick Skill Chips
  // =========================================================================
  document.querySelectorAll('.skill-chip-pill, .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const textarea = document.getElementById(targetId);
      const skillName = btn.textContent.replace('+', '').trim();

      const currentVal = textarea.value.trim();
      if (!currentVal) {
        textarea.value = skillName;
      } else {
        const items = currentVal.split(',').map(s => s.trim().toLowerCase());
        if (!items.includes(skillName.toLowerCase())) {
          textarea.value = currentVal + ', ' + skillName;
        }
      }
      clearFieldError(textarea);
    });
  });

  // =========================================================================
  // 5. Dynamic "Other" Career Goal Handling
  // =========================================================================
  careerGoalSelect.addEventListener('change', () => {
    if (careerGoalSelect.value === 'Other') {
      customGoalContainer.classList.add('active');
      customGoalInput.setAttribute('required', 'true');
      customGoalInput.focus();
    } else {
      customGoalContainer.classList.remove('active');
      customGoalInput.removeAttribute('required');
      customGoalInput.value = '';
      clearFieldError(customGoalInput);
    }
  });

  // =========================================================================
  // 6. Clear Form
  // =========================================================================
  clearBtn.addEventListener('click', () => {
    if (confirm('Clear all form fields and start fresh?')) {
      form.reset();
      customGoalContainer.classList.remove('active');
      customGoalInput.removeAttribute('required');
      clearAllErrors();
      successBanner.style.display = 'none';
      resultSection.style.display = 'none';
      updateStudyEstimate();
      document.getElementById('full_name').focus();
    }
  });

  // Real-time error removal
  form.querySelectorAll('input, select, textarea').forEach(control => {
    control.addEventListener('input', () => clearFieldError(control));
    control.addEventListener('change', () => clearFieldError(control));
  });

  function clearFieldError(control) {
    control.classList.remove('is-invalid');
    const errSpan = document.getElementById(`${control.id}-error`);
    if (errSpan) {
      errSpan.textContent = '';
      errSpan.classList.remove('visible');
    }
    if (form.querySelectorAll('.is-invalid').length === 0) {
      errorSummary.style.display = 'none';
    }
  }

  function clearAllErrors() {
    errorSummary.style.display = 'none';
    errorList.innerHTML = '';
    form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    form.querySelectorAll('.field-error').forEach(el => {
      el.textContent = '';
      el.classList.remove('visible');
    });
  }

  function showErrors(errors) {
    clearAllErrors();
    const errorKeys = Object.keys(errors);
    if (errorKeys.length === 0) return;

    errorList.innerHTML = '';
    errorKeys.forEach(fieldId => {
      const message = errors[fieldId];
      const control = document.getElementById(fieldId);
      const errorSpan = document.getElementById(`${fieldId}-error`);

      if (control) control.classList.add('is-invalid');
      if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add('visible');
      }

      const li = document.createElement('li');
      li.textContent = message;
      errorList.appendChild(li);
    });

    errorSummary.style.display = 'flex';
    errorSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // =========================================================================
  // 7. Form Submission & AI Roadmap Generation
  // =========================================================================
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Client-side validation
    const clientErrors = {};
    const fullName = document.getElementById('full_name').value.trim();
    if (!fullName) {
      clientErrors['full_name'] = 'Full name is required and cannot be blank.';
    } else if (fullName.length < 2) {
      clientErrors['full_name'] = 'Full name must be at least 2 characters.';
    }

    const careerGoal = careerGoalSelect.value;
    if (!careerGoal) {
      clientErrors['career_goal'] = 'Please select a career goal.';
    } else if (careerGoal === 'Other') {
      const customGoal = customGoalInput.value.trim();
      if (!customGoal) {
        clientErrors['custom_career_goal'] = 'Please enter your custom career goal.';
      }
    }

    const experienceLevel = document.getElementById('experience_level').value;
    if (!experienceLevel) {
      clientErrors['experience_level'] = 'Please select your current experience level.';
    }

    const currentSkills = document.getElementById('current_skills').value.trim();
    if (!currentSkills) {
      clientErrors['current_skills'] = 'Current skills cannot be blank.';
    }

    const skillsToLearn = document.getElementById('skills_to_learn').value.trim();
    if (!skillsToLearn) {
      clientErrors['skills_to_learn'] = 'Skills to learn cannot be blank.';
    }

    const studyTime = studyTimeSelect.value;
    if (!studyTime) {
      clientErrors['study_time'] = 'Please select your daily study time.';
    }

    const learningDuration = durationSelect.value;
    if (!learningDuration) {
      clientErrors['learning_duration'] = 'Please select your learning duration.';
    }

    if (Object.keys(clientErrors).length > 0) {
      showErrors(clientErrors);
      return;
    }

    // Set Loading State
    clearAllErrors();
    submitBtn.disabled = true;
    btnText.textContent = 'Generating AI Roadmap...';
    btnSpinner.style.display = 'inline-block';
    btnArrow.style.display = 'none';
    successBanner.style.display = 'none';
    resultSection.style.display = 'none';

    const payload = {
      full_name: fullName,
      career_goal: careerGoal,
      custom_career_goal: customGoalInput.value.trim(),
      experience_level: experienceLevel,
      current_skills: currentSkills,
      skills_to_learn: skillsToLearn,
      study_time: studyTime,
      learning_duration: learningDuration,
      preferred_learning_method: document.getElementById('preferred_learning_method').value
    };

    try {
      const response = await fetch('/api/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) showErrors(data.errors);
        else showErrors({ server: data.message || 'Error occurred during generation.' });
        return;
      }

      currentRoadmapData = data;

      // Show Phase 2 Normalized JSON
      jsonPreview.textContent = JSON.stringify(data.profile, null, 2);
      resultSection.style.display = 'block';

      // Success notification
      successBanner.style.display = 'flex';
      document.getElementById('success-message-text').textContent =
        `Personalized roadmap generated for ${data.profile.full_name} (${data.profile.career_goal})! Switching to your interactive roadmap...`;

      // Enable and unlock Roadmap & Dashboard tabs
      btnTabRoadmap.disabled = false;
      btnTabDashboard.disabled = false;
      roadmapBadge.style.display = 'inline-block';

      // Render Roadmap & Dashboard UI
      renderRoadmap(data);
      renderDashboard(data);

      // Auto-switch to Roadmap tab
      setTimeout(() => {
        switchTab('tab-roadmap');
      }, 700);

    } catch (err) {
      console.error(err);
      showErrors({ network: 'Unable to reach backend server. Please verify app.py is running.' });
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Generate My Learning Path';
      btnSpinner.style.display = 'none';
      btnArrow.style.display = 'inline-block';
    }
  });

  // =========================================================================
  // 8. Render Roadmap (Phases 4 & 5)
  // =========================================================================
  function renderRoadmap(data) {
    const profile = data.profile;
    const roadmap = data.roadmap;

    // Header info
    document.getElementById('roadmap-role-badge').textContent = `${profile.career_goal} Track`;
    document.getElementById('roadmap-heading').textContent = `${profile.career_goal} Learning Roadmap`;
    document.getElementById('roadmap-meta-info').textContent =
      `Personalized for ${profile.full_name} • ${roadmap.total_weeks} Weeks • ${roadmap.daily_study_hours} hrs/day (${roadmap.total_estimated_hours} Total Hours) • ${profile.preferred_learning_method}`;

    // Skill pills
    const knownContainer = document.getElementById('known-skills-container');
    knownContainer.innerHTML = '';
    profile.current_skills.forEach(skill => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.textContent = skill;
      knownContainer.appendChild(pill);
    });

    const targetContainer = document.getElementById('target-skills-container');
    targetContainer.innerHTML = '';
    roadmap.skill_gaps.forEach(skill => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.textContent = `★ ${skill}`;
      targetContainer.appendChild(pill);
    });

    // Routine grid
    const routineGrid = document.getElementById('routine-grid');
    routineGrid.innerHTML = '';
    roadmap.study_routine.forEach(item => {
      const div = document.createElement('div');
      div.className = 'routine-item';
      div.innerHTML = `
        <div class="routine-time">${item.time_split}</div>
        <div class="routine-desc">${item.activity}</div>
      `;
      routineGrid.appendChild(div);
    });

    // Weekly Modules
    const modulesList = document.getElementById('weekly-modules-list');
    modulesList.innerHTML = '';

    const savedProgress = loadSavedProgress();

    roadmap.weekly_modules.forEach((mod, index) => {
      const card = document.createElement('div');
      card.className = `module-card ${index === 0 ? 'expanded' : ''}`;
      card.id = `module-card-${mod.week}`;

      // Topics list HTML
      let topicsHtml = '';
      mod.topics.forEach(topic => {
        const isDone = !!savedProgress[topic.id];
        topicsHtml += `
          <div class="topic-item ${isDone ? 'completed' : ''}" id="topic-item-${topic.id}">
            <input type="checkbox" class="topic-checkbox" id="${topic.id}" data-hours="${mod.estimated_hours / 3}" ${isDone ? 'checked' : ''}>
            <label for="${topic.id}" class="topic-text">${topic.title}</label>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="module-header" data-week="${mod.week}">
          <div class="module-title-wrap">
            <span class="module-week-tag">Week ${mod.week}</span>
            <span class="module-name">${mod.title.replace(`Week ${mod.week}: `, '')}</span>
          </div>
          <div class="module-meta-badges">
            <span class="module-hours-badge">~${mod.estimated_hours} hrs</span>
            <span class="module-expand-icon">▾</span>
          </div>
        </div>
        <div class="module-body">
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
            ${mod.summary} (${mod.recommended_approach})
          </p>
          <div class="topics-list">
            ${topicsHtml}
          </div>
          <div class="module-highlights">
            <div class="highlight-box exercise">
              <div class="highlight-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Hands-on Exercise
              </div>
              <div class="highlight-desc">${mod.hands_on_exercise}</div>
            </div>
            <div class="highlight-box project">
              <div class="highlight-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Weekly Mini-Project
              </div>
              <div class="highlight-desc">${mod.mini_project}</div>
            </div>
          </div>
        </div>
      `;

      modulesList.appendChild(card);
    });

    // Accordion toggle listeners
    document.querySelectorAll('.module-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('expanded');
      });
    });

    // Interactive Checkboxes
    document.querySelectorAll('.topic-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const itemRow = document.getElementById(`topic-item-${cb.id}`);
        if (cb.checked) {
          itemRow.classList.add('completed');
        } else {
          itemRow.classList.remove('completed');
        }
        saveTopicState(cb.id, cb.checked);
        updateProgressMetrics();
      });
    });

    // Capstone Project
    document.getElementById('capstone-title').textContent = roadmap.capstone_project.title;
    document.getElementById('capstone-desc').textContent = roadmap.capstone_project.deliverable;
    document.getElementById('capstone-impact').textContent = `Target Outcome: ${roadmap.capstone_project.impact}`;

    // Curated Resources
    const resGrid = document.getElementById('resources-grid');
    resGrid.innerHTML = '';
    roadmap.curated_resources.forEach(res => {
      const resItem = document.createElement('div');
      resItem.className = 'resource-item';
      resItem.innerHTML = `
        <span class="resource-title">${res.title}</span>
        <span class="resource-badge">${res.badge}</span>
      `;
      resGrid.appendChild(resItem);
    });

    updateProgressMetrics();
  }

  // =========================================================================
  // 9. Interactive Progress Metrics (Phase 6)
  // =========================================================================
  function updateProgressMetrics() {
    const allCheckboxes = document.querySelectorAll('.topic-checkbox');
    const total = allCheckboxes.length;
    if (total === 0) return;

    let checked = 0;
    let hoursDone = 0;

    allCheckboxes.forEach(cb => {
      if (cb.checked) {
        checked++;
        hoursDone += parseFloat(cb.getAttribute('data-hours') || '2');
      }
    });

    const percent = Math.round((checked / total) * 100);

    // Global meter
    document.getElementById('global-progress-percent').textContent = `${percent}%`;
    document.getElementById('global-progress-count').textContent = `${checked} of ${total} topics completed`;
    document.getElementById('global-progress-fill').style.width = `${percent}%`;

    // Dashboard stats
    document.getElementById('stat-completed-tasks').textContent = checked;
    document.getElementById('stat-remaining-tasks').textContent = total - checked;
    document.getElementById('stat-hours-invested').textContent = `${Math.round(hoursDone)} hrs`;

    // Current week calculation
    if (currentRoadmapData) {
      const weeksCount = currentRoadmapData.roadmap.total_weeks;
      const currentWeekNum = Math.min(Math.floor((checked / total) * weeksCount) + 1, weeksCount);
      document.getElementById('stat-current-week').textContent = `Week ${currentWeekNum}`;
    }
  }

  function saveTopicState(topicId, isCompleted) {
    const progress = loadSavedProgress();
    if (isCompleted) {
      progress[topicId] = true;
    } else {
      delete progress[topicId];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function loadSavedProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  // Reset Progress
  document.getElementById('btn-reset-progress')?.addEventListener('click', () => {
    if (confirm('Reset your completion checklist?')) {
      localStorage.removeItem(STORAGE_KEY);
      document.querySelectorAll('.topic-checkbox').forEach(cb => {
        cb.checked = false;
        const row = document.getElementById(`topic-item-${cb.id}`);
        if (row) row.classList.remove('completed');
      });
      updateProgressMetrics();
    }
  });

  // =========================================================================
  // 10. Dashboard Focus Table
  // =========================================================================
  function renderDashboard(data) {
    const container = document.getElementById('dashboard-tasks-table');
    if (!container) return;
    container.innerHTML = '';

    data.roadmap.weekly_modules.forEach(mod => {
      const modBox = document.createElement('div');
      modBox.style.cssText = 'padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); border-radius: 12px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;';
      modBox.innerHTML = `
        <div>
          <strong style="font-size: 0.95rem; color: var(--text-white);">Week ${mod.week}: ${mod.title.replace(`Week ${mod.week}: `, '')}</strong>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 3px;">${mod.hands_on_exercise}</p>
        </div>
        <span style="font-size: 0.775rem; font-weight: 800; color: var(--color-cyan-light); background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.3); padding: 0.25rem 0.65rem; border-radius: 9999px;">
          ~${mod.estimated_hours}h
        </span>
      `;
      container.appendChild(modBox);
    });
  }

  // =========================================================================
  // 11. PDF Print & JSON Export
  // =========================================================================
  document.getElementById('btn-print-roadmap')?.addEventListener('click', () => {
    document.querySelectorAll('.module-card').forEach(card => card.classList.add('expanded'));
    window.print();
  });

  document.getElementById('btn-download-json')?.addEventListener('click', () => {
    if (!currentRoadmapData) return;
    const jsonStr = JSON.stringify(currentRoadmapData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentRoadmapData.profile.full_name.replace(/\s+/g, '_')}_learning_roadmap.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // =========================================================================
  // 12. MCP Diagnostics Modal (Phase 3)
  // =========================================================================
  mcpDiagnosticsBtn?.addEventListener('click', async () => {
    mcpModal.style.display = 'flex';
    mcpLiveJson.textContent = 'Querying /api/health diagnostics...';
    try {
      const res = await fetch('/api/health');
      const healthData = await res.json();
      mcpLiveJson.textContent = JSON.stringify(healthData, null, 2);
    } catch {
      mcpLiveJson.textContent = 'Error connecting to /api/health endpoint.';
    }
  });

  const closeModal = () => { mcpModal.style.display = 'none'; };
  mcpModalClose?.addEventListener('click', closeModal);
  mcpModalCloseBtn?.addEventListener('click', closeModal);
  mcpModal?.addEventListener('click', (e) => {
    if (e.target === mcpModal) closeModal();
  });

  // Initial calculation check
  updateStudyEstimate();
});
