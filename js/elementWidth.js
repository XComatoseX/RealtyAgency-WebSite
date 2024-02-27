const lineElement = document.getElementsByClassName('nav__list-item--line');
const parentBlocks = document.querySelectorAll('.nav__list-item');
const textEl = document.querySelectorAll(`.nav__list-item-link`)

parentBlocks.forEach(function(parent) {
  parent.addEventListener('mouseover', function(event) {
    const targetElement = document.getElementById(event.target.id)
    if(!targetElement) return
    for (let i = 0; i < lineElement.length; i++) {
      lineElement[i].style.left = (targetElement.offsetWidth - 20) / 2 + 'px';
    }
  });
});


