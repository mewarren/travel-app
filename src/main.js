import './reset.css';
import './main.css';
import App from './components/app/App';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.render());

window.addEventListener('scroll', function(e) {

// console.log('scroll!!');
  let scrolled = window.pageYOffset;
  const transition = document.querySelector('.color-transition');
//   const wave = document.getElementById('wave2');
    
//   wave.style.top = -(scrolled * 1.25)  + 'px';
  transition.style.top = -(scrolled * 1.5) + 'px';
});

window.addEventListener('scroll', function(e) {

    // console.log('scroll!!');
      let scrolled = window.pageYOffset;
      const wave = document.querySelector('.wave2');
    //   const wave = document.getElementById('wave2');
        
    //   wave.style.top = -(scrolled * 1.25)  + 'px';
      wave.style.top = -(scrolled * 1.25) + 'px';
    });