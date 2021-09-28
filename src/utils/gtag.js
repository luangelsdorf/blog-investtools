export const pageView = (url) => {
  window.gtag('config', 'G-R0H77YJN3F', {
    page_path: url,
  });
}