var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var quadrado = canvas.getContext('2d');
var quadrado2 = canvas.getContext('2d');

var x=200;
var y=200;
var dx=4;
var eixoX = 10;
var eixoY = 10;
/*------------------------------------------------------PROGRAMAÇÃO----EIXO_X-------------------------------------------*/
function animate_X (){
    requestAnimationFrame(animate_X);

    quadrado.clearRect(0,0,innerWidth,innerHeight); //limpar toda a tela

    quadrado.fillStyle = "#00BFFF" ;
    quadrado.fillRect(x,250,200,200); // eixo x; eixo y; altura. largura

    if((x+200)>innerWidth){
        eixoX=-eixoX

    }
    else if (x<0) eixoX =-eixoX;
    x=x+eixoX;

}
animate_X()
/*------------------------------------------------------PROGRAMAÇÃO----EIXO_y-------------------------------------------*/
/*function animate_Y (){
    requestAnimationFrame(animate_Y);

    quadrado2.clearRect(0,0,innerWidth,innerHeight); //limpar toda a tela

    quadrado2.fillStyle = "#FF4500" ;
    quadrado2.fillRect(200,y,200,200); // eixo x; eixo y; altura. largura

    if((y+200)>innerHeight){
        eixoY=-eixoY

    }
    else if (y<0) eixoY =-eixoY;
    y=y+eixoY;

}
animate_Y()*/