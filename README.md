# Página web de Eduardo Rojas Solís

Página personal de **Eduardo Rojas Solís, corredor de propiedades**.
Es una primera versión: todas las secciones existen, pero varios datos
todavía faltan y aparecen en la página con **fondo amarillo** y el texto
`[PENDIENTE: ...]`.

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
| `css/estilos.css` | Colores, tamaños y orden visual | Solo los colores |
| `assets/perfil/` | Fotografía de perfil | Sí (subir la foto) |
| `assets/logos/` | Logotipo, cuando exista | Más adelante |
| `README.md` | Esta guía | No es necesario |

La página tiene cuatro partes, en este orden:

1. **Tarjeta de presentación:** foto, nombre, frase y botones.
2. **Sobre mí:** trayectoria y datos breves.
3. **Servicios:** tarjetas con cada servicio.
4. **Contacto:** correo, agenda y redes profesionales.

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

Los botones de agenda y redes están **desactivados** (no se pueden presionar)
hasta que exista el enlace real. Para activar uno:

1. Quite `boton--pendiente` y `aria-disabled="true"`.
2. Agregue `href="..."` con el enlace, y `target="_blank" rel="noopener"` para
   que se abra en una pestaña nueva.
3. Borre la línea pequeña `<small>[PENDIENTE: ...]</small>`.

**Ejemplo con LinkedIn. Antes:**
```html
<a class="boton boton--pendiente" aria-disabled="true">
  LinkedIn <small>[PENDIENTE: enlace al perfil]</small>
</a>
```
**Después:**
```html
<a class="boton" href="https://www.linkedin.com/in/su-perfil" target="_blank" rel="noopener">
  LinkedIn
</a>
```

**Ejemplo con el botón de agenda** (aparece **dos veces**: en la tarjeta y en Contacto).
**Antes:**
```html
<a class="boton boton--principal boton--pendiente" aria-disabled="true">
  Agendar una reunión
  <small>[PENDIENTE: enlace de agendamiento]</small>
</a>
```
**Después:**
```html
<a class="boton boton--principal" href="ENLACE-DE-LA-AGENDA" target="_blank" rel="noopener">
  Agendar una reunión
</a>
```

**El correo** se activa distinto. En la sección Contacto, reemplace el `<span ...>`
por esta línea, cambiando **las dos** apariciones del correo:
```html
<a href="mailto:correo@gmail.com">correo@gmail.com</a>
```

---

## 4. Cambiar la foto

**Paso 1: subir la foto**

1. En GitHub, entre a la carpeta `assets` y luego a `perfil`.
2. Haga clic en **«Add file» → «Upload files»**.
3. Arrastre la foto. Debe llamarse exactamente **`foto-eduardo.jpg`**
   (vertical, idealmente de unos 800 × 1000 píxeles y menos de 500 KB).
4. Haga clic en **«Commit changes»**.

**Paso 2: mostrarla en la página**

En `index.html`, busque `FOTO DE EDUARDO`.

**Antes:**
```html
<div class="foto-pendiente">
  <span class="pendiente">[PENDIENTE: fotografía profesional de Eduardo]</span>
</div>
<!-- <img src="assets/perfil/foto-eduardo.jpg" alt="Fotografía de Eduardo Rojas Solís"> -->
```
**Después** (se borró el bloque `<div>` completo y los símbolos `<!--` y `-->` de la línea `<img>`):
```html
<img src="assets/perfil/foto-eduardo.jpg" alt="Fotografía de Eduardo Rojas Solís">
```

> Si la foto tiene otro nombre o formato (por ejemplo `.webp`), cambie también
> el nombre dentro de `src="..."`.

---

## 5. Cambiar los colores

Abra `css/estilos.css`. Al principio está la sección **COLORES**. Cambie solo
los códigos que empiezan con `#` (por ejemplo `#1f2d3d`). Cada línea tiene
una explicación de dónde se usa ese color.

Los colores actuales son **provisorios**, hasta que se defina la identidad
de marca.

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

Todos aparecen en la página con fondo amarillo. Para encontrarlos en
`index.html`, busque la palabra `PENDIENTE`.

| Sección | Dato pendiente |
|---|---|
| Tarjeta | Fotografía profesional de Eduardo |
| Tarjeta | Frase breve de presentación (1 o 2 líneas) |
| Tarjeta y Contacto | Enlace de la herramienta de agendamiento (botón «Agendar una reunión», 2 veces) |
| Sobre mí | Descripción de la trayectoria como corredor de propiedades |
| Sobre mí | Años de experiencia en el rubro |
| Sobre mí | Zona de trabajo (ciudades o comunas) |
| Sobre mí | Tipos de propiedades con que trabaja |
| Servicios | Nombre y descripción del servicio 1 |
| Servicios | Nombre y descripción del servicio 2 |
| Servicios | Nombre y descripción del servicio 3 |
| Contacto | Correo profesional |
| Contacto | Enlace a LinkedIn |
| Contacto | Enlace a Facebook |
| Contacto | Enlace a Instagram |

**Otros pendientes (no se ven en la página):**

- [ ] Logotipo (carpeta `assets/logos/`).
- [ ] Colores definitivos de la marca (ver sección 5).
- [ ] Cuando ya no queden datos pendientes, **borrar** en `index.html` la línea
      `<meta name="robots" content="noindex">`. Mientras esa línea exista,
      Google no mostrará la página en sus resultados.

---

## 9. Opciones a evaluar

### Formulario de contacto (no implementado)

GitHub Pages solo muestra páginas: **no puede recibir ni guardar mensajes**.
Un formulario necesitaría un servicio externo. Antes de decidir, hay que evaluar:

- Si el plan gratuito alcanza y qué límites tiene.
- Dónde quedan guardados los datos de las personas que escriben (privacidad).
- Cómo evitar mensajes basura (spam).
- Si realmente aporta más que el correo y el botón de agenda.

Hasta que se decida, el contacto se hace por correo y por la agenda.

### Teléfono o WhatsApp

No se incluyó. Se puede agregar en la sección Contacto si Eduardo lo autoriza.

---

## 10. Seguridad: qué nunca subir

Este repositorio es **público**: cualquier persona puede ver todo lo que se suba.

- **Nunca** suba contraseñas, códigos de verificación, claves ni tokens.
- No suba datos de clientes ni de propiedades sin autorización.
- No suba documentos personales.

---

## Notas técnicas (para Benjamín)

- HTML y CSS puros. Sin JavaScript, frameworks, dependencias ni compilación.
- Todas las rutas son relativas; el sitio no depende del usuario ni de la URL final.
- Las secciones del HTML y del CSS están numeradas igual (1 a 4).
- `PLAN-PRIVADO.md` (plan interno del proyecto) está en `.gitignore` y no se sube.
