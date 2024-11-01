document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation-message").textContent = "Message sent successfully!";
    setTimeout(() => {
        document.getElementById("confirmation-message").textContent = "";
    }, 3000);
});
