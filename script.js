var score =0;
var hittrn =0;

var time =60;

function circle(){
    var clutter ="";

for(var i= 1; i<=192; i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div id="circle">${rn}</div>`;
}
document.querySelector("#hit-section").innerHTML=clutter;
}



function runtimer(){
   var runint= setInterval(function(){
            if(time>0){
                time--;
                document.querySelector("#Timer").textContent =time;
            }
            else{
                clearInterval(runint);
                document.querySelector("#hit-section").textContent = `GAME OVER`
                document.querySelector("#hit-section").innerHTML = `<h1>THE TOTAL SCORE = ${score}</h1>`
            }
},1000)


}

function hit(){
   
    hittrn =Math.floor(Math.random()*10);
      document.querySelector("#hit-ter").textContent =hittrn;
}
  
function scoreincrease(){
          score +=10;
          document.querySelector('#scoreval').textContent = score;

}

document.querySelector('#hit-section').addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(hittrn ===clickednum){
         scoreincrease();
         circle();
         hit();

    }

})


document.querySelector("#hit-section").innerHTML ="hey heyt";



hit();
runtimer();
circle();





