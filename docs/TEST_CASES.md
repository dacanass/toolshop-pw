# Master Test Case List - ToolShop Project

| Module ID  | User Story ID | Test Case ID   | Test Case title               | Test case description                                     | Test Method (UI/API) | Automation Path |
| :--------- | :------------ | :------------- | :---------------------------- | :-------------------------------------------------------- | :------------------- | :-------------- |
| **MOD-01** | TS-AUTH-01    | TC-UI-AUTH-01  | Successful Login              | Enter registered email/password and click Login.          | UI                   |                 |
| **MOD-01** | TS-AUTH-01    | TC-UI-AUTH-02  | Login Failure - Invalid Pwd   | Enter valid email with incorrect password.                | UI                   |
| **MOD-01** | TS-AUTH-01    | TC-UI-AUTH-03  | Frontend Validation - Empty   | Leave Email/Password blank and click Login.               | UI                   |
| **MOD-01** | TS-AUTH-02    | TC-UI-AUTH-04  | Registration Persistence      | Register new user and attempt to login with same creds.   | UI                   |
| **MOD-01** | TS-AUTH-03    | TC-UI-AUTH-05  | Session Logout                | Login, then click Logout and try to navigate to /account. | UI                   |
| **MOD-01** | TS-AUTH-01    | TC-API-AUTH-01 | POST /users/login - Valid     | Send valid email/password payload to login endpoint.      | API                  |
| **MOD-01** | TS-AUTH-01    | TC-API-AUTH-02 | POST /users/login - Unreg     | Send login request for an email not in the DB.            | API                  |
| **MOD-01** | TS-AUTH-02    | TC-API-AUTH-03 | POST /users/register - Dup    | Attempt to register an email that already exists.         | API                  |
| **MOD-01** | TS-AUTH-01    | TC-API-AUTH-04 | GET /users/me - Token Claims  | Use Bearer token from login to fetch profile.             | API                  |
| **MOD-01** | TS-AUTH-01    | TC-API-AUTH-05 | POST /users/login - SQLi      | Input `' OR 1=1 --` in email field via API payload.       | API                  |
| **MOD-02** | TS-CAT-01     | TC-UI-CAT-01   | Search - Exact Match          | Search for "Hammer" in the search bar.                    | UI                   |
| **MOD-02** | TS-CAT-01     | TC-UI-CAT-02   | Category Filtering            | Select "Hand Tools" checkbox in the sidebar.              | UI                   |
| **MOD-02** | TS-CAT-02     | TC-UI-CAT-03   | Pagination Navigation         | Click "Page 2" in the pagination controls.                | UI                   |
| **MOD-02** | TS-CAT-03     | TC-UI-CAT-04   | PDP - Image Load              | Click a product and verify image visibility.              | UI                   |
| **MOD-02** | TS-CAT-01     | TC-UI-CAT-05   | Search - Non-existent         | Search for "Quantum Physics Book".                        | UI                   |
| **MOD-02** | TS-CAT-03     | TC-API-CAT-01  | GET /products - Schema        | Fetch all products and validate JSON structure.           | API                  |
| **MOD-02** | TS-CAT-01     | TC-API-CAT-02  | GET /products - Category      | Filter products via query parameters (?category=).        | API                  |
| **MOD-02** | TS-CAT-03     | TC-API-CAT-03  | GET /products/{id} - Invalid  | Fetch product details for ID 999999.                      | API                  |
| **MOD-02** | TS-CAT-02     | TC-API-CAT-04  | GET /products - Metadata      | Verify pagination metadata (current_page, total).         | API                  |
| **MOD-02** | TS-CAT-01     | TC-API-CAT-05  | GET /products/search - XSS    | Send XSS payload via search query param.                  | API                  |
| **MOD-03** | TS-CART-01    | TC-UI-CART-01  | Add to Cart - Badge           | Click "Add to Cart" on a product card.                    | UI                   |
| **MOD-03** | TS-CART-02    | TC-UI-CART-02  | Cart Quantity Update          | Change quantity from 1 to 5 in the cart page.             | UI                   |
| **MOD-03** | TS-CART-02    | TC-UI-CART-03  | Remove Item from Cart         | Click the "Delete" icon next to an item.                  | UI                   |
| **MOD-03** | TS-CART-01    | TC-UI-CART-04  | Add Out of Stock Item         | Attempt to add item with 0 inventory.                     | UI                   |
| **MOD-03** | TS-CART-03    | TC-UI-CART-05  | Persistence - Reload          | Add item, reload page, check cart.                        | UI                   |
| **MOD-03** | TS-CART-03    | TC-API-CART-01 | POST /carts - Initialize      | Create a new shopping cart session via API.               | API                  |
| **MOD-03** | TS-CART-01    | TC-API-CART-02 | POST /carts/{id}/items        | Add product to specific cart ID.                          | API                  |
| **MOD-03** | TS-CART-02    | TC-API-CART-03 | PUT /carts/{id}/items/{id}    | Update quantity to 10 via API.                            | API                  |
| **MOD-03** | TS-CART-01    | TC-API-CART-04 | POST /items - Exceed Stock    | Add quantity 999 for item with stock 50.                  | API                  |
| **MOD-03** | TS-CART-03    | TC-API-CART-05 | DELETE /carts/{id}            | Delete the entire cart resource.                          | API                  |
| **MOD-04** | TS-CHCK-01    | TC-UI-CHCK-01  | Checkout - Happy Path         | Fill address/payment and click "Confirm".                 | UI                   |
| **MOD-04** | TS-CHCK-01    | TC-UI-CHCK-02  | Checkout - Empty Block        | Try to navigate to /checkout with 0 items.                | UI                   |
| **MOD-04** | TS-CHCK-02    | TC-UI-CHCK-03  | Payment - Expired Card        | Input CC details with past expiration date.               | UI                   |
| **MOD-04** | TS-CHCK-01    | TC-UI-CHCK-04  | Validation - Missing Addr     | Leave "City" blank and click confirm.                     | UI                   |
| **MOD-04** | TS-CHCK-01    | TC-UI-CHCK-05  | Double-Click Prevention       | Rapidly click "Confirm" twice.                            | UI                   |
| **MOD-04** | TS-CHCK-01    | TC-API-CHCK-01 | POST /orders - Create         | Send full checkout payload with valid token.              | API                  |
| **MOD-04** | TS-CHCK-01    | TC-API-CHCK-02 | POST /orders - Price Manip    | Send order with price lower than actual DB price.         | API                  |
| **MOD-04** | TS-CHCK-03    | TC-API-CHCK-03 | GET /orders/{id}/invoice      | Fetch PDF invoice for a completed order.                  | API                  |
| **MOD-04** | TS-CHCK-01    | TC-API-CHCK-04 | POST /orders - Zero Stock     | Order an item that was just sold out.                     | API                  |
| **MOD-04** | TS-CHCK-01    | TC-API-CHCK-05 | GET /orders/{id} - State      | Check order status immediately after POST.                | API                  |
| **MOD-05** | TS-ACCT-01    | TC-UI-ACCT-01  | View Order History            | Navigate to "My Orders" after a purchase.                 | UI                   |
| **MOD-05** | TS-ACCT-02    | TC-UI-ACCT-02  | Update Profile Name           | Change name in settings and save.                         | UI                   |
| **MOD-05** | TS-ACCT-02    | TC-UI-ACCT-03  | Address Book - Add New        | Add a secondary shipping address.                         | UI                   |
| **MOD-05** | TS-ACCT-02    | TC-UI-ACCT-04  | Profile - XSS Injection       | Enter `<script>` tags in Name field.                      | UI                   |
| **MOD-05** | TS-ACCT-02    | TC-UI-ACCT-05  | Update Email - Duplicate      | Change email to one already used by another.              | UI                   |
| **MOD-05** | TS-ACCT-01    | TC-API-ACCT-01 | GET /account/orders - Sort    | Fetch orders and check date descending.                   | API                  |
| **MOD-05** | TS-ACCT-02    | TC-API-ACCT-02 | PUT /users/me - Update Bio    | Send partial update for profile.                          | API                  |
| **MOD-05** | TS-ACCT-01    | TC-API-ACCT-03 | GET /orders/{id} - Auth       | Fetch order ID belonging to a different user.             | API                  |
| **MOD-05** | TS-ACCT-02    | TC-API-ACCT-04 | DELETE /addresses/{id}        | Delete a saved address via ID.                            | API                  |
| **MOD-05** | TS-ACCT-01    | TC-API-ACCT-05 | GET /users/me - Headers       | Verify response for security headers (HSTS).              | API                  |
| **MOD-06** | TS-SUPP-01    | TC-UI-SUPP-01  | Support Form - Happy Path     | Fill all fields and click Submit.                         | UI                   |
| **MOD-06** | TS-SUPP-01    | TC-UI-SUPP-02  | Validation - Short Message    | Enter 5 characters in Message field.                      | UI                   |
| **MOD-06** | TS-SUPP-01    | TC-UI-SUPP-03  | Attachment - Invalid Type     | Upload a .exe file to the support form.                   | UI                   |
| **MOD-06** | TS-SUPP-01    | TC-UI-SUPP-04  | Mandatory Field - Subject     | Leave Subject dropdown unselected.                        | UI                   |
| **MOD-06** | TS-SUPP-02    | TC-UI-SUPP-05  | AJAX Submission               | Submit form and verify no page reload.                    | UI                   |
| **MOD-06** | TS-SUPP-01    | TC-API-SUPP-01 | POST /messages - Valid        | Send contact form data via API.                           | API                  |
| **MOD-06** | TS-SUPP-03    | TC-API-SUPP-02 | POST /messages - Rate Limit   | Send 10 messages in 5 seconds from one IP.                | API                  |
| **MOD-06** | TS-SUPP-03    | TC-API-SUPP-03 | POST /messages - Honeypot     | Fill hidden bot field and post.                           | API                  |
| **MOD-06** | TS-SUPP-01    | TC-API-SUPP-04 | POST /messages - Large        | Send message body of 1,000,000 chars.                     | API                  |
| **MOD-06** | TS-SUPP-01    | TC-API-SUPP-05 | POST /messages - Invalid Mail | Send payload with malformed email string.                 | API                  |
