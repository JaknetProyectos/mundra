const ORIGIN = "turismo.develops.mx";

export const ASSETS = `https://${ORIGIN}/wp-content/uploads/2026/03`;

/**
 * Los assets del sitio original están detrás de un CDN que bloquea el
 * hotlinking desde el navegador, así que los servimos por un proxy de imágenes.
 */
export function img(url: string, width?: number): string {
  if (!url) return url;
  const clean = url.replace(/^https?:\/\//, "");
  if (!clean.startsWith(ORIGIN)) return url;

  const params = new URLSearchParams({ url: clean });
  if (width) params.set("w", String(width));
  params.set("q", "84");
  return `https://wsrv.nl/?${params.toString()}`;
}

/** Igual que `img` pero listo para usarse en `background-image`. */
export function bgImg(url: string, width?: number): string {
  return `url(${img(url, width)})`;
}
