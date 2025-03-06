document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('form-status');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            statusDiv.textContent = "Thank you! Your message has been sent successfully.";
            statusDiv.style.color = "green";
            form.reset(); // Clear the form
        } else {
            statusDiv.textContent = "Oops! Something went wrong. Please try again.";
            statusDiv.style.color = "red";
        }
    } catch (error) {
        statusDiv.textContent = "An error occurred. Please check your internet connection and try again.";
        statusDiv.style.color = "red";
    }
});
