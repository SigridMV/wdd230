const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
      mainnav.classList.remove('show'); 
      hambutton.classList.remove('show'); 
  }
});