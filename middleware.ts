export function onRequest({ request, redirect }) {
    const url = new URL(request.url);
    
    // Comprueba si la URL termina en slash y no es la página principal
    if (url.pathname.endsWith('/') && url.pathname !== '/') {
      // Elimina el slash final
      const newPath = url.pathname.slice(0, -1);
      
      // Redirige a la versión sin slash
      return redirect(newPath + url.search, 301);
    }
  }