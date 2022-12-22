function detectAdBlock(){
  var adsense = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  var adblock = false;
  try {
    $.getScript(adsense, function(){
      adblock = false;
    });
  }
  catch(err) {
    adblock = true;
  }
  return adblock;
}

if (detectAdBlock()) {
    alert("Por favor desactiva tu adblock para continuar! ^-^");
    window.location.reload();
}

