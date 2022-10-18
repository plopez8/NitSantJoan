window.onload=function start(){
bucle();
}


function bucle(){

  array = [];
  var estrella = new Estrella(Math.random() * 800,Math.random() * 400, 4);
  circle(estrella.x, estrella.y, estrella.radi);
  array.push(estrella);
    var estrella = new Estrella(Math.random() * 800,Math.random() * 400, 4);
  for ( i = 0; i < parseInt(localStorage.getItem('Estrelles')); i++){
    console.log("empieza bucle 1--");
    distancia = 0;
    for(j = 0; j < i; j++){
      console.log("empieza bucle 2");
        if(((array[j].x -localStorage.getItem('Distancia')-array[j].radi > estrella.x+estrella.radi ) && (array[j].x+localStorage.getItem('Distancia')+array[j].radi < estrella.x-estrella.radi)) && ((array[j].y-localStorage.getItem('Distancia')-array[j].radi > estrella.y+estrella.radi) && (array[j].y+localStorage.getItem('Distancia')+array[j].radi < estrella.y-estrella.radi))){
          console.log("buena distancia");
          console.log("x array:"+array[j].x+"x estrella:"+estrella.x+"y array:"+array[j].x+"y estrella:"+estrella.y);
          distancia = 1;        
        }else{
          console.log("f");
          console.log("x array:"+array[j].x+"x estrella:"+estrella.x+"y array:"+array[j].y+"y estrella:"+estrella.y);
        }
      console.log("termina bucle 2");  
    }
    circle(estrella.x, estrella.y, estrella.radi);
    var estrella = new Estrella(Math.random() * 800,Math.random() * 400, parseInt(localStorage.getItem('Radi')));
    array.push(estrella);
    console.log(distancia);
    console.log("termina bucle 1--");  

  }
}


function Estrella(x, y, radi) {
  this.x = x;
  this.y = y;
  this.radi = radi;
}

function circle(x, y, radi){
    var canvas = document.getElementById("nit"); 
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, radi, 0, Math.PI*2);
    context.stroke();
    context.globalAlpha = Math.random() * (1 - 0.1) + 0.1;;
    context.fillStyle = "#FFFFFF";
    context.fill();    
  }
