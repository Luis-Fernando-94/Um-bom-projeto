function mouseOver(element) {

    element.style.background = "url('./images/icon-share-white.svg') no-repeat";
    element.style.backgroundSize = "22px";
    element.style.backgroundPosition = "center";
    element.style.backgroundColor = "hsl(212, 23%, 69%)";
    element.style.cursor = "pointer";

}

function mouseOut(element) {

    element.style.background = "url('./images/icon-share.svg') no-repeat";
    element.style.backgroundSize = "22px";
    element.style.backgroundPosition = "center";
    element.style.backgroundColor = "hsl(210, 25%, 86%)";
}



let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');

ctx.moveTo(120,0);
ctx.lineTo(140,20);
ctx.lineTo(160,0)
ctx.strokeStyle = "hsl(217, 19%, 35%)";
ctx.fillStyle = "hsl(217, 19%, 35%)"
ctx.stroke();
ctx.fill();

let icon = document.getElementsByClassName('icon')[0];

icon.addEventListener('click', toggle);

function toggle() {

    let balao = document.getElementsByClassName('balao-inteiro')[0];

    if(balao.hidden) {
        balao.hidden = false;

        icon.removeAttribute('onmouseout');
        icon.removeAttribute('onmouseover');

        icon.style.background = "url('./images/icon-share-white.svg') no-repeat";
        icon.style.backgroundSize = "22px";
        icon.style.backgroundPosition = "center";
        icon.style.backgroundColor = "hsl(214, 17%, 51%)";
        efeito();
    } else {
        balao.hidden = true;
        icon.setAttribute('onmouseout', 'mouseOut(this)');
        icon.setAttribute('onmouseover', 'mouseOver(this)');
    }
    
}