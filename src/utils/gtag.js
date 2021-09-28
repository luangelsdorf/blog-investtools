export const pageView = (url) => {
  window.gtag('config', 'UA-181473567-1', {
    page_path: url,
  });
  window.gtag('config', 'G-R0H77YJN3F', {
    page_path: url,
  });
}