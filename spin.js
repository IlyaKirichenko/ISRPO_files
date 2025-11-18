let wheel = document.querySelector(".wheel_spin");
let turn = 0;
let result = 0;

function spin() {
    turn = Math.floor(Math.random() * 3600);
    wheel.style.transform = "rotate(" + turn + "deg)"
}

function show_result(){
    result = turn%360;
    if (result >= 0 && result <= 90){
        alert("Оценка 5");
    }else if (result >= 90 && result <= 180){
        alert("Оценка 4");
    }
    else if (result >= 180 && result <= 270){
        alert("Оценка 3");
    }
    else if (result >= 270 && result <= 360){
        alert("Оценка 2");
    }
    
}
function res(){
    wheel.addEventListener("transitionend", show_result());
}
