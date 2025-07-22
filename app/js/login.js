// app/js/login.js

// ⛔ NO USAMOS más el SHEET_ID ni el link CSV
// ✅ Usamos la URL del Google Apps Script desplegado como Web App

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXXXXXXX/exec"; // <-- reemplazá con tu URL real

async function handleLogin() {
  const user = document.getElementById("username").value.trim().toLowerCase();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  try {
    console.log("Validando usuario:", user, "con contraseña:", pass);
    console.log("URL del script:", SCRIPT_URL);

    const response = await fetch(SCRIPT_URL);
    const data = await response.json(); // [['correo', 'clave'], ['otro@ejemplo.com', '1234'], ...]

    // Si tu hoja tiene encabezado, lo salteamos
    const filas = data.slice(1);

    const encontrado = filas.some(([correo, clave]) =>
      correo?.trim().toLowerCase() === user && clave?.trim() === pass
    );

    if (encontrado) {
      window.location.href = "app/app.html";
    } else {
      errorMsg.textContent = "Correo o contraseña incorrectos.";
      errorMsg.style.display = "block";
    }
  } catch (error) {
    console.error("Error al validar:", error);
    errorMsg.textContent = "Error al conectar con la hoja de cálculo.";
    errorMsg.style.display = "block";
  }
}
