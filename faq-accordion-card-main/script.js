
let ask1 = document.getElementsByClassName('ask1')[0];
let ask2 = document.getElementsByClassName('ask2')[0];
let ask3 = document.getElementsByClassName('ask3')[0];
let ask4 = document.getElementsByClassName('ask4')[0];
let ask5 = document.getElementsByClassName('ask5')[0];

let box1 = document.getElementsByClassName('box1')[0]

function click1(e) {

    if(ask1.hidden) {
        ask1.hidden = false;
        ask1.style.fontWeight = '400';
        e.style.fontWeight = '700';
        e.style.color = 'black';

        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        ask5.hidden = true;
    } else {
        ask1.hidden = true;
        // e.style.fontWeight = '400';
    }

}

function click2(e) {

    if(ask2.hidden) {
        ask2.hidden = false;
        ask2.style.fontWeight = '400';
        e.style.fontWeight = '700';
        e.style.color = 'black';

        ask1.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        ask5.hidden = true;
    } else {
        ask2.hidden = true;
        // e.style.fontWeight = '400';
    }
    
}

function click3(e) {

    if(ask3.hidden) {
        ask3.hidden = false;
        ask3.style.fontWeight = '400';
        e.style.fontWeight = '700';
        e.style.color = 'black';

        ask1.hidden = true;
        ask2.hidden = true;
        ask4.hidden = true;
        ask5.hidden = true;
    } else {
        ask3.hidden = true;
        // e.style.fontWeight = '400';
    }
    
}

function click4(e) {

    if(ask4.hidden) {
        ask4.hidden = false;
        ask4.style.fontWeight = '400';
        e.style.fontWeight = '700';
        e.style.color = 'black';

        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask5.hidden = true;
    } else {
        ask4.hidden = true;
        // e.style.fontWeight = '400';
    }
    
}

function click5(e) {

    if(ask5.hidden) {
        ask5.hidden = false;
        ask5.style.fontWeight = '400';
        e.style.fontWeight = '700';
        e.style.color = 'black';

        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
    } else {
        ask5.hidden = true;
        // e.style.fontWeight = '400';
    }
    
}