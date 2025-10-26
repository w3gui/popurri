// numerologia.js

document.addEventListener("DOMContentLoaded", () => {
  // establece en numerologia predictiva la fecha de hoy + 1 año
  const inputAnioEnCurso = document.getElementById("anioEnCurso");
  const hoy = new Date();
  const dentroDeUnAnio = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate());
  const iso = dentroDeUnAnio.toISOString().split('T')[0]; // formato YYYY-MM-DD
  inputAnioEnCurso.value = iso;
  
  
  // Cambia el tema entre claro y oscuro
  document.getElementById('toggleModo').addEventListener('click', () => {
    const body = document.getElementById('body');
    body.classList.toggle('dark-mode');

    const icono = document.getElementById('toggleModo');
    icono.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
  });

  const btnCalcular = document.getElementById("btnCalcular");
  const btnCalcularPredictiva = document.getElementById("btnCalcularPredictiva");

  // === Datos base compartidos ===
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

  const alfabeto = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };

  const vocalesSet = new Set(['A', 'E', 'I', 'O', 'U']);

  // === Utilidades ===
  function reducirNumero(n) {
    if ([11, 22, 33].includes(n)) return n;
    let suma = n;
    while (suma >= 10) {
      suma = suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      if ([11, 22, 33].includes(suma)) break;
    }
    return suma;
  }

  function calcularParcialVocales(palabra) {
    let suma = 0;
    for (let letra of palabra) {
      if (vocalesSet.has(letra)) suma += alfabeto[letra] || 0;
    }
    return reducirNumero(suma);
  }

  // 🔹 Normaliza texto: reemplaza acentos, diéresis y cedillas por su equivalente
  function normalizarTexto(texto) {
    return texto
      .normalize("NFD") // separa caracteres base + diacríticos
      .replace(/[\u0300-\u036f]/g, "") // elimina diacríticos (acentos, tildes, diéresis)
      .replace(/ç/g, "c").replace(/Ç/g, "C") // cedillas
      .replace(/ñ/g, "Ñ").replace(/Ñ/g, "Ñ") // normaliza ñ correctamente
      .toUpperCase(); // mantiene mayúsculas uniformes
  }

  function calcularParcialConsonantes(palabra) {
    let suma = 0;
    for (let letra of palabra) {
      if (/[A-ZÑ]/.test(letra) && !vocalesSet.has(letra)) {
        suma += alfabeto[letra] || 0;
      }
    }
    return reducirNumero(suma);
  }

  // === Cálculo Base (1–18) — SIN CAMBIOS DE LÓGICA ===
  function calcularBase() {
    const nombres = normalizarTexto(document.getElementById("nombres").value.trim());
    const apellidos = normalizarTexto(document.getElementById("apellidos").value.trim());
    const nombreCompleto = `${nombres} ${apellidos}`;
    const palabras = nombreCompleto.split(/\s+/);
    const letrasSolo = nombreCompleto.replace(/[^A-ZÑ]/g, '');
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // 1. Esencia Íntima
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
    document.getElementById("esenciaIntima").value = esenciaIntima;

    // 2. Imagen
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
    document.getElementById("imagen").value = imagen;

    // 3. Sendero del Mundo
    const parcialesMundo = palabras.map(p => {
      const v = calcularParcialVocales(p);
      const c = calcularParcialConsonantes(p);
      return reducirNumero(v + c);
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
    document.getElementById("serMundo").value = senderoMundo;

    // 4. Sendero Natal
    let senderoNatal = "";
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(Number);
      const reducirFecha = (valor) => {
        if ([11, 22, 33].includes(valor)) return valor;
        if (valor === 29) return 11;
        return reducirNumero(valor);
      };
      const mesR = reducirFecha(mes);
      const diaR = reducirFecha(dia);
      const anioR = reducirFecha(anio.toString().split('').reduce((a, b) => a + parseInt(b), 0));
      senderoNatal = reducirNumero(mesR + diaR + anioR);
    }
    document.getElementById("senderoNatal").value = senderoNatal;

    // 5. Potencial
    let potencial = "";
    if (!isNaN(senderoMundo) && !isNaN(senderoNatal)) {
      potencial = reducirNumero(senderoMundo + senderoNatal);
    }
    document.getElementById("potencial").value = potencial;

    // 6. Ciclo de Letras
    document.getElementById("cicloLetras").value = letrasSolo.length;

    // 7. Clave Personal
    let clavePersonal = "";
    if (fechaNacimiento) {
      const [_, mes, dia] = fechaNacimiento.split("-").map(Number);
      const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
      const mesNombre = meses[mes - 1];
      if (tablaClavePersonal[mesNombre] && tablaClavePersonal[mesNombre][dia]) {
        clavePersonal = tablaClavePersonal[mesNombre][dia];
      }
    }
    document.getElementById("clavePersonal").value = clavePersonal;

    // 8. Letra L.
    const primeraLetra = nombres.charAt(0);
    const correlacionLetra = (primeraLetra >= 'A' && primeraLetra <= 'Z') ? (primeraLetra.charCodeAt(0) - 64) : '';
    document.getElementById("letraLeccion").value = correlacionLetra;

    // 9. Regalo Divino
    let regaloDivino = "";
    if (fechaNacimiento) {
      const anio = parseInt(fechaNacimiento.split("-")[0]);
      regaloDivino = reducirNumero(anio % 100);
    }
    document.getElementById("regaloDivino").value = regaloDivino;

    // 10. Etapas
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(Number);
      const rMes = reducirNumero(mes);
      const rDia = reducirNumero(dia);
      const rAnio = reducirNumero(anio.toString().split('').reduce((a, b) => a + parseInt(b), 0));

      document.getElementById("etapa1_izq").textContent = rMes;
      document.getElementById("etapa1_centro").textContent = rDia;
      document.getElementById("etapa1_der").textContent = rAnio;

      const e1 = ([11, 22, 33].includes(rMes + rDia)) ? (rMes + rDia) : reducirNumero(rMes + rDia);
      const e2 = ([11, 22, 33].includes(rDia + rAnio)) ? (rDia + rAnio) : reducirNumero(rDia + rAnio);
      const e3 = ([11, 22, 33].includes(e1 + e2)) ? (e1 + e2) : reducirNumero(e1 + e2);
      const e4 = ([11, 22, 33].includes(rMes + rAnio)) ? (rMes + rAnio) : reducirNumero(rMes + rAnio);

      document.getElementById("etapa2_izq").textContent = e1;
      document.getElementById("etapa2_der").textContent = e2;
      document.getElementById("etapa3").textContent = e3;
      document.getElementById("etapa4").textContent = e4;

      const senderoNatal = parseInt(document.getElementById("senderoNatal").value);
      let edades;
      if (!isNaN(senderoNatal)) {
        const etapa1Fin = 36 - senderoNatal;
        const etapa2Ini = etapa1Fin + 1;
        const etapa2Fin = etapa2Ini + 9;
        const etapa3Ini = etapa2Fin + 1;
        const etapa3Fin = etapa3Ini + 9;
        const etapa4Ini = etapa3Fin + 1;
        edades = [0, etapa1Fin, etapa2Ini, etapa3Ini, etapa4Ini];
      } else {
        edades = [0, 36, 45, 54];
      }
      document.getElementById("etapaTexto1").textContent = `De ${edades[0]} a ${edades[1]} - ${e1}`;
      document.getElementById("etapaTexto2").textContent = `De ${edades[2]} a ${edades[3] - 1} - ${e2}`;
      document.getElementById("etapaTexto3").textContent = `De ${edades[3]} a ${edades[4] - 1} - ${e3}`;
      document.getElementById("etapaTexto4").textContent = `Desde ${edades[4]} en adelante - ${e4}`;
    }

    // 11. Ciclo de Vida
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(Number);
      const hoy = new Date();
      let edad = hoy.getFullYear() - anio;
      if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) edad--;

      const reducirCV = (valor) => (valor === 11 || valor === 22) ? valor : reducirNumero(valor);
      let cicloVida = "";
      if ((edad >= 0 && edad <= 27) || (edad >= 81 && edad <= 107)) {
        cicloVida = (mes === 11) ? 11 : reducirCV(mes);
      } else if ((edad >= 28 && edad <= 54) || (edad >= 108 && edad <= 134)) {
        cicloVida = reducirCV(dia);
      } else if (edad >= 55 && edad <= 80) {
        cicloVida = reducirCV(anio.toString().split('').reduce((a, b) => a + parseInt(b), 0));
      } else if (edad > 134) {
        cicloVida = reducirCV(mes);
        document.getElementById("cicloVida").classList.add("text-danger");
      }
      document.getElementById("cicloVida").value = cicloVida;
    }

    // 12. Karmas
    const karmasPosibles = [13, 14, 16, 19];
    const karmasEncontrados = new Set();
    const revisarKarma = (v) => { if (karmasPosibles.includes(v)) karmasEncontrados.add(v); };

    revisarKarma(sumaVocales);
    const sumaVocalesRaw = palabras.reduce((total, p) => {
      return total + [...p].reduce((suma, letra) => vocalesSet.has(letra) ? suma + (alfabeto[letra] || 0) : suma, 0);
    }, 0);
    revisarKarma(sumaVocalesRaw);
    revisarKarma(sumaFinalMundo);
    palabras.forEach(p => revisarKarma(calcularParcialVocales(p) + calcularParcialConsonantes(p)));
    revisarKarma(parseInt(document.getElementById("senderoNatal").value) || 0);
    revisarKarma(parseInt(document.getElementById("potencial").value) || 0);

    document.getElementById("karmas").value = [...karmasEncontrados].sort((a,b) => a-b).join(", ") || "—";

    // 13. Lecciones Kármicas
    const conteo = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
    letrasSolo.split('').forEach(l => { const v = alfabeto[l]; if (v) conteo[v]++; });
    const lecciones = [];
    for (let i=1;i<=9;i++){ if (conteo[i]===0) lecciones.push(i); }
    document.getElementById("leccionesKarmicas").value = lecciones.join(", ") || "—";

    // 14–16: DD Vocales/Consonantes/Total
    let ddVocales = 0, ddConsonantes = 0;
    letrasSolo.split('').forEach(l => {
      if (vocalesSet.has(l)) ddVocales += alfabeto[l] || 0;
      else if (/[A-ZÑ]/.test(l)) ddConsonantes += alfabeto[l] || 0;
    });
    document.getElementById("dobleDigitoVocales").value = ddVocales;
    document.getElementById("dobleDigitoConsonantes").value = ddConsonantes;
    document.getElementById("dobleDigitoTotal").value = ddVocales + ddConsonantes;

    // 17: DD Fecha
    let ddFecha = 0;
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-");
      ddFecha = [...(dia + mes + anio)].reduce((s, d) => s + parseInt(d), 0);
    }
    document.getElementById("dobleDigitoFecha").value = ddFecha;

    // 18: Arcano Natal (día + mes + año reducido a 2 cifras)
    let ArcanoNatal = 0;
    if (fechaNacimiento) {
      const [anio, mes, dia] = fechaNacimiento.split("-").map(Number);
      const anioSuma = anio.toString().split('').reduce((a, b) => a + parseInt(b), 0); // ej: 1+9+9+0 = 19
      ArcanoNatal = dia + mes + anioSuma; // sin reducir
    }
    document.getElementById("ArcanoNatal").value = ArcanoNatal;
  }

  // === Cálculo Predictivo (19–31) — AJUSTADO A SPANS resultado24..31 ===
  function calcularPredictiva() {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const fechaEnCurso = new Date(document.getElementById("anioEnCurso").value);
    const anioEnCurso = fechaEnCurso.getFullYear();
    const nombres = normalizarTexto(document.getElementById("nombres").value.trim());
    const apellidos = normalizarTexto(document.getElementById("apellidos").value.trim());
    const nombreCompleto = `${nombres} ${apellidos}`;

    if (!fechaNacimiento || isNaN(anioEnCurso)) return;

    const [anioNac, mesNac, diaNac] = fechaNacimiento.split("-").map(Number);
    const mesReducido = reducirNumero(mesNac);
    const diaReducido = reducirNumero(diaNac);
    const anioReducido = reducirNumero(anioEnCurso.toString().split('').reduce((a, b) => a + parseInt(b), 0));

    // 19: Año Personal
    const sumaAP = mesReducido + diaReducido + anioReducido;
    const anioPersonal = [11, 22, 33].includes(sumaAP) ? sumaAP : reducirNumero(sumaAP);
    document.getElementById("anioPersonal").value = anioPersonal;

    // 20: Dígito de Edad
    const cumpleEsteAnio = new Date(anioEnCurso, mesNac - 1, diaNac);
    const yaCumplio = fechaEnCurso >= cumpleEsteAnio;

    const edadDespues = anioEnCurso - anioNac - (yaCumplio ? 0 : 1);
    const edadAntes = edadDespues - 1;
    
    const edad1 = reducirNumero(edadAntes);
    const edad2 = reducirNumero(edadDespues);
    const sumaEdad = edad1 + edad2;
    const digitoEdad = [11, 22, 33].includes(sumaEdad) ? sumaEdad : reducirNumero(sumaEdad);
    document.getElementById("digitoEdad").value = digitoEdad;
    document.getElementById("digitoEdadTexto").textContent = `20. Dígito de Edad ${edadAntes} + ${edadDespues} →`;

    // 21: Edad actual
    document.getElementById("edadActual").value = edadDespues;

    // 22: Mes Personal
    const mesHoy = new Date().getMonth() + 1;
    const mesPersonalBase = anioPersonal + mesHoy;
    const mesPersonal = [11, 22, 33].includes(mesPersonalBase) ? mesPersonalBase : reducirNumero(mesPersonalBase);
    document.getElementById("mesPersonal").value = mesPersonal;

    // 23: Tránsito de Letra
    const letrasSolo = nombreCompleto.replace(/[^A-ZÑ]/g, '');
    if (letrasSolo.length > 0) {
      let edad = edadDespues;
      let acumulado = 0;
      let letraActual = letrasSolo[0];

      // Iteramos por letras sumando sus valores como duración de tránsito
      for (let i = 0; i < 500; i++) {
        const letra = letrasSolo[i % letrasSolo.length];
        const valor = alfabeto[letra] || 0;
        if (valor === 0) continue;

        const siguienteAcumulado = acumulado + valor;
        if (edad >= acumulado && edad < siguienteAcumulado) {
          letraActual = letra;
          break;
        }
        acumulado = siguienteAcumulado;
      }

      document.getElementById("transitoLetra").value = letraActual;
    } else {
      document.getElementById("transitoLetra").value = "—";
    }

    // 24–31: Armónicos / Cuatrimestres
    const reducirADigito = (n) => {
      while (n >= 10) n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      return n;
    };

    const armonicoBasico = (valor, anioActual) => {
      const suma = anioActual + valor;
      if (suma < 2000) {
        return suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      } else {
        const primerosDos = parseInt(suma.toString().substring(0, 2));
        const ultimosDos = parseInt(suma.toString().substring(2));
        const reducidos = reducirADigito(ultimosDos);
        return primerosDos + reducidos;
      }
    };

    // Refactor de armonicoExtendido con comprobaciones completas para los resultados 28–31
    function armonicoExtendido28(valor, anioActual, reducirPosteriores = true) {
      const suma = anioActual + valor;

      // Si es menor a 2000 → sumar dígito por dígito sin más
      if (suma < 2000) {
        return suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      }

      const str = suma.toString();
      const primerosDos = parseInt(str.slice(0, 2));
      const ultimosDos = parseInt(str.slice(2));

      let total;
      if (reducirPosteriores) {
        // Para 28, 30, 31 → se reducen los últimos dos dígitos
        const reducidos = ultimosDos.toString().split('').reduce((a, b) => a + parseInt(b), 0);
        total = primerosDos + reducidos;
      } else {
        // Para 29 → NO reducir los últimos dos dígitos
        total = primerosDos + ultimosDos;
      }

      // Si el total supera 78, sumar dígito por dígito del número completo
      if (total > 78) {
        return suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      }

      return total;
    }

    const armonicoExtendido = (valor, anioActual) => {
      const suma = anioActual + valor;
      if (suma < 2000) {
        return suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      } else {
        const primerosDos = parseInt(suma.toString().substring(0, 2));
        const ultimosDos = parseInt(suma.toString().substring(2));
        const total = primerosDos + ultimosDos;
        return total <= 78 ? total : suma.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      }
    };

    const dobleDigitoAnioNacimiento = fechaNacimiento ? fechaNacimiento.split("-")[0].split('').reduce((a, b) => a + parseInt(b), 0) : 0;
    const senderoNatalRaw = fechaNacimiento ? (reducirNumero(mesNac) + reducirNumero(diaNac) + reducirNumero(anioNac.toString().split('').reduce((a, b) => a + parseInt(b), 0))) : 0;
    const clavePersonalRaw = parseInt(document.getElementById("clavePersonal").value);

    const r24 = armonicoBasico(dobleDigitoAnioNacimiento, anioEnCurso);
    const r25 = armonicoBasico(edadDespues, anioEnCurso);
    const r26 = armonicoBasico(senderoNatalRaw, anioEnCurso);
    const r27 = armonicoBasico(clavePersonalRaw, anioEnCurso);

    const r28 = armonicoExtendido(dobleDigitoAnioNacimiento, anioEnCurso);
    // === Resultado 29 ===
    // Regla: si (primerosdos + últimosDos) > 78 → sumar dígito a dígito del número completo (anio + edad)
    // Ejemplo: 2025 + 31 = 2056 → 20 + 56 = 76 (ok)
    // Ejemplo: 2025 + 41 = 2066 → 20 + 66 = 86 (>78) → 2+0+6+6 = 14
    const suma29 = anioEnCurso + edadDespues;
    const primerosDos29 = parseInt(suma29.toString().slice(0, 2));
    const ultimosDos29  = parseInt(suma29.toString().slice(2));
    let total29 = primerosDos29 + ultimosDos29;
    if (total29 > 78) {
      total29 = suma29.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    const r29 = total29;
    const r30 = armonicoExtendido(senderoNatalRaw, anioEnCurso);
    const r31 = armonicoExtendido(clavePersonalRaw, anioEnCurso);

    // Pintamos SOLO en los spans existentes (coinciden con tu HTML)
    document.getElementById("resultado24").textContent = r24;
    document.getElementById("resultado25").textContent = r25;
    document.getElementById("resultado26").textContent = r26;
    document.getElementById("resultado27").textContent = r27;

    document.getElementById("resultado28").textContent = r28;
    document.getElementById("resultado29").textContent = r29;
    document.getElementById("resultado30").textContent = r30;
    document.getElementById("resultado31").textContent = r31;
  }

  // === Cálculo Abracadabra (32) ===
  function calcularAbracadabra() {
    // 1) Tomar el nombre y apellido sin espacios
    const nombres = normalizarTexto(document.getElementById("nombres").value.trim());
    const apellidos = normalizarTexto(document.getElementById("apellidos").value.trim());
    const nombreCompleto = (nombres + apellidos).replace(/[^A-ZÑ]/g, '');

    // 2) Primeras 9 letras (relleno con espacio si faltan)
    const primeras9 = nombreCompleto.slice(0, 9).padEnd(9, ' ');

    // === FILA 1 ===
    const fila1 = [];
    for (let i = 0; i < 9; i++) {
      // Letras
      document.getElementById(`abracadabra_nombre_${i + 1}`).textContent =
        primeras9[i] ? primeras9[i] : '';

      // Valores numerológicos
      const valor = alfabeto[primeras9[i]] || 0;
      fila1.push(valor);

      const celda = document.getElementById(`r1c${i + 1}_abracadabra_valor_${i + 1}`);
      if (celda) celda.textContent = valor;
    }

    // Guardamos todas las filas en un array
    const filas = [fila1];

    // === FILAS 2 → 9 ===
    // En el Abracadabra siempre reducimos todo a un dígito (1–9), sin conservar maestros.
    // Cada fila tiene (fila anterior length - 1) celdas
    for (let f = 2; f <= 9; f++) {
      const filaAnterior = filas[f - 2]; // array de la fila anterior
      const filaActual = [];

      for (let c = 0; c < filaAnterior.length - 1; c++) {
        // const sumaReducida = reducirNumero(filaAnterior[c] + filaAnterior[c + 1]);
        const suma = filaAnterior[c] + filaAnterior[c + 1];

        // reducción estricta: sin preservar 11, 22 o 33
        let sumaReducida = suma;
        while (sumaReducida >= 10) {
          sumaReducida = sumaReducida
            .toString()
            .split('')
            .reduce((a, b) => a + parseInt(b), 0);
        }

        filaActual.push(sumaReducida);

        // Pintamos el valor en la tabla
        const celda = document.getElementById(`r${f}c${c + 1}`);
        if (celda) celda.textContent = sumaReducida;
      }

      filas.push(filaActual);
    }
  }


  // === Listeners ===
  btnCalcular.addEventListener("click", () => {
    calcularBase();       // 1–18
    calcularPredictiva(); // 19–31
    calcularAbracadabra(); // 32
  });

  btnCalcularPredictiva.addEventListener("click", () => {
    calcularPredictiva(); // solo 19–31
  });
});

/*
═══════════════════════════════════════════════════════════════════════════════
RESUMEN DE CÁLCULOS NUMEROLÓGICOS (RESULTADOS 1–32)
═══════════════════════════════════════════════════════════════════════════════

Resultado 1 → Esencia Íntima  
    Vocales por palabra → reducir → sumar todas → reducir total.

Resultado 2 → Imagen  
    Consonantes por palabra → reducir → sumar todas → reducir total.

Resultado 3 → Sendero del Mundo  
    (Vocales + Consonantes) por palabra → reducir → sumar todas → reducir total.

Resultado 4 → Sendero Natal  
    Reducir mes, día y año de nacimiento → sumar → reducir total.

Resultado 5 → Potencial  
    Sendero Natal + Sendero del Mundo → reducir.

Resultado 6 → Ciclo de Letras  
    Total de letras del nombre completo (sin espacios ni símbolos).

Resultado 7 → Clave Personal  
    Según tabla fija: combinación entre mes y día de nacimiento.

Resultado 8 → Letra L.  
    Posición alfabética de la primera letra del primer nombre.

Resultado 9 → Regalo Divino  
    Suma de los dos últimos dígitos del año de nacimiento → reducir  
    (salvo que dé 11, 22 o 33).

Resultado 10 → Etapas  
    Etapa 1: mes + día → reducir (salvo 11, 22 o 33)  
    Etapa 2: día + año → reducir (salvo 11, 22 o 33)  
    Etapa 3: Etapa 1 + Etapa 2 → reducir (salvo 11, 22 o 33)  
    Etapa 4: mes + año → reducir (salvo 11, 22 o 33)  
    Además, se calculan las edades de transición entre etapas según el Sendero Natal.

Resultado 11 → Ciclo de Vida  
    Según edad actual:  
      • 0–27 años (y 81–107): usa mes.  
      • 28–54 años (y 108–134): usa día.  
      • 55–80 años: usa año.  
    (Si > 134 años, vuelve a mes y marca en rojo).

Resultado 12 → Karmas  
    Detecta los valores 13, 14, 16 o 19 en:  
      esencia, vocales totales, sendero del mundo, parciales por palabra,  
      sendero natal y potencial.

Resultado 13 → Lecciones Kármicas  
    Números del 1 al 9 que NO aparecen en el nombre completo.

Resultado 14 → Doble Dígito (Vocales)  
    Suma sin reducir de todas las vocales del nombre completo.

Resultado 15 → Doble Dígito (Consonantes)  
    Suma sin reducir de todas las consonantes.

Resultado 16 → Doble Dígito (Total)  
    Suma de los Resultados 14 + 15.

Resultado 17 → Doble Dígito (Fecha)  
    Suma dígito a dígito de día + mes + año de nacimiento (sin reducir).

Resultado 18 → Arcano Natal  
    Día + mes + año reducido a dos cifras (sin reducir final).

───────────────────────────────────────────────────────────────────────────────

Resultado 19 → Año Personal  
    Mes reducido + día reducido + año en curso reducido → reducir final.  
    (Mantiene 11 o 22 si aparecen).

Resultado 20 → Dígito de Edad  
    Se sumán los dígitos reducidos de la edad anterior y actual → reducir.  
    Ejemplo: 39 (=3 + 9 = 12 → 3) + 40 (=4) = 7.

Resultado 21 → Edad Actual  
    Diferencia entre el año en curso y el año de nacimiento,  
    considerando si ya cumplió años en el año en curso.

Resultado 22 → Mes Personal  
    Año Personal + mes actual → reducir (mantiene 11 o 22 si aparecen).

Resultado 23 → Tránsito de Letra  
    Se recorre el nombre completo y cada letra dura “valor alfabético” años.  
    Según la edad actual, se determina qué letra rige el año en curso.

───────────────────────────────────────────────────────────────────────────────

Resultados 24–27 → Armónicos / Cuatrimestres (versión básica)  
    24 → Año actual + doble dígito del año de nacimiento.  
    25 → Año actual + edad actual.  
    26 → Año actual + sendero natal.  
    27 → Año actual + clave personal.  
    Regla básica:  
      • Si el resultado < 2000 → sumar dígitos directamente.  
      • Si ≥ 2000 → tomar dos primeros + dos últimos reducidos.  
      • Si da 11 o 22, se mantiene sin reducir.

Resultados 28–31 → Armónicos / Cuatrimestres (versión extendida)  
    Igual que los anteriores, pero sin reducir los dos últimos dígitos.  
    Si el resultado > 78 → se suma dígito a dígito del número completo.

      28 → Año actual + doble dígito del año de nacimiento.  
      29 → Año actual + edad actual.  
      30 → Año actual + sendero natal.  
      31 → Año actual + clave personal.

───────────────────────────────────────────────────────────────────────────────

Resultado 32 → Abracadabra  
    Pirámide numerológica de 9 filas:  
      • Fila 1: primeras 9 letras del nombre completo → valores alfabéticos.  
      • Filas 2–9: cada celda es la suma reducida de las dos superiores (1 a 9).  
    Refleja la vibración progresiva del nombre en forma de triángulo.

═══════════════════════════════════════════════════════════════════════════════
*/
