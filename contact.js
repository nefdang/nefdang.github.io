document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hello, my name is ${name} (%0AEmail: ${email})%0A%0A${message}`;
  window.open(`https://wa.me/97798XXXXXXXX?text=${whatsappMessage}`, "_blank");
});
