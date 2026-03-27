---
name: "\U0001F9EA Test Case"
about: Detailed definition of an individual test scenario.
title: "[TC-XXX]: Concise and descriptive title"
labels: test-case
assignees: ''

---

### 🔗 Traceability
- **Parent User Story:** # [Insert US Issue Number]
- **Priority:** [Critical / High / Medium / Low]
- **Test Type:** [Functional / UI / API / Regression]

### 📋 Pre-conditions
*What needs to happen before this test can start?*
1. User is navigated to the [Page Name].
2. User is authenticated with [Role/User Type].
3. Data state: [e.g., Cart is empty / Product 'X' is in stock].

### 🚀 Test Steps
1. [Step 1: Action -> Expected Result]
2. [Step 2: Action -> Expected Result]
3. [Step 3: Action -> Expected Result]

### 🎯 Expected Result
*Describe the successful end state of this test.*
- The system should [behavior] and display [message/UI element].

### 🤖 Test Data & Automation
- **Test Data:** { "email": "test@example.com", "product": "Pliers" }
- **Automation Status:**
  - [ ] Automated with Playwright
  - [ ] Script Path: `tests/e2e/auth.spec.ts`
  - [ ] Tags: `@smoke`, `@regresion`

### 📌 Additional Notes
- *Mention any specific browser constraints or edge cases to watch for.*
