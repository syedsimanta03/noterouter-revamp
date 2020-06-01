document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 17 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 117 ||
      e.ctrlKey || e.metaKey)
  ) {
    alert('Backend looks ugly here!')
  }
  return false
}