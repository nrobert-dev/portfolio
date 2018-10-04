var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    image : {
        source: 'images/bg3.jpg',
        blendingMode: 'overlay'
    },
    states : {
        "default-state": {
            gradients: [
                ['#64b3f4', '#726758'],
                ['#f4fffd', '#6b6d5e'],
                ['#FF512F','#05382f'],
                ['#001c5e','#c69531'],
                ['#FF512F','#05382f']
               
               
            ],
            transitionSpeed: 8000
        }
    }
});


var colors = ['#c31432','#00F260', '#F0F2F0','#f64f59', '#000000','#f71616'];
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
