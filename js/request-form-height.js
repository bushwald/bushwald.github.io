function adjustRequestFrameHeight() {
  const smallScreen = window.matchMedia("(max-width: 475px)")
  const largeSreen = window.matchMedia("(min-width: 475px)")
  if (smallScreen.matches) { // If media query matches
    document.getElementById('request-iframe').height = 5400
  } else if (largeSreen.matches) {
    document.getElementById('request-iframe').height = 4050
  }
}