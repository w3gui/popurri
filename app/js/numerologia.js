/* ============================================================================
   numerologia.js
   Filosofía:
   - Helpers puros arriba, reutilizables por Base / Predictiva / Abracadabra.
   - Pipelines: construir contexto -> calcular resultados -> renderizar.
   - Toda lógica numerológica fuera del DOM (salvo renderers y DOM utils).
============================================================================ */

/* ==========================
   0) CONSTANTES / DATA
========================== */

/**
 * Tabla fija para calcular Clave Personal (Resultado 7).
 * Estructura: TABLA_CLAVE_PERSONAL[mesEnMinuscula][dia] => valor (sin reducir).
 * Reglas:
 * - mes: nombre en español en minúsculas: "enero"..."diciembre".
 * - dia: entero 1..31 (o 29 para febrero bisiesto).
 * - Si no existe combinación válida, se retorna vacío / null en el cálculo.
 */
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

/**
 * Mapeo numerológico alfabético (A=1..I=9, J=1..R=9, S=1..Z=8, Ñ=5).
 * Se usa para:
 * - parciales de vocales/consonantes
 * - tránsito de letra
 * - lecciones kármicas
 * - abracadabra fila 1
 */
const ALFABETO = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

/** Conjunto de vocales consideradas para Esencia Íntima y dobles dígitos. */
const VOCALES_SET = new Set(["A", "E", "I", "O", "U"]);

/** Valores kármicos detectables. */
const KARMAS_POSIBLES = [13, 14, 16, 19];

/** Números maestros (no se reducen en reducirNumero). */
const MAESTROS = [11, 22, 33];

/** Nombres de meses para UI/cabeceras. Índice 0..11. */
const MESES_NOMBRE = [
  "Enero","Febrero","Marzo",
  "Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre",
  "Octubre","Noviembre","Diciembre"
];

/* ==========================
   1) HELPERS COMPARTIDOS
========================== */

// --- DOM utils ---


/**
 * Acceso rápido a un elemento por id.
 * @param {string} id - Id del elemento HTML.
 * @returns {HTMLElement|null} - Elemento o null si no existe.
 */
function $(id) {
  return document.getElementById(id);
}

/**
 * Setea el value de un input/textarea si existe.
 * @param {string} id - Id del input.
 * @param {string|number|null} value - Valor a asignar. Null/undefined => "".
 */
function setValue(id, value) {
  const el = $(id);
  if (!el) return;
  el.value = (value === null || value === undefined) ? "" : value;
}

/**
 * Setea el textContent de un nodo si existe.
 * @param {string} id - Id del elemento.
 * @param {string|number|null} value - Texto a asignar.
 */
function setText(id, value) {
  const el = $(id);
  if (!el) return;
  el.textContent = (value === null || value === undefined) ? "" : value;
}

/**
 * Setea el innerHTML de un nodo si existe.
 * Usar solo para render seguro controlado (spans/tabla).
 * @param {string} id - Id del elemento.
 * @param {string} html - HTML a asignar.
 */
function setHTML(id, html) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = html ?? "";
}

/**
 * Agrega/quita una clase CSS.
 * @param {string} id - Id del elemento.
 * @param {string} className - Clase a alternar.
 * @param {boolean} [force] - Si se especifica, fuerza add/remove.
 */
function toggleClass(id, className, force) {
  const el = $(id);
  if (!el) return;
  if (typeof force === "boolean") el.classList.toggle(className, force);
  else el.classList.toggle(className);
}


// --- Texto / Normalización ---

/**
 * Normaliza texto para cálculos:
 * - Quita acentos/diacríticos
 * - Convierte ç -> c
 * - Normaliza ñ/Ñ
 * - Pasa a mayúsculas
 *
 * Equivale a normalizarTexto() de old_numerologia.js.
 *
 * @param {string} texto - Texto crudo del usuario.
 * @returns {string} Texto normalizado en mayúsculas A-ZÑ sin diacríticos.
 */

// --- Texto / Normalización ---
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c").replace(/Ç/g, "C")
    .replace(/ñ/g, "Ñ").replace(/Ñ/g, "Ñ")
    .toUpperCase();
}

/**
 * Construye nombre completo normalizado "NOMBRES APELLIDOS".
 * Maneja trims y espacios repetidos.
 *
 * @param {string} nombresRaw
 * @param {string} apellidosRaw
 * @returns {string} nombreCompleto normalizado.
 */
function obtenerNombreCompletoNormalizado(nombresRaw, apellidosRaw) {
  const n = normalizarTexto((nombresRaw || "").trim());
  const a = normalizarTexto((apellidosRaw || "").trim());
  return `${n} ${a}`.trim().replace(/\s+/g, " ");
}

/**
 * Divide el nombre completo en palabras (tokens) separadas por espacios.
 * Filtra tokens vacíos.
 *
 * @param {string} nombreCompleto - Ya normalizado.
 * @returns {string[]} array de palabras.
 */
function dividirEnPalabras(nombreCompleto) {
  if (!nombreCompleto) return [];
  return nombreCompleto.split(/\s+/).filter(p => p);
}

/**
 * Devuelve solo letras válidas A-ZÑ en un string continuo sin espacios.
 *
 * @param {string} nombreCompleto - Normalizado.
 * @returns {string} Letras sin separadores.
 */
function soloLetras(nombreCompleto) {
  if (!nombreCompleto) return "";
  return nombreCompleto.replace(/[^A-ZÑ]/g, "");
}


// --- Matemática / Reducciones ---

/**
 * Indica si un número es maestro (11, 22, 33).
 * @param {number} n
 * @returns {boolean}
 */

function esMaestro(n) {
  return MAESTROS.includes(Number(n));
}

/**
 * Suma dígito a dígito un número entero positivo.
 * Ej: 2056 -> 2+0+5+6 = 13
 *
 * @param {number|string} n
 * @returns {number} suma de dígitos.
 */
function sumarDigitos(n) {
  if (n === null || n === undefined) return 0;
  const s = n.toString().replace(/\D/g, "");
  let total = 0;
  for (const ch of s) total += parseInt(ch, 10);
  return total;
}

/**
 * Reduce un número según numerología clásica:
 * - Si es maestro (11,22,33) se devuelve sin cambios.
 * - Si >=10: se suman dígitos repetidamente hasta <10 o maestro.
 *
 * @param {number} n
 * @returns {number} reducido final.
 */
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

/**
 * Reducción estricta a un único dígito (1–9) sin preservar maestros.
 * Se usa en Abracadabra filas 2..9 y en reducirADigitoParaArmonicos.
 *
 * @param {number} n
 * @returns {number} 1..9 (o 0 si entrada inválida).
 */
function reducirEstrictoADigito(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return 0;
  let x = Math.abs(n);
  while (x >= 10) x = sumarDigitos(x);
  return x;
}

/**
 * Regla de reducción especial para Sendero Natal:
 * - Preserva 11 y 22.
 * - Si valor es 29 => 11.
 * - No permite 33 (si suma final da 33 => 6).
 *
 * @param {number} valor - mes, día o suma de año.
 * @returns {number} valor reducido según regla SN.
 */
function reducirFechaSN(valor) {
  valor = Number(valor);
  if (!Number.isFinite(valor)) return 0;
  if ([11, 22].includes(valor)) return valor;
  if (valor === 29) return 11;
  return reducirNumero(valor);
}

/**
 * Regla para Ciclo de Vida (Resultado 11):
 * - Preserva 11 y 22; resto reduce normal.
 *
 * @param {number} valor
 * @returns {number}
 */
function reducirParaCV(valor) {
  valor = Number(valor);
  if (!Number.isFinite(valor)) return 0;
  return ([11, 22].includes(valor)) ? valor : reducirNumero(valor);
}


// --- Parciales por palabra ---

/**
 * Suma RAW de vocales de una palabra sin reducir.
 * Usa ALFABETO y VOCALES_SET.
 *
 * @param {string} palabra - Normalizada (A-ZÑ).
 * @returns {number} suma cruda vocales.
 */

function parcialVocalesRaw(palabra) {
  if (!palabra) return 0;
  let suma = 0;
  for (const letra of palabra) {
    if (VOCALES_SET.has(letra)) suma += ALFABETO[letra] || 0;
  }
  return suma;
}

/**
 * Suma RAW de consonantes de una palabra sin reducir.
 * Consonante = letra válida A-ZÑ que no es vocal.
 *
 * @param {string} palabra
 * @returns {number} suma cruda consonantes.
 */
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

/**
 * Parcial de vocales reducido (por palabra).
 * Regla: sumar vocales y luego reducirNumero.
 *
 * @param {string} palabra
 * @returns {number} parcial reducido.
 */
function parcialVocalesReducido(palabra) {
  return reducirNumero(parcialVocalesRaw(palabra));
}

/**
 * Parcial de consonantes reducido (por palabra).
 * Regla: sumar consonantes y luego reducirNumero.
 *
 * @param {string} palabra
 * @returns {number} parcial reducido.
 */
function parcialConsonantesReducido(palabra) {
  return reducirNumero(parcialConsonantesRaw(palabra));
}

/**
 * Calcula todos los parciales base por palabra en un solo paso.
 *
 * @param {string[]} palabras
 * @returns {{
 *   vocalesRed:number[],
 *   consonantesRed:number[],
 *   vocalesRaw:number[],
 *   consonantesRaw:number[]
 * }}
 */
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

/**
 * Parsea fecha ISO "YYYY-MM-DD" a Date.
 * Si value vacío/ inválido => null.
 *
 * @param {string} value
 * @returns {Date|null}
 */

function parseFechaISO(value) {
  if (!value) return null;
  const [y,m,d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m-1, d); // local time, sin corrimiento
}

/**
 * Obtiene año numérico de una Date.
 * @param {Date} fecha
 * @returns {number}
 */
function getAnio(fecha) { return fecha.getFullYear(); }
/**
 * Obtiene mes 1..12 de una Date.
 * @param {Date} fecha
 * @returns {number}
 */
function getMes(fecha) { return fecha.getMonth() + 1; }
/**
 * Obtiene día 1..31 de una Date.
 * @param {Date} fecha
 * @returns {number}
 */
function getDia(fecha) { return fecha.getDate(); }

/**
 * Construye el Date del cumpleaños en un año dado.
 *
 * @param {number} anio - Año objetivo.
 * @param {number} mesNac - 1..12.
 * @param {number} diaNac - 1..31.
 * @returns {Date}
 */
function cumpleEnAnio(anio, mesNac, diaNac) {
  return new Date(anio, mesNac - 1, diaNac);
}

/**
 * Determina si en la fecha en curso ya se cumplió años.
 * Reglas iguales a old_numerologia.js para resultados 20 y 21.
 *
 * @param {Date} fechaEnCurso
 * @param {number} mesNac
 * @param {number} diaNac
 * @returns {boolean}
 */
function yaCumplioEnFecha(fechaEnCurso, mesNac, diaNac) {
  if (!fechaEnCurso) return false;
  const anio = getAnio(fechaEnCurso);
  const cumple = cumpleEnAnio(anio, mesNac, diaNac);
  return fechaEnCurso >= cumple;
}

/**
 * Calcula edad vigente en la fecha en curso.
 * Edad = anioEnCurso - anioNac - (yaCumplio ? 0 : 1)
 *
 * @param {number} anioNac
 * @param {number} mesNac
 * @param {number} diaNac
 * @param {Date} fechaEnCurso
 * @returns {number} edad actual.
 */
function calcularEdadEnFecha(anioNac, mesNac, diaNac, fechaEnCurso) {
  if (!fechaEnCurso || !anioNac || !mesNac || !diaNac) return 0;
  const anioEnCurso = getAnio(fechaEnCurso);
  const yaCumplio = yaCumplioEnFecha(fechaEnCurso, mesNac, diaNac);
  return anioEnCurso - anioNac - (yaCumplio ? 0 : 1);
}


// --- Helpers de UI numérica ---

/**
 * Devuelve un HTML tipo "crudo / principal" para spans detalle.
 *
 * @param {number|string|null} crudo
 * @param {number|string|null} reducido
 * @returns {string} html con spans num-crudo y num-principal.
 */
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

/**
 * Pinta el detalle crudo/reducido en un span contenedor.
 * Si crudo falsy => limpia.
 *
 * @param {string} idDetalle
 * @param {number|string|null} crudo
 * @param {number|string|null} reducido
 */
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

/**
 * Construye la data necesaria para renderizar la tabla base kármica.
 * Debe replicar exactamente:
 * - cálculo real de parciales mundo columna a columna
 * - detección de karmas horizontales/verticales/por total de fila
 *
 * @param {object} ctxBase - Contexto Base.
 * @param {object} resultsBase - Resultados base calculados (1-3 especialmente).
 * @returns {{
 *   palabrasTotales:string[],
 *   filas:Array<{nombre:string,valores:number[],total:number,karma?:string}>,
 *   karmasH:boolean[][],
 *   karmasV:boolean[][],
 *   columnasKarma:boolean[]
 * }}
 */
/**
 * Pinta la "k" roja dentro de un texto ya formateado.
 * SOLO reemplaza ",k" por span rojo.
 */
function pintarKRoja(texto) {
  if (!texto) return "";
  return texto.replace(/,k\b/g, ',<span style="color:#ff5e5e;font-weight:700;">k</span>');
}

/**
 * Render placeholder inicial para que la tabla exista "estática"
 * antes de apretar Calcular.
 */
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

/*
function buildTablaBaseKarmicaData(ctxBase, resultsBase) {
  const palabrasTotales = [
    ...dividirEnPalabras(ctxBase.nombres),
    ...dividirEnPalabras(ctxBase.apellidos)
  ].filter(Boolean);

  const numCols = palabrasTotales.length;

  const parcialesVocales = resultsBase.esenciaIntima.parciales;
  const parcialesConsonantes = resultsBase.imagen.parciales;

  // Sendero Mundo real columna a columna
  const parcialesMundoReales = parcialesVocales.map((v, i) => {
    const c = parcialesConsonantes[i] ?? 0;
    const suma = v + c;
    return esMaestro(suma) ? suma : reducirNumero(suma);
  });

  // const filas = [
  //   { nombre: "Esencia Íntima", valores: parcialesVocales, total: resultsBase.esenciaIntima.valor, karma: "" },
  //   { nombre: "Imagen", valores: parcialesConsonantes, total: resultsBase.imagen.valor, karma: "" },
  //   { nombre: "Sendero del Mundo", valores: parcialesMundoReales, total: resultsBase.senderoMundo.valor, karma: "" }
  // ];
  const filas = [
    {nombre: "Esencia Íntima",
      valores: parcialesVocales,
      // detalle crudo/reducido (reemplaza al total numérico)
      totalHTML: formatearDetalleCrudoYReducido(
        resultsBase.esenciaIntima.crudo,
        resultsBase.esenciaIntima.valor
      ),
      karma: ""
    },
    {
      nombre: "Imagen",
      valores: parcialesConsonantes,
      totalHTML: formatearDetalleCrudoYReducido(
        resultsBase.imagen.crudo,
        resultsBase.imagen.valor
      ),
      karma: ""
    },
    {
      nombre: "Sendero del Mundo",
      valores: parcialesMundoReales,
      totalHTML: formatearDetalleCrudoYReducido(
        resultsBase.senderoMundo.crudo,
        resultsBase.senderoMundo.valor
      ),
      karma: ""
    }
  ];


  const { karmasH, infoH } = detectarKarmasHorizontales(filas, numCols);
  const { karmasV, columnasKarma, infoV, columnasInfo } = detectarKarmasVerticales(filas, numCols);
  detectarKarmaEnTotalesFila(filas);

  return { palabrasTotales, filas, karmasH, karmasV, columnasKarma, infoH, infoV, columnasInfo };
}
*/
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

  return { palabrasTotales, filas, karmasH, karmasV, columnasKarma, infoH, infoV, columnasInfo };
}

/**
 * Detecta karmas horizontales dentro de cada fila.
 * Regla especial:
 * - el 10 cuenta como 1 solo horizontalmente (para detección),
 *   pero se renderiza como 10 solo en Imagen si corresponde.
 *
 * @param {Array<{valores:number[], karma?:string}>} filas
 * @param {number} numCols
 * @returns {boolean[][]} matriz [fila][col] con marcas horizontales.
 */
/*
function detectarKarmasHorizontales(filas, numCols) {
  const karmasH = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const infoH   = Array(filas.length).fill(null).map(() => Array(numCols).fill(null));

  filas.forEach((fila, i) => {
    for (let j = 0; j < fila.valores.length - 1; j++) {
      const a = fila.valores[j];
      const b = fila.valores[j + 1];
      if (a == null || b == null) continue;

      const aEval = esMaestro(a) ? a : (a === 10 ? 1 : a);
      const bEval = esMaestro(b) ? b : (b === 10 ? 1 : b);
      const suma = aEval + bEval;

      if (KARMAS_POSIBLES.includes(suma)) {
        karmasH[i][j] = true;
        karmasH[i][j + 1] = true;

        const detalle = `Karma ${suma} (horizontal: ${aEval} + ${bEval})`;
        infoH[i][j] = { karma: suma, detalle };
        infoH[i][j + 1] = { karma: suma, detalle };

        fila.karma = "k";
      }
    }
  });

  return { karmasH, infoH };
}
*/
function detectarKarmasHorizontales(filas, numCols) {
  const karmasH = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const infoH   = Array(filas.length).fill(null).map(() => Array(numCols).fill(null));

  filas.forEach((fila, i) => {
    const vals = fila.filaEval || fila.valores; // 10 ya viene como 1 para karma en fila

    for (let j = 0; j < vals.length - 1; j++) {
      const a = vals[j];
      const b = vals[j + 1];
      if (a == null || b == null) continue;

      const suma = a + b;

      if (KARMAS_POSIBLES.includes(suma)) {
        karmasH[i][j] = true;
        karmasH[i][j + 1] = true;

        const detalle = `Karma ${suma} (horizontal: ${a} + ${b})`;
        infoH[i][j] = { karma: suma, detalle };
        infoH[i][j + 1] = { karma: suma, detalle };

        fila.karma = "k"; // esta fila tiene algún karma horizontal
      }
    }
  });

  return { karmasH, infoH };
}


/**
 * Detecta karmas verticales acumulativos por columna.
 * Reglas:
 * - acumulado suma valores sin reducir
 * - el 10 vertical mantiene 10 real
 * - si acumulado da 13/14/16/19 se marca esa celda.
 *
 * @param {Array<{valores:number[]}>} filas
 * @param {number} numCols
 * @returns {{karmasV:boolean[][], columnasKarma:boolean[]}}
 */

/*
function detectarKarmasVerticales(filas, numCols) {
  const karmasV = Array(filas.length).fill(null).map(() => Array(numCols).fill(false));
  const infoV   = Array(filas.length).fill(null).map(() => Array(numCols).fill(null));

  const columnasKarma = Array(numCols).fill(false);
  const columnasInfo  = Array(numCols).fill(null);

  for (let c = 0; c < numCols; c++) {
    let acumulado = 0;
    for (let r = 0; r < filas.length; r++) {
      const val = filas[r].valores[c];
      if (val == null) continue;
      acumulado += (val === 10 ? 10 : val);

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
*/
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

/**
 * Revisa el total bruto por fila (sin reducir),
 * marcando karma en la fila si el total da 13/14/16/19.
 *
 * @param {Array<{valores:number[], karma?:string}>} filas
 * @returns {Array<{valores:number[], karma?:string}>} filas mutadas o copiadas.
 */
/*

function detectarKarmaEnTotalesFila(filas) {
  filas.forEach(fila => {
    let sumaBruta = 0;
    fila.valores.forEach(v => {
      if (v != null) sumaBruta += (v === 10 ? 10 : v);
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
*/
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


/**
 * Renderiza en DOM la tabla base kármica.
 * Si no existe contenedor, lo crea bajo la card de Numerología Base.
 *
 * @param {ReturnType<buildTablaBaseKarmicaData>} tablaData
 */
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

/**
 * Obtiene label "MesInicio – MesFin" para un cuatrimestre.
 * Cuatrimestre = 4 meses contando desde mesInicio inclusive.
 *
 * @param {number} mesInicio - 1..12.
 * @returns {string}
 */
function rangoCuatrimestre(mesInicio) {
  const idxInicio = (mesInicio - 1) % 12;
  const idxFin = (mesInicio - 1 + 3) % 12;
  return `${MESES_NOMBRE[idxInicio]} – ${MESES_NOMBRE[idxFin]}`;
}

/**
 * Calcula los 3 rangos de cuatrimestres:
 * - cuatri1 desde mes de nacimiento
 * - cuatri2 desde mesNac + 4
 * - cuatri3 desde mesNac + 8
 *
 * @param {number} mesNac - 1..12.
 * @returns {{cuatri1:string,cuatri2:string,cuatri3:string}}
 */
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

/**
 * Actualiza los H1/H2/H3 de cuatrimestres.
 * Si fecha inválida, deja textos por defecto.
 *
 * @param {string} fechaNacimientoISO - "YYYY-MM-DD"
 */
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

/**
 * Lee inputs base desde el DOM (nombres/apellidos/fechaNacimiento).
 * No calcula nada; solo retorna data cruda.
 *
 * @returns {{
 *   nombresRaw:string,
 *   apellidosRaw:string,
 *   fechaNacimientoISO:string
 * }}
 */
function getBaseInputsFromDOM() {
  return {
    nombresRaw: $("nombres")?.value ?? "",
    apellidosRaw: $("apellidos")?.value ?? "",
    fechaNacimientoISO: $("fechaNacimiento")?.value ?? ""
  };
}

/**
 * Construye el contexto base a partir de inputs crudos.
 * Incluye valores normalizados, palabras, letras y parciales.
 *
 * @param {ReturnType<getBaseInputsFromDOM>} inputs
 * @returns {{
 *   nombres:string,
 *   apellidos:string,
 *   nombreCompleto:string,
 *   palabras:string[],
 *   letrasSolo:string,
 *   fechaNacimientoISO:string,
 *   anioNac:number|null,
 *   mesNac:number|null,
 *   diaNac:number|null,
 *   parciales:ReturnType<parcialesPorPalabra>
 * }}
 */
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


// --- Cálculos individuales ---

/**
 * Resultado 1: Esencia Íntima.
 * Regla:
 * - parcial vocales por palabra reducido
 * - sumar parciales (si parcial maestro, sumar sus dígitos)
 * - reducir total final preservando maestros.
 *
 * @param {object} ctx
 * @returns {{valor:number, crudo:number, parciales:number[]}}
 */
function calcEsenciaIntima(ctx) {
  const parciales = ctx.parciales.vocalesRed;
  let crudo = 0;
  for (const p of parciales) {
    crudo += esMaestro(p) ? sumarDigitos(p) : p;
  }
  const valor = reducirNumero(crudo);
  return { valor, crudo, parciales };
}

/**
 * Resultado 2: Imagen.
 * Regla:
 * - parcial consonantes por palabra reducido
 * - sumar parciales (maestros => sumar dígitos)
 * - reducir total final.
 *
 * @param {object} ctx
 * @returns {{valor:number, crudo:number, parciales:number[]}}
 */
function calcImagen(ctx) {
  const parciales = ctx.parciales.consonantesRed;
  let crudo = 0;
  for (const p of parciales) {
    crudo += esMaestro(p) ? sumarDigitos(p) : p;
  }
  const valor = reducirNumero(crudo);
  return { valor, crudo, parciales };
}

/**
 * Resultado 3: Sendero del Mundo.
 * Regla:
 * - por palabra: vocalesReducido + consonantesReducido => reducir
 * - sumar parciales (maestros => sumar dígitos)
 * - reducir total final.
 *
 * @param {object} ctx
 * @returns {{valor:number, crudo:number, parciales:number[]}}
 */
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

/**
 * Resultado 4: Sendero Natal.
 * Regla SN:
 * - reducir mes, día y año (año = suma dígitos del año)
 * - con reducirFechaSN en cada parte
 * - sumar partes => si 33 => 6 else reducirNumero.
 *
 * @param {object} ctx
 * @returns {{valor:number|null, crudo:number|null, partes:{mes:number, dia:number, anio:number}}}
 */
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

/**
 * Resultado 5: Potencial.
 * Regla:
 * - senderoMundo + senderoNatal => reducirNumero.
 *
 * @param {object} ctx
 * @param {{senderoMundo:number, senderoNatal:number}} resultsParciales
 * @returns {{valor:number|null, crudo:number|null}}
 */
function calcPotencial(ctx, resultsParciales) {
  const { senderoMundo, senderoNatal } = resultsParciales;
  if (senderoMundo == null || senderoNatal == null) {
    return { valor: null, crudo: null };
  }
  const crudo = senderoMundo + senderoNatal;
  const valor = reducirNumero(crudo);
  return { valor, crudo };
}

/**
 * Resultado 6: Ciclo de Letras.
 * Regla:
 * - cantidad de letras del nombre completo (letrasSolo.length).
 *
 * @param {object} ctx
 * @returns {{valor:number}}
 */
function calcCicloLetras(ctx) {
  return { valor: ctx.letrasSolo.length };
}

/**
 * Resultado 7: Clave Personal.
 * Regla:
 * - usa TABLA_CLAVE_PERSONAL[mes][dia]
 * - no reduce.
 *
 * @param {object} ctx
 * @returns {{valor:number|null}}
 */
function calcClavePersonal(ctx) {
  if (!ctx.fechaNacimientoISO || !ctx.mesNac || !ctx.diaNac) return { valor: null };
  const mesesLower = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const mesNombre = mesesLower[ctx.mesNac - 1];
  const valor = TABLA_CLAVE_PERSONAL[mesNombre]?.[ctx.diaNac] ?? null;
  return { valor };
}

/**
 * Resultado 8: Letra L.
 * Regla:
 * - primera letra del primer nombre (ctx.nombres[0])
 * - correlación alfabética A=1..Z=26.
 *
 * @param {object} ctx
 * @returns {{valor:number|null, letra:string|null}}
 */
function calcLetraLeccion(ctx) {
  const letra = ctx.nombres?.charAt(0) || null;
  if (!letra) return { valor: null, letra: null };
  const valor = (letra >= "A" && letra <= "Z") ? (letra.charCodeAt(0) - 64) : null;
  return { valor, letra };
}

/**
 * Resultado 9: Regalo Divino.
 * Regla:
 * - toma los 2 últimos dígitos del año de nacimiento
 * - reduce preservando maestros.
 *
 * @param {object} ctx
 * @returns {{valor:number|null}}
 */
function calcRegaloDivino(ctx) {
  if (!ctx.anioNac) return { valor: null };
  const ult2 = ctx.anioNac % 100;
  return { valor: reducirNumero(ult2) };
}

/**
 * Resultado 10: Etapas.
 * Devuelve:
 * - valores de cada etapa (e1..e4)
 * - edades de transición calculadas desde Sendero Natal.
 *
 * @param {object} ctx
 * @param {{senderoNatal:number}} resultsParciales
 * @returns {{
 *   rMes:number, rDia:number, rAnio:number,
 *   e1:number, e2:number, e3:number, e4:number,
 *   edades:{inicio1:number, fin1:number, inicio2:number, inicio3:number, inicio4:number}
 * }}
 */
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
  // const rMes = reducirNumero(ctx.mesNac);
  // const rDia = reducirNumero(ctx.diaNac);
  // const rAnio = reducirNumero(sumarDigitos(ctx.anioNac));

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

/**
 * Resultado 11: Ciclo de Vida.
 * Regla:
 * - según edad actual al día de fechaReferencia:
 *   0–27 (y 81–107): usa mes
 *   28–54 (y 108–134): usa día
 *   55–80: usa año
 *   >134: usa mes y marca warning visual (en renderer).
 *
 * @param {object} ctx
 * @param {Date} [fechaReferencia=new Date()]
 * @returns {{valor:number|null, edad:number|null, tramo:string|null}}
 */
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

/**
 * Resultado 12: Karmas.
 * Detecta karmasPosibles en:
 * - crudos principales (suma esencia cruda, imagen cruda, mundo crudo)
 * - parciales reducidos por palabra (vocales, consonantes, mundo)
 * - parciales RAW por palabra
 * - totales RAW vocales/consonantes/mundo
 * - sendero natal y potencial.
 *
 * @param {object} ctx
 * @param {object} resultsParciales
 * @returns {{karmas:number[], detalle:{...}}}
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

/**
 * Resultado 13: Lecciones Kármicas.
 * Regla:
 * - contar ocurrencias de valores 1..9 en letrasSolo usando ALFABETO
 * - devolver números faltantes.
 *
 * @param {object} ctx
 * @returns {{valor:number[], conteo:Record<number,number>}}
 */
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

/**
 * Resultados 14–16: Doble Dígito Vocales/Consonantes/Total.
 * Regla:
 * - sumar vocales RAW nombre completo => r14
 * - sumar consonantes RAW => r15
 * - r16 = r14+r15
 *
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

/**
 * Resultado 17: Doble Dígito Fecha.
 * Regla:
 * - sumar dígito a dígito de DDMMYYYY (sin reducir final).
 *
 * @param {object} ctx
 * @returns {{valor:number|null}}
 */
function calcDobleDigitoFecha(ctx) {
  if (!ctx.fechaNacimientoISO) return { valor: null };
  const [anio, mes, dia] = ctx.fechaNacimientoISO.split("-");
  const valor = sumarDigitos(dia + mes + anio);
  return { valor };
}

/**
 * Resultado 18: Arcano Natal.
 * Regla:
 * - día + mes + año reducido a dos cifras (suma dígitos del año)
 * - sin reducir final.
 *
 * @param {object} ctx
 * @returns {{valor:number|null}}
 */
function calcArcanoNatal(ctx) {
  if (!ctx.fechaNacimientoISO || !ctx.anioNac || !ctx.mesNac || !ctx.diaNac) return { valor: null };
  const valor = ctx.diaNac + ctx.mesNac + sumarDigitos(ctx.anioNac);
  return { valor };
}


// --- Orquestación Base ---

/**
 * Ejecuta todo el cálculo Base 1–18.
 * Debe ser pura: no toca DOM.
 *
 * @param {object} ctxBase
 * @returns {{
 *   esenciaIntima:ReturnType<calcEsenciaIntima>,
 *   imagen:ReturnType<calcImagen>,
 *   senderoMundo:ReturnType<calcSenderoMundo>,
 *   senderoNatal:ReturnType<calcSenderoNatal>,
 *   potencial:ReturnType<calcPotencial>,
 *   cicloLetras:ReturnType<calcCicloLetras>,
 *   clavePersonal:ReturnType<calcClavePersonal>,
 *   letraLeccion:ReturnType<calcLetraLeccion>,
 *   regaloDivino:ReturnType<calcRegaloDivino>,
 *   etapas:ReturnType<calcEtapas>,
 *   cicloVida:ReturnType<calcCicloVida>,
 *   karmas:ReturnType<calcKarmas>,
 *   leccionesKarmicas:ReturnType<calcLeccionesKarmicas>,
 *   doblesDigitos:ReturnType<calcDoblesDigitos>,
 *   dobleDigitoFecha:ReturnType<calcDobleDigitoFecha>,
 *   arcanoNatal:ReturnType<calcArcanoNatal>
 * }}
 */
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

/**
 * Renderiza los resultados Base en el DOM.
 * Aquí se pintan inputs + spans detalle + tabla base kármica.
 *
 * @param {ReturnType<calcularBasePipeline>} resultsBase
 * @param {object} ctxBase
 */
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
}


/* ==========================
   5) PIPELINE PREDICTIVA (19–31)
========================== */

// --- Inputs / Context ---

/**
 * Lee inputs predictivos desde el DOM:
 * - fechaNacimientoISO
 * - anioEnCursoISO (input date)
 *
 * @returns {{
 *   fechaNacimientoISO:string,
 *   fechaEnCursoISO:string
 * }}
 */
function getPredictivaInputsFromDOM() {
  return {
    fechaNacimientoISO: $("fechaNacimiento")?.value ?? "",
    fechaEnCursoISO: $("anioEnCurso")?.value ?? ""
  };
}

/**
 * Construye contexto predictivo combinando:
 * - inputs predictivos
 * - ctxBase y resultsBase ya calculados
 *
 * Incluye:
 * - fechaEnCurso Date
 * - anioEnCurso number
 * - edadActual en fechaEnCurso
 * - senderoNatalRaw recalculado con regla SN
 * - clavePersonalRaw desde resultsBase
 *
 * @param {ReturnType<getPredictivaInputsFromDOM>} inputs
 * @param {object} ctxBase
 * @param {ReturnType<calcularBasePipeline>} resultsBase
 * @returns {{
 *   fechaNacimientoISO:string,
 *   fechaEnCurso:Date,
 *   anioEnCurso:number,
 *   anioNac:number, mesNac:number, diaNac:number,
 *   nombreCompleto:string, letrasSolo:string,
 *   clavePersonalRaw:number|null,
 *   senderoNatalRaw:number|null
 * }}
 */
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

/**
 * Resultado 19: Año Personal.
 * Regla:
 * - mesReducido + diaReducido + anioEnCursoReducido
 * - reduce preservando maestros.
 *
 * @param {object} ctxP
 * @returns {{valor:number|null, crudo:number|null, partes:{mes:number,dia:number,anio:number}}}
 */
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

/**
 * Resultado 21: Edad Actual (en fechaEnCurso).
 * Regla:
 * - misma que calcularEdadEnFecha().
 *
 * @param {object} ctxP
 * @returns {{valor:number|null, yaCumplio:boolean|null}}
 */
function calcEdadActual(ctxP) {
  if (!ctxP.fechaEnCurso || !ctxP.anioNac || !ctxP.mesNac || !ctxP.diaNac) {
    return { valor: null, yaCumplio: null };
  }
  const yaCumplio = yaCumplioEnFecha(ctxP.fechaEnCurso, ctxP.mesNac, ctxP.diaNac);
  const valor = calcularEdadEnFecha(ctxP.anioNac, ctxP.mesNac, ctxP.diaNac, ctxP.fechaEnCurso);
  return { valor, yaCumplio };
}

/**
 * Resultado 20: Dígito de Edad.
 * Regla:
 * - edadAntes = edadActual
 * - edadDespues = edadActual + 1
 * - reducirNumero(edadAntes) + reducirNumero(edadDespues)
 * - reducir final preservando maestros.
 *
 * @param {object} ctxP
 * @returns {{valor:number|null, crudo:number|null, edades:{antes:number, despues:number}}}
 */
function calcDigitoEdad(ctxP) {
  const edadActual = ctxP.edadActual;
  if (!Number.isFinite(edadActual)) {
    return { valor: null, crudo: null, edades: { antes: 0, despues: 0 } };
  }
  const antes = edadActual;
  const despues = edadActual + 1;
  const suma = reducirNumero(antes) + reducirNumero(despues);
  const valor = esMaestro(suma) ? suma : reducirNumero(suma);
  return { valor, crudo: suma, edades: { antes, despues } };
}

/**
 * Calcula las edades al inicio y al final del año calendario seleccionado
 * en el campo "Año en curso".
 *
 * - inicio: edad al 1 de enero de anioEnCurso
 * - fin:    edad al 31 de diciembre de anioEnCurso
 *
 * Solo se usa para mostrar el texto "35 + 36 →" del Dígito de Edad.
 *
 * @param {object} ctxP
 * @returns {{inicio:number, fin:number} | null}
 */
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


/**
 * Resultado 22: Mes Personal.
 * Regla:
 * - mes actual real (Date.now) reducido
 * - anioPersonal + mesReducido => reducir final.
 *
 * @param {object} ctxP
 * @param {number} anioPersonal
 * @returns {{valor:number|null, crudo:number|null, mesActual:number}}
 */
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
 *
 * @param {object} ctxP
 * @param {number} edadActual
 * @returns {{valor:string|null}}
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
 *
 * @param {number} n
 * @returns {number}
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
 *
 * @param {number} valor
 * @param {number} anioActual
 * @returns {number}
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
 *
 * @param {number} valor
 * @param {number} anioActual
 * @returns {number}
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
 *
 * @param {object} ctxP
 * @param {number} edadActual
 * @returns {{r24:number,r25:number,r26:number,r27:number}}
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
 *
 * @param {object} ctxP
 * @param {number} edadActual
 * @returns {{r28:number,r29:number,r30:number,r31:number}}
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
 *
 * @param {object} ctxP
 * @param {number} edadActual
 * @returns {number}
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
 *
 * @param {object} ctxP
 * @returns {{
 *   anioPersonal:ReturnType<calcAnioPersonal>,
 *   edadActual:ReturnType<calcEdadActual>,
 *   digitoEdad:ReturnType<calcDigitoEdad>,
 *   mesPersonal:ReturnType<calcMesPersonal>,
 *   transitoLetra:ReturnType<calcTransitoLetra>,
 *   armonicosBasicos:ReturnType<calcArmonicosBasicos>,
 *   armonicosExtendidos:ReturnType<calcArmonicosExtendidos>
 * }}
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
 *
 * @param {ReturnType<calcularPredictivaPipeline>} resultsP
 * @param {object} ctxP
 */
function renderPredictivaResults(resultsP, ctxP) {
  actualizarCabecerasCuatrimestres(ctxP.fechaNacimientoISO);

  // 19 Año Personal
  const ap = resultsP.anioPersonal;
  setValue("labelanioPersonal", ap.partes ? `${ap.partes.dia} + ${ap.partes.mes} + ${ap.partes.anio}` : "");
  setValue("anioPersonal", ap.valor ?? "");

  // 20 Dígito de Edad
  /*
  setValue("digitoEdad", resultsP.digitoEdad.valor ?? "");
  if (resultsP.digitoEdad.edades) {
    setText("digitoEdadTexto", `20. Dígito de Edad ${resultsP.digitoEdad.edades.antes} + ${resultsP.digitoEdad.edades.despues} →`);
  }
  */
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
 *
 * @returns {{nombresRaw:string, apellidosRaw:string}}
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
 *
 * @param {ReturnType<getAbracadabraInputsFromDOM>} inputs
 * @returns {{nombreCompletoSinEspacios:string, primeras9:string}}
 */
function buildAbracadabraContext(inputs) {
  const nombreCompleto = obtenerNombreCompletoNormalizado(inputs.nombresRaw, inputs.apellidosRaw);
  const nombreCompletoSinEspacios = soloLetras(nombreCompleto);
  const primeras9 = nombreCompletoSinEspacios.slice(0, 9).padEnd(9, " ");
  return { nombreCompletoSinEspacios, primeras9 };
}


// --- Cálculos ---

/**
 * Calcula Fila 1 Abracadabra:
 * - toma ctxA.primeras9
 * - mapea cada letra a valor ALFABETO (si espacio => 0)
 *
 * @param {object} ctxA
 * @returns {{fila1:number[], letras:string[]}}
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
 *
 * @param {number[]} fila1
 * @returns {number[][]} filas completas (incluye fila1 como primer elemento).
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
 *
 * @param {number[][]} filas
 * @returns {string[]} sumas por fila.
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
 *
 * @param {object} ctxA
 * @returns {{
 *   letrasFila1:string[],
 *   filas:number[][],
 *   sumas:string[]
 * }}
 */
function calcularAbracadabraPipeline(ctxA) {
  const { fila1, letras } = calcAbracadabraFila1(ctxA);
  const filas = calcAbracadabraFilas2a9(fila1);
  const sumas = calcAbracadabraSumas(filas);
  return { letrasFila1: letras, filas, sumas };
}

/**
 * Renderiza Abracadabra:
 * - letras en abracadabra_nombre_i
 * - valores fila1 en r1cX_abracadabra_valor_X
 * - resto de celdas rFcC
 * - sumas rX_sum
 *
 * @param {ReturnType<calcularAbracadabraPipeline>} resultsA
 * @param {object} ctxA
 */
function renderAbracadabraResults(resultsA, ctxA) {
  const { letrasFila1, filas, sumas } = resultsA;

  // Fila 1 letras + valores
  for (let i = 0; i < 9; i++) {
    setText(`abracadabra_nombre_${i + 1}`, letrasFila1[i] === " " ? "" : letrasFila1[i]);
    setText(`r1c${i + 1}_abracadabra_valor_${i + 1}`, filas[0][i] ?? "");
  }

  // Filas 2..9 valores
  for (let f = 2; f <= 9; f++) {
    const fila = filas[f - 1];
    for (let c = 0; c < fila.length; c++) {
      setText(`r${f}c${c + 1}`, fila[c] ?? "");
    }
  }

  // Sumas rX_sum
  for (let i = 0; i < sumas.length; i++) {
    setText(`r${i + 1}_sum`, sumas[i]);
  }
}


/* ==========================
   7) ATAJOS DE TECLADO / TOASTS
========================== */

/**
 * Muestra toast flotante no intrusivo.
 * Misma UI que old_numerologia.js.
 *
 * @param {string} mensaje
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
    "mesPersonal","transitoLetra"
  ];
  idsInputs.forEach(id => setValue(id, ""));

  // spans detalle base
  ["esenciaIntimaDetalle","imagenDetalle","serMundoDetalle","senderoNatalDetalle","potencialDetalle"]
    .forEach(id => setHTML(id, ""));

  // etapas
  ["etapa1_izq","etapa1_centro","etapa1_der","etapa2_izq","etapa2_der","etapa3","etapa4",
   "etapaTexto1","etapaTexto2","etapaTexto3","etapaTexto4"]
    .forEach(id => setText(id, ""));

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
 * - cambia icono 🌙 / 🌞
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
  const ctxA = buildAbracadabraContext(inputsA);
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