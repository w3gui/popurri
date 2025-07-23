// app/js/login.js

// ⛔ NO USAMOS más el SHEET_ID ni el link CSV
// ✅ Usamos la URL del Google Apps Script desplegado como Web App

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXXXXXXX/exec"; // <-- reemplazá con tu URL real

/* --- ⚠️  Bypass temporal ----------------------------------------- */
const FALLBACK_USER = "martin";   // usuario de prueba
const FALLBACK_PASS = "admin";    // contraseña de prueba
/* ------------------------------------------------------------------ */

// Método principal para manejar el intento de login del usuario  
async function handleLogin() {
  // Se obtiene y normaliza el usuario y contraseña ingresados
  const user = document.getElementById("username").value.trim().toLowerCase();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  
  // Bypass temporal para pruebas: si coincide con usuario/clave de prueba, se accede directamente
  console.log("Validando usuario:", user, "con contraseña:", pass);
  // 1️⃣  Comprobación rápida: usuario/clave de prueba
  if (user === FALLBACK_USER && pass === FALLBACK_PASS) {
    console.warn("⚠️  Acceso habilitado por bypass temporal.");
    window.location.href = "app/app.html";
    return;
  }

  try {
    // Llamada al script de Google Apps para obtener los datos
    const response = await fetch(SCRIPT_URL);
    const data = await response.json(); // Se espera una matriz con usuarios y contraseñas

    // Se eliminan los encabezados si existen
    const filas = data.slice(1);

    // Se valida si el usuario y contraseña coinciden con algún registro
    const encontrado = filas.some(([correo, clave]) =>
      correo?.trim().toLowerCase() === user && clave?.trim() === pass
    );

    if (encontrado) {
      window.location.href = "app/app.html"; // Éxito: se redirige
    } else {
      errorMsg.textContent = "Correo o contraseña incorrectos.";
      errorMsg.style.display = "block";
    }
  } catch (error) {
    // Error en la conexión con la hoja
    errorMsg.textContent = "Error al conectar con la hoja de cálculo.";
    errorMsg.style.display = "block";
  }
}
