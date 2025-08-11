export const pageview = (path: string = location.pathname, title: string = document.title) => {
  const isDevHost = /\.lovable\.app$/i.test(location.hostname) || /localhost|127\.0\.0\.1/.test(location.hostname);
  if (isDevHost) return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: 'fg_page_view', page_path: path, page_title: title });
};
