
const botao = document.querySelector(".backToTop");
window.addEventListener("scroll", function (event) {
  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  } else {
    botao.classList.add("visible");
  }
});

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide' );
  splide.mount();
} );






