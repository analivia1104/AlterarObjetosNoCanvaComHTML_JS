var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var quadradoA =  canvas.getContext('2d');
var quadradoB =  canvas.getContext('2d');
var quadradoC =  canvas.getContext('2d');
var quadradoD =  canvas.getContext('2d');
var quadradoE =  canvas.getContext('2d');
var quadradoF =  canvas.getContext('2d');
var quadradoG =  canvas.getContext('2d');
var quadradoH =  canvas.getContext('2d');
var quadradoI =  canvas.getContext('2d');
var quadradoJ =  canvas.getContext('2d');

quadradoA.fillStyle = 'rgba( 0,255,0,0,5)'; // Preto
quadradoA.fillRect(10,100,50,50); // largura, altura, lados

quadradoB.fillStyle = 'rgba( 72,61,139, 5)'; // Roxo
quadradoB.fillRect(115,100,50,50); // largura, altura, lados

quadradoC.fillStyle = 'rgba( 0,0,205, 5)'; // Azul
quadradoC.fillRect(230,100,50,50); // largura, altura, lados

quadradoD.fillStyle = 'rgba( 0,191,255, 5)'; // Azul Marinho
quadradoD.fillRect(350,100,50,50); // largura, altura, lados

quadradoE.fillStyle = 'rgba( 0,128,0, 5)'; // Verdinho
quadradoE.fillRect(500,100,50,50); // largura, altura, lados

quadradoF.fillStyle = 'rgba( 124,252,0, 5)'; // Oto verdinho
quadradoF.fillRect(650,100,50,50); // largura, altura, lados

quadradoG.fillStyle = 'rgba(218,165,32, 5)'; // Amarelo ovo claro
quadradoG.fillRect(800,100,50,50); // largura, altura, lados

quadradoH.fillStyle = 'rgba( 210,105,30, 5)'; // Laranja
quadradoH.fillRect(950,100,50,50); // largura, altura, lados

quadradoI.fillStyle = 'rgba( 128,0,0, 5)'; // Vermelho bonito
quadradoI.fillRect(1100,100,50,50); // largura, altura, lados

quadradoJ.fillStyle = 'rgba(199,21,133, 5)'; // Rosa Y2K
quadradoJ.fillRect(1250,100,50,50); // largura, altura, lados