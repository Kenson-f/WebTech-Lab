# Community Event Signup - Form Validation
This project is a simple, client-side validated signup form for a community event. It's built using HTML, CSS, and vanilla JavaScript to provide real-time feedback to the user, ensuring data integrity before submission.

---

## Features
Real-time Validation: Fields are validated as the user interacts with them, providing instant feedback.

Clear Error Messages: Specific, user-friendly error messages appear below each invalid field.-

Visual Feedback: Input fields are highlighted with a red border for errors and a green border for valid entries.

Smart Submit Button: The "Register" button remains disabled until all required fields meet the validation criteria.

No Server Calls: All validation is handled on the front-end using JavaScript.

---

## Form Validation Rules
Each field has a specific set of rules that must be met for the form to be considered valid:

1. Full Name
Required: This field cannot be empty.

Format: Must contain at least 2 characters.

Content: Only accepts letters and spaces. Numbers or special symbols are not allowed.

2. Email
Required: This field cannot be empty.

Format: Must be a valid email address (e.g., example@domain.com).

3. Phone Number
Required: This field cannot be empty.

Format: Must be exactly 10 digits. No letters, spaces, or special characters are allowed.

4. Age
Required: This field cannot be empty.

Format: Must be a whole number (no decimals).

Range: The age must be between 18 and 120.

5. Address
Optional: This field is not required for form submission.

6. Terms and Conditions
Required: The checkbox must be checked to agree to the terms.

---

## How It Works?
The form's validation logic is handled in script.js and follows a user-friendly pattern:

Validation on blur: When a user clicks into a field and then clicks out of it (a blur event), the specific validation function for that field runs. This is when an error message will first appear if the input is incorrect.

Button State on input: As the user types (input event), the script continuously checks if the entire form is valid. Once all rules are met, the Register button becomes enabled.

Final Check on submit: If a user manages to click the "Register" button, a final validation check runs on all fields to prevent the submission of any invalid data. If the form is valid, a success message appears.

---

## Files
form.html: The HTML structure of the signup form.

styles.css: The CSS for styling the form, input fields, and error messages.

script.js: The JavaScript code that contains all the validation logic and event handling.

 ---
 
## Live Hosting using Vercel:
https://form-validation-zeta-seven.vercel.app
