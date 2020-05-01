import './reset.css';
import './main.css';
import App from './components/app/App';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.render());

window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;
  const transition = document.querySelector('.color-transition');
  transition.style.top = -(scrolled * 1.5) + 'px';
});

window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;
  const wave = document.querySelector('.wave2');
  wave.style.top = -(scrolled * 1.25) + 'px';
  fadeBackground();
  collapseBackground();
});

// window.addEventListener('scroll', function() {
//   let scrolled = window.pageYOffset;
//   const background = document.querySelector('.background');
//   background.style.top = -(scrolled * .5) + 'px';
// });

const fadeBackground = function() {
  let background = document.getElementById('background');
  console.log('fadeBackground');
  if(window.scrollY > 30) {
    background.setAttribute('class', 'background fade');
  } else { background.setAttribute('class', 'background'); }
};

const collapseBackground = function() {
  let background = document.getElementById('background');
  console.log('collapsebackground');
  if(window.scrollY > 175) {
    background.setAttribute('class', 'background fade collapse');
  } else if(window.scrollY > 30) { 
    background.setAttribute('class', 'background fade'); }
};

// const collapseHero = function() {
//   let distance = document.querySelector('.color-transition').style.top; 
//   let hero = document.querySelector('.hero');
//   console.log(distance);
//   let height = window.getComputedStyle(hero, null).getPropertyValue('height');
//   let newHeight = Number(height.replace('px', '') + distance.replace('px', ''));
//   console.log(newHeight);
//   // hero.style.height = newHeight + 'px';
//   console.log(hero);
// };

// const collapseBackground = function() {
//   let distance = document.querySelector('.color-transition').style.top;
//   let background = document.getElementById('background');
//   console.log(distance);
// }


//Brings Header into view
// window.addEventListener('scroll', function(e) {
//   if(window.scrollY > 350){
//     document.getElementById('text-overlay').setAttribute('style', 'width:15%; position:absolute; top:350px');
    
//   } else { document.getElementById('text-overlay').style.width = 60 + '%';
//   } 
// });



// function showHeader() {
//     if(document.body.scrollTop > 350 || document.documentElement.scroolTop > 350) {
//         console.log('logo change');
//         document.getElementById('text-overlay').style.width = 15 + '%';
//     } else { document.getElementById('text-overlay').style.width = 60 + '%';
// }
// }

// window.onscroll = function() {
//   showHeader();
// };
