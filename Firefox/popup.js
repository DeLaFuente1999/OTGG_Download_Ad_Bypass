function mostrarNotificacion(titulo, mensaje) {
  browser.notifications.create({
    type: "basic",
    iconUrl: "download.png", // asegúrate de tener un icono en tu extensión
    title: titulo,
    message: mensaje
  });
}

browser.browserAction.onClicked.addListener((tab) => {
  const reg = /^https:\/\/www\.overtake\.gg\/downloads\/[^\/]+\/$/
  if (tab) {
    if ( reg.test(tab.url) ) {
      browser.tabs.update(tab.id, { url: tab.url.replace(/\/$/, "") + "/download" });
    } else {
      mostrarNotificacion("Ups!", "No estás en la página de descargas de Overtake.GG.");
    }
  } else {
    mostrarNotificacion("Atención", "Esta pestaña no tiene una URL válida.");
  }

});
