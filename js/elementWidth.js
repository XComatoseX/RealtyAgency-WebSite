const lineElement = document.getElementsByClassName('nav__list-item--line');

const parentBlocks = document.querySelectorAll('.nav__list-item');
const textEl = document.querySelectorAll(`.nav__list-item-link`)

parentBlocks.forEach(function(parent) {
  parent.addEventListener('mouseover', function(event) {
    const tt = document.getElementById(event.target.id)
    console.log(tt)
    console.log(tt.offsetWidth)
    for (let i = 0; i < lineElement.length; i++) {
      lineElement[i].style.left = '2px';
    }
  });
});


