var b_grp, t_grp, f_grp

function setup() {
  dw = displayWidth-10;
  dh = displayHeight-150;  
  createCanvas(dw, dh);
  // ground = createSprite(dw/2-50, dh-130, dw, 20);  
  // wall = createSprite(-386, 30, 670, 650)
  player = createSprite(0,700,10,10);
  player.visible = false;
  // player.debug = true;
  // block = createSprite(dw/2, dh-150, 40, 10);
  // trampoline = createSprite(dw/2+30, dh-150, 40, 10);
  // trampoline.shapeColor = "red";
  // mov_block = createSprite(dw/2+60, dh-150, 40, 10);
  // mov_block.velocityX = 3;


  b_grp = new Group();
  t_grp = new Group();
  f_grp = new Group();
}

function draw() {
  background("black");
  Block(100, 1100, 500, 600);
  Block(-550, 650, 1000, 1500);
  Block(550, 1100, 80, 600)
  Block(750, 1100, 80, 600)
  Block(950, 1100, 80, 600)
  Block(1350 ,1100,500, 600)
  Trampoline(1550, 800, 30, 10)
  Block(1750, 500, 70, 40)
  Mov_block(1900, 500)



  ellipse(player.x+5, player.y-5, 20, 20);
  // player.velocityY += 0.8;  
  console.log(player.y)
  camera.x = player.x;
  camera.y = player.y-100;

  if(player.isTouching(t_grp)){
    player.velocityY = -15.5
  }

  console.log(player.x, player.y);

  if(keyDown("d")){
    player.x+=10;
  }
  if(keyDown("a")){
    player.x-=10;
  }
  if(keyDown("w")){
    player.y-=10;
  }
  if(keyDown("s")){
    player.y+=10;
  }

  // if(player.collide(mov_block)){
  // //   player.velocityX = 3;
  // //   console.log("mov");
  // // }
  // else if(player.isTouching(ground)){
  //   player.velocityX = 0;
  //   console.log("n_mov");
  // }
  player.collide(b_grp);
  player.collide(f_grp);
  drawSprites();    
}
function Block(x,y,width,height){
  block = createSprite(x,y,width,height);
  b_grp.add(block);
}
function Trampoline(x,y){
  trampoline = createSprite(x, y, 40, 10);
  trampoline.shapeColor = "red";
  t_grp.add(trampoline);
}
 function Mov_block(x,y){
  mov_block = createSprite(x, y, 40, 10);
  mov_block.collide(b_grp);
  f_grp.add(mov_block);
 }
