$(document).ready(() => {
  AOS.init();
  var logo = document.getElementById('logo');

  var typewriter = new Typewriter(logo, {
    loop: false,
    cursor: '_',
  });

  typewriter.typeString('<span class="blue">gitSum</span>')
    .typeString('<span class="gray">(</span>')
    .typeString('<span class="red">money</span>')
    .pauseFor(500)
    .deleteChars(5)
    .pauseFor(500)
    .typeString('<span class="red">education')
    .typeString('<span class="gray">)')
    .start();
});
