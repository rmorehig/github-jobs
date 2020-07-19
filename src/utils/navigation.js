export const getParam = param =>
  new URLSearchParams(window.location.search).get(param)
