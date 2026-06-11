# NexEngix Application Documentation

This document contains a comprehensive overview of the NexEngix application, including its core files, their purpose, known issues, and a compilation of the typical system prompts and workflows involved in its operation.

## Source Code & Purpose

Below are the primary source files and their intended functional purpose within the application.

### `src/components/views/DashboardView.tsx`
**Purpose**: Acts as the main landing dashboard for the user. It aggregates various metrics like "Neural Streak", latest objectives, system architecture status, and predictive analytics data into a concentrated, high-density widget layout.

### `src/components/views/InterviewView.tsx`
**Purpose**: An interactive mock AI interview environment. Features a simulated AI interviewer, performance scoring, transcription simulation, and real-time feedback elements designed for engineering and system design interviews.

### `src/components/views/FocusView.tsx`
**Purpose**: A deep work and Pomodoro timer module. Includes focus tracking, cognitive load simulation, and audio/atmosphere controls to maintain flow-state during intensive coding or study sessions.

### `src/components/views/RoadmapView.tsx`
**Purpose**: An adaptive engineering syllabus and skill tree. It visualizes the user's progress through various technical milestones, tracking proficiency across different domains (e.g., Distributed Systems, Cloud-Native Security).

### `src/components/views/InfrastructureView.tsx`
**Purpose**: Simulates an enterprise-grade infrastructure map. Visually represents a multi-cloud mesh with nodes and load balancers, providing mock real-time telemetry (latency, throughput) and diagnostic alerts.

### `src/components/views/AnalyticsView.tsx`
**Purpose**: Post-session performance breakdown. It analyzes the results of mock tests, highlighting correct/incorrect answers, success distribution, and provides "AI Explainer" breakdowns for each question.

### `src/components/views/MockTestView.tsx`
**Purpose**: A dedicated test-taking environment. It features a question grid, timer, and multiple-choice question layout, mimicking standard certification exam interfaces.

### `src/components/views/DevModeView.tsx`
**Purpose**: A simulated kernel interaction mode and "Danger Zone". Allows the user to view raw JSON representation of internal state and perform a simulated "Hard Reset" of the system.

### `src/components/views/InitProfileView.tsx`
**Purpose**: The onboarding flow. Captures user career aspirations and target certifications, progressing them into the NexEngix ecosystem.

### `src/components/views/PredictiveView.tsx`
**Purpose**: Career trajectory predictions. Simulates forecasts for university placements and matches the user with potential tier-1 hiring firms based on computed "CBT" scores.

---

## Known Bugs & Errors

- **Mobile Responsiveness**: Some complex grid layouts (like `InfrastructureView` and `DashboardView`) may cause horizontal scrolling on narrow viewports due to fixed min-widths.
- **Chart Scalability**: The hardcoded SVG rings in the `AnalyticsView` and `FocusView` do not dynamically scale to all container sizes flawlessly.
- **State Hydration**: The app relies on mock static data in each view. Switching views does not persist state across components (e.g., answers selected in `MockTestView` reset when navigating away).
- **Audio Overrides**: The audio control sliders in the `FocusView` are UI only and do not connect to a Web Audio API instance.
- **Scroll Behavior**: `MockTestView` question grid scroll region could conflict with global document scrolling depending on the browser.
- **Unused Props Warning Warnings**: If the React linter is configured very strictly, some standalone components might issue warnings regarding unused properties depending on user interaction models defined during compilation. 

---

## Compiled Prompts & Interactive Directives

The NexEngix application is designed with several conceptual prompts indicating user flow. While not raw LLM prompts, these simulate the intended UX logic, mimicking generative commands:

1. **Initialization Prompt**: `"Initialize Cognitive Profile"` - Triggered when the user defines their target seniority and certifications.
2. **Career Simulation Prompt**: `"Predictive Intelligence Query: Simulate high-velocity career trajectories based on CBT vectors."`
3. **Session Interruption Prompt**: `"System Override: Active. Initialize New Node?"` - Used in the `DevModeView` to mimic bypassing restrictions.
4. **Analysis Directive**: `"Diagnostic Session #4402 - Compute architectural knowledge variance."`
5. **Interview Follow-Up Prompt**: `"In that Raft implementation, how would you handle the 'Thundering Herd' problem during a leader re-election phase across high-latency links?"` - An example simulated AI prompt used in the Interview module.
