const TABLA_CLAVE_PERSONAL = {
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

const ALFABETO = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

const VOCALES_SET = new Set(["A", "E", "I", "O", "U"]);

const KARMAS_POSIBLES = [13, 14, 16, 19];

const MAESTROS = [11, 22, 33];

const MESES_NOMBRE = [
  "Enero","Febrero","Marzo",
  "Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre",
  "Octubre","Noviembre","Diciembre"
];

/* HELPERS COMPARTIDOS  --- DOM utils --- */

// --- Reducciones específicas para Abracadabra (línea roja) ---
function reducirMesAbracadabra(mes) {
  mes = Number(mes);
  if (!Number.isFinite(mes) || mes <= 0) return null;
  // Noviembre mantiene 11
  if (mes === 11) return 11;
  // resto se reduce a un dígito
  return reducirEstrictoADigito(mes);
}

function reducirDiaAbracadabra(dia) {
  dia = Number(dia);
  if (!Number.isFinite(dia) || dia <= 0) return null;
  // usamos la misma regla que Sendero Natal:
  // 11 y 22 se respetan, 29 se trata como 11, el resto se reduce
  if (dia === 11 || dia === 22) return dia;
  return reducirFechaSN(dia);
  // return reducirEstrictoADigito(dia);
}

function reducirAnioAbracadabra(anio) {
  anio = Number(anio);
  if (!Number.isFinite(anio) || anio <= 0) return null;
  const suma = sumarDigitos(anio); // p.ej. 1990 -> 19 | 1984 -> 22
  if (suma === 11 || suma === 22) return suma;
  return reducirEstrictoADigito(suma); // 19 -> 1
}

/**
 * Formatea la cadena de la línea roja:
 * - si suma < 10  -> "3"
 * - si suma >=10 y 1 sola reducción -> "13/4"
 * - si requiere dos pasos (ej 28 -> 10 -> 1) -> "28/10/1"
 */
function formatearAbracadabraTop(suma) {
  if (!Number.isFinite(suma)) return "";
  if (suma < 10) return String(suma);

  const primera = sumarDigitos(suma);
  if (primera < 10) {
    return `${suma}/${primera}`;
  }
  const segunda = sumarDigitos(primera);
  if (segunda === primera) {
    return `${suma}/${primera}`;
  }
  return `${suma}/${primera}/${segunda}`;
}

function $(id) {
  return document.getElementById(id);
}

function setValue(id, value) {
  const el = $(id);
  if (!el) return;
  el.value = (value === null || value === undefined) ? "" : value;
}

function setText(id, value) {
  const el = $(id);
  if (!el) return;
  el.textContent = (value === null || value === undefined) ? "" : value;
}

function setHTML(id, html) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = html ?? "";
}

function toggleClass(id, className, force) {
  const el = $(id);
  if (!el) return;
  if (typeof force === "boolean") el.classList.toggle(className, force);
  else el.classList.toggle(className);
}

function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c").replace(/Ç/g, "C")
    .replace(/ñ/g, "Ñ").replace(/Ñ/g, "Ñ")
    .toUpperCase();
}

function obtenerNombreCompletoNormalizado(nombresRaw, apellidosRaw) {
  const n = normalizarTexto((nombresRaw || "").trim());
  const a = normalizarTexto((apellidosRaw || "").trim());
  return `${n} ${a}`.trim().replace(/\s+/g, " ");
}

function dividirEnPalabras(nombreCompleto) {
  if (!nombreCompleto) return [];
  return nombreCompleto.split(/\s+/).filter(p => p);
}

function soloLetras(nombreCompleto) {
  if (!nombreCompleto) return "";
  return nombreCompleto.replace(/[^A-ZÑ]/g, "");
}

function esMaestro(n) {
  return MAESTROS.includes(Number(n));
}

function sumarDigitos(n) {
  if (n === null || n === undefined) return 0;
  const s = n.toString().replace(/\D/g, "");
  let total = 0;
  for (const ch of s) total += parseInt(ch, 10);
  return total;
}

function reducirNumero(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return 0;
  if (esMaestro(n)) return n;
  let suma = n;
  while (suma >= 10) {
    suma = sumarDigitos(suma);
    if (esMaestro(suma)) break;
  }
  return suma;
}

function reducirEstrictoADigito(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return 0;
  let x = Math.abs(n);
  while (x >= 10) x = sumarDigitos(x);
  return x;
}

function reducirFechaSN(valor) {
  valor = Number(valor);
  if (!Number.isFinite(valor)) return 0;
  if ([11, 22].includes(valor)) return valor;
  if (valor === 29) return 11;
  return reducirNumero(valor);
}

function reducirParaCV(valor) {
  valor = Number(valor);
  if (!Number.isFinite(valor)) return 0;
  return ([11, 22].includes(valor)) ? valor : reducirNumero(valor);
}


function parcialVocalesRaw(palabra) {
  if (!palabra) return 0;
  let suma = 0;
  for (const letra of palabra) {
    if (VOCALES_SET.has(letra)) suma += ALFABETO[letra] || 0;
  }
  return suma;
}

function parcialConsonantesRaw(palabra) {
  if (!palabra) return 0;
  let suma = 0;
  for (const letra of palabra) {
    if (/[A-ZÑ]/.test(letra) && !VOCALES_SET.has(letra)) {
      suma += ALFABETO[letra] || 0;
    }
  }
  return suma;
}

function parcialVocalesReducido(palabra) {
  return reducirNumero(parcialVocalesRaw(palabra));
}

function parcialConsonantesReducido(palabra) {
  return reducirNumero(parcialConsonantesRaw(palabra));
}

function parcialesPorPalabra(palabras) {
  const vocalesRed = [];
  const consonantesRed = [];
  const vocalesRaw = [];
  const consonantesRaw = [];
  for (const p of palabras) {
    const vRaw = parcialVocalesRaw(p);
    const cRaw = parcialConsonantesRaw(p);
    vocalesRaw.push(vRaw);
    consonantesRaw.push(cRaw);
    vocalesRed.push(reducirNumero(vRaw));
    consonantesRed.push(reducirNumero(cRaw));
  }
  return { vocalesRed, consonantesRed, vocalesRaw, consonantesRaw };
}


// --- Fechas / Edad ---

function parseFechaISO(value) {
  if (!value) return null;
  const [y,m,d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m-1, d); // local time, sin corrimiento
}

function getAnio(fecha) { return fecha.getFullYear(); }
function getMes(fecha) { return fecha.getMonth() + 1; }
function getDia(fecha) { return fecha.getDate(); }

function cumpleEnAnio(anio, mesNac, diaNac) {
  return new Date(anio, mesNac - 1, diaNac);
}

function yaCumplioEnFecha(fechaEnCurso, mesNac, diaNac) {
  if (!fechaEnCurso) return false;
  const anio = getAnio(fechaEnCurso);
  const cumple = cumpleEnAnio(anio, mesNac, diaNac);
  return fechaEnCurso >= cumple;
}

function calcularEdadEnFecha(anioNac, mesNac, diaNac, fechaEnCurso) {
  if (!fechaEnCurso || !anioNac || !mesNac || !diaNac) return 0;
  const anioEnCurso = getAnio(fechaEnCurso);
  const yaCumplio = yaCumplioEnFecha(fechaEnCurso, mesNac, diaNac);
  return anioEnCurso - anioNac - (yaCumplio ? 0 : 1);
}


// --- Helpers de UI numérica ---

function renderKarmaKSpan(title) {
  const safeTitle = (title || "").replace(/"/g, "&quot;");
  return `<span class="karma-k" data-bs-toggle="tooltip" data-bs-placement="top" title="${safeTitle}" style="color:#ff5e5e;font-weight:700;cursor:help;">k</span>`;
}

function initKarmaTooltips(root=document) {
  if (!window.bootstrap?.Tooltip) return;
  // Bootstrap bundle ya trae Tooltip
  root.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    // evita duplicados si re-renderizas
    if (el._tooltip) el._tooltip.dispose();
    el._tooltip = new bootstrap.Tooltip(el);
  });
}

    
function formatearDetalleCrudoYReducido(crudo, reducido) {
  if (crudo === null || crudo === undefined || crudo === "") return "";
  // if (!crudo && crudo !== 0) return "";
  return `
    <span class="num-crudo">${crudo}</span>
    <span class="num-sep">/</span>
    <span class="num-principal" style="color:#00e676;font-weight:600;">${reducido ?? ""}</span>
  `;
}

function pintarDetalle(idDetalle, crudo, reducido) {
  const el = $(idDetalle);
  if (!el) return;
  if (!crudo && crudo !== 0) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = formatearDetalleCrudoYReducido(crudo, reducido);
}


/* ==========================
   2) TABLA BASE KÁRMICA
========================== */

/*
 * Construye la data necesaria para renderizar la tabla base kármica.
 * Debe replicar exactamente:
 * - cálculo real de parciales mundo columna a columna
 * - detección de karmas horizontales/verticales/por total de fila
 * Pinta la "k" roja dentro de un texto ya formateado.
 * SOLO reemplaza ",k" por span rojo.
 */
function pintarKRoja(texto) {
  if (!texto) return "";
  return texto.replace(/,k\b/g, ',<span style="color:#ff5e5e;font-weight:700;">k</span>');
}

function renderTablaBaseKarmicaPlaceholder() {
  const numCols = 4;

  // palabras vacías de placeholder
  const palabrasTotales = Array(numCols).fill("-");

  // filas vacías (NO uses ctxBase ni resultsBase acá)
  const filas = [
    {
      nombre: "Esencia Íntima",
      valores: Array(numCols).fill(""),
      totalHTML: "",
      karma: ""
    },
    {
      nombre: "Imagen",
      valores: Array(numCols).fill(""),
      totalHTML: "",
      karma: ""
    },
    {
      nombre: "Sendero del Mundo",
      valores: Array(numCols).fill(""),
      totalHTML: "",
      karma: ""
    }
  ];

  const karmasH = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const karmasV = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const columnasKarma = Array(numCols).fill(false);

  renderTablaBaseKarmica({
    palabrasTotales,
    filas,
    karmasH,
    karmasV,
    columnasKarma,
    infoH: null,
    infoV: null,
    columnasInfo: null
  });
}

function buildTablaBaseKarmicaData(ctxBase, resultsBase) {
  // Palabras (nombres + apellidos) ya normalizados fuera
  const palabrasNombres   = dividirEnPalabras(ctxBase.nombres || "");
  const palabrasApellidos = dividirEnPalabras(ctxBase.apellidos || "");
  const palabrasTotales   = [...palabrasNombres, ...palabrasApellidos].filter(Boolean);

  const numCols = palabrasTotales.length;

  // Obtenemos parciales por palabra (vocales/consonantes, crudos y reducidos)
  const {
    vocalesRed,
    consonantesRed,
    vocalesRaw,
    consonantesRaw
  } = parcialesPorPalabra(palabrasTotales);

  // 10 "reservado": suma RAW = 10 y reducido = 1
  const esDiezVocal = vocalesRaw.map((raw, idx) => raw === 10 && vocalesRed[idx] === 1);
  const esDiezConsonante = consonantesRaw.map((raw, idx) => raw === 10 && consonantesRed[idx] === 1);

  // Valores visibles en la tabla:
  //  - si viene de 10→1, se muestra como 10
  const esenciaDisplay = vocalesRed.map((val, idx) =>
    esDiezVocal[idx] && val === 1 ? 10 : val
  );
  const imagenDisplay = consonantesRed.map((val, idx) =>
    esDiezConsonante[idx] && val === 1 ? 10 : val
  );

  // Valores para SUMAS HORIZONTALES (filas): 10 => 1
  const esenciaFilaEval = esenciaDisplay.map(v => v === 10 ? 1 : v);
  const imagenFilaEval  = imagenDisplay.map(v => v === 10 ? 1 : v);

  // Sendero del Mundo por palabra (crudo y reducido)
  const senderoRaw = vocalesRaw.map((v, i) => (v || 0) + (consonantesRaw[i] || 0));
  const senderoRed = senderoRaw.map(sum =>
    esMaestro(sum) ? sum : reducirNumero(sum)
  );
  const esDiezSendero = senderoRaw.map((raw, idx) => raw === 10 && senderoRed[idx] === 1);
  const senderoDisplay = senderoRed.map((val, idx) =>
    esDiezSendero[idx] && val === 1 ? 10 : val
  );
  const senderoFilaEval = senderoDisplay.map(v => v === 10 ? 1 : v);

  // Totales crudos de fila (para mostrar a la izquierda del "/")
  const totalEsenciaCrudoFila = esenciaFilaEval.reduce((acc, v) => acc + (v || 0), 0);
  const totalImagenCrudoFila  = imagenFilaEval.reduce((acc, v) => acc + (v || 0), 0);
  const totalMundoCrudoFila   = senderoFilaEval.reduce((acc, v) => acc + (v || 0), 0);

  const filas = [
    {
      nombre: "Esencia Íntima",
      valores: esenciaDisplay,       // lo que se ve (5, 8, 10 en el ejemplo Elvis)
      filaEval: esenciaFilaEval,     // lo que se usa para karmas en fila (5, 8, 1)
      totalHTML: formatearDetalleCrudoYReducido(
        totalEsenciaCrudoFila,
        resultsBase.esenciaIntima.valor
      ),
      karma: "",
      tipo: "esencia"
    },
    {
      nombre: "Imagen",
      valores: imagenDisplay,
      filaEval: imagenFilaEval,
      totalHTML: formatearDetalleCrudoYReducido(
        totalImagenCrudoFila,
        resultsBase.imagen.valor
      ),
      karma: "",
      tipo: "imagen"
    },
    {
      nombre: "Sendero del Mundo",
      valores: senderoDisplay,
      filaEval: senderoFilaEval,
      totalHTML: formatearDetalleCrudoYReducido(
        totalMundoCrudoFila,
        resultsBase.senderoMundo.valor
      ),
      karma: "",
      tipo: "mundo"
    }
  ];

  const { karmasH, infoH } = detectarKarmasHorizontales(filas, numCols);
  const { karmasV, columnasKarma, infoV, columnasInfo } = detectarKarmasVerticales(filas, numCols);
  detectarKarmaEnTotalesFila(filas);
  const totalesFila = {
    esencia: totalEsenciaCrudoFila,
    imagen: totalImagenCrudoFila,
    mundo: totalMundoCrudoFila
  };

  return {
    palabrasTotales,
    filas,
    karmasH,
    karmasV,
    columnasKarma,
    infoH,
    infoV,
    columnasInfo,
    totalesFila
  };
}


function detectarKarmasHorizontales(filas, numCols) {
  /**
     * Detecta karmas horizontales (13, 14, 16, 19) dentro de la tabla base kármica.
     *
     * Reglas:
     * - Sólo trabaja sobre las filas de resultados parciales:
     *   - "esencia"  → Esencia Íntima (vocales por palabra)
     *   - "imagen"   → Imagen (consonantes por palabra)
     *   - "mundo"    → Sendero del Mundo (vocales + consonantes por palabra)
     *
     * - Para filas de tipo "esencia" e "imagen":
     *   Se revisa únicamente el par formado por el primer y segundo nombre
     *   (columnas 0 y 1). Si la suma de esos dos parciales da un karma
     *   (13, 14, 16 o 19), se marca ese par como kármico y se guarda la
     *   información en infoH.
     *
     * - Para la fila de tipo "mundo":
     *   NO se miran pares contiguos. En su lugar, se suma toda la fila
     *   completa (todas las columnas que tengan valor). Si la suma total
     *   coincide con un karma (13, 14, 16 o 19), se marca la fila como
     *   kármica a nivel de total (fila.karmaTotalInfo) para que pueda
     *   recogerse luego en el Resultado 12.
     *
     * - Importante sobre el 10:
     *   En esta función se trabaja con `fila.filaEval` cuando existe,
     *   donde un 10 “reservado” ya se ha transformado en 1 para el cálculo
     *   de karmas en fila. Es decir, a efectos de karma horizontal,
     *   10 cuenta como 1.
     *
     * @param {Array} filas    Lista de filas de la tabla (Esencia, Imagen, Mundo),
     *                         cada una con `valores`, `filaEval` y `tipo`.
     * @param {number} numCols Número total de columnas (palabras) en la tabla.
     * @returns {{karmasH: boolean[][], infoH: (Object|null)[][]}}
     *          - karmasH: matriz de flags [fila][columna] indicando si la celda
     *                     pertenece a un par kármico horizontal.
     *          - infoH:   misma estructura, pero con el detalle del karma
     *                     (número y explicación) cuando aplica.
     */
  const karmasH = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const infoH   = Array(filas.length).fill(null).map(() => Array(numCols).fill(null));

  filas.forEach((fila, i) => {
    const vals = fila.filaEval || fila.valores; // 10 ya viene como 1 para karma en fila
    if (!vals || !vals.length) return;

    // Caso especial: fila tipo "mundo" → sumar TODAS las columnas
    if (fila.tipo === "mundo") {
      let sumaTotal = 0;
      for (const v of vals) {
        if (v != null) sumaTotal += v;
      }

      if (KARMAS_POSIBLES.includes(sumaTotal)) {
        fila.karma = "k";
        // lo guardamos como info de total para que Resultado 12 lo pueda capturar
        fila.karmaTotalInfo = `Karma ${sumaTotal} (total fila Sendero del Mundo: ${sumaTotal})`;
      }

      // no hay pares horizontales en "mundo"
      return;
    }

    // Esencia / Imagen:
    // sólo miramos el par del primer y segundo nombre (columnas 0 y 1)
    if (vals.length >= 2) {
      const a = vals[0];
      const b = vals[1];

      if (a != null && b != null) {
        const suma = a + b;

        if (KARMAS_POSIBLES.includes(suma)) {
          karmasH[i][0] = true;
          karmasH[i][1] = true;

          const detalle = `Karma ${suma} (horizontal: ${a} + ${b})`;
          infoH[i][0] = { karma: suma, detalle };
          infoH[i][1] = { karma: suma, detalle };

          fila.karma = "k";
        }
      }
    }
  });

  return { karmasH, infoH };
}

function detectarKarmasVerticales(filas, numCols) {
  const karmasV = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const infoV   = Array(filas.length).fill(null).map(() => Array(numCols).fill(null));

  const columnasKarma = Array(numCols).fill(false);
  const columnasInfo  = Array(numCols).fill(null);

  // Solo consideramos las dos primeras filas: Esencia (0) e Imagen (1)
  const filasConsideradas = Math.min(2, filas.length);

  for (let c = 0; c < numCols; c++) {
    let acumulado = 0;
    for (let r = 0; r < filasConsideradas; r++) {
      const val = filas[r].valores[c]; // aquí val ya muestra 10 si viene de 10
      if (val == null) continue;

      // En vertical el 10 se usa como 10
      acumulado += val;

      if (KARMAS_POSIBLES.includes(acumulado)) {
        karmasV[r][c] = true;
        columnasKarma[c] = true;

        const detalle = `Karma ${acumulado} (vertical: acumulado en columna = ${acumulado})`;
        infoV[r][c] = { karma: acumulado, detalle };
        columnasInfo[c] = { karma: acumulado, detalle };
      }
    }
  }

  return { karmasV, columnasKarma, infoV, columnasInfo };
}

function detectarKarmaEnTotalesFila(filas) {
  filas.forEach(fila => {
    const vals = fila.filaEval || fila.valores;
    let sumaBruta = 0;

    vals.forEach(v => {
      if (v != null) sumaBruta += v; // aquí 10 ya viene como 1
    });

    if (KARMAS_POSIBLES.includes(sumaBruta)) {
      fila.karma = "k";
      fila.karmaTotalInfo = `Karma ${sumaBruta} (total fila: ${sumaBruta})`;
    } else {
      fila.karmaTotalInfo = null;
    }
  });
  return filas;
}


function renderTablaBaseKarmica(tablaData) {
  const { palabrasTotales, filas, karmasH, karmasV, columnasKarma, infoH, infoV, columnasInfo } = tablaData;
  const numCols = palabrasTotales.length;

  let html = `
    <div class="table-responsive mt-3">
      <table class="table table-glass text-center align-middle">
        <thead>
          <tr>
            <th>Resultado</th>
            ${palabrasTotales.map(p => `<th>${p}</th>`).join("")}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
  `;

  filas.forEach((fila, i) => {
    html += `<tr><th>${fila.nombre}</th>`;
    for (let j = 0; j < numCols; j++) {
      const val = fila.valores[j];
      const isKarma = (karmasH[i]?.[j]) || (karmasV[i]?.[j]);
      const info = infoH?.[i]?.[j] || infoV?.[i]?.[j];

      const displayVal = (fila.nombre === "Imagen" && val === 1) ? "10" : val;
      const style = isKarma ? 'style="color:#ff5e5e;font-weight:700;"' : "";
      const titleAttr = info?.detalle ? `data-bs-toggle="tooltip" title="${info.detalle.replace(/"/g,"&quot;")}"` : "";

      html += `<td ${style} ${titleAttr}>${displayVal ?? ""}</td>`;
    }

    // Total + K solo si el karma viene del total de fila
    let totalHTML = fila.totalHTML || "";
    if (fila.karmaTotalInfo) {
      totalHTML += " " + renderKarmaKSpan(fila.karmaTotalInfo);
    }
    html += `<td>${totalHTML}</td></tr>`;
  });

  // fila inferior K columnas
  html += `<tr><td></td>`;
  for (let j = 0; j < numCols; j++) {
    if (columnasKarma[j]) {
      const det = columnasInfo?.[j]?.detalle || "Karma en columna";
      html += `<td>${renderKarmaKSpan(det)}</td>`;
    } else {
      html += `<td></td>`;
    }
  }
  html += `<td></td></tr>`;

  html += `</tbody></table></div>`;

  let tablaDiv = $("tablaBaseKarma");
  if (!tablaDiv) {
    tablaDiv = document.createElement("div");
    tablaDiv.id = "tablaBaseKarma";
    const cardTitle = [...document.querySelectorAll(".card-title")]
      .find(el => el.textContent.includes("Numerología Base"));
    if (cardTitle) cardTitle.parentElement.appendChild(tablaDiv);
    else document.body.appendChild(tablaDiv);
  }
  tablaDiv.innerHTML = html;

  // activar tooltips
  initKarmaTooltips(tablaDiv);
}


/* ==========================
   3) CABECERAS CUATRIMESTRES
========================== */

function rangoCuatrimestre(mesInicio) {
  const idxInicio = (mesInicio - 1) % 12;
  const idxFin = (mesInicio - 1 + 3) % 12;
  return `${MESES_NOMBRE[idxInicio]} – ${MESES_NOMBRE[idxFin]}`;
}

function calcularRangosCuatrimestres(mesNac) {
  const mes1 = mesNac;
  const mes2 = ((mesNac - 1 + 4) % 12) + 1;
  const mes3 = ((mesNac - 1 + 8) % 12) + 1;
  return {
    cuatri1: rangoCuatrimestre(mes1),
    cuatri2: rangoCuatrimestre(mes2),
    cuatri3: rangoCuatrimestre(mes3)
  };
}

function actualizarCabecerasCuatrimestres(fechaNacimientoISO) {
  const h1 = $("cuatri1-header");
  const h2 = $("cuatri2-header");
  const h3 = $("cuatri3-header");
  if (!h1 || !h2 || !h3) return;

  if (!fechaNacimientoISO) {
    h1.textContent = "1º Cuatri";
    h2.textContent = "2º Cuatri";
    h3.textContent = "3º Cuatri";
    return;
  }

  const partes = fechaNacimientoISO.split("-");
  if (partes.length !== 3) {
    h1.textContent = "1º Cuatri";
    h2.textContent = "2º Cuatri";
    h3.textContent = "3º Cuatri";
    return;
  }

  const mesNac = parseInt(partes[1], 10);
  if (isNaN(mesNac) || mesNac < 1 || mesNac > 12) {
    h1.textContent = "1º Cuatri";
    h2.textContent = "2º Cuatri";
    h3.textContent = "3º Cuatri";
    return;
  }

  const rangos = calcularRangosCuatrimestres(mesNac);
  h1.textContent = rangos.cuatri1;
  h2.textContent = rangos.cuatri2;
  h3.textContent = rangos.cuatri3;
}


/* ==========================
   4) PIPELINE BASE (1–18)
========================== */

// --- Inputs / Context ---

function getBaseInputsFromDOM() {
  return {
    nombresRaw: $("nombres")?.value ?? "",
    apellidosRaw: $("apellidos")?.value ?? "",
    fechaNacimientoISO: $("fechaNacimiento")?.value ?? ""
  };
}

function buildBaseContext(inputs) {
  const nombreCompleto = obtenerNombreCompletoNormalizado(inputs.nombresRaw, inputs.apellidosRaw);
  const palabras = dividirEnPalabras(nombreCompleto);
  const letrasSolo = soloLetras(nombreCompleto);

  let anioNac = null, mesNac = null, diaNac = null;
  if (inputs.fechaNacimientoISO) {
    const [a, m, d] = inputs.fechaNacimientoISO.split("-").map(Number);
    if (!isNaN(a) && !isNaN(m) && !isNaN(d)) {
      anioNac = a; mesNac = m; diaNac = d;
    }
  }

  const parciales = parcialesPorPalabra(palabras);

  return {
    nombres: normalizarTexto(inputs.nombresRaw.trim()),
    apellidos: normalizarTexto(inputs.apellidosRaw.trim()),
    nombreCompleto,
    palabras,
    letrasSolo,
    fechaNacimientoISO: inputs.fechaNacimientoISO,
    anioNac, mesNac, diaNac,
    parciales
  };
}


function calcEsenciaIntima(ctx) {
  const parciales = ctx.parciales.vocalesRed;
  let crudo = 0;
  for (const p of parciales) {
    crudo += esMaestro(p) ? sumarDigitos(p) : p;
  }
  const valor = reducirNumero(crudo);
  return { valor, crudo, parciales };
}

function calcImagen(ctx) {
  const parciales = ctx.parciales.consonantesRed;
  let crudo = 0;
  for (const p of parciales) {
    crudo += esMaestro(p) ? sumarDigitos(p) : p;
  }
  const valor = reducirNumero(crudo);
  return { valor, crudo, parciales };
}

function calcSenderoMundo(ctx) {
  const parcialesMundo = ctx.parciales.vocalesRed.map((v, i) => {
    const c = ctx.parciales.consonantesRed[i] ?? 0;
    return reducirNumero(v + c);
  });
  let crudo = 0;
  for (const p of parcialesMundo) {
    crudo += esMaestro(p) ? sumarDigitos(p) : p;
  }
  const valor = reducirNumero(crudo);
  return { valor, crudo, parciales: parcialesMundo };
}

function calcSenderoNatal(ctx) {
  if (!ctx.fechaNacimientoISO || !ctx.anioNac || !ctx.mesNac || !ctx.diaNac) {
    return { valor: null, crudo: null, partes: { mes: 0, dia: 0, anio: 0 } };
  }

  const mesR = reducirFechaSN(ctx.mesNac);
  const diaR = reducirFechaSN(ctx.diaNac);
  const anioSum = sumarDigitos(ctx.anioNac);
  const anioR = reducirFechaSN(anioSum);

  const crudo = mesR + diaR + anioR;
  const valor = (crudo === 33) ? 6 : reducirNumero(crudo);

  return { valor, crudo, partes: { mes: mesR, dia: diaR, anio: anioR } };
}

function calcPotencial(ctx, resultsParciales) {
  const { senderoMundo, senderoNatal } = resultsParciales;
  if (senderoMundo == null || senderoNatal == null) {
    return { valor: null, crudo: null };
  }
  const crudo = senderoMundo + senderoNatal;
  const valor = reducirNumero(crudo);
  return { valor, crudo };
}

function calcCicloLetras(ctx) {
  return { valor: ctx.letrasSolo.length };
}

function calcClavePersonal(ctx) {
  if (!ctx.fechaNacimientoISO || !ctx.mesNac || !ctx.diaNac) return { valor: null };
  const mesesLower = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const mesNombre = mesesLower[ctx.mesNac - 1];
  const valor = TABLA_CLAVE_PERSONAL[mesNombre]?.[ctx.diaNac] ?? null;
  return { valor };
}

function calcLetraLeccion(ctx) {
  const letra = ctx.nombres?.charAt(0) || null;
  if (!letra) return { valor: null, letra: null };
  const valor = (letra >= "A" && letra <= "Z") ? (letra.charCodeAt(0) - 64) : null;
  return { valor, letra };
}

function calcRegaloDivino(ctx) {
  if (!ctx.anioNac) return { valor: null };
  const ult2 = ctx.anioNac % 100;
  return { valor: reducirNumero(ult2) };
}

function calcEtapas(ctx, resultsParciales) {
  if (!ctx.fechaNacimientoISO || !ctx.mesNac || !ctx.diaNac || !ctx.anioNac) {
    return {
      rMes: 0, rDia: 0, rAnio: 0,
      e1: 0, e2: 0, e3: 0, e4: 0,
      edades: { inicio1: 0, fin1: 36, inicio2: 37, inicio3: 46, inicio4: 55 }
    };
  }

  const rMes = reducirFechaSN(ctx.mesNac);
  const rDia = reducirFechaSN(ctx.diaNac);
  const rAnio = reducirFechaSN(sumarDigitos(ctx.anioNac));

  const reduceSum = (x) => esMaestro(x) ? x : reducirNumero(x);

  const e1 = reduceSum(rMes + rDia);
  const e2 = reduceSum(rDia + rAnio);
  const e3 = reduceSum(e1 + e2);
  const e4 = reduceSum(rMes + rAnio);

  const sn = Number(resultsParciales.senderoNatal);
  let edades;
  if (Number.isFinite(sn) && sn > 0) {
    const fin1 = 36 - sn;
    const ini2 = fin1 + 1;
    const fin2 = ini2 + 9;
    const ini3 = fin2 + 1;
    const fin3 = ini3 + 9;
    const ini4 = fin3 + 1;
    edades = { inicio1: 0, fin1, inicio2: ini2, inicio3: ini3, inicio4: ini4 };
  } else {
    edades = { inicio1: 0, fin1: 36, inicio2: 37, inicio3: 46, inicio4: 55 };
  }

  return { rMes, rDia, rAnio, e1, e2, e3, e4, edades };
}

function calcDesafios(ctx, edadesBase) {
  if (!ctx.fechaNacimientoISO || !ctx.mesNac || !ctx.diaNac || !ctx.anioNac) {
    const edadesFallback = edadesBase || {
      inicio1: 0, fin1: 36,
      inicio2: 37, inicio3: 46, inicio4: 55
    };
    return {
      rMes: 0, rDia: 0, rAnio: 0,
      d1: 0, d2: 0, d3: 0, d4: 0,
      edades: edadesFallback
    };
  }

  // Estos SON LOS QUE MOSTRAMOS (pueden ser 11 / 22)
  const rMes = reducirFechaSN(ctx.mesNac);
  const rDia = reducirFechaSN(ctx.diaNac);
  const rAnio = reducirFechaSN(sumarDigitos(ctx.anioNac));

  // 🔸 Conversión ESPECIAL SOLO PARA DESAFÍOS:
  // 11 → 2, 22 → 4, el resto se deja igual.
  const toDesafioValor = (x) => {
    if (x === 11) return 2;
    if (x === 22) return 4;
    return x;
  };

  // Valores internos que se usan en las RESTAS
  const m = toDesafioValor(rMes);
  const d = toDesafioValor(rDia);
  const a = toDesafioValor(rAnio);

  const abs = (a, b) => Math.abs(a - b);

  // EXACTAMENTE IGUAL A ETAPAS PERO CON RESTAS,
  // usando m, d, a ya corregidos (11→2, 22→4).
  const d1Raw = abs(m, d);      // |mes - día|
  const d2Raw = abs(d, a);      // |día - año|
  const d3Raw = abs(d1Raw, d2Raw);
  const d4Raw = abs(m, a);      // |mes - año|

  // Por si acaso en algún caso extremo apareciera 11 o 22,
  // volvemos a aplicar la misma regla al resultado final:
  const reducirDesafio = (x) => {
    x = Number(x);
    if (!Number.isFinite(x)) return 0;
    if (x === 11) return 2;
    if (x === 22) return 4;
    return reducirNumero(x);
  };

  const d1 = reducirDesafio(d1Raw);
  const d2 = reducirDesafio(d2Raw);
  const d3 = reducirDesafio(d3Raw);
  const d4 = reducirDesafio(d4Raw);

  const edades = edadesBase || {
    inicio1: 0, fin1: 36,
    inicio2: 37, inicio3: 46, inicio4: 55
  };

  return { rMes, rDia, rAnio, d1, d2, d3, d4, edades };
}


function calcCicloVida(ctx, fechaReferencia = new Date()) {
  if (!ctx.fechaNacimientoISO || !ctx.anioNac || !ctx.mesNac || !ctx.diaNac) {
    return { valor: null, edad: null, tramo: null };
  }

  const edad = calcularEdadEnFecha(ctx.anioNac, ctx.mesNac, ctx.diaNac, fechaReferencia);

  let valor = null;
  let tramo = null;

  if ((edad >= 0 && edad <= 27) || (edad >= 81 && edad <= 107)) {
    valor = (ctx.mesNac === 11) ? 11 : reducirParaCV(ctx.mesNac);
    tramo = "mes";
  } else if ((edad >= 28 && edad <= 54) || (edad >= 108 && edad <= 134)) {
    valor = reducirParaCV(ctx.diaNac);
    tramo = "dia";
  } else if (edad >= 55 && edad <= 80) {
    valor = reducirParaCV(sumarDigitos(ctx.anioNac));
    tramo = "anio";
  } else if (edad > 134) {
    valor = reducirParaCV(ctx.mesNac);
    tramo = "warning";
  }

  return { valor, edad, tramo };
}

/*
  * Resultado 12: Karmas.
  Los Karmas posibles son cuatro, el Karma 13, el Karma 14, el Karma 16 y el
  Karma 19, y pueden ser encontrados en:
  La suma total de la Esencia íntima
  La suma de vocales del primer nombre + el segundo (si alguno tiene un 1 que
  proviene de un 10 reservado, se utiliza para esta cuenta)
  La suma total del Sendero del Mundo.
  La suma vertical de las vocales y consonantes de cada nombre y apellido
  (parciales del sendero del mundo)
  La suma total del Sendero Natal.
  La suma del número Potencial.
 */
function calcKarmas(ctx, resultsParciales) {
  const karmasEncontrados = new Set();
  const revisar = (v) => {
    v = Number(v);
    if (KARMAS_POSIBLES.includes(v)) karmasEncontrados.add(v);
  };

  const sumaVocalesCrudo = resultsParciales.esenciaCrudo ?? 0;
  const sumaConsonantesCrudo = resultsParciales.imagenCrudo ?? 0;
  const sumaMundoCrudo = resultsParciales.mundoCrudo ?? 0;

  revisar(sumaVocalesCrudo);
  revisar(sumaConsonantesCrudo);
  revisar(sumaMundoCrudo);
  revisar(resultsParciales.senderoNatal ?? 0);
  revisar(resultsParciales.potencial ?? 0);

  const vocalesRed = ctx.parciales.vocalesRed;
  const consonantesRed = ctx.parciales.consonantesRed;
  const mundosRed = vocalesRed.map((v, i) => reducirNumero(v + (consonantesRed[i] ?? 0)));

  vocalesRed.forEach(revisar);
  consonantesRed.forEach(revisar);
  mundosRed.forEach(revisar);

  const vocalesRaw = ctx.parciales.vocalesRaw;
  const consonantesRaw = ctx.parciales.consonantesRaw;
  const mundosRaw = vocalesRaw.map((v, i) => v + (consonantesRaw[i] ?? 0));

  vocalesRaw.forEach(revisar);
  consonantesRaw.forEach(revisar);
  mundosRaw.forEach(revisar);

  revisar(vocalesRaw.reduce((a, b) => a + b, 0));
  revisar(consonantesRaw.reduce((a, b) => a + b, 0));
  revisar(mundosRaw.reduce((a, b) => a + b, 0));

  return {
    karmas: [...karmasEncontrados].sort((a, b) => a - b),
    detalle: {}
  };
}

// Resultado 13: Lecciones Kármicas.
function calcLeccionesKarmicas(ctx) {
  const conteo = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  for (const l of ctx.letrasSolo) {
    const v = ALFABETO[l];
    if (v) conteo[v]++;
  }
  const faltan = [];
  for (let i = 1; i <= 9; i++) if (conteo[i] === 0) faltan.push(i);
  return { valor: faltan, conteo };
}

// Resultados 14–16: Doble Dígito Vocales/Consonantes/Total.
/* Regla:
 * - sumar vocales RAW nombre completo => r14
 * - sumar consonantes RAW => r15
 * - r16 = r14+r15
 * @param {object} ctx
 * @returns {{ddVocales:number, ddConsonantes:number, ddTotal:number}}
 */
function calcDoblesDigitos(ctx) {
  let ddVocales = 0, ddConsonantes = 0;
  for (const l of ctx.letrasSolo) {
    if (VOCALES_SET.has(l)) ddVocales += ALFABETO[l] || 0;
    else if (/[A-ZÑ]/.test(l)) ddConsonantes += ALFABETO[l] || 0;
  }
  return { ddVocales, ddConsonantes, ddTotal: ddVocales + ddConsonantes };
}

// Resultado 17: Doble Dígito Fecha.
// Regla:
// - sumar dígito a dígito de DDMMYYYY (sin reducir final).
function calcDobleDigitoFecha(ctx) {
  if (!ctx.fechaNacimientoISO) return { valor: null };
  const [anio, mes, dia] = ctx.fechaNacimientoISO.split("-");
  const valor = sumarDigitos(dia + mes + anio);
  return { valor };
}

// Resultado 18: Arcano Natal.
// Regla:
// - día + mes + año reducido a dos cifras (suma dígitos del año)
// - sin reducir final.
function calcArcanoNatal(ctx) {
  if (!ctx.fechaNacimientoISO || !ctx.anioNac || !ctx.mesNac || !ctx.diaNac) return { valor: null };
  const valor = ctx.diaNac + ctx.mesNac + sumarDigitos(ctx.anioNac);
  return { valor };
}


// --- Orquestación Base ---

//  Ejecuta todo el cálculo Base 1–18.
function calcularBasePipeline(ctxBase) {
  const esenciaIntima = calcEsenciaIntima(ctxBase);
  const imagen = calcImagen(ctxBase);
  const senderoMundo = calcSenderoMundo(ctxBase);
  const senderoNatal = calcSenderoNatal(ctxBase);
  const potencial = calcPotencial(ctxBase, {
    senderoMundo: senderoMundo.valor,
    senderoNatal: senderoNatal.valor
  });
  const cicloLetras = calcCicloLetras(ctxBase);
  const clavePersonal = calcClavePersonal(ctxBase);
  const letraLeccion = calcLetraLeccion(ctxBase);
  const regaloDivino = calcRegaloDivino(ctxBase);
  const etapas = calcEtapas(ctxBase, { senderoNatal: senderoNatal.valor });
  const desafios = calcDesafios(ctxBase, etapas.edades);
  const cicloVida = calcCicloVida(ctxBase);
  const karmas = calcKarmas(ctxBase, {
    esenciaCrudo: esenciaIntima.crudo,
    imagenCrudo: imagen.crudo,
    mundoCrudo: senderoMundo.crudo,
    senderoNatal: senderoNatal.valor,
    potencial: potencial.valor
  });
  const leccionesKarmicas = calcLeccionesKarmicas(ctxBase);
  const doblesDigitos = calcDoblesDigitos(ctxBase);
  const dobleDigitoFecha = calcDobleDigitoFecha(ctxBase);
  const arcanoNatal = calcArcanoNatal(ctxBase);

  return {
    esenciaIntima,
    imagen,
    senderoMundo,
    senderoNatal,
    potencial,
    cicloLetras,
    clavePersonal,
    letraLeccion,
    regaloDivino,
    etapas,
    desafios,
    cicloVida,
    karmas,
    leccionesKarmicas,
    doblesDigitos,
    dobleDigitoFecha,
    arcanoNatal
  };
}

function calcularResultado12Karmas(tablaData, resultsBase) {
  const karmasSet = new Set();

  // 1) Karmas horizontales (pares en filas: Esencia, Imagen, Mundo)
  if (tablaData.infoH) {
    tablaData.infoH.forEach(filaInfo => {
      filaInfo.forEach(info => {
        if (info?.karma && KARMAS_POSIBLES.includes(info.karma)) {
          karmasSet.add(info.karma);
        }
      });
    });
  }

  // 2) Karmas verticales (por columna)
  if (tablaData.infoV) {
    tablaData.infoV.forEach(filaInfo => {
      filaInfo.forEach(info => {
        if (info?.karma && KARMAS_POSIBLES.includes(info.karma)) {
          karmasSet.add(info.karma);
        }
      });
    });
  }

  // 3) Totales de fila con karma (Esencia, Imagen, Sendero del Mundo)
  if (tablaData.filas) {
    tablaData.filas.forEach(fila => {
      if (fila.karmaTotalInfo) {
        const m = fila.karmaTotalInfo.match(/Karma\s+(\d+)/);
        if (m) {
          const k = parseInt(m[1], 10);
          if (KARMAS_POSIBLES.includes(k)) karmasSet.add(k);
        }
      }
    });
  }

  // 4) Sendero Natal (usa el valor crudo que guardes para 13/14/16/19)
  if (resultsBase.senderoNatal?.crudo && KARMAS_POSIBLES.includes(resultsBase.senderoNatal.crudo)) {
    karmasSet.add(resultsBase.senderoNatal.crudo);
  }

  // 5) Número Potencial (igual: valor crudo, sin reducir)
  if (resultsBase.potencial?.crudo && KARMAS_POSIBLES.includes(resultsBase.potencial.crudo)) {
    karmasSet.add(resultsBase.potencial.crudo);
  }

  // Devolvemos array ordenado y sin repetidos
  return Array.from(karmasSet).sort((a, b) => a - b);
}
function calcTendenciaDestino(tablaData) {
  if (!tablaData || !tablaData.totalesFila) return null;

  const { esencia, imagen } = tablaData.totalesFila;

  if (!Number.isFinite(esencia) || !Number.isFinite(imagen)) return null;

  // Suma cruda de los totales de Esencia Íntima e Imagen de la tabla kármica
  return esencia + imagen;
}

// Renderiza los resultados Base en el DOM.
// Aquí se pintan inputs + spans detalle + tabla base kármica.
function renderBaseResults(resultsBase, ctxBase) {
  // 1–3 ya NO se pintan en inputs ni detalles sueltos
  // porque viven dentro de la tabla kármica.

  // 1 Esencia Íntima
  // setValue("esenciaIntima", resultsBase.esenciaIntima.valor ?? "");
  // pintarDetalle("esenciaIntimaDetalle", resultsBase.esenciaIntima.crudo, resultsBase.esenciaIntima.valor);

  // 2 Imagen
  // setValue("imagen", resultsBase.imagen.valor ?? "");
  // pintarDetalle("imagenDetalle", resultsBase.imagen.crudo, resultsBase.imagen.valor);

  // 3 Sendero del Mundo
  // setValue("serMundo", resultsBase.senderoMundo.valor ?? "");
  // pintarDetalle("serMundoDetalle", resultsBase.senderoMundo.crudo, resultsBase.senderoMundo.valor);

  // 4 Sendero Natal -> solo detalle debajo de tabla
  // (si dejaste input hidden, no molesta)
  setValue("senderoNatal", resultsBase.senderoNatal.valor ?? "");
  pintarDetalle("senderoNatalDetalle", resultsBase.senderoNatal.crudo, resultsBase.senderoNatal.valor);

  // 5 Potencial -> solo detalle debajo de tabla
  setValue("potencial", resultsBase.potencial.valor ?? "");
  pintarDetalle("potencialDetalle", resultsBase.potencial.crudo, resultsBase.potencial.valor);

  // 6 Ciclo Letras
  setValue("cicloLetras", resultsBase.cicloLetras.valor ?? "");

  // 7 Clave Personal
  setValue("clavePersonal", resultsBase.clavePersonal.valor ?? "");

  // 8 Letra L
  setValue("letraLeccion", resultsBase.letraLeccion.valor ?? "");

  // 9 Regalo Divino
  setValue("regaloDivino", resultsBase.regaloDivino.valor ?? "");

  // 10 Etapas
  const et = resultsBase.etapas;
  setText("etapa1_izq", et.rMes);
  setText("etapa1_centro", et.rDia);
  setText("etapa1_der", et.rAnio);
  setText("etapa2_izq", et.e1);
  setText("etapa2_der", et.e2);
  setText("etapa3", et.e3);
  setText("etapa4", et.e4);
  
  // 10.1 Desafíos
  const df = resultsBase.desafios;
  if (df) {
    // fila 1 (mes/día/año reducidos, igual que etapas)
    setText("desafio1_izq", df.rMes);
    setText("desafio1_centro", df.rDia);
    setText("desafio1_der", df.rAnio);

    // fila 2–4 con las restas
    setText("desafio2_izq", df.d1);
    setText("desafio2_der", df.d2);
    setText("desafio3", df.d3);
    setText("desafio4", df.d4);

    const edadesD = df.edades;
    setText("desafioTexto1", `De ${edadesD.inicio1} a ${edadesD.fin1} - ${df.d1}`);
    setText("desafioTexto2", `De ${edadesD.inicio2} a ${edadesD.inicio3 - 1} - ${df.d2}`);
    setText("desafioTexto3", `De ${edadesD.inicio3} a ${edadesD.inicio4 - 1} - ${df.d3}`);
    setText("desafioTexto4", `Desde ${edadesD.inicio4} en adelante - ${df.d4}`);
  }
  console.log("DEBUG desafios:", resultsBase.desafios);

  const edades = et.edades;
  setText("etapaTexto1", `De ${edades.inicio1} a ${edades.fin1} - ${et.e1}`);
  setText("etapaTexto2", `De ${edades.inicio2} a ${edades.inicio3 - 1} - ${et.e2}`);
  setText("etapaTexto3", `De ${edades.inicio3} a ${edades.inicio4 - 1} - ${et.e3}`);
  setText("etapaTexto4", `Desde ${edades.inicio4} en adelante - ${et.e4}`);

  // 11 Ciclo de Vida
  setValue("cicloVida", resultsBase.cicloVida.valor ?? "");
  toggleClass("cicloVida", "text-danger", resultsBase.cicloVida.tramo === "warning");

  // 12 Karmas
  setValue("karmas", resultsBase.karmas.karmas.join(", ") || "—");

  // 13 Lecciones Kármicas
  setValue("leccionesKarmicas", resultsBase.leccionesKarmicas.valor.join(", ") || "—");

  // 14-16 Dobles Dígitos
  setValue("dobleDigitoVocales", resultsBase.doblesDigitos.ddVocales);
  setValue("dobleDigitoConsonantes", resultsBase.doblesDigitos.ddConsonantes);
  setValue("dobleDigitoTotal", resultsBase.doblesDigitos.ddTotal);

  // 17 DD Fecha
  setValue("dobleDigitoFecha", resultsBase.dobleDigitoFecha.valor ?? "");

  // 18 Arcano Natal
  setValue("ArcanoNatal", resultsBase.arcanoNatal.valor ?? "");

  // Tabla Base Kármica
  const tablaData = buildTablaBaseKarmicaData(ctxBase, resultsBase);
  renderTablaBaseKarmica(tablaData);
  // Resultado 12: Karmas
  const karmasR12 = calcularResultado12Karmas(tablaData, resultsBase);
  // Ej: "13, 14, 19"
  setValue("karmas", karmasR12.join(", ") || "—");
  // Resultado Tendencia del Destino = total Esencia + total Imagen (tabla kármica)
  const tendenciaDestino = calcTendenciaDestino(tablaData);
  setValue("TendenciaDestino", tendenciaDestino ?? "");

}


/* ==========================
   5) PIPELINE PREDICTIVA (19–31)
========================== */

// --- Inputs / Context ---

// Lee inputs predictivos desde el DOM:
// - fechaNacimientoISO
// - anioEnCursoISO (input date)

function getPredictivaInputsFromDOM() {
  return {
    fechaNacimientoISO: $("fechaNacimiento")?.value ?? "",
    fechaEnCursoISO: $("anioEnCurso")?.value ?? ""
  };
}

//  Construye contexto predictivo combinando:
//  - inputs predictivos
//  - ctxBase y resultsBase ya calculados
// 
//  Incluye:
//  - fechaEnCurso Date
//  - anioEnCurso number
//  - edadActual en fechaEnCurso
//  - senderoNatalRaw recalculado con regla SN
//  - clavePersonalRaw desde resultsBase
function buildPredictivaContext(inputs, ctxBase, resultsBase) {
  const fechaEnCurso = parseFechaISO(inputs.fechaEnCursoISO);
  const anioEnCurso = fechaEnCurso ? getAnio(fechaEnCurso) : NaN;

  const anioNac = ctxBase.anioNac;
  const mesNac = ctxBase.mesNac;
  const diaNac = ctxBase.diaNac;

  // recalcular sendero natal raw con regla SN (igual que base)
  let senderoNatalRaw = null;
  if (anioNac && mesNac && diaNac) {
    const mesR = reducirFechaSN(mesNac);
    const diaR = reducirFechaSN(diaNac);
    const anioR = reducirFechaSN(sumarDigitos(anioNac));
    const sumaSN = mesR + diaR + anioR;
    senderoNatalRaw = (sumaSN === 33) ? 6 : reducirNumero(sumaSN);
  }

  const clavePersonalRaw = resultsBase?.clavePersonal?.valor ?? null;

  return {
    fechaNacimientoISO: inputs.fechaNacimientoISO,
    fechaEnCurso,
    anioEnCurso,
    anioNac, mesNac, diaNac,
    nombreCompleto: ctxBase.nombreCompleto,
    letrasSolo: soloLetras(ctxBase.nombreCompleto),
    clavePersonalRaw,
    senderoNatalRaw
  };
}


// --- Cálculos individuales ---

// Resultado 19: Año Personal.
// Regla:
// - mesReducido + diaReducido + anioEnCursoReducido
// - reduce preservando maestros.
function calcAnioPersonal(ctxP) {
  if (!ctxP.mesNac || !ctxP.diaNac || !Number.isFinite(ctxP.anioEnCurso)) {
    return { valor: null, crudo: null, partes: { mes: 0, dia: 0, anio: 0 } };
  }
  const mesR = reducirNumero(ctxP.mesNac);
  const diaR = reducirNumero(ctxP.diaNac);
  const anioR = reducirNumero(sumarDigitos(ctxP.anioEnCurso));
  const crudo = mesR + diaR + anioR;
  const valor = esMaestro(crudo) ? crudo : reducirNumero(crudo);
  return { valor, crudo, partes: { mes: mesR, dia: diaR, anio: anioR } };
}

// Resultado 21: Edad Actual (en fechaEnCurso).
// Regla:
// - misma que calcularEdadEnFecha().
function calcEdadActual(ctxP) {
  if (!ctxP.fechaEnCurso || !ctxP.anioNac || !ctxP.mesNac || !ctxP.diaNac) {
    return { valor: null, yaCumplio: null };
  }
  const yaCumplio = yaCumplioEnFecha(ctxP.fechaEnCurso, ctxP.mesNac, ctxP.diaNac);
  const valor = calcularEdadEnFecha(ctxP.anioNac, ctxP.mesNac, ctxP.diaNac, ctxP.fechaEnCurso);
  return { valor, yaCumplio };
}

// Resultado 20: Dígito de Edad.
// Regla:
// - edadAntes = edadActual
// - edadDespues = edadActual + 1
// - reducirNumero(edadAntes) + reducirNumero(edadDespues)
// - reducir final preservando maestros.
// NUEVA VERSIÓN (usa las dos edades del mismo año calendario)
function calcDigitoEdad(ctxP) {
  const edadesCal = calcularEdadesCalendario(ctxP);
  if (!edadesCal) {
    return { valor: null, crudo: null, edades: { antes: 0, despues: 0 } };
  }
  const antes = edadesCal.inicio;   // edad al 1 de enero del año en curso
  const despues = edadesCal.fin;    // edad al 31 de diciembre del año en curso
  // Reducimos cada edad y luego sumamos
  const sumaReducidas = reducirNumero(antes) + reducirNumero(despues);
  const valor = esMaestro(sumaReducidas) ? sumaReducidas : reducirNumero(sumaReducidas);
  return { valor, crudo: sumaReducidas, edades: { antes, despues } };
}

// Calcula las edades al inicio y al final del año calendario seleccionado
// en el campo "Año en curso".
//
// - inicio: edad al 1 de enero de anioEnCurso
// - fin:    edad al 31 de diciembre de anioEnCurso
//
// Solo se usa para mostrar el texto "35 + 36 →" del Dígito de Edad.

function calcularEdadesCalendario(ctxP) {
  if (
    !Number.isFinite(ctxP.anioEnCurso) ||
    !ctxP.anioNac || !ctxP.mesNac || !ctxP.diaNac
  ) {
    return null;
  }

  const fechaInicio = new Date(ctxP.anioEnCurso, 0, 1);   // 1 de enero
  const fechaFin    = new Date(ctxP.anioEnCurso, 11, 31); // 31 de diciembre

  const edadInicio = calcularEdadEnFecha(
    ctxP.anioNac, ctxP.mesNac, ctxP.diaNac, fechaInicio
  );
  const edadFin = calcularEdadEnFecha(
    ctxP.anioNac, ctxP.mesNac, ctxP.diaNac, fechaFin
  );

  return { inicio: edadInicio, fin: edadFin };
}


// Resultado 22: Mes Personal.
// Regla:
// - mes actual real (Date.now) reducido
// - anioPersonal + mesReducido => reducir final.
function calcMesPersonal(ctxP, anioPersonal) {
  if (!Number.isFinite(anioPersonal)) return { valor: null, crudo: null, mesActual: null };
  const mesActualReal = new Date().getMonth() + 1;
  const mesR = reducirNumero(mesActualReal);
  const crudo = anioPersonal + mesR;
  const valor = esMaestro(crudo) ? crudo : reducirNumero(crudo);
  return { valor, crudo, mesActual: mesActualReal };
}

/**
 * Resultado 23: Tránsito de Letra.
 * Regla:
 * - recorre letrasSolo circularmente
 * - cada letra dura ALFABETO[letra] años
 * - según edadActual, se devuelve letra vigente.
 */
function calcTransitoLetra(ctxP, edadActual) {
  const letras = ctxP.letrasSolo || "";
  if (!letras) return { valor: "—" };

  let acumulado = 0;
  let letraActual = letras[0];

  for (let i = 0; i < 500; i++) {
    const letra = letras[i % letras.length];
    const valor = ALFABETO[letra] || 0;
    if (valor === 0) continue;

    const siguiente = acumulado + valor;
    if (edadActual >= acumulado && edadActual < siguiente) {
      letraActual = letra;
      break;
    }
    acumulado = siguiente;
  }

  return { valor: letraActual };
}


// --- Armónicos / Cuatrimestres ---

/**
 * Reducción a un dígito usada en Armónicos básicos.
 * Igual a reducirADigito() local de old_predictiva.
 */
function reducirADigitoParaArmonicos(n) {
  return reducirEstrictoADigito(n);
}

/**
 * Armónico básico (Resultados 24–27).
 * Reglas:
 * - suma = anioActual + valor
 * - si suma < 2000 => sumar dígitos del número completo
 * - si >= 2000 => (primerosDos) + reducirADigito(ultimosDos)
 */
function armonicoBasico(valor, anioActual) {
  const suma = anioActual + valor;
  if (suma < 2000) return sumarDigitos(suma);

  const str = suma.toString();
  const primerosDos = parseInt(str.slice(0, 2), 10);
  const ultimosDos = parseInt(str.slice(2), 10);
  const reducidos = reducirADigitoParaArmonicos(ultimosDos);
  return primerosDos + reducidos;
}

/**
 * Armónico extendido (Resultados 28,30,31).
 * Reglas:
 * - suma = anioActual + valor
 * - si suma < 2000 => sumar dígitos del número completo
 * - si >=2000 => primerosDos + ultimosDos (sin reducir)
 * - si total > 78 => sumar dígitos del número completo
 */
function armonicoExtendido(valor, anioActual) {
  const suma = anioActual + valor;
  if (suma < 2000) return sumarDigitos(suma);

  const str = suma.toString();
  const primerosDos = parseInt(str.slice(0, 2), 10);
  const ultimosDos = parseInt(str.slice(2), 10);
  const total = primerosDos + ultimosDos;

  return total <= 78 ? total : sumarDigitos(suma);
}

/**
 * Calcula r24–r27:
 * - r24 (armónico) = anioEnCurso + ddAnioNacimiento
 * - r25 = anioEnCurso + edadActual
 * - r26 = anioEnCurso + senderoNatalRaw
 * - r27 = anioEnCurso + clavePersonalRaw
 */
function calcArmonicosBasicos(ctxP, edadActual) {
  const ddAnioNac = ctxP.anioNac ? sumarDigitos(ctxP.anioNac) : 0;
  const r24 = armonicoBasico(ddAnioNac, ctxP.anioEnCurso);
  const r25 = armonicoBasico(edadActual, ctxP.anioEnCurso);
  const r26 = armonicoBasico(ctxP.senderoNatalRaw || 0, ctxP.anioEnCurso);
  const r27 = armonicoBasico(ctxP.clavePersonalRaw || 0, ctxP.anioEnCurso);
  return { r24, r25, r26, r27 };
}

/**
 * Calcula r28–r31:
 * - r28 = armonicoExtendido(ddAnioNac)
 * - r29 = regla especial (ver calcResultado29)
 * - r30 = armonicoExtendido(senderoNatalRaw)
 * - r31 = armonicoExtendido(clavePersonalRaw)
 */
function calcArmonicosExtendidos(ctxP, edadActual) {
  const ddAnioNac = ctxP.anioNac ? sumarDigitos(ctxP.anioNac) : 0;
  const r28 = armonicoExtendido(ddAnioNac, ctxP.anioEnCurso);
  const r29 = calcResultado29(ctxP, edadActual);
  const r30 = armonicoExtendido(ctxP.senderoNatalRaw || 0, ctxP.anioEnCurso);
  const r31 = armonicoExtendido(ctxP.clavePersonalRaw || 0, ctxP.anioEnCurso);
  return { r28, r29, r30, r31 };
}

/**
 * Resultado 29 especial:
 * - suma29 = anioEnCurso + edadActual
 * - total29 = primerosDos + ultimosDos
 * - si total29 > 78 => sumar dígitos del número completo
 */
function calcResultado29(ctxP, edadActual) {
  const suma29 = ctxP.anioEnCurso + edadActual;
  const str = suma29.toString();
  const primerosDos = parseInt(str.slice(0, 2), 10);
  const ultimosDos = parseInt(str.slice(2), 10);
  let total = primerosDos + ultimosDos;
  if (total > 78) total = sumarDigitos(suma29);
  return total;
}


// --- Orquestación Predictiva ---

/**
 * Ejecuta cálculo Predictivo 19–31.
 * No toca DOM.
 */
function calcularPredictivaPipeline(ctxP) {
  const anioPersonal = calcAnioPersonal(ctxP);
  const edadActualObj = calcEdadActual(ctxP);
  const edadActual = edadActualObj.valor ?? NaN;
  ctxP.edadActual = edadActual;

  const digitoEdad = calcDigitoEdad(ctxP);
  const mesPersonal = calcMesPersonal(ctxP, anioPersonal.valor ?? NaN);
  const transitoLetra = calcTransitoLetra(ctxP, edadActual);

  const armonicosBasicos = calcArmonicosBasicos(ctxP, edadActual);
  const armonicosExtendidos = calcArmonicosExtendidos(ctxP, edadActual);

  return {
    anioPersonal,
    edadActual: edadActualObj,
    digitoEdad,
    mesPersonal,
    transitoLetra,
    armonicosBasicos,
    armonicosExtendidos
  };
}

/**
 * Renderiza resultados Predictivos:
 * - inputs/spans 19–23
 * - spans resultado24..31
 * - cabeceras cuatrimestres
 */
function renderPredictivaResults(resultsP, ctxP) {
  actualizarCabecerasCuatrimestres(ctxP.fechaNacimientoISO);

  // 19 Año Personal
  const ap = resultsP.anioPersonal;
  setValue("anioPersonal", ap.valor ?? "");

  if (ap.partes) {
    // mostramos la cuenta en el label
    setText(
      "anioPersonalTexto",
      `19. Año Personal ${ap.partes.dia} + ${ap.partes.mes} + ${ap.partes.anio} →`
    );
  } else {
    setText("anioPersonalTexto", "19. Año Personal");
  }
  // 20 Dígito de Edad
  setValue("digitoEdad", resultsP.digitoEdad.valor ?? "");

  // Texto "35 + 36 →" basado en AÑO CALENDARIO (1/1 y 31/12 del año en curso)
  const edadesCal = calcularEdadesCalendario(ctxP);
  if (edadesCal) {
    setText(
      "digitoEdadTexto",
      `20. Dígito de Edad ${edadesCal.inicio} + ${edadesCal.fin} →`
    );
  } else if (resultsP.digitoEdad.edades) {
    // Fallback por si faltan datos: comportamiento antiguo
    setText(
      "digitoEdadTexto",
      `20. Dígito de Edad ${resultsP.digitoEdad.edades.antes} + ${resultsP.digitoEdad.edades.despues} →`
    );
  }


  // 21 Edad Actual
  setValue("edadActual", resultsP.edadActual.valor ?? "");

  // 22 Mes Personal
  setValue("mesPersonal", resultsP.mesPersonal.valor ?? "");

  // 23 Tránsito de letra
  setValue("transitoLetra", resultsP.transitoLetra.valor ?? "—");

  // 24–31
  const b = resultsP.armonicosBasicos;
  const e = resultsP.armonicosExtendidos;

  setText("resultado24", b.r24);
  setText("resultado25", b.r25);
  setText("resultado26", b.r26);
  setText("resultado27", b.r27);

  setText("resultado28", e.r28);
  setText("resultado29", e.r29);
  setText("resultado30", e.r30);
  setText("resultado31", e.r31);
}


/* ==========================
   6) PIPELINE ABRACADABRA (32)
========================== */

// --- Inputs / Context ---

/**
 * Lee inputs necesarios para Abracadabra desde DOM.
 * Usa nombres/apellidos.
 */
function getAbracadabraInputsFromDOM() {
  return {
    nombresRaw: $("nombres")?.value ?? "",
    apellidosRaw: $("apellidos")?.value ?? ""
  };
}

/**
 * Construye contexto Abracadabra:
 * - nombreCompletoSinEspacios (solo letras)
 * - primeras9 (slice + padEnd)
 */
function buildAbracadabraContext(inputs, ctxBase) {
  const nombreCompleto = ctxBase ? ctxBase.nombreCompleto: obtenerNombreCompletoNormalizado(inputs.nombresRaw, inputs.apellidosRaw);
  const nombreCompletoSinEspacios = soloLetras(nombreCompleto);
  const primeras9 = nombreCompletoSinEspacios.slice(0, 9).padEnd(9, " ");
  return {nombreCompletoSinEspacios, primeras9,
    anioNac: ctxBase?.anioNac ?? null,
    mesNac: ctxBase?.mesNac ?? null,
    diaNac: ctxBase?.diaNac ?? null
  };
}
/**
 * Calcula la línea roja sobre las letras:
 *
 * - letras 1,2,3: valorLetra + mesNacimientoReducido (excepto noviembre=11)
 * - letras 4,5,6: valorLetra + díaNacimiento reducido a un dígito (salvo 11/22)
 * - letras 7,8,9: valorLetra + añoNacimiento reducido (suma dígitos; si 11/22 se respeta)
 *
 * Devuelve array de 9 strings ya formateados ("13/4", "3", "28/10/1", etc).
 */

function calcAbracadabraTopRow(ctxA, fila1) {
  const { mesNac, diaNac, anioNac } = ctxA;
  const top = Array(9).fill("");

  if (!mesNac || !diaNac || !anioNac) return top;

  const mesR  = reducirMesAbracadabra(mesNac);         // ej: 5
  const diaR  = reducirDiaAbracadabra(diaNac);         // ej: 29 -> 11
  const anioR = reducirAnioAbracadabra(anioNac);       // ej: 1990 -> 1

  for (let i = 0; i < 9; i++) {
    const base = Number(fila1[i] ?? 0);
    let suma = null;

    if (i <= 2) {          // letras 1–3 → mes
      suma = base + mesR;
    } else if (i <= 5) {   // letras 4–6 → día
      suma = base + diaR;
    } else {               // letras 7–9 → año
      suma = base + anioR;
    }

    top[i] = formatearAbracadabraTop(suma);
  }

  return top;
}




// --- Cálculos ---

/**
 * Calcula Fila 1 Abracadabra:
 * - toma ctxA.primeras9
 * - mapea cada letra a valor ALFABETO (si espacio => 0)
 */
function calcAbracadabraFila1(ctxA) {
  const letras = ctxA.primeras9.split("");
  const fila1 = letras.map(l => ALFABETO[l] || 0);
  return { fila1, letras };
}

/**
 * Calcula filas 2..9:
 * - cada celda = reducirEstrictoADigito(suma de dos superiores)
 * - sin maestros.
 */
function calcAbracadabraFilas2a9(fila1) {
  const filas = [fila1];
  for (let f = 2; f <= 9; f++) {
    const anterior = filas[f - 2];
    const actual = [];
    for (let c = 0; c < anterior.length - 1; c++) {
      const suma = anterior[c] + anterior[c + 1];
      actual.push(reducirEstrictoADigito(suma));
    }
    filas.push(actual);
  }
  return filas;
}

/**
 * Calcula rX_sum:
 * - total fila
 * - primera reducción sumando dígitos
 * - segunda reducción si >=10
 * - devuelve string "total/primera/segunda"
 */
function calcAbracadabraSumas(filas) {
  return filas.map(fila => {
    const total = fila.reduce((a, b) => a + b, 0);
    const primera = sumarDigitos(total);
    const segunda = primera >= 10 ? sumarDigitos(primera) : primera;
    return `${total}/${primera}/${segunda}`;
  });
}

/**
 * Orquestador Abracadabra:
 * ctxA -> calcFila1 -> calcFilas2a9 -> calcSumas
 */
function calcularAbracadabraPipeline(ctxA) {
  const { fila1, letras } = calcAbracadabraFila1(ctxA);
  const topRow = calcAbracadabraTopRow(ctxA, fila1);
  const filas = calcAbracadabraFilas2a9(fila1);
  const sumas = calcAbracadabraSumas(filas);
  return { letrasFila1: letras, filas, sumas, topRow };
}

/**
 * Renderiza Abracadabra:
 * - letras en abracadabra_nombre_i
 * - valores fila1 en r1cX_abracadabra_valor_X
 * - resto de celdas rFcC
 * - sumas rX_sum
 */
function renderAbracadabraResults(resultsA, ctxA) {
  const { letrasFila1, filas, sumas, topRow } = resultsA;

  // Fila 1: letras + valores + línea roja
  for (let i = 0; i < 9; i++) {
    setText(
      `abracadabra_nombre_${i + 1}`,
      letrasFila1[i] === " " ? "" : letrasFila1[i]
    );
    setText(
      `r1c${i + 1}_abracadabra_valor_${i + 1}`,
      filas[0]?.[i] ?? ""
    );
    // línea roja superior (13/4, 28/10/1, etc.)
    setText(
      `abracadabra_top_${i + 1}`,
      topRow?.[i] ?? ""
    );
  }

  // Filas 2..9 de la pirámide
  for (let f = 2; f <= 9; f++) {
    const fila = filas[f - 1] || [];
    for (let c = 0; c < fila.length; c++) {
      setText(`r${f}c${c + 1}`, fila[c] ?? "");
    }
  }

  // Sumas de cada fila (r1_sum .. r9_sum)
  for (let i = 0; i < sumas.length; i++) {
    setText(`r${i + 1}_sum`, sumas[i] ?? "");
  }
}


/* ==========================
   7) ATAJOS DE TECLADO / TOASTS
========================== */

/**
 * Muestra toast flotante no intrusivo.
 * Misma UI que old_numerologia.js.
 */
function mostrarToast(mensaje) {
  const aviso = document.createElement("div");
  aviso.textContent = mensaje;
  aviso.style.position = "fixed";
  aviso.style.bottom = "20px";
  aviso.style.right = "20px";
  aviso.style.background = "rgba(0,0,0,0.75)";
  aviso.style.color = "white";
  aviso.style.padding = "8px 12px";
  aviso.style.borderRadius = "8px";
  aviso.style.fontSize = "0.9rem";
  aviso.style.zIndex = 3000;
  aviso.style.transition = "opacity 0.4s ease";
  document.body.appendChild(aviso);
  setTimeout(() => (aviso.style.opacity = "0"), 1800);
  setTimeout(() => aviso.remove(), 2200);
}

/**
 * Inicializa atajos:
 * Alt+C => calcular todo
 * Alt+P => solo predictiva
 * Alt+L => logout
 * Alt+M => modo oscuro
 * Alt+Z => limpiar (pendiente)
 *
 * Debe ignorar si foco está en input/textarea.
 * Consideración futura: capturas de mouse (pendiente tu TODO).
 */
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const activo = document.activeElement?.tagName?.toLowerCase();
    if (activo === "input" || activo === "textarea") return;

    if (e.altKey) {
      switch (e.key.toLowerCase()) {
        case "c":
          e.preventDefault();
          $("btnCalcular")?.click();
          mostrarToast("🔮 Cálculo completo ejecutado (Alt + C)");
          break;
        case "p":
          e.preventDefault();
          $("btnCalcularPredictiva")?.click();
          mostrarToast("📆 Cálculo predictivo ejecutado (Alt + P)");
          break;
        case "l":
          e.preventDefault();
          $("btnLogout")?.click();
          mostrarToast("🚪 Sesión cerrada (Alt + L)");
          break;
        case "m":
          e.preventDefault();
          $("toggleModo")?.click();
          mostrarToast("🌗 Modo visual cambiado (Alt + M)");
          break;
        case "z":
          e.preventDefault();
          limpiarInputsYResultados();
          mostrarToast("🧹 Limpieza completa (Alt + Z)");
          break;
        default:
          break;
      }
    }
  });
}

/**
 * Limpia todos los inputs/resultados y vuelve foco a "nombres".
 * Se dispara con Alt+Z.
 * Debe:
 * - resetear inputs de resultados base/predictiva/abracadabra
 * - limpiar spans detalle y tablas
 * - resetear campos del formulario principal
 */
function limpiarInputsYResultados() {
  // limpiar formulario principal
  setValue("nombres", "");
  setValue("apellidos", "");
  setValue("fechaNacimiento", "");
  setValue("anioEnCurso", "");

  // limpiar inputs resultados base/predictiva
  const idsInputs = [
    "esenciaIntima","imagen","serMundo","senderoNatal","potencial",
    "cicloLetras","clavePersonal","letraLeccion","regaloDivino",
    "cicloVida","karmas","leccionesKarmicas",
    "dobleDigitoVocales","dobleDigitoConsonantes","dobleDigitoTotal",
    "dobleDigitoFecha","ArcanoNatal",
    "labelanioPersonal","anioPersonal","digitoEdad","edadActual",
    "mesPersonal","transitoLetra",
    "TendenciaDestino"

  ];
  idsInputs.forEach(id => setValue(id, ""));

  // spans detalle base
  ["esenciaIntimaDetalle","imagenDetalle","serMundoDetalle","senderoNatalDetalle","potencialDetalle"]
    .forEach(id => setHTML(id, ""));

  // etapas
  ["etapa1_izq","etapa1_centro","etapa1_der","etapa2_izq","etapa2_der","etapa3","etapa4",
   "etapaTexto1","etapaTexto2","etapaTexto3","etapaTexto4",
   "desafio1_izq","desafio1_centro","desafio1_der","desafio2_izq","desafio2_der","desafio3","desafio4",
   "desafioTexto1","desafioTexto2","desafioTexto3","desafioTexto4"
  ].forEach(id => setText(id, ""));


  // cuatrimestres headers + resultados 24-31
  ["cuatri1-header","cuatri2-header","cuatri3-header"].forEach(id => setText(id, ""));
  ["resultado24","resultado25","resultado26","resultado27","resultado28","resultado29","resultado30","resultado31"]
    .forEach(id => setText(id, ""));

  // tabla base karmica
  // const tabla = $("tablaBaseKarma");
  // if (tabla) tabla.innerHTML = "";
  renderTablaBaseKarmicaPlaceholder();

  // Abracadabra celdas
  for (let i = 1; i <= 9; i++) {
    setText(`abracadabra_nombre_${i}`, "");
    setText(`r1c${i}_abracadabra_valor_${i}`, "");
    setText(`abracadabra_top_${i}`, "");
    setText(`r${i}_sum`, "");
  }
  for (let f = 2; f <= 9; f++) {
    for (let c = 1; c <= (10 - f); c++) {
      setText(`r${f}c${c}`, "");
    }
  }

  // foco
  $("nombres")?.focus();
}  // Alt+Z (pendiente)


/* ==========================
   8) LOGIN SIMPLE LOCAL
========================== */

/**
 * Usuarios locales permitidos.
 * Estructura: {email:string,password:string}
 */
const USUARIOS_PERMITIDOS = [
  { email: "admin", password: "admin" },
  { email: "martin", password: "123" },
  { email: "guido", password: "123" },
  { email: "demo", password: "123" }
];

/**
 * Inicializa login local:
 * - si hay usuarioAutenticado en localStorage => oculta overlay
 * - engancha listener al botón Entrar
 * - engancha listener a Logout
 */
function initLogin() {
  const overlay = $("login-overlay");
  const btnLogin = $("btnLogin");
  if (!overlay || !btnLogin) return;

  if (localStorage.getItem("usuarioAutenticado")) {
    overlay.style.display = "none";
  }

  btnLogin.addEventListener("click", handleLoginSubmit);
  $("btnLogout")?.addEventListener("click", handleLogout);
}

/**
 * Maneja submit de login:
 * - valida campos
 * - busca en USUARIOS_PERMITIDOS
 * - guarda en localStorage
 * - anima y oculta overlay
 * - muestra mensajes de error
 */
function handleLoginSubmit() {
  const overlay = $("login-overlay");
  const inputEmail = $("loginEmail");
  const inputPassword = $("loginPassword");
  const loginError = $("loginError");
  const btnLogin = $("btnLogin");

  if (!overlay || !inputEmail || !inputPassword || !loginError || !btnLogin) return;

  const email = inputEmail.value.trim().toLowerCase();
  const password = inputPassword.value.trim();

  if (!email || !password) {
    loginError.textContent = "Completa ambos campos";
    loginError.style.display = "block";
    return;
  }

  const user = USUARIOS_PERMITIDOS.find(u =>
    u.email.toLowerCase() === email && u.password === password
  );

  if (user) {
    localStorage.setItem("usuarioAutenticado", email);
    loginError.style.display = "none";

    overlay.style.transition = "opacity 0.6s ease";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 600);
  } else {
    loginError.textContent = "Acceso denegado";
    loginError.style.display = "block";
  }
}

/**
 * Maneja logout:
 * - borra usuarioAutenticado
 * - recarga página
 */
function handleLogout() {
  localStorage.removeItem("usuarioAutenticado");
  location.reload();
}


/* ==========================
   9) TEMA OSCURO / UI
========================== */

/**
 * Inicializa el botón de modo oscuro:
 * - toggle dark-mode en #body
 * - cambia icono
 */
function initThemeToggle() {
  const btn = $("toggleModo");
  const body = $("body");
  if (!btn || !body) return;

  btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    btn.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
  });
}


/* ==========================
   10) LISTENERS / ENTRADA
========================== */

/**
 * Flujo principal "Calcular todo":
 * - lee inputs base y predictiva
 * - build ctxBase -> calcularBasePipeline -> renderBaseResults
 * - build ctxP -> calcularPredictivaPipeline -> renderPredictivaResults
 * - build ctxA -> calcularAbracadabraPipeline -> renderAbracadabraResults
 */
function mainCalcularTodo() {
  const inputsBase = getBaseInputsFromDOM();
  const ctxBase = buildBaseContext(inputsBase);
  const resultsBase = calcularBasePipeline(ctxBase);
  renderBaseResults(resultsBase, ctxBase);

  const inputsP = getPredictivaInputsFromDOM();
  const ctxP = buildPredictivaContext(inputsP, ctxBase, resultsBase);
  if (ctxP.fechaEnCurso && Number.isFinite(ctxP.anioEnCurso)) {
    const resultsP = calcularPredictivaPipeline(ctxP);
    renderPredictivaResults(resultsP, ctxP);
  }

  const inputsA = getAbracadabraInputsFromDOM();
  const ctxA = buildAbracadabraContext(inputsA, ctxBase);
  const resultsA = calcularAbracadabraPipeline(ctxA);
  renderAbracadabraResults(resultsA, ctxA);
}

/**
 * Flujo "Solo predictiva":
 * - requiere base previa o recalcular base mínima para ctxP
 * - build ctxP -> calcularPredictivaPipeline -> renderPredictivaResults
 */
function mainCalcularSoloPredictiva() {
  // recalculamos base mínima para tener clave personal / letras / SN raw coherentes
  const inputsBase = getBaseInputsFromDOM();
  const ctxBase = buildBaseContext(inputsBase);
  const resultsBase = calcularBasePipeline(ctxBase);

  const inputsP = getPredictivaInputsFromDOM();
  const ctxP = buildPredictivaContext(inputsP, ctxBase, resultsBase);
  if (!ctxP.fechaEnCurso || !Number.isFinite(ctxP.anioEnCurso)) return;

  const resultsP = calcularPredictivaPipeline(ctxP);
  renderPredictivaResults(resultsP, ctxP);
}

/**
 * Inicializa listeners UI:
 * - btnCalcular click => mainCalcularTodo
 * - btnCalcularPredictiva click => mainCalcularSoloPredictiva
 */
function initEventListeners() {
  $("btnCalcular")?.addEventListener("click", mainCalcularTodo);
  $("btnCalcularPredictiva")?.addEventListener("click", mainCalcularSoloPredictiva);
}


/* ==========================
   BOOTSTRAP
========================== */

document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initThemeToggle();
  initKeyboardShortcuts();
  initEventListeners();
  renderTablaBaseKarmicaPlaceholder();
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
    Reducir mes, día y año de nacimiento con la regla especial de Sendero Natal
    (11 y 22 se preservan, 29 se trata como 11 y no se acepta 33) → sumar partes
    → reducir total (si diera 33 se reduce a 6).

Resultado 5 → Potencial  
    Sendero Natal + Sendero del Mundo → reducir.

Resultado 6 → Ciclo de Letras  
    Total de letras del nombre completo (sin espacios ni símbolos).

Resultado 7 → Clave Personal  
    Según tabla fija: combinación entre mes y día de nacimiento
    (TABLA_CLAVE_PERSONAL).

Resultado 8 → Letra L  
    Posición alfabética de la primera letra del primer nombre (A=1..Z=26).

Resultado 9 → Regalo Divino  
    Suma de los dos últimos dígitos del año de nacimiento → reducir
    (manteniendo 11, 22 o 33 si aparecen).

Resultado 10 → Etapas  
    Etapa 1: mes reducido (regla SN) + día reducido (regla SN) → reducir
    (manteniendo 11 y 22; 29 cuenta como 11).  
    Etapa 2: día reducido + año reducido (suma dígitos del año y aplicar regla SN)
    → reducir.  
    Etapa 3: Etapa 1 + Etapa 2 → reducir (manteniendo 11 o 22).  
    Etapa 4: mes reducido + año reducido → reducir.  
    Además, se calculan las edades de transición entre etapas a partir del
    Sendero Natal (Resultado 4).

Resultado 11 → Ciclo de Vida  
    Según la edad actual en la fecha de referencia:  
      • 0–27 años (y 81–107): usa el mes.  
      • 28–54 años (y 108–134): usa el día.  
      • 55–80 años: usa el año (suma de dígitos).  
      • > 134 años: vuelve a usar el mes y se marca como caso “warning”.  
    En todos los casos se reduce preservando 11 y 22.

Resultado 12 → Karmas  
    Se buscan los karmas 13, 14, 16 y 19 combinando la TABLA BASE KÁRMICA
    y los números principales.  
    Reglas especiales para el 10:
      • En filas (horizontal) el 10 cuenta como 1 para detectar karmas.  
      • En columnas (vertical) el 10 cuenta como 10.

    a) Karmas horizontales (filas de la tabla)  
       Se trabaja sobre las tres filas:
         - Esencia Íntima (vocales por palabra),
         - Imagen (consonantes por palabra),
         - Sendero del Mundo (vocales + consonantes por palabra).
       En horizontal se consideran, entre otros:
         • La suma total de la Esencia Íntima (parciales de vocales de todas
           las palabras, tomando 10 como 1 para el cálculo de karma).  
         • La suma de vocales del primer y segundo nombre
           (si alguno tiene un 1 que proviene de un “10 reservado”, se usa
           igualmente para esta suma).  
         • La suma total del Sendero del Mundo por palabras
           (también con la regla de 10→1 en filas).  
       Cuando alguna de estas sumas da 13, 14, 16 o 19, se marca la fila con “k”
       en la tabla (y se añade el karma correspondiente a la lista del Resultado 12).

    b) Karmas verticales (columnas de la tabla)  
       Para cada columna se suman, de forma acumulativa, los parciales de:
         • Esencia Íntima (vocales),  
         • Imagen (consonantes).  
       Es decir, se trabaja con los parciales crudos que generan el Sendero del
       Mundo antes de reducir.  
       En vertical el 10 se toma como 10 real (no como 1).  
       Si el acumulado de una columna alcanza 13, 14, 16 o 19, se marca esa
       columna con “k” y se agrega ese karma al Resultado 12.

    c) Totales y números principales  
       Además de la tabla, también se revisan:
         • El total crudo del Sendero Natal (Resultado 4, antes de reducir).  
         • El total crudo del Potencial (Resultado 5, antes de reducir).  
       Si alguno de ellos es 13, 14, 16 o 19, se agrega a la lista de karmas.

    Todos los karmas detectados (filas, columnas, Sendero Natal y Potencial)
    se agrupan sin repetir y se muestran en el campo “12. Karmas”.

Resultado 13 → Lecciones Kármicas  
    Números del 1 al 9 que NO aparecen en el nombre completo, al mapear cada
    letra según ALFABETO y contar cuántas veces aparece cada valor.

Resultado 14 → Doble Dígito (Vocales)  
    Suma sin reducir de todas las vocales del nombre completo.

Resultado 15 → Doble Dígito (Consonantes)  
    Suma sin reducir de todas las consonantes del nombre completo.

Resultado 16 → Doble Dígito (Total)  
    Suma de los Resultados 14 + 15 (sin reducir).

Resultado 17 → Doble Dígito (Fecha)  
    Suma dígito a dígito de día + mes + año de nacimiento (sin reducir
    el resultado final).

Resultado 18 → Arcano Natal  
    Día + mes + año reducido a dos cifras (suma de dígitos del año),
    sin reducir el total final.

───────────────────────────────────────────────────────────────────────────────

Resultado 19 → Año Personal  
    Mes reducido + día reducido + año en curso reducido → reducir final,
    preservando 11 o 22 si aparecen.

Resultado 20 → Dígito de Edad  
    Se toman la edad “antes” y “después” (edad actual y edad actual + 1).  
    Se reduce cada edad por separado y luego se suman esas reducciones; el
    resultado se vuelve a reducir, manteniendo 11 o 22 si aparecen.

Resultado 21 → Edad Actual  
    Diferencia entre el año en curso y el año de nacimiento, considerando
    si ya cumplió años en la fecha seleccionada como “Año en curso”.

Resultado 22 → Mes Personal  
    Año Personal + mes actual reducido → reducir (manteniendo 11 o 22 si aparecen).

Resultado 23 → Tránsito de Letra  
    Se recorre el nombre completo (letrasSolo) y cada letra dura “valor
    alfabético” años. Se suman intervalos hasta ubicar en qué tramo cae la
    edad actual, y la letra de ese tramo es el Tránsito del año.

───────────────────────────────────────────────────────────────────────────────

Resultados 24–27 → Armónicos / Cuatrimestres (versión básica)  
    24 → Año actual + doble dígito del año de nacimiento.  
    25 → Año actual + edad actual.  
    26 → Año actual + Sendero Natal.  
    27 → Año actual + Clave Personal.  

    Regla básica:
      • Si la suma < 2000 → sumar dígitos directamente y reducir a un dígito
        (1–9), salvo que aparezca un maestro (11, 22).  
      • Si la suma ≥ 2000 → se toman los dos primeros dígitos + los dos últimos
        reducidos a un sólo dígito (1–9). El resultado de esa suma es el
        armónico (si coincide con 11 o 22 se preserva).

Resultados 28–31 → Armónicos / Cuatrimestres (versión extendida)  
    Igual que los anteriores, pero sin reducir los dos últimos dígitos:  
      28 → Año actual + doble dígito del año de nacimiento.  
      29 → Año actual + edad actual (con regla especial en calcResultado29).  
      30 → Año actual + Sendero Natal.  
      31 → Año actual + Clave Personal.  

    Regla extendida:
      • Si la suma < 2000 → sumar dígitos directamente.  
      • Si la suma ≥ 2000 → dos primeros dígitos + dos últimos dígitos (sin
        reducir).  
      • Si el total resultante > 78 → se suman los dígitos del número completo
        hasta obtener un valor coherente con la tabla.

───────────────────────────────────────────────────────────────────────────────

Resultado 32 → Abracadabra  
    Pirámide numerológica de 9 filas:  
      • Fila 1: primeras 9 letras del nombre completo → valores según ALFABETO
        (espacios cuentan como 0).  
      • Filas 2–9: cada celda es la suma de las dos celdas superiores, reducida
        estrictamente a un dígito (1–9), sin conservar maestros.  
    Además, cada fila tiene una suma total y dos reducciones consecutivas
    (total / primera reducción / segunda reducción), que reflejan la vibración
    progresiva del nombre en forma de triángulo.

═══════════════════════════════════════════════════════════════════════════════
*/
