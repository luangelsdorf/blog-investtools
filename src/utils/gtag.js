export const pageView = (url) => {
  window.gtag('config', 'UA-181473567-1', {
    page_path: url,
  })
}