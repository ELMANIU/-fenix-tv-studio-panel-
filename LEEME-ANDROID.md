# FÉNIX TV STUDIO – Instalación desde Android (sin PC ni Termux)

Vas a utilizar Chrome, GitHub y Cloudflare. No modifiques el Worker actual hasta comprobar que el panel funciona.

## 1. Descarga los dos archivos
Descarga `worker.js` y `wrangler.jsonc` y guárdalos en tu carpeta Descargas del teléfono. Son los únicos dos archivos que hay que subir a GitHub. Si descargas el ZIP, extráelo con la app Archivos.

## 2. Crea la base de datos desde Cloudflare
Abre https://dash.cloudflare.com/ en Chrome (activa «Sitio para computadoras» si no ves opciones).
En tu cuenta, busca **D1 SQL database / Bases de datos D1**, pulsa **Create database** y llámala exactamente `fenix-tv-cms`.
Después de crearla, copia su **Database ID** (UUID); puedes verlo en Overview/Settings de la base.

## 3. Sube los 2 archivos a GitHub
En https://github.com/new crea un repositorio nuevo llamado `fenix-tv-studio-panel` (no uses el repositorio del Worker actual). Hazlo privado si así lo prefieres y marca **Add README file** para disponer del botón «Add file».
Abre el repositorio con Chrome en modo «Sitio para computadoras». Usa **Add file → Upload files** para cargar `worker.js` y `wrangler.jsonc` a la raíz del repositorio. Verifica que los nombres y la ruta son exactamente estos. Confirma los cambios.

## 4. Introduce el Database ID desde GitHub
Dentro del repositorio, abre `wrangler.jsonc`, pulsa el icono del lápiz (Edit this file) y sustituye el texto `PEGA_AQUI_EL_ID_D1` por el ID de D1 que copiaste en el paso 2. Mantén las comillas, no agregues espacios y pulsa **Commit changes**. Así no necesitas instalar ningún editor de código en Android.

## 5. Publica en Cloudflare
En https://dash.cloudflare.com/ abre **Workers & Pages → Create application → Connect to Git / GitHub** (el nombre exacto puede variar).
Autoriza GitHub si se solicita y selecciona `fenix-tv-studio-panel`.
La configuración tiene `name=fenix-tv-panel`; usa ese mismo nombre. Para Deploy Command usa `npx wrangler deploy`. Si existe campo de Build Command, déjalo vacío.
Pulsa **Save and Deploy**. Cloudflare construye y publica la web por ti, sin Node.js ni terminal en tu Android.

## 6. Protege el panel
En la configuración del Worker `fenix-tv-panel`, abre **Settings → Variables and Secrets** y añade el secreto **ADMIN_TOKEN** con una clave fuerte de al menos 24 caracteres. Usa el tipo `Secret`, no una variable pública. No la subas a GitHub.
Para completar títulos, sinopsis e imágenes automáticamente, puedes agregar el secreto opcional **TMDB_TOKEN** con el API Read Access Token de tu cuenta TMDB.

## 7. Prueba sin modificar canales en vivo
Abre la dirección pública que Cloudflare te dio para `fenix-tv-panel`.
Comprueba `/health` y visita la página principal. Usa tu ADMIN_TOKEN para entrar; pulsa **Importar GitHub**.
Luego abre `https://TU-PANEL/channels.json` y verifica que están hbofamily, fenixapocalipsis y bitme.
NO cambies todavía `CHANNELS_CONFIG_URL` en tu Worker antiguo. Antes valida que guardados, logos, duraciones y listado funcionan desde el panel.

## 8. Conecta el Worker de emisión
Solo después de validar lo anterior, en el Worker **original** cambia la variable `CHANNELS_CONFIG_URL` a `https://TU-PANEL/channels.json`.
Verifica sus rutas `/config-status`, `/service-health` y `/catalog.json`. Si algo falla, vuelve a la URL GitHub anterior.

## 9. Categoría «Canales Fénix»
El Worker de reproducción **original** que compartiste agrega los canales a `linearChannels`, pero no garantiza colocarlos dentro de `tvCategories`.
Agruparlos en un solo bloque **requiere todavía un ajuste del código del Worker original** o de la app. El panel móvil y el nuevo archivo `channels.json` no hacen ese ajuste por sí solos.

## Avisos
- Esta edición móvil auto-crea la única tabla que necesita en D1 cuando se consulte la configuración por primera vez. No necesitas consola SQL.
- No hay URLs públicas de instalación ya creadas: debes conectarlo tú a tu cuenta GitHub/Cloudflare.
- Si Cloudflare te da error por el UUID, confirma que lo pegaste completo en `wrangler.jsonc`.
- La búsqueda TMDB no suministra enlaces de película ni derechos para emitirla. El enlace de reproducción lo introduces tú.
- Para mantener la EPG sincronizada, comprueba la duración real del vídeo (HH:MM:SS).
- Copia de seguridad: antes de modificar la variable del Worker que usa la TV, guarda la URL anterior de GitHub.
