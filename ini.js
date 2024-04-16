const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Aquí puedes agregar la lógica para verificar las credenciales de inicio de sesión

  if (email === "sebas@gmail.com" && password === "ssss") {
    // Si las credenciales son válidas, redirigir al usuario a la página de inicio
    window.location.href = "../Inicio/index.html";
  } else {
    alert("Credenciales inválidas");
  }
});