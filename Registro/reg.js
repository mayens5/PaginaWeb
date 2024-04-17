const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Aquí puedes agregar la lógica para enviar los datos al servidor

  alert(`Registro exitoso de ${name} con email ${email}.`);
});