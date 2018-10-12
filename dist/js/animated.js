$('body').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 16000,
    animation: 'random',
    animationDuration: 20000,
    slides: [
      { src: './images/3d/enviro/enviro (3).jpg' },
      {src:'./images/codebg.jpg'},
      {src:'./images/3d/cat.jpg'},
      { src: './images/3d/enviro/enviro (11).jpg' },
      {src:'./images/3d/enviro/enviro 13.jpg'},
      {src:'./images/3d/merchant.jpg'}
      
    ]
  });




var colors = ['#c31432','#00F260', '#ff9900','#f64f59', '#00c400','#0059ff'];
var active = 0;
setInterval(function(){
    document.getElementById('animated-name').style.color = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 4000);


let familyName = "Nechitelea";
let surName = "Robert";

let fullNameElement = document.querySelector("#hh");


let typeSpeed = 100;
let i=0;
let j=0;

function type(){
    if(i==0){
        fullNameElement.innerHTML="";
    }
    if(i<familyName.length){
        fullNameElement.textContent+=familyName.charAt(i);
        i++;
        setTimeout(type,typeSpeed);
    }
    else if(i==familyName.length){
        fullNameElement.innerHTML+=' <span class="secondary" id="animated-name"></span><span id="blinking">_</span>';
        typeSurName(document.querySelector('#animated-name'));
        i++;
    }   
}

function typeSurName(surNameElement){
    if(j<surName.length){
        surNameElement.textContent+=surName.charAt(j);
        j++;
        setTimeout(function(){typeSurName(surNameElement)},typeSpeed);
    }
}

setTimeout(type,1500);
