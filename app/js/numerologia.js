// numerologia.js

document.addEventListener("DOMContentLoaded", () => {
  // Cambia el tema entre claro y oscuro
  document.getElementById('toggleModo').addEventListener('click', () => {
    const body = document.getElementById('body');
    body.classList.toggle('dark-mode');

    const icono = document.getElementById('toggleModo');
    icono.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
  });
  const btnCalcular = document.getElementById("btnCalcular");

  btnCalcular.addEventListener("click", () => {
    const nombres = document.getElementById("nombres").value.trim().toUpperCase();
    const apellidos = document.getElementById("apellidos").value.trim().toUpperCase();
    const nombreCompleto = `${nombres} ${apellidos}`;
    
    // === Clave Personal === Tabla fija: Clave Personal por día y mes ===
    const tablaClavePersonal = {
      enero: {1: 9, 2: 8, 3: 2, 4: 9, 5: 10, 6: 2, 7: 3, 8: 4, 9: 5, 10: 6, 11: 7, 12: 8, 13: 9, 14: 8, 15: 9, 16: 10, 17: 11, 18: 3, 19: 4, 20: 2, 21: 3, 22: 4, 23: 5, 24: 13, 25: 5, 26: 6, 27: 4, 28: 5, 29: 6, 30: 7, 31: 8},
      febrero: {1: 10, 2: 8, 3: 9, 4: 10, 5: 2, 6: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 8, 12: 7, 13: 8, 14: 9, 15: 10, 16: 11, 17: 3, 18: 4, 19: 2, 20: 3, 21: 4, 22: 1, 23: 4, 24: 5, 25: 12, 26: 4, 27: 5, 28: 6, 29: 7},
      marzo: {1: 5, 2: 6, 3: 7, 4: 8, 5: 9, 6: 10, 7: 2, 8: 3, 9: 4, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8, 16: 9, 17: 10, 18: 9, 19: 3, 20: 11, 21: 9, 22: 10, 23: 8, 24: 9, 25: 10, 26: 2, 27: 3, 28: 4, 29: 5, 30: 5, 31: 6},
      abril: {1: 6, 2: 7, 3: 8, 4: 9, 5: 10, 6: 2, 7: 3, 8: 2, 9: 3, 10: 4, 11: 5, 12: 6, 13: 7, 14: 8, 15: 9, 16: 10, 17: 11, 18: 10, 19: 11, 20: 9, 21: 7, 22: 8, 23: 9, 24: 10, 25: 11, 26: 3, 27: 4, 28: 4, 29: 5, 30: 6},
      mayo: {1: 6, 2: 7, 3: 8, 4: 9, 5: 10, 6: 9, 7: 1, 8: 2, 9: 3, 10: 4, 11: 5, 12: 6, 13: 7, 14: 8, 15: 9, 16: 8, 17: 9, 18: 10, 19: 8, 20: 6, 21: 7, 22: 8, 23: 9, 24: 1, 25: 11, 26: 11, 27: 3, 28: 4, 29: 5, 30: 6, 31: 8},
      junio: {1: 7, 2: 8, 3: 9, 4: 8, 5: 9, 6: 10, 7: 2, 8: 3, 9: 4, 10: 5, 11: 6, 12: 7, 13: 8, 14: 7, 15: 8, 16: 9, 17: 7, 18: 8, 19: 6, 20: 6, 21: 7, 22: 7, 23: 8, 24: 7, 25: 8, 26: 8, 27: 9, 28: 9, 29: 1, 30: 8},
      julio: {1: 11, 2: 1, 3: 11, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, 10: 9, 11: 10, 12: 9, 13: 10, 14: 11, 15: 9, 16: 10, 17: 11, 18: 3, 19: 4, 20: 5, 21: 6, 22: 6, 23: 7, 24: 5, 25: 6, 26: 7, 27: 8, 28: 8, 29: 7, 30: 6, 31: 5},
      agosto: {1: 10, 2: 11, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 8, 11: 9, 12: 10, 13: 8, 14: 9, 15: 10, 16: 11, 17: 3, 18: 4, 19: 5, 20: 5, 21: 6, 22: 7, 23: 5, 24: 6, 25: 7, 26: 9, 27: 8, 28: 7, 29: 8, 30: 5, 31: 4},
      septiembre: {1: 11, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 7, 9: 8, 10: 9, 11: 7, 12: 8, 13: 9, 14: 10, 15: 11, 16: 3, 17: 4, 18: 4, 19: 5, 20: 6, 21: 7, 22: 5, 23: 6, 24: 1, 25: 9, 26: 8, 27: 7, 28: 8, 29: 11, 30: 4},
      octubre: {1: 11, 2: 3, 3: 4, 4: 5, 5: 6, 6: 5, 7: 6, 8: 7, 9: 5, 10: 6, 11: 7, 12: 8, 13: 9, 14: 10, 15: 11, 16: 11, 17: 3, 18: 4, 19: 5, 20: 6, 21: 7, 22: 1, 23: 9, 24: 8, 25: 7, 26: 6, 27: 7, 28: 1, 29: 4, 30: 11, 31: 1},
      noviembre: {1: 3, 2: 4, 3: 5, 4: 4, 5: 5, 6: 6, 7: 4, 8: 5, 9: 6, 10: 7, 11: 8, 12: 9, 13: 10, 14: 10, 15: 11, 16: 3, 17: 4, 18: 5, 19: 6, 20: 5, 21: 1, 22: 9, 23: 8, 24: 7, 25: 6, 26: 7, 27: 1, 28: 4, 29: 7, 30: 1},
      diciembre: {1: 3, 2: 2, 3: 3, 4: 4, 5: 2, 6: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 8, 12: 8, 13: 9, 14: 10, 15: 11, 16: 3, 17: 4, 18: 5, 19: 4, 20: 12, 21: 8, 22: 7, 23: 6, 24: 5, 25: 6, 26: 9, 27: 3, 28: 6, 29: 9, 30: 3, 31: 4}
    };

    // === Diccionario pitagórico ===
    const alfabeto = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
      J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 5, O: 6, P: 7, Q: 8, R: 9,
      S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };

    const vocalesSet = new Set(['A', 'E', 'I', 'O', 'U']);

    // === Utilidad general ===
    // Reduce un número a un solo dígito, respetando los números maestros 11, 22 y 33
    function reducirNumero(n) {
      if ([11, 22, 33].includes(n)) return n;
      let suma = n;
      while (suma >= 10) {
        suma = suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
        if ([11, 22, 33].includes(suma)) break;
      }
      return suma;
    }

    // Calcula la suma numerológica de las vocales de una palabra
    function calcularParcialVocales(palabra) {
      let suma = 0;
      for (let letra of palabra) {
        if (vocalesSet.has(letra)) suma += alfabeto[letra] || 0;
      }
      return reducirNumero(suma);
    }

    // Calcula la suma numerológica de las consonantes de una palabra
    function calcularParcialConsonantes(palabra) {
      let suma = 0;
      for (let letra of palabra) {
        if (/[A-ZÑ]/.test(letra) && !vocalesSet.has(letra)) {
          suma += alfabeto[letra] || 0;
        }
      }
      return reducirNumero(suma);
    }

    const palabras = nombreCompleto.split(/\s+/); // Cada palabra por separado

    // === Resultado 1: Esencia Íntima ===
    const parcialesVocales = palabras.map(p => calcularParcialVocales(p));
    let sumaVocales = 0;
    for (let parcial of parcialesVocales) {
      if ([11, 22, 33].includes(parcial)) {
        sumaVocales += [parcial.toString()].reduce((a, b) => a + parseInt(b), 0);
      } else {
        sumaVocales += parcial;
      }
    }
    const esenciaIntima = reducirNumero(sumaVocales);
    // Mostrar resultado 1
    document.getElementById("esenciaIntima").value = esenciaIntima;

    // === Resultado 2: Imagen ===
    const parcialesConsonantes = palabras.map(p => calcularParcialConsonantes(p));
    let sumaConsonantes = 0;
    for (let parcial of parcialesConsonantes) {
      if ([11, 22, 33].includes(parcial)) {
        sumaConsonantes += [parcial.toString()].reduce((a, b) => a + parseInt(b), 0);
      } else {
        sumaConsonantes += parcial;
      }
    }
    const imagen = reducirNumero(sumaConsonantes);
    // Mostrar resultado 2
    document.getElementById("imagen").value = imagen;

    // === Resultado 3: Sendero del Mundo (CORREGIDO) ===
    const parcialesMundo = palabras.map(p => {
      const vocales = calcularParcialVocales(p);
      const consonantes = calcularParcialConsonantes(p);
      const sumaVC = vocales + consonantes;
      return reducirNumero(sumaVC); // Reduce cada combinación por palabra
    });

    let sumaFinalMundo = 0;
    for (let parcial of parcialesMundo) {
      if ([11, 22, 33].includes(parcial)) {
        sumaFinalMundo += [parcial.toString()].reduce((a, b) => a + parseInt(b), 0);
      } else {
        sumaFinalMundo += parcial;
      }
    }

    const senderoMundo = reducirNumero(sumaFinalMundo);
    // Mostrar resultado 3
    document.getElementById("serMundo").value = senderoMundo;

    // === Resultado 4: Sendero Natal ===
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    let senderoNatal = "";
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(num => parseInt(num));
      const edadActual = new Date().getFullYear() - anio;

      // Reduce valores de fecha (día, mes o año) con control de números maestros y trata el 29 como número maestro (11)
      function reducirFecha(valor) {
        if ([11, 22, 33].includes(valor)) return valor;
        if (valor === 29) return 11; // caso especial: 29 = 2+9 = 11 maestro
        return reducirNumero(valor);
      }

      const mesReducido = reducirFecha(mes);
      const diaReducido = reducirFecha(dia);
      const anioReducido = reducirFecha(anio.toString().split('').reduce((a, b) => a + parseInt(b), 0));

      // === DEBUG ===
      console.log("Fecha:", fechaNacimiento);
      console.log("Mes reducido:", mesReducido);
      console.log("Día reducido:", diaReducido);
      console.log("Año reducido:", anioReducido);

      let sumaFecha = mesReducido + diaReducido + anioReducido;

      senderoNatal = reducirNumero(sumaFecha);
    }
    // Mostrar resultado 4
    document.getElementById("senderoNatal").value = senderoNatal;

    // === Resultado 5: Potencial ===
    let potencial = "";
    if (!isNaN(senderoMundo) && !isNaN(senderoNatal)) {
      const sumaPotencial = senderoMundo + senderoNatal;
      potencial = reducirNumero(sumaPotencial);
    }
    // Mostrar resultado 5
    document.getElementById("potencial").value = potencial;

    // === Resultado 6: Ciclo de Letras ===
    const letrasSolo = nombreCompleto.replace(/[^A-ZÑ]/g, ''); // Solo letras
    const cicloLetras = letrasSolo.length;
    document.getElementById("cicloLetras").value = cicloLetras;

        // === Resultado 7: Clave Personal ===
    let clavePersonal = "";
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(num => parseInt(num));
      const nombreMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
      const mesNombre = nombreMeses[mes - 1];

      if (tablaClavePersonal[mesNombre] && tablaClavePersonal[mesNombre][dia]) {
        clavePersonal = tablaClavePersonal[mesNombre][dia];
      }
    }
    document.getElementById("clavePersonal").value = clavePersonal;

    // === Resultado 8: Correlación Primera Letra ===
    // Se toma la primera letra del primer nombre y se calcula su posición A=1 ... Z=26
    const primeraLetra = nombres.charAt(0);
    const correlacionLetra = primeraLetra >= 'A' && primeraLetra <= 'Z' ? primeraLetra.charCodeAt(0) - 64 : '';
    document.getElementById("letraLeccion").value = correlacionLetra;

    // === Resultado 9: Regalo Divino ===
    // Se suman los dos últimos dígitos del año de nacimiento y se reduce a un dígito (salvo que dé 11, 22 o 33)
    let regaloDivino = "";
    if (fechaNacimiento) {
      const anio = parseInt(fechaNacimiento.split("-")[0]);
      const ultimosDos = anio % 100;
      regaloDivino = reducirNumero(ultimosDos);
    }
    document.getElementById("regaloDivino").value = regaloDivino;

    // === Resultado 10: Etapas ===
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(num => parseInt(num));

      const rMes = reducirNumero(mes);
      const rDia = reducirNumero(dia);
      const rAnio = reducirNumero(anio.toString().split('').reduce((a, b) => a + parseInt(b), 0));

      document.getElementById("etapa1_izq").textContent = rMes;
      document.getElementById("etapa1_centro").textContent = rDia;
      document.getElementById("etapa1_der").textContent = rAnio;

      // Reducción especial: si es 11, 22 o 33, reducir antes
      const safeReduce = (n) => {
        return reducirNumero([11, 22, 33].includes(n) ? reducirNumero(n) : n);
      };

      const etapa2_izq = safeReduce(rMes + rDia);
      const etapa2_der = safeReduce(rDia + rAnio);

      document.getElementById("etapa2_izq").textContent = etapa2_izq;
      document.getElementById("etapa2_der").textContent = etapa2_der;

      const etapa3 = safeReduce(etapa2_izq + etapa2_der);
      document.getElementById("etapa3").textContent = etapa3;

      const etapa4 = safeReduce(rMes + rAnio);
      document.getElementById("etapa4").textContent = etapa4;

      // Texto de interpretación con edades base
      const edadActual = new Date().getFullYear() - anio;
      let edades;

      // Leer duración desde el input
      const duracionInput = document.getElementById("duracionEtapas");
      const duracion = duracionInput && duracionInput.value ? parseInt(duracionInput.value) : null;

      // Usa duración solo si está definida y válida
      if (duracion && !isNaN(duracion)) {
        edades = [0, duracion, duracion * 2, duracion * 3];
      } else {
        // Si no hay duración, usar clavePersonal como base
        const claveValor = parseInt(document.getElementById("clavePersonal").value);
        if (!isNaN(claveValor)) {
          const etapa1Fin = 36 - claveValor;
          const etapa2Ini = etapa1Fin + 1;
          const etapa2Fin = etapa2Ini + 9;
          const etapa3Ini = etapa2Fin + 1;
          const etapa3Fin = etapa3Ini + 9;
          const etapa4Ini = etapa3Fin + 1;
          edades = [0, etapa1Fin, etapa2Ini, etapa3Ini, etapa4Ini];
        } else {
          edades = [0, 36, 45, 54];
        }
      }
      
      
      const etapaText = [rMes, etapa2_izq, etapa3, etapa4];
      const textos = [
        `De ${edades[0]} a ${edades[1]} - ${etapaText[0]}`,
        `De ${edades[2]} a ${edades[3] - 1} - ${etapaText[1]}`,
        `De ${edades[3]} a ${edades[4] - 1} - ${etapaText[2]}`,
        `Desde ${edades[4]} en adelante - ${etapaText[3]}`
      ];
      document.getElementById("etapaTexto1").textContent = textos[0];
      document.getElementById("etapaTexto2").textContent = textos[1];
      document.getElementById("etapaTexto3").textContent = textos[2];
      document.getElementById("etapaTexto4").textContent = textos[3];
    }
    
    // === DEBUG ===
    console.log("Palabras:", palabras);
    console.log("Parciales Vocales:", parcialesVocales);
    console.log("Parciales Consonantes:", parcialesConsonantes);
    console.log("Parciales Totales por palabra (V+C):", parcialesMundo);
    
    console.log("Resultado 1 (Esencia Íntima):", esenciaIntima);
    console.log("Resultado 2 (Imagen):", imagen);
    console.log("Resultado 3 (Sendero del Mundo):", senderoMundo);
    console.log("Resultado 4 (Sendero Natal):", senderoNatal);
    console.log("Resultado 5 (Potencial):", potencial);
    console.log("Resultado 6 (Ciclo de Letras):", cicloLetras);
    console.log("Resultado 7 (Clave Personal):", clavePersonal);
    console.log("Resultado 8 (Letra L):", correlacionLetra);
    console.log("Resultado 9 (Regalo Divino):", regaloDivino);
  });
});

/*
Resultado 1 -> Esencia Íntima        > Vocales por palabra → reducir → sumar dígitos → reducir total
Resultado 2 -> Imagen                > Consonantes por palabra → reducir → sumar dígitos → reducir total
Resultado 3 -> Sendero del Mundo     > (Vocales + Consonantes) por palabra → reducir → sumar dígitos → reducir total
Resultado 4 -> Sendero Natal         > Reducir mes, día y año → sumar → reducir total
Resultado 5 -> Potencial             > Sendero Natal + Sendero del Mundo → reducir
Resultado 6 -> Ciclo de Letras       > Total de letras del nombre completo (sin espacios ni símbolos)
Resultado 7 -> Clave Personal        > Según tabla fija: mes + día
Resultado 8 -> Letra L.              > Posición alfabética de la primera letra del primer nombre
Resultado 9 -> Regalo Divino         > Suma de los dos últimos dígitos del año → reducir (salvo 11, 22 o 33)
Resultado 10 -> Etapas               >
    Etapa 1: Mes, Día y Año reducidos
    Etapa 2: Etapa1_izq + Etapa1_centro y Etapa1_centro + Etapa1_der (reduciendo ambos antes)
    Etapa 3: Suma de Etapa2 izquierda y derecha → reducir
    Etapa 4: Etapa1_izq + Etapa1_der → reducir
*/
