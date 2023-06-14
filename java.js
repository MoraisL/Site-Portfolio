
var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

window.onscroll = function() {
    mostrarBotao();
  };

  function mostrarBotao() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("voltarTopo").style.display = "block";
    } else {
      document.getElementById("voltarTopo").style.display = "none";
    }
  }

  function voltarAoTopo() {
    // Verifica a compatibilidade do navegador
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
      // Usa o método 'scrollTo' para uma transição suave
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }