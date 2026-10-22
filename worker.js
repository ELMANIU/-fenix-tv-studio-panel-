// FÉNIX TV STUDIO 2.4.0 — intro exacto LG + anuncios con imagen/música desde R2 + OMDb.
const BUILTIN_ASSETS = {"/":{"type":"text/html; charset=utf-8","body":"<!doctype html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <meta name=\"theme-color\" content=\"#09101c\" />\n  <title>FÉNIX TV · STUDIO 2.3.9 · SEGMENTOS MULTIFUENTE</title>\n  <link rel=\"stylesheet\" href=\"/style.css\" />\n  <script defer src=\"/app.js\"></script>\n</head>\n<body>\n  <div class=\"ambient a1\"></div><div class=\"ambient a2\"></div>\n  <div id=\"toast\" class=\"toast\" role=\"status\" aria-live=\"polite\"></div>\n  <main>\n    <section id=\"login\" class=\"auth-page\">\n      <div class=\"auth-card\">\n        <div class=\"brand-mark\">F<span>✦</span></div>\n        <div class=\"eyebrow\">CENTRO DE CONTROL</div>\n        <h1>FÉNIX <em>TV</em></h1>\n        <p>Tu programación, tus canales. Todo desde un solo lugar.</p>\n        <form id=\"loginForm\" class=\"form-stack\">\n          <label>Clave de administración<input id=\"token\" type=\"password\" autocomplete=\"off\" required placeholder=\"Tu ADMIN_TOKEN de Cloudflare\" /></label>\n          <button class=\"primary wide\" type=\"submit\">Entrar al panel <span>↗</span></button>\n        </form>\n        <small>Tu clave se guarda únicamente durante esta pestaña; no se publica en GitHub ni en el panel.</small>\n      </div>\n    </section>\n\n    <section id=\"app\" class=\"app\" hidden>\n      <header class=\"header\">\n        <div class=\"logo\"><span class=\"logo-sign\">F✦</span><span><strong>FÉNIX TV</strong><small>STUDIO · CENTRAL DE CANALES</small></span></div>\n        <div class=\"header-actions\">\n          <span class=\"live-dot\"><i></i> ADMIN ONLINE</span>\n          <button id=\"importBtn\" class=\"button outline\" type=\"button\">↻ Importar canales (GitHub)</button>\n          <button id=\"logoutBtn\" class=\"button ghost\" type=\"button\">Salir</button>\n        </div>\n      </header>\n<section class=\"fenix-command\" aria-label=\"Accesos rápidos\">\n  <div class=\"fenix-command-copy\"><span class=\"fenix-kicker\">TU CENTRAL CREATIVA</span><strong>Todo tu contenido, en un solo lugar.</strong><small>Busca, agrega o edita en pocos pasos.</small></div>\n  <div class=\"fenix-command-search\"><label for=\"fenixQuickSearch\">Buscar en toda la biblioteca <kbd>Ctrl K</kbd></label><input type=\"search\" id=\"fenixQuickSearch\" autocomplete=\"off\" placeholder=\"⌕ Película, serie o título…\" aria-controls=\"fenixQuickResults\" aria-expanded=\"false\" /><div class=\"fenix-quick-results\" id=\"fenixQuickResults\" hidden role=\"listbox\"></div></div>\n  <div class=\"fenix-command-actions\"><button type=\"button\" id=\"fenixNewMovie\" class=\"fenix-action\"><span>＋</span> Película</button><button type=\"button\" id=\"fenixNewSeries\" class=\"fenix-action\"><span>＋</span> Serie</button><button type=\"button\" id=\"fenixNewChannel\" class=\"fenix-action\"><span>＋</span> Canal</button></div>\n</section>\n<nav class=\"studio-nav\"><button type=\"button\" id=\"tabChannels\" class=\"active\">📡 Canales 24/7</button><button type=\"button\" id=\"tabVod\">🎬 Películas y Series</button><button type=\"button\" id=\"tabPromo\">🎵 Anuncio de bienvenida</button><button type=\"button\" id=\"tabAppearance\">✦ Apariencia de la app</button></nav>\n      <div class=\"dashboard\">\n        <aside class=\"sidebar\">\n          <div class=\"section-head\"><span>TUS CANALES</span><button id=\"newChannelSide\" class=\"small-plus\" aria-label=\"Nuevo canal\">+</button></div>\n          <div id=\"channelsList\" class=\"channels-list\"></div>\n          <button id=\"newChannel\" class=\"new-channel\" type=\"button\"><span>＋</span> Crear nuevo canal</button>\n          <div class=\"sidebar-footer\"><span>CONTENIDO CENTRALIZADO</span><p>Todos aparecerán bajo <strong>Canales Fénix</strong> después de aplicar la integración.</p></div>\n        </aside>\n        <div class=\"workspace\">\n          <div class=\"topline\"><div><div class=\"eyebrow\">GESTIÓN DE PROGRAMACIÓN</div><h2>Mi central de canales <span>✦</span></h2><p>Actualiza tu señal 24/7 sin tocar una línea de JSON.</p></div>\n            <div class=\"status-card\"><span>CONFIGURACIÓN</span><strong id=\"revision\">—</strong><small>Los cambios se guardan en Cloudflare D1</small></div>\n          </div>\n          <div id=\"empty\" class=\"empty-state\" hidden><div class=\"empty-icon\">◈</div><h3>Empieza con tus tres canales actuales</h3><p>Importa tu channels.json de GitHub una sola vez. Después podrás crear canales, editar y añadir contenido aquí.</p><button id=\"emptyImport\" class=\"primary\" type=\"button\">Importar canales existentes ↗</button></div>\n          <div id=\"detail\" hidden>\n            <div class=\"summary-row\"><div class=\"stat\"><span>CANALES REGISTRADOS</span><strong id=\"totalChannels\">0</strong></div><div class=\"stat\"><span>PROGRAMAS DEL CANAL</span><strong id=\"totalPrograms\">0</strong></div><div class=\"stat\"><span>EMISIÓN</span><strong id=\"activeState\">—</strong></div></div>\n            <section class=\"channel-hero\"><div id=\"heroLogo\" class=\"hero-logo\">F✦</div><div><span class=\"tag\">CANAL SELECCIONADO</span><h3 id=\"heroTitle\">—</h3><p id=\"heroDesc\">—</p><div class=\"hero-meta\"><span id=\"heroKey\"></span><span>● Programación lineal 24/7</span></div></div><button id=\"editChannel\" class=\"button outline hero-edit\" type=\"button\">✎ Editar canal</button></section>\n            <div class=\"main-grid\">\n              <section class=\"panel editor-panel\"><div class=\"panel-title\"><span class=\"tile-icon\">＋</span><div><h3 id=\"programEditorTitle\">Agregar contenido</h3><p>Película, serie o documental</p></div></div>\n                <form id=\"programForm\" class=\"form-stack\">\n                  <div class=\"two-col\"><label>Tipo de contenido<select id=\"pType\"><option value=\"pelicula\">Película</option><option value=\"serie\">Serie / episodio</option><option value=\"documental\">Documental</option><option value=\"otro\">Otro</option></select></label><label>Año (opcional)<input id=\"pYear\" type=\"number\" min=\"1880\" max=\"2150\" placeholder=\"2006\" /></label></div>\n                  <label>Título<input id=\"pTitle\" required placeholder=\"Ej. La pantera rosa\" /></label>\n                  <button id=\"searchMetadata\" class=\"lookup\" type=\"button\">✧ Buscar ficha, sinopsis e imagen automáticamente</button>\n                  <div id=\"metadataResults\" class=\"search-results\" hidden></div>\n                  <label>URL del video<input id=\"pUrl\" type=\"url\" required placeholder=\"https://.../video.mp4\" /></label><button type=\"button\" class=\"button outline duration-probe\" id=\"probeChannelDuration\">⏱ Detectar duración del archivo</button><small id=\"probeChannelHint\" class=\"duration-hint\">Duración exacta si el archivo permite leer metadatos; de lo contrario se solicita confirmación manual.</small>\n                  <div class=\"two-col\"><label>Duración exacta <small>6 dígitos HHMMSS o HH:MM:SS</small><input id=\"pDuration\" placeholder=\"013425\" inputmode=\"numeric\" pattern=\"[0-9]{6}|[0-9]{1,3}:[0-9]{2}:[0-9]{2}\" required /></label><label>Formato<select id=\"pFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS (.m3u8)</option></select></label></div>\n                  <label>Sinopsis<textarea id=\"pDescription\" rows=\"3\" placeholder=\"Se completará al buscar el título (opcional)\"></textarea></label>\n                  <label>Imagen / póster (opcional)<input id=\"pImage\" type=\"url\" placeholder=\"https://.../poster.jpg\" /></label>\n                  <div class=\"form-buttons\"><button class=\"primary wide\" id=\"saveProgram\" type=\"submit\">＋ Guardar en este canal</button><button type=\"button\" id=\"cancelProgram\" class=\"button ghost\" hidden>Cancelar edición</button></div>\n                </form>\n                <details class=\"fenix-bulk channel-bulk\"><summary>＋ Agregar varios videos a este canal 24/7</summary>\n                  <p class=\"vod-help\">Añade películas, series o documentales. Para sincronizar la programación necesitamos duración del archivo o una duración confirmada.</p>\n                  <div id=\"bulkChannelRows\" class=\"bulk-rows\"></div>\n                  <div class=\"bulk-actions\"><button type=\"button\" class=\"button outline\" id=\"bulkChannelAdd\">＋ Otro video</button><button type=\"button\" class=\"button outline\" id=\"bulkChannelMetadata\">✧ Buscar fichas TMDB</button><button type=\"button\" class=\"primary\" id=\"bulkChannelSave\">Agregar videos al canal</button></div>\n                  <div id=\"bulkChannelMessage\" class=\"vod-muted\" role=\"status\">No se modifica ningún video que ya está programado.</div>\n                </details>\n              </section>\n              <section class=\"panel playlist-panel\"><div class=\"panel-title list-title\"><span class=\"tile-icon\">▤</span><div><h3>Lista de reproducción</h3><p>Se repite automáticamente las 24 horas</p></div><span id=\"playlistCount\" class=\"count-tag\">0</span></div><div id=\"programsList\" class=\"programs-list\"></div></section>\n            </div>\n          </div>\n          <footer>FÉNIX TV STUDIO • Los enlaces de video deben permitir reproducción directa y contar con derechos de transmisión.</footer>\n        </div>\n      </div>\n\n<section id=\"promoPanel\" class=\"vod-panel\" hidden>\n <div class=\"vod-head\"><div class=\"eyebrow\">IDENTIDAD VISUAL · CONFIGURACIÓN REMOTA</div><h2>Anuncio de bienvenida <span>✦</span></h2><p>Reemplaza el video de Resident Evil con una imagen y música. Los cambios llegarán a la LG sin reinstalar el IPK.</p></div>\n <div class=\"promo-editor-grid\">\n  <section class=\"panel promo-creative-form\">\n   <h3>🎨 Campaña que aparece al iniciar</h3>\n   <p class=\"vod-help\">Se reproduce una vez por día en cada televisor, después de la animación inicial. Los archivos que subas se almacenarán en Cloudflare R2.</p>\n   <label class=\"checkbox-line\"><input id=\"promoEnabled\" type=\"checkbox\" checked> Activar anuncio diario</label>\n   <label>Nombre de campaña<input id=\"promoTitle\" maxlength=\"90\" placeholder=\"Estreno de la semana\"></label>\n   <label>Texto opcional en pantalla<input id=\"promoMessage\" maxlength=\"180\" placeholder=\"Descubre nuestro nuevo contenido\"></label>\n   <label>Imagen del anuncio (JPG / PNG / WEBP, máx. 5 MB)<input id=\"promoImageFile\" type=\"file\" accept=\"image/jpeg,image/png,image/webp\"></label>\n   <button type=\"button\" class=\"button outline\" id=\"promoUploadImage\">⬆ Subir imagen a Cloudflare R2</button>\n   <label>URL actual de imagen<input id=\"promoImageUrl\" type=\"url\" placeholder=\"https://.../imagen.jpg\" autocomplete=\"off\"></label>\n   <label>Música del anuncio (MP3 recomendado, máx. 12 MB)<input id=\"promoAudioFile\" type=\"file\" accept=\"audio/mpeg,audio/mp3,audio/mp4,audio/ogg,audio/wav\"></label>\n   <button type=\"button\" class=\"button outline\" id=\"promoUploadAudio\">⬆ Subir música a Cloudflare R2</button>\n   <label>URL actual de música<input id=\"promoAudioUrl\" type=\"url\" placeholder=\"https://.../musica.mp3\" autocomplete=\"off\"></label>\n   <div class=\"two-col\"><label>Duración del anuncio (segundos)<input id=\"promoDuration\" type=\"number\" min=\"5\" max=\"60\" value=\"20\" required></label>\n   <label>Mostrar botón Omitir después de (segundos)<input id=\"promoSkipAfter\" type=\"number\" min=\"0\" max=\"30\" value=\"3\" required></label></div>\n   <div class=\"promo-editor-actions\"><button type=\"button\" class=\"primary wide\" id=\"promoSave\">✔ Publicar anuncio en Fénix TV</button><button type=\"button\" class=\"button outline\" id=\"promoReload\">↻ Recuperar datos publicados</button></div>\n   <div id=\"promoStatus\" class=\"duration-hint\" role=\"status\" aria-live=\"polite\">Primero sube tus archivos o pega sus URLs y luego pulsa Publicar.</div>\n  </section>\n  <section class=\"panel promo-preview-panel\"><h3>📺 Vista previa de bienvenida</h3>\n   <div class=\"promo-preview-stage\"><img id=\"promoPreviewImage\" alt=\"Vista previa de la campaña\" hidden><div id=\"promoPreviewEmpty\">La imagen nueva aparecerá aquí</div><div class=\"promo-preview-overlay\"><strong id=\"promoPreviewTitle\">Estreno de la semana</strong><p id=\"promoPreviewMessage\"></p></div></div>\n   <audio id=\"promoPreviewAudio\" controls preload=\"none\" style=\"width:100%;margin:16px 0\" aria-label=\"Escuchar música del anuncio\"></audio>\n   <p class=\"vod-help\">La vista previa es solo para revisar. La LG descargará imagen y música cuando abras la aplicación. Si webOS bloquea el sonido automático, seguirá mostrando la imagen.</p>\n   <p class=\"vod-help\">Si no configuras R2, también puedes pegar direcciones HTTPS de archivos alojados en un servidor propio.</p>\n  </section>\n </div>\n</section>\n\n<section id=\"vodPanel\" class=\"vod-panel\" hidden>\n  <div class=\"vod-head\"><div class=\"eyebrow\">BIBLIOTECA BAJO DEMANDA</div><h2>Películas y Series <span>✦</span></h2><p>Busca fichas de películas y series en cuatro fuentes, edita fácilmente y guarda todo en tu biblioteca.</p></div>\n  <div class=\"fenix-vod-stats\" aria-label=\"Resumen del catálogo\"><div><span>Películas</span><strong id=\"fenixMovieTotal\">—</strong></div><div><span>Series</span><strong id=\"fenixSeriesTotal\">—</strong></div><div><span>Capítulos</span><strong id=\"fenixEpisodeTotal\">—</strong></div><div><span>Estado</span><strong class=\"fenix-connected\">● D1</strong></div></div>\n  <details class=\"panel import-panel\" id=\"vodImportBox\"><summary class=\"fenix-import-summary\"><span>▣ Importar y respaldar biblioteca</span><small>Opciones avanzadas · abrir solo cuando las necesites</small></summary><div class=\"fenix-import-content\">\n  <div class=\"vod-import-header\"><div><span class=\"eyebrow\">IMPORTACIÓN SEGURA</span><h3>Traer biblioteca desde Roku-feed</h3><p>Primero revisa los títulos, descarga una copia de seguridad y confirma. No toca tus canales 24/7.</p></div><span class=\"import-version\">STUDIO 2.3.8 · INTROSCAN + INTRODB</span></div>\n  <div class=\"import-buttons\">\n    <button type=\"button\" class=\"button outline\" id=\"vodPreviewImport\">① Vista previa de GitHub</button>\n    <button type=\"button\" class=\"button outline\" id=\"vodExportBackup\">② Descargar mi respaldo actual</button>\n    <button type=\"button\" class=\"primary\" id=\"vodCommitImport\" disabled>③ Importar biblioteca completa</button>\n  </div>\n  <div id=\"vodImportPreview\" class=\"import-preview\" role=\"status\" aria-live=\"polite\">No se ha realizado la vista previa. Tus películas y series actuales no se modificarán.</div>\n  <label class=\"checkbox-line import-confirm\"><input type=\"checkbox\" id=\"vodConfirmImport\" disabled> Confirmo que revisé la vista previa y quiero conservar un respaldo automático antes de importar.</label>\n  <div id=\"vodBackupLinks\" class=\"import-backups\"></div>\n</div></details>\n<div class=\"vod-switch\"><button type=\"button\" class=\"active\" id=\"vodMoviesTab\">🎬 Películas</button><button type=\"button\" id=\"vodSeriesTab\">▤ Series y episodios</button><span class=\"vod-sync\">Se guardan en Cloudflare D1</span></div>\n  <details class=\"panel fenix-bulk\" id=\"bulkMovieArea\"><summary>＋ Agregar varias películas a la vez</summary>\n    <div class=\"vod-import-header\"><div><span class=\"eyebrow\">CARGA MASIVA · PELÍCULAS</span><h3>Agregar varias películas de una vez</h3><p>Escribe título y enlace de cada video. TMDB completa la ficha; puedes verificar o corregir antes de guardar.</p></div></div>\n    <div id=\"bulkMovieRows\" class=\"bulk-rows\"></div>\n    <div class=\"bulk-actions\"><button type=\"button\" class=\"button outline\" id=\"bulkMovieAdd\">＋ Otra película</button><button type=\"button\" class=\"button outline\" id=\"bulkMovieMetadata\">✧ Buscar fichas en TMDB</button><button type=\"button\" class=\"primary\" id=\"bulkMovieSave\">Guardar películas del lote</button></div>\n    <div id=\"bulkMovieMessage\" class=\"vod-muted\" role=\"status\">Los duplicados se omitirán sin sobrescribir los títulos existentes.</div>\n  </details>\n  <div class=\"fenix-steps\"><span><b>1</b> Escribe el título</span><span><b>2</b> Completa la ficha</span><span><b>3</b> Agrega el video</span><span><b>4</b> Guarda</span></div>\n  <div class=\"vod-layout\">\n    <section class=\"panel vod-editor\"><h3 id=\"vodEditorTitle\">Nueva película</h3>\n      <form id=\"vodForm\" class=\"form-stack\">\n        <label>Título<input id=\"vodTitle\" placeholder=\"Busca por nombre, por ejemplo: La pantera rosa\" required maxlength=\"200\"></label>\n        <button type=\"button\" class=\"lookup\" id=\"vodTmdb\">✧ Buscar ficha en TMDB</button>\n        <div id=\"vodTmdbResults\" class=\"search-results\" hidden></div>\n        <div class=\"two-col\"><label>Año<input id=\"vodYear\" type=\"number\" min=\"1880\" max=\"2150\" placeholder=\"2006\"></label>\n          <label>Género<select id=\"vodGenre\"></select></label></div>\n        <label>Sinopsis<textarea id=\"vodDescription\" rows=\"3\" placeholder=\"Se completa con TMDB o puedes escribirla\"></textarea></label>\n        <label>URL del póster<input id=\"vodPoster\" type=\"url\" placeholder=\"https://image.tmdb.org/...\" /></label>\n        <details class=\"fenix-extra\" id=\"fenixExtraMetadata\"><summary>✦ Dirección, reparto, calificación IMDb y más <span>Opcional</span></summary>\n          <div class=\"fenix-extra-grid\"><label>Director / dirección<input id=\"vodDirector\" maxlength=\"350\" placeholder=\"De OMDb o edición manual\"></label><label>Reparto<input id=\"vodCast\" maxlength=\"700\" placeholder=\"Actores principales\"></label><label>Calificación IMDb (0-10)<input id=\"vodImdbRating\" inputmode=\"decimal\" placeholder=\"Ej. 8.2\"></label><label>ID IMDb<input id=\"vodImdbId\" maxlength=\"20\" placeholder=\"tt1234567\"></label><label>País<input id=\"vodCountry\" maxlength=\"160\"></label><label>Premios<input id=\"vodAwards\" maxlength=\"350\"></label></div>\n          <small>OMDb aporta datos complementarios. Las sinopsis permanecen en español de México/Latinoamérica.</small>\n        </details>\n        <div id=\"vodMovieInputs\">\n          <label>URL de reproducción<input id=\"vodUrl\" type=\"url\" placeholder=\"https://...mp4\" /></label><button type=\"button\" class=\"button outline duration-probe\" id=\"probeMovieDuration\">⏱ Detectar duración del archivo</button><small id=\"probeMovieHint\" class=\"duration-hint\">TMDB informa una duración de referencia; la exacta proviene del video.</small>\n          <div class=\"two-col\"><label>Duración (HHMMSS)<input id=\"vodDuration\" inputmode=\"numeric\" placeholder=\"013425\" /></label>\n            <label>Formato<select id=\"vodFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS (.m3u8)</option></select></label></div>\n          <section class=\"fenix-segments-panel\" aria-label=\"Buscar intro y créditos de película\">\n            <strong>🔎 Intro y créditos · 3 bases de datos</strong>\n            <p>Busca marcas de esta película en IntroDB, SkipDB y TheIntroDB. Debes guardarla antes de consultar.</p>\n            <button type=\"button\" class=\"button outline wide\" id=\"movieSegmentsLookup\">🔎 Buscar intro y créditos (3 bases)</button>\n            <div id=\"movieSegmentsResult\" class=\"fenix-segments-results\" aria-live=\"polite\">Selecciona una película guardada y pulsa Buscar.</div>\n          </section>\n          <div class=\"two-col intro-marks\"><label>Inicio de intro (segundos)<input id=\"movieIntroStartSeconds\" type=\"number\" min=\"0\" step=\"0.1\" placeholder=\"Sin detectar\"></label><label>Final de intro (segundos)<input id=\"movieIntroEndSeconds\" type=\"number\" min=\"0\" step=\"0.1\" placeholder=\"Sin detectar\"></label></div>\n          <div class=\"two-col intro-marks\"><label>Inicio de créditos (segundos)<input id=\"movieCreditsStartSeconds\" type=\"number\" min=\"0\" step=\"0.1\" placeholder=\"Sin detectar\"></label><label>Final de créditos (segundos)<input id=\"movieCreditsEndSeconds\" type=\"number\" min=\"0\" step=\"0.1\" placeholder=\"Sin detectar\"></label></div>\n          <div class=\"bulk-actions\"><button type=\"button\" id=\"moviePreviewIntro\" class=\"button outline\">▶ Ver intro</button><button type=\"button\" id=\"moviePreviewCredits\" class=\"button outline\">▶ Ver créditos</button></div>\n          <div id=\"movieSegmentPreviewBox\" hidden><video id=\"movieSegmentPreviewVideo\" controls playsinline preload=\"none\" style=\"width:100%;max-height:300px\"></video></div>\n        </div>\n        <div class=\"dialog-tip\">Los géneros se eligen automáticamente cuando TMDB los proporciona; puedes corregirlos antes de guardar. La duración debe corresponder a tu archivo.</div>\n        <input type=\"hidden\" id=\"vodTmdbId\" />\n        <div class=\"form-buttons\"><button type=\"submit\" class=\"primary wide\" id=\"vodSave\">＋ Guardar película</button><button type=\"button\" class=\"button ghost\" id=\"vodCancel\">Cancelar edición</button></div>\n      </form>\n    </section>\n    <section class=\"panel vod-list-panel\"><h3 id=\"vodListTitle\">Películas añadidas</h3><label class=\"vod-search-label\">Buscar título<input type=\"search\" id=\"vodFilter\" placeholder=\"Busca por película o serie...\" autocomplete=\"off\"></label><div id=\"vodListCount\" class=\"vod-muted\"></div><div id=\"vodItems\" class=\"vod-items\"></div><button type=\"button\" class=\"button outline wide\" id=\"vodShowMore\" hidden>Mostrar más títulos</button>\n      <div id=\"vodExistingWrap\" hidden><h3>Agregar capítulo a una serie del catálogo</h3><p class=\"vod-help\">Incluso si la serie fue agregada antes directamente a Roku-feed.</p>\n        <select id=\"vodExistingSeries\"><option value=\"\">Selecciona una serie existente...</option></select><button id=\"vodUseExisting\" type=\"button\" class=\"button outline\">＋ Abrir serie y agregar episodio</button>\n      </div>\n    </section>\n  </div>\n  <section id=\"vodEpisodeArea\" class=\"panel vod-episode-area\" hidden>\n    <div class=\"vod-episode-head\"><div><span class=\"eyebrow\">EDITOR DE EPISODIOS</span><h3 id=\"vodCurrentSeries\">Serie</h3></div><button type=\"button\" class=\"button ghost\" id=\"vodCloseEpisodes\">Cerrar</button></div>\n    <div id=\"vodEpisodes\" class=\"vod-items\"></div>\n    <details class=\"fenix-bulk bulk-episode\"><summary>＋ Añadir varios capítulos a esta temporada</summary>\n      <div class=\"vod-import-header\"><div><span class=\"eyebrow\">CARGA MASIVA · EPISODIOS</span><h3>Añadir muchos capítulos a esta serie</h3><p>Indica temporada y capítulos (ejemplo: 1-8,10,12), o cantidad para crear consecutivos. Solo tendrás que pegar cada enlace de video.</p></div></div>\n      <div class=\"two-col\"><label>Temporada<input type=\"number\" id=\"bulkEpSeason\" min=\"0\" max=\"99\" value=\"1\"></label><label>Números a agregar (ej. 1-8,10)<input id=\"bulkEpNumbers\" placeholder=\"1-8,10,12\" inputmode=\"text\"></label></div>\n      <div class=\"two-col\"><label>Cantidad consecutiva<input type=\"number\" id=\"bulkEpCount\" min=\"1\" max=\"80\" value=\"8\"></label><label>Empezando en episodio<input type=\"number\" id=\"bulkEpStart\" min=\"1\" max=\"999\" value=\"1\"></label></div>\n      <div class=\"bulk-actions\"><button type=\"button\" class=\"button outline\" id=\"bulkEpBuild\">＋ Preparar capítulos</button><button type=\"button\" class=\"button outline\" id=\"bulkEpTmdb\">✧ Datos de TMDB</button></div>\n      <div id=\"bulkEpRows\" class=\"bulk-rows\"></div>\n      <div class=\"bulk-actions\"><button type=\"button\" class=\"primary\" id=\"bulkEpSave\">Guardar capítulos del lote</button></div>\n      <div id=\"bulkEpMessage\" class=\"vod-muted\" role=\"status\">Crea lotes sucesivos cuando tengas más de 80 capítulos; no hay límite de veces.</div>\n    </details>\n\n    <form id=\"vodEpisodeForm\" class=\"form-stack\">\n      <div class=\"two-col\"><label>Temporada<input id=\"vodSeason\" type=\"number\" value=\"1\" min=\"0\" max=\"99\" required/></label><label>Episodio<input id=\"vodEpisodeNum\" type=\"number\" value=\"1\" min=\"1\" max=\"999\" required/></label></div>\n      <button type=\"button\" id=\"vodEpisodeTmdb\" class=\"lookup\">✧ Completar capítulo automáticamente con TMDB</button>\n      <label>Nombre del capítulo<input id=\"vodEpisodeTitle\" placeholder=\"Episodio 1\" /></label>\n      <label>URL del video<input id=\"vodEpisodeUrl\" type=\"url\" placeholder=\"https://...mp4\" required/></label><button type=\"button\" class=\"button outline duration-probe\" id=\"probeEpisodeDuration\">⏱ Detectar duración del archivo</button><small id=\"probeEpisodeHint\" class=\"duration-hint\">Se detecta solo cuando el enlace permite leer metadatos.</small>\n      <div class=\"intro-probe\"><button type=\"button\" class=\"button outline\" id=\"introScanCurrent\">🎞 Revisar video · Detectar intro</button><small id=\"introScanHint\" role=\"status\" aria-live=\"polite\" class=\"duration-hint\">Analiza este episodio. Si hay otros de la misma temporada los compara automáticamente; si no, busca pistas en este video.</small></div>\n      <section class=\"fenix-segments-panel\" aria-label=\"Buscar intro y créditos de tres bases\">\n        <strong>🔎 Intro y créditos · 3 bases de datos</strong>\n        <p>Consulta IntroDB, SkipDB y TheIntroDB sin salir del panel. Los segundos son sugerencias de la comunidad; verifica que correspondan a esta edición del video.</p>\n        <button type=\"button\" class=\"button outline wide\" id=\"episodeSegmentsLookup\">🔎 Buscar intro y créditos (3 bases)</button>\n        <div id=\"episodeSegmentsResult\" class=\"fenix-segments-results\" aria-live=\"polite\">Guarda el capítulo, ábrelo en Editar y pulsa Buscar.</div>\n      </section>\n      <div class=\"two-col intro-marks\"><label>Inicio de la intro (segundos)<input id=\"introStartSeconds\" type=\"number\" step=\"0.5\" min=\"0\" placeholder=\"Sin detectar\"></label><label>Final de la intro (segundos)<input id=\"introEndSeconds\" type=\"number\" step=\"0.5\" min=\"0\" placeholder=\"Sin detectar\"></label></div>\n      <div class=\"two-col intro-marks\"><label>Inicio de créditos (segundos)<input id=\"episodeCreditsStartSeconds\" type=\"number\" step=\"0.1\" min=\"0\" placeholder=\"Sin detectar\"></label><label>Final de créditos (segundos)<input id=\"episodeCreditsEndSeconds\" type=\"number\" step=\"0.1\" min=\"0\" placeholder=\"Sin detectar\"></label></div>\n      <div class=\"bulk-actions\"><button type=\"button\" class=\"button outline\" id=\"introUseCandidate\" hidden>✓ Aplicar sugerencia y guardar</button><button type=\"button\" class=\"button outline\" id=\"introReviewVideo\" >▶ Ver intro</button><button type=\"button\" class=\"button outline\" id=\"episodePreviewCredits\" >▶ Ver créditos</button></div>\n      <div id=\"introVideoPreview\" hidden><video id=\"introPreviewVideo\" controls preload=\"none\" style=\"width:100%;max-height:300px\" playsinline></video><small class=\"duration-hint\">Previsualiza las marcas antes de activarlas; el navegador debe admitir el formato y la fuente.</small></div>\n      <small class=\"duration-hint\">Un solo episodio genera posibles intervalos, NO una marca automática fiable. Solo se activa el salto si hay consenso suficiente o confirmas la sugerencia.</small>\n      <div class=\"two-col\"><label>Duración exacta (HHMMSS)<input id=\"vodEpisodeDuration\" placeholder=\"002325\" inputmode=\"numeric\" required/></label>\n        <label>Formato<select id=\"vodEpisodeFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS</option></select></label></div>\n      <label>Descripción del capítulo<textarea id=\"vodEpisodeDesc\" rows=\"2\"></textarea></label>\n      <label>Imagen del episodio (opcional)<input id=\"vodEpisodeImage\" type=\"url\" /></label>\n      <div class=\"form-buttons\"><button type=\"submit\" id=\"vodSaveEpisode\" class=\"primary wide\">＋ Agregar episodio</button><button type=\"button\" id=\"vodEpisodeCancel\" class=\"button ghost\">Cancelar edición</button></div>\n    </form>\n  </section>\n  <footer>FÉNIX TV STUDIO · Los metadatos de TMDB no incluyen licencias de reproducción. Publica solo enlaces que tengas derecho a distribuir.</footer>\n</section>\n\n    </section>\n    \n<section id=\"appearancePanel\" class=\"appearance-panel\" hidden>\n  <div class=\"appearance-intro\"><span class=\"eyebrow\">DISEÑO REMOTO · LG WEBOS</span><h2>Apariencia de FÉNIX TV <span>✦</span></h2><p>Elige un tema y publícalo para todas las televisiones actualizadas. No cambia el reproductor ni interrumpe la navegación.</p></div>\n  <div class=\"appearance-bar\"><span id=\"appearanceStatus\">Selecciona un tema para comenzar.</span><strong id=\"appearancePublished\">—</strong></div>\n  <div id=\"appearanceChoices\" class=\"appearance-grid\" aria-label=\"Temas disponibles\"></div>\n  <section class=\"panel appearance-controls\">\n    <div><h3>Personaliza los efectos</h3><p>En televisores LG antiguos se priorizan animaciones fluidas y de bajo consumo.</p></div>\n    <label>Intensidad visual<select id=\"appearanceIntensity\"><option value=\"subtle\">Suave</option><option value=\"cinematic\">Cinema · más visible</option></select></label>\n    <label>Movimiento<select id=\"appearanceMotion\"><option value=\"soft\">Elegante y suave</option><option value=\"dynamic\">Dinámico</option><option value=\"reduced\">Reducido (más ligero)</option></select></label>\n    <div class=\"appearance-actions\"><button type=\"button\" class=\"button outline\" id=\"appearanceRefresh\">↻ Leer tema publicado</button><button type=\"button\" class=\"primary\" id=\"appearanceSave\">✦ Publicar tema en LG</button></div>\n  </section>\n  <div class=\"appearance-note\">Los temas se aplican en Inicio, Explorar, Top 10, perfiles y los demás menús. El reproductor queda intacto. Las LG comprueban cambios aproximadamente cada 3 minutos, sin volver a abrir la app.</div>\n</section>\n<dialog id=\"channelDialog\" class=\"dialog\"><form id=\"channelForm\" class=\"modal-form\"><div class=\"modal-title\"><div><div class=\"eyebrow\">FÉNIX TV STUDIO</div><h3 id=\"channelDialogTitle\">Nuevo canal</h3></div><button type=\"button\" id=\"closeDialog\" aria-label=\"Cerrar\" class=\"button ghost\">✕</button></div>\n      <label>Nombre del canal<input id=\"cName\" required placeholder=\"FÉNIX NATURALEZA HD\" /></label>\n      <label>URL del logotipo PNG transparente<input id=\"cLogo\" type=\"url\" placeholder=\"https://.../logo.png\" /></label>\n      <section class=\"fenix-logo-control\" aria-label=\"Tamaño del logotipo en video\">\n        <div class=\"fenix-logo-control-title\"><span>📺 Tamaño del logo en pantalla</span><output id=\"cBugScaleValue\" for=\"cBugScale\">1.40×</output></div>\n        <input type=\"range\" id=\"cBugScale\" min=\"0.60\" max=\"3.00\" step=\"0.05\" value=\"1.40\" aria-label=\"Escala del logotipo del canal\" />\n        <div class=\"fenix-logo-marks\"><span>Más pequeño · 0.60×</span><span>Más grande · 3.00×</span></div>\n        <div class=\"fenix-logo-preview\" aria-label=\"Vista previa aproximada del logotipo en la esquina superior derecha\">\n          <span class=\"fenix-logo-preview-caption\">VISTA PREVIA · ESQUINA SUPERIOR DERECHA</span>\n          <img id=\"cBugPreview\" alt=\"Vista previa de logo\" hidden />\n          <span id=\"cBugPreviewEmpty\">Añade la URL del logo para ver la vista previa.</span>\n        </div>\n        <p class=\"fenix-logo-note\">Solo cambia el tamaño del canal seleccionado. Se conservan la posición superior derecha, animación, opacidad y publicidad. Si el PNG tiene márgenes transparentes, podría verse más pequeño.</p>\n        <button type=\"button\" id=\"cBugScaleReset\" class=\"button outline\">Restablecer tamaño a 1.40×</button>\n      </section>\n      <details id=\"cAdsEditor\" class=\"fenix-ad-editor\">\n        <summary>📢 Publicidad del canal · Configurar tanda de anuncios</summary>\n        <p class=\"fenix-ad-note\">Configura una tanda de anuncios consecutivos y cada cuánto comienza. Solo cambia este canal cuando guardes la edición.</p>\n        <label class=\"checkbox-line\"><input id=\"cAdEnabled\" type=\"checkbox\"/> Activar cortes comerciales de este canal</label>\n        <label>Un corte cada cuántos minutos<input type=\"number\" id=\"cAdMinutes\" value=\"30\" min=\"5\" max=\"180\" step=\"1\" inputmode=\"numeric\" /></label>\n        <div class=\"fenix-ad-head\"><strong>Anuncios en orden de reproducción</strong><span id=\"cAdSummary\">0 anuncios</span></div>\n        <div id=\"cAdList\" class=\"fenix-ad-list\"></div>\n        <div class=\"fenix-ad-actions\"><button type=\"button\" class=\"button outline\" id=\"cAdAdd\">＋ Añadir anuncio</button><button type=\"button\" class=\"button outline\" id=\"cAdPrepare3\">Preparar 3 anuncios</button></div>\n        <p class=\"fenix-ad-note\" id=\"cAdPreview\">Cada anuncio necesita un enlace MP4, MKV o HLS y la duración real en segundos. Se reproducen seguidos, sin volver al programa entre uno y otro.</p>\n        <p class=\"fenix-ad-note\">El intervalo mide el tiempo entre el inicio de una tanda y la siguiente, contando también la publicidad. Al cambiar anuncios, se recalcula el horario del canal. Las películas y series bajo demanda no se modifican.</p>\n      </details>\n      <label>Descripción<textarea id=\"cDescription\" rows=\"3\" placeholder=\"Canal de documentales en español latino 24/7\"></textarea></label>\n      <label class=\"checkbox-line\" id=\"commercialOption\"><input id=\"cInheritCommercial\" type=\"checkbox\" checked /> Usar los mismos comerciales que FÉNIX FAMILY</label>\n      <div class=\"dialog-tip\">Los canales nuevos se crean como borradores y se activan al agregar su primer programa. Todos usarán la sección <strong>Canales Fénix</strong>.</div>\n      <button type=\"submit\" class=\"primary wide\" id=\"saveChannel\">Crear canal</button><button type=\"button\" id=\"deleteChannel\" class=\"button danger wide\" hidden>Eliminar este canal</button>\n    </form></dialog>\n  </main>\n</body>\n</html>\n"},"/style.css":{"type":"text/css; charset=utf-8","body":":root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;color:#eaf2fe;background:#070d17;font-synthesis:none}*{box-sizing:border-box}body{margin:0;min-height:100vh}button,input,select,textarea{font:inherit}button{cursor:pointer}button:disabled{opacity:.6;cursor:wait}a{color:#77e5e0}.ambient{position:fixed;z-index:-1;pointer-events:none;width:38vw;height:38vw;filter:blur(100px);opacity:.17;border-radius:50%}.a1{background:#05bcba;top:-20vw;left:0}.a2{background:#7c3fff;bottom:-24vw;right:0}.app{min-height:100vh}[hidden]{display:none!important}.header{height:84px;border-bottom:1px solid #1e2c3c;background:#0b1320ed;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(16px,3vw,44px);gap:20px}.logo{display:flex;align-items:center;gap:13px}.logo-sign,.brand-mark{display:grid;place-items:center;background:linear-gradient(135deg,#02d3be,#018bd6);color:#061923;font-weight:1000;border-radius:14px}.logo-sign{width:44px;height:44px;font-size:22px}.logo strong{display:block;letter-spacing:.15em;font-size:18px}.logo small{display:block;color:#7090a3;font-size:9px;letter-spacing:.19em;margin-top:4px}.header-actions{display:flex;align-items:center;gap:12px}.live-dot{font-size:11px;color:#91afa9;letter-spacing:.11em;white-space:nowrap;margin-right:10px}.live-dot i{display:inline-block;background:#18d5a6;width:7px;height:7px;border-radius:50%;margin-right:6px;box-shadow:0 0 10px #18d5a6}.button,.primary{border:1px solid #34455b;background:#1b2939;color:#e9f9ff;border-radius:10px;padding:11px 16px;font-weight:650;font-size:13px;transition:.2s}.button:hover{background:#2b3b51}.button.outline{background:transparent}.button.ghost{background:transparent;border-color:transparent;color:#b2c5d4}.button.danger{border-color:#743341;color:#ffb6c5;background:#361e2a}.primary{border-color:#0bceb0;background:linear-gradient(110deg,#09b7b0,#10d3ab);color:#05242e;box-shadow:0 7px 22px #08c8b224}.primary:hover{filter:brightness(1.08)}.wide{width:100%}.dashboard{display:grid;grid-template-columns:258px minmax(0,1fr)}.sidebar{background:#0c1522;border-right:1px solid #1e2c3c;min-height:calc(100vh - 84px);padding:30px 16px;display:flex;flex-direction:column}.section-head{display:flex;align-items:center;justify-content:space-between;padding:0 12px;margin-bottom:15px;font-size:11px;letter-spacing:.14em;color:#849db0;font-weight:800}.small-plus{background:#172c3a;color:#26e2c3;border:1px solid #244555;border-radius:8px;width:26px;height:26px;font-size:17px}.channels-list{display:grid;gap:8px}.channel-option{border:1px solid transparent;border-radius:12px;background:transparent;display:flex;align-items:center;gap:12px;color:#bfd0de;text-align:left;padding:12px;width:100%}.channel-option.active{background:#123337;border-color:#1a625e;color:#e2fff8}.channel-option:hover{background:#182838}.channel-option img{width:36px;height:36px;object-fit:contain;background:#111f2d;border-radius:8px}.channel-option .channel-initial{width:36px;height:36px;display:grid;place-items:center;background:#1c283f;border-radius:8px}.channel-option strong{display:block;font-size:11px;letter-spacing:.02em}.channel-option small{color:#8397a9;font-size:10px;margin-top:5px;display:block}.new-channel{margin:20px 4px 0;border:1px dashed #2d6070;border-radius:12px;padding:14px 9px;background:transparent;color:#5ce1d7;font-size:12px;font-weight:750}.new-channel span{font-size:18px;margin-right:8px}.sidebar-footer{margin-top:auto;padding:28px 12px;color:#657f92;font-size:11px}.sidebar-footer span{letter-spacing:.1em;font-weight:800;font-size:10px}.sidebar-footer p{line-height:1.7}.sidebar-footer strong{color:#9acfd0}.workspace{padding:42px clamp(20px,3vw,52px);min-width:0;max-width:1750px;width:100%}.topline{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:33px}.eyebrow{font-size:10px;font-weight:850;color:#00dcb8;letter-spacing:.2em;margin-bottom:9px}h2{font-size:30px;letter-spacing:-.03em;margin:0 0 9px}h2 span{color:#09d8be}p{line-height:1.5}.topline p{margin:0;color:#7d92a9;font-size:13px}.status-card{border:1px solid #253749;border-radius:12px;background:#101c2a;padding:18px 22px;max-width:250px}.status-card span,.stat span{font-size:10px;letter-spacing:.13em;color:#7f9aab;font-weight:850;display:block}.status-card strong{font-size:12px;display:block;margin:9px 0;word-break:break-word}.status-card small{color:#607d91;font-size:10px}.summary-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-bottom:20px}.stat{padding:22px 26px;background:#101d2b;border:1px solid #25394c;border-radius:12px}.stat strong{display:block;margin-top:12px;font-size:26px;letter-spacing:-.03em}.channel-hero{display:flex;align-items:center;gap:22px;background:linear-gradient(110deg,#142b38,#101c2b 65%);border:1px solid #29555a;border-radius:15px;padding:26px;margin-bottom:22px}.hero-logo{width:90px;height:90px;min-width:90px;border-radius:18px;display:grid;place-items:center;font-size:30px;background:#0b1d30;overflow:hidden}.hero-logo img{width:90%;height:90%;object-fit:contain}.tag{font-size:10px;background:#214c4b;color:#4de0ca;border-radius:6px;padding:6px 9px;font-weight:800;letter-spacing:.08em}.channel-hero h3{font-size:23px;margin:15px 0 5px}.channel-hero p{font-size:12px;color:#95b3bf;margin:0}.hero-meta{display:flex;gap:17px;color:#85bbb4;font-size:10px;margin-top:14px;flex-wrap:wrap}.hero-edit{margin-left:auto;white-space:nowrap}.main-grid{display:grid;grid-template-columns:minmax(310px,1fr) minmax(310px,1fr);gap:20px;align-items:start}.panel{border:1px solid #263749;border-radius:14px;background:#0f1b29;padding:24px;min-width:0}.panel-title{display:flex;align-items:center;gap:13px;margin-bottom:26px}.tile-icon{height:40px;width:40px;display:grid;place-items:center;background:#0d383d;color:#13d2bc;border-radius:10px;font-size:23px}.panel-title h3{font-size:17px;margin:0 0 5px}.panel-title p{font-size:11px;color:#778fa4;margin:0}.list-title .count-tag{margin-left:auto;background:#213442;color:#b9d1e0;padding:5px 9px;border-radius:6px;font-size:12px}.form-stack{display:flex;flex-direction:column;gap:16px}label{display:flex;flex-direction:column;gap:8px;color:#aabfd0;font-size:12px;font-weight:670}label small{font-size:10px;color:#647d8f}input,textarea,select{background:#091522;border:1px solid #2a4054;color:#edf6ff;border-radius:9px;padding:12px 13px;outline:none;width:100%;font-size:13px}input:focus,textarea:focus,select:focus{border-color:#0ac8b5;box-shadow:0 0 0 3px #0ac8b514}input::placeholder,textarea::placeholder{color:#576a7a}textarea{resize:vertical}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px}.lookup{background:#132e36;border:1px dashed #247875;border-radius:9px;color:#51dbc6;padding:12px;font-size:12px;text-align:center;font-weight:720}.form-buttons{display:flex;gap:10px}.programs-list{display:grid;gap:10px}.program-card{display:flex;gap:12px;align-items:center;padding:13px;background:#101f2e;border:1px solid #263c4b;border-radius:11px}.program-img{width:55px;min-width:55px;height:69px;border-radius:7px;object-fit:cover;background:#193044;display:grid;place-items:center;color:#25cabf;font-size:22px}.program-info{flex:1;min-width:0}.program-info strong{display:block;font-size:12px;overflow-wrap:anywhere}.program-info p{font-size:10px;color:#7e97a8;margin:7px 0 4px}.program-info span{font-size:10px;color:#49cdb8}.program-actions{display:flex;flex-direction:column;gap:7px}.program-actions button{background:#243446;border:1px solid #315066;color:#bdcddd;border-radius:7px;padding:5px 8px;font-size:10px}.program-actions button:last-child{color:#e98d9a}.empty-list{padding:55px 20px;text-align:center;border:1px dashed #395269;border-radius:10px;color:#8d9fb0;font-size:13px}.empty-state{background:#102435;border:1px dashed #31606e;border-radius:16px;text-align:center;padding:70px 25px}.empty-icon{font-size:40px;color:#27d9cb}.empty-state h3{margin:12px 0;font-size:20px}.empty-state p{max-width:450px;margin:12px auto 25px;color:#8fb4be;font-size:13px}footer{font-size:10px;color:#557284;margin-top:44px;text-align:center}.dialog{max-width:480px;width:calc(100% - 28px);background:#101e2d;color:#e3f2fa;border:1px solid #315368;border-radius:16px;padding:28px;box-shadow:0 30px 150px #000b}.dialog::backdrop{background:#020b15cc;backdrop-filter:blur(6px)}.modal-form{display:grid;gap:18px}.modal-title{display:flex;justify-content:space-between;align-items:center}.modal-title h3{font-size:22px;margin:0}.dialog-tip{background:#132d39;padding:14px;color:#a6bbc8;font-size:12px;border-radius:9px;line-height:1.6}.toast{position:fixed;z-index:100;bottom:25px;right:25px;background:#173e3e;color:#d8fff7;padding:13px 20px;border-radius:10px;border:1px solid #368985;box-shadow:0 10px 30px #0008;font-size:12px;max-width:420px;opacity:0;pointer-events:none;transition:.2s}.toast.show{opacity:1}.toast.error{background:#552333;color:#ffe3e8;border-color:#8e455b}.auth-page{min-height:100vh;display:grid;place-items:center;padding:30px}.auth-card{max-width:420px;width:100%;border:1px solid #284150;border-radius:18px;background:#0c1b29;padding:44px 36px;text-align:center;box-shadow:0 35px 90px #0006}.brand-mark{width:66px;height:66px;font-size:31px;margin:0 auto 22px}.brand-mark span{font-size:15px;margin-left:-12px}.auth-card h1{font-size:35px;letter-spacing:.13em;margin:4px 0}.auth-card h1 em{color:#16c9b0;font-style:normal}.auth-card p{font-size:13px;color:#89a5b4;margin:14px 0 30px}.auth-card label{text-align:left}.auth-card small{display:block;color:#607e91;margin-top:24px;line-height:1.5}.search-results{max-height:250px;overflow:auto;border:1px solid #2a5b65;background:#0b222b;border-radius:10px}.search-choice{display:flex;align-items:center;gap:9px;width:100%;background:transparent;border:0;border-bottom:1px solid #22424c;color:#e0f4f8;text-align:left;padding:10px}.search-choice:hover{background:#183e43}.search-choice img{width:36px;height:54px;object-fit:cover;border-radius:5px}.search-choice strong{display:block;font-size:12px}.search-choice small{display:block;font-size:10px;color:#759dac;margin-top:5px}@media(max-width:1100px){.main-grid{grid-template-columns:1fr}.status-card{display:none}}@media(max-width:760px){.header{height:72px}.dashboard{display:block}.sidebar{min-height:0;padding:16px;border-right:0;border-bottom:1px solid #284050}.channels-list{display:flex;overflow-x:auto;gap:8px;padding-bottom:6px}.channel-option{width:auto;min-width:165px}.sidebar-footer{display:none}.new-channel{margin-top:10px;width:100%}.workspace{padding:26px 16px}.topline{margin-bottom:22px}.topline h2{font-size:25px}.summary-row{gap:8px}.stat{padding:14px 12px}.stat span{font-size:8px}.stat strong{font-size:22px}.channel-hero{padding:17px;gap:13px;flex-wrap:wrap}.hero-logo{width:60px;height:60px;min-width:60px}.channel-hero h3{font-size:18px}.hero-edit{margin-left:0}.panel{padding:18px}.live-dot{display:none}.header-actions{gap:3px}.header-actions .button{font-size:10px;padding:8px}.logo strong{font-size:13px}.logo small{font-size:7px}.logo-sign{width:34px;height:34px}.two-col{grid-template-columns:1fr 1fr}}\n\n.checkbox-line{flex-direction:row;align-items:center;gap:10px}.checkbox-line input{width:18px;height:18px;accent-color:#08c7ac}.program-actions button:disabled{opacity:.35;cursor:not-allowed}\n\n[hidden]{display:none!important}\n.studio-nav{display:flex;align-items:center;gap:10px;padding:12px 26px 18px;border-bottom:1px solid #25384b;flex-wrap:wrap}\n.studio-nav button{border:1px solid #30465c;border-radius:12px;color:#bfcde2;background:#111c2b;padding:11px 16px;font-weight:700;font-size:14px;cursor:pointer}\n.studio-nav button.active{background:#0e6b65;color:#fff;border-color:#16cbb4}\n.vod-panel{padding:24px;max-width:1500px;margin:auto}.vod-head h2{font-size:clamp(26px,4vw,39px);margin:8px 0}.vod-head h2 span{color:#21d0bf}.vod-head p,.vod-help{color:#9daec3;font-size:14px;line-height:1.5}\n.vod-switch{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:23px 0}.vod-switch button{background:#101d2d;border:1px solid #30415a;border-radius:12px;color:#c0d1dd;padding:12px 19px;font-weight:700;cursor:pointer}.vod-switch button.active{background:#0e6b65;color:#fff;border-color:#21dbbd}.vod-sync{font-size:12px;color:#90aabc;margin-left:auto}\n.vod-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;gap:18px}.vod-layout .panel,.vod-episode-area{padding:24px!important;border-radius:17px}.vod-layout h3{margin:0 0 19px}.vod-items{display:grid;gap:12px;margin:15px 0}.vod-item{display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #273a50;border-radius:12px;background:#0b1624}.vod-item img{width:54px;height:78px;object-fit:cover;border-radius:7px;background:#203142}.vod-item-info{flex:1;min-width:0}.vod-item-info strong{font-size:14px;display:block}.vod-item-info small{display:block;margin-top:4px;color:#97acc1}.vod-item-buttons{display:flex;gap:5px;flex-wrap:wrap}.vod-item-buttons button{cursor:pointer;border:1px solid #2d475d;padding:8px;color:#d6e8ef;background:#13283b;border-radius:8px}.vod-item-buttons button.danger{color:#ffadad}.vod-list-panel select{width:100%;background:#0c1827;color:#e4f1fa;border:1px solid #395069;border-radius:11px;padding:13px;margin-bottom:10px}.vod-episode-head{display:flex;justify-content:space-between;align-items:center;gap:15px}.vod-episode-area{margin-top:18px}.vod-episode-area .form-stack{max-width:720px}.vod-episode-area input,.vod-episode-area select{width:100%}.vod-empty{color:#94a6b8;text-align:center;padding:22px 8px;font-size:14px}\n@media(max-width:860px){.studio-nav{padding:12px 16px}.vod-panel{padding:14px}.vod-layout{grid-template-columns:1fr}.vod-layout .panel,.vod-episode-area{padding:16px!important}.vod-sync{width:100%;margin:0}.vod-item{flex-wrap:wrap}.vod-item-buttons{width:100%}}\n\n/* FÉNIX STUDIO 2.1 · Importación y lista móvil */\n.import-panel{margin-bottom:18px;border:1px solid rgba(88,172,255,.22);padding:20px}\n.vod-import-header{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}\n.vod-import-header h3{margin:4px 0}.vod-import-header p{color:#a9b8c7;font-size:13px}\n.import-version{font-size:11px;color:#5acdc1;font-weight:700;white-space:nowrap}\n.import-buttons{display:flex;flex-wrap:wrap;gap:8px;margin:15px 0}\n.import-buttons button{flex:1;min-width:170px;padding:11px}\n.import-preview{white-space:pre-wrap;background:rgba(12,22,42,.65);border-radius:9px;padding:12px;color:#d5e1ee;line-height:1.55;font-size:13px}\n.import-confirm{display:flex;align-items:flex-start;gap:9px;margin:12px 0;font-size:13px}\n.import-backups{display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:12px}\n.import-backups button{font-size:11px;max-width:100%}\n.vod-search-label{display:block;margin:12px 0 6px}.vod-search-label input{display:block;width:100%;margin-top:5px}\n.vod-muted{font-size:12px;opacity:.7;margin:5px 0 12px}\n@media (max-width:650px){.vod-import-header{display:block}.import-buttons{display:grid;grid-template-columns:1fr}.import-buttons button{min-width:0}.import-version{display:inline-block;margin-top:4px}}\n/* FÉNIX TV STUDIO 2.2 — complementos sin modificar estilos originales */\n.fenix-bulk{margin:20px 0;padding:20px;border:1px solid #2d4b61;border-radius:20px;background:rgba(10,29,43,.68)}\n.fenix-bulk.channel-bulk{margin-top:18px;padding:16px}\n.fenix-bulk summary{cursor:pointer;font-weight:750;color:#49dbc8}\n.fenix-bulk h3{margin:5px 0 8px;font-size:1.2rem}\n.fenix-bulk p{line-height:1.55}\n.bulk-rows{display:grid;grid-template-columns:1fr;gap:12px;margin:14px 0}\n.bulk-card{border:1px solid #304b63;border-radius:17px;padding:15px;background:#0a1a29;display:flex;flex-direction:column;gap:11px}\n.bulk-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px}\n.bulk-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.bulk-card label,.fenix-bulk>div>label{display:flex;flex-direction:column;gap:7px;font-weight:600;font-size:.89rem;color:#a9bfd0}\n.bulk-card input,.bulk-card select,.fenix-bulk input{width:100%;min-width:0;border:1px solid #29455c;border-radius:11px;padding:11px;color:#f1f6fa;background:#071523;font-size:1rem}\n.bulk-card .bulk-note,.duration-hint{display:block;color:#a3bbc9;font-size:.84rem;line-height:1.55;margin:6px 0}\n.bulk-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:12px}\n.bulk-actions button{font-size:.89rem;min-height:40px}\n.duration-probe{margin:7px 0;width:max-content;max-width:100%}\n.bulk-episode{margin:20px 0}\n@media(max-width:620px){.fenix-bulk{padding:12px}.bulk-card{padding:11px}.bulk-fields{grid-template-columns:1fr}.bulk-actions button{flex:1 1 160px}}\n\n/* STUDIO 2.2.1: ajuste visual de escala del logo, aislado del resto del panel */\n.fenix-logo-control{border:1px solid #284958;background:#0c2530;border-radius:12px;padding:16px;display:grid;gap:10px}\n.fenix-logo-control-title{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;font-weight:750;color:#dcf5fa}\n#cBugScaleValue{font-variant-numeric:tabular-nums;color:#40e5cb;font-weight:800}\n#cBugScale{width:100%;padding:0;accent-color:#12cfba;cursor:pointer;border:0;background:transparent;height:28px}\n.fenix-logo-marks{display:flex;justify-content:space-between;color:#8eacb7;font-size:10px;gap:10px}\n.fenix-logo-preview{position:relative;height:125px;background:linear-gradient(125deg,#111b29 30%,#253c40);border:1px solid #356370;border-radius:10px;overflow:hidden}\n.fenix-logo-preview-caption{position:absolute;bottom:7px;left:9px;color:#adc4d0;font-size:9px;letter-spacing:.03em;z-index:1;pointer-events:none}\n#cBugPreview{position:absolute;top:12px;right:18px;width:64px;height:45px;object-fit:contain;transform-origin:top right;pointer-events:none}\n#cBugPreviewEmpty{position:absolute;top:30px;left:12px;color:#97b6c3;font-size:11px;max-width:150px}\n.fenix-logo-note{color:#a7bfca;font-size:11px;line-height:1.6;margin:0}\n#cBugScaleReset{width:fit-content;font-size:11px}\n\n/* FÉNIX TV STUDIO 2.2.2 · tandas publicitarias por canal */\n.fenix-ad-editor{border:1px solid #2a4b5b;border-radius:13px;padding:14px;margin:10px 0;background:#0a1926}\n.fenix-ad-editor summary{cursor:pointer;color:#d3fbf3;font-weight:750;line-height:1.4}\n.fenix-ad-editor[open] summary{margin-bottom:14px}\n.fenix-ad-editor label{display:block;margin:12px 0 6px;color:#bdd2dc;font-size:13px}\n.fenix-ad-editor input:not([type=checkbox]),.fenix-ad-editor select{width:100%;padding:10px;background:#102331;color:#e6faff;border:1px solid #335167;border-radius:9px;min-width:0}\n.fenix-ad-note{font-size:12px;color:#91b4c4;line-height:1.5;margin:12px 0}\n.fenix-ad-head,.fenix-ad-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:space-between;margin:14px 0 10px}\n.fenix-ad-head span{font-size:12px;color:#76d9ca}\n.fenix-ad-list{display:grid;gap:10px}\n.fenix-ad-row{border:1px solid #314858;padding:12px;border-radius:11px;background:#0c2230;display:grid;gap:8px}\n.fenix-ad-row-head{display:flex;align-items:center;justify-content:space-between;font-size:13px}\n.fenix-ad-row .fenix-ad-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.fenix-ad-row label{margin:0;display:grid;gap:4px}\n.fenix-ad-row .remove-spot{padding:6px 8px;font-size:12px}\n@media(max-width:540px){.fenix-ad-row .fenix-ad-grid{grid-template-columns:1fr}.fenix-ad-actions .button{flex:1;}}\n\n/* IntroScan · sección del editor de episodios */\n.intro-probe{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:8px 0 12px}.intro-probe small{flex:1 1 200px}.intro-probe button{flex:0 1 auto}.intro-marks{margin:10px 0}.intro-marks input{font-variant-numeric:tabular-nums}\n\n/* FÉNIX STUDIO 2.3.4 — consulta independiente IntroDB sin alterar IntroScan */\n.intro-db-lookup{border:1px solid #275c66;border-radius:13px;background:#0b2430;padding:15px;display:grid;gap:12px}\n.intro-db-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap}\n.intro-db-head strong{color:#77f5dd;font-size:13px}\n.intro-db-head span{color:#a2bac8;font-size:11px}\n.intro-db-result{font-size:12px;line-height:1.65;color:#bed8e4;background:#091b29;border-radius:8px;padding:11px;white-space:pre-line}\n.intro-db-result[data-level=\"warn\"]{color:#ffdb9c}\n.intro-db-result[data-level=\"ok\"]{color:#9bf6c9}\n\n/* STUDIO 2.3.5 · Intro + créditos en tres fuentes */\n.fenix-segments-panel{display:grid;gap:11px;margin:12px 0 16px;padding:15px;border:1px solid #316c70;border-radius:13px;background:#091e2b}\n.fenix-segments-panel strong{color:#7be6d5;font-size:13px}\n.fenix-segments-panel p{color:#9bb6c3;font-size:12px;line-height:1.6;margin:0}\n.fenix-segments-results{white-space:normal;font-size:12px;line-height:1.5;display:grid;gap:12px;color:#caddea}\n.fenix-segment-source{border:1px solid #2a4557;border-radius:10px;padding:10px;background:#0d2331;display:grid;gap:8px}\n.fenix-segment-source h4{margin:0;color:#dce9f2;font-size:13px}\n.fenix-segment-source p{margin:0;font-size:11px}\n.fenix-segment-row{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;border-top:1px solid #294152;padding-top:8px}\n.fenix-segment-row .button{padding:8px 10px;font-size:11px}\n.fenix-segment-summary{color:#69d9c3;font-size:12px}\n\n/* STUDIO 2.3.7 — Interfaz optimizada. Todas las animaciones respetan movimiento reducido. */\n:root{--studio-edge:#25394c;--studio-teal:#24e2c0;--studio-purple:#8b8af7;--studio-bg:#080f1c}\nhtml{scroll-behavior:smooth}body{background:radial-gradient(ellipse 70% 25% at 88% -5%,#173644 0,transparent 85%),#080f1c}\n:focus-visible{outline:3px solid #5eeddb!important;outline-offset:2px}\n.header{position:sticky;top:0;z-index:30;backdrop-filter:blur(20px);border-color:#24405a;box-shadow:0 6px 28px #0003}\n.studio-nav{position:sticky;top:84px;z-index:29;background:#091625f2;backdrop-filter:blur(20px);border-color:#233d52}\n.studio-nav button{transition:background .18s ease,transform .18s ease}.studio-nav button:hover{transform:translateY(-2px)}\n.fenix-command{padding:20px clamp(16px,3vw,44px);display:grid;grid-template-columns:minmax(200px,1fr) minmax(230px,1.1fr) auto;gap:22px;align-items:center;background:linear-gradient(110deg,#11243a 3%,#13273b 55%,#112836 100%);border-bottom:1px solid #284354}\n.fenix-command-copy{display:grid;gap:5px}.fenix-command-copy strong{font-size:clamp(16px,1.5vw,23px);line-height:1.2}.fenix-command-copy small{font-size:12px;color:#9bb6c7}\n.fenix-kicker{font-size:10px;font-weight:800;letter-spacing:.2em;color:#4becd2}\n.fenix-command-search{position:relative;max-width:610px;width:100%}.fenix-command-search label{display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-size:11px;color:#bdd5e5;margin-bottom:6px}\nkbd{font-family:inherit;background:#172a3d;border:1px solid #4b6678;padding:2px 7px;border-radius:6px;font-size:10px;color:#b7cddd}\n#fenixQuickSearch{border-radius:13px;padding:15px 16px;font-size:15px;background:#081927;border:1px solid #427080;box-shadow:inset 0 1px 1px #0003}\n#fenixQuickSearch:focus{border-color:#20d8c0;box-shadow:0 0 0 3px #15d1b02b}\n.fenix-quick-results{position:absolute;z-index:80;top:100%;left:0;right:0;max-height:340px;overflow:auto;background:#102536;border:1px solid #417586;box-shadow:0 22px 70px #0009;border-radius:14px;padding:8px;margin-top:5px}\n.fenix-quick-choice{display:flex;align-items:center;gap:11px;width:100%;text-align:left;border:0;border-radius:9px;color:#e4f6ff;background:transparent;padding:12px;cursor:pointer}\n.fenix-quick-choice:hover,.fenix-quick-choice:focus-visible{background:#1b4350}.fenix-quick-choice span{font-size:20px}.fenix-quick-choice strong{display:block;font-size:13px}.fenix-quick-choice small{display:block;color:#a4c5d5;margin-top:4px;font-size:11px}.fenix-quick-empty{padding:15px;color:#a6bbcd;font-size:12px}\n.fenix-command-actions{display:flex;gap:8px;flex-wrap:wrap}.fenix-action{border:1px solid #386f77;border-radius:11px;padding:12px 14px;font-weight:750;white-space:nowrap;background:#133e47;color:#dcfff9;transition:transform .18s,background .18s,box-shadow .18s}.fenix-action:hover{background:#195a60;transform:translateY(-2px);box-shadow:0 5px 24px #03cdb52a}.fenix-action span{color:#36ffcf;font-size:17px}\n.fenix-vod-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px;margin:17px 0 24px}.fenix-vod-stats>div{display:grid;gap:9px;padding:18px 20px;border:1px solid #25485c;border-radius:15px;background:linear-gradient(135deg,#102738,#112033)}.fenix-vod-stats span{color:#92b6c7;font-size:11px;font-weight:750}.fenix-vod-stats strong{font-size:26px;color:#e8fcff;font-variant-numeric:tabular-nums}.fenix-vod-stats .fenix-connected{color:#37edc5;font-size:18px}\n.fenix-import-summary{cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;font-weight:800;color:#b1e2e3;list-style:none}.fenix-import-summary::-webkit-details-marker{display:none}.fenix-import-summary small{font-size:11px;color:#94adbe;font-weight:500}.fenix-import-content{padding-top:21px;margin-top:15px;border-top:1px solid #2a3f54}\n.import-panel{background:linear-gradient(120deg,#0d1d2c,#132738);padding:17px 20px;margin-bottom:22px}.import-panel[open]{border-color:#428780}\n.fenix-steps{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;background:#102235;border:1px solid #29475e;border-radius:14px;padding:12px 16px;margin:15px 0 22px}.fenix-steps span{color:#b1c6d7;font-size:12px}.fenix-steps b{display:inline-grid;place-items:center;margin-right:7px;width:22px;height:22px;background:#164a51;border:1px solid #27797b;border-radius:50%;color:#76ffe3;font-size:11px}\n.vod-panel{max-width:1700px}.vod-layout{grid-template-columns:minmax(360px,.9fr) minmax(360px,1.1fr);align-items:start;gap:23px}\n.vod-editor{border-color:#2e5764!important;background:linear-gradient(145deg,#102334,#101b2a)}.vod-list-panel{background:linear-gradient(145deg,#102132,#0d1927)}\n.panel,.vod-item,.program-card,.stat{transition:border-color .16s,box-shadow .16s,transform .16s}.vod-item:hover,.program-card:hover{border-color:#41788b;box-shadow:0 7px 24px #0003;transform:translateY(-1px)}\n.vod-item-buttons button{transition:background .15s}.vod-item-buttons button:hover{background:#205668}\n.lookup{border-radius:11px;min-height:43px;transition:background .17s,box-shadow .17s}.lookup:hover{background:#205254;box-shadow:0 0 0 2px #26dcca31}\n.primary{transition:filter .15s,transform .15s}.primary:hover{transform:translateY(-1px)}\n.fenix-extra{border:1px solid #35566a;border-radius:12px;background:#112535;padding:13px 16px}.fenix-extra summary{cursor:pointer;font-size:13px;color:#d7f8f3;font-weight:750}.fenix-extra summary span{float:right;color:#8fb1bf;font-weight:500;font-size:11px}.fenix-extra-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:16px}.fenix-extra>small{display:block;margin-top:11px;font-size:11px;line-height:1.5;color:#a6bbc9}\n.vod-search-label input{border-color:#3a6271}.vod-item{padding:14px}\n#vodEpisodeArea{scroll-margin-top:160px}#vodForm{scroll-margin-top:160px}\n#vodFilter{padding:13px}\n@keyframes studio-reveal{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}\n.vod-panel:not([hidden]),.dashboard:not([hidden]){animation:studio-reveal .24s ease-out}\n@media(max-width:1280px){.fenix-command{grid-template-columns:1fr 1fr}.fenix-command-actions{grid-column:1/-1}.vod-layout{grid-template-columns:1fr 1fr}}\n@media(max-width:860px){.fenix-command{grid-template-columns:1fr;padding:17px}.fenix-command-actions{grid-column:auto}.fenix-command-search{max-width:none}.studio-nav{top:72px}.vod-layout{grid-template-columns:1fr}.fenix-steps{justify-content:flex-start}.fenix-vod-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.fenix-extra-grid{grid-template-columns:1fr}}\n@media(max-width:540px){.fenix-command-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.fenix-action{font-size:11px;padding:10px 5px}.fenix-vod-stats>div{padding:13px}.fenix-vod-stats strong{font-size:22px}.fenix-import-summary{flex-direction:column;align-items:start}.fenix-steps span{flex:1 1 40%}}\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}\n\n/* STUDIO 2.3.8 · Publicidad de bienvenida remota */\n.promo-editor-grid{display:grid;grid-template-columns:minmax(310px,1fr) minmax(310px,1fr);gap:18px;margin-top:20px;align-items:start}\n.promo-creative-form{display:grid;gap:15px}.promo-creative-form h3,.promo-preview-panel h3{margin:0 0 8px}\n.promo-creative-form input[type=file]{display:block;padding:14px 10px;background:#101d2b}\n.promo-creative-form .checkbox-line{display:flex;flex-direction:row;align-items:center}\n.promo-editor-actions{display:grid;gap:8px}.promo-preview-stage{aspect-ratio:16/9;background:#111a2b;position:relative;overflow:hidden;border:1px solid #315367;border-radius:14px;display:grid;place-items:center}\n.promo-preview-stage img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}\n#promoPreviewEmpty{color:#9bb5c7;font-size:14px}.promo-preview-overlay{position:absolute;left:0;right:0;bottom:0;padding:22px;background:linear-gradient(transparent,rgba(0,0,0,.85));color:#fff;pointer-events:none;text-shadow:0 2px 8px #000}\n.promo-preview-overlay strong{font-size:clamp(18px,2.6vw,34px)}.promo-preview-overlay p{margin:6px 0 0;font-size:clamp(11px,1.1vw,16px)}\n@media(max-width:900px){.promo-editor-grid{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.promo-preview-stage *{transition:none!important}}\n\n/* FÉNIX STUDIO 2.4.0 · Centro de apariencias */\n.appearance-panel{padding:25px clamp(16px,3.5vw,54px);max-width:1500px;margin:0 auto}\n.appearance-intro h2{margin:5px 0 9px;font-size:clamp(24px,3vw,40px)}.appearance-intro h2 span{color:#48e6d2}.appearance-intro p{font-size:14px;color:#a4b9c9;max-width:800px}\n.appearance-bar{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:22px 0 16px;color:#bed6e7;font-size:13px}.appearance-bar strong{color:#59e0cb;font-size:12px}\n.appearance-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px}\n.appearance-theme{position:relative;display:flex;flex-direction:column;gap:9px;text-align:left;overflow:hidden;border:2px solid #2a4054;background:#101d2b;border-radius:15px;min-height:190px;padding:8px;cursor:pointer;color:#f5faff;transition:transform .2s,border-color .2s,box-shadow .2s}\n.appearance-theme:hover{transform:translateY(-3px);box-shadow:0 13px 28px rgba(0,0,0,.35)}.appearance-theme.selected{border-color:#46dec3;box-shadow:0 0 0 2px #30d5c530,0 9px 20px #0008}\n.appearance-scene{position:relative;height:115px;border-radius:9px;overflow:hidden;background:linear-gradient(135deg,var(--at-bg),#091322)}\n.appearance-scene:before{content:\"\";position:absolute;inset:-25% -10% auto auto;width:75%;height:180%;background:radial-gradient(circle,var(--at-glow),transparent 66%);opacity:.7}\n.appearance-scene:after{content:\"\";position:absolute;left:10px;right:10px;bottom:9px;height:25px;border-radius:5px;border:1px solid var(--at-glow);background:linear-gradient(95deg,var(--at-glow),transparent 72%);opacity:.75}\n.appearance-scene .appearance-moon{position:absolute;width:48px;height:48px;top:15px;right:18px;border-radius:50%;background:var(--at-accent);box-shadow:0 0 25px var(--at-glow);opacity:.77}\n.appearance-scene .appearance-symbol{position:absolute;top:12px;left:12px;font-size:27px;color:#fff;text-shadow:0 2px 16px var(--at-accent)}\n.appearance-theme strong{font-size:14px;padding:0 3px}.appearance-theme small{color:#a7bacb;font-size:11px;padding:0 3px 5px}\n.appearance-controls{display:grid;grid-template-columns:1fr minmax(160px,200px) minmax(160px,200px);align-items:end;gap:20px;margin-top:22px}.appearance-controls h3{margin:0 0 8px}.appearance-controls p{margin:0;color:#95aabc;font-size:12px}.appearance-actions{grid-column:1/-1;display:flex;justify-content:flex-end;flex-wrap:wrap;gap:10px}.appearance-note{margin:15px 0;font-size:12px;color:#8fa7b9;line-height:1.6}\n@media(max-width:940px){.appearance-grid{grid-template-columns:repeat(3,1fr)}.appearance-controls{grid-template-columns:1fr 1fr}.appearance-controls>div:first-child{grid-column:1/-1}}\n@media(max-width:600px){.appearance-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.appearance-theme{min-height:155px}.appearance-scene{height:87px}.appearance-controls{grid-template-columns:1fr}.appearance-controls>div:first-child{grid-column:auto}.appearance-actions>*{flex:1}}\n@media(prefers-reduced-motion:reduce){.appearance-theme{transition:none}.appearance-theme:hover{transform:none}}\n"},"/app.js":{"type":"application/javascript; charset=utf-8","body":"(() => {\n  const $ = id => document.getElementById(id);\n  const state = {token:sessionStorage.getItem('fenixToken')||'', config:null, selected:null, editing:null, channelEditing:false, metadataEnabled:false,omdbEnabled:false};\n  const esc = value => String(value ?? '').replace(/[&<>\"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\n  const toast = (message,error=false) => { const el=$('toast'); el.textContent=message; el.classList.toggle('error',error); el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),4500); };\n  const busy = (button, yes) => {button.disabled=yes; button.dataset.original ||= button.textContent;button.textContent=yes?'Procesando…':button.dataset.original;};\n  const duration = sec => {const n=Math.max(0,Math.floor(Number(sec)||0));return [Math.floor(n/3600),Math.floor(n%3600/60),n%60].map(v=>String(v).padStart(2,'0')).join(':');};\n  const request = async(path, method='GET', body=null) => {\n    const res=await fetch(path,{method,headers:{authorization:'Bearer '+state.token,...(body?{'content-type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,cache:'no-store'});\n    const data=await res.json().catch(()=>({error:'Respuesta inválida'}));\n    if(!res.ok) throw new Error(data.error||'Error HTTP '+res.status);\n    return data;\n  };\n  function showApp(yes) {$('app').hidden=!yes;$('login').hidden=yes;}\n  async function login(token) {\n    state.token=token;\n    const me=await request('/api/me');\n    state.metadataEnabled=me.metadataEnabled; state.omdbEnabled=!!me.omdbEnabled;\n    document.querySelectorAll('.fenix-metadata-lookup').forEach(b=>b.textContent=state.omdbEnabled?'🌎 Buscar ficha en 4 fuentes (TMDB + TVmaze + Wikidata + OMDb)':'🌎 Buscar ficha en 3 fuentes · OMDb requiere clave');\n    sessionStorage.setItem('fenixToken',token);\n    showApp(true); await refresh();\n    toast('Sesión iniciada.');\n  }\n  $('loginForm').addEventListener('submit',async ev=>{ev.preventDefault();const btn=ev.submitter;busy(btn,true);try {await login($('token').value.trim());}catch(e){toast(e.message,true);}finally{busy(btn,false);}});\n  $('logoutBtn').addEventListener('click',()=>{sessionStorage.removeItem('fenixToken');state.token='';state.config=null;showApp(false);showTab('channels');$('token').value='';});\n  async function refresh(prefer=null){\n    state.config=await request('/api/config');\n    const keys=Object.keys(state.config.channels);\n    state.selected=(prefer&&keys.includes(prefer))?prefer:keys.includes(state.selected)?state.selected:keys[0]||null;\n    render();\n  }\n  function render(){\n    const conf=state.config, keys=Object.keys(conf.channels);\n    $('revision').textContent=conf.configVersion||'—';\n    $('totalChannels').textContent=keys.length;\n    $('channelsList').innerHTML=keys.map(key=>{\n      const c=conf.channels[key];return `<button class=\"channel-option ${key===state.selected?'active':''}\" data-channel=\"${esc(key)}\">\n      ${c.logo?`<img src=\"${esc(c.logo)}\" alt=\"\" />`:'<span class=\"channel-initial\">✦</span>'}<span><strong>${esc(c.name)}</strong><small>${c.enabled?'● EN SEÑAL':'○ BORRADOR'}</small></span></button>`;\n    }).join('');\n    $('channelsList').querySelectorAll('[data-channel]').forEach(el=>el.onclick=()=>{state.selected=el.dataset.channel;cancelEdit();render();});\n    $('empty').hidden=keys.length>0;$('detail').hidden=keys.length===0;\n    if(!state.selected)return;\n    const c=conf.channels[state.selected];\n    $('heroTitle').textContent=c.name;\n    $('heroDesc').textContent=c.description||'Canal propio de Fénix TV';\n    $('heroKey').textContent=state.selected;\n    $('heroLogo').innerHTML=c.logo?`<img src=\"${esc(c.logo)}\" alt=\"Logo del canal\" />`:'F✦';\n    $('totalPrograms').textContent=c.programs.length;\n    $('activeState').textContent=c.enabled?'EN VIVO':'BORRADOR';\n    $('activeState').style.color=c.enabled?'#17d2ae':'#f7bc71';\n    $('playlistCount').textContent=String(c.programs.length);\n    $('programsList').innerHTML=c.programs.length?c.programs.map((p,i)=>`<div class=\"program-card\">\n      ${p.image?`<img class=\"program-img\" src=\"${esc(p.image)}\" alt=\"\" />`:'<div class=\"program-img\">▶</div>'}\n      <div class=\"program-info\"><strong>${i+1}. ${esc(p.title)}</strong><p>${esc(p.type||'pelicula')} ${p.year?' · '+esc(p.year):''}</p><span>${esc(duration(p.durationSeconds))} · ${esc(p.streamFormat||'mp4').toUpperCase()}</span></div>\n      <div class=\"program-actions\"><button type=\"button\" data-up=\"${i}\" ${i===0?\"disabled\":\"\"} title=\"Subir en programación\">↑</button><button type=\"button\" data-down=\"${i}\" ${i===c.programs.length-1?\"disabled\":\"\"} title=\"Bajar en programación\">↓</button><button type=\"button\" data-edit=\"${esc(p.id)}\">Editar</button><button type=\"button\" data-del=\"${esc(p.id)}\">Borrar</button></div>\n    </div>`).join(''):'<div class=\"empty-list\">Aún no hay programas. Añade el primero y el canal se activará automáticamente.</div>';\n    $('programsList').querySelectorAll('[data-up]').forEach(el=>el.onclick=()=>reorderProgram(Number(el.dataset.up),Number(el.dataset.up)-1));\n    $('programsList').querySelectorAll('[data-down]').forEach(el=>el.onclick=()=>reorderProgram(Number(el.dataset.down),Number(el.dataset.down)+1));\n    $('programsList').querySelectorAll('[data-edit]').forEach(el=>el.onclick=()=>editProgram(el.dataset.edit));\n    $('programsList').querySelectorAll('[data-del]').forEach(el=>el.onclick=()=>deleteProgram(el.dataset.del));\n    $('searchMetadata').textContent=state.metadataEnabled?'✧ Buscar ficha con TMDB':'✧ Buscar ficha (configura TMDB_TOKEN para habilitar)';\n  }\n  const selectedChannel=()=>state.config?.channels[state.selected];\n  function cancelEdit(){state.editing=null;$('programForm').reset();$('pDescription').value='';$('pImage').value='';$('metadataResults').hidden=true;$('cancelProgram').hidden=true;$('programEditorTitle').textContent='Agregar contenido';$('saveProgram').textContent='＋ Guardar en este canal';}\n  function editProgram(id){\n    const p=selectedChannel().programs.find(x=>x.id===id);if(!p)return;\n    state.editing=id;$('pTitle').value=p.title;$('pType').value=p.type||'pelicula';$('pYear').value=p.year||'';\n    $('pUrl').value=p.url;$('pDuration').value=duration(p.durationSeconds);$('pFormat').value=p.streamFormat||'mp4';\n    $('pDescription').value=p.description||'';$('pImage').value=p.image||'';\n    $('programEditorTitle').textContent='Editar programa';$('saveProgram').textContent='Guardar cambios';$('cancelProgram').hidden=false;\n    $('metadataResults').hidden=true;$('programForm').scrollIntoView({behavior:'smooth',block:'center'});\n  }\n  $('cancelProgram').onclick=cancelEdit;\n  $('pUrl').addEventListener('change',()=>{\n    const u=$('pUrl').value.toLowerCase().split('?')[0];$('pFormat').value=u.endsWith('.m3u8')?'hls':u.endsWith('.mkv')?'mkv':'mp4';\n  });\n  $('programForm').addEventListener('submit',async(ev)=>{\n    ev.preventDefault();const btn=$('saveProgram');busy(btn,true);\n    const body={title:$('pTitle').value.trim(), type:$('pType').value, year:$('pYear').value, description:$('pDescription').value, image:$('pImage').value.trim(),url:$('pUrl').value.trim(), duration:(v=>/^[0-9]{6}$/.test(v)?v.slice(0,2)+':'+v.slice(2,4)+':'+v.slice(4):v)($('pDuration').value.trim()),streamFormat:$('pFormat').value,aspectRatio:'16:9',enabled:true};\n    try{const key=state.selected;let path='/api/channels/'+encodeURIComponent(key)+'/programs',method='POST';if(state.editing){path+='/'+encodeURIComponent(state.editing);method='PUT';}\n      await request(path,method,body);cancelEdit();await refresh(key);toast('Programa guardado. El Worker lo verá después de refrescar su caché.');\n    }catch(e){toast(e.message,true);}finally{busy(btn,false);}\n  });\n  async function reorderProgram(from,to){try{await request('/api/channels/'+state.selected+'/reorder','POST',{from,to});cancelEdit();await refresh();toast('Orden de reproducción actualizado.');}catch(e){toast(e.message,true);}}\n  async function deleteProgram(id){if(!confirm('¿Eliminar este programa de la programación del canal?'))return;try{await request('/api/channels/'+state.selected+'/programs/'+id,'DELETE');cancelEdit();await refresh();toast('Programa eliminado.');}catch(e){toast(e.message,true);}}\n  async function importGitHub(){if(state.config&&Object.keys(state.config.channels).length&&!confirm('Esto reemplazará la configuración del panel con la versión de GitHub. ¿Continuar?'))return;\n    const btn=$('importBtn');busy(btn,true);try{await request('/api/import','POST',{});cancelEdit();await refresh();toast('Canales importados correctamente desde GitHub.');}catch(e){toast(e.message,true);}finally{busy(btn,false);}}\n  $('importBtn').onclick=importGitHub;$('emptyImport').onclick=importGitHub;\n  function logoScalePreview(){\n    const scale=Number($('cBugScale').value)||1.40;\n    $('cBugScaleValue').textContent=scale.toFixed(2)+'×';\n    const current=state.channelEditing?selectedChannel():null;\n    const userUrl=$('cLogo').value.trim();\n    const imageUrl=userUrl===String(current?.logo||'').trim()?String(current?.channelBugUrl||userUrl):userUrl;\n    const img=$('cBugPreview');\n    if(/^https?:\\/\\//i.test(imageUrl)){\n      if(img.getAttribute('src')!==imageUrl)img.src=imageUrl;\n      img.hidden=false;$('cBugPreviewEmpty').hidden=true;\n      img.style.transform='scale('+scale+')';\n    }else{\n      img.removeAttribute('src');img.hidden=true;$('cBugPreviewEmpty').hidden=false;\n    }\n  }\n  $('cBugScale').addEventListener('input',logoScalePreview);\n  $('cLogo').addEventListener('input',logoScalePreview);\n  $('cBugScaleReset').onclick=()=>{$('cBugScale').value='1.40';logoScalePreview();};\n  // Publicidad por canal: NO se toca el esquema legado salvo edición explícita.\n  function adSpotRow(spot={}){\n    const row=document.createElement('div');row.className='fenix-ad-row';\n    row.innerHTML=`<div class=\"fenix-ad-row-head\"><strong class=\"spot-label\">Anuncio</strong><button type=\"button\" class=\"button outline remove-spot\">Quitar</button></div>\n      <label>URL del anuncio<input type=\"url\" class=\"spot-url\" placeholder=\"https://.../anuncio.mp4\" value=\"${esc(spot.url||'')}\" /></label>\n      <div class=\"fenix-ad-grid\"><label>Duración real (segundos)<input type=\"number\" min=\"1\" max=\"1800\" step=\"1\" class=\"spot-seconds\" inputmode=\"numeric\" value=\"${Number(spot.durationSeconds)||90}\" /></label>\n      <label>Formato<select class=\"spot-format\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS (M3U8)</option></select></label></div>`;\n    row.querySelector('.spot-format').value=['mp4','mkv','hls'].includes(spot.streamFormat)?spot.streamFormat:'mp4';\n    row.querySelector('.remove-spot').onclick=()=>{row.remove();state.adsDirty=true;updateAdSummary();};\n    $('cAdList').append(row);updateAdSummary();return row;\n  }\n  function updateAdSummary(){\n    const rows=[...$('cAdList').children],total=rows.reduce((sum,row)=>sum+Number(row.querySelector('.spot-seconds').value||0),0);\n    const interval=Number($('cAdMinutes').value)||30;\n    $('cAdSummary').textContent=rows.length+' anuncio(s) · '+Math.floor(total/60)+'m '+(total%60)+'s';\n    $('cAdPreview').textContent=rows.length\n      ?`Tanda cada ${interval} minutos: ${rows.length} anuncios seguidos (${Math.floor(total/60)}m ${total%60}s en total). Luego vuelve el video donde se pausó.`\n      :'Añade tus enlaces de anuncios; para cada uno indica su duración exacta.';\n  }\n  function loadAds(c){\n    state.adsDirty=false;\n    const ad=c?.commercial||{},spots=Array.isArray(ad.spots)&&ad.spots.length?ad.spots:(ad.url?[{url:ad.url,durationSeconds:ad.durationSeconds,streamFormat:ad.streamFormat}]:[]);\n    $('cAdEnabled').checked=!!ad.enabled;\n    $('cAdMinutes').value=String(Math.max(5,Math.min(180,Math.round(Number(ad.intervalSeconds||1800)/60))));\n    $('cAdList').replaceChildren();spots.forEach(s=>adSpotRow(s));updateAdSummary();\n    $('cAdsEditor').open=false;\n  }\n  function getAdsForSave(){\n    const rows=[...$('cAdList').children];\n    const spots=rows.map(row=>({\n      url:row.querySelector('.spot-url').value.trim(),\n      durationSeconds:Number(row.querySelector('.spot-seconds').value),\n      streamFormat:row.querySelector('.spot-format').value\n    }));\n    if($('cAdEnabled').checked && !spots.length)throw new Error('Agrega al menos un anuncio para activar la publicidad.');\n    if(spots.some(s=>!/^https?:\\/\\//i.test(s.url)||!Number.isInteger(s.durationSeconds)||s.durationSeconds<1||s.durationSeconds>1800))\n      throw new Error('Cada anuncio debe tener un URL válido y duración real entre 1 y 1800 segundos.');\n    const minutes=Number($('cAdMinutes').value);\n    if(!Number.isInteger(minutes)||minutes<5||minutes>180)throw new Error('El intervalo debe estar entre 5 y 180 minutos.');\n    const seconds=spots.reduce((n,s)=>n+s.durationSeconds,0);\n    if($('cAdEnabled').checked && seconds>=minutes*60)\n      throw new Error('Los anuncios juntos deben durar menos que el intervalo entre tandas.');\n    return {enabled:$('cAdEnabled').checked,intervalSeconds:minutes*60,scheduleMode:'broadcast',spots};\n  }\n  $('cAdAdd').onclick=()=>{if($('cAdList').children.length>=12)return toast('Máximo 12 anuncios por tanda.',true);adSpotRow();state.adsDirty=true;};\n  $('cAdPrepare3').onclick=()=>{while($('cAdList').children.length<3)adSpotRow();state.adsDirty=true;};\n  $('cAdList').addEventListener('input',()=>{state.adsDirty=true;updateAdSummary();});\n  $('cAdList').addEventListener('change',()=>{state.adsDirty=true;updateAdSummary();});\n  $('cAdEnabled').addEventListener('change',()=>{state.adsDirty=true;updateAdSummary();});\n  $('cAdMinutes').addEventListener('input',()=>{state.adsDirty=true;updateAdSummary();});\n  function channelDialog(edit=false){state.channelEditing=edit;const c=edit?selectedChannel():null;$('channelDialogTitle').textContent=edit?'Editar canal':'Crear canal';$('cName').value=c?.name||'';$('cLogo').value=c?.logo||'';$('cDescription').value=c?.description||'';\n    const existingScale=Number(c?.channelBugScale ?? 1.40);\n    $('cBugScale').value=String(Number.isFinite(existingScale)?Math.max(0.6,Math.min(3.0,existingScale)):1.40);\n    logoScalePreview();\n    loadAds(c);\n    $('saveChannel').textContent=edit?'Guardar canal':'Crear canal';$('deleteChannel').hidden=!edit;$('commercialOption').hidden=edit;$('cInheritCommercial').checked=true;$('channelDialog').showModal();}\n  $('newChannel').onclick=()=>channelDialog(false);$('newChannelSide').onclick=()=>channelDialog(false);$('editChannel').onclick=()=>channelDialog(true);$('closeDialog').onclick=()=>$('channelDialog').close();\n  $('channelForm').addEventListener('submit',async(ev)=>{ev.preventDefault();const btn=$('saveChannel');busy(btn,true);\n    try{const body={name:$('cName').value,logo:$('cLogo').value,description:$('cDescription').value,channelBugScale:Number($('cBugScale').value),inheritCommercial:$('cInheritCommercial').checked};\n      if(state.adsDirty)body.commercial=getAdsForSave();\n      const edit=state.channelEditing;const result=await request(edit?'/api/channels/'+state.selected:'/api/channels',edit?'PUT':'POST',body);\n      $('channelDialog').close();cancelEdit();await refresh(edit?state.selected:result.key);toast(edit?'Canal actualizado.':'Nuevo canal creado. Agrega su primer programa.');\n    }catch(e){toast(e.message,true);}finally{busy(btn,false);}\n  });\n  $('deleteChannel').onclick=async()=>{if(!confirm('¿ELIMINAR todo este canal y sus programas? Esta acción no se puede deshacer.'))return;\n    try{await request('/api/channels/'+state.selected,'DELETE');$('channelDialog').close();state.selected=null;cancelEdit();await refresh();toast('Canal eliminado.');}catch(e){toast(e.message,true);}\n  };\n  $('searchMetadata').onclick=async()=>{\n    const query=$('pTitle').value.trim();if(query.length<2){toast('Escribe primero el nombre de la película o serie.',true);return;}\n    const btn=$('searchMetadata');busy(btn,true);$('metadataResults').hidden=false;$('metadataResults').innerHTML='<div class=\"empty-list\">Buscando títulos…</div>';\n    try{const type=$('pType').value==='serie'?'serie':'pelicula';const data=await request('/api/search?'+new URLSearchParams({q:query,type,year:$('pYear').value}));\n      $('metadataResults').innerHTML=data.results.length?data.results.map((m,i)=>`<button type=\"button\" class=\"search-choice\" data-index=\"${i}\">\n      ${m.image?`<img src=\"${esc(m.image)}\" alt=\"\" />`:''}<span><strong>${esc(m.title)}</strong><small>${esc(m.year||'Año desconocido')} · ${esc(m.description?.slice(0,100)||'Sin descripción')}</small></span></button>`).join(''):'<div class=\"empty-list\">Sin coincidencias. Puedes introducir los datos manualmente.</div>';\n      $('metadataResults').querySelectorAll('[data-index]').forEach(b=>b.onclick=async()=>{\n        const m=data.results[Number(b.dataset.index)];$('pTitle').value=m.title;$('pYear').value=m.year||'';$('pDescription').value=m.description;$('pImage').value=m.image;\n        $('metadataResults').hidden=true;\n        try{const detail=await request('/api/details?'+new URLSearchParams({id:m.id,type:m.type}));\n          // Sugerencia de TMDB, nunca duración exacta del archivo original.\n          if(detail.suggestedDurationSeconds&&!$('pDuration').value) {$('pDuration').value=duration(detail.suggestedDurationSeconds);$('pDuration').dataset.durationSource='tmdb_estimate';$('probeChannelHint').textContent='Duración de TMDB estimada. Detecta desde el enlace o confírmala antes de guardar.';toast('Duración sugerida por TMDB: comprueba que coincide con tu archivo.');}\n          else toast('Ficha e imagen completadas. Introduce el URL y duración del video.');\n        }catch{toast('Ficha completada. Introduce la duración exacta de tu video.');}\n      });\n    }catch(e){$('metadataResults').hidden=true;toast(e.message,true);}finally{busy(btn,false);}\n  };\n  // ---- Películas y Series: biblioteca VOD administrada en D1 ----\n  const vodState={filter:'',limit:80,preview:null,mode:'movies', data:{movies:[],series:[]}, editing:null,selectedSeries:null,externalSeed:null, editingEpisode:null, existing:[],loaded:false};\n  const genreList=['Acción','Aventura','Animación','Comedia','Crimen','Documental','Drama','Familia','Fantasía','Historia','Terror','Música','Misterio','Romance','Ciencia ficción','Suspenso','Bélica','Western','Infantil','Anime','Otros'];\n  const tmdbGenreNames={28:'Acción',12:'Aventura',16:'Animación',35:'Comedia',80:'Crimen',99:'Documental',18:'Drama',10751:'Familia',14:'Fantasía',36:'Historia',27:'Terror',10402:'Música',9648:'Misterio',10749:'Romance',878:'Ciencia ficción',53:'Suspenso',10752:'Bélica',37:'Western',10759:'Acción',10765:'Ciencia ficción',10768:'Bélica',10762:'Infantil',10764:'Otros',10763:'Documental',10767:'Otros'};\n  $('vodGenre').innerHTML=genreList.map(g=>`<option value=\"${esc(g)}\">${esc(g)}</option>`).join('');\n  const tmdbResults=$('vodTmdbResults');\n  const asTime=v=>{const s=String(v||'').trim();return /^\\d{6}$/.test(s)?`${s.slice(0,2)}:${s.slice(2,4)}:${s.slice(4)}`:s;};\n  function showTab(which){\n    const vod=which==='vod',promo=which==='promo',appearance=which==='appearance';\n    document.querySelector('.dashboard').hidden=vod||promo||appearance;\n    $('vodPanel').hidden=!vod;\n    $('promoPanel').hidden=!promo;\n    $('appearancePanel').hidden=!appearance;\n    $('tabChannels').classList.toggle('active',!vod&&!promo&&!appearance);\n    $('tabVod').classList.toggle('active',vod);\n    $('tabPromo').classList.toggle('active',promo);\n    $('tabAppearance').classList.toggle('active',appearance);\n    if(vod&&!vodState.loaded)refreshVod().catch(e=>toast(e.message,true));\n    if(promo)loadPromo().catch(e=>promoMessage(e.message,true));\n    if(appearance)loadAppearance().catch(e=>appearanceMessage(e.message,true));\n  }\n  $('tabChannels').onclick=()=>showTab('channels');\n  $('tabVod').onclick=()=>showTab('vod');\n  async function refreshVod(){\n    vodState.data=await request('/api/vod');vodState.loaded=true;\n    renderVod();\n  }\n  async function refreshExisting(){\n    const result=await request('/api/vod/existing-series');\n    vodState.existing=result.series||[];\n    $('vodExistingSeries').innerHTML='<option value=\"\">Selecciona una serie existente...</option>'+vodState.existing.map(s=>`<option value=\"${esc(s.id)}\">${esc(s.Title)} ${s.Year?'('+esc(s.Year)+')':''} · ${s.existingEpisodes} episodios</option>`).join('');\n  }\n  function switchVodMode(mode){\n    vodState.limit=80;vodState.filter='';$('vodFilter').value='';\n    vodState.mode=mode;vodState.editing=null;\n    $('bulkMovieArea').hidden=mode!=='movies';\n    $('vodMoviesTab').classList.toggle('active',mode==='movies');$('vodSeriesTab').classList.toggle('active',mode==='series');\n    $('vodMovieInputs').hidden=mode!=='movies';$('vodExistingWrap').hidden=mode!=='series';\n    $('vodEpisodeArea').hidden=true;vodState.selectedSeries=null;vodState.externalSeed=null;\n    $('vodEditorTitle').textContent=mode==='movies'?'Nueva película':'Nueva serie';\n    $('vodListTitle').textContent=mode==='movies'?'Películas añadidas':'Series administradas';\n    $('vodSave').textContent=mode==='movies'?'＋ Guardar película':'＋ Crear serie';\n    resetVodForm();renderVod();\n    if(mode==='series'&&!vodState.existing.length)refreshExisting().catch(e=>toast('No se pudo consultar el catálogo original de series: '+e.message,true));\n  }\n  $('vodMoviesTab').onclick=()=>switchVodMode('movies');\n  $('vodSeriesTab').onclick=()=>switchVodMode('series');\n  function resetVodForm(){vodState.editing=null;resetSegmentsUi();$('fenixExtraMetadata').open=false;$('vodForm').reset();$('vodGenre').value='Otros';$('vodTmdbId').value='';tmdbResults.hidden=true;$('vodSave').textContent=vodState.mode==='movies'?'＋ Guardar película':'＋ Crear serie';}\n  $('vodCancel').onclick=resetVodForm;\n  function renderVod(){\n    $('fenixMovieTotal').textContent=String((vodState.data.movies||[]).length);\n    $('fenixSeriesTotal').textContent=String((vodState.data.series||[]).length);\n    $('fenixEpisodeTotal').textContent=String((vodState.data.series||[]).reduce((n,s)=>n+(s.episodes||[]).length,0));\n    const all=vodState.data[vodState.mode]||[];\n    const list=all.filter(item=>!vodState.filter || String(item.Title||'').toLowerCase().includes(vodState.filter));\n    $('vodListCount').textContent=`${list.length} títulos encontrados (${all.length} en la biblioteca)`;\n    $('vodShowMore').hidden=list.length<=vodState.limit;\n    $('vodItems').innerHTML=list.length?list.slice(0,vodState.limit).map(item=>`<div class=\"vod-item\">\n      ${item.Logo?`<img src=\"${esc(item.Logo)}\" alt=\"\" />`:'<span>🎞</span>'}\n      <div class=\"vod-item-info\"><strong>${esc(item.Title)}</strong><small>${esc(item.Genre||'Otros')} ${item.Year?'· '+esc(item.Year):''}${vodState.mode==='series'?' · '+(item.episodes||[]).length+' episodios':''}</small></div>\n      <div class=\"vod-item-buttons\">\n      ${vodState.mode==='series'?`<button data-vod-ep=\"${esc(item.id)}\">Capítulos</button>`:''}\n      <button data-vod-edit=\"${esc(item.id)}\">Editar</button><button class=\"danger\" data-vod-del=\"${esc(item.id)}\">Eliminar</button>\n      </div></div>`).join(''):'<div class=\"vod-empty\">Aún no tienes títulos administrados desde el panel.</div>';\n    $('vodItems').querySelectorAll('[data-vod-edit]').forEach(b=>b.onclick=()=>editVod(b.dataset.vodEdit));\n    $('vodItems').querySelectorAll('[data-vod-del]').forEach(b=>b.onclick=()=>deleteVod(b.dataset.vodDel));\n    $('vodItems').querySelectorAll('[data-vod-ep]').forEach(b=>b.onclick=()=>openSeries(b.dataset.vodEp));\n    if(vodState.selectedSeries)renderEpisodes();\n  }\n  $('vodFilter').oninput=()=>{vodState.filter=$('vodFilter').value.trim().toLowerCase();vodState.limit=80;renderVod();};\n  $('vodShowMore').onclick=()=>{vodState.limit+=80;renderVod();};\n  function editVod(id){\n    const item=(vodState.data[vodState.mode]||[]).find(x=>x.id===id);if(!item)return;\n    vodState.editing=id;resetSegmentsUi();\n    $('vodTitle').value=item.Title;$('vodYear').value=item.Year||'';\n    $('vodGenre').value=genreList.includes(item.Genre)?item.Genre:'Otros';\n    $('vodDescription').value=item.Description||'';$('vodPoster').value=item.Logo||'';\n    $('vodTmdbId').value=item.tmdbId||'';\n    $('vodDirector').value=item.director||'';$('vodCast').value=item.actors||'';$('vodImdbRating').value=item.imdbRating||'';$('vodImdbId').value=item.imdbId||'';$('vodCountry').value=item.country||'';$('vodAwards').value=item.awards||'';\n    $('fenixExtraMetadata').open=!!(item.director||item.actors||item.imdbRating||item.imdbId);\n    if(vodState.mode==='movies'){\n      $('vodUrl').value=item.Url||'';$('vodDuration').value=duration(item.durationSeconds||0);$('vodFormat').value=item.streamFormat||'mp4';\n      $('movieIntroStartSeconds').value=item.introStartSeconds??'';$('movieIntroEndSeconds').value=item.introEndSeconds??'';\n      $('movieCreditsStartSeconds').value=item.creditsStartSeconds??'';$('movieCreditsEndSeconds').value=item.creditsEndSeconds??'';\n    }\n    $('vodEditorTitle').textContent='Editar '+(vodState.mode==='movies'?'película':'serie');\n    $('vodSave').textContent='Guardar cambios';$('vodForm').scrollIntoView({behavior:'smooth'});\n  }\n  $('vodForm').onsubmit=async ev=>{\n    ev.preventDefault();const btn=$('vodSave');busy(btn,true);\n    const body={title:$('vodTitle').value.trim(),year:$('vodYear').value,genre:$('vodGenre').value,\n      image:$('vodPoster').value.trim(),description:$('vodDescription').value,tmdbId:$('vodTmdbId').value||null,\n      director:$('vodDirector').value.trim(),actors:$('vodCast').value.trim(),imdbRating:$('vodImdbRating').value.trim(),imdbId:$('vodImdbId').value.trim(),country:$('vodCountry').value.trim(),awards:$('vodAwards').value.trim()};\n    if(vodState.mode==='movies')Object.assign(body,{url:$('vodUrl').value.trim(),duration:asTime($('vodDuration').value),streamFormat:$('vodFormat').value,\n      introStartSeconds:$('movieIntroStartSeconds').value,introEndSeconds:$('movieIntroEndSeconds').value,\n      creditsStartSeconds:$('movieCreditsStartSeconds').value,creditsEndSeconds:$('movieCreditsEndSeconds').value});\n    try{\n      const path='/api/vod/'+vodState.mode+(vodState.editing?'/'+vodState.editing:'');\n      const res=await request(path,vodState.editing?'PUT':'POST',body);\n      const savedId=vodState.editing||res.item?.id;\n      resetVodForm();await refreshVod();\n      toast('Guardado en D1. Estará disponible en el catálogo al actualizarse el Worker.');\n      if(vodState.mode==='series'&&savedId)openSeries(savedId);\n    }catch(e){toast(e.message,true)}finally{busy(btn,false)};\n  };\n  async function deleteVod(id){\n    const kind=vodState.mode==='movies'?'película':'serie';\n    const target=(vodState.data[vodState.mode]||[]).find(x=>x.id===id);\n    if(!confirm(`¿Eliminar ${kind}: «${target?.Title||'este título'}»?\\nNo elimina el archivo del servidor. Esta acción en el catálogo no se puede deshacer.`))return;\n    try{await request('/api/vod/'+vodState.mode+'/'+id,'DELETE');await refreshVod();toast('Se eliminó del panel.')}catch(e){toast(e.message,true)}\n  }\n  $('vodUrl').onchange=()=>{$('vodFormat').value=guessVodFormat($('vodUrl').value)};\n  $('vodEpisodeUrl').onchange=()=>{$('vodEpisodeFormat').value=guessVodFormat($('vodEpisodeUrl').value)};\n  function guessVodFormat(url){const u=url.split('?')[0].toLowerCase();return u.endsWith('.m3u8')?'hls':u.endsWith('.mkv')?'mkv':'mp4'}\n  $('vodTmdb').onclick=async()=>{\n    const q=$('vodTitle').value.trim();if(q.length<2){toast('Escribe primero un título.',true);return}\n    const type=vodState.mode==='series'?'serie':'pelicula';const btn=$('vodTmdb');busy(btn,true);\n    tmdbResults.hidden=false;tmdbResults.innerHTML='<div class=\"vod-empty\">Buscando títulos…</div>';\n    try{\n      const res=await request('/api/search?'+new URLSearchParams({q,type,year:$('vodYear').value}));\n      const list=res.results||[];\n      tmdbResults.innerHTML=list.length?list.map((m,i)=>`<button class=\"search-choice\" type=\"button\" data-vod-result=\"${i}\">${m.image?`<img src=\"${esc(m.image)}\" alt=\"\" />`:''}<span><strong>${esc(m.title)}</strong><small>${esc(m.year)} · ${esc((m.description||'').slice(0,90))}</small></span></button>`).join(''):'<div class=\"vod-empty\">No hay coincidencias. Puedes completar la ficha a mano.</div>';\n      tmdbResults.querySelectorAll('[data-vod-result]').forEach(b=>b.onclick=async()=>{\n        const m=list[Number(b.dataset.vodResult)];\n        $('vodTitle').value=m.title;$('vodYear').value=m.year||'';$('vodDescription').value=m.description||'';\n        $('vodPoster').value=m.image||'';$('vodTmdbId').value=m.id||'';tmdbResults.hidden=true;\n        try{\n          const detail=await request('/api/details?'+new URLSearchParams({type:m.type,id:m.id}));\n          const mainGenre=(detail.genres||[]).map(g=>tmdbGenreNames[g.id]||'Otros').find(g=>g!=='Otros');\n          $('vodGenre').value=mainGenre||'Otros';\n          if(vodState.mode==='movies'&&detail.suggestedDurationSeconds&&!$('vodDuration').value){$('vodDuration').value=duration(detail.suggestedDurationSeconds);$('vodDuration').dataset.durationSource='tmdb_estimate';$('probeMovieHint').textContent='Duración de referencia TMDB, no exacta. Detecta desde el archivo cuando sea posible.'}\n          toast('Ficha y géneros completados con TMDB. Revisa duración y URL.');\n        }catch(e){toast('Ficha básica cargada. '+e.message,true)}\n      });\n    }catch(e){tmdbResults.hidden=true;toast(e.message,true)}finally{busy(btn,false)}\n  };\n  function getSelectedSeries(){\n    return vodState.data.series.find(s=>s.id===vodState.selectedSeries)||vodState.externalSeed;\n  }\n  function openSeries(id,seed=null){\n    if(vodState.selectedSeries!==id) $('bulkEpRows').replaceChildren();\n    vodState.selectedSeries=id;vodState.externalSeed=seed;vodState.editingEpisode=null;\n    const s=getSelectedSeries();if(!s)return;\n    $('vodEpisodeArea').hidden=false;$('vodCurrentSeries').textContent=s.Title;\n    resetEpisodeForm();renderEpisodes();$('vodEpisodeArea').scrollIntoView({behavior:'smooth'});\n  }\n  $('vodCloseEpisodes').onclick=()=>{$('vodEpisodeArea').hidden=true;vodState.selectedSeries=null;vodState.externalSeed=null};\n  $('vodUseExisting').onclick=()=>{\n    const id=$('vodExistingSeries').value;const s=vodState.existing.find(x=>x.id===id);\n    if(!s){toast('Selecciona una serie.',true);return}\n    openSeries(s.id,s);\n  };\n  function renderEpisodes(){\n    const s=getSelectedSeries(),eps=s?.episodes||[];\n    $('vodEpisodes').innerHTML=eps.length?eps.map(e=>`<div class=\"vod-item\"><div class=\"vod-item-info\"><strong>T${e.season} · E${e.episode} — ${esc(e.Title)}</strong><small>${esc(e.Runtime||'')} ${e.introScanStatus==='detected'?'· ✔ Intro '+Math.round(e.introStartSeconds)+'–'+Math.round(e.introEndSeconds)+' s':e.introScanStatus==='needs_review'?'· ⚠ Intro pendiente de revisar':e.introScanStatus==='not_detected'?'· Sin intro identificada':''}</small></div><div class=\"vod-item-buttons\"><button data-ep-scan=\"${esc(e.id)}\">🎞 Revisar video</button><button data-ep-edit=\"${esc(e.id)}\">Editar</button><button class=\"danger\" data-ep-del=\"${esc(e.id)}\">Eliminar</button></div></div>`).join(''):'<div class=\"vod-empty\">Todavía no has agregado capítulos desde el panel. Los episodios existentes en Roku-feed se conservarán.</div>';\n    $('vodEpisodes').querySelectorAll('[data-ep-scan]').forEach(b=>b.onclick=()=>{editEpisode(b.dataset.epScan);requestIntroScan(b.dataset.epScan)});\n    $('vodEpisodes').querySelectorAll('[data-ep-edit]').forEach(b=>b.onclick=()=>editEpisode(b.dataset.epEdit));\n    $('vodEpisodes').querySelectorAll('[data-ep-del]').forEach(b=>b.onclick=()=>removeEpisode(b.dataset.epDel));\n  }\n  function resetSegmentsUi(){\n    for(const prefix of ['episode','movie']){\n      const el=$(prefix+'SegmentsResult');\n      if(el)el.textContent='Pulsa Buscar para consultar tres bases públicas; no se guardará nada automáticamente.';\n    }\n  }\n  const getSegmentFields = (kind,type)=> {\n    const prefix=kind==='movie'?'movie':type==='intro'?'intro':'episodeCredits';\n    if(kind==='movie')return [$('movie'+(type==='intro'?'Intro':'Credits')+'StartSeconds'),$('movie'+(type==='intro'?'Intro':'Credits')+'EndSeconds')];\n    return type==='intro'?[$('introStartSeconds'),$('introEndSeconds')]:[$('episodeCreditsStartSeconds'),$('episodeCreditsEndSeconds')];\n  };\n  const segmentClock=n=>{\n    n=Number(n);if(!Number.isFinite(n))return '—';\n    const secs=Math.floor(n),ms=Math.round((n-secs)*10);\n    return String(Math.floor(secs/3600)).padStart(2,'0')+':'+String(Math.floor(secs%3600/60)).padStart(2,'0')+':'+String(secs%60).padStart(2,'0')+(ms?'.'+ms:'');\n  };\n  async function lookupCommunitySegments(kind){\n    const result=$(kind+'SegmentsResult');\n    const params=kind==='movie'?{kind:'movie',id:vodState.editing}:{kind:'episode',seriesId:vodState.selectedSeries,episodeId:vodState.editingEpisode};\n    if((kind==='movie'&&!params.id)||(kind==='episode'&&!params.episodeId)){\n      result.textContent='Guarda primero el título y después ábrelo en Editar.';return;\n    }\n    const button=$(kind+'SegmentsLookup'),context=JSON.stringify(params);\n    busy(button,true);result.textContent='Consultando IntroDB, SkipDB y TheIntroDB…';\n    try{\n      const info=await request('/api/segments/lookup?'+new URLSearchParams(params));\n      const liveContext=kind==='movie'?JSON.stringify({kind:'movie',id:vodState.editing}):JSON.stringify({kind:'episode',seriesId:vodState.selectedSeries,episodeId:vodState.editingEpisode});\n      if(context!==liveContext)return;\n      result.replaceChildren();\n      const header=document.createElement('p');header.className='fenix-segment-summary';\n      header.textContent='Resultados de '+info.title+'. Las marcas dependen de la versión del video. No se han guardado cambios.';\n      result.append(header);\n      for(const source of (info.sources||[])){\n        const card=document.createElement('div');card.className='fenix-segment-source';\n        const h=document.createElement('h4');h.textContent=source.name;card.append(h);\n        let count=0;\n        for(const type of ['intro','credits']){\n          for(const s of (source.segments?.[type]||[])){\n            count++;\n            const line=document.createElement('div');line.className='fenix-segment-row';\n            const desc=document.createElement('span');\n            desc.textContent=(type==='intro'?'Intro':'Créditos')+': '+segmentClock(s.startSeconds)+' → '+segmentClock(s.endSeconds)+\n              (s.confidence===null?'':' · confianza '+Math.round(s.confidence*100)+' %')+\n              (s.match?' · '+s.match:'');\n            const apply=document.createElement('button');apply.type='button';apply.className='button outline';\n            apply.textContent='Usar '+(type==='intro'?'intro':'créditos');\n            apply.onclick=()=>{\n              const now=kind==='movie'?JSON.stringify({kind:'movie',id:vodState.editing}):JSON.stringify({kind:'episode',seriesId:vodState.selectedSeries,episodeId:vodState.editingEpisode});\n              if(now!==context)return;\n              const [start,end]=getSegmentFields(kind,type);\n              if(start.value!==''||end.value!==''){\n                if(!confirm('Ya hay tiempos en '+type+'. ¿Quieres sustituir SOLO estos dos campos sin guardar aún?'))return;\n              }\n              start.value=String(s.startSeconds);end.value=String(s.endSeconds);\n              toast('Sugerencia colocada. Revisa el video y pulsa Guardar cambios.');\n            };\n            line.append(desc,apply);card.append(line);\n          }\n        }\n        if(!count){const n=document.createElement('p');n.textContent=source.message||'Sin marcas de intro o créditos para este título.';card.append(n)}\n        result.append(card);\n      }\n      if(info.warnings?.length){const warn=document.createElement('p');warn.textContent='Avisos: '+info.warnings.join(' · ');result.append(warn)}\n    }catch(e){result.textContent='No se pudo consultar: '+e.message;toast(e.message,true)}\n    finally{busy(button,false)}\n  }\n  $('movieSegmentsLookup').onclick=()=>lookupCommunitySegments('movie');\n  $('episodeSegmentsLookup').onclick=()=>lookupCommunitySegments('episode');\n\n  function resetEpisodeForm(){resetSegmentsUi();vodState.editingEpisode=null;$('vodEpisodeForm').reset();$('vodSeason').value=1;$('vodEpisodeNum').value=1;$('introUseCandidate').hidden=true;$('introScanHint').textContent='Guarda el episodio antes de revisarlo; no necesitas marcar la intro previamente.';$('vodSaveEpisode').textContent='＋ Agregar episodio'}\n  $('vodEpisodeCancel').onclick=resetEpisodeForm;\n  function editEpisode(id){const e=(getSelectedSeries()?.episodes||[]).find(x=>x.id===id);if(!e)return;\n    resetSegmentsUi();\n    vodState.editingEpisode=id;$('vodSeason').value=e.season;$('vodEpisodeNum').value=e.episode;$('vodEpisodeTitle').value=e.Title;\n    $('vodEpisodeUrl').value=e.Url;$('vodEpisodeDuration').value=duration(e.durationSeconds||0);$('vodEpisodeFormat').value=e.streamFormat;\n    $('vodEpisodeDesc').value=e.Description||'';$('vodEpisodeImage').value=e.Logo||'';\n    $('introStartSeconds').value=e.introStartSeconds??'';$('introEndSeconds').value=e.introEndSeconds??'';\n    $('episodeCreditsStartSeconds').value=e.creditsStartSeconds??'';$('episodeCreditsEndSeconds').value=e.creditsEndSeconds??'';\n    $('introUseCandidate').hidden=!(e.introScanStatus==='needs_review'&&Number.isFinite(+e.introSuggestedEndSeconds)&&Number(e.introSuggestedEndSeconds)>Number(e.introSuggestedStartSeconds));\n    $('introScanHint').textContent=e.introScanStatus==='detected'?'✔ Intro guardada; puedes revisar los segundos.':e.introScanStatus==='needs_review'?('Sugerencia sin confirmar: '+Math.round(e.introSuggestedStartSeconds)+'–'+Math.round(e.introSuggestedEndSeconds)+' segundos. Revisa el video y pulsa Aplicar.'):'Pulsa Revisar video para intentar identificar la intro.';\n    $('vodSaveEpisode').textContent='Guardar cambios';\n  }\n  async function removeEpisode(id){if(!confirm('¿Eliminar este capítulo del panel?'))return;\n    try{await request('/api/vod/series/'+vodState.selectedSeries+'/episodes/'+id,'DELETE');await refreshVod();resetEpisodeForm();toast('Capítulo eliminado')}catch(e){toast(e.message,true)}\n  }\n  // Revisar intros desde el editor TMDB. Cloudflare guarda la orden; Termux analiza.\n  const introTime=s=>{const x=Math.round(Number(s)||0);return String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0')};\n  let activeIntroJob=null;\n  async function requestIntroScan(id){\n    const series=getSelectedSeries(),hint=$('introScanHint');\n    if(!series||!id){hint.textContent='Primero guarda el episodio con su video.';return}\n    if(activeIntroJob){hint.textContent='Ya hay una revisión en curso. Espera el resultado.';return}\n    hint.textContent='Creando solicitud de revisión…';\n    try{\n      const res=await request('/api/intro/jobs','POST',{seriesId:series.id,episodeId:id});\n      hint.textContent=(res.method==='single_video'?'Análisis individual':'Comparación automática')+' en cola. Mantén Termux activo.';\n      activeIntroJob=res.job.id;\n      await watchIntroJob(res.job.id,series.id,id);\n    }catch(e){hint.textContent=e.message;toast(e.message,true)}finally{activeIntroJob=null}\n  }\n  $('introScanCurrent').onclick=()=>requestIntroScan(vodState.editingEpisode);\n  $('introReviewVideo').onclick=()=>{\n    const box=$('introVideoPreview'),v=$('introPreviewVideo');box.hidden=!box.hidden;\n    if(!box.hidden){v.src=$('vodEpisodeUrl').value.trim();v.load();const n=Number($('introStartSeconds').value);if(Number.isFinite(n)&&n>0)v.addEventListener('loadedmetadata',()=>{try{v.currentTime=Math.max(0,n-3)}catch{}},{once:true});}\n    else{v.pause();v.removeAttribute('src');v.load()}\n  };\n  $('introUseCandidate').onclick=()=>{\n    const ep=getSelectedSeries()?.episodes?.find(x=>x.id===vodState.editingEpisode);\n    if(!ep||ep.introScanStatus!=='needs_review')return;\n    $('introStartSeconds').value=ep.introSuggestedStartSeconds;\n    $('introEndSeconds').value=ep.introSuggestedEndSeconds;\n    $('introUseCandidate').hidden=true;\n    $('introScanHint').textContent='Sugerencia aplicada. Previsualiza y pulsa «Guardar cambios» para activarla.';\n  };\n  async function watchIntroJob(jobId,seriesId,episodeId){\n    const hint=$('introScanHint');\n    for(let i=0;i<240;i++){\n      await new Promise(resolve=>setTimeout(resolve,5000));\n      let job;\n      try{job=(await request('/api/intro/jobs/'+jobId)).job}catch(e){hint.textContent=e.message;return}\n      if(job.status==='pending'){hint.textContent='En cola. Abre el agente IntroScan en Termux.';continue}\n      if(job.status==='running'){hint.textContent='Analizando escenas y buscando cabeceras…';continue}\n      if(job.status==='failed'){hint.textContent='Fallo en el análisis: '+(job.error||'Consulta Termux');toast(hint.textContent,true);return}\n      if(job.status==='done'){\n        await refreshVod();\n        const ep=vodState.data.series.find(x=>x.id===seriesId)?.episodes?.find(x=>x.id===episodeId);\n        if(!ep){hint.textContent='Análisis terminado; recarga los episodios.';return}\n        if(ep.introScanStatus==='detected'){\n          hint.textContent='✔ Intro detectada: '+introTime(ep.introStartSeconds)+'–'+introTime(ep.introEndSeconds)+'; marcas guardadas.';\n          if(vodState.editingEpisode===episodeId){$('introStartSeconds').value=ep.introStartSeconds;$('introEndSeconds').value=ep.introEndSeconds}\n        }else if(ep.introScanStatus==='needs_review'){\n          hint.textContent='⚠ Posible intro: '+introTime(ep.introSuggestedStartSeconds)+'–'+introTime(ep.introSuggestedEndSeconds)+'. Comprueba y pulsa Aplicar sugerencia.';\n          $('introUseCandidate').hidden=vodState.editingEpisode!==episodeId;\n        }else hint.textContent='No fue posible identificar una intro con seguridad. No se guardaron segundos inventados.';\n        return;\n      }\n    }\n    hint.textContent='El análisis sigue pendiente. Consulta Termux y vuelve a intentarlo.';\n  }\n  $('vodEpisodeTmdb').onclick=async()=>{\n    const s=getSelectedSeries();if(!s?.tmdbId){toast('La serie necesita una ficha TMDB vinculada para autocompletar episodios.',true);return}\n    try{\n      const result=await request('/api/vod/tmdb-episode?'+new URLSearchParams({id:s.tmdbId,season:$('vodSeason').value,episode:$('vodEpisodeNum').value}));\n      $('vodEpisodeTitle').value=result.title||'';$('vodEpisodeDesc').value=result.description||'';\n      $('vodEpisodeImage').value=result.image||s.Logo||'';\n      if(result.suggestedDurationSeconds&&!$('vodEpisodeDuration').value){$('vodEpisodeDuration').value=duration(result.suggestedDurationSeconds);$('vodEpisodeDuration').dataset.durationSource='tmdb_estimate';$('probeEpisodeHint').textContent='Duración sugerida por TMDB, comprueba el archivo.';}\n      toast('Datos del episodio encontrados. Agrega el enlace de video y verifica su duración.');\n    }catch(e){toast(e.message,true)}\n  };\n  $('vodEpisodeForm').onsubmit=async ev=>{\n    ev.preventDefault();const btn=$('vodSaveEpisode');busy(btn,true);\n    const s=getSelectedSeries();if(!s){toast('Selecciona una serie.',true);busy(btn,false);return}\n    const body={season:$('vodSeason').value,episode:$('vodEpisodeNum').value,title:$('vodEpisodeTitle').value,\n      url:$('vodEpisodeUrl').value.trim(),duration:asTime($('vodEpisodeDuration').value),\n      streamFormat:$('vodEpisodeFormat').value,description:$('vodEpisodeDesc').value,image:$('vodEpisodeImage').value.trim(),\n      introStartSeconds:$('introStartSeconds').value, introEndSeconds:$('introEndSeconds').value,\n      creditsStartSeconds:$('episodeCreditsStartSeconds').value,creditsEndSeconds:$('episodeCreditsEndSeconds').value};\n    if(vodState.externalSeed)body.seriesSeed=vodState.externalSeed;\n    try{\n      await request('/api/vod/series/'+s.id+'/episodes'+(vodState.editingEpisode?'/'+vodState.editingEpisode:''),vodState.editingEpisode?'PUT':'POST',body);\n      vodState.externalSeed=null;resetEpisodeForm();await refreshVod();\n      toast('Capítulo guardado. Ya no necesitas volver a crear la serie.');\n    }catch(e){toast(e.message,true)}finally{busy(btn,false)};\n  };\n\n\n\n  function segmentPreview(kind,type){\n    const box=kind==='movie'?$('movieSegmentPreviewBox'):$('introVideoPreview');\n    const video=kind==='movie'?$('movieSegmentPreviewVideo'):$('introPreviewVideo');\n    const raw=kind==='movie'?$('vodUrl').value.trim():$('vodEpisodeUrl').value.trim();\n    if(!/^https?:\\/\\//i.test(raw)){toast('Primero introduce la URL del video.',true);return}\n    const [field]=getSegmentFields(kind,type);\n    const value=field.value===''?0:Number(field.value);\n    box.hidden=false;\n    video.pause();video.removeAttribute('src');video.load();\n    video.onloadedmetadata=()=>{try{video.currentTime=Math.max(0,(Number.isFinite(value)?value:0)-3)}catch{}};\n    video.src=raw;video.load();\n  }\n  $('moviePreviewIntro').onclick=()=>segmentPreview('movie','intro');\n  $('moviePreviewCredits').onclick=()=>segmentPreview('movie','credits');\n  $('episodePreviewCredits').onclick=()=>segmentPreview('episode','credits');\n\n  // Importador GitHub con vista previa, respaldo descargable y confirmación.\n  async function downloadPrivateJson(path,filename){\n    const r=await fetch(path,{headers:{authorization:'Bearer '+state.token},cache:'no-store'});\n    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||'No se pudo descargar el respaldo')}\n    const blob=await r.blob(),url=URL.createObjectURL(blob);\n    const a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),12000);\n  }\n  async function refreshVodBackups(){\n    try{const r=await request('/api/vod/import/backups');\n      const backup=(r.backups||[]).slice(0,8);\n      $('vodBackupLinks').innerHTML=backup.length?'<strong>Respaldos disponibles:</strong> '+backup.map(b=>`<button type=\"button\" class=\"button outline\" data-vod-backup=\"${esc(b.id)}\">${esc(b.kind)} · ${esc(b.created_at.slice(0,10))} ⤓</button>`).join(' '):'';\n      $('vodBackupLinks').querySelectorAll('[data-vod-backup]').forEach(b=>b.onclick=async()=>{try{await downloadPrivateJson('/api/vod/import/backups/'+encodeURIComponent(b.dataset.vodBackup),`fenix-respaldo-${b.dataset.vodBackup}.json`)}catch(e){toast(e.message,true)}});\n    }catch(e){$('vodBackupLinks').textContent='No se pudieron consultar los respaldos: '+e.message}\n  }\n  $('vodPreviewImport').onclick=async()=>{\n    const btn=$('vodPreviewImport');busy(btn,true);vodState.preview=null;$('vodCommitImport').disabled=true;\n    $('vodConfirmImport').checked=false;$('vodConfirmImport').disabled=true;\n    $('vodImportPreview').textContent='Revisando el catálogo de GitHub y comparando con D1…';\n    try{\n      const p=await request('/api/vod/import/preview');vodState.preview=p;\n      const f=p.changes,old=p.currentCounts,source=p.sourceCounts;\n      $('vodImportPreview').textContent=`ORIGEN: ${source.movies} películas, ${source.series} series y ${source.episodes} capítulos. ACTUAL: ${old.movies} películas y ${old.series} series. NUEVOS: +${f.moviesNew} películas, +${f.seriesNew} series, +${f.episodesNew} capítulos. COINCIDEN: ${f.moviesExisting} películas, ${f.seriesExisting} series. ${p.warningCount?`Observaciones: ${p.warningCount}. `:''}Ejemplos: ${p.sampleMovies.concat(p.sampleSeries).join(', ')}.`;\n      $('vodConfirmImport').disabled=false;\n      await refreshVodBackups();\n    }catch(e){$('vodImportPreview').textContent='La vista previa falló: '+e.message;toast(e.message,true)}finally{busy(btn,false)}\n  };\n  $('vodConfirmImport').onchange=()=>{$('vodCommitImport').disabled=!$('vodConfirmImport').checked||!vodState.preview};\n  $('vodExportBackup').onclick=async()=>{const b=$('vodExportBackup');busy(b,true);try{await downloadPrivateJson('/api/vod/import/export','fenix-tv-mi-biblioteca-actual.json');toast('Respaldo descargado. Puedes conservarlo antes de importar.')}catch(e){toast(e.message,true)}finally{busy(b,false)}};\n  $('vodCommitImport').onclick=async()=>{\n    const p=vodState.preview;if(!p||!$('vodConfirmImport').checked)return;\n    if(!confirm('Se crearán respaldos automáticos en D1. Se combinarán los títulos y capítulos sin borrar lo existente. ¿Importar ahora?'))return;\n    const b=$('vodCommitImport');busy(b,true);\n    try{const r=await request('/api/vod/import/commit','POST',{sourceHash:p.sourceHash,currentHash:p.currentHash,confirm:'IMPORTAR_CON_RESPALDO'});\n      $('vodImportPreview').textContent=r.message+' Películas: '+r.summary.movies+'. Series: '+r.summary.series+'. Capítulos: '+r.summary.episodes+'.';\n      vodState.preview=null;$('vodConfirmImport').checked=false;$('vodConfirmImport').disabled=true;\n      await refreshVod();await refreshVodBackups();toast('Biblioteca importada. Ya puedes editar tus títulos y episodios.');\n    }catch(e){$('vodImportPreview').textContent='No se modificó el catálogo: '+e.message;toast(e.message,true)}finally{busy(b,false);b.disabled=true}\n  };\n  // ================================================================\n  // FÉNIX TV STUDIO 2.2 — ampliación gradual del editor existente.\n  // Solo se agregan formularios/operaciones, sin alterar las funciones 2.1.\n  // ================================================================\n  const bulkFormats='<option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS</option>';\n  const hmsOrBlank = el => {const s=String(el.value||'').trim();return !s||/^(00:00:00|000000)$/.test(s)};\n  const safeNumber=x=>Math.max(0,Math.floor(Number(x)||0));\n  function applyDetected(el,tag,seconds,source){\n    if(!Number.isFinite(seconds)||seconds<=0)return;\n    el.value=duration(seconds);tag.textContent=source==='file'?'✓ Duración obtenida del archivo ('+el.value+')':\n      '◷ Referencia de TMDB ('+el.value+'), no es la duración exacta del archivo.';\n    el.dataset.durationSource=source==='file'?'video_metadata':'tmdb_estimate';\n  }\n  async function inspectMedia(url){\n    if(!/^https?:\\/\\//i.test(url))return {seconds:null,reason:'Pega primero un enlace válido.'};\n    if(/\\.m3u8(?:$|\\?)/i.test(url)){\n      try{const p=await request('/api/media-duration?'+new URLSearchParams({url}));\n        return p.exact&&p.durationSeconds?{seconds:p.durationSeconds,source:'file'}:{seconds:null,reason:'HLS en vivo o playlist sin cierre: no es posible medir duración exacta.'};\n      }catch(e){return {seconds:null,reason:e.message};}\n    }\n    // <video> lee metadatos nativos sin descargar todo el video. MKV y varios CDNs no son compatibles.\n    return new Promise(resolve=>{\n      const video=document.createElement('video');let done=false;\n      const finish=(data)=>{if(done)return;done=true;clearTimeout(timeout);video.removeAttribute('src');try{video.load()}catch{}video.remove();resolve(data)};\n      const timeout=setTimeout(()=>finish({seconds:null,reason:'El servidor o formato no permitió leer la duración. Escríbela manualmente.'}),9500);\n      video.preload='metadata';video.muted=true;video.playsInline=true;\n      video.onloadedmetadata=()=>Number.isFinite(video.duration)&&video.duration>0?\n        finish({seconds:Math.round(video.duration),source:'file'}):finish({seconds:null,reason:'El video no reportó duración finita.'});\n      video.onerror=()=>finish({seconds:null,reason:'No se pueden leer los metadatos de ese video (frecuente con MKV).'});\n      video.src=url;try{video.load()}catch{finish({seconds:null,reason:'Formato no compatible para detección.'})}\n    });\n  }\n  async function probeAndFill(urlEl, durationEl, statusEl, force=false){\n    const raw=urlEl.value.trim();if(!raw){statusEl.textContent='Pega un enlace primero.';return}\n    if(!force&&!hmsOrBlank(durationEl)&&durationEl.dataset.durationSource!=='tmdb_estimate')return;\n    statusEl.textContent='Analizando metadatos del archivo…';\n    const result=await inspectMedia(raw);\n    if(result.seconds){applyDetected(durationEl,statusEl,result.seconds,'file')}\n    else statusEl.textContent='⚠ '+result.reason+' TMDB solo da una duración de referencia.';\n  }\n  function installSingleProbe(buttonId,urlId,durationId,hintId){\n    $(buttonId).onclick=()=>probeAndFill($(urlId),$(durationId),$(hintId),true);\n    $(urlId).addEventListener('change',()=>probeAndFill($(urlId),$(durationId),$(hintId),false));\n  }\n  installSingleProbe('probeChannelDuration','pUrl','pDuration','probeChannelHint');\n  installSingleProbe('probeMovieDuration','vodUrl','vodDuration','probeMovieHint');\n  installSingleProbe('probeEpisodeDuration','vodEpisodeUrl','vodEpisodeDuration','probeEpisodeHint');\n\n  function bulkRow(kind,n=0){\n    const row=document.createElement('article');row.className='bulk-card';row.dataset.kind=kind;\n    const number=kind==='episode'?`<strong>Capítulo ${n}</strong><input type=\"hidden\" class=\"bulk-episode-num\" value=\"${n}\">`:\n      `<strong>${kind==='channel'?'Programa':'Película'} nuevo</strong>`;\n    const type=kind==='channel'?`<label>Tipo<select class=\"bulk-type\"><option value=\"pelicula\">Película</option><option value=\"serie\">Serie / episodio</option><option value=\"documental\">Documental</option><option value=\"otro\">Otro</option></select></label>`:'';\n    const title=kind==='episode'?`<label>Nombre del capítulo<input class=\"bulk-title\" placeholder=\"Episodio ${n}\" value=\"Episodio ${n}\"></label>`:\n      `<label>Título<input class=\"bulk-title\" placeholder=\"Ej. La Pantera Rosa\" maxlength=\"200\"></label>`;\n    const year=kind==='episode'?'':`<label>Año<input class=\"bulk-year\" type=\"number\" min=\"1880\" max=\"2150\" placeholder=\"2026\"></label>`;\n    const genres=kind==='movie'?`<label>Género<select class=\"bulk-genre\">${genreList.map(g=>`<option value=\"${esc(g)}\">${esc(g)}</option>`).join('')}</select></label>`:'';\n    row.innerHTML=`<div class=\"bulk-card-head\">${number}<button type=\"button\" class=\"button ghost bulk-remove\">✕ Quitar</button></div>\n      <div class=\"bulk-fields\">${title}${year}${type}${genres}</div>\n      <label>URL del video<input type=\"url\" class=\"bulk-url\" placeholder=\"https://.../video.mp4\"></label>\n      <div class=\"bulk-fields\"><label>Duración del archivo (HH:MM:SS)<input class=\"bulk-duration\" inputmode=\"numeric\" placeholder=\"Se intentará detectar\"></label>\n      <label>Formato<select class=\"bulk-format\">${bulkFormats}</select></label></div>\n      <div class=\"bulk-fields\"><label>Descripción<input class=\"bulk-desc\" placeholder=\"TMDB completará la descripción\"></label>\n      <label>Póster / imagen<input class=\"bulk-image\" type=\"url\" placeholder=\"https://image.tmdb.org/...\"></label></div>\n      <input type=\"hidden\" class=\"bulk-tmdb-id\"><small class=\"bulk-note\">Pega el enlace y pulsa Detectar, o usa TMDB para completar la ficha.</small>\n      <div class=\"bulk-actions\"><button type=\"button\" class=\"button outline bulk-probe\">⏱ Detectar duración</button><button type=\"button\" class=\"button outline bulk-find\">✧ Ficha TMDB</button></div>`;\n    row.querySelector('.bulk-remove').onclick=()=>row.remove();\n    const urlEl=row.querySelector('.bulk-url'),durEl=row.querySelector('.bulk-duration'),note=row.querySelector('.bulk-note');\n    urlEl.onchange=()=>{row.querySelector('.bulk-format').value=guessVodFormat(urlEl.value);probeAndFill(urlEl,durEl,note,false)};\n    durEl.addEventListener('input',()=>{durEl.dataset.durationSource='manual';});\n    row.querySelector('.bulk-probe').onclick=()=>probeAndFill(urlEl,durEl,note,true);\n    row.querySelector('.bulk-find').onclick=()=>kind==='episode'?metadataEpisodeRow(row):metadataMovieRow(row,kind);\n    if(kind!=='episode')row.querySelector('.bulk-title').addEventListener('change',()=>{if(row.querySelector('.bulk-title').value.trim().length>2)metadataMovieRow(row,kind)});\n    return row;\n  }\n  const movieRows=$('bulkMovieRows'),episodeRows=$('bulkEpRows'),channelRows=$('bulkChannelRows');\n  const addMovie=()=>{movieRows.append(bulkRow('movie'));return movieRows.lastElementChild};\n  const addChannel=()=>{channelRows.append(bulkRow('channel'));return channelRows.lastElementChild};\n  $('bulkMovieAdd').onclick=addMovie;\n  $('bulkChannelAdd').onclick=addChannel;\n  addMovie();addChannel();\n  function normName(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'')\n    .replace(/\\s*\\(\\d{4}\\)\\s*$/,'').replace(/[^a-z0-9]/g,'')}\n  async function metadataMovieRow(row,kind){\n    const nameEl=row.querySelector('.bulk-title'),yearEl=row.querySelector('.bulk-year');\n    const name=nameEl.value.trim(),note=row.querySelector('.bulk-note');\n    if(name.length<2){note.textContent='Escribe el título antes de buscar.';return}\n    note.textContent='Buscando ficha en TMDB…';\n    try{\n      const isTv=kind==='channel'&&row.querySelector('.bulk-type').value==='serie';\n      const data=await request('/api/search?'+new URLSearchParams({q:name,type:isTv?'serie':'pelicula',year:yearEl?.value||''}));\n      const options=data.results||[];let match=options.find(x=>normName(x.title)===normName(name)&&(!yearEl?.value||String(x.year)===String(yearEl.value)));\n      if(!match)match=options.find(x=>normName(x.title)===normName(name));\n      if(!match){note.textContent='No encontré una coincidencia inequívoca en TMDB. Puedes completar la ficha manualmente.';return}\n      const detail=await request('/api/details?'+new URLSearchParams({id:match.id,type:isTv?'tv':'movie'}));\n      nameEl.value=detail.title||name;yearEl.value=detail.year||yearEl.value;\n      row.querySelector('.bulk-desc').value=detail.description||'';\n      row.querySelector('.bulk-image').value=detail.image||'';\n      row.querySelector('.bulk-tmdb-id').value=detail.tmdbId||'';\n      const genre=row.querySelector('.bulk-genre');\n      if(genre){let g=(detail.genres||[]).map(x=>x.name).find(x=>genreList.some(y=>normName(y)===normName(x)));\n        if(g)genre.value=genreList.find(x=>normName(x)===normName(g))||'Otros';}\n      const durationEl=row.querySelector('.bulk-duration');\n      if(hmsOrBlank(durationEl)&&detail.suggestedDurationSeconds)applyDetected(durationEl,note,detail.suggestedDurationSeconds,'tmdb');\n      else note.textContent='Ficha y póster encontrados. Revisa los datos y pega el enlace del video.';\n    }catch(e){note.textContent='Error TMDB: '+e.message}\n  }\n  $('bulkMovieMetadata').onclick=async()=>{const b=$('bulkMovieMetadata');busy(b,true);try{\n    for(const row of [...movieRows.children])await metadataMovieRow(row,'movie');toast('Búsqueda terminada. Revisa la coincidencia y las duraciones.');\n  }finally{busy(b,false)}};\n  $('bulkChannelMetadata').onclick=async()=>{const b=$('bulkChannelMetadata');busy(b,true);try{\n    for(const row of [...channelRows.children])await metadataMovieRow(row,'channel');toast('Búsqueda terminada. Confirma los tiempos antes de emitir.');\n  }finally{busy(b,false)}};\n  function createRangeNumbers(expr){\n    const out=[],seen=new Set();\n    for(const piece of expr.split(',')){\n      const token=piece.trim();if(!token)continue;\n      const m=token.match(/^(\\d{1,3})(?:\\s*-\\s*(\\d{1,3}))?$/);\n      if(!m)throw new Error('Lista incorrecta: usa 1,3,5-8.');\n      const start=Number(m[1]),end=Number(m[2]||m[1]);\n      if(start<1||end>999||end<start)throw new Error('Los capítulos deben estar entre 1 y 999.');\n      if(end-start+1>80)throw new Error('Prepara como máximo 80 capítulos por lote.');\n      for(let n=start;n<=end;n++){if(!seen.has(n)){seen.add(n);out.push(n);}}\n      if(out.length>80)throw new Error('Máximo 80 capítulos por lote; puedes preparar más lotes después.');\n    }\n    if(!out.length)throw new Error('Indica qué capítulos deseas agregar.');\n    return out.sort((a,b)=>a-b);\n  }\n  function buildEpisodeRows(){\n    const series=getSelectedSeries();if(!series){toast('Primero selecciona una serie.',true);return}\n    try{\n      const expr=$('bulkEpNumbers').value.trim();\n      const count=Number($('bulkEpCount').value),start=Number($('bulkEpStart').value);\n      const nums=expr?createRangeNumbers(expr):createRangeNumbers(`${start}-${start+count-1}`);\n      episodeRows.replaceChildren(...nums.map(n=>bulkRow('episode',n)));\n      $('bulkEpMessage').textContent=`${nums.length} capítulos preparados para temporada ${$('bulkEpSeason').value}. Completa las URL y busca los datos en TMDB.`;\n      if(series.tmdbId)fillEpisodeRows();\n    }catch(e){toast(e.message,true)}\n  }\n  $('bulkEpBuild').onclick=buildEpisodeRows;\n  async function linkedSeriesTmdbId(){\n    const s=getSelectedSeries();if(!s)throw new Error('Elige una serie.');\n    if(s.tmdbId)return s.tmdbId;\n    const data=await request('/api/search?'+new URLSearchParams({q:s.Title,type:'serie',year:s.Year||''}));\n    const match=(data.results||[]).find(x=>normName(x.title)===normName(s.Title)&&(!s.Year||String(x.year)===String(s.Year)));\n    if(!match)throw new Error('Esta serie no tiene TMDB ID y no encontré una coincidencia exacta. Puedes escribir los títulos manualmente.');\n    return match.id;\n  }\n  async function fillEpisodeRows(){\n    const rows=[...episodeRows.children];if(!rows.length){toast('Prepara primero los números de capítulos.',true);return}\n    const b=$('bulkEpTmdb');busy(b,true);\n    try{\n      const id=await linkedSeriesTmdbId(),season=$('bulkEpSeason').value;\n      const data=await request('/api/vod/tmdb-season?'+new URLSearchParams({id,season}));\n      let found=0;\n      for(const row of rows){const n=Number(row.querySelector('.bulk-episode-num').value),ep=(data.episodes||[]).find(e=>e.episode===n);\n        if(!ep){row.querySelector('.bulk-note').textContent='Sin ficha TMDB para episodio '+n;continue}\n        found++;\n        row.querySelector('.bulk-title').value=ep.title||'Episodio '+n;\n        row.querySelector('.bulk-desc').value=ep.description||'';\n        row.querySelector('.bulk-image').value=ep.image||getSelectedSeries()?.Logo||'';\n        const durEl=row.querySelector('.bulk-duration'),note=row.querySelector('.bulk-note');\n        if(hmsOrBlank(durEl)&&ep.suggestedDurationSeconds)applyDetected(durEl,note,ep.suggestedDurationSeconds,'tmdb');\n        else note.textContent='Ficha TMDB encontrada: pega el enlace y verifica el tiempo.';\n      }\n      $('bulkEpMessage').textContent=found+' capítulos completados desde TMDB. Las duraciones de TMDB son estimadas.';\n    }catch(e){toast(e.message,true);$('bulkEpMessage').textContent=e.message}\n    finally{busy(b,false)}\n  }\n  $('bulkEpTmdb').onclick=fillEpisodeRows;\n  async function metadataEpisodeRow(row){\n    if(!episodeRows.children.length) return;\n    await fillEpisodeRows();\n  }\n  function bulkItemData(row,kind){\n    const val=className=>row.querySelector('.'+className)?.value?.trim()||'';\n    const time=val('bulk-duration');\n    return {title:val('bulk-title'),year:val('bulk-year'),genre:val('bulk-genre')||'Otros',\n      type:val('bulk-type')||'pelicula',url:val('bulk-url'),streamFormat:val('bulk-format'),\n      duration:asTime(time),durationSource:row.querySelector('.bulk-duration').dataset.durationSource||'manual',\n      description:val('bulk-desc'),image:val('bulk-image'),tmdbId:val('bulk-tmdb-id')||null,\n      ...(kind==='episode'?{season:Number($('bulkEpSeason').value),episode:Number(val('bulk-episode-num'))}:{})};\n  }\n  async function saveBulkRows(kind,rowsEl,endpoint,bodyExtra={}){\n    const rows=[...rowsEl.children];if(!rows.length)throw new Error('Agrega al menos una fila.');\n    const items=rows.map(row=>bulkItemData(row,kind));\n    for(let i=0;i<items.length;i++){\n      const item=items[i];\n      if(!item.url||!/^https?:\\/\\//.test(item.url)||!item.title)throw new Error('Fila '+(i+1)+': falta título o URL de video.');\n      if(kind==='channel'){\n        if(!item.duration||!safeNumber((()=>{const x=String(item.duration).match(/^(\\d+):(\\d\\d):(\\d\\d)$/);return x?Number(x[1])*3600+Number(x[2])*60+Number(x[3]):0})()))\n          throw new Error('Fila '+(i+1)+': el canal 24/7 necesita duración confirmada para sincronizarse.');\n        if(item.durationSource==='tmdb_estimate'&&!confirm('La duración de TMDB en la fila '+(i+1)+' no es exacta. ¿Confirmas que coincide con tu archivo para emitirla 24/7?'))\n          throw new Error('Comprueba la duración antes de guardar en el canal.');\n      }\n    }\n    const result=await request(endpoint,'POST',{...bodyExtra,items});\n    return result;\n  }\n  $('bulkMovieSave').onclick=async()=>{\n    const b=$('bulkMovieSave');busy(b,true);\n    try{\n      const result=await saveBulkRows('movie',movieRows,'/api/vod/bulk/movies',{expectedRevision:vodState.data.revision});\n      $('bulkMovieMessage').textContent=`${result.created} películas guardadas, ${result.skipped} duplicadas omitidas. ${result.pendingDuration} sin duración verificada.`;\n      await refreshVod();movieRows.replaceChildren(addMovie());toast('Lote guardado, sin sustituir películas anteriores.');\n    }catch(e){$('bulkMovieMessage').textContent=e.message;toast(e.message,true)}finally{busy(b,false)}\n  };\n  $('bulkEpSave').onclick=async()=>{\n    const s=getSelectedSeries();if(!s){toast('Selecciona una serie.',true);return}\n    const b=$('bulkEpSave');busy(b,true);\n    try{\n      const result=await saveBulkRows('episode',episodeRows,'/api/vod/bulk/episodes',{seriesId:s.id,expectedRevision:vodState.data.revision});\n      $('bulkEpMessage').textContent=`${result.created} capítulos guardados, ${result.skipped} existentes omitidos. ${result.pendingDuration} pendientes de medir.`;\n      episodeRows.replaceChildren();await refreshVod();toast('Capítulos agregados a la misma serie.');\n    }catch(e){$('bulkEpMessage').textContent=e.message;toast(e.message,true)}finally{busy(b,false)}\n  };\n  $('bulkChannelSave').onclick=async()=>{\n    if(!state.selected){toast('Selecciona un canal.',true);return}\n    const b=$('bulkChannelSave');busy(b,true);\n    try{\n      const result=await saveBulkRows('channel',channelRows,'/api/channels/'+state.selected+'/programs/bulk');\n      $('bulkChannelMessage').textContent=`${result.created} videos añadidos al canal; ${result.skipped} repetidos omitidos.`;\n      channelRows.replaceChildren(addChannel());await refresh(state.selected);toast('Programación del canal actualizada.');\n    }catch(e){$('bulkChannelMessage').textContent=e.message;toast(e.message,true)}finally{busy(b,false)}\n  };\n  $('programForm').addEventListener('submit',ev=>{\n    if($('pDuration').dataset.durationSource==='tmdb_estimate'&&\n      !confirm('TMDB solo conoce la duración de referencia. ¿Comprobaste que coincide con tu VIDEO para no desajustar este canal 24/7?')){\n      ev.preventDefault();ev.stopImmediatePropagation();\n    }\n  },true);\n  // Duración sugerida por TMDB es referencia, nunca se etiqueta automáticamente como exacta.\n  $('bulkMovieArea').hidden=false;\n\n\n  // FÉNIX TV STUDIO 2.3.6: búsqueda integrada en las fichas, conservando botones originales.\n  // No se guardan cambios hasta que el administrador utilice el formulario habitual.\n  function installExtraMetadata(buttonAnchor,queryId,yearId,typeFn,fieldIds){\n    const near=$(buttonAnchor);if(!near)return;\n    const button=document.createElement('button');button.type='button';button.className='lookup fenix-metadata-lookup';\n    button.textContent=state.omdbEnabled?'🌎 Buscar ficha en 4 fuentes (TMDB + TVmaze + Wikidata + OMDb)':'🌎 Buscar ficha en 3 fuentes · OMDb requiere clave';\n    const results=document.createElement('div');results.className='search-results';results.hidden=true;\n    const notice=document.createElement('small');notice.className='duration-hint';\n    notice.innerHTML='Español de México/Latinoamérica. OMDb solo aporta director, reparto, calificación y datos generales. No se copian sinopsis inglesas ni de España. <a href=\"https://www.tvmaze.com\" target=\"_blank\" rel=\"noopener noreferrer\">Datos TVmaze (CC BY-SA)</a> · <a href=\"https://www.wikidata.org\" target=\"_blank\" rel=\"noopener noreferrer\">Wikidata (CC0)</a>.';\n    near.insertAdjacentElement('afterend',notice);\n    near.insertAdjacentElement('afterend',results);\n    near.insertAdjacentElement('afterend',button);\n    button.onclick=async()=>{\n      const q=$(queryId).value.trim();if(q.length<2){toast('Escribe el título primero.',true);return}\n      busy(button,true);results.hidden=false;results.textContent='Buscando en varias fuentes…';\n      try{\n        const r=await request('/api/metadata/search?'+new URLSearchParams({q,type:typeFn(),year:$(yearId).value}));\n        const opts=r.results||[];\n        results.innerHTML=opts.length?opts.map((m,i)=>\n          `<button type=\"button\" class=\"search-choice\" data-extra=\"${i}\">${m.image?`<img src=\"${esc(m.image)}\" alt=\"\" />`:''}`+\n          `<span><strong>${esc(m.title)}</strong><small>${esc(m.sourceName)} · ${esc(m.year||'Año sin confirmar')} · ${esc(m.hint||'')}</small></span></button>`\n        ).join(''):'<div class=\"vod-empty\">No hay coincidencias. Puedes completar la ficha manualmente.</div>';\n        if(r.warnings?.length){const small=document.createElement('p');small.className='duration-hint';small.textContent='Fuentes no disponibles: '+r.warnings.join(' · ');results.append(small)}\n        results.querySelectorAll('[data-extra]').forEach(b=>b.onclick=async()=>{\n          const item=opts[Number(b.dataset.extra)]; b.disabled=true;\n          try{\n            const d=await request('/api/metadata/detail?'+new URLSearchParams({source:item.source,id:item.id,type:item.type}));\n            // Solo se usan títulos y sinopsis cuando hay traducción LATAM verificable.\n            if(d.hasLatamTitle&&d.title)$(fieldIds.title).value=d.title;\n            if(d.hasLatamDescription&&d.description&&!$(fieldIds.desc).value.trim())$(fieldIds.desc).value=d.description;\n            if(d.year&&!$(fieldIds.year).value)$(fieldIds.year).value=d.year;\n            if(d.image&&!$(fieldIds.poster).value.trim())$(fieldIds.poster).value=d.image;\n            if(fieldIds.tmdb&&d.tmdbId)$(fieldIds.tmdb).value=String(d.tmdbId);\n            if(fieldIds.director){\n              for(const [field,key] of [['director','director'],['cast','actors'],['imdbRating','imdbRating'],['imdbId','imdbId'],['country','country'],['awards','awards']]){\n                if(fieldIds[field] && d[key] && !$(fieldIds[field]).value.trim())$(fieldIds[field]).value=String(d[key]);\n              }\n              if(d.source==='OMDb')$('fenixExtraMetadata').open=true;\n            }\n\n            if(fieldIds.duration&&d.suggestedDurationSeconds&&!$(fieldIds.duration).value.trim()){\n              $(fieldIds.duration).value=duration(d.suggestedDurationSeconds);\n              $(fieldIds.duration).dataset.durationSource='tmdb_estimate';\n            }\n            if(fieldIds.genre&&Array.isArray(d.genres)&&d.genres.length){\n              const mapped=d.genres.map(g=>tmdbGenreNames[g.id]).find(x=>x&&x!=='Otros');\n              if(mapped&&$(fieldIds.genre).value==='Otros')$(fieldIds.genre).value=mapped;\n            }\n            results.hidden=true;\n            toast('Ficha complementada desde '+d.source+'. '+(d.hasLatamDescription?'Sinopsis latinoamericana disponible.':'Sin sinopsis latinoamericana: se conserva la actual.'));\n          }catch(e){toast('No se pudo consultar la ficha: '+e.message,true)}finally{b.disabled=false}\n        });\n      }catch(e){results.textContent=e.message;toast(e.message,true)}finally{busy(button,false)}\n    };\n  }\n  installExtraMetadata('vodTmdb','vodTitle','vodYear',()=>vodState.mode==='series'?'serie':'pelicula',{\n    title:'vodTitle',year:'vodYear',desc:'vodDescription',poster:'vodPoster',tmdb:'vodTmdbId',genre:'vodGenre',duration:'vodDuration',director:'vodDirector',cast:'vodCast',imdbRating:'vodImdbRating',imdbId:'vodImdbId',country:'vodCountry',awards:'vodAwards'});\n  installExtraMetadata('searchMetadata','pTitle','pYear',()=>$('pType').value==='serie'?'serie':'pelicula',{\n    title:'pTitle',year:'pYear',desc:'pDescription',poster:'pImage',duration:'pDuration'});\n\n\n  // STUDIO 2.3.7 · Atajos y búsqueda transversal con el catálogo ya cargado.\n  const quickInput=$('fenixQuickSearch'),quickResults=$('fenixQuickResults');\n  let quickTimer=null;\n  const safeFold=v=>String(v||'').toLocaleLowerCase('es').normalize('NFD').replace(/[\\u0300-\\u036f]/g,'');\n  const closeQuick=()=>{quickResults.hidden=true;quickInput.setAttribute('aria-expanded','false')};\n  async function ensureQuickData(){if(!vodState.loaded)await refreshVod()}\n  const quickMatches=()=>{\n    const q=safeFold(quickInput.value.trim());if(q.length<2)return [];\n    const all=[...(vodState.data.movies||[]).map(x=>({...x,_kind:'movies'})),...(vodState.data.series||[]).map(x=>({...x,_kind:'series'}))];\n    const tokens=q.split(/\\s+/).filter(Boolean);\n    return all.filter(x=>tokens.every(t=>safeFold(x.Title).includes(t)))\n      .sort((a,b)=>Number(safeFold(b.Title).startsWith(q))-Number(safeFold(a.Title).startsWith(q)))\n      .slice(0,12);\n  };\n  function drawQuick(){\n    const list=quickMatches();\n    if(quickInput.value.trim().length<2){closeQuick();return}\n    quickResults.innerHTML=list.length?list.map((item,i)=>`<button type=\"button\" role=\"option\" class=\"fenix-quick-choice\" data-quick=\"${i}\"><span>${item._kind==='series'?'▤':'🎬'}</span><div><strong>${esc(item.Title)}</strong><small>${item._kind==='series'?'Serie · Capítulos':'Película · Editar'}${item.Year?' · '+esc(item.Year):''}</small></div></button>`).join(''):'<div class=\"fenix-quick-empty\">Sin coincidencias. Puedes agregar un título nuevo usando los botones de arriba.</div>';\n    quickResults.hidden=false;quickInput.setAttribute('aria-expanded','true');\n    quickResults.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>{\n      const it=list[Number(b.dataset.quick)];closeQuick();quickInput.value='';showTab('vod');\n      if(vodState.mode!==(it._kind))switchVodMode(it._kind);\n      if(it._kind==='series')openSeries(it.id);\n      else editVod(it.id);\n    });\n  }\n  quickInput.oninput=()=>{clearTimeout(quickTimer);quickTimer=setTimeout(async()=>{\n    try{await ensureQuickData();drawQuick()}catch(e){toast('No pude cargar la biblioteca: '+e.message,true)}\n  },120)};\n  quickInput.onfocus=()=>{if(quickInput.value.trim().length>=2)drawQuick()};\n  quickInput.onkeydown=e=>{if(e.key==='Escape'){closeQuick();quickInput.blur()}else if(e.key==='Enter'&&!quickResults.hidden){const first=quickResults.querySelector('[data-quick]');if(first){e.preventDefault();first.click()}}};\n  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!$('app').hidden){e.preventDefault();quickInput.focus();quickInput.select()}});\n  document.addEventListener('click',e=>{if(!e.target.closest('.fenix-command-search'))closeQuick()});\n  const beginContent=async kind=>{\n    try{await ensureQuickData();showTab('vod');switchVodMode(kind);resetVodForm();\n      $('vodEditorTitle').scrollIntoView({behavior:'smooth',block:'start'});$('vodTitle').focus({preventScroll:true});\n    }catch(e){toast(e.message,true)}\n  };\n  $('fenixNewMovie').onclick=()=>beginContent('movies');\n  $('fenixNewSeries').onclick=()=>beginContent('series');\n  $('fenixNewChannel').onclick=()=>{showTab('channels');channelDialog(false)};\n\n  // Se consultan respaldos solamente después del inicio de sesión.\n  $('tabVod').addEventListener('click',()=>refreshVodBackups());\n  if(state.token) login(state.token).catch(e=>{toast('Vuelve a iniciar sesión: '+e.message,true);sessionStorage.removeItem('fenixToken');state.token='';showApp(false);});\n\n  // FÉNIX STUDIO 2.3.8 — anuncio remoto de bienvenida.\n  let promoLoaded=false;\n  const promoMessage=(msg,error=false)=>{$('promoStatus').textContent=(error?'⚠ ':'')+msg;toast(msg,error)};\n  const refreshPromoPreview=()=>{\n    const im=$('promoPreviewImage'),url=$('promoImageUrl').value.trim(),audio=$('promoPreviewAudio');\n    im.hidden=!url;\n    if(url&&im.getAttribute('src')!==url)im.src=url;\n    if(!url)im.removeAttribute('src');\n    $('promoPreviewTitle').textContent=$('promoTitle').value.trim()||'Fénix TV';\n    $('promoPreviewMessage').textContent=$('promoMessage').value.trim();\n    const aurl=$('promoAudioUrl').value.trim();\n    if(aurl&&audio.getAttribute('src')!==aurl){audio.src=aurl;audio.load();}\n    if(!aurl){audio.removeAttribute('src');audio.load();}\n  };\n  async function loadPromo(){\n    const config=await request('/api/promo');\n    promoLoaded=true;\n    $('promoEnabled').checked=config.enabled!==false;\n    $('promoTitle').value=config.title||'';\n    $('promoMessage').value=config.message||'';\n    $('promoImageUrl').value=config.imageUrl||'';\n    $('promoAudioUrl').value=config.audioUrl||'';\n    $('promoDuration').value=config.durationSeconds||20;\n    $('promoSkipAfter').value=config.skipAfterSeconds??3;\n    refreshPromoPreview();\n    $('promoStatus').textContent=config.mode==='legacy'?'Anuncio antiguo de Resident Evil activo hasta que publiques una campaña nueva.':'Configuración sincronizada con Cloudflare D1.';\n  }\n  async function uploadPromoFile(kind){\n    const picker=$(kind==='image'?'promoImageFile':'promoAudioFile'),file=picker.files?.[0];\n    if(!file){promoMessage('Selecciona primero '+(kind==='image'?'una imagen':'un audio')+'.',true);return}\n    const limit=kind==='image'?5_000_000:12_000_000;\n    if(file.size>limit){promoMessage('El archivo excede el máximo '+Math.round(limit/1e6)+' MB.',true);return}\n    const b=$(kind==='image'?'promoUploadImage':'promoUploadAudio');busy(b,true);\n    try{\n      $('promoStatus').textContent='Subiendo archivo a R2…';\n      const res=await fetch('/api/promo/upload?kind='+encodeURIComponent(kind),{method:'POST',headers:{authorization:'Bearer '+state.token,'content-type':file.type||'application/octet-stream'},body:file,cache:'no-store'});\n      const data=await res.json();if(!res.ok)throw new Error(data.error||'Error de subida');\n      $(kind==='image'?'promoImageUrl':'promoAudioUrl').value=data.url;\n      refreshPromoPreview();promoMessage('Archivo subido. Pulsa Publicar anuncio para activarlo en la LG.');\n    }catch(e){promoMessage('No fue posible subir: '+e.message,true)}finally{busy(b,false)}\n  }\n  $('tabPromo').onclick=()=>showTab('promo');\n  $('tabAppearance').onclick=()=>showTab('appearance');\n  $('promoUploadImage').onclick=()=>uploadPromoFile('image');\n  $('promoUploadAudio').onclick=()=>uploadPromoFile('audio');\n  ['promoTitle','promoMessage','promoImageUrl','promoAudioUrl'].forEach(id=>$(id).addEventListener('input',refreshPromoPreview));\n  $('promoReload').onclick=()=>loadPromo().catch(e=>promoMessage(e.message,true));\n  $('promoSave').onclick=async()=>{\n    const enabled=$('promoEnabled').checked, imageUrl=$('promoImageUrl').value.trim(),audioUrl=$('promoAudioUrl').value.trim();\n    const durationSeconds=Number($('promoDuration').value),skipAfterSeconds=Number($('promoSkipAfter').value);\n    if(enabled&&!imageUrl){promoMessage('Para publicar un anuncio activo, añade la imagen.',true);return}\n    if(!Number.isInteger(durationSeconds)||durationSeconds<5||durationSeconds>60||!Number.isInteger(skipAfterSeconds)||skipAfterSeconds<0||skipAfterSeconds>Math.min(durationSeconds,30)){\n      promoMessage('Revisa la duración (5–60 s) y el tiempo de omisión.',true);return\n    }\n    if(!confirm('¿Publicar esta campaña de bienvenida? Reemplazará el anuncio de Resident Evil en las LG actualizadas.'))return;\n    const b=$('promoSave');busy(b,true);\n    try{\n      await request('/api/promo','PUT',{enabled,title:$('promoTitle').value.trim(),message:$('promoMessage').value.trim(),imageUrl,audioUrl,durationSeconds,skipAfterSeconds});\n      await loadPromo();promoMessage('✔ Anuncio publicado. Las LG con la versión actualizada lo descargarán al iniciar.');\n    }catch(e){promoMessage(e.message,true)}finally{busy(b,false)}\n  };\n\n  // STUDIO 2.4.0: publicación de temas para todas las LG, sin alterar el reproductor.\n  const APPEARANCE_PRESETS=[\n   {id:'auto',name:'Temporada automática',tag:'Se ajusta según la fecha',symbol:'✦',bg:'#132738',accent:'#5de2ca',glow:'#50a5ff'},\n   {id:'original',name:'FÉNIX Cinema',tag:'Oscuro · turquesa y azul',symbol:'F',bg:'#111c39',accent:'#34d8ff',glow:'#12d7bf'},\n   {id:'halloween',name:'Halloween',tag:'Naranja · violeta · noche',symbol:'☾',bg:'#26172f',accent:'#f5a23e',glow:'#8c42db'},\n   {id:'dayofdead',name:'Día de Muertos',tag:'Cempasúchil · turquesa',symbol:'✿',bg:'#173134',accent:'#ffc14b',glow:'#00c4b7'},\n   {id:'holidays',name:'Navidad',tag:'Verde bosque · rojo coral',symbol:'✧',bg:'#15362e',accent:'#e76561',glow:'#36cf9e'},\n   {id:'newyear',name:'Año Nuevo',tag:'Oro · plata · celebración',symbol:'✦',bg:'#1c2338',accent:'#ffd175',glow:'#9dbded'},\n   {id:'valentine',name:'San Valentín',tag:'Rosa · rubí',symbol:'♥',bg:'#301c35',accent:'#ff81af',glow:'#df4b7b'},\n   {id:'patrias',name:'Fiestas Patrias',tag:'Esmeralda · rojo · blanco',symbol:'★',bg:'#163731',accent:'#42d0a2',glow:'#dc5252'},\n   {id:'winter',name:'Invierno',tag:'Azul hielo · plata',symbol:'❄',bg:'#1b3045',accent:'#b4edff',glow:'#6baadf'},\n   {id:'spring',name:'Primavera',tag:'Verde suave · flores',symbol:'✿',bg:'#1a3531',accent:'#91edbd',glow:'#ec98c4'},\n   {id:'summer',name:'Verano',tag:'Turquesa · atardecer',symbol:'☀',bg:'#173847',accent:'#ffc67a',glow:'#40cccd'},\n   {id:'autumn',name:'Otoño',tag:'Cobre · ámbar',symbol:'◆',bg:'#322623',accent:'#eca05a',glow:'#c56543'}\n  ];\n  let appearanceMode='auto',appearanceLoaded=false;\n  function appearanceMessage(msg,error=false){$('appearanceStatus').textContent=msg;if(error)toast(msg,true);}\n  function drawAppearance(){\n    const grid=$('appearanceChoices');\n    grid.innerHTML=APPEARANCE_PRESETS.map(p=>'<button type=\"button\" class=\"appearance-theme '+(p.id===appearanceMode?'selected':'')+'\" data-preset=\"'+p.id+'\" style=\"--at-bg:'+p.bg+';--at-accent:'+p.accent+';--at-glow:'+p.glow+'\"><div class=\"appearance-scene\"><span class=\"appearance-moon\"></span><span class=\"appearance-symbol\">'+p.symbol+'</span></div><strong>'+p.name+'</strong><small>'+p.tag+'</small></button>').join('');\n    grid.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{appearanceMode=b.dataset.preset;drawAppearance();appearanceMessage('Vista previa seleccionada. Pulsa Publicar para actualizar las LG.');});\n  }\n  async function loadAppearance(){\n    const x=await request('/api/appearance');appearanceMode=x.mode||'auto';\n    $('appearanceIntensity').value=x.intensity||'cinematic';\n    $('appearanceMotion').value=x.motion||'soft';\n    appearanceLoaded=true;drawAppearance();\n    $('appearancePublished').textContent=x.updatedAt?'Publicado: '+new Date(x.updatedAt).toLocaleString('es-MX'):'Sin publicar';\n    appearanceMessage('Tema actual cargado desde Cloudflare D1.');\n  }\n  $('appearanceRefresh').onclick=()=>loadAppearance().catch(e=>appearanceMessage(e.message,true));\n  $('appearanceSave').onclick=async()=>{\n    const b=$('appearanceSave');busy(b,true);\n    try{\n      const x=await request('/api/appearance','PUT',{mode:appearanceMode,intensity:$('appearanceIntensity').value,motion:$('appearanceMotion').value});\n      $('appearancePublished').textContent='Publicado: '+new Date(x.updatedAt).toLocaleString('es-MX');\n      appearanceMessage('Publicado: las LG actualizadas recibirán el diseño sin reiniciar ni perder foco.');toast('Apariencia publicada para las LG.');\n    }catch(e){appearanceMessage(e.message,true)}finally{busy(b,false)}\n  };\n\n})();\n"}};

// STUDIO 2.4.0: preferencias de apariencia centralizadas en D1.
const APPEARANCE_MODES=new Set(['auto','original','halloween','dayofdead','holidays','newyear','valentine','patrias','winter','spring','summer','autumn']);
const defaultAppearance=()=>({mode:'auto',intensity:'cinematic',motion:'soft',revision:'initial',updatedAt:''});
async function readAppearance(env){
  if(!env.DB)throw err('La base D1 no está conectada.',503);
  await readConfig(env); // inicializa cms_config cuando el panel acaba de instalarse.
  const r=await env.DB.prepare('SELECT content FROM cms_config WHERE key=?').bind('appearance').first();
  if(!r)return defaultAppearance();
  try{const x=JSON.parse(r.content);return {...defaultAppearance(),...x};}catch{throw err('La apariencia guardada no se pudo leer.',500);}
}
async function saveAppearance(env,data){
  const mode=clean(data.mode,30),intensity=clean(data.intensity,30),motion=clean(data.motion,30);
  if(!APPEARANCE_MODES.has(mode))throw err('Tema desconocido.',422);
  if(!['subtle','cinematic'].includes(intensity))throw err('Intensidad desconocida.',422);
  if(!['soft','dynamic','reduced'].includes(motion))throw err('Movimiento desconocido.',422);
  const out={mode,intensity,motion,revision:'appearance-'+crypto.randomUUID(),updatedAt:new Date().toISOString()};
  await readConfig(env);
  await env.DB.prepare('INSERT INTO cms_config(key,content,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at')
    .bind('appearance',JSON.stringify(out),out.updatedAt).run();
  return out;
}

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store, max-age=0',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'no-referrer',
  'access-control-allow-origin': '*', // Solamente sobre endpoints JSON de lectura pública.
};
const emptyConfig = () => ({
  schemaVersion: 1, configVersion: 'initial', updatedAt: new Date().toISOString(), channels: {},
});
const slug = s => String(s || '').toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const clean = (v, max=400) => String(v ?? '').trim().slice(0, max);
const err = (message, status=400) => Object.assign(new Error(message), { status });
const isUrl = (s) => {
  try { const u = new URL(s); return ['http:', 'https:'].includes(u.protocol) && !!u.hostname; }
  catch { return false; }
};
const ensureUrl = (s, field, optional=false) => {
  const v = clean(s, 4096);
  if (!v && optional) return '';
  if (!isUrl(v)) throw err(`${field}: proporciona un URL http(s) válido.`);
  return v;
};
const json = (data, status=200, publicRead=false) => new Response(JSON.stringify(data), {
  status,
  headers: publicRead ? JSON_HEADERS : {
    ...JSON_HEADERS,
    'access-control-allow-origin': 'null',
  },
});
const noStore = response => {
  const headers = new Headers(response.headers);
  headers.set('cache-control', 'no-store');
  headers.set('x-content-type-options', 'nosniff');
  headers.set('referrer-policy', 'no-referrer');
  headers.set('x-frame-options', 'DENY');
  headers.set('content-security-policy', "default-src 'self'; img-src 'self' https: data:; style-src 'self'; script-src 'self'; connect-src 'self'; media-src https: blob:; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};
async function checkToken(request, env) {
  if (!env.ADMIN_TOKEN || clean(env.ADMIN_TOKEN).length < 24) throw err('Configura ADMIN_TOKEN de al menos 24 caracteres en Cloudflare.', 503);
  const provided = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!provided) throw err('Inicia sesión para continuar.', 401);
  // Hashes de longitud fija para evitar comparación con fugas por prefijo.
  const hash = async val => new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val)));
  const a = await hash(provided), b = await hash(env.ADMIN_TOKEN);
  let diff = 0;
  for (let i=0;i<a.length;i++) diff |= a[i] ^ b[i];
  if (diff !== 0) throw err('Clave de administración incorrecta.', 401);
}
async function parseBody(request) {
  if (Number(request.headers.get('content-length') || '0') > 4_000_000) throw err('Archivo demasiado grande.', 413);
  let obj;
  try { obj = await request.json(); } catch { throw err('El cuerpo debe ser JSON.'); }
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw err('JSON inválido.');
  return obj;
}
async function readConfig(env) {
  if (!env.DB) throw err('Falta conectar la base D1 como DB.', 503);
  let row;
  try {
    row = await env.DB.prepare('SELECT content FROM cms_config WHERE key = ?').bind('channels').first();
  } catch (e) {
    // Primer uso: crear la tabla automáticamente para instalar desde el teléfono.
    if (!/no such table|SQLITE_ERROR/i.test(String(e?.message || e))) throw e;
    await env.DB.prepare('CREATE TABLE IF NOT EXISTS cms_config (key TEXT PRIMARY KEY NOT NULL, content TEXT NOT NULL, updated_at TEXT NOT NULL)').run();
    row = await env.DB.prepare('SELECT content FROM cms_config WHERE key = ?').bind('channels').first();
  }
  if (!row) return emptyConfig();
  try { return JSON.parse(row.content); } catch { throw err('No se pudo leer la configuración guardada.', 500); }
}
function validateConfig(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) throw err('Configuración inválida.');
  if (!config.channels || typeof config.channels !== 'object' || Array.isArray(config.channels)) throw err('channels debe ser un objeto JSON.');
  if (Object.keys(config.channels).length > 120) throw err('Demasiados canales para este panel (máximo 120).');
  for (const [key, channel] of Object.entries(config.channels)) {
    if (!/^[a-z0-9-]+$/.test(key)) throw err(`Clave inválida: ${key}`);
    if (!channel || typeof channel !== 'object' || Array.isArray(channel)) throw err(`Canal inválido: ${key}`);
    if (!Array.isArray(channel.programs) || channel.programs.length > 1500) throw err(`Programas inválidos en ${key}.`);
    if (channel.logo) ensureUrl(channel.logo, 'Logo');
    if (channel.channelBugUrl) ensureUrl(channel.channelBugUrl, 'Logo en reproducción');
    if (channel.commercial?.url) ensureUrl(channel.commercial.url, 'Comercial');
    if (channel.commercial?.spots !== undefined) {
      if (!Array.isArray(channel.commercial.spots) || channel.commercial.spots.length > 12)
        throw err(`Lista de anuncios inválida en ${key}.`);
      const spots=channel.commercial.spots;
      for(const spot of spots){
        ensureUrl(spot.url,'Anuncio');
        if(!['mp4','mkv','hls'].includes(spot.streamFormat) ||
           !Number.isInteger(Number(spot.durationSeconds)) || Number(spot.durationSeconds)<1 || Number(spot.durationSeconds)>1800)
          throw err(`Anuncio inválido en ${key}.`);
      }
      if (channel.commercial.enabled && channel.commercial.scheduleMode==='broadcast') {
        const interval=Number(channel.commercial.intervalSeconds);
        const length=spots.reduce((n,s)=>n+Number(s.durationSeconds),0);
        if (!spots.length || !Number.isSafeInteger(interval) || interval<300 || interval>10800 || length>=interval)
          throw err(`La tanda de anuncios de ${key} debe tener enlaces y durar menos que su intervalo.`);
      }
    }
    const seen = new Set();
    for (const program of channel.programs) {
      if (!program || typeof program !== 'object') throw err(`Programa inválido en ${key}`);
      if (!program.id || seen.has(program.id)) throw err(`ID duplicado o vacío en ${key}`);
      seen.add(program.id);
      ensureUrl(program.url, 'Video');
      if (program.image) ensureUrl(program.image, 'Imagen del programa');
      if (!['mp4','mkv','hls'].includes(program.streamFormat)) throw err(`Formato inválido en ${program.id}`);
      if (!Number.isFinite(+program.durationSeconds) || (+program.durationSeconds <= 0 && program.streamFormat !== 'hls')) throw err(`Duración inválida en ${program.id}`);
    }
  }
  return config;
}
async function saveConfig(env, value) {
  const config = structuredClone(value);
  validateConfig(config);
  config.schemaVersion = 1;
  config.updatedAt = new Date().toISOString();
  config.configVersion = `panel-${Date.now()}`;
  await env.DB.prepare(`INSERT INTO cms_config (key,content,updated_at) VALUES (?,?,?)
    ON CONFLICT(key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at`)
    .bind('channels', JSON.stringify(config), config.updatedAt).run();
  return config;
}
function commercialFields(input, prior={}) {
  if(!input || typeof input!=='object' || Array.isArray(input))throw err('Configuración publicitaria inválida.');
  const spots=Array.isArray(input.spots)?input.spots:[];
  if(spots.length>12)throw err('Máximo 12 anuncios consecutivos por canal.');
  const intervalSeconds=Number(input.intervalSeconds);
  if(!Number.isSafeInteger(intervalSeconds)||intervalSeconds<300||intervalSeconds>10800)
    throw err('El intervalo publicitario debe estar entre 5 y 180 minutos.');
  const items=spots.map((spot,i)=>{
    const url=ensureUrl(spot.url,'URL de anuncio '+(i+1));
    const duration=Number(spot.durationSeconds);
    const streamFormat=clean(spot.streamFormat||'mp4',8).toLowerCase();
    if(!Number.isSafeInteger(duration)||duration<1||duration>1800)throw err('Duración inválida en anuncio '+(i+1)+'.');
    if(!['mp4','mkv','hls'].includes(streamFormat))throw err('Formato inválido en anuncio '+(i+1)+'.');
    return {url,streamFormat,durationSeconds:duration};
  });
  const enabled=Boolean(input.enabled);
  if(enabled && !items.length)throw err('Activa la publicidad solamente si añadiste anuncios.');
  const total=items.reduce((n,s)=>n+s.durationSeconds,0);
  if(enabled && total>=intervalSeconds)throw err('La tanda de anuncios dura tanto como el intervalo o más.');
  const first=items[0];
  return {...prior,enabled,intervalSeconds,spots:items,scheduleMode:'broadcast',
    url:first?.url||'',streamFormat:first?.streamFormat||'mp4',durationSeconds:first?.durationSeconds||0,
    betweenPrograms:false};
}
function channelFields(body, prev={}) {
  const name = clean(body.name, 100);
  if (!name) throw err('Escribe el nombre del canal.');
  const logo = ensureUrl(body.logo, 'Logo del canal', true);
  const epoch = Number(body.epoch ?? prev.epoch ?? Math.floor(Date.now()/1000));
  if (!(epoch > 0)) throw err('Fecha de inicio de canal inválida.');
  // El valor solo cambia al editar el canal. Para datos antiguos se conserva el existente.
  const bugScale = Number(body.channelBugScale ?? prev.channelBugScale ?? 1.4);
  if (!Number.isFinite(bugScale) || bugScale < 0.6 || bugScale > 3.0)
    throw err('El tamaño del logo debe estar entre 0.60 y 3.00.');
  return {
    ...prev,
    name,
    description: clean(body.description || 'Canal propio de Fénix TV 24/7.', 300),
    logo,
    // Al modificar solo la escala conservamos el logo superpuesto previo.
    channelBugUrl: logo === clean(prev.logo, 4096) && prev.channelBugUrl ? prev.channelBugUrl : logo,
    channelBugOpacity: Number(prev.channelBugOpacity ?? 0.88),
    channelBugScale: bugScale,
    channelBugAnimation: prev.channelBugAnimation ?? true,
    channelBugAnimationIntervalSeconds: Number(prev.channelBugAnimationIntervalSeconds ?? 420),
    id: clean(prev.id, 150) || `fenix-${slug(name)}`,
    categoryKey: 'fenix', categoryTitle: 'Canales Fénix',
    specialKey: prev.specialKey || slug(name),
    playerStyle: prev.playerStyle || 'generic247',
    playerTitleMode: 'channelOnly',
    epoch,
    videoAspectRatio: prev.videoAspectRatio || '16:9',
    programOverlay: prev.programOverlay ?? true,
    queueHorizonSeconds: prev.queueHorizonSeconds || 172800,
    commercial: body.commercial === undefined ? (prev.commercial || { enabled:false, url:'', durationSeconds:0, intervalSeconds:900, protectStartSeconds:60, protectEndSeconds:60, betweenPrograms:false }) : commercialFields(body.commercial,prev.commercial||{}),
    programs: prev.programs || [],
    // Los nuevos canales sin contenido son borradores y no bloquean el Worker lineal.
    enabled: prev.enabled ?? false,
  };
}
function durationSeconds(value) {
  if (typeof value === 'number' && Number.isInteger(value) && value > 0) return value;
  const s = clean(value, 32);
  if (/^\d+$/.test(s)) return Number(s);
  const match = s.match(/^(\d{1,3}):(\d{2}):(\d{2})$/);
  if (!match || Number(match[2]) > 59 || Number(match[3]) > 59) throw err('Duración requerida en hh:mm:ss (ej. 01:34:25).');
  const sum = (+match[1] * 3600) + (+match[2] * 60) + (+match[3]);
  if (!sum) throw err('La duración debe ser mayor que cero.');
  return sum;
}
function programFields(body, prev={}, items=[]) {
  const title = clean(body.title, 220);
  if (!title) throw err('Escribe el título del programa.');
  const type = clean(body.type || 'pelicula', 30);
  if (!['pelicula','serie','documental','otro'].includes(type)) throw err('Tipo de contenido inválido.');
  const url = ensureUrl(body.url, 'Video');
  const streamFormat = clean(body.streamFormat || (url.split('?')[0].toLowerCase().endsWith('.m3u8') ? 'hls' : url.split('?')[0].toLowerCase().endsWith('.mkv') ? 'mkv' : 'mp4'), 10);
  if (!['mp4','mkv','hls'].includes(streamFormat)) throw err('Formato debe ser MP4, MKV o HLS.');
  const year = body.year ? Number(body.year) : null;
  if (year && (!Number.isInteger(year) || year < 1880 || year > 2150)) throw err('Año inválido.');
  const image = ensureUrl(body.image, 'Imagen del programa', true);
  const id = prev.id || `${slug(title) || 'programa'}-${Date.now().toString(36)}`;
  if (!prev.id && items.some(p => p.id === id)) throw err('ID de programa duplicado.');
  return {
    ...prev, id, title, description: clean(body.description || title, 800), type,
    url, streamFormat, durationSeconds: durationSeconds(body.durationSeconds || body.duration),
    aspectRatio: clean(body.aspectRatio || '16:9', 10), enabled: body.enabled !== false,
    ...(year ? {year} : {}), ...(image ? {image} : {}),
  };
}
async function tmdb(env, path, search) {
  if (!env.TMDB_TOKEN && !env.TMDB_API_KEY) throw err('Para autocompletar fichas configura TMDB_TOKEN en Cloudflare. Puedes seguir añadiendo contenido manualmente.', 503);
  const u = new URL('https://api.themoviedb.org/3/' + path);
  for (const [k,v] of Object.entries(search)) if (v) u.searchParams.set(k, String(v));
  u.searchParams.set('language', 'es-MX');
  if (env.TMDB_API_KEY && !env.TMDB_TOKEN) u.searchParams.set('api_key', env.TMDB_API_KEY);
  const headers = {Accept:'application/json'};
  if (env.TMDB_TOKEN) headers.Authorization='Bearer '+env.TMDB_TOKEN;
  const res = await fetch(u.toString(), {headers});
  if (!res.ok) throw err('TMDB no respondió correctamente (HTTP ' + res.status + ').', 502);
  return res.json();
}
const posterUrl = path => path ? `https://image.tmdb.org/t/p/w500${path}` : '';



// STUDIO 2.3.7: OMDb opcional, exclusivamente datos auxiliares, licencia CC BY-NC.
async function omdbCall(env,params){
  const key=String(env.OMDB_API_KEY||'').trim();
  if(!key)throw err('Configura OMDB_API_KEY en secretos de Cloudflare para activar OMDb.',503);
  const u=new URL('https://www.omdbapi.com/');u.searchParams.set('apikey',key);
  for(const [k,v] of Object.entries(params))if(v!==null&&v!==undefined&&String(v).trim())u.searchParams.set(k,String(v));
  const res=await fetch(u,{headers:{'Accept':'application/json'},signal:AbortSignal.timeout(6500)});
  if(!res.ok)throw err('OMDb no respondió (HTTP '+res.status+').',502);
  const data=await res.json();
  if(data.Response==='False'){
    const message=String(data.Error||'No hay coincidencias');
    if(/not found|movie not found|series not found/i.test(message))return null;
    throw err('OMDb: '+message.slice(0,100),502);
  }
  return data;
}
function omdbMinutes(s){const m=String(s||'').match(/^(\d{1,4})\s*min/i);return m?Number(m[1]):null;}
function omdbValue(s,max=200){const v=String(s||'').trim();return v==='N/A'?'':clean(v,max);}
function omdbYear(v){const match=String(v||'').match(/\d{4}/);return match?match[0]:'';}

// --- FÉNIX STUDIO 2.3.7: metadatos regionales y OMDb opcional ---
// No se reutilizan sinopsis de otros idiomas: SOLO traducciones es-MX/es-US/LATAM de TMDB.
const LATAM_REGIONS=['MX','US','CO','AR','CL','PE','VE','EC','PR','CR','GT','UY','PA','DO','BO','PY','HN','NI','SV','CU'];
async function metadataFetch(url){
  const resp=await fetch(url,{headers:{Accept:'application/json', 'User-Agent':'FenixTVStudio/2.3.6 (metadatos; https://fenix-tv-studio-panel.elmanuchale.workers.dev/)'},
    signal:AbortSignal.timeout(5000),cf:{cacheTtl:300,cacheEverything:true}});
  if(!resp.ok)throw new Error('La fuente respondió HTTP '+resp.status);
  return resp.json();
}
async function tmdbLatam(env,type,id){
  const [item,translations]=await Promise.all([
    tmdb(env,`${type}/${id}`,{}),
    tmdb(env,`${type}/${id}/translations`,{}).catch(()=>({translations:[]}))
  ]);
  const opts=(translations.translations||[]).filter(t=>t.iso_639_1==='es'&&LATAM_REGIONS.includes(t.iso_3166_1));
  opts.sort((a,b)=>LATAM_REGIONS.indexOf(a.iso_3166_1)-LATAM_REGIONS.indexOf(b.iso_3166_1));
  const firstTitle=opts.find(t=>String(t.data?.title||t.data?.name||'').trim());
  const firstDesc=opts.find(t=>String(t.data?.overview||'').trim());
  // Solo español latino verificable, sin fallback a es-ES ni resúmenes en inglés.
  const localizedTitle=String(firstTitle?.data?.title||firstTitle?.data?.name||'').trim();
  const localizedOverview=String(firstDesc?.data?.overview||'').trim();
  const firstYear=String(item.release_date||item.first_air_date||'').slice(0,4);
  const genres=(item.genres||[]).map(g=>({id:g.id,name:g.name}));
  return {source:'TMDB',id,tmdbId:id,title:localizedTitle,description:localizedOverview,
    year:firstYear,image:posterUrl(item.poster_path),genres,
    suggestedDurationSeconds:((type==='movie'?item.runtime:item.episode_run_time?.[0])||0)*60||null,
    hasLatamTitle:!!localizedTitle,hasLatamDescription:!!localizedOverview,
    languageLabel:firstDesc?'es-'+firstDesc.iso_3166_1:(firstTitle?'es-'+firstTitle.iso_3166_1:'sin traducción latinoamericana'),
    notice:'Los tiempos de TMDB son aproximados; no sustituyen los metadatos del archivo.'};
}
function metadataYear(value){return /^\d{4}/.test(String(value||''))?String(value).slice(0,4):'';}
function metadataClaim(entity,prop){
  return entity?.claims?.[prop]?.find(s=>s.mainsnak?.datavalue?.value)?.mainsnak?.datavalue?.value||null;
}
async function metadataSearch(env,requestUrl){
  const query=clean(requestUrl.searchParams.get('q'),120),series=requestUrl.searchParams.get('type')==='serie';
  if(query.length<2) return {results:[],warnings:[],policy:'es-MX'};
  const year=String(requestUrl.searchParams.get('year')||'').slice(0,4);
  const sources=[];
  if(env.TMDB_TOKEN||env.TMDB_API_KEY)sources.push(['TMDB',async()=>{
    const type=series?'tv':'movie',p={query,include_adult:'false',page:'1'};
    if(/^\d{4}$/.test(year))p[series?'first_air_date_year':'year']=year;
    const r=await tmdb(env,'search/'+type,p);
    return (r.results||[]).slice(0,7).map(x=>({source:'tmdb',sourceName:'TMDB',id:x.id,type,
      title:x.title||x.name||'',year:metadataYear(x.release_date||x.first_air_date),
      image:posterUrl(x.poster_path),hint:'Ficha regional: español de México'}));
  }]);
  if(series)sources.push(['TVmaze',async()=>{
    const url='https://api.tvmaze.com/search/shows?q='+encodeURIComponent(query);
    const r=await metadataFetch(url);
    return (Array.isArray(r)?r:[]).slice(0,6).map(x=>x.show).filter(Boolean)
      .map(x=>({source:'tvmaze',sourceName:'TVmaze',id:x.id,type:'tv',title:x.name||'',
        year:metadataYear(x.premiered),image:x.image?.medium||'',
        hint:'Datos de serie; no se copiarán sinopsis en inglés'}));
  }]);
  if(env.OMDB_API_KEY)sources.push(['OMDb',async()=>{
    const data=await omdbCall(env,{s:query,type:series?'series':'movie',y:/^\d{4}$/.test(year)?year:null});
    return (data?.Search||[]).slice(0,7).filter(x=>/^tt\d{7,10}$/.test(x.imdbID||''))
      .map(x=>({source:'omdb',sourceName:'OMDb / IMDb',id:x.imdbID,type:series?'tv':'movie',
        title:omdbValue(x.Title,200),year:omdbYear(x.Year),
        image:/^https:\/\//i.test(x.Poster||'')?x.Poster:'',
        hint:'Reparto, dirección, calificación IMDb; sinopsis latinoamericana solo de TMDB'}));
  }]);
  sources.push(['Wikidata',async()=>{
    const u=new URL('https://www.wikidata.org/w/api.php');
    for(const [k,v] of Object.entries({action:'wbsearchentities',format:'json',language:'es',uselang:'es',type:'item',search:query,limit:'12'}))u.searchParams.set(k,v);
    const r=await metadataFetch(u.toString());
    const expected=series?/(serie|televisi[oó]n|telenovela|anime|miniserie|sitcom)/i:/(pel[ií]cula|film|largometraje|documental|cine|anime)/i;
    return (r.search||[]).filter(x=>/^Q\d+$/.test(x.id||'')&&expected.test(x.description||''))
      .slice(0,6).map(x=>({source:'wikidata',sourceName:'Wikidata',id:x.id,type:series?'tv':'movie',
        title:x.label||'',year:'',image:'',hint:x.description||'Datos abiertos'}));
  }]);
  const responses=await Promise.allSettled(sources.map(([,f])=>f()));
  const warnings=[],results=[];
  responses.forEach((r,i)=>r.status==='fulfilled'?results.push(...r.value):warnings.push(sources[i][0]+': '+String(r.reason?.message||'no disponible').slice(0,150)));
  return {results:results.slice(0,19),warnings,policy:'Título y sinopsis únicamente de traducciones TMDB es-MX o español latino. Nada de es-ES.'};
}
async function metadataDetail(env,requestUrl){
  const source=requestUrl.searchParams.get('source')||'',rawId=String(requestUrl.searchParams.get('id')||'');
  const tv=requestUrl.searchParams.get('type')==='tv';
  if(source==='tmdb'){
    const id=Number(rawId);
    if(!Number.isSafeInteger(id)||id<=0||id>100000000)throw err('TMDB ID inválido.');
    return tmdbLatam(env,tv?'tv':'movie',id);
  }
  let year='',image='',imdbId='',tmdbId=null,minutes=null,infoNote='',omdbExtra={};
  if(source==='tvmaze'){
    if(!tv)throw err('TVmaze solo ofrece series.');
    const id=Number(rawId);
    if(!Number.isSafeInteger(id)||id<=0||id>100000000)throw err('TVmaze ID inválido.');
    const show=await metadataFetch('https://api.tvmaze.com/shows/'+id);
    year=metadataYear(show.premiered);image=show.image?.original||show.image?.medium||'';
    imdbId=String(show.externals?.imdb||'');minutes=Number(show.runtime||show.averageRuntime||0)||null;
    infoNote='Información de TVmaze (CC BY-SA); su sinopsis no se copia porque no garantiza español latino.';
  }else if(source==='omdb'){
    if(!/^tt\d{7,10}$/.test(rawId))throw err('IMDb ID inválido.');
    const data=await omdbCall(env,{i:rawId,plot:'short',type:tv?'series':'movie'});
    if(!data)throw err('La ficha de OMDb no está disponible.',404);
    if(tv && data.Type!=='series' || !tv && data.Type!=='movie')throw err('El tipo de título no coincide.',422);
    year=omdbYear(data.Year);image=/^https:\/\//i.test(data.Poster||'')?data.Poster:'';
    imdbId=rawId;minutes=omdbMinutes(data.Runtime);
    const imdbRating=Number(data.imdbRating);
    omdbExtra={director:omdbValue(data.Director,350),actors:omdbValue(data.Actors,700),
      imdbRating:Number.isFinite(imdbRating)&&imdbRating>=0&&imdbRating<=10?String(imdbRating):'',
      awards:omdbValue(data.Awards,350),country:omdbValue(data.Country,160)};
    infoNote='Datos de OMDb bajo licencia CC BY-NC 4.0; no se copia Plot en inglés como sinopsis latinoamericana.';
  }else if(source==='wikidata'){
    if(!/^Q\d{1,12}$/.test(rawId))throw err('ID de Wikidata inválido.');
    const u=new URL('https://www.wikidata.org/w/api.php');
    for(const [k,v] of Object.entries({action:'wbgetentities',format:'json',ids:rawId,props:'claims|labels|descriptions',languages:'es|en'}))u.searchParams.set(k,v);
    const result=await metadataFetch(u.toString()),item=result.entities?.[rawId];
    if(!item||item.missing!==undefined)throw err('Elemento Wikidata no disponible.',404);
    const p577=metadataClaim(item,'P577'),date=p577?.time;
    year=typeof date==='string'?metadataYear(date.replace(/^\+/,'')):'';
    imdbId=String(metadataClaim(item,'P345')||'');
    const wId=metadataClaim(item,tv?'P4983':'P4947');
    if(/^\d+$/.test(String(wId||'')))tmdbId=Number(wId);
    infoNote='Datos abiertos Wikidata (CC0); su descripción breve no se usará como sinopsis.';
  }else throw err('Fuente no admitida.');
  if(!tmdbId&&/^tt\d{7,10}$/.test(imdbId)&&(env.TMDB_TOKEN||env.TMDB_API_KEY)){
    try{
      const found=await tmdb(env,'find/'+imdbId,{external_source:'imdb_id'});
      const match=(tv?(found.tv_results||[]):(found.movie_results||[]))[0];
      if(match?.id)tmdbId=Number(match.id);
    }catch{} // La fuente secundaria seguirá sirviendo datos aunque TMDB falle.
  }
  let latin=null;
  if(tmdbId&&(env.TMDB_TOKEN||env.TMDB_API_KEY)){
    try{latin=await tmdbLatam(env,tv?'tv':'movie',tmdbId);}catch{}
  }
  return {source:source==='tvmaze'?'TVmaze':source==='omdb'?'OMDb':'Wikidata',id:rawId,...omdbExtra,
    title:latin?.title||'',description:latin?.description||'',
    year:latin?.year||year,image:latin?.image||image,genres:latin?.genres||[],
    tmdbId:latin?.tmdbId||tmdbId||null,imdbId:imdbId||null,
    suggestedDurationSeconds:latin?.suggestedDurationSeconds||(minutes?minutes*60:null),
    hasLatamTitle:!!latin?.hasLatamTitle,hasLatamDescription:!!latin?.hasLatamDescription,
    languageLabel:latin?.languageLabel||'sin traducción latinoamericana',
    notice:infoNote+(latin?.description?' Se completó la sinopsis con TMDB Latinoamérica.':' Sin sinopsis latinoamericana verificada; conserva o escribe la tuya.')};
}

// ---------------------------------------------------------
// FENIX TV STUDIO · Video on Demand: películas, series, episodios
// Guarda exclusivamente VOD en cms_config['vod']; no altera canales 24/7.
// ---------------------------------------------------------
const VOD_GENRES = ['Acción','Aventura','Animación','Comedia','Crimen','Documental','Drama','Familia','Fantasía','Historia','Terror','Música','Misterio','Romance','Ciencia ficción','Suspenso','Bélica','Western','Infantil','Anime','Otros'];
const FENIX_IMPORT = (() => {
// FÉNIX TV STUDIO 2.1 — núcleo puro de importación, sin red ni D1.
const defaultSource='https://raw.githubusercontent.com/ELMANIU/Roku-feed/main/catalog.json';
const slug=v=>String(v??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const st=v=>String(v??'').trim();
const title=o=>st(o?.Title||o?.title||o?.name||o?.seriesName);
const year=o=>st(o?.Year||o?.year).slice(0,4);
function runtimeSecs(x){
 const t=st(x).toLowerCase();if(!t)return 0;
 if(/^\d{1,3}:\d{2}:\d{2}$/.test(t)){const [h,m,s]=t.split(':').map(Number);return h*3600+m*60+s}
 if(/^\d{1,3}:\d{2}$/.test(t)){const [m,s]=t.split(':').map(Number);return m*60+s}
 if(/^\d{1,6}$/.test(t)){const n=Number(t);return n>0&&n<24*3600?n*60:0}
 const hh=t.match(/(\d+)\s*(?:h|hora)/),mm=t.match(/(\d+)\s*(?:m|minuto)/),ss=t.match(/(\d+)\s*(?:s|segundo)/);
 return (hh?Number(hh[1])*3600:0)+(mm?Number(mm[1])*60:0)+(ss?Number(ss[1]):0);
}
const cleanId=(v,prefix='catalogo')=>{
  const id=st(v);
  if(/^[a-zA-Z0-9_-]{2,130}$/.test(id))return id;
  return (prefix+'-'+slug(id||'sin-titulo')).slice(0,130);
};
const refKey = o => st(o?.tmdbId||o?.TMDBId||o?.tmdb_id) ? 'tmdb:'+st(o.tmdbId||o.TMDBId||o.tmdb_id) : '';
function match(list,o){
  const k=refKey(o),id=st(o.id||o.contentId),nm=slug(title(o)),y=year(o);
  return list.findIndex(z=>{
    const zk=refKey(z),zid=st(z.id||z.contentId),znm=slug(title(z)),zy=year(z);
    if(k&&zk&&k===zk)return true;
    if(id&&zid&&id===zid)return true;
    return !!(nm&&nm===znm&&(!y||!zy||y===zy));
  });
}
function sNumber(x,fallback=0){const n=Number(x);return Number.isInteger(n)&&n>=0?n:fallback}
function numEp(e){let season=e.season??e.Season??e.seasonNumber??e.season_number, episode=e.episode??e.Episode??e.episodeNumber??e.episode_number;
  if(episode==null){const m=String(e.id||e.contentId||e.Title||'').match(/s(\d{1,2})\s*e(\d{1,3})/i);if(m){season=season??Number(m[1]);episode=Number(m[2]);}}
  return {season:sNumber(season,1),episode:sNumber(episode,0)};
}
function cleanEpisode(e,series,index){
 const ep={...e,importedFrom:'Roku-feed'},pos=numEp(e);ep.season=pos.season;ep.episode=pos.episode||index+1;
 ep.Season=ep.season;ep.Episode=ep.episode;
 ep.id=cleanId(e.id||e.contentId||`${series.id}-s${ep.season}e${ep.episode}`,'ep');
 ep.contentId=ep.contentId||ep.id; if(!ep.durationSeconds){const d=runtimeSecs(e.Runtime||e.runtime);if(d)ep.durationSeconds=d;}ep.Title=title(e)||`Temporada ${ep.season} Episodio ${ep.episode}`;
 ep.Url=st(e.Url||e.url||e.Stream||e.streamUrl||e.videoUrl||e.VideoUrl);
 if(!ep.Url)ep.enabled=false;
 return ep;
}
function convertSource(raw){
 if(!raw||typeof raw!=='object'||!Array.isArray(raw.movies)||!Array.isArray(raw.series))throw new Error('El catálogo de GitHub debe contener movies[] y series[] como arreglos. No se hizo ningún cambio.');
 const result={movies:[],series:[]},warnings=[];
 for(const [idx,m] of raw.movies.entries()){
  if(!m||typeof m!=='object'||!title(m)){warnings.push(`Película ${idx+1} sin título: no se pudo importar`);continue;}
  const a={...m,importedFrom:'Roku-feed'};a.id=cleanId(m.id||m.contentId||`movie-${slug(title(m))}-${year(m)||'na'}`,'movie');a.contentId=m.contentId||a.id;
  a.Title=title(m);a.Url=st(m.Url||m.url||m.Stream||m.streamUrl||m.videoUrl||m.VideoUrl);
  if(!a.durationSeconds){const d=runtimeSecs(m.Runtime||m.runtime);if(d)a.durationSeconds=d;}
  if(!a.Url){a.enabled=false;warnings.push(`Película sin URL: ${a.Title} (guardada como borrador)`)}
  if(!a.Genre)a.Genre=st(m.genre||m.Section||m.Category)||'Otros';
  if(!a.Section)a.Section=a.Genre;
  if(!a.Logo)a.Logo=st(m.logo||m.HDPosterUrl||m.poster)||'';
  if(!a.Year)a.Year=year(m);
  const n=match(result.movies,a);
  if(n<0)result.movies.push(a);
  else warnings.push(`Película duplicada en origen: ${a.Title}`);
 }
 for(const [idx,s] of raw.series.entries()){
  if(!s||typeof s!=='object'||!title(s)){warnings.push(`Serie ${idx+1} sin título: no se pudo importar`);continue;}
  const a={...s,importedFrom:'Roku-feed'};a.id=cleanId(s.id||s.contentId||`series-${slug(title(s))}-${year(s)||'na'}`,'series');a.contentId=s.contentId||a.id;
  a.Title=title(s);if(!a.Genre)a.Genre=st(s.genre||s.Section||s.Category)||'Otros';if(!a.Section)a.Section=a.Genre;
  if(!a.Logo)a.Logo=st(s.logo||s.HDPosterUrl||s.poster)||'';if(!a.Year)a.Year=year(s);
  let episodes=Array.isArray(s.episodes)?s.episodes:[];
  if(!episodes.length && Array.isArray(s.seasons)){
    episodes=s.seasons.flatMap((season,seasonIx)=>Array.isArray(season?.episodes)?season.episodes.map((e,i)=>({...e,season:e.season??e.Season??season.number??season.season??seasonIx+1,episode:e.episode??e.Episode??i+1})):[]);
  }
  a.episodes=mergeEpisodes([],episodes.map((e,i)=>cleanEpisode(e,a,i)));
  const n=match(result.series,a);
  if(n<0)result.series.push(a);
  else {result.series[n].episodes=mergeEpisodes(result.series[n].episodes,a.episodes);warnings.push(`Serie duplicada en origen: ${a.Title} (capítulos combinados)`);}
 }
 for(const key of ['movies','series']){
   const ids=new Set();
   for(const item of result[key]){let id=item.id,i=2;while(ids.has(id))id=(item.id.slice(0,120)+'-'+i++);if(id!==item.id){warnings.push('ID repetido: '+item.Title+' (renombrado para proteger ambos títulos)');item.id=id;item.contentId=id;}ids.add(id)}
 }
 for(const series of result.series){const ids=new Set();for(const ep of series.episodes){let id=ep.id,i=2;while(ids.has(id))id=(ep.id.slice(0,120)+'-'+i++);if(id!==ep.id)ep.id=id;ids.add(id)}}
 return {...result,warnings};
}
function mergeEpisodes(local,external){
 const result=Array.isArray(local)?local.map((e,i)=>({...e,...numEp(e),id:e.id||`ep-${i+1}`})):[];
 for(const e of external||[]){const p=numEp(e);const ix=result.findIndex(x=>{
  const b=numEp(x);return b.season===p.season&&b.episode===p.episode&&p.episode>0 || (!!x.id&&!!e.id&&x.id===e.id);
 });
  if(ix>=0)result[ix]={...e,...result[ix]}; // panel existente gana, conserva datos no presentes.
  else result.push(e);
 }
 return result.sort((a,b)=>numEp(a).season-numEp(b).season||numEp(a).episode-numEp(b).episode);
}
function mergeLibraries(existing,source){
 const out=structuredClone(existing),counts={moviesNew:0,moviesExisting:0,seriesNew:0,seriesExisting:0,episodesNew:0,episodesExisting:0};
 for(const movie of source.movies){const n=match(out.movies,movie);if(n<0){out.movies.push(movie);counts.moviesNew++}else {out.movies[n]={...movie,...out.movies[n]};counts.moviesExisting++}}
 for(const s of source.series){const n=match(out.series,s);if(n<0){out.series.push(s);counts.seriesNew++;counts.episodesNew+=(s.episodes||[]).length;continue}
  const current=out.series[n],before=(current.episodes||[]).length,episodes=mergeEpisodes(current.episodes||[],s.episodes||[]);
  out.series[n]={...s,...current,episodes};counts.seriesExisting++;counts.episodesNew+=episodes.length-before;
  counts.episodesExisting+=(s.episodes||[]).length-(episodes.length-before);
 }
 return {vod:out,counts};
}
function summary(lib){return {movies:lib.movies?.length||0,series:lib.series?.length||0,episodes:(lib.series||[]).reduce((n,s)=>n+(s.episodes?.length||0),0)};}

return {defaultSource,convertSource,mergeLibraries,summary,mergeEpisodes};
})();

const emptyVod = () => ({schemaVersion:1,updatedAt:'',revision:'initial',movies:[],series:[]});
function limitedId(value, field='Identificador') {
  const v=clean(value,130);
  if (!/^[a-zA-Z0-9_-]{2,130}$/.test(v)) throw err(field+' inválido.');
  return v;
}
function numRange(value, label, min, max) {
  const n=Number(value);
  if (!Number.isSafeInteger(n)||n<min||n>max) throw err(label+' debe estar entre '+min+' y '+max+'.');
  return n;
}
function vodDuration(value){
  if(typeof value==='string'&&/^\d{6}$/.test(value))return durationSeconds(value.slice(0,2)+':'+value.slice(2,4)+':'+value.slice(4,6));
  return durationSeconds(value);
}
function vodMediaUrl(source) {
  const url=ensureUrl(source.url||source.Url,'URL del video');
  const streamFormat=clean(source.streamFormat||source.format||(/\.m3u8(?:\?|$)/i.test(url)?'hls':/\.mkv(?:\?|$)/i.test(url)?'mkv':'mp4'),8).toLowerCase();
  if (!['mp4','mkv','hls'].includes(streamFormat)) throw err('Formato no soportado.');
  return {Url:url,streamFormat};
}
function vodYear(value){
  if (!value) return '';
  return String(numRange(value,'Año',1880,2150));
}
function vodGenre(value){
  const genre=clean(value||'Otros',80);
  return genre;
}

// SEGMENT MARKS v2.3.5: independent intro/credits; never automatically overwrite existing marks.
function segmentMarks(body,previous,duration){
  const output={...previous};
  for(const [type,key] of [['intro','intro'],['credits','credits']]){
    const startKey=key+'StartSeconds',endKey=key+'EndSeconds';
    if(!(startKey in body) && !(endKey in body))continue;
    const hasStart=body[startKey]!==''&&body[startKey]!==null&&body[startKey]!==undefined;
    const hasEnd=body[endKey]!==''&&body[endKey]!==null&&body[endKey]!==undefined;
    if(!hasStart&&!hasEnd){delete output[startKey];delete output[endKey];if(type==='intro'){delete output.introScanStatus;delete output.introScanMethod;}continue}
    if(hasStart!==hasEnd)throw err('Introduce ambos tiempos para '+type+'.',422);
    const st=Number(body[startKey]),en=Number(body[endKey]);
    if(!Number.isFinite(st)||!Number.isFinite(en)||st<0||en<=st||en-st<1||en-st>1200||
       en>21600||(duration>0&&en>duration+0.5))throw err('Los segundos de '+type+' no corresponden a la duración del video.',422);
    output[startKey]=Math.round(st*10)/10;output[endKey]=Math.round(en*10)/10;
    if(type==='intro' && (st!==previous.introStartSeconds||en!==previous.introEndSeconds)){
      output.introScanStatus='detected';output.introScanMethod='manual_confirmed';
    }
  }
  return output;
}


function normalizeExtraVodMetadata(body,prev={}){
  const director=clean(body.director??prev.director??'',350),
    actors=clean(body.actors??prev.actors??'',700),
    imdbId=clean(body.imdbId??prev.imdbId??'',20),
    imdbRating=String(body.imdbRating??prev.imdbRating??'').trim(),
    awards=clean(body.awards??prev.awards??'',350),
    country=clean(body.country??prev.country??'',160);
  if(imdbId&&!/^tt\d{7,10}$/.test(imdbId))throw err('El identificador IMDb no es válido.');
  if(imdbRating&&(!/^\d{1,2}(?:\.\d)?$/.test(imdbRating)||Number(imdbRating)>10))throw err('La calificación IMDb debe estar entre 0 y 10.');
  return {director,actors,imdbId,imdbRating,awards,country};
}

function normalizeMovie(body, previous={}) {
  const name=clean(body.title??body.Title??previous.Title,200);
  if (!name) throw err('Escribe el título de la película.');
  const {Url,streamFormat}=vodMediaUrl(body);
  const image=ensureUrl(body.image??body.Logo??previous.Logo,'Póster',true);
  const year=vodYear(body.year??body.Year??previous.Year);
  const sec=vodDuration(body.durationSeconds??body.duration);
  const tmdbId=body.tmdbId?numRange(body.tmdbId,'TMDB ID',1,100000000):null;
  const id=previous.id||limitedId('movie-'+(tmdbId||slug(name)+'-'+Date.now().toString(36)));
  return {...segmentMarks(body,previous,sec),id,contentId:id,Title:name,Description:clean(body.description??body.Description??name,1400),
    Logo:image,HDPosterUrl:image,Genre:vodGenre(body.genre??body.Genre),Section:vodGenre(body.genre??body.Genre),Year:year,
    Runtime:`${Math.floor(sec/60)} min`,durationSeconds:sec,Url,streamFormat,
    tmdbId:tmdbId||previous.tmdbId||null, ...normalizeExtraVodMetadata(body,previous),enabled:true};
}
function normalizeSeries(body, previous={}) {
  const title=clean(body.title??body.Title??previous.Title,200);
  if (!title) throw err('Escribe el título de la serie.');
  const poster=ensureUrl(body.image??body.Logo??previous.Logo,'Póster de la serie',true);
  const year=vodYear(body.year??body.Year??previous.Year);
  const tmdbId=body.tmdbId?numRange(body.tmdbId,'TMDB ID',1,100000000):null;
  const id=previous.id||limitedId('series-'+(tmdbId||slug(title)+'-'+Date.now().toString(36)));
  return {...previous,id,contentId:id,Title:title,Description:clean(body.description??body.Description??title,1400),
    Logo:poster,Genre:vodGenre(body.genre??body.Genre),Section:vodGenre(body.genre??body.Genre),Year:year,
    tmdbId:tmdbId||previous.tmdbId||null, ...normalizeExtraVodMetadata(body,previous),episodes:previous.episodes||[],enabled:true};
}
function normalizeEpisode(body,series,previous={}){
  const season=numRange(body.season??body.Season,'Temporada',0,99);
  const episode=numRange(body.episode??body.Episode,'Número de episodio',1,999);
  const title=clean((body.title??body.Title)||`T${season} E${episode}`,230);
  const image=ensureUrl(body.image??body.Logo??series.Logo,'Imagen del episodio',true);
  const sec=vodDuration(body.durationSeconds??body.duration);
  const {Url,streamFormat}=vodMediaUrl(body);
  const id=previous.id||limitedId(`${series.id}-s${season}e${episode}`);
  return {...segmentMarks(body,previous,sec),id,contentId:id,Title:title,Description:clean(body.description??body.Description??title,1200),
    Logo:image,Url,streamFormat,season,episode,Season:season,Episode:episode,Runtime:`${Math.floor(sec/60)} min`,durationSeconds:sec,enabled:true};
}
function validateVod(vod){
  if(!vod||!Array.isArray(vod.movies)||!Array.isArray(vod.series)) throw err('Catálogo VOD inválido.');
  if(vod.movies.length>12000||vod.series.length>5000) throw err('Límite de películas/series alcanzado.');
  for(const [collection,list] of [['películas',vod.movies],['series',vod.series]]){
    const ids=new Set();
    for(const item of list){
      if(!item||typeof item!=='object'||!item.id||ids.has(item.id))throw err('Identificador duplicado en '+collection);
      ids.add(item.id);
      if(!clean(item.Title))throw err('Título vacío en '+collection);
      if(item.Logo && item.importedFrom!=='Roku-feed')ensureUrl(item.Logo,'Póster');
      if(collection==='películas'){if(item.Url)ensureUrl(item.Url,'Video de película'); else if(item.enabled!==false)throw err('Película activa sin URL: '+item.Title);}
      else {
        if(!Array.isArray(item.episodes)||item.episodes.length>2500)throw err('Episodios inválidos.');
        const keys=new Set();
        for(const ep of item.episodes){
          if(ep.Url)ensureUrl(ep.Url,'Video de episodio'); else if(ep.enabled!==false)throw err('Episodio activo sin URL: '+ep.Title);
          const key=String(ep.season)+':'+String(ep.episode);
          if(keys.has(key))throw err('Capítulo duplicado '+key+' en '+item.Title);
          keys.add(key);
        }
      }
    }
  }
}
// VOD 2.1: snapshots divididos (Cloudflare D1 tiene límite de 2 MB por fila).
const VOD_CHUNK_BYTES = 900_000;
const VOD_MAX_BYTES = 15_000_000;
async function ensureVodTables(env){
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS fenix_vod_chunks (snapshot TEXT NOT NULL, part INTEGER NOT NULL, content TEXT NOT NULL, PRIMARY KEY(snapshot,part))').run();
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS fenix_vod_backups (id TEXT PRIMARY KEY NOT NULL, snapshot TEXT NOT NULL, kind TEXT NOT NULL, created_at TEXT NOT NULL, details TEXT NOT NULL)').run();
}
function toChunks(text){
  const bytes=new TextEncoder().encode(text);
  if(bytes.length>VOD_MAX_BYTES)throw err('La biblioteca supera los 15 MB admitidos por esta instalación. No se cambió ningún registro.',413);
  let pieces=[];
  for(let pos=0;pos<bytes.length;){
    let end=Math.min(pos+VOD_CHUNK_BYTES,bytes.length);
    while(end<bytes.length && (bytes[end]&0xc0)===0x80)end--;
    if(end<=pos)throw err('No se pudo dividir el archivo.',500);
    pieces.push(new TextDecoder('utf-8',{fatal:true}).decode(bytes.slice(pos,end)));pos=end;
  }
  return pieces;
}
function snapshotStatements(env, id, content){
  return toChunks(content).map((part,i)=>env.DB.prepare('INSERT INTO fenix_vod_chunks (snapshot,part,content) VALUES (?,?,?)').bind(id,i,part));
}
async function readSnapshot(env,id){
  if(!/^[a-zA-Z0-9_-]{6,130}$/.test(id))throw err('Respaldo inválido',400);
  const found=await env.DB.prepare('SELECT content FROM fenix_vod_chunks WHERE snapshot = ? ORDER BY part').bind(id).all();
  const rows=found.results||[];
  if(!rows.length)throw err('Respaldo no encontrado o incompleto.',404);
  return rows.map(x=>x.content).join('');
}
async function readVod(env){
  if(!env.DB)throw err('Base D1 no configurada.',503);
  const row=await env.DB.prepare('SELECT content FROM cms_config WHERE key = ?').bind('vod').first();
  if(!row)return emptyVod();
  try{
    let data=JSON.parse(row.content);
    if(data.__storage==='fenix-chunks-v1')data=JSON.parse(await readSnapshot(env,data.snapshot));
    validateVod(data);return data;
  }catch(e){throw err('No se pudo leer el catálogo VOD: '+e.message,500)}
}
function vodCurrentPointer(vod,id){return {__storage:'fenix-chunks-v1',snapshot:id,updatedAt:vod.updatedAt,revision:vod.revision};}
function vodWriteStmt(env,vod,id){return env.DB.prepare('INSERT INTO cms_config (key,content,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at').bind('vod',JSON.stringify(vodCurrentPointer(vod,id)),vod.updatedAt);}
async function saveVod(env,vod){
  validateVod(vod);
  vod.updatedAt=new Date().toISOString();vod.revision='vod-'+Date.now()+'-'+crypto.randomUUID().slice(0,8);
  await ensureVodTables(env);
  const snapshot='vod-'+crypto.randomUUID();
  await env.DB.batch([...snapshotStatements(env,snapshot,JSON.stringify(vod)),vodWriteStmt(env,vod,snapshot)]);
  return vod;
}
function summarizeBackup(source,kind){return JSON.stringify({kind,...FENIX_IMPORT.summary(source)});}
async function hashText(s){const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,'0')).join('');}
async function fetchImportSource(env){
 const url=clean(env.INITIAL_CATALOG_URL||FENIX_IMPORT.defaultSource,2048);
 if(!isUrl(url))throw err('INITIAL_CATALOG_URL no contiene una dirección válida',503);
 const res=await fetch(url,{headers:{Accept:'application/json'},redirect:'follow',signal:AbortSignal.timeout(25000),cf:{cacheTtl:0}});
 if(!res.ok)throw err('No fue posible consultar Roku-feed (HTTP '+res.status+'). No se hizo ningún cambio.',502);
 const text=await res.text();toChunks(text); // valida tamaño sin guardar
 let source;
 try{source=JSON.parse(text)}catch{throw err('El catálogo remoto no es JSON válido. No se guardó ningún cambio.',422)}
 const converted=FENIX_IMPORT.convertSource(source);
 return {source,converted,text,url,hash:await hashText(text)};
}
async function importDryRun(env){
 const before=await readVod(env),upstream=await fetchImportSource(env);
 const merge=FENIX_IMPORT.mergeLibraries(before,upstream.converted);
 validateVod(merge.vod);
 // límites antes de ofrecer importar; si excede, no se permite importar.
 toChunks(JSON.stringify(merge.vod));
 const currentHash=await hashText(JSON.stringify(before));
 return {before,upstream,merged:merge.vod,summary:FENIX_IMPORT.summary(merge.vod),counts:merge.counts,currentHash};
}
async function handleVodImport(request,env,path,method){
 if(path==='/api/vod/import/preview'&&method==='GET'){
  const result=await importDryRun(env);
  return json({ok:true,source:result.upstream.url,sourceHash:result.upstream.hash,currentHash:result.currentHash,
   sourceCounts:FENIX_IMPORT.summary(result.upstream.converted),currentCounts:FENIX_IMPORT.summary(result.before),
   afterCounts:result.summary,changes:result.counts,
   warnings:result.upstream.converted.warnings.slice(0,30),warningCount:result.upstream.converted.warnings.length,
   sampleMovies:result.upstream.converted.movies.slice(0,5).map(x=>x.Title),
   sampleSeries:result.upstream.converted.series.slice(0,5).map(x=>x.Title)});
 }
 if(path==='/api/vod/import/commit'&&method==='POST'){
  const {sourceHash,currentHash,confirm}=await parseBody(request);
  if(confirm!=='IMPORTAR_CON_RESPALDO'||!sourceHash||!currentHash)throw err('Antes de importar, realiza una vista previa y confirma el respaldo.',400);
  const r=await importDryRun(env);
  if(r.upstream.hash!==sourceHash||r.currentHash!==currentHash)throw err('La biblioteca cambió después de la vista previa. Actualiza la vista previa para evitar sobrescribir cambios.',409);
  const hasNew= r.counts.moviesNew+r.counts.seriesNew+r.counts.episodesNew>0;
  if(!hasNew)return json({ok:true,unchanged:true,message:'Tu biblioteca ya está importada. No se duplicó ningún registro.',summary:r.summary});
  await ensureVodTables(env);
  const timestamp=new Date().toISOString(),oldId='backup-old-'+crypto.randomUUID(),sourceId='backup-source-'+crypto.randomUUID(),newId='vod-'+crypto.randomUUID();
  const next=r.merged; next.updatedAt=timestamp;next.revision='vod-import-'+Date.now();next.schemaVersion=1;
  const prevJSON=JSON.stringify(r.before),sourceJSON=r.upstream.text,newJSON=JSON.stringify(next);
  const stmts=[...snapshotStatements(env,oldId,prevJSON),...snapshotStatements(env,sourceId,sourceJSON),...snapshotStatements(env,newId,newJSON)];
  if(stmts.length+3>48)throw err('Importación demasiado grande para una transacción segura de Cloudflare D1. No se cambió nada.',413);
  stmts.push(env.DB.prepare('INSERT INTO fenix_vod_backups (id,snapshot,kind,created_at,details) VALUES (?,?,?,?,?)').bind(oldId,oldId,'antes-de-importar',timestamp,summarizeBackup(r.before,'antes')));
  stmts.push(env.DB.prepare('INSERT INTO fenix_vod_backups (id,snapshot,kind,created_at,details) VALUES (?,?,?,?,?)').bind(sourceId,sourceId,'github-original',timestamp,JSON.stringify({source:r.upstream.url,bytes:new TextEncoder().encode(sourceJSON).length,...FENIX_IMPORT.summary(r.upstream.converted)})));
  stmts.push(vodWriteStmt(env,next,newId));
  await env.DB.batch(stmts);
  return json({ok:true,unchanged:false,message:'Importación completada. Se guardaron dos respaldos antes de activar los datos.',summary:FENIX_IMPORT.summary(next),changes:r.counts,backups:[oldId,sourceId]});
 }
 if(path==='/api/vod/import/backups'&&method==='GET'){
  await ensureVodTables(env);
  const rows=await env.DB.prepare('SELECT id,kind,created_at,details FROM fenix_vod_backups ORDER BY created_at DESC LIMIT 50').bind().all();
  return json({backups:rows.results||[]});
 }
 const download=path.match(/^\/api\/vod\/import\/backups\/([a-zA-Z0-9_-]+)$/);
 if(download&&method==='GET'){
  await ensureVodTables(env);
  const row=await env.DB.prepare('SELECT id,snapshot,kind FROM fenix_vod_backups WHERE id=?').bind(download[1]).first();
  if(!row)throw err('Respaldo no encontrado',404);
  const content=await readSnapshot(env,row.snapshot);
  return new Response(content,{headers:{'content-type':'application/json; charset=utf-8','content-disposition':`attachment; filename="fenix-${row.kind}-${row.id}.json"`,'cache-control':'no-store','x-content-type-options':'nosniff'}});
 }
 if(path==='/api/vod/import/export'&&method==='GET'){
  const content=JSON.stringify(await readVod(env),null,2);
  return new Response(content,{headers:{'content-type':'application/json; charset=utf-8','content-disposition':'attachment; filename="fenix-biblioteca-antes-de-importar.json"','cache-control':'no-store'}});
 }
 return null;
}

function locateItem(list,id){return list.findIndex(x=>x.id===id);}
function matchSeries(items, candidate){
  return items.findIndex(s=>s.id===candidate.id||
    (s.tmdbId&&candidate.tmdbId&&+s.tmdbId===+candidate.tmdbId)||
    (slug(s.Title)===slug(candidate.Title)&&(s.Year||'')===(candidate.Year||'')));
}
async function loadUpstreamSeries(env){
  const url=clean(env.INITIAL_CATALOG_URL||'https://raw.githubusercontent.com/ELMANIU/Roku-feed/main/catalog.json',2048);
  if(!isUrl(url))return [];
  try {
    const resp=await fetch(url,{headers:{Accept:'application/json'},cf:{cacheTtl:30,cacheEverything:true}});
    if(!resp.ok)return [];
    const raw=await resp.json();
    return (Array.isArray(raw.series)?raw.series:[]).filter(s=>s&&s.enabled!==false).slice(0,700).map(s=>({
      id:clean(s.id||s.contentId||slug(s.Title||s.title),130),Title:clean(s.Title||s.title||s.name,200),
      Description:clean(s.Description||s.description,1200),
      Logo:clean(s.Logo||s.logo||s.HDPosterUrl,2000),Genre:clean(s.Genre||'Otros',80),
      Year:clean(s.Year||s.year,10),tmdbId:s.tmdbId||null,existingEpisodes:(s.episodes||[]).length
    })).filter(s=>s.id&&s.Title);
  }catch{return []}
}

// FÉNIX STUDIO 2.2 — operaciones masivas atómicas a nivel de snapshot.
// Cada petición se valida completamente antes de guardar en D1.
const BULK_LIMIT=80;
function validBulkItems(body){
  if(!body||!Array.isArray(body.items)||!body.items.length||body.items.length>BULK_LIMIT)
    throw err('Envía entre 1 y 80 elementos por lote. Puedes repetir los lotes sin un límite fijo de operaciones.');
  return body.items;
}
function parseBatchDuration(body){
  const raw=body.durationSeconds??body.duration;
  if(raw===null||raw===undefined||raw===''||raw==='00:00:00'||raw==='000000'||raw===0) return 0;
  return vodDuration(raw);
}
function normalizeBulkMovie(body){
  // Video bajo demanda: duración desconocida permitida, sin fingir exactitud.
  const inputDuration=body.durationSeconds??body.duration;
  const useDuration=(!inputDuration||inputDuration==='00:00:00'||inputDuration==='000000')?'00:00:01':inputDuration;
  const movie=normalizeMovie({...body,durationSeconds:useDuration});
  const sec=parseBatchDuration(body);
  movie.durationSeconds=sec;
  movie.Runtime=sec?`${Math.floor(sec/60)} min`:'';
  movie.durationSource=sec?(body.durationSource||'manual'):'unknown';
  return movie;
}
function normalizeBulkEpisode(body,series){
  const inputDuration=body.durationSeconds??body.duration;
  const useDuration=(!inputDuration||inputDuration==='00:00:00'||inputDuration==='000000')?'00:00:01':inputDuration;
  const ep=normalizeEpisode({...body,durationSeconds:useDuration},series);
  const sec=parseBatchDuration(body);
  ep.durationSeconds=sec;
  ep.Runtime=sec?`${Math.floor(sec/60)} min`:'';
  ep.durationSource=sec?(body.durationSource||'manual'):'unknown';
  return ep;
}
function bulkMovieKey(m){
  return String(m.tmdbId||'') ? 'tmdb:'+String(m.tmdbId) :
    'text:'+slug(m.Title)+':'+String(m.Year||'');
}
async function handleBulkVod(request,env,path,method,u){
  if(path==='/api/vod/tmdb-season'&&method==='GET'){
    const id=numRange(u.searchParams.get('id'),'TMDB ID',1,100000000);
    const season=numRange(u.searchParams.get('season'),'Temporada',0,99);
    const item=await tmdb(env,`tv/${id}/season/${season}`,{});
    return json({episodes:(item.episodes||[]).filter(e=>Number.isInteger(e.episode_number)).map(e=>({
      episode:e.episode_number,title:e.name||'',description:e.overview||'',
      image:posterUrl(e.still_path),suggestedDurationSeconds:Number(e.runtime||0)*60||null
    }))});
  }
  if(method!=='POST'||!['/api/vod/bulk/movies','/api/vod/bulk/episodes'].includes(path))return null;
  const body=await parseBody(request),items=validBulkItems(body),vod=await readVod(env);
  if(body.expectedRevision&&body.expectedRevision!==vod.revision)
    throw err('La biblioteca cambió desde que abriste el formulario. Actualiza el panel e inténtalo otra vez.',409);
  const results={created:0,skipped:0,existing:[],pendingDuration:0};
  if(path.endsWith('/movies')){
    const staged=[];
    for(const input of items){
      const movie=normalizeBulkMovie(input);
      const existing=vod.movies.find(x=>x.id===movie.id || (x.tmdbId&&movie.tmdbId&&+x.tmdbId===+movie.tmdbId)||
        (slug(x.Title)===slug(movie.Title)&&String(x.Year||'')===String(movie.Year||'')));
      const repeat=staged.find(x=>(x.tmdbId&&movie.tmdbId&&+x.tmdbId===+movie.tmdbId)||
        (slug(x.Title)===slug(movie.Title)&&String(x.Year||'')===String(movie.Year||'')));
      if(existing||repeat){results.skipped++;results.existing.push(movie.Title);continue;}
      staged.push(movie);
      if(!movie.durationSeconds)results.pendingDuration++;
    }
    vod.movies.push(...staged);results.created=staged.length;
  } else {
    const id=limitedId(body.seriesId,'Serie');
    const series=vod.series.find(s=>s.id===id);
    if(!series)throw err('Serie no encontrada en tu biblioteca. Primero selecciónala o créala.',404);
    const existingKeys=new Set((series.episodes||[]).map(e=>String(e.season)+':'+String(e.episode)));
    const staged=[];
    for(const input of items){
      const ep=normalizeBulkEpisode(input,series),key=String(ep.season)+':'+String(ep.episode);
      if(existingKeys.has(key)){results.skipped++;results.existing.push('T'+ep.season+' E'+ep.episode);continue;}
      staged.push(ep);existingKeys.add(key);
      if(!ep.durationSeconds)results.pendingDuration++;
    }
    if(!series.episodes)series.episodes=[];
    series.episodes.push(...staged);series.episodes.sort((a,b)=>a.season-b.season||a.episode-b.episode);
    results.created=staged.length;
  }
  if(results.created){
    validateVod(vod);
    await saveVod(env,vod);
  }
  return json({ok:true,...results,counts:{movies:vod.movies.length,series:vod.series.length}});
}

// Intentar leer duración exacta de HLS VOD. No se inventa duración para emisiones en vivo.
function checkMediaUrl(value){
  const str=ensureUrl(value,'URL del video');
  const u=new URL(str);
  if(u.protocol!=='https:')throw err('La detección remota requiere HTTPS.',400);
  if(/^\d+(?:\.\d+)*$/.test(u.hostname)||u.hostname.includes(':'))throw err('No se permiten direcciones IP directas en la detección.',400);
  if(/^(localhost|127(?:\.\d+){3}|0\.0\.0\.0|\[?::1\]?|10(?:\.\d+){3}|192\.168(?:\.\d+){2}|169\.254(?:\.\d+){2}|172\.(?:1[6-9]|2\d|3[01])(?:\.\d+){2})(?::\d+)?$/i.test(u.hostname)||
  /(?:\.local|\.internal|\.localhost)$/i.test(u.hostname))throw err('Host privado no permitido.',400);
  return u;
}
async function detectHlsExact(url,depth=0){
  if(depth>2)throw err('Demasiadas playlists anidadas.',422);
  const res=await fetch(url.toString(),{redirect:'manual',headers:{Accept:'application/vnd.apple.mpegurl,text/plain'},signal:AbortSignal.timeout(8000)});
  if(res.status>=300&&res.status<400)throw err('La playlist redirige a otra URL. Introduce el enlace directo.',422);
  if(!res.ok)throw err('No se pudo leer la playlist: HTTP '+res.status,422);
  const contentLength=Number(res.headers.get('content-length')||0);
  if(contentLength>750_000)throw err('Playlist demasiado grande para analizar.',422);
  const text=await res.text();
  if(text.length>750_000||!text.includes('#EXTM3U'))throw err('No es una playlist HLS válida.',422);
  if(/#EXT-X-STREAM-INF:/i.test(text)){
    const lines=text.split(/\r?\n/);
    const i=lines.findIndex(x=>x.trim().startsWith('#EXT-X-STREAM-INF:'));
    const variant=lines.slice(i+1).find(x=>x.trim()&&!x.trim().startsWith('#'));
    if(!variant)throw err('No hay una variante HLS.',422);
    const next=new URL(variant.trim(),url);
    checkMediaUrl(next.toString());
    return detectHlsExact(next,depth+1);
  }
  if(!/#EXT-X-ENDLIST/i.test(text))return {durationSeconds:null,source:'live_or_open_playlist',exact:false};
  const matches=[...text.matchAll(/#EXTINF:\s*(\d+(?:\.\d+)?)/gi)];
  const total=matches.reduce((a,m)=>a+Number(m[1]),0);
  if(!total)throw err('No se encontraron duraciones HLS.',422);
  return {durationSeconds:Math.round(total),source:'hls_vod_playlist',exact:true};
}
// ───── IntroScan 2.3.1: Cola D1, examen audiovisual ejecutado en Termux ─────
// ADMIN_TOKEN para el navegador; INTROSCAN_AGENT_TOKEN distinto para el agente.
const INTRO_TABLE = 'fenix_intro_jobs_v3';
async function introDb(env) {
  if (!env.DB) throw err('Conecta D1 como DB.',503);
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS fenix_intro_jobs_v3 (
    id TEXT PRIMARY KEY NOT NULL, series_id TEXT NOT NULL, episode_id TEXT NOT NULL,
    status TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
    snapshot TEXT NOT NULL, result TEXT, error TEXT
  )`).run();
}
async function checkIntroAgent(request,env){
  const secret=String(env.INTROSCAN_AGENT_TOKEN||'');
  if(secret.length<32) throw err('Falta configurar INTROSCAN_AGENT_TOKEN como secreto de 32 caracteres o más.',503);
  const provided=String(request.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');
  const h=async s=>new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
  const [a,b]=await Promise.all([h(provided),h(secret)]);
  let diff=0;for(let i=0;i<a.length;i++) diff|=a[i]^b[i];
  if(!provided||diff)throw err('Acceso IntroScan no autorizado.',401);
}
function introJobShape(j){return {id:j.id,seriesId:j.series_id,episodeId:j.episode_id,
  status:j.status,createdAt:j.created_at,updatedAt:j.updated_at,
  result:j.result?JSON.parse(j.result):null,error:j.error||null};}
function introPublicUrl(raw){
  const url=ensureUrl(raw,'Video a analizar');const u=new URL(url);
  const host=u.hostname.toLowerCase();
  if(u.username||u.password||!['http:','https:'].includes(u.protocol)||host==='localhost'||host.endsWith('.local')||
     host.endsWith('.internal')||host.endsWith('.localhost')||host==='0.0.0.0'||host==='::1'||
     /^(10\.|127\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host)||
     /^\d+\.\d+\.\d+\.\d+$/.test(host))throw err('Usa una URL pública HTTPS/HTTP, nunca una dirección local o privada.',422);
  return url;
}
// FÉNIX TV STUDIO 2.3.4 — IntroDB: lecturas públicas; no requiere cuenta ni API key.
// Esta consulta NO guarda datos. Solo al confirmar el formulario se escribe en D1.
async function lookupIntroDb(env,series,episode){
  const season=numRange(episode.season??episode.Season,'Temporada',0,99);
  const number=numRange(episode.episode??episode.Episode,'Episodio',1,999);
  const duration=Number(episode.durationSeconds)||0;
  let imdbId=clean(series.imdbId||series.imdb_id||series.IMDBId||'',32);
  let tmdbId=Number(series.tmdbId||series.TMDBId||0);
  let resolvedBy='linked';
  if(!/^tt\d{7,11}$/.test(imdbId)){
    // Para series importadas sin TMDB ID, buscar únicamente coincidencia inequívoca
    // de título y año; no asociar series distintas con nombre parecido.
    if(!Number.isSafeInteger(tmdbId)||tmdbId<1){
      const title=clean(series.Title,200);
      if(!title)throw err('La serie no tiene título ni ID de TMDB.',422);
      const matches=await tmdb(env,'search/tv',{query:title,include_adult:'false',page:1});
      const year=clean(series.Year,4);
      const exact=(matches.results||[]).filter(r=>slug(r.name||'')===slug(title)&&
        (!year||(r.first_air_date||'').slice(0,4)===year));
      if(exact.length!==1)throw err('No se pudo identificar la serie de forma única en TMDB. Vincula primero la ficha TMDB de esta serie.',422);
      tmdbId=Number(exact[0].id);resolvedBy='title_exact';
    }
    const external=await tmdb(env,'tv/'+tmdbId+'/external_ids',{});
    imdbId=clean(external.imdb_id||'',32);
  }
  if(!/^tt\d{7,11}$/.test(imdbId))return {found:false,status:'no_imdb',tmdbId:tmdbId||null};
  const remote=new URL('https://api.introdb.app/segments');
  remote.searchParams.set('imdb_id',imdbId);
  remote.searchParams.set('season',String(season));
  remote.searchParams.set('episode',String(number));
  let response;
  try{
    response=await fetch(remote.toString(),{headers:{Accept:'application/json','User-Agent':'FenixTV-Studio-IntroDB/2.3.4'},redirect:'manual',signal:AbortSignal.timeout(9000)});
  }catch(e){throw err('No se pudo contactar IntroDB. Reintenta en unos momentos.',502)}
  if(response.status===404)return {found:false,status:'not_found',imdbId};
  if(response.status===429)throw err('IntroDB alcanzó su límite de consultas. Reintenta más tarde.',429);
  if(!response.ok)throw err('IntroDB devolvió HTTP '+response.status+'.',502);
  const len=Number(response.headers.get('content-length')||0);
  if(len>64000)throw err('La respuesta de IntroDB excede el tamaño permitido.',502);
  const body=await response.text();
  if(body.length>64000)throw err('Respuesta de IntroDB demasiado grande.',502);
  let data;try{data=JSON.parse(body)}catch{throw err('IntroDB no devolvió un JSON válido.',502)}
  if(!data.intro)return {found:false,status:data.no_intro===true?'no_intro':'not_found',imdbId};
  const seg=data.intro;
  const st=Number(seg.start_sec??(seg.start_ms!=null?Number(seg.start_ms)/1000:NaN));
  const en=Number(seg.end_sec??(seg.end_ms!=null?Number(seg.end_ms)/1000:NaN));
  if(!Number.isFinite(st)||!Number.isFinite(en)||st<0||en<=st||en-st<3||en-st>240||en>7200||
     (duration>0&&en>duration+1))return {found:false,status:'out_of_range',imdbId};
  const conf=seg.confidence==null?null:Number(seg.confidence);
  return {found:true,status:'suggestion',source:'IntroDB',imdbId,tmdbId:tmdbId||null,
    resolvedBy,season,episode:number,startSeconds:st,endSeconds:en,
    confidence:Number.isFinite(conf)?Math.max(0,Math.min(1,conf)):null,
    submissionCount:Math.max(0,Number(seg.submission_count)||0)};
}


// 2.3.5: consulta pública agregada. No hace POST a servicios externos ni escribe en D1.
async function remoteSegmentJson(url){
  const res=await fetch(url,{headers:{Accept:'application/json'},redirect:'manual',signal:AbortSignal.timeout(7000)});
  if(res.status===404)return null;
  if(res.status===429)throw new Error('Límite de consultas (429).');
  if(!res.ok)throw new Error('HTTP '+res.status);
  const declared=Number(res.headers.get('content-length')||0);
  if(declared>100000)throw new Error('Respuesta demasiado grande.');
  const body=await res.text();if(body.length>100000)throw new Error('Respuesta demasiado grande.');
  return JSON.parse(body);
}
function segmentCandidate(source,type,raw,duration,{skipdb=false,tidb=false}={}){
  if(!raw||typeof raw!=='object'||(skipdb&&raw.match==='out-of-range'))return null;
  // TheIntroDB: null start means time zero; null end means end of known video.
  const st=tidb?((raw.start_ms??raw.startMs??0)/1000):
    skipdb?Number(raw.start_ms)/1000:Number(raw.start_sec??(raw.start_ms!=null?raw.start_ms/1000:NaN));
  const rawEnd=tidb?(raw.end_ms??raw.endMs):skipdb?raw.end_ms:raw.end_sec??(raw.end_ms!=null?raw.end_ms/1000:null);
  const en=tidb?(rawEnd==null?(duration||NaN):Number(rawEnd)/1000):
    skipdb?(rawEnd==null?(duration||NaN):Number(rawEnd)/1000):Number(rawEnd);
  const start=Number(st),end=Number(en);
  if(!Number.isFinite(start)||!Number.isFinite(end)||start<0||end<=start||end>21600||end-start>1200||(duration>0&&end>duration+0.5))return null;
  const conf=raw.confidence==null?null:Number(raw.confidence);
  return {source,type,startSeconds:Math.round(start*10)/10,endSeconds:Math.round(end*10)/10,
    confidence:Number.isFinite(conf)?Math.min(1,Math.max(0,conf)):null,
    submissions:Math.max(0,Number(raw.submission_count??raw.submissionCount)||0),
    match:skipdb?String(raw.match||'sin verificar'):''};
}
async function resolveCommunityIds(env,item,kind){
  let tmdbId=Number(item.tmdbId||item.TMDBId||0);
  let imdbId=clean(item.imdbId||item.imdb_id||item.IMDBId||'',32);
  let tvdbId=Number(item.tvdbId||item.tvdb_id||0);
  const type=kind==='movie'?'movie':'tv';
  if(!Number.isInteger(tmdbId)||tmdbId<1){
    const title=clean(item.Title||'',200);
    if(!title)throw err('Este título no tiene nombre ni TMDB ID.',422);
    const search=await tmdb(env,'search/'+type,{query:title,include_adult:'false',page:1});
    const yr=clean(item.Year||'',4);
    const matches=(search.results||[]).filter(x=>slug(x.title||x.name)===slug(title)&&(!yr||String(x.release_date||x.first_air_date||'').slice(0,4)===yr));
    if(matches.length!==1)throw err('No se encontró una coincidencia única en TMDB. Vincula primero la ficha del título.',422);
    tmdbId=Number(matches[0].id);
  }
  if(!/^tt\d{7,11}$/.test(imdbId)||!Number.isInteger(tvdbId)||tvdbId<1){
    try{
      const ext=await tmdb(env,type+'/'+tmdbId+'/external_ids',{});
      if(!/^tt\d{7,11}$/.test(imdbId))imdbId=clean(ext.imdb_id||'',32);
      if(!(tvdbId>0))tvdbId=Number(ext.tvdb_id||0);
    }catch(e){ /* TheIntroDB can still use tmdb_id */ }
  }
  if(!/^tt\d{7,11}$/.test(imdbId))imdbId='';
  if(!Number.isInteger(tvdbId)||tvdbId<1)tvdbId=0;
  return {tmdbId,imdbId,tvdbId};
}
async function lookupAllSegments(env,item,kind,episode=null){
  const ids=await resolveCommunityIds(env,item,kind);
  const duration=Number(episode?.durationSeconds??item.durationSeconds)||0;
  const isEpisode=kind==='episode';
  const season=isEpisode?numRange(episode.season,'Temporada',0,99):null;
  const number=isEpisode?numRange(episode.episode,'Episodio',1,999):null;
  const sources=['IntroDB','SkipDB','TheIntroDB'].map(name=>({name,status:'not_found',message:'Sin registros publicados.',segments:{intro:[],credits:[]}}));
  const jobs=[];
  if(ids.imdbId){
    const a=new URL('https://api.introdb.app/segments');a.searchParams.set('imdb_id',ids.imdbId);
    if(isEpisode){a.searchParams.set('season',String(season));a.searchParams.set('episode',String(number))}else a.searchParams.set('is_movie','true');
    jobs[0]=remoteSegmentJson(a.toString());
    const b=new URL('https://api.skipdb.tv/api/segments');b.searchParams.set('imdb_id',ids.imdbId);
    if(isEpisode){b.searchParams.set('season',String(season));b.searchParams.set('episode',String(number))}
    if(duration>0)b.searchParams.set('duration',String(duration));
    b.searchParams.set('adjust','conservative');jobs[1]=remoteSegmentJson(b.toString());
  }else{
    jobs[0]=Promise.resolve(null);jobs[1]=Promise.resolve(null);
    sources[0].message=sources[1].message='No fue posible obtener IMDb ID del título.';
  }
  const c=new URL('https://api.theintrodb.org/v4/media');
  if(ids.tvdbId)c.searchParams.set('tvdb_id',String(ids.tvdbId));else c.searchParams.set('tmdb_id',String(ids.tmdbId));
  if(isEpisode){c.searchParams.set('season',String(season));c.searchParams.set('episode',String(number))}
  if(duration>0)c.searchParams.set('duration_ms',String(Math.round(duration*1000)));
  c.searchParams.set('details','true');
  jobs[2]=remoteSegmentJson(c.toString());
  const answers=await Promise.allSettled(jobs);
  for(let i=0;i<3;i++){
    const result=answers[i],source=sources[i];
    if(result.status==='rejected'){source.status='error';source.message=String(result.reason?.message||'Error de conexión').slice(0,130);continue}
    const data=result.value;
    if(!data){if(i<2&&!ids.imdbId)source.status='missing_imdb';continue}
    if(i===2&&data.kind&&data.kind!=='media') {source.message='La fuente no devolvió segmentos para este episodio.';continue}
    const add=(type,value,opts)=>{
      for(const raw of (Array.isArray(value)?value:[value]).filter(Boolean).slice(0,8)){
        const candidate=segmentCandidate(source.name,type,raw,duration,opts);
        if(candidate)source.segments[type].push(candidate);
      }
    };
    if(i===0){add('intro',data.intro,{});add('credits',data.outro,{});
      if(data.no_intro&& !source.segments.intro.length)source.message='La comunidad marcó el episodio sin intro.';
    }else if(i===1){
      if(data.segments?.intro && data.segments.intro.start_ms===0&&data.segments.intro.end_ms===0)source.message='Intro marcada como inexistente.';
      else add('intro',data.segments?.intro,{skipdb:true});
      if(data.segments?.outro && data.segments.outro.start_ms===0&&data.segments.outro.end_ms===0){}
      else add('credits',data.segments?.outro,{skipdb:true});
    }else{
      add('intro',data.intro,{tidb:true});add('credits',data.credits,{tidb:true});
    }
    const total=source.segments.intro.length+source.segments.credits.length;
    if(total){source.status='found';source.message=total+' marca(s) disponible(s).'}
    else if((i===0&&data.no_intro)||source.message!=='Sin registros publicados.')source.status='not_found';
    else source.status='not_found';
  }
  const warnings=[];
  if(!duration)warnings.push('Duración desconocida: confirma los tiempos del archivo antes de guardar.');
  for(const type of ['intro','credits']){
    const records=sources.flatMap(s=>s.segments[type]);
    if(records.length>1 && records.some(r=>Math.abs(r.startSeconds-records[0].startSeconds)>4||Math.abs(r.endSeconds-records[0].endSeconds)>4))
      warnings.push('Las fuentes discrepan en '+(type==='intro'?'la intro':'los créditos')+'; puede haber ediciones distintas.');
  }
  return {ok:true,kind,title:isEpisode?(item.Title+' · T'+season+'E'+number):item.Title,
    durationSeconds:duration||null,ids:{tmdbId:ids.tmdbId,imdbId:ids.imdbId||null,tvdbId:ids.tvdbId||null},sources,warnings};
}
async function handleSegmentsLookup(request,env){
  const u=new URL(request.url),kind=u.searchParams.get('kind');
  if(!['movie','episode'].includes(kind))throw err('Indica kind=movie o kind=episode.',400);
  const vod=await readVod(env);
  if(kind==='movie'){
    const id=limitedId(u.searchParams.get('id'),'Película');
    const item=vod.movies.find(x=>x.id===id);
    if(!item)throw err('Guarda primero la película.',404);
    return json(await lookupAllSegments(env,item,'movie'));
  }
  const seriesId=limitedId(u.searchParams.get('seriesId'),'Serie');
  const epId=limitedId(u.searchParams.get('episodeId'),'Episodio');
  const series=vod.series.find(x=>x.id===seriesId);
  if(!series)throw err('Serie no encontrada.',404);
  const ep=(series.episodes||[]).find(x=>x.id===epId);
  if(!ep)throw err('Episodio no encontrado. Guárdalo primero.',404);
  return json(await lookupAllSegments(env,series,'episode',ep));
}

async function handleIntroApi(request,env,path,method){
  if(path==='/api/intro/introdb'&&method==='GET'){
    const u=new URL(request.url);
    const seriesId=limitedId(u.searchParams.get('seriesId'),'Serie');
    const episodeId=limitedId(u.searchParams.get('episodeId'),'Episodio');
    const vod=await readVod(env);
    const series=vod.series.find(s=>s.id===seriesId);
    if(!series)throw err('Serie no encontrada en tu biblioteca.',404);
    const episode=(series.episodes||[]).find(e=>e.id===episodeId);
    if(!episode)throw err('Capítulo no encontrado: guárdalo primero.',404);
    return json({ok:true,...await lookupIntroDb(env,series,episode)});
  }
  await introDb(env);
  if(path==='/api/intro/jobs'&&method==='POST'){
    const b=await parseBody(request);
    const vod=await readVod(env),series=vod.series.find(x=>x.id===b.seriesId);
    if(!series)throw err('Serie no encontrada en el panel.',404);
    const ep=series.episodes.find(x=>x.id===b.episodeId);
    if(!ep?.Url)throw err('Guarda primero el capítulo con su enlace de video.',422);
    introPublicUrl(ep.Url);
    const refs=series.episodes.filter(x=>x.id!==ep.id&&Number(x.season)===Number(ep.season)&&x.Url&&x.Url!==ep.Url&&x.enabled!==false)
      .sort((a,b)=>Math.abs(Number(a.episode)-Number(ep.episode))-Math.abs(Number(b.episode)-Number(ep.episode)))
      .slice(0,3).filter(x=>{try{introPublicUrl(x.Url);return true}catch{return false}});
    const old=await env.DB.prepare("SELECT * FROM fenix_intro_jobs_v3 WHERE series_id=? AND episode_id=? AND status IN ('pending','running') ORDER BY created_at DESC LIMIT 1").bind(series.id,ep.id).first();
    if(old)return json({ok:true,job:introJobShape(old)});
    const snapshot={seriesId:series.id,tmdbId:series.tmdbId||null,episode:{id:ep.id,number:+ep.episode,season:+ep.season,url:ep.Url,durationSeconds:+ep.durationSeconds||0},
      references:refs.map(x=>({id:x.id,number:+x.episode,url:x.Url,durationSeconds:+x.durationSeconds||0}))};
    const id=crypto.randomUUID(),now=new Date().toISOString();
    await env.DB.prepare('INSERT INTO fenix_intro_jobs_v3 (id,series_id,episode_id,status,created_at,updated_at,snapshot) VALUES (?,?,?,?,?,?,?)')
      .bind(id,series.id,ep.id,'pending',now,now,JSON.stringify(snapshot)).run();
    return json({ok:true,job:{id,status:'pending',referenceCount:refs.length},method:refs.length?'episode_comparison':'single_video'},201);
  }
  if(path==='/api/intro/jobs/next'&&method==='GET'){
    const job=await env.DB.prepare("SELECT * FROM fenix_intro_jobs_v3 WHERE status='pending' ORDER BY created_at ASC LIMIT 1").first();
    if(!job)return json({ok:true,job:null});
    const now=new Date().toISOString();
    const updated=await env.DB.prepare("UPDATE fenix_intro_jobs_v3 SET status='running',updated_at=? WHERE id=? AND status='pending'").bind(now,job.id).run();
    if(!updated.meta?.changes)return json({ok:true,job:null});
    return json({ok:true,job:{id:job.id,...JSON.parse(job.snapshot)}});
  }
  const match=path.match(/^\/api\/intro\/jobs\/([a-f0-9-]{36})(?:\/(result|retry))?$/i);
  if(!match)throw err('Ruta IntroScan inexistente.',404);
  const id=match[1],sub=match[2]||'';
  const row=await env.DB.prepare('SELECT * FROM fenix_intro_jobs_v3 WHERE id=?').bind(id).first();
  if(!row)throw err('Trabajo de análisis no encontrado.',404);
  if(!sub&&method==='GET')return json({ok:true,job:introJobShape(row)});
  if(sub==='retry'&&method==='POST'){
    if(row.status==='done')throw err('Este trabajo ya terminó. Puedes solicitar uno nuevo.',409);
    await env.DB.prepare("UPDATE fenix_intro_jobs_v3 SET status='pending',updated_at=?,error=NULL WHERE id=?").bind(new Date().toISOString(),id).run();
    return json({ok:true,status:'pending'});
  }
  if(sub!=='result'||method!=='POST')throw err('Método IntroScan no permitido.',405);
  if(row.status!=='running')throw err('Trabajo de análisis no está en ejecución.',409);
  const body=await parseBody(request),now=new Date().toISOString();
  if(body.error){
    await env.DB.prepare("UPDATE fenix_intro_jobs_v3 SET status='failed',updated_at=?,error=? WHERE id=? AND status='running'")
      .bind(now,clean(body.error,500),id).run();
    return json({ok:true,status:'failed'});
  }
  const snap=JSON.parse(row.snapshot);
  const vod=await readVod(env),series=vod.series.find(x=>x.id===snap.seriesId),ep=series?.episodes?.find(x=>x.id===snap.episode.id);
  if(!ep||ep.Url!==snap.episode.url)throw err('El archivo de este episodio cambió. Solicita nuevamente la revisión.',409);
  // No se guardan marcas falsas; candidato individual o con un solo referente = revisión.
  const found=body.found===true;
  const result={found,method:String(body.method||'unknown').slice(0,40),confidence:Number(body.confidence)||0,
    referencesAgree:Number(body.referencesAgree)||0};
  if(found){
    const st=Number(body.start),en=Number(body.end),duration=Number(ep.durationSeconds)||0;
    if(!Number.isFinite(st)||!Number.isFinite(en)||st<0||en<=st||en-st<8||en-st>240||
      st>1200||en>(duration>0?duration:7200))throw err('Rango de intro inválido o fuera del episodio.',422);
    result.start=st;result.end=en;
    const trusted=result.method==='multi_consensus'&&result.referencesAgree>=2&&result.confidence>=0.9;
    if(trusted){ep.introStartSeconds=st;ep.introEndSeconds=en;ep.introScanStatus='detected';ep.introScanMethod='multi_consensus'}
    else{ep.introSuggestedStartSeconds=st;ep.introSuggestedEndSeconds=en;ep.introScanStatus='needs_review';ep.introScanMethod=result.method}
    ep.introScanConfidence=Math.max(0,Math.min(1,result.confidence));ep.introScanAt=now;
    result.approved=trusted;
  }else{
    // Preservar marcas aprobadas previamente si un análisis nuevo no encontró intro.
    if(ep.introScanStatus!=='detected')ep.introScanStatus='not_detected';
    ep.introScanAt=now;result.approved=false;
  }
  await saveVod(env,vod);
  await env.DB.prepare("UPDATE fenix_intro_jobs_v3 SET status='done',result=?,updated_at=? WHERE id=? AND status='running'")
    .bind(JSON.stringify(result),now,id).run();
  return json({ok:true,status:'done',result});
}

async function handleVodApi(request,env,path,method,u){
  const bulk=await handleBulkVod(request,env,path,method,u);if(bulk)return bulk;
  if(path.startsWith('/api/vod/import/')){
    const result=await handleVodImport(request,env,path,method);if(result)return result;
  }
  if(path==='/api/vod'&&method==='GET')return json(await readVod(env));
  if(path==='/api/vod/existing-series'&&method==='GET'){
    return json({series:await loadUpstreamSeries(env)});
  }
  if(path==='/api/vod/tmdb-episode'&&method==='GET'){
    const id=numRange(u.searchParams.get('id'),'TMDB ID',1,100000000);
    const season=numRange(u.searchParams.get('season'),'Temporada',0,99);
    const episode=numRange(u.searchParams.get('episode'),'Episodio',1,999);
    const item=await tmdb(env,`tv/${id}/season/${season}/episode/${episode}`,{});
    return json({title:item.name||'',description:item.overview||'',image:posterUrl(item.still_path),
      suggestedDurationSeconds:item.runtime?item.runtime*60:null});
  }
  const rm=path.match(/^\/api\/vod\/(movies|series)(?:\/([a-zA-Z0-9_-]+))?(?:\/episodes(?:\/([a-zA-Z0-9_-]+))?)?$/);
  if(!rm)throw err('Ruta VOD no encontrada.',404);
  const kind=rm[1],id=rm[2],epId=rm[3],isEpisode=path.includes('/episodes');
  const vod=await readVod(env);const list=kind==='movies'?vod.movies:vod.series;
  const body=method==='POST'||method==='PUT'?await parseBody(request):{};
  if(!id&&!isEpisode&&method==='POST'){
    const item=kind==='movies'?normalizeMovie(body):normalizeSeries(body);
    const ix=kind==='series'?matchSeries(list,item):list.findIndex(m=>m.id===item.id||(m.tmdbId&&item.tmdbId&&+m.tmdbId===+item.tmdbId));
    if(ix!==-1)throw err('Esta '+(kind==='series'?'serie':'película')+' ya existe en el panel. Edítala o agrega un episodio.',409);
    list.push(item);
    await saveVod(env,vod);return json({ok:true,item},201);
  }
  if(!id)throw err('Falta identificador.',400);
  let ix=locateItem(list,id);
  if(kind==='series'&&ix<0&&isEpisode&&method==='POST'&&body.seriesSeed){
    const seed=body.seriesSeed;
    // Importar solo los metadatos de una serie existente, sin copiar su programación.
    const created=normalizeSeries({title:seed.Title||seed.title,image:seed.Logo||seed.image,
      description:seed.Description||seed.description,year:seed.Year||seed.year,
      genre:clean(seed.Genre||'Otros',80),tmdbId:seed.tmdbId||null}, {id:limitedId(id),episodes:[]});
    list.push(created);ix=list.length-1;
  }
  if(ix<0)throw err('No se encontró el título.',404);
  const item=list[ix];
  if(!isEpisode){
    if(method==='PUT')list[ix]=kind==='movies'?normalizeMovie(body,item):normalizeSeries(body,item);
    else if(method==='DELETE')list.splice(ix,1);
    else throw err('Método inválido.',405);
  }else{
    if(kind!=='series')throw err('Solo las series contienen episodios.');
    const episodes=item.episodes||[];
    if(!epId&&method==='POST'){
      const episode=normalizeEpisode(body,item);
      const ixOther=episodes.findIndex(e=>+e.season===episode.season&&+e.episode===episode.episode);
      if(ixOther>=0)throw err('Ese número de episodio ya está registrado. Edítalo.',409);
      episodes.push(episode);
    }else if(epId&&method==='DELETE'){
      const j=episodes.findIndex(e=>e.id===epId);if(j<0)throw err('Episodio no encontrado.',404);
      episodes.splice(j,1);
    }else if(epId&&method==='PUT'){
      const j=episodes.findIndex(e=>e.id===epId);if(j<0)throw err('Episodio no encontrado.',404);
      const updated=normalizeEpisode(body,item,episodes[j]);
      if(episodes.some((e,k)=>k!==j&&+e.season===updated.season&&+e.episode===updated.episode))throw err('El número de episodio ya existe.',409);
      episodes[j]=updated;
    }else throw err('Método inválido.',405);
    item.episodes=episodes.sort((a,b)=>a.season-b.season||a.episode-b.episode);
  }
  await saveVod(env,vod);
  return json({ok:true,item:kind==='series'?item:list[ix]||null});
}


// Configuración diaria independiente de las tandas comerciales.
const DEFAULT_PROMO = Object.freeze({enabled:true,mode:'legacy',title:'',message:'',imageUrl:'',audioUrl:'',durationSeconds:20,skipAfterSeconds:3,campaignId:'resident-evil-original'});
async function loadDailyPromo(env){
  if(!env.DB)return {...DEFAULT_PROMO};
  let row;
  try{row=await env.DB.prepare('SELECT content FROM cms_config WHERE key = ?').bind('dailyPromo').first();}
  catch(e){if(/no such table/i.test(String(e?.message||e)))return {...DEFAULT_PROMO};throw e}
  if(!row)return {...DEFAULT_PROMO};
  try{return {...DEFAULT_PROMO,...JSON.parse(row.content)};}catch(e){throw err('No se puede interpretar la configuración del anuncio.',500)}
}
function validateDailyPromo(data){
  if(!data||typeof data!=='object'||Array.isArray(data))throw err('Datos de anuncio inválidos.');
  const enabled=data.enabled!==false;
  const title=clean(data.title,90),message=clean(data.message,180);
  const durationSeconds=numRange(data.durationSeconds,'Duración del anuncio',5,60);
  const skipAfterSeconds=numRange(data.skipAfterSeconds,'Segundos antes de omitir',0,30);
  if(skipAfterSeconds>durationSeconds)throw err('Omitir debe estar dentro de la duración.');
  const imageUrl=ensureUrl(data.imageUrl,'Imagen del anuncio',!enabled),audioUrl=ensureUrl(data.audioUrl,'Música del anuncio',true);
  return {enabled,mode:'image-audio',title,message,imageUrl,audioUrl,durationSeconds,skipAfterSeconds,campaignId:'campaign-'+crypto.randomUUID(),updatedAt:new Date().toISOString()};
}
async function saveDailyPromo(env, data){
  if(!env.DB)throw err('Conecta D1 como DB antes de publicar.',503);
  const conf=validateDailyPromo(data);
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS cms_config (key TEXT PRIMARY KEY NOT NULL, content TEXT NOT NULL, updated_at TEXT NOT NULL)').run();
  await env.DB.prepare('INSERT INTO cms_config (key,content,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at').bind('dailyPromo',JSON.stringify(conf),conf.updatedAt).run();
  return conf;
}
const PROMO_TYPES={image:{'image/jpeg':'jpg','image/png':'png','image/webp':'webp'},audio:{'audio/mpeg':'mp3','audio/mp3':'mp3','audio/mp4':'m4a','audio/ogg':'ogg','audio/wav':'wav','audio/x-wav':'wav'}};
function validPromoFile(bytes,type,kind){
  const b=new Uint8Array(bytes,0,Math.min(bytes.byteLength,16));
  if(kind==='image'){
    if(type==='image/png')return b.length>=8&&b[0]===137&&b[1]===80&&b[2]===78&&b[3]===71;
    if(type==='image/jpeg')return b.length>=3&&b[0]===255&&b[1]===216&&b[2]===255;
    if(type==='image/webp')return b.length>=12&&String.fromCharCode(...b.slice(0,4))==='RIFF'&&String.fromCharCode(...b.slice(8,12))==='WEBP';
  }
  if(kind==='audio'){
    if(type==='audio/mpeg'||type==='audio/mp3')return b.length>=2&&((b[0]===73&&b[1]===68&&b[2]===51)||(b[0]===255&&(b[1]&0xe0)===0xe0));
    if(type==='audio/mp4')return b.length>=12&&String.fromCharCode(...b.slice(4,8))==='ftyp';
    if(type==='audio/ogg')return b.length>=4&&String.fromCharCode(...b.slice(0,4))==='OggS';
    if(type==='audio/wav'||type==='audio/x-wav')return b.length>=12&&String.fromCharCode(...b.slice(0,4))==='RIFF'&&String.fromCharCode(...b.slice(8,12))==='WAVE';
  }
  return false;
}
async function uploadDailyPromo(req,env,u){
  if(!env.PROMO_BUCKET)throw err('Para subir archivos desde el panel, conecta un bucket R2 como PROMO_BUCKET. También puedes usar una URL HTTPS externa.',503);
  const kind=u.searchParams.get('kind'),allowed=PROMO_TYPES[kind];
  if(!allowed)throw err('Indica kind=image o kind=audio.');
  const type=String(req.headers.get('content-type')||'').split(';')[0].toLowerCase();
  if(!allowed[type])throw err('Formato de archivo no admitido. Usa imagen JPG/PNG/WEBP o audio MP3/M4A/OGG/WAV.',415);
  const max=kind==='image'?5_000_000:12_000_000,len=Number(req.headers.get('content-length')||0);
  if(len>max)throw err('Archivo demasiado grande.',413);
  const data=await req.arrayBuffer();
  if(!data.byteLength||data.byteLength>max)throw err('Archivo vacío o demasiado grande.',413);
  if(!validPromoFile(data,type,kind))throw err('El archivo no coincide con su formato declarado.',415);
  const key=kind+'/'+crypto.randomUUID()+'.'+allowed[type];
  await env.PROMO_BUCKET.put(key,data,{httpMetadata:{contentType:type,cacheControl:'public,max-age=31536000,immutable'}});
  return json({ok:true,url:u.origin+'/promo/media/'+key,size:data.byteLength});
}
async function serveDailyPromoMedia(env,path,method){
  if(!env.PROMO_BUCKET)throw err('R2 no está conectado.',503);
  const match=path.match(/^\/promo\/media\/(image|audio)\/([a-f0-9-]{36})\.(jpg|png|webp|mp3|m4a|ogg|wav)$/i);
  if(!match)throw err('Archivo no encontrado.',404);
  const key=match[1]+'/'+match[2]+'.'+match[3];
  const obj=await env.PROMO_BUCKET.get(key);
  if(!obj)throw err('Archivo no encontrado.',404);
  const headers=new Headers({'access-control-allow-origin':'*','cache-control':'public,max-age=31536000,immutable','x-content-type-options':'nosniff','accept-ranges':'bytes'});
  obj.writeHttpMetadata(headers);
  return new Response(method==='HEAD'?null:obj.body,{headers});
}


// 2.3.9 — métricas agregadas, sin almacenar consultas ni historiales personales.
// Solo cuenta búsquedas de títulos existentes en el catálogo identificado por la TV.
const FENIX_TREND_HEADERS={
 'access-control-allow-origin':'*',
 'access-control-allow-methods':'GET, POST, OPTIONS',
 'access-control-allow-headers':'content-type',
 'cache-control':'no-store',
 'x-content-type-options':'nosniff',
 'content-type':'application/json; charset=utf-8'
};
function discoveryJson(data,status=200){return new Response(JSON.stringify(data),{status,headers:FENIX_TREND_HEADERS})}
async function ensureDiscoveryTables(env){
 if(!env.DB)throw err('Búsquedas globales: falta la conexión D1.',503);
 await env.DB.prepare('CREATE TABLE IF NOT EXISTS fenix_search_popular_day (day TEXT NOT NULL, media_key TEXT NOT NULL, title TEXT NOT NULL, kind TEXT NOT NULL, hits INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(day, media_key))').run();
 await env.DB.prepare('CREATE TABLE IF NOT EXISTS fenix_search_daily_dedupe (day TEXT NOT NULL, anon_hash TEXT NOT NULL, media_key TEXT NOT NULL, PRIMARY KEY(day, anon_hash, media_key))').run();
}
function discoveryDay(n=new Date()){return n.toISOString().slice(0,10)}
async function discoveryTrending(env){
 await ensureDiscoveryTables(env);
 const cutoff=discoveryDay(new Date(Date.now()-30*86400000));
 const r=await env.DB.prepare('SELECT media_key AS id, title, kind, SUM(hits) AS searches FROM fenix_search_popular_day WHERE day >= ? GROUP BY media_key, title, kind ORDER BY searches DESC, title ASC LIMIT 30').bind(cutoff).all();
 return discoveryJson({ok:true,windowDays:30,items:r.results||[]});
}
async function discoverySearch(req,env){
 // No raw search phrase, no user ID, no e-mail, no device ID is sent or stored.
 if(!env.DB||!(env.DISCOVERY_HASH_SECRET||env.ADMIN_TOKEN))throw err('Contador global pendiente de configurar.',503);
 const len=Number(req.headers.get('content-length')||0);
 if(len>1024)return discoveryJson({error:'Solicitud demasiado grande.'},413);
 let data;
 try{data=await req.json()}catch{return discoveryJson({error:'JSON inválido'},400)}
 const id=clean(data&&data.id,130),kind=clean(data&&data.kind,10),title=clean(data&&data.title,160).replace(/[<>]/g,'');
 if(!/^[a-zA-Z0-9_-]{2,130}$/.test(id)||!['movie','series'].includes(kind)||title.length<2)return discoveryJson({error:'Título inválido'},422);
 const day=discoveryDay();
 const ip=req.headers.get('cf-connecting-ip')||'';
 // Si la IP no es confiable o falta, no contar: evita duplicaciones y abuso.
 if(!ip)return discoveryJson({ok:true,counted:false,reason:'no_client_ip'});
 const secret=String(env.DISCOVERY_HASH_SECRET||env.ADMIN_TOKEN);
 const hkey=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const bytes=new Uint8Array(await crypto.subtle.sign('HMAC',hkey,new TextEncoder().encode(day+'|'+ip)));
 const anon=Array.from(bytes).map(v=>v.toString(16).padStart(2,'0')).join('').slice(0,40);
 const key=kind+':'+id;
 await ensureDiscoveryTables(env);
 // Eliminación progresiva de hashes y conteos antiguos, sin programar cron.
 if(Math.random()<0.04){
   const old=discoveryDay(new Date(Date.now()-45*86400000));
   await env.DB.prepare('DELETE FROM fenix_search_daily_dedupe WHERE day < ?').bind(old).run();
   await env.DB.prepare('DELETE FROM fenix_search_popular_day WHERE day < ?').bind(old).run();
 }
 const quota=await env.DB.prepare('SELECT COUNT(*) AS n FROM fenix_search_daily_dedupe WHERE day = ? AND anon_hash = ?').bind(day,anon).first();
 if(Number(quota?.n||0)>=30)return discoveryJson({ok:true,counted:false,reason:'daily_limit'});
 const inserted=await env.DB.prepare('INSERT OR IGNORE INTO fenix_search_daily_dedupe(day, anon_hash, media_key) VALUES(?,?,?)').bind(day,anon,key).run();
 if(Number(inserted.meta?.changes||0)===0)return discoveryJson({ok:true,counted:false,reason:'already_counted'});
 await env.DB.prepare('INSERT INTO fenix_search_popular_day(day,media_key,title,kind,hits) VALUES(?,?,?,?,1) ON CONFLICT(day,media_key) DO UPDATE SET hits=hits+1').bind(day,key,title,kind).run();
 return discoveryJson({ok:true,counted:true});
}

export default {
  async fetch(request, env) {
    try {
      const u = new URL(request.url), p = u.pathname, method = request.method;
      if (method === 'OPTIONS') return new Response(null, {status: 204, headers: p==='/discovery/search'?FENIX_TREND_HEADERS:{'allow': 'GET, POST, PUT, DELETE'}});
      if (p === '/promo.json' && method === 'GET') return json(await loadDailyPromo(env),200,true);
      if (p.startsWith('/promo/media/') && ['GET','HEAD'].includes(method)) return await serveDailyPromoMedia(env,p,method);
      if (p === '/health' && method === 'GET') return json({service:'fenix-tv-panel', version:'2.4.0', ok:true}, 200, true);
      if (p === '/channels.json' && method === 'GET') {
        const conf = await readConfig(env);
        // 503 si no hay canales importados: el Worker de emisión conservará su fallback.
        if (!Object.keys(conf.channels).length) throw err('Importa primero tus canales desde el panel.', 503);
        return json(conf, 200, true);
      }
      if (p === '/appearance.json' && method === 'GET') return json(await readAppearance(env),200,true);
      if (p === '/vod.json' && method === 'GET') return json(await readVod(env), 200, true);
      if (p === '/discovery/search' && method === 'OPTIONS') return new Response(null,{status:204,headers:FENIX_TREND_HEADERS});
      if (p === '/discovery/trending' && method === 'GET') return await discoveryTrending(env);
      if (p === '/discovery/search' && method === 'POST') return await discoverySearch(request,env);

      if (p.startsWith('/api/')) {
        if (!['GET','POST','PUT','DELETE'].includes(method)) throw err('Método no permitido', 405);
        const introAgentRoute=p==='/api/intro/jobs/next'||/^\/api\/intro\/jobs\/[a-f0-9-]{36}\/result$/i.test(p);
        if(introAgentRoute){
          await checkIntroAgent(request,env);
          return await handleIntroApi(request,env,p,method);
        }
        await checkToken(request, env);
        if (p === '/api/media-duration' && method === 'GET') {
          const url=checkMediaUrl(u.searchParams.get('url'));
          if(!/\.m3u8(?:$|\?)/i.test(url.toString()))
            return json({durationSeconds:null,exact:false,source:'client_video_metadata_required',note:'Prueba la detección del reproductor HTML5 en el navegador; MKV puede no ser compatible.'});
          return json(await detectHlsExact(url));
        }
        if (p === '/api/metadata/search' && method === 'GET') return json(await metadataSearch(env,u));
        if (p === '/api/metadata/detail' && method === 'GET') return json(await metadataDetail(env,u));
        if (p === '/api/segments/lookup' && method==='GET') return await handleSegmentsLookup(request,env);
        if (p.startsWith('/api/intro/')) return await handleIntroApi(request, env, p, method);
        if (p === '/api/promo' && method === 'GET') return json(await loadDailyPromo(env));
        if (p === '/api/promo' && method === 'PUT') return json(await saveDailyPromo(env,await parseBody(request)));
        if (p === '/api/promo/upload' && method === 'POST') return await uploadDailyPromo(request,env,u);
        if (p.startsWith('/api/vod')) return await handleVodApi(request, env, p, method, u);
        if (p === '/api/appearance' && method === 'GET') return json(await readAppearance(env));
        if (p === '/api/appearance' && method === 'PUT') return json(await saveAppearance(env,await parseBody(request)));
        if (p === '/api/me' && method === 'GET') return json({ok:true, metadataEnabled: !!(env.TMDB_TOKEN||env.TMDB_API_KEY), omdbEnabled:!!env.OMDB_API_KEY});
        if (p === '/api/config' && method === 'GET') return json(await readConfig(env));
        if (p === '/api/import' && method === 'POST') {
          const source = env.INITIAL_CHANNELS_URL;
          if (!source || !isUrl(source)) throw err('INITIAL_CHANNELS_URL no está configurado.', 503);
          const res = await fetch(source, {headers:{Accept:'application/json'}, redirect:'follow'});
          if (!res.ok) throw err('No se pudo importar GitHub (HTTP '+res.status+').', 502);
          const data = await res.json();
          // Validar la configuración externa antes de sobrescribir D1.
          if (!data || !data.channels || Array.isArray(data.channels)) throw err('El archivo remoto debe contener channels como objeto.');
          const saved = await saveConfig(env, data);
          return json({ok:true, count:Object.keys(saved.channels).length});
        }
        if (p === '/api/search' && method === 'GET') {
          const query = clean(u.searchParams.get('q'), 120);
          if (query.length < 2) return json({results:[]});
          const type = u.searchParams.get('type') === 'serie' ? 'tv' : 'movie';
          const search = {query, include_adult:'false', page:'1'};
          if (u.searchParams.get('year')) search[type==='movie'?'year':'first_air_date_year'] = u.searchParams.get('year');
          const result = await tmdb(env, 'search/' + type, search);
          return json({results: (result.results || []).slice(0,12).map(item => ({
            id:item.id, type, title:item.title||item.name, year:(item.release_date||item.first_air_date||'').slice(0,4),
            description:item.overview||'', image:posterUrl(item.poster_path), rating:item.vote_average||0,
          }))});
        }
        if (p === '/api/details' && method === 'GET') {
          const type = u.searchParams.get('type') === 'tv' ? 'tv' : 'movie';
          const id = Number(u.searchParams.get('id'));
          if (!Number.isSafeInteger(id) || id <= 0) throw err('ID de TMDB inválido.');
          const item = await tmdb(env, `${type}/${id}`, {});
          return json({
            title:item.title||item.name||'', year:(item.release_date||item.first_air_date||'').slice(0,4),
            description:item.overview||'', image:posterUrl(item.poster_path),
            // runtime puede ser aproximado o no estar definido; el usuario debe verificarlo.
            genres:(item.genres||[]).map(g=>({id:g.id,name:g.name})),
            tmdbId:item.id,
            suggestedDurationSeconds: type === 'movie' && item.runtime ? item.runtime*60 : (item.episode_run_time?.[0]||0)*60,
          });
        }
        const reorderRoute = p.match(/^\/api\/channels\/([a-z0-9-]+)\/reorder$/);
        if (reorderRoute && method === 'POST') {
          const conf = await readConfig(env);
          const ch = conf.channels[reorderRoute[1]];
          if (!ch) throw err('Canal no encontrado.', 404);
          const body = await parseBody(request);
          const from = Number(body.from), to = Number(body.to);
          if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from >= ch.programs.length || to >= ch.programs.length) throw err('Posición inválida.');
          const [item] = ch.programs.splice(from, 1);
          ch.programs.splice(to, 0, item);
          await saveConfig(env, conf);
          return json({ok:true});
        }
        const channelBulkPath=p.match(/^\/api\/channels\/([a-z0-9-]+)\/programs\/bulk$/);
        if(channelBulkPath&&method==='POST'){
          const body=await parseBody(request),items=validBulkItems(body),conf=await readConfig(env);
          const channel=conf.channels[channelBulkPath[1]];
          if(!channel)throw err('Canal no encontrado.',404);
          const existing=new Set(channel.programs.map(p=>p.url));
          const staged=[];let skipped=0;
          for(const raw of items){
            const p=programFields(raw,{},[...channel.programs,...staged]);
            p.id=(slug(p.title).slice(0,85)||'programa')+'-'+crypto.randomUUID().slice(0,10);
            const key=p.url;
            if(existing.has(key)){skipped++;continue;}
            existing.add(key);staged.push(p);
          }
          if(staged.length){channel.programs.push(...staged);channel.enabled=true;await saveConfig(env,conf);}
          return json({ok:true,created:staged.length,skipped});
        }
        const channelPath = p.match(/^\/api\/channels(?:\/([a-z0-9-]+))?(?:\/programs(?:\/([a-z0-9-]+))?)?$/);
        if (channelPath) {
          const key = channelPath[1], programId = channelPath[2];
          const programsRoute = p.includes('/programs');
          const conf = await readConfig(env);
          if (!key && method === 'POST' && !programsRoute) {
            const body = await parseBody(request);
            const newKey = slug(body.key || body.name);
            if (!newKey || conf.channels[newKey]) throw err('El nombre o clave de canal ya existe (o es inválido).');
            const channel = channelFields(body);
            if (body.inheritCommercial && conf.channels.hbofamily?.commercial) {
              channel.commercial = structuredClone(conf.channels.hbofamily.commercial);
            }
            channel.id = `fenix-${newKey}`;
            channel.specialKey = newKey;
            conf.channels[newKey] = channel;
            await saveConfig(env, conf);
            return json({ok:true,key:newKey}, 201);
          }
          if (!key || !conf.channels[key]) throw err('Canal no encontrado.', 404);
          const channel = conf.channels[key];
          if (!programsRoute && method === 'PUT') {
            const body = await parseBody(request);
            conf.channels[key] = channelFields(body, channel);
          } else if (!programsRoute && method === 'DELETE') {
            delete conf.channels[key];
          } else if (programsRoute && !programId && method === 'POST') {
            const body = await parseBody(request);
            channel.programs.push(programFields(body, {}, channel.programs));
            channel.enabled = true;
          } else if (programsRoute && programId && ['PUT','DELETE'].includes(method)) {
            const ix = channel.programs.findIndex(z => z.id === programId);
            if (ix < 0) throw err('Programa no encontrado.', 404);
            if (method === 'DELETE') channel.programs.splice(ix,1);
            else channel.programs[ix] = programFields(await parseBody(request), channel.programs[ix], channel.programs);
            if (channel.programs.length === 0) channel.enabled = false;
          } else throw err('Ruta no encontrada.', 404);
          const saved = await saveConfig(env, conf);
          return json({ok:true, channel: saved.channels[key] || null});
        }
        throw err('Ruta de API no encontrada.', 404);
      }
      if (method !== 'GET' && method !== 'HEAD') throw err('Método no permitido', 405);
      const asset = BUILTIN_ASSETS[p === '/index.html' ? '/' : p];
      if (!asset) throw err('Archivo no encontrado.', 404);
      return noStore(new Response(method === 'HEAD' ? null : asset.body, {
        status: 200,
        headers: {'content-type': asset.type},
      }));
    } catch (e) {
      return json({error:e.message||'Error desconocido'}, e.status && e.status >= 400 && e.status <= 599 ? e.status : 500);
    }
  },
};
export const __test = {loadDailyPromo,saveDailyPromo,validateDailyPromo,validPromoFile, omdbCall,omdbMinutes,metadataSearch,metadataDetail, tmdbLatam,  segmentCandidate, lookupAllSegments, segmentMarks, handleSegmentsLookup,  lookupIntroDb, slug, durationSeconds, programFields, channelFields, validateConfig, normalizeMovie, normalizeSeries, normalizeEpisode, validateVod, readVod, saveVod, handleVodApi, handleBulkVod, detectHlsExact, validBulkItems, normalizeBulkMovie, normalizeBulkEpisode };
