document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // You can add your code to handle form submission here
      // For example, sending form data to a server using AJAX
  
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
      form.reset(); // Clear the form after submission
    });
  });
  