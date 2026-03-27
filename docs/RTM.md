# Requirement Traceability Matrix (RTM) - ToolShop Automation Project

**Project:** ToolShop E-commerce E2E & API Testing  
**Framework:** Playwright (TypeScript)  
**QA Architect:** Senior SDET Strategy  
**Coverage Target:** 100% Functional & Security AC Coverage

## 1. Traceability Table

| Module ID  | User Story ID | User Story Title    | Acceptance Criteria Ref           | Test Case ID                    | Test Method (UI/API) | Automation Tool | Coverage Status   |
| :--------- | :------------ | :------------------ | :-------------------------------- | :------------------------------ | :------------------- | :-------------- | :---------------- |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Valid credentials redirect        | TC-UI-AUTH-01 / TC-API-AUTH-01  | UI & API             | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Reject invalid password           | TC-UI-AUTH-02                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Reject non-existent email         | TC-API-AUTH-02                  | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Empty fields validation           | TC-UI-AUTH-03                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Format validation (user@com)      | **TC-UI-AUTH-06**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Case-insensitive email            | **TC-UI-AUTH-07**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | SQL Injection Sanitization        | TC-API-AUTH-05                  | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-01    | Secure User Login   | Password Max Char Limit           | **TC-UI-AUTH-08**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-02    | User Registration   | Valid fields creation             | TC-UI-AUTH-04                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-02    | User Registration   | Reject duplicate email            | TC-API-AUTH-03                  | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-02    | User Registration   | Password strength (Alpha-num)     | **TC-UI-AUTH-09**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-02    | User Registration   | Prevent Mass Assignment           | **TC-API-AUTH-06**              | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-02    | User Registration   | Auto-login on success             | TC-UI-AUTH-04                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-03    | Session Management  | Generate entropy token            | TC-API-AUTH-04                  | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-03    | Session Management  | Logout invalidates token          | TC-UI-AUTH-05                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-03    | Session Management  | Secure/HttpOnly Cookies           | **TC-API-AUTH-07**              | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-03    | Session Management  | Session expiry (30 mins)          | **TC-API-AUTH-08**              | API                  | Playwright      | **Fully Covered** |
| **MOD-01** | TS-AUTH-03    | Session Management  | Reset token expiration            | **TC-API-AUTH-09**              | API                  | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-01     | Product Catalog     | Exact text search                 | TC-UI-CAT-01                    | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-01     | Product Catalog     | Category filter limits            | TC-UI-CAT-02                    | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-01     | Product Catalog     | XSS Sanitization in search        | TC-API-CAT-05                   | API                  | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-01     | Product Catalog     | Mutually exclusive filters        | **TC-UI-CAT-06**                | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-02     | Paginated Browsing  | Dynamic page count                | TC-API-CAT-04                   | API                  | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-02     | Paginated Browsing  | Next/Prev navigation              | TC-UI-CAT-03                    | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-02     | Paginated Browsing  | Direct URL access (?page=3)       | **TC-UI-CAT-07**                | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-02     | Paginated Browsing  | Loading skeleton/spinner          | **TC-UI-CAT-08**                | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-03     | Product Details     | Render image / Fallback           | TC-UI-CAT-04                    | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-03     | Product Details     | Lazy loading images               | **TC-UI-CAT-09**                | UI                   | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-03     | Product Details     | 404 on invalid ID                 | TC-API-CAT-03                   | API                  | Playwright      | **Fully Covered** |
| **MOD-02** | TS-CAT-03     | Product Details     | Specs match DB source             | TC-API-CAT-01                   | API                  | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-01    | Shopping Cart       | Add product from catalog/PDP      | TC-UI-CART-01                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-01    | Shopping Cart       | Badge increments                  | TC-UI-CART-01                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-01    | Shopping Cart       | Reject invalid manual entries     | **TC-UI-CART-06**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-01    | Shopping Cart       | Max stock availability limit      | **TC-UI-CART-07**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-01    | Shopping Cart       | Floating-point precision ($39.98) | **TC-UI-CART-08**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-02    | Manage Quantities   | Real-time recalculation           | TC-UI-CART-02 / TC-API-CART-03  | UI & API             | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-02    | Manage Quantities   | Remove item / Badge update        | TC-UI-CART-03                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-03    | Cart Persistence    | Guest LocalStorage persistence    | **TC-UI-CART-09**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-03** | TS-CART-03    | Cart Persistence    | Clear cart resets subtotal        | TC-API-CART-05                  | API                  | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-01    | Checkout Flow       | Valid payment processes order     | TC-UI-CHCK-01 / TC-API-CHCK-01  | UI & API             | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-01    | Checkout Flow       | Empty cart block                  | TC-UI-CHCK-02                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-01    | Checkout Flow       | Expired card rejection            | TC-UI-CHCK-03                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-01    | Checkout Flow       | Price manipulation protection     | TC-API-CHCK-02                  | API                  | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-01    | Checkout Flow       | Debounce confirm button           | TC-UI-CHCK-05                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-02    | Payment Integration | Conditional logic (CC vs PayPal)  | **TC-UI-CHCK-06**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-03    | Invoice & Email     | PDF Invoice generation            | TC-API-CHCK-03                  | API                  | Playwright      | **Fully Covered** |
| **MOD-04** | TS-CHCK-03    | Invoice & Email     | Confirmation email < 60s          | **TC-API-CHCK-06**              | API                  | Playwright      | **Fully Covered** |
| **MOD-05** | TS-ACCT-01    | User Account        | Reverse chronological history     | TC-API-ACCT-01                  | API                  | Playwright      | **Fully Covered** |
| **MOD-05** | TS-ACCT-01    | User Account        | Detailed view expansion           | **TC-UI-ACCT-06**               | UI                   | Playwright      | **Fully Covered** |
| **MOD-05** | TS-ACCT-02    | Profile & Address   | Profile update / XSS Sanitization | TC-UI-ACCT-02 / TC-UI-ACCT-04   | UI                   | Playwright      | **Fully Covered** |
| **MOD-06** | TS-SUPP-01    | Customer Support    | Valid form submission             | TC-UI-SUPP-01 / TC-API-SUPP-01  | UI & API             | Playwright      | **Fully Covered** |
| **MOD-06** | TS-SUPP-02    | Message Routing     | AJAX / No page reload             | TC-UI-SUPP-05                   | UI                   | Playwright      | **Fully Covered** |
| **MOD-06** | TS-SUPP-03    | Bot Prevention      | Rate limiting & Honeypot          | TC-API-SUPP-02 / TC-API-SUPP-03 | API                  | Playwright      | **Fully Covered** |

## 2. Summary of Coverage

- **Total User Stories:** 17
- **Total Automated Tests:** 75 (Unified Base + Supplementary Suites)
- **Requirement Coverage:** 100%
- **Critical Path Status:** Green

---

_Document generated for ToolShop QA Governance Strategy._
