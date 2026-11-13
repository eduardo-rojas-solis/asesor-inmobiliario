# Página web de Eduardo Rojas Solís

Página personal de **Eduardo Rojas Solís, asesor inmobiliario en Valdivia**.
Todas las secciones tienen contenido real. Si en el futuro falta algún dato,
se marca en la página con **fondo amarillo** y el texto `[PENDIENTE: ...]`.

Esta guía está escrita para Eduardo: explica cómo cambiar textos y la foto
**sin saber programar**, directamente desde la página de GitHub.

---

## Contenido

1. [Cómo está organizada la página](#1-cómo-está-organizada-la-página)
2. [Cómo editar un texto](#2-cómo-editar-un-texto)
3. [Activar un botón](#3-activar-un-botón)
4. [Cambiar la foto](#4-cambiar-la-foto)
5. [Cambiar los colores](#5-cambiar-los-colores)
6. [Cómo se publica la página](#6-cómo-se-publica-la-página)
7. [Activar GitHub Pages (una sola vez)](#7-activar-github-pages-una-sola-vez)
8. [Lista de datos pendientes](#8-lista-de-datos-pendientes)
9. [Opciones a evaluar](#9-opciones-a-evaluar)
10. [Seguridad: qué nunca subir](#10-seguridad-qué-nunca-subir)

---

## 1. Cómo está organizada la página

| Archivo o carpeta | Para qué sirve | ¿Lo edita Eduardo? |
|---|---|---|
| `index.html` | **Todos los textos** de la página | Sí |
| `css/estilos.css` | Colores, tamaños, fondo y efecto vidrio | Solo los colores |
| `js/particulas.js` | Partículas de luz en movimiento | No es necesario |
| `assets/perfil/` | Fotografía de perfil | Sí (para cambiar la foto) |
| `assets/fondos/` | Foto de fondo (río de Valdivia) | Sí (para cambiar el fondo) |
| `assets/logos/` | Logotipo, cuando exista | Más adelante |
| `README.md` | Esta guía | No es necesario |

La página tiene cuatro partes, en este orden:

1. **Carta de presentación** (primera pantalla): foto con correo y WhatsApp
   debajo, nombre, frase y botones de agenda y redes profesionales.
2. **Sobre mí:** trayectoria y datos breves.
3. **Servicios:** tarjetas con cada servicio.
4. **Contacto:** correo, WhatsApp y la agenda de Google Calendar insertada en la página.

Dentro de `index.html`, cada lugar que se puede editar tiene un comentario
que empieza con ✏️ y explica qué hacer. Los comentarios **no aparecen** en la
página publicada.

---

## 2. Cómo editar un texto

1. Entre al repositorio en GitHub e inicie sesión.
2. Haga clic en el archivo **`index.html`**.
3. Haga clic en el ícono del **lápiz** (✏️, «Edit this file»), arriba a la derecha.
4. Busque el texto que quiere cambiar. Truco: presione `Cmd + F` (Mac) o
   `Ctrl + F` (Windows) y escriba `PENDIENTE` para ir a cada dato faltante.
5. Reemplace el marcador completo **incluyendo** las etiquetas `<span ...>` y `</span>`.

   **Antes:**
   ```html
   <span class="pendiente">[PENDIENTE: años en el rubro]</span>
   ```
   **Después:**
   ```html
   15 años
   ```
6. Haga clic en el botón verde **«Commit changes...»**, escriba una frase corta
   que describa el cambio (por ejemplo: «Agrega años de experiencia») y confirme.
7. Espere uno o dos minutos y recargue la página publicada para ver el cambio.

**Recomendaciones**

- Cambie solo el texto que está **entre** las etiquetas (lo que va entre `>` y `<`).
- No borre los signos `<`, `>` ni las comillas `"` de las etiquetas.
- Si algo se ve mal después de un cambio, no se preocupe: GitHub guarda todas las
  versiones anteriores. Avísele a Benjamín y se puede volver atrás.

---

## 3. Activar un botón

Todos los botones están activos: agenda, WhatsApp, LinkedIn y «Ver servicios».
Están en la carta de presentación, al comienzo de `index.html`.

**Para agregar una red nueva** (por ejemplo, si más adelante abre un Instagram
o una página de Facebook profesional), copie el bloque de LinkedIn, péguelo
debajo y cambie el enlace y el nombre:
```html
<a class="boton" href="https://www.instagram.com/su-cuenta/" target="_blank" rel="noopener">
  Instagram
</a>
```

**Si un enlace todavía no existe**, el botón se puede dejar visible pero
desactivado, con un aviso amarillo:
```html
<a class="boton boton--pendiente" aria-disabled="true">
  Instagram <small>[PENDIENTE: enlace a la cuenta]</small>
</a>
```
Para activarlo después: quite `boton--pendiente` y `aria-disabled="true"`,
agregue `href="..."` con el enlace y `target="_blank" rel="noopener"`, y borre
la línea `<small>[PENDIENTE: ...]</small>`.

**Agenda (Google Calendar).** Está en dos formas:

- **Botones** «Agendar una reunión» (en la carta) y «Abrir la agenda en una
  pestaña nueva» (en Contacto), con el enlace corto
  `https://calendar.app.google/5G6a5Nrcpf8XX6g29`.
- **Agenda insertada** en la sección Contacto (un `<iframe>`), donde se puede
  reservar sin salir de la página.

Los horarios, la duración y el texto de la agenda **no** se editan aquí: se
cambian en Google Calendar, en la agenda de citas, y la página los muestra sola.

Si algún día se crea una agenda nueva, hay que cambiar el enlace de los dos
botones y también el `src="..."` del `<iframe>`. Ese código se obtiene en Google
Calendar: agenda de citas → **Compartir** → **Insertar agenda**.

**Si cambia el correo o el WhatsApp**, búsquelos con `Cmd + F` / `Ctrl + F`:
aparecen en la carta (bajo la foto y en el botón de WhatsApp) y en Contacto.
En cada lugar cambie el enlace (dentro de `href="..."`) y el texto que se ve.
En el enlace de WhatsApp el número va sin `+`, sin espacios ni guiones:
`https://wa.me/56932942338`. En el correo de la carta hay un `<wbr>` antes de
la `@`: sirve para que el correo se corte bien en teléfonos; consérvelo.

---

## 4. Cambiar la foto

La foto actual es `assets/perfil/foto-eduardo.webp`. La forma más fácil de
cambiarla es subir una nueva **con el mismo nombre**:

1. En GitHub, entre a la carpeta `assets` y luego a `perfil`.
2. Haga clic en **«Add file» → «Upload files»**.
3. Arrastre la foto nueva, llamada exactamente **`foto-eduardo.webp`**
   (de unos 700 píxeles de ancho y menos de 100 KB, para que cargue rápido).
4. Haga clic en **«Commit changes»**. La foto anterior queda reemplazada.

**Si la foto nueva es JPG** (`foto-eduardo.jpg`), busque `FOTO DE EDUARDO` en
`index.html` y cambie el nombre dentro de `src="..."`:
```html
<img src="assets/perfil/foto-eduardo.jpg" alt="Fotografía de Eduardo Rojas Solís"
```

La página recorta la foto en forma vertical. Si Eduardo queda descentrado,
en `css/estilos.css` cambie el valor `object-position: 75% center;`
(un número menor muestra más la izquierda; uno mayor, más la derecha).

### Cambiar la foto de fondo

Funciona igual: suba la foto nueva a `assets/fondos/` con el nombre
**`fondo-valdivia.webp`**. Conviene una foto horizontal y luminosa, de unos
1440 píxeles de ancho y menos de 200 KB.

**Para que la página cargue rápido**, use siempre formato **WEBP**. Puede
convertir y achicar fotos gratis en https://squoosh.app (elija «WebP»,
calidad 60–80 y el ancho indicado arriba).

Use solo fotos propias o con permiso de uso: la página es pública.

---

## 5. Cambiar los colores

Abra `css/estilos.css`. Al principio está la sección **COLORES**. Cambie solo
los códigos que empiezan con `#` (por ejemplo `#1f2d3d`). Cada línea tiene
una explicación de dónde se usa ese color.

En esa misma sección están los valores del **efecto vidrio** de los recuadros
y del **efecto cristal** de los botones (transparencia, brillo y desenfoque).

Los colores actuales son **provisorios**, hasta que se defina la identidad
de marca.

**Fuente:** en Mac y iPhone la página usa **Avenir**, que viene instalada.
En Windows y Android usa **DM Sans**, una fuente gratuita muy parecida que se
carga desde Google Fonts.

**Movimiento:**

- La foto de fondo se acerca muy lentamente.
- Partículas de luz suben despacio por la pantalla (archivo `js/particulas.js`).
  Para quitarlas, borre en `index.html` la línea
  `<script src="js/particulas.js" defer></script>`.
- Los botones y servicios se elevan un poco al pasar el mouse.

Si el teléfono o computador de quien visita tiene activada la opción
«reducir movimiento», las animaciones se desactivan solas.

---

## 6. Cómo se publica la página

La página se publica gratis con **GitHub Pages**. Funciona así:

- Cada vez que se guarda un cambio («Commit changes») en la rama `main`,
  GitHub actualiza la página **automáticamente** en uno o dos minutos.
- No hay que instalar nada ni pagar nada.
- La dirección de la página es:
  `https://NOMBRE-DE-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

**Ver la página en el computador sin publicarla:** descargue el repositorio
y haga doble clic en `index.html`. Se abrirá en el navegador.

---

## 7. Activar GitHub Pages (una sola vez)

Esto lo hace la persona dueña del repositorio:

1. Entre al repositorio en GitHub.
2. Haga clic en **Settings** (Configuración), en la barra superior del repositorio.
3. En el menú de la izquierda, sección «Code and automation», haga clic en **Pages**.
4. En **Build and deployment → Source**, elija **«Deploy from a branch»**.
5. En **Branch**, elija **`main`** y la carpeta **`/ (root)`**. Haga clic en **Save**.
6. Espere unos minutos y recargue esa misma pantalla. Arriba aparecerá
   «Your site is live at ...» con la dirección de la página.

**Requisito:** en una cuenta gratuita de GitHub, el repositorio debe ser
**público** para usar GitHub Pages.

### Después de transferir el repositorio a la cuenta de Eduardo

- La dirección cambia al nuevo nombre de usuario:
  `https://USUARIO-DE-EDUARDO.github.io/NOMBRE-DEL-REPOSITORIO/`.
  **La dirección antigua deja de funcionar y no redirige**, así que hay que
  actualizarla donde se haya compartido (redes, firma de correo, tarjetas).
- Revise **Settings → Pages** en la cuenta nueva y confirme que sigue activado.
- La página no necesita ningún otro cambio, porque todas sus rutas son relativas.

---

## 8. Lista de datos pendientes

**Ya no quedan marcadores `[PENDIENTE]` en la página.** Todos los textos se
redactaron a partir de las respuestas y el CV de Eduardo.

**Datos completados:** fotografía, frase de presentación, Sobre mí (presentación,
cómo trabaja, zona, propiedades, experiencia y formación), cuatro servicios,
correo, WhatsApp, agenda (Google Calendar) y LinkedIn.

**Otros pendientes (no se ven en la página):**

- [ ] Que Eduardo revise y apruebe los textos.
- [ ] Cuando los apruebe, **borrar** en `index.html` la línea
      `<meta name="robots" content="noindex">`. Mientras esa línea exista,
      Google no mostrará la página en sus resultados.
- [ ] Actualizar el LinkedIn de Eduardo (titular y «Acerca de») para que diga
      lo mismo que la página: asesor inmobiliario en Valdivia.
- [ ] Cambiar en Google Calendar el título de la agenda de citas
      («Corredor de propiedades» → «Asesor inmobiliario»).
- [ ] Testimonios de clientes, cuando alguno acepte darlo.
- [ ] Dirección de la oficina, cuando se pueda publicar.
- [ ] Logotipo (carpeta `assets/logos/`).
- [ ] Colores definitivos de la marca (ver sección 5).

---

## 9. Opciones a evaluar

### Formulario de contacto (no implementado)

GitHub Pages solo muestra páginas: **no puede recibir ni guardar mensajes**.
Un formulario necesitaría un servicio externo. Antes de decidir, hay que evaluar:

- Si el plan gratuito alcanza y qué límites tiene.
- Dónde quedan guardados los datos de las personas que escriben (privacidad).
- Cómo evitar mensajes basura (spam).
- Si realmente aporta más que el correo y el botón de agenda.

Hasta que se decida, el contacto se hace por correo, WhatsApp y la agenda.

---

## 10. Seguridad: qué nunca subir

Este repositorio es **público**: cualquier persona puede ver todo lo que se suba.

- **Nunca** suba contraseñas, códigos de verificación, claves ni tokens.
- No suba datos de clientes ni de propiedades sin autorización.
- No suba documentos personales.

---

## Notas técnicas (para Benjamín)

- HTML y CSS, más un único archivo de JavaScript simple (`js/particulas.js`)
  solo para el efecto decorativo. Sin frameworks, librerías ni compilación.
- Única carga externa: la fuente DM Sans desde Google Fonts.
- Todas las rutas son relativas; el sitio no depende del usuario ni de la URL final.
- Las secciones del HTML y del CSS están numeradas igual (1 a 4).
- `PLAN-PRIVADO.md` (plan interno del proyecto) está en `.gitignore` y no se sube.
