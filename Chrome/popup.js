function mostrarNotificacion(titulo, mensaje) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "download.png", // asegúrate de tener un icono en tu extensión
    title: titulo,
    message: mensaje
  });
}

chrome.action.onClicked.addListener((tab) => {
  const reg = /^https:\/\/www\.overtake\.gg\/downloads\/[^\/]+\/$/
  if (tab) {
    if ( reg.test(tab.url) ) {
      chrome.tabs.update(tab.id, { url: tab.url.replace(/\/$/, "") + "/download" });
    } else {
      mostrarNotificacion("Ups!", "No estás en la página de descargas de Overtake.GG.");
    }
  } else {
    mostrarNotificacion("Atención", "Esta pestaña no tiene una URL válida.");
  }

});
