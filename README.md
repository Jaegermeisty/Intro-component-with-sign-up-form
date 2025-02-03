# Frontend Mentor - Intro component with sign up form

This is my solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). A responsive sign-up form with real-time validation and success feedback.

## Table of contents

- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript DOM manipulation

### What I learned

While the HTML/CSS structure came relatively naturally, the JavaScript validation proved to be an excellent challenge. Key learnings include:

1. **Dynamic Error Handling**  
   Implementing individual error messages under each input required careful DOM traversal using `nextElementSibling`. I learned to:
   - Reset errors before each validation check
   - Target specific fields for different error types (empty fields vs format issues)
   - Maintain input-specific error states without affecting other fields

2. **Multi-Stage Validation**  
   Creating layered checks was particularly insightful:
   ```javascript
   if (input.type === 'email' && input.value.trim()) {
     if (!emailRegex.test(input.value)) {
       // Show email-specific error
     }
   }