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
                ['#F0F2F0', '#000C40'],
                ['#000000', '#434343'],
                ['#3a6186','#89253e']
               
               
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

/*
var bg = document.getElementById('hh');


bg.addEventListener('mousemove',function(event){
    event.preventDefault();
    let deltaX = event.movementX;
    let deltaY = event.movementY;

    let moveX = ((window.innerWidth/2) - deltaX) * 0.1;
    let moveY = ((window.innerHeight/2) - deltaY) * 0.1;

    bg.style.marginLeft = moveX + "px";
    bg.style.marginTop = moveY + "px";
})*/