let hit = Math.floor(Math.random()*10);
let score= 0;


//------------BUBBLE FUNCTION
function bubbleno(){
    let clutter = '';




for (let i = 0; i < 65; i++) {
    let rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`;
    
    
}

document.querySelector(".panelbtm").innerHTML= clutter
}


// ---------TIMER FUNCTION
function timerrun(){
    let timer = 61
    setInterval(function(){
        if (timer>0){
            timer --
            document.querySelector(".timer").textContent= timer;
        }
        
        else{
            clearInterval(timer);
            let b= document.querySelector(".panelbtm").innerHTML=`<h1 style="font-family=montserrat">GAME OVER</h1>`
             
        }
    }, 1000)
}


//-----------NEW HIT  FUNCTION

function getnewhit(){
    
    document.querySelector(".hit").textContent = hit;
}

function Incresescore(){

score += 10;
document.querySelector(".score").textContent=score
}

// Final Function

function final(){
let e = document.querySelector(".panelbtm")
e.addEventListener("click", function(details){
    let a =Number(details.target.textContent);
    if (a == hit){
        Incresescore();
        bubbleno();
        getnewhit();
    }
    else{
        alert("Try again")
    }

    
})

}







//--------------CALLBACKS------------->

let k = document.querySelector(".start")
k.addEventListener("click", function(){
    alert("Yor time starts Now!")
    getnewhit();
  bubbleno();
  timerrun();
  final();
});



