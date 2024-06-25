// You can add JavaScript code to handle interactions or dynamic content in your footer here.

// Example: Adding a click event listener to the "Contact Us" button
const contactUsButton = document.querySelector('.contact-us button');

if (contactUsButton) {
    contactUsButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        // Add your custom code here to handle the click, for example:
        alert("Contact Us button clicked!");
    });
}