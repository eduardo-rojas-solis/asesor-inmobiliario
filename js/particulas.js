/* ==========================================================
   PARTÍCULAS EN MOVIMIENTO (efecto decorativo del fondo)

   Dibuja pequeños puntos de luz que suben lentamente,
   como polvo iluminado por el sol.

   No es necesario editar este archivo.
   - Para quitar el efecto: borre en index.html la línea
     <script src="js/particulas.js" defer></script>
   - Para cambiar la cantidad, el color o la velocidad,
     modifique los valores de "AJUSTES" aquí abajo.
   ========================================================== */

(function () {
  // ----------------------- AJUSTES -----------------------
  var MAXIMO_PARTICULAS = 70;            // cantidad máxima (pantallas grandes)
  var COLOR = "255, 236, 200";           // color en formato R, G, B (dorado claro)
  var VELOCIDAD_MINIMA = 0.15;           // velocidad de subida (píxeles por cuadro)
  var VELOCIDAD_MAXIMA = 0.5;
  // --------------------------------------------------------

  var lienzo = document.getElementById("particulas");
  if (!lienzo || !lienzo.getContext) return;
  var ctx = lienzo.getContext("2d");

  // Si la persona activó "reducir movimiento" en su equipo,
  // las partículas se dibujan una vez y quedan quietas.
  var reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ancho = 0;
  var alto = 0;
  var particulas = [];

  // Crea una partícula. Si "enCualquierLugar" es verdadero aparece en
  // cualquier parte de la pantalla; si no, nace justo bajo el borde inferior.
  function crearParticula(enCualquierLugar) {
    return {
      x: Math.random() * ancho,
      y: enCualquierLugar ? Math.random() * alto : alto + 10,
      radio: 0.8 + Math.random() * 2.2,
      velocidad: VELOCIDAD_MINIMA + Math.random() * (VELOCIDAD_MAXIMA - VELOCIDAD_MINIMA),
      vaiven: Math.random() * Math.PI * 2, // para el movimiento suave de lado a lado
      brillo: 0.25 + Math.random() * 0.55
    };
  }

  // Ajusta el lienzo al tamaño de la ventana (y a pantallas de alta resolución)
  function ajustarTamano() {
    var anchoAnterior = ancho;
    var escala = Math.min(window.devicePixelRatio || 1, 2);
    ancho = window.innerWidth;
    alto = window.innerHeight;
    lienzo.width = ancho * escala;
    lienzo.height = alto * escala;
    lienzo.style.width = ancho + "px";
    lienzo.style.height = alto + "px";
    ctx.setTransform(escala, 0, 0, escala, 0, 0);

    // Solo se vuelven a crear las partículas si cambió el ancho
    // (en teléfonos, la barra del navegador cambia el alto al desplazarse).
    if (ancho !== anchoAnterior) {
      var cantidad = Math.round(Math.min(MAXIMO_PARTICULAS, (ancho * alto) / 16000));
      particulas = [];
      for (var i = 0; i < cantidad; i++) {
        particulas.push(crearParticula(true));
      }
    }
  }

  // Dibuja un cuadro de la animación
  function dibujar() {
    ctx.clearRect(0, 0, ancho, alto);

    for (var i = 0; i < particulas.length; i++) {
      var p = particulas[i];

      if (!reducirMovimiento) {
        p.y -= p.velocidad;
        p.vaiven += 0.01;
        p.x += Math.sin(p.vaiven) * 0.25;
        // Cuando sale por arriba, vuelve a nacer abajo
        if (p.y < -10) {
          particulas[i] = p = crearParticula(false);
        }
      }

      // Halo suave alrededor del punto
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radio * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + COLOR + ", " + p.brillo * 0.12 + ")";
      ctx.fill();

      // Punto de luz
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + COLOR + ", " + p.brillo + ")";
      ctx.fill();
    }

    if (!reducirMovimiento) {
      window.requestAnimationFrame(dibujar);
    }
  }

  ajustarTamano();
  window.addEventListener("resize", function () {
    ajustarTamano();
    if (reducirMovimiento) dibujar();
  });
  dibujar();
})();
