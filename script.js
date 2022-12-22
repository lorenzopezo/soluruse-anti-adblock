async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    if (adBlockEnabled) {
        return true
    }
        else {
        return false
    }
}
}
if (detectAdBlock()) {
    alert("Por favor desactiva tu adblock para continuar! ^-^");
    window.location.href = "https://soluruse.com/"
}

