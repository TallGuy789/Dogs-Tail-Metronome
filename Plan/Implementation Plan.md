<!-- copilot:ignore -->
# Dog's Tail Implementation Plan

This document outlines a step-by-step, incremental plan for building the Dog's Tail metronome app. Each step builds on the previous, ensuring maintainability, early feedback, and a smooth development process.

---

## 1. Project Initialization & Tooling

1.1. **Initialize the Project**
- Set up a new Vue.js project (using Vue CLI or Vite).
- Configure the project for JavaScript (not TypeScript).
- Initialize Git and connect to Azure DevOps repo.

1.2. **Basic Tooling**
- Add ESLint and Prettier for linting and formatting.
- Add `.editorconfig` with tab indentation.
- Set up unit testing (e.g., Jest or Vue Test Utils).
- Add a basic CI/CD pipeline in Azure DevOps (run lint, tests).

1.3. **PWA Setup**
- Add PWA support (e.g., with Vue CLI PWA plugin or Vite PWA).
- Configure manifest and service worker for offline support.

---

## 2. Core Application Structure

2.1. **Basic Layout**
- Implement a mobile-first, responsive layout.
- Create placeholder components: Metronome, Controls, AdvancedOptions, etc.

2.2. **State Management**
- Set up a simple state management solution (Vuex, Pinia, or Vue 3 composition API).
- Implement local storage integration for settings persistence.

---

## 3. Core Metronome Functionality

3.1. **Start/Stop Button**
- Implement the start/stop button to control the metronome.

3.2. **BPM Control**
- Add numeric input for BPM (1–200).
- Add slider for BPM, linked to numeric input.
- Implement mobile-only buttons for fast/slow BPM adjustment.

3.3. **Beats Per Measure**
- Add input for beats per measure (1–24, default 4).

3.4. **Metronome Engine**
- Implement the timing engine to generate beats at the specified BPM and beats per measure.

---

## 4. Advanced Beat Features

4.1. **Accent First Beat**
- Add option to accent the first beat (default true).

4.2. **Random Beat Mute**
- Add toggle for random beat mute.
- Add controls for mute percentage (0–100%) and delay (measures before mute starts).
- Display current mute percentage when active.

4.3. **Tap Tempo**
- Add a tap button to set BPM by tapping.

---

## 5. Visual & Audio Enhancements

5.1. **Background Color Cycling**
- Add dropdown to select color sequences for background cycling with each beat.

5.2. **Advanced Options Page**
- Add page for advanced audio settings:
  - Set pitch/duration for accent, main, and subdivision beats.

5.3. **Off Beat Option**
- Add 'Off Beat' toggle (default off).
- Implement TTS for 'on beat', fade in/out for 'off beat' tick.
- Add selector for off beat type ('1/4', '2/4', etc.).
- Add delay control for off beat fade-in.

---

## 6. Technical & Quality Features

6.1. **Local Storage**
- Ensure all settings are saved to and loaded from local storage.

6.2. **Testing**
- Write unit tests for all core logic and components.
- Add tests for edge cases (e.g., BPM limits, mute logic).

6.3. **Linting & Formatting**
- Enforce linting and formatting in CI/CD.

6.4. **Responsive Design**
- Test and refine layout for both desktop and mobile.

---

## 7. Deployment & Documentation

7.1. **Azure Static Web App Deployment**
- Set up deployment to Azure Static Web Apps via CI/CD.

7.2. **Documentation**
- Update README with setup, usage, and contribution guidelines.

7.3. **Final QA**
- Manual testing on desktop and Android devices.
- Verify PWA installability and offline support.

---

## 8. Optional/Polish

8.1. **Accessibility**
- Ensure controls are accessible (keyboard, screen reader).

8.2. **Performance Optimization**
- Optimize audio timing and UI responsiveness.

8.3. **User Feedback**
- Add basic error handling and user feedback for invalid inputs.

---

### Reasoning for Order

- Tooling and CI/CD are first to ensure code quality and fast feedback.
- Core metronome and controls are prioritized for early functional value.
- Advanced and secondary features are layered on a stable foundation.
- Testing, deployment, and polish are ongoing but formalized at the end.