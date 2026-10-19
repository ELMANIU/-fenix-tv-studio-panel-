// FENIX TV STUDIO · versión móvil: un solo archivo Worker sin dependencias ni archivos estáticos externos
// FÉNIX TV • CMS para Cloudflare Workers + D1
// Admin protegido por bearer token; /channels.json es público para el Worker reproductor.
const BUILTIN_ASSETS = {"/":{"type":"text/html; charset=utf-8","body":"<!doctype html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <meta name=\"theme-color\" content=\"#09101c\" />\n  <title>FÉNIX TV · Central de canales</title>\n  <link rel=\"stylesheet\" href=\"/style.css\" />\n  <script defer src=\"/app.js\"></script>\n</head>\n<body>\n  <div class=\"ambient a1\"></div><div class=\"ambient a2\"></div>\n  <div id=\"toast\" class=\"toast\" role=\"status\" aria-live=\"polite\"></div>\n  <main>\n    <section id=\"login\" class=\"auth-page\">\n      <div class=\"auth-card\">\n        <div class=\"brand-mark\">F<span>✦</span></div>\n        <div class=\"eyebrow\">CENTRO DE CONTROL</div>\n        <h1>FÉNIX <em>TV</em></h1>\n        <p>Tu programación, tus canales. Todo desde un solo lugar.</p>\n        <form id=\"loginForm\" class=\"form-stack\">\n          <label>Clave de administración<input id=\"token\" type=\"password\" autocomplete=\"off\" required placeholder=\"Tu ADMIN_TOKEN de Cloudflare\" /></label>\n          <button class=\"primary wide\" type=\"submit\">Entrar al panel <span>↗</span></button>\n        </form>\n        <small>Tu clave se guarda únicamente durante esta pestaña; no se publica en GitHub ni en el panel.</small>\n      </div>\n    </section>\n\n    <section id=\"app\" class=\"app\" hidden>\n      <header class=\"header\">\n        <div class=\"logo\"><span class=\"logo-sign\">F✦</span><span><strong>FÉNIX TV</strong><small>STUDIO · CENTRAL DE CANALES</small></span></div>\n        <div class=\"header-actions\">\n          <span class=\"live-dot\"><i></i> ADMIN ONLINE</span>\n          <button id=\"importBtn\" class=\"button outline\" type=\"button\">↻ Importar GitHub</button>\n          <button id=\"logoutBtn\" class=\"button ghost\" type=\"button\">Salir</button>\n        </div>\n      </header>\n<nav class=\"studio-nav\"><button type=\"button\" id=\"tabChannels\" class=\"active\">📡 Canales 24/7</button><button type=\"button\" id=\"tabVod\">🎬 Películas y Series</button></nav>\n      <div class=\"dashboard\">\n        <aside class=\"sidebar\">\n          <div class=\"section-head\"><span>TUS CANALES</span><button id=\"newChannelSide\" class=\"small-plus\" aria-label=\"Nuevo canal\">+</button></div>\n          <div id=\"channelsList\" class=\"channels-list\"></div>\n          <button id=\"newChannel\" class=\"new-channel\" type=\"button\"><span>＋</span> Crear nuevo canal</button>\n          <div class=\"sidebar-footer\"><span>CONTENIDO CENTRALIZADO</span><p>Todos aparecerán bajo <strong>Canales Fénix</strong> después de aplicar la integración.</p></div>\n        </aside>\n        <div class=\"workspace\">\n          <div class=\"topline\"><div><div class=\"eyebrow\">GESTIÓN DE PROGRAMACIÓN</div><h2>Mi central de canales <span>✦</span></h2><p>Actualiza tu señal 24/7 sin tocar una línea de JSON.</p></div>\n            <div class=\"status-card\"><span>CONFIGURACIÓN</span><strong id=\"revision\">—</strong><small>Los cambios se guardan en Cloudflare D1</small></div>\n          </div>\n          <div id=\"empty\" class=\"empty-state\" hidden><div class=\"empty-icon\">◈</div><h3>Empieza con tus tres canales actuales</h3><p>Importa tu channels.json de GitHub una sola vez. Después podrás crear canales, editar y añadir contenido aquí.</p><button id=\"emptyImport\" class=\"primary\" type=\"button\">Importar canales existentes ↗</button></div>\n          <div id=\"detail\" hidden>\n            <div class=\"summary-row\"><div class=\"stat\"><span>CANALES REGISTRADOS</span><strong id=\"totalChannels\">0</strong></div><div class=\"stat\"><span>PROGRAMAS DEL CANAL</span><strong id=\"totalPrograms\">0</strong></div><div class=\"stat\"><span>EMISIÓN</span><strong id=\"activeState\">—</strong></div></div>\n            <section class=\"channel-hero\"><div id=\"heroLogo\" class=\"hero-logo\">F✦</div><div><span class=\"tag\">CANAL SELECCIONADO</span><h3 id=\"heroTitle\">—</h3><p id=\"heroDesc\">—</p><div class=\"hero-meta\"><span id=\"heroKey\"></span><span>● Programación lineal 24/7</span></div></div><button id=\"editChannel\" class=\"button outline hero-edit\" type=\"button\">✎ Editar canal</button></section>\n            <div class=\"main-grid\">\n              <section class=\"panel editor-panel\"><div class=\"panel-title\"><span class=\"tile-icon\">＋</span><div><h3 id=\"programEditorTitle\">Agregar contenido</h3><p>Película, serie o documental</p></div></div>\n                <form id=\"programForm\" class=\"form-stack\">\n                  <div class=\"two-col\"><label>Tipo de contenido<select id=\"pType\"><option value=\"pelicula\">Película</option><option value=\"serie\">Serie / episodio</option><option value=\"documental\">Documental</option><option value=\"otro\">Otro</option></select></label><label>Año (opcional)<input id=\"pYear\" type=\"number\" min=\"1880\" max=\"2150\" placeholder=\"2006\" /></label></div>\n                  <label>Título<input id=\"pTitle\" required placeholder=\"Ej. La pantera rosa\" /></label>\n                  <button id=\"searchMetadata\" class=\"lookup\" type=\"button\">✧ Buscar ficha, sinopsis e imagen automáticamente</button>\n                  <div id=\"metadataResults\" class=\"search-results\" hidden></div>\n                  <label>URL del video<input id=\"pUrl\" type=\"url\" required placeholder=\"https://.../video.mp4\" /></label>\n                  <div class=\"two-col\"><label>Duración exacta <small>6 dígitos HHMMSS o HH:MM:SS</small><input id=\"pDuration\" placeholder=\"013425\" inputmode=\"numeric\" pattern=\"[0-9]{6}|[0-9]{1,3}:[0-9]{2}:[0-9]{2}\" required /></label><label>Formato<select id=\"pFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS (.m3u8)</option></select></label></div>\n                  <label>Sinopsis<textarea id=\"pDescription\" rows=\"3\" placeholder=\"Se completará al buscar el título (opcional)\"></textarea></label>\n                  <label>Imagen / póster (opcional)<input id=\"pImage\" type=\"url\" placeholder=\"https://.../poster.jpg\" /></label>\n                  <div class=\"form-buttons\"><button class=\"primary wide\" id=\"saveProgram\" type=\"submit\">＋ Guardar en este canal</button><button type=\"button\" id=\"cancelProgram\" class=\"button ghost\" hidden>Cancelar edición</button></div>\n                </form>\n              </section>\n              <section class=\"panel playlist-panel\"><div class=\"panel-title list-title\"><span class=\"tile-icon\">▤</span><div><h3>Lista de reproducción</h3><p>Se repite automáticamente las 24 horas</p></div><span id=\"playlistCount\" class=\"count-tag\">0</span></div><div id=\"programsList\" class=\"programs-list\"></div></section>\n            </div>\n          </div>\n          <footer>FÉNIX TV STUDIO • Los enlaces de video deben permitir reproducción directa y contar con derechos de transmisión.</footer>\n        </div>\n      </div>\n<section id=\"vodPanel\" class=\"vod-panel\" hidden>\n  <div class=\"vod-head\"><div class=\"eyebrow\">BIBLIOTECA BAJO DEMANDA</div><h2>Películas y Series <span>✦</span></h2><p>Agrega títulos al catálogo sin editar JSON. TMDB completa la ficha; tú proporcionas el video autorizado.</p></div>\n  <div class=\"vod-switch\"><button type=\"button\" class=\"active\" id=\"vodMoviesTab\">🎬 Películas</button><button type=\"button\" id=\"vodSeriesTab\">▤ Series y episodios</button><span class=\"vod-sync\">Se guardan en Cloudflare D1</span></div>\n  <div class=\"vod-layout\">\n    <section class=\"panel vod-editor\"><h3 id=\"vodEditorTitle\">Nueva película</h3>\n      <form id=\"vodForm\" class=\"form-stack\">\n        <label>Título<input id=\"vodTitle\" placeholder=\"Busca por nombre, por ejemplo: La pantera rosa\" required maxlength=\"200\"></label>\n        <button type=\"button\" class=\"lookup\" id=\"vodTmdb\">✧ Buscar ficha en TMDB</button>\n        <div id=\"vodTmdbResults\" class=\"search-results\" hidden></div>\n        <div class=\"two-col\"><label>Año<input id=\"vodYear\" type=\"number\" min=\"1880\" max=\"2150\" placeholder=\"2006\"></label>\n          <label>Género<select id=\"vodGenre\"></select></label></div>\n        <label>Sinopsis<textarea id=\"vodDescription\" rows=\"3\" placeholder=\"Se completa con TMDB o puedes escribirla\"></textarea></label>\n        <label>URL del póster<input id=\"vodPoster\" type=\"url\" placeholder=\"https://image.tmdb.org/...\" /></label>\n        <div id=\"vodMovieInputs\">\n          <label>URL de reproducción<input id=\"vodUrl\" type=\"url\" placeholder=\"https://...mp4\" /></label>\n          <div class=\"two-col\"><label>Duración (HHMMSS)<input id=\"vodDuration\" inputmode=\"numeric\" placeholder=\"013425\" /></label>\n            <label>Formato<select id=\"vodFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS (.m3u8)</option></select></label></div>\n        </div>\n        <div class=\"dialog-tip\">Los géneros se eligen automáticamente cuando TMDB los proporciona; puedes corregirlos antes de guardar. La duración debe corresponder a tu archivo.</div>\n        <input type=\"hidden\" id=\"vodTmdbId\" />\n        <div class=\"form-buttons\"><button type=\"submit\" class=\"primary wide\" id=\"vodSave\">＋ Guardar película</button><button type=\"button\" class=\"button ghost\" id=\"vodCancel\">Cancelar edición</button></div>\n      </form>\n    </section>\n    <section class=\"panel vod-list-panel\"><h3 id=\"vodListTitle\">Películas añadidas</h3><div id=\"vodItems\" class=\"vod-items\"></div>\n      <div id=\"vodExistingWrap\" hidden><h3>Agregar capítulo a una serie del catálogo</h3><p class=\"vod-help\">Incluso si la serie fue agregada antes directamente a Roku-feed.</p>\n        <select id=\"vodExistingSeries\"><option value=\"\">Selecciona una serie existente...</option></select><button id=\"vodUseExisting\" type=\"button\" class=\"button outline\">＋ Abrir serie y agregar episodio</button>\n      </div>\n    </section>\n  </div>\n  <section id=\"vodEpisodeArea\" class=\"panel vod-episode-area\" hidden>\n    <div class=\"vod-episode-head\"><div><span class=\"eyebrow\">EDITOR DE EPISODIOS</span><h3 id=\"vodCurrentSeries\">Serie</h3></div><button type=\"button\" class=\"button ghost\" id=\"vodCloseEpisodes\">Cerrar</button></div>\n    <div id=\"vodEpisodes\" class=\"vod-items\"></div>\n    <form id=\"vodEpisodeForm\" class=\"form-stack\">\n      <div class=\"two-col\"><label>Temporada<input id=\"vodSeason\" type=\"number\" value=\"1\" min=\"0\" max=\"99\" required/></label><label>Episodio<input id=\"vodEpisodeNum\" type=\"number\" value=\"1\" min=\"1\" max=\"999\" required/></label></div>\n      <button type=\"button\" id=\"vodEpisodeTmdb\" class=\"lookup\">✧ Completar capítulo automáticamente con TMDB</button>\n      <label>Nombre del capítulo<input id=\"vodEpisodeTitle\" placeholder=\"Episodio 1\" /></label>\n      <label>URL del video<input id=\"vodEpisodeUrl\" type=\"url\" placeholder=\"https://...mp4\" required/></label>\n      <div class=\"two-col\"><label>Duración exacta (HHMMSS)<input id=\"vodEpisodeDuration\" placeholder=\"002325\" inputmode=\"numeric\" required/></label>\n        <label>Formato<select id=\"vodEpisodeFormat\"><option value=\"mp4\">MP4</option><option value=\"mkv\">MKV</option><option value=\"hls\">HLS</option></select></label></div>\n      <label>Descripción del capítulo<textarea id=\"vodEpisodeDesc\" rows=\"2\"></textarea></label>\n      <label>Imagen del episodio (opcional)<input id=\"vodEpisodeImage\" type=\"url\" /></label>\n      <div class=\"form-buttons\"><button type=\"submit\" id=\"vodSaveEpisode\" class=\"primary wide\">＋ Agregar episodio</button><button type=\"button\" id=\"vodEpisodeCancel\" class=\"button ghost\">Cancelar edición</button></div>\n    </form>\n  </section>\n  <footer>FÉNIX TV STUDIO · Los metadatos de TMDB no incluyen licencias de reproducción. Publica solo enlaces que tengas derecho a distribuir.</footer>\n</section>\n\n    </section>\n    <dialog id=\"channelDialog\" class=\"dialog\"><form id=\"channelForm\" class=\"modal-form\"><div class=\"modal-title\"><div><div class=\"eyebrow\">FÉNIX TV STUDIO</div><h3 id=\"channelDialogTitle\">Nuevo canal</h3></div><button type=\"button\" id=\"closeDialog\" aria-label=\"Cerrar\" class=\"button ghost\">✕</button></div>\n      <label>Nombre del canal<input id=\"cName\" required placeholder=\"FÉNIX NATURALEZA HD\" /></label>\n      <label>URL del logotipo PNG transparente<input id=\"cLogo\" type=\"url\" placeholder=\"https://.../logo.png\" /></label>\n      <label>Descripción<textarea id=\"cDescription\" rows=\"3\" placeholder=\"Canal de documentales en español latino 24/7\"></textarea></label>\n      <label class=\"checkbox-line\" id=\"commercialOption\"><input id=\"cInheritCommercial\" type=\"checkbox\" checked /> Usar los mismos comerciales que FÉNIX FAMILY</label>\n      <div class=\"dialog-tip\">Los canales nuevos se crean como borradores y se activan al agregar su primer programa. Todos usarán la sección <strong>Canales Fénix</strong>.</div>\n      <button type=\"submit\" class=\"primary wide\" id=\"saveChannel\">Crear canal</button><button type=\"button\" id=\"deleteChannel\" class=\"button danger wide\" hidden>Eliminar este canal</button>\n    </form></dialog>\n  </main>\n</body>\n</html>\n"},"/style.css":{"type":"text/css; charset=utf-8","body":":root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;color:#eaf2fe;background:#070d17;font-synthesis:none}*{box-sizing:border-box}body{margin:0;min-height:100vh}button,input,select,textarea{font:inherit}button{cursor:pointer}button:disabled{opacity:.6;cursor:wait}a{color:#77e5e0}.ambient{position:fixed;z-index:-1;pointer-events:none;width:38vw;height:38vw;filter:blur(100px);opacity:.17;border-radius:50%}.a1{background:#05bcba;top:-20vw;left:0}.a2{background:#7c3fff;bottom:-24vw;right:0}.app{min-height:100vh}[hidden]{display:none!important}.header{height:84px;border-bottom:1px solid #1e2c3c;background:#0b1320ed;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(16px,3vw,44px);gap:20px}.logo{display:flex;align-items:center;gap:13px}.logo-sign,.brand-mark{display:grid;place-items:center;background:linear-gradient(135deg,#02d3be,#018bd6);color:#061923;font-weight:1000;border-radius:14px}.logo-sign{width:44px;height:44px;font-size:22px}.logo strong{display:block;letter-spacing:.15em;font-size:18px}.logo small{display:block;color:#7090a3;font-size:9px;letter-spacing:.19em;margin-top:4px}.header-actions{display:flex;align-items:center;gap:12px}.live-dot{font-size:11px;color:#91afa9;letter-spacing:.11em;white-space:nowrap;margin-right:10px}.live-dot i{display:inline-block;background:#18d5a6;width:7px;height:7px;border-radius:50%;margin-right:6px;box-shadow:0 0 10px #18d5a6}.button,.primary{border:1px solid #34455b;background:#1b2939;color:#e9f9ff;border-radius:10px;padding:11px 16px;font-weight:650;font-size:13px;transition:.2s}.button:hover{background:#2b3b51}.button.outline{background:transparent}.button.ghost{background:transparent;border-color:transparent;color:#b2c5d4}.button.danger{border-color:#743341;color:#ffb6c5;background:#361e2a}.primary{border-color:#0bceb0;background:linear-gradient(110deg,#09b7b0,#10d3ab);color:#05242e;box-shadow:0 7px 22px #08c8b224}.primary:hover{filter:brightness(1.08)}.wide{width:100%}.dashboard{display:grid;grid-template-columns:258px minmax(0,1fr)}.sidebar{background:#0c1522;border-right:1px solid #1e2c3c;min-height:calc(100vh - 84px);padding:30px 16px;display:flex;flex-direction:column}.section-head{display:flex;align-items:center;justify-content:space-between;padding:0 12px;margin-bottom:15px;font-size:11px;letter-spacing:.14em;color:#849db0;font-weight:800}.small-plus{background:#172c3a;color:#26e2c3;border:1px solid #244555;border-radius:8px;width:26px;height:26px;font-size:17px}.channels-list{display:grid;gap:8px}.channel-option{border:1px solid transparent;border-radius:12px;background:transparent;display:flex;align-items:center;gap:12px;color:#bfd0de;text-align:left;padding:12px;width:100%}.channel-option.active{background:#123337;border-color:#1a625e;color:#e2fff8}.channel-option:hover{background:#182838}.channel-option img{width:36px;height:36px;object-fit:contain;background:#111f2d;border-radius:8px}.channel-option .channel-initial{width:36px;height:36px;display:grid;place-items:center;background:#1c283f;border-radius:8px}.channel-option strong{display:block;font-size:11px;letter-spacing:.02em}.channel-option small{color:#8397a9;font-size:10px;margin-top:5px;display:block}.new-channel{margin:20px 4px 0;border:1px dashed #2d6070;border-radius:12px;padding:14px 9px;background:transparent;color:#5ce1d7;font-size:12px;font-weight:750}.new-channel span{font-size:18px;margin-right:8px}.sidebar-footer{margin-top:auto;padding:28px 12px;color:#657f92;font-size:11px}.sidebar-footer span{letter-spacing:.1em;font-weight:800;font-size:10px}.sidebar-footer p{line-height:1.7}.sidebar-footer strong{color:#9acfd0}.workspace{padding:42px clamp(20px,3vw,52px);min-width:0;max-width:1750px;width:100%}.topline{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:33px}.eyebrow{font-size:10px;font-weight:850;color:#00dcb8;letter-spacing:.2em;margin-bottom:9px}h2{font-size:30px;letter-spacing:-.03em;margin:0 0 9px}h2 span{color:#09d8be}p{line-height:1.5}.topline p{margin:0;color:#7d92a9;font-size:13px}.status-card{border:1px solid #253749;border-radius:12px;background:#101c2a;padding:18px 22px;max-width:250px}.status-card span,.stat span{font-size:10px;letter-spacing:.13em;color:#7f9aab;font-weight:850;display:block}.status-card strong{font-size:12px;display:block;margin:9px 0;word-break:break-word}.status-card small{color:#607d91;font-size:10px}.summary-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-bottom:20px}.stat{padding:22px 26px;background:#101d2b;border:1px solid #25394c;border-radius:12px}.stat strong{display:block;margin-top:12px;font-size:26px;letter-spacing:-.03em}.channel-hero{display:flex;align-items:center;gap:22px;background:linear-gradient(110deg,#142b38,#101c2b 65%);border:1px solid #29555a;border-radius:15px;padding:26px;margin-bottom:22px}.hero-logo{width:90px;height:90px;min-width:90px;border-radius:18px;display:grid;place-items:center;font-size:30px;background:#0b1d30;overflow:hidden}.hero-logo img{width:90%;height:90%;object-fit:contain}.tag{font-size:10px;background:#214c4b;color:#4de0ca;border-radius:6px;padding:6px 9px;font-weight:800;letter-spacing:.08em}.channel-hero h3{font-size:23px;margin:15px 0 5px}.channel-hero p{font-size:12px;color:#95b3bf;margin:0}.hero-meta{display:flex;gap:17px;color:#85bbb4;font-size:10px;margin-top:14px;flex-wrap:wrap}.hero-edit{margin-left:auto;white-space:nowrap}.main-grid{display:grid;grid-template-columns:minmax(310px,1fr) minmax(310px,1fr);gap:20px;align-items:start}.panel{border:1px solid #263749;border-radius:14px;background:#0f1b29;padding:24px;min-width:0}.panel-title{display:flex;align-items:center;gap:13px;margin-bottom:26px}.tile-icon{height:40px;width:40px;display:grid;place-items:center;background:#0d383d;color:#13d2bc;border-radius:10px;font-size:23px}.panel-title h3{font-size:17px;margin:0 0 5px}.panel-title p{font-size:11px;color:#778fa4;margin:0}.list-title .count-tag{margin-left:auto;background:#213442;color:#b9d1e0;padding:5px 9px;border-radius:6px;font-size:12px}.form-stack{display:flex;flex-direction:column;gap:16px}label{display:flex;flex-direction:column;gap:8px;color:#aabfd0;font-size:12px;font-weight:670}label small{font-size:10px;color:#647d8f}input,textarea,select{background:#091522;border:1px solid #2a4054;color:#edf6ff;border-radius:9px;padding:12px 13px;outline:none;width:100%;font-size:13px}input:focus,textarea:focus,select:focus{border-color:#0ac8b5;box-shadow:0 0 0 3px #0ac8b514}input::placeholder,textarea::placeholder{color:#576a7a}textarea{resize:vertical}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px}.lookup{background:#132e36;border:1px dashed #247875;border-radius:9px;color:#51dbc6;padding:12px;font-size:12px;text-align:center;font-weight:720}.form-buttons{display:flex;gap:10px}.programs-list{display:grid;gap:10px}.program-card{display:flex;gap:12px;align-items:center;padding:13px;background:#101f2e;border:1px solid #263c4b;border-radius:11px}.program-img{width:55px;min-width:55px;height:69px;border-radius:7px;object-fit:cover;background:#193044;display:grid;place-items:center;color:#25cabf;font-size:22px}.program-info{flex:1;min-width:0}.program-info strong{display:block;font-size:12px;overflow-wrap:anywhere}.program-info p{font-size:10px;color:#7e97a8;margin:7px 0 4px}.program-info span{font-size:10px;color:#49cdb8}.program-actions{display:flex;flex-direction:column;gap:7px}.program-actions button{background:#243446;border:1px solid #315066;color:#bdcddd;border-radius:7px;padding:5px 8px;font-size:10px}.program-actions button:last-child{color:#e98d9a}.empty-list{padding:55px 20px;text-align:center;border:1px dashed #395269;border-radius:10px;color:#8d9fb0;font-size:13px}.empty-state{background:#102435;border:1px dashed #31606e;border-radius:16px;text-align:center;padding:70px 25px}.empty-icon{font-size:40px;color:#27d9cb}.empty-state h3{margin:12px 0;font-size:20px}.empty-state p{max-width:450px;margin:12px auto 25px;color:#8fb4be;font-size:13px}footer{font-size:10px;color:#557284;margin-top:44px;text-align:center}.dialog{max-width:480px;width:calc(100% - 28px);background:#101e2d;color:#e3f2fa;border:1px solid #315368;border-radius:16px;padding:28px;box-shadow:0 30px 150px #000b}.dialog::backdrop{background:#020b15cc;backdrop-filter:blur(6px)}.modal-form{display:grid;gap:18px}.modal-title{display:flex;justify-content:space-between;align-items:center}.modal-title h3{font-size:22px;margin:0}.dialog-tip{background:#132d39;padding:14px;color:#a6bbc8;font-size:12px;border-radius:9px;line-height:1.6}.toast{position:fixed;z-index:100;bottom:25px;right:25px;background:#173e3e;color:#d8fff7;padding:13px 20px;border-radius:10px;border:1px solid #368985;box-shadow:0 10px 30px #0008;font-size:12px;max-width:420px;opacity:0;pointer-events:none;transition:.2s}.toast.show{opacity:1}.toast.error{background:#552333;color:#ffe3e8;border-color:#8e455b}.auth-page{min-height:100vh;display:grid;place-items:center;padding:30px}.auth-card{max-width:420px;width:100%;border:1px solid #284150;border-radius:18px;background:#0c1b29;padding:44px 36px;text-align:center;box-shadow:0 35px 90px #0006}.brand-mark{width:66px;height:66px;font-size:31px;margin:0 auto 22px}.brand-mark span{font-size:15px;margin-left:-12px}.auth-card h1{font-size:35px;letter-spacing:.13em;margin:4px 0}.auth-card h1 em{color:#16c9b0;font-style:normal}.auth-card p{font-size:13px;color:#89a5b4;margin:14px 0 30px}.auth-card label{text-align:left}.auth-card small{display:block;color:#607e91;margin-top:24px;line-height:1.5}.search-results{max-height:250px;overflow:auto;border:1px solid #2a5b65;background:#0b222b;border-radius:10px}.search-choice{display:flex;align-items:center;gap:9px;width:100%;background:transparent;border:0;border-bottom:1px solid #22424c;color:#e0f4f8;text-align:left;padding:10px}.search-choice:hover{background:#183e43}.search-choice img{width:36px;height:54px;object-fit:cover;border-radius:5px}.search-choice strong{display:block;font-size:12px}.search-choice small{display:block;font-size:10px;color:#759dac;margin-top:5px}@media(max-width:1100px){.main-grid{grid-template-columns:1fr}.status-card{display:none}}@media(max-width:760px){.header{height:72px}.dashboard{display:block}.sidebar{min-height:0;padding:16px;border-right:0;border-bottom:1px solid #284050}.channels-list{display:flex;overflow-x:auto;gap:8px;padding-bottom:6px}.channel-option{width:auto;min-width:165px}.sidebar-footer{display:none}.new-channel{margin-top:10px;width:100%}.workspace{padding:26px 16px}.topline{margin-bottom:22px}.topline h2{font-size:25px}.summary-row{gap:8px}.stat{padding:14px 12px}.stat span{font-size:8px}.stat strong{font-size:22px}.channel-hero{padding:17px;gap:13px;flex-wrap:wrap}.hero-logo{width:60px;height:60px;min-width:60px}.channel-hero h3{font-size:18px}.hero-edit{margin-left:0}.panel{padding:18px}.live-dot{display:none}.header-actions{gap:3px}.header-actions .button{font-size:10px;padding:8px}.logo strong{font-size:13px}.logo small{font-size:7px}.logo-sign{width:34px;height:34px}.two-col{grid-template-columns:1fr 1fr}}\n\n.checkbox-line{flex-direction:row;align-items:center;gap:10px}.checkbox-line input{width:18px;height:18px;accent-color:#08c7ac}.program-actions button:disabled{opacity:.35;cursor:not-allowed}\n\n[hidden]{display:none!important}\n.studio-nav{display:flex;align-items:center;gap:10px;padding:12px 26px 18px;border-bottom:1px solid #25384b;flex-wrap:wrap}\n.studio-nav button{border:1px solid #30465c;border-radius:12px;color:#bfcde2;background:#111c2b;padding:11px 16px;font-weight:700;font-size:14px;cursor:pointer}\n.studio-nav button.active{background:#0e6b65;color:#fff;border-color:#16cbb4}\n.vod-panel{padding:24px;max-width:1500px;margin:auto}.vod-head h2{font-size:clamp(26px,4vw,39px);margin:8px 0}.vod-head h2 span{color:#21d0bf}.vod-head p,.vod-help{color:#9daec3;font-size:14px;line-height:1.5}\n.vod-switch{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:23px 0}.vod-switch button{background:#101d2d;border:1px solid #30415a;border-radius:12px;color:#c0d1dd;padding:12px 19px;font-weight:700;cursor:pointer}.vod-switch button.active{background:#0e6b65;color:#fff;border-color:#21dbbd}.vod-sync{font-size:12px;color:#90aabc;margin-left:auto}\n.vod-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;gap:18px}.vod-layout .panel,.vod-episode-area{padding:24px!important;border-radius:17px}.vod-layout h3{margin:0 0 19px}.vod-items{display:grid;gap:12px;margin:15px 0}.vod-item{display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #273a50;border-radius:12px;background:#0b1624}.vod-item img{width:54px;height:78px;object-fit:cover;border-radius:7px;background:#203142}.vod-item-info{flex:1;min-width:0}.vod-item-info strong{font-size:14px;display:block}.vod-item-info small{display:block;margin-top:4px;color:#97acc1}.vod-item-buttons{display:flex;gap:5px;flex-wrap:wrap}.vod-item-buttons button{cursor:pointer;border:1px solid #2d475d;padding:8px;color:#d6e8ef;background:#13283b;border-radius:8px}.vod-item-buttons button.danger{color:#ffadad}.vod-list-panel select{width:100%;background:#0c1827;color:#e4f1fa;border:1px solid #395069;border-radius:11px;padding:13px;margin-bottom:10px}.vod-episode-head{display:flex;justify-content:space-between;align-items:center;gap:15px}.vod-episode-area{margin-top:18px}.vod-episode-area .form-stack{max-width:720px}.vod-episode-area input,.vod-episode-area select{width:100%}.vod-empty{color:#94a6b8;text-align:center;padding:22px 8px;font-size:14px}\n@media(max-width:860px){.studio-nav{padding:12px 16px}.vod-panel{padding:14px}.vod-layout{grid-template-columns:1fr}.vod-layout .panel,.vod-episode-area{padding:16px!important}.vod-sync{width:100%;margin:0}.vod-item{flex-wrap:wrap}.vod-item-buttons{width:100%}}\n"},"/app.js":{"type":"application/javascript; charset=utf-8","body":"(() => {\n  const $ = id => document.getElementById(id);\n  const state = {token:sessionStorage.getItem('fenixToken')||'', config:null, selected:null, editing:null, channelEditing:false, metadataEnabled:false};\n  const esc = value => String(value ?? '').replace(/[&<>\"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\n  const toast = (message,error=false) => { const el=$('toast'); el.textContent=message; el.classList.toggle('error',error); el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),4500); };\n  const busy = (button, yes) => {button.disabled=yes; button.dataset.original ||= button.textContent;button.textContent=yes?'Procesando…':button.dataset.original;};\n  const duration = sec => {const n=Math.max(0,Math.floor(Number(sec)||0));return [Math.floor(n/3600),Math.floor(n%3600/60),n%60].map(v=>String(v).padStart(2,'0')).join(':');};\n  const request = async(path, method='GET', body=null) => {\n    const res=await fetch(path,{method,headers:{authorization:'Bearer '+state.token,...(body?{'content-type':'application/json'}:{})},body:body?JSON.stringify(body):undefined,cache:'no-store'});\n    const data=await res.json().catch(()=>({error:'Respuesta inválida'}));\n    if(!res.ok) throw new Error(data.error||'Error HTTP '+res.status);\n    return data;\n  };\n  function showApp(yes) {$('app').hidden=!yes;$('login').hidden=yes;}\n  async function login(token) {\n    state.token=token;\n    const me=await request('/api/me');\n    state.metadataEnabled=me.metadataEnabled;\n    sessionStorage.setItem('fenixToken',token);\n    showApp(true); await refresh();\n    toast('Sesión iniciada.');\n  }\n  $('loginForm').addEventListener('submit',async ev=>{ev.preventDefault();const btn=ev.submitter;busy(btn,true);try {await login($('token').value.trim());}catch(e){toast(e.message,true);}finally{busy(btn,false);}});\n  $('logoutBtn').addEventListener('click',()=>{sessionStorage.removeItem('fenixToken');state.token='';state.config=null;showApp(false);showTab('channels');$('token').value='';});\n  async function refresh(prefer=null){\n    state.config=await request('/api/config');\n    const keys=Object.keys(state.config.channels);\n    state.selected=(prefer&&keys.includes(prefer))?prefer:keys.includes(state.selected)?state.selected:keys[0]||null;\n    render();\n  }\n  function render(){\n    const conf=state.config, keys=Object.keys(conf.channels);\n    $('revision').textContent=conf.configVersion||'—';\n    $('totalChannels').textContent=keys.length;\n    $('channelsList').innerHTML=keys.map(key=>{\n      const c=conf.channels[key];return `<button class=\"channel-option ${key===state.selected?'active':''}\" data-channel=\"${esc(key)}\">\n      ${c.logo?`<img src=\"${esc(c.logo)}\" alt=\"\" />`:'<span class=\"channel-initial\">✦</span>'}<span><strong>${esc(c.name)}</strong><small>${c.enabled?'● EN SEÑAL':'○ BORRADOR'}</small></span></button>`;\n    }).join('');\n    $('channelsList').querySelectorAll('[data-channel]').forEach(el=>el.onclick=()=>{state.selected=el.dataset.channel;cancelEdit();render();});\n    $('empty').hidden=keys.length>0;$('detail').hidden=keys.length===0;\n    if(!state.selected)return;\n    const c=conf.channels[state.selected];\n    $('heroTitle').textContent=c.name;\n    $('heroDesc').textContent=c.description||'Canal propio de Fénix TV';\n    $('heroKey').textContent=state.selected;\n    $('heroLogo').innerHTML=c.logo?`<img src=\"${esc(c.logo)}\" alt=\"Logo del canal\" />`:'F✦';\n    $('totalPrograms').textContent=c.programs.length;\n    $('activeState').textContent=c.enabled?'EN VIVO':'BORRADOR';\n    $('activeState').style.color=c.enabled?'#17d2ae':'#f7bc71';\n    $('playlistCount').textContent=String(c.programs.length);\n    $('programsList').innerHTML=c.programs.length?c.programs.map((p,i)=>`<div class=\"program-card\">\n      ${p.image?`<img class=\"program-img\" src=\"${esc(p.image)}\" alt=\"\" />`:'<div class=\"program-img\">▶</div>'}\n      <div class=\"program-info\"><strong>${i+1}. ${esc(p.title)}</strong><p>${esc(p.type||'pelicula')} ${p.year?' · '+esc(p.year):''}</p><span>${esc(duration(p.durationSeconds))} · ${esc(p.streamFormat||'mp4').toUpperCase()}</span></div>\n      <div class=\"program-actions\"><button type=\"button\" data-up=\"${i}\" ${i===0?\"disabled\":\"\"} title=\"Subir en programación\">↑</button><button type=\"button\" data-down=\"${i}\" ${i===c.programs.length-1?\"disabled\":\"\"} title=\"Bajar en programación\">↓</button><button type=\"button\" data-edit=\"${esc(p.id)}\">Editar</button><button type=\"button\" data-del=\"${esc(p.id)}\">Borrar</button></div>\n    </div>`).join(''):'<div class=\"empty-list\">Aún no hay programas. Añade el primero y el canal se activará automáticamente.</div>';\n    $('programsList').querySelectorAll('[data-up]').forEach(el=>el.onclick=()=>reorderProgram(Number(el.dataset.up),Number(el.dataset.up)-1));\n    $('programsList').querySelectorAll('[data-down]').forEach(el=>el.onclick=()=>reorderProgram(Number(el.dataset.down),Number(el.dataset.down)+1));\n    $('programsList').querySelectorAll('[data-edit]').forEach(el=>el.onclick=()=>editProgram(el.dataset.edit));\n    $('programsList').querySelectorAll('[data-del]').forEach(el=>el.onclick=()=>deleteProgram(el.dataset.del));\n    $('searchMetadata').textContent=state.metadataEnabled?'✧ Buscar ficha, sinopsis e imagen automáticamente':'✧ Buscar ficha (configura TMDB_TOKEN para habilitar)';\n  }\n  const selectedChannel=()=>state.config?.channels[state.selected];\n  function cancelEdit(){state.editing=null;$('programForm').reset();$('pDescription').value='';$('pImage').value='';$('metadataResults').hidden=true;$('cancelProgram').hidden=true;$('programEditorTitle').textContent='Agregar contenido';$('saveProgram').textContent='＋ Guardar en este canal';}\n  function editProgram(id){\n    const p=selectedChannel().programs.find(x=>x.id===id);if(!p)return;\n    state.editing=id;$('pTitle').value=p.title;$('pType').value=p.type||'pelicula';$('pYear').value=p.year||'';\n    $('pUrl').value=p.url;$('pDuration').value=duration(p.durationSeconds);$('pFormat').value=p.streamFormat||'mp4';\n    $('pDescription').value=p.description||'';$('pImage').value=p.image||'';\n    $('programEditorTitle').textContent='Editar programa';$('saveProgram').textContent='Guardar cambios';$('cancelProgram').hidden=false;\n    $('metadataResults').hidden=true;$('programForm').scrollIntoView({behavior:'smooth',block:'center'});\n  }\n  $('cancelProgram').onclick=cancelEdit;\n  $('pUrl').addEventListener('change',()=>{\n    const u=$('pUrl').value.toLowerCase().split('?')[0];$('pFormat').value=u.endsWith('.m3u8')?'hls':u.endsWith('.mkv')?'mkv':'mp4';\n  });\n  $('programForm').addEventListener('submit',async(ev)=>{\n    ev.preventDefault();const btn=$('saveProgram');busy(btn,true);\n    const body={title:$('pTitle').value.trim(), type:$('pType').value, year:$('pYear').value, description:$('pDescription').value, image:$('pImage').value.trim(),url:$('pUrl').value.trim(), duration:(v=>/^[0-9]{6}$/.test(v)?v.slice(0,2)+':'+v.slice(2,4)+':'+v.slice(4):v)($('pDuration').value.trim()),streamFormat:$('pFormat').value,aspectRatio:'16:9',enabled:true};\n    try{const key=state.selected;let path='/api/channels/'+encodeURIComponent(key)+'/programs',method='POST';if(state.editing){path+='/'+encodeURIComponent(state.editing);method='PUT';}\n      await request(path,method,body);cancelEdit();await refresh(key);toast('Programa guardado. El Worker lo verá después de refrescar su caché.');\n    }catch(e){toast(e.message,true);}finally{busy(btn,false);}\n  });\n  async function reorderProgram(from,to){try{await request('/api/channels/'+state.selected+'/reorder','POST',{from,to});cancelEdit();await refresh();toast('Orden de reproducción actualizado.');}catch(e){toast(e.message,true);}}\n  async function deleteProgram(id){if(!confirm('¿Eliminar este programa de la programación del canal?'))return;try{await request('/api/channels/'+state.selected+'/programs/'+id,'DELETE');cancelEdit();await refresh();toast('Programa eliminado.');}catch(e){toast(e.message,true);}}\n  async function importGitHub(){if(state.config&&Object.keys(state.config.channels).length&&!confirm('Esto reemplazará la configuración del panel con la versión de GitHub. ¿Continuar?'))return;\n    const btn=$('importBtn');busy(btn,true);try{await request('/api/import','POST',{});cancelEdit();await refresh();toast('Canales importados correctamente desde GitHub.');}catch(e){toast(e.message,true);}finally{busy(btn,false);}}\n  $('importBtn').onclick=importGitHub;$('emptyImport').onclick=importGitHub;\n  function channelDialog(edit=false){state.channelEditing=edit;const c=edit?selectedChannel():null;$('channelDialogTitle').textContent=edit?'Editar canal':'Crear canal';$('cName').value=c?.name||'';$('cLogo').value=c?.logo||'';$('cDescription').value=c?.description||'';$('saveChannel').textContent=edit?'Guardar canal':'Crear canal';$('deleteChannel').hidden=!edit;$('commercialOption').hidden=edit;$('cInheritCommercial').checked=true;$('channelDialog').showModal();}\n  $('newChannel').onclick=()=>channelDialog(false);$('newChannelSide').onclick=()=>channelDialog(false);$('editChannel').onclick=()=>channelDialog(true);$('closeDialog').onclick=()=>$('channelDialog').close();\n  $('channelForm').addEventListener('submit',async(ev)=>{ev.preventDefault();const btn=$('saveChannel');busy(btn,true);\n    try{const body={name:$('cName').value,logo:$('cLogo').value,description:$('cDescription').value,inheritCommercial:$('cInheritCommercial').checked};\n      const edit=state.channelEditing;const result=await request(edit?'/api/channels/'+state.selected:'/api/channels',edit?'PUT':'POST',body);\n      $('channelDialog').close();cancelEdit();await refresh(edit?state.selected:result.key);toast(edit?'Canal actualizado.':'Nuevo canal creado. Agrega su primer programa.');\n    }catch(e){toast(e.message,true);}finally{busy(btn,false);}\n  });\n  $('deleteChannel').onclick=async()=>{if(!confirm('¿ELIMINAR todo este canal y sus programas? Esta acción no se puede deshacer.'))return;\n    try{await request('/api/channels/'+state.selected,'DELETE');$('channelDialog').close();state.selected=null;cancelEdit();await refresh();toast('Canal eliminado.');}catch(e){toast(e.message,true);}\n  };\n  $('searchMetadata').onclick=async()=>{\n    const query=$('pTitle').value.trim();if(query.length<2){toast('Escribe primero el nombre de la película o serie.',true);return;}\n    const btn=$('searchMetadata');busy(btn,true);$('metadataResults').hidden=false;$('metadataResults').innerHTML='<div class=\"empty-list\">Buscando títulos…</div>';\n    try{const type=$('pType').value==='serie'?'serie':'pelicula';const data=await request('/api/search?'+new URLSearchParams({q:query,type,year:$('pYear').value}));\n      $('metadataResults').innerHTML=data.results.length?data.results.map((m,i)=>`<button type=\"button\" class=\"search-choice\" data-index=\"${i}\">\n      ${m.image?`<img src=\"${esc(m.image)}\" alt=\"\" />`:''}<span><strong>${esc(m.title)}</strong><small>${esc(m.year||'Año desconocido')} · ${esc(m.description?.slice(0,100)||'Sin descripción')}</small></span></button>`).join(''):'<div class=\"empty-list\">Sin coincidencias. Puedes introducir los datos manualmente.</div>';\n      $('metadataResults').querySelectorAll('[data-index]').forEach(b=>b.onclick=async()=>{\n        const m=data.results[Number(b.dataset.index)];$('pTitle').value=m.title;$('pYear').value=m.year||'';$('pDescription').value=m.description;$('pImage').value=m.image;\n        $('metadataResults').hidden=true;\n        try{const detail=await request('/api/details?'+new URLSearchParams({id:m.id,type:m.type}));\n          // Sugerencia de TMDB, nunca duración exacta del archivo original.\n          if(detail.suggestedDurationSeconds&&!$('pDuration').value) {$('pDuration').value=duration(detail.suggestedDurationSeconds);toast('Duración sugerida por TMDB: comprueba que coincide con tu archivo.');}\n          else toast('Ficha e imagen completadas. Introduce el URL y duración del video.');\n        }catch{toast('Ficha completada. Introduce la duración exacta de tu video.');}\n      });\n    }catch(e){$('metadataResults').hidden=true;toast(e.message,true);}finally{busy(btn,false);}\n  };\n  // ---- Películas y Series: biblioteca VOD administrada en D1 ----\n  const vodState={mode:'movies', data:{movies:[],series:[]}, editing:null,selectedSeries:null,externalSeed:null, editingEpisode:null, existing:[],loaded:false};\n  const genreList=['Acción','Aventura','Animación','Comedia','Crimen','Documental','Drama','Familia','Fantasía','Historia','Terror','Música','Misterio','Romance','Ciencia ficción','Suspenso','Bélica','Western','Infantil','Anime','Otros'];\n  const tmdbGenreNames={28:'Acción',12:'Aventura',16:'Animación',35:'Comedia',80:'Crimen',99:'Documental',18:'Drama',10751:'Familia',14:'Fantasía',36:'Historia',27:'Terror',10402:'Música',9648:'Misterio',10749:'Romance',878:'Ciencia ficción',53:'Suspenso',10752:'Bélica',37:'Western',10759:'Acción',10765:'Ciencia ficción',10768:'Bélica',10762:'Infantil',10764:'Otros',10763:'Documental',10767:'Otros'};\n  $('vodGenre').innerHTML=genreList.map(g=>`<option value=\"${esc(g)}\">${esc(g)}</option>`).join('');\n  const tmdbResults=$('vodTmdbResults');\n  const asTime=v=>{const s=String(v||'').trim();return /^\\d{6}$/.test(s)?`${s.slice(0,2)}:${s.slice(2,4)}:${s.slice(4)}`:s;};\n  function showTab(which){\n    const vod=which==='vod';\n    document.querySelector('.dashboard').hidden=vod;\n    $('vodPanel').hidden=!vod;\n    $('tabChannels').classList.toggle('active',!vod);\n    $('tabVod').classList.toggle('active',vod);\n    if(vod&&!vodState.loaded)refreshVod().catch(e=>toast(e.message,true));\n  }\n  $('tabChannels').onclick=()=>showTab('channels');\n  $('tabVod').onclick=()=>showTab('vod');\n  async function refreshVod(){\n    vodState.data=await request('/api/vod');vodState.loaded=true;\n    renderVod();\n  }\n  async function refreshExisting(){\n    const result=await request('/api/vod/existing-series');\n    vodState.existing=result.series||[];\n    $('vodExistingSeries').innerHTML='<option value=\"\">Selecciona una serie existente...</option>'+vodState.existing.map(s=>`<option value=\"${esc(s.id)}\">${esc(s.Title)} ${s.Year?'('+esc(s.Year)+')':''} · ${s.existingEpisodes} episodios</option>`).join('');\n  }\n  function switchVodMode(mode){\n    vodState.mode=mode;vodState.editing=null;\n    $('vodMoviesTab').classList.toggle('active',mode==='movies');$('vodSeriesTab').classList.toggle('active',mode==='series');\n    $('vodMovieInputs').hidden=mode!=='movies';$('vodExistingWrap').hidden=mode!=='series';\n    $('vodEpisodeArea').hidden=true;vodState.selectedSeries=null;vodState.externalSeed=null;\n    $('vodEditorTitle').textContent=mode==='movies'?'Nueva película':'Nueva serie';\n    $('vodListTitle').textContent=mode==='movies'?'Películas añadidas':'Series administradas';\n    $('vodSave').textContent=mode==='movies'?'＋ Guardar película':'＋ Crear serie';\n    resetVodForm();renderVod();\n    if(mode==='series'&&!vodState.existing.length)refreshExisting().catch(e=>toast('No se pudo consultar el catálogo original de series: '+e.message,true));\n  }\n  $('vodMoviesTab').onclick=()=>switchVodMode('movies');\n  $('vodSeriesTab').onclick=()=>switchVodMode('series');\n  function resetVodForm(){vodState.editing=null;$('vodForm').reset();$('vodGenre').value='Otros';$('vodTmdbId').value='';tmdbResults.hidden=true;$('vodSave').textContent=vodState.mode==='movies'?'＋ Guardar película':'＋ Crear serie';}\n  $('vodCancel').onclick=resetVodForm;\n  function renderVod(){\n    const list=vodState.data[vodState.mode]||[];\n    $('vodItems').innerHTML=list.length?list.map(item=>`<div class=\"vod-item\">\n      ${item.Logo?`<img src=\"${esc(item.Logo)}\" alt=\"\" />`:'<span>🎞</span>'}\n      <div class=\"vod-item-info\"><strong>${esc(item.Title)}</strong><small>${esc(item.Genre||'Otros')} ${item.Year?'· '+esc(item.Year):''}${vodState.mode==='series'?' · '+(item.episodes||[]).length+' episodios':''}</small></div>\n      <div class=\"vod-item-buttons\">\n      ${vodState.mode==='series'?`<button data-vod-ep=\"${esc(item.id)}\">Capítulos</button>`:''}\n      <button data-vod-edit=\"${esc(item.id)}\">Editar</button><button class=\"danger\" data-vod-del=\"${esc(item.id)}\">Eliminar</button>\n      </div></div>`).join(''):'<div class=\"vod-empty\">Aún no tienes títulos administrados desde el panel.</div>';\n    $('vodItems').querySelectorAll('[data-vod-edit]').forEach(b=>b.onclick=()=>editVod(b.dataset.vodEdit));\n    $('vodItems').querySelectorAll('[data-vod-del]').forEach(b=>b.onclick=()=>deleteVod(b.dataset.vodDel));\n    $('vodItems').querySelectorAll('[data-vod-ep]').forEach(b=>b.onclick=()=>openSeries(b.dataset.vodEp));\n    if(vodState.selectedSeries)renderEpisodes();\n  }\n  function editVod(id){\n    const item=(vodState.data[vodState.mode]||[]).find(x=>x.id===id);if(!item)return;\n    vodState.editing=id;\n    $('vodTitle').value=item.Title;$('vodYear').value=item.Year||'';\n    $('vodGenre').value=genreList.includes(item.Genre)?item.Genre:'Otros';\n    $('vodDescription').value=item.Description||'';$('vodPoster').value=item.Logo||'';\n    $('vodTmdbId').value=item.tmdbId||'';\n    if(vodState.mode==='movies'){\n      $('vodUrl').value=item.Url||'';$('vodDuration').value=duration(item.durationSeconds||0);$('vodFormat').value=item.streamFormat||'mp4';\n    }\n    $('vodEditorTitle').textContent='Editar '+(vodState.mode==='movies'?'película':'serie');\n    $('vodSave').textContent='Guardar cambios';$('vodForm').scrollIntoView({behavior:'smooth'});\n  }\n  $('vodForm').onsubmit=async ev=>{\n    ev.preventDefault();const btn=$('vodSave');busy(btn,true);\n    const body={title:$('vodTitle').value.trim(),year:$('vodYear').value,genre:$('vodGenre').value,\n      image:$('vodPoster').value.trim(),description:$('vodDescription').value,tmdbId:$('vodTmdbId').value||null};\n    if(vodState.mode==='movies')Object.assign(body,{url:$('vodUrl').value.trim(),duration:asTime($('vodDuration').value),streamFormat:$('vodFormat').value});\n    try{\n      const path='/api/vod/'+vodState.mode+(vodState.editing?'/'+vodState.editing:'');\n      const res=await request(path,vodState.editing?'PUT':'POST',body);\n      const savedId=vodState.editing||res.item?.id;\n      resetVodForm();await refreshVod();\n      toast('Guardado en D1. Estará disponible en el catálogo al actualizarse el Worker.');\n      if(vodState.mode==='series'&&savedId)openSeries(savedId);\n    }catch(e){toast(e.message,true)}finally{busy(btn,false)};\n  };\n  async function deleteVod(id){\n    const kind=vodState.mode==='movies'?'película':'serie';\n    if(!confirm(`¿Eliminar esta ${kind} del panel? (No borra los videos de tu servidor)`))return;\n    try{await request('/api/vod/'+vodState.mode+'/'+id,'DELETE');await refreshVod();toast('Se eliminó del panel.')}catch(e){toast(e.message,true)}\n  }\n  $('vodUrl').onchange=()=>{$('vodFormat').value=guessVodFormat($('vodUrl').value)};\n  $('vodEpisodeUrl').onchange=()=>{$('vodEpisodeFormat').value=guessVodFormat($('vodEpisodeUrl').value)};\n  function guessVodFormat(url){const u=url.split('?')[0].toLowerCase();return u.endsWith('.m3u8')?'hls':u.endsWith('.mkv')?'mkv':'mp4'}\n  $('vodTmdb').onclick=async()=>{\n    const q=$('vodTitle').value.trim();if(q.length<2){toast('Escribe primero un título.',true);return}\n    const type=vodState.mode==='series'?'serie':'pelicula';const btn=$('vodTmdb');busy(btn,true);\n    tmdbResults.hidden=false;tmdbResults.innerHTML='<div class=\"vod-empty\">Buscando títulos…</div>';\n    try{\n      const res=await request('/api/search?'+new URLSearchParams({q,type,year:$('vodYear').value}));\n      const list=res.results||[];\n      tmdbResults.innerHTML=list.length?list.map((m,i)=>`<button class=\"search-choice\" type=\"button\" data-vod-result=\"${i}\">${m.image?`<img src=\"${esc(m.image)}\" alt=\"\" />`:''}<span><strong>${esc(m.title)}</strong><small>${esc(m.year)} · ${esc((m.description||'').slice(0,90))}</small></span></button>`).join(''):'<div class=\"vod-empty\">No hay coincidencias. Puedes completar la ficha a mano.</div>';\n      tmdbResults.querySelectorAll('[data-vod-result]').forEach(b=>b.onclick=async()=>{\n        const m=list[Number(b.dataset.vodResult)];\n        $('vodTitle').value=m.title;$('vodYear').value=m.year||'';$('vodDescription').value=m.description||'';\n        $('vodPoster').value=m.image||'';$('vodTmdbId').value=m.id||'';tmdbResults.hidden=true;\n        try{\n          const detail=await request('/api/details?'+new URLSearchParams({type:m.type,id:m.id}));\n          const mainGenre=(detail.genres||[]).map(g=>tmdbGenreNames[g.id]||'Otros').find(g=>g!=='Otros');\n          $('vodGenre').value=mainGenre||'Otros';\n          if(vodState.mode==='movies'&&detail.suggestedDurationSeconds&&!$('vodDuration').value){$('vodDuration').value=duration(detail.suggestedDurationSeconds)}\n          toast('Ficha y géneros completados con TMDB. Revisa duración y URL.');\n        }catch(e){toast('Ficha básica cargada. '+e.message,true)}\n      });\n    }catch(e){tmdbResults.hidden=true;toast(e.message,true)}finally{busy(btn,false)}\n  };\n  function getSelectedSeries(){\n    return vodState.data.series.find(s=>s.id===vodState.selectedSeries)||vodState.externalSeed;\n  }\n  function openSeries(id,seed=null){\n    vodState.selectedSeries=id;vodState.externalSeed=seed;vodState.editingEpisode=null;\n    const s=getSelectedSeries();if(!s)return;\n    $('vodEpisodeArea').hidden=false;$('vodCurrentSeries').textContent=s.Title;\n    resetEpisodeForm();renderEpisodes();$('vodEpisodeArea').scrollIntoView({behavior:'smooth'});\n  }\n  $('vodCloseEpisodes').onclick=()=>{$('vodEpisodeArea').hidden=true;vodState.selectedSeries=null;vodState.externalSeed=null};\n  $('vodUseExisting').onclick=()=>{\n    const id=$('vodExistingSeries').value;const s=vodState.existing.find(x=>x.id===id);\n    if(!s){toast('Selecciona una serie.',true);return}\n    openSeries(s.id,s);\n  };\n  function renderEpisodes(){\n    const s=getSelectedSeries(),eps=s?.episodes||[];\n    $('vodEpisodes').innerHTML=eps.length?eps.map(e=>`<div class=\"vod-item\"><div class=\"vod-item-info\"><strong>T${e.season} · E${e.episode} — ${esc(e.Title)}</strong><small>${esc(e.Runtime||'')}</small></div><div class=\"vod-item-buttons\"><button data-ep-edit=\"${esc(e.id)}\">Editar</button><button class=\"danger\" data-ep-del=\"${esc(e.id)}\">Eliminar</button></div></div>`).join(''):'<div class=\"vod-empty\">Todavía no has agregado capítulos desde el panel. Los episodios existentes en Roku-feed se conservarán.</div>';\n    $('vodEpisodes').querySelectorAll('[data-ep-edit]').forEach(b=>b.onclick=()=>editEpisode(b.dataset.epEdit));\n    $('vodEpisodes').querySelectorAll('[data-ep-del]').forEach(b=>b.onclick=()=>removeEpisode(b.dataset.epDel));\n  }\n  function resetEpisodeForm(){vodState.editingEpisode=null;$('vodEpisodeForm').reset();$('vodSeason').value=1;$('vodEpisodeNum').value=1;$('vodSaveEpisode').textContent='＋ Agregar episodio'}\n  $('vodEpisodeCancel').onclick=resetEpisodeForm;\n  function editEpisode(id){const e=(getSelectedSeries()?.episodes||[]).find(x=>x.id===id);if(!e)return;\n    vodState.editingEpisode=id;$('vodSeason').value=e.season;$('vodEpisodeNum').value=e.episode;$('vodEpisodeTitle').value=e.Title;\n    $('vodEpisodeUrl').value=e.Url;$('vodEpisodeDuration').value=duration(e.durationSeconds||0);$('vodEpisodeFormat').value=e.streamFormat;\n    $('vodEpisodeDesc').value=e.Description||'';$('vodEpisodeImage').value=e.Logo||'';$('vodSaveEpisode').textContent='Guardar cambios';\n  }\n  async function removeEpisode(id){if(!confirm('¿Eliminar este capítulo del panel?'))return;\n    try{await request('/api/vod/series/'+vodState.selectedSeries+'/episodes/'+id,'DELETE');await refreshVod();resetEpisodeForm();toast('Capítulo eliminado')}catch(e){toast(e.message,true)}\n  }\n  $('vodEpisodeTmdb').onclick=async()=>{\n    const s=getSelectedSeries();if(!s?.tmdbId){toast('La serie necesita una ficha TMDB vinculada para autocompletar episodios.',true);return}\n    try{\n      const result=await request('/api/vod/tmdb-episode?'+new URLSearchParams({id:s.tmdbId,season:$('vodSeason').value,episode:$('vodEpisodeNum').value}));\n      $('vodEpisodeTitle').value=result.title||'';$('vodEpisodeDesc').value=result.description||'';\n      $('vodEpisodeImage').value=result.image||s.Logo||'';\n      if(result.suggestedDurationSeconds&&!$('vodEpisodeDuration').value)$('vodEpisodeDuration').value=duration(result.suggestedDurationSeconds);\n      toast('Datos del episodio encontrados. Agrega el enlace de video y verifica su duración.');\n    }catch(e){toast(e.message,true)}\n  };\n  $('vodEpisodeForm').onsubmit=async ev=>{\n    ev.preventDefault();const btn=$('vodSaveEpisode');busy(btn,true);\n    const s=getSelectedSeries();if(!s){toast('Selecciona una serie.',true);busy(btn,false);return}\n    const body={season:$('vodSeason').value,episode:$('vodEpisodeNum').value,title:$('vodEpisodeTitle').value,\n      url:$('vodEpisodeUrl').value.trim(),duration:asTime($('vodEpisodeDuration').value),\n      streamFormat:$('vodEpisodeFormat').value,description:$('vodEpisodeDesc').value,image:$('vodEpisodeImage').value.trim()};\n    if(vodState.externalSeed)body.seriesSeed=vodState.externalSeed;\n    try{\n      await request('/api/vod/series/'+s.id+'/episodes'+(vodState.editingEpisode?'/'+vodState.editingEpisode:''),vodState.editingEpisode?'PUT':'POST',body);\n      vodState.externalSeed=null;resetEpisodeForm();await refreshVod();\n      toast('Capítulo guardado. Ya no necesitas volver a crear la serie.');\n    }catch(e){toast(e.message,true)}finally{busy(btn,false)};\n  };\n\n  if(state.token) login(state.token).catch(e=>{toast('Vuelve a iniciar sesión: '+e.message,true);sessionStorage.removeItem('fenixToken');state.token='';showApp(false);});\n})();\n"}};
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
  headers.set('content-security-policy', "default-src 'self'; img-src 'self' https: data:; style-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
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
function channelFields(body, prev={}) {
  const name = clean(body.name, 100);
  if (!name) throw err('Escribe el nombre del canal.');
  const logo = ensureUrl(body.logo, 'Logo del canal', true);
  const epoch = Number(body.epoch ?? prev.epoch ?? Math.floor(Date.now()/1000));
  if (!(epoch > 0)) throw err('Fecha de inicio de canal inválida.');
  return {
    ...prev,
    name,
    description: clean(body.description || 'Canal propio de Fénix TV 24/7.', 300),
    logo,
    channelBugUrl: logo,
    channelBugOpacity: Number(prev.channelBugOpacity ?? 0.88),
    channelBugScale: Number(prev.channelBugScale ?? 1.4),
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
    commercial: prev.commercial || { enabled:false, url:'', durationSeconds:0, intervalSeconds:900, protectStartSeconds:60, protectEndSeconds:60, betweenPrograms:false },
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

// ---------------------------------------------------------
// FENIX TV STUDIO · Video on Demand: películas, series, episodios
// Guarda exclusivamente VOD en cms_config['vod']; no altera canales 24/7.
// ---------------------------------------------------------
const VOD_GENRES = ['Acción','Aventura','Animación','Comedia','Crimen','Documental','Drama','Familia','Fantasía','Historia','Terror','Música','Misterio','Romance','Ciencia ficción','Suspenso','Bélica','Western','Infantil','Anime','Otros'];
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
function normalizeMovie(body, previous={}) {
  const name=clean(body.title??body.Title??previous.Title,200);
  if (!name) throw err('Escribe el título de la película.');
  const {Url,streamFormat}=vodMediaUrl(body);
  const image=ensureUrl(body.image??body.Logo??previous.Logo,'Póster',true);
  const year=vodYear(body.year??body.Year??previous.Year);
  const sec=vodDuration(body.durationSeconds??body.duration);
  const tmdbId=body.tmdbId?numRange(body.tmdbId,'TMDB ID',1,100000000):null;
  const id=previous.id||limitedId('movie-'+(tmdbId||slug(name)+'-'+Date.now().toString(36)));
  return {...previous,id,contentId:id,Title:name,Description:clean(body.description??body.Description??name,1400),
    Logo:image,HDPosterUrl:image,Genre:vodGenre(body.genre??body.Genre),Section:vodGenre(body.genre??body.Genre),Year:year,
    Runtime:`${Math.floor(sec/60)} min`,durationSeconds:sec,Url,streamFormat,
    tmdbId:tmdbId||previous.tmdbId||null,enabled:true};
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
    tmdbId:tmdbId||previous.tmdbId||null,episodes:previous.episodes||[],enabled:true};
}
function normalizeEpisode(body,series,previous={}){
  const season=numRange(body.season??body.Season,'Temporada',0,99);
  const episode=numRange(body.episode??body.Episode,'Número de episodio',1,999);
  const title=clean((body.title??body.Title)||`T${season} E${episode}`,230);
  const image=ensureUrl(body.image??body.Logo??series.Logo,'Imagen del episodio',true);
  const sec=vodDuration(body.durationSeconds??body.duration);
  const {Url,streamFormat}=vodMediaUrl(body);
  const id=previous.id||limitedId(`${series.id}-s${season}e${episode}`);
  return {...previous,id,contentId:id,Title:title,Description:clean(body.description??body.Description??title,1200),
    Logo:image,Url,streamFormat,season,episode,Season:season,Episode:episode,Runtime:`${Math.floor(sec/60)} min`,durationSeconds:sec,enabled:true};
}
function validateVod(vod){
  if(!vod||!Array.isArray(vod.movies)||!Array.isArray(vod.series)) throw err('Catálogo VOD inválido.');
  if(vod.movies.length>3000||vod.series.length>1500) throw err('Límite de películas/series alcanzado.');
  for(const [collection,list] of [['películas',vod.movies],['series',vod.series]]){
    const ids=new Set();
    for(const item of list){
      if(!item||typeof item!=='object'||!item.id||ids.has(item.id))throw err('Identificador duplicado en '+collection);
      ids.add(item.id);
      if(!clean(item.Title))throw err('Título vacío en '+collection);
      if(item.Logo)ensureUrl(item.Logo,'Póster');
      if(collection==='películas')ensureUrl(item.Url,'Video de película');
      else {
        if(!Array.isArray(item.episodes)||item.episodes.length>600)throw err('Episodios inválidos.');
        const keys=new Set();
        for(const ep of item.episodes){
          ensureUrl(ep.Url,'Video de episodio');
          const key=String(ep.season)+':'+String(ep.episode);
          if(keys.has(key))throw err('Capítulo duplicado '+key+' en '+item.Title);
          keys.add(key);
        }
      }
    }
  }
}
async function readVod(env){
  if(!env.DB)throw err('Base D1 no configurada.',503);
  const row=await env.DB.prepare('SELECT content FROM cms_config WHERE key = ?').bind('vod').first();
  if(!row)return emptyVod();
  try {const vod=JSON.parse(row.content);validateVod(vod);return vod;}
  catch(e){throw err('No se pudo leer el catálogo VOD: '+e.message,500);}
}
async function saveVod(env,vod){
  validateVod(vod);
  vod.updatedAt=new Date().toISOString();vod.revision='vod-'+Date.now();
  await env.DB.prepare('INSERT INTO cms_config (key,content,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at')
    .bind('vod',JSON.stringify(vod),vod.updatedAt).run();
  return vod;
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
async function handleVodApi(request,env,path,method,u){
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

export default {
  async fetch(request, env) {
    try {
      const u = new URL(request.url), p = u.pathname, method = request.method;
      if (method === 'OPTIONS') return new Response(null, {status: 204, headers: {'allow': 'GET, POST, PUT, DELETE'}});
      if (p === '/health' && method === 'GET') return json({service:'fenix-tv-panel', ok:true}, 200, true);
      if (p === '/channels.json' && method === 'GET') {
        const conf = await readConfig(env);
        // 503 si no hay canales importados: el Worker de emisión conservará su fallback.
        if (!Object.keys(conf.channels).length) throw err('Importa primero tus canales desde el panel.', 503);
        return json(conf, 200, true);
      }
      if (p === '/vod.json' && method === 'GET') return json(await readVod(env), 200, true);
      if (p.startsWith('/api/')) {
        if (!['GET','POST','PUT','DELETE'].includes(method)) throw err('Método no permitido', 405);
        await checkToken(request, env);
        if (p.startsWith('/api/vod')) return await handleVodApi(request, env, p, method, u);
        if (p === '/api/me' && method === 'GET') return json({ok:true, metadataEnabled: !!(env.TMDB_TOKEN||env.TMDB_API_KEY)});
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
export const __test = { slug, durationSeconds, programFields, channelFields, validateConfig, normalizeMovie, normalizeSeries, normalizeEpisode, validateVod, readVod, saveVod, handleVodApi };
