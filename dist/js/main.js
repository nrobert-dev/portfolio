const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);


function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.add('remove'));

        showMenu = false;
    }
}

// create config object: rootMargin and threshold
// are two properties exposed by the interface
const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
  };
  
  // register the config object with an instance
  // of intersectionObserver
  let observer = new IntersectionObserver(function(entries, self) {
    // iterate over each entry
    entries.forEach(entry => {
      // process just the images that are intersecting.
      // isIntersecting is a property exposed by the interface
      if(entry.isIntersecting) {
        // custom function that copies the path to the img
        // from data-src to src
        entry.target.setAttribute('src',entry.target.getAttribute('data-src'));
        //preloadImage(entry.target);
        // the image is now in place, stop watching
        self.unobserve(entry.target);
      }
    });
  }, config);


const imgs = document.querySelectorAll('[data-src]');
imgs.forEach(img => {
  observer.observe(img);
});
