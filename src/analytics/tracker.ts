export const pageview = (path: string = location.pathname, title: string = document.title) => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: 'fg_page_view', page_path: path, page_title: title });
};
