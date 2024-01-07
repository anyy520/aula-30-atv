
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
// 5.crie uma matriz vazia



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

 

  Engine.update(engine);
  ground.display();

 
//7. Crie um laço de repetição e 8.chamar showCannonBalls() várias vezes.

  

  cannon.display();
  tower.display();

  
}
//6.crie uma função de acionamento de tecla



// 9. Crie uma função para exibir a bala


 // 10. Adicione a condição para verificar a posição da bala e remova a bala do mundo (World)

 // 11. Adicione splice() para remover os elementos da matriz.


function keyReleased() {
  if (keyCode === DOWN_ARROW) { 
    balls[balls.length - 1].shoot();
  }
}
