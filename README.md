![Playwright](https://img.shields.io/badge/Playwright-282121?style=for-the-badge&logo=playwright&logoColor=45ba4b)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Status](https://img.shields.io/badge/Status-In_Progress-orange?style=for-the-badge)

---

# Playwright Test Automation Project - Toolshop

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Tech Stack](#️-tech-stack)
4. [Project Structure](#-project-structure)
5. [Prerequisites](#-prerequisites)
6. [Getting Started](#-getting-started)
7. [Learning Objectives](#-learning-objectives)
8. [Quality Assurance (RTM)](#-quality-assurance)

## 📖 Overview

This repository features a robust test automation framework for the "Toolshop" demo website. Built with Playwright and TypeScript, it implements industry best practices for modern E2E testing. The primary goal of this project is to serve as a practical and scalable example of how to structure a UI Automation (End-to-End) project. It focuses on code clarity, maintainability, and scalability by leveraging design patterns such as the **Page Object Model (POM)** and Playwright **Fixtures** for efficient dependency management.

Tests are executed against a demo environment, simulating real user interactions to ensure the quality and correct behavior of the web application.

## Reference Repositories:

- learning-playwright-5911873: [Link](https://github.com/LinkedInLearning/learning-playwright-5911873.git)
- playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224: [Link](https://github.com/LinkedInLearning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224.git)

---

## ✨ Key Features

- **Robust Testing Framework**: Built on Playwright and TypeScript to leverage static typing and enhance code quality.
- **Page Object Model (POM) Design Pattern**:
  - Clear separation between page logic (`src/po/pages`), reusable components (`src/po/components`), and test cases.
  - Improves maintainability and eliminates code duplication.
- **Playwright Fixtures**:
  - Dependency injection of Page Object instances directly into tests (`src/po/tests/fixtures.ts`).
  - Significantly reduces boilerplate code and centralizes object creation.
- **Continuous Integration (CI) via GitHub Actions**:
  - Automated workflow (`playwright.yml`) triggered on every `push` and `pull request` to the main branch.
  - Supports manual execution via `workflow_dispatch`.
- **Cross-Browser Testing**:
  - Parallel execution across multiple browsers (`Chromium` and `Firefox`) to ensure compatibility.
- **CI Optimization**:
  - Uses `npm ci` for faster, deterministic installations.
  - Implemented **caching for Playwright browsers**, drastically reducing execution times in the pipeline.
- **Automated Test Reporting**:
  - Generates comprehensive Playwright HTML reports.
  - Automatic publishing of reports as GitHub Actions artifacts, with a 30-day retention period for analysis.

---

## 🛠️ Tech Stack

| Area                    | Technology     |
| ----------------------- | -------------- |
| **Language**            | TypeScript     |
| **E2E Framework**       | Playwright     |
| **Runtime Environment** | Node.js (v22)  |
| **Package Manager**     | npm            |
| **CI/CD**               | GitHub Actions |

---

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: Version `22.x` or higher is recommended. Download it from [nodejs.org](https://nodejs.org/).
- **NPM**: Usually bundled with Node.js.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/dacanass/toolshop-pw.git](https://github.com/dacanass/toolshop-pw.git)
   cd toolshop-pw
   ```

2. **Install dependencies:**
   It is recommended to use `npm ci` to ensure exact versions from the `package-lock.json` file are installed.

   ```bash
   npm ci
   ```

3. **Install Playwright browsers:**
   This command downloads the necessary browsers to run the tests.

   ```bash
   npx playwright install --with-deps
   ```

4. **Run the tests:**
   This command executes all tests across all configured browsers.

   ```bash
   npx playwright test --config=src/config/playwright.config.ts
   ```

   - To run on a specific browser (e.g., `chromium`):
     ```bash
     npx playwright test --config=src/config/playwright.config.ts --project=chromium
     ```

5. **View Test Reports:**
   Once execution is finished, you can open the HTML report to see detailed results.
   ```bash
   npx playwright show-report
   ```

---

## 🎯 Learning Objectives

This project is designed as a guide and practice ground for:

- ✅ **Effective Page Object Model implementation** for scalable frameworks.
- ✅ **Mastering Playwright Fixtures** for dependency injection and boilerplate reduction.
- ✅ **Setting up CI/CD pipelines from scratch** with GitHub Actions, including jobs, matrices, and artifacts.
- ✅ **Implementing caching strategies** to optimize Continuous Integration runtimes.
- ✅ **Writing clean, readable, and maintainable E2E tests** following Playwright and TypeScript best practices.
- ✅ **Understanding and solving cross-browser testing challenges** in an automated environment.

## 🧪 Quality Assurance

To ensure full coverage of the ToolShop requirements, I maintain a live traceability matrix:

- [View Requirements Traceability Matrix (RTM)](./docs/RTM.md)

## 📂 Project Structure

This project follows a modular **Page Object Model (POM)** pattern to ensure scalability and maintainability.

```text
src/
├── api-controllers/    # API Request wrappers and endpoint handlers
├── config/             # Environment variables and Playwright configurations
├── lib/                # Shared utilities and core libraries
│   └── datafactory/    # Test data generation (Seeding & Mocking)
├── po/                 # Page Object Model (POM)
│   ├── components/     # Reusable UI elements (Headers, Navbars, Modals)
│   ├── pages/          # Page-specific locators and business actions
│   └── utils/          # UI-specific helper functions (Waiters, Selectors)
└── tests/              # Test Suite implementation
    ├── api/            # Integration and REST API test cases
    └── gui/            # End-to-End (E2E) user flow tests
```
