function detectAdBlock() {
    var adblock = false;
    try {
        $.getScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function () {
            adblock = false;
        });
    }
    catch (err) {
        adblock = true;
    }
    return adblock;
}

if (detectAdBlock()) {
    alert("Por favor desactiva tu adblock para continuar! ^-^");
    window.location.reload();
}
