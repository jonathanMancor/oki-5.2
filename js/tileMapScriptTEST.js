var ctx = null;
var tileW = 40, tileH = 40;
var mapW = 10, mapH = 10;

var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var lastFrameTime = 0;

var keys = {
  37: false, //left
  38: false, //down
  39: false, //right
  40: false, //down
};


var player = new Character();

function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [30,30];
    this.position = [45,45];
    this.delayMove = 700;
}

Character.prototype.placeAt = function (x,y) {
  this.tileFrom = [x,y];
  this.tileTo = [x,y];
  this.position = [
    ((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
    ((tileH * y) + ((tileW - this.dimensions[1]) / 2))
]};



Character.prototype.processMovement = function (t){
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1] ) {
    return false;
  }

  if((t - this.timeMoved) >= this.delayMove){
    this.placeAt(this.tileTo[0], this.tileTo[1]);
  }else{
    this.position[0] = (this.tileFrom[0] * this.tileW) + ((tileW - this.dimensions[0]) / 2);
    this.position[1] = (this.tileFrom[1] * this.tileH) + ((tileW - this.dimensions[1]) / 2);

    if(this.tileTo[0] != this.tileFrom[0]){

      var diff = (tileW / delayMove) * (t - this.timeMoved);
      this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
    }
    if(this.tileTo[1] != this.tileFrom[1]){

      var diff = (tileH / delayMove) * (t - this.timeMoved);
      this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
    }

    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  }
  return true;
};



function toIndex(x,y) {
  return ((y * mapW) + x);
}









viewPort.width = 1000;
viewPort.height = 700;

var gameMap = [
  0,0,0,0,0,0,0,0,0,0,
  0,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,0,
  0,1,1,1,0,0,0,0,0,0,
  0,1,1,1,0,0,1,1,1,0,
  0,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,0,
  0,1,1,1,1,1,1,1,1,0,
  0,0,0,0,0,0,0,0,0,0,
];









window.onload = function functionName() {
  ctx = document.getElementById('viewPort').getContext('2d');
  requestAnimationFrame(drawGame);

  window.addEventListener('keydown', function (e) {
    if(e.keyCode >= 37 && e.keyCode <= 40){
      keysDown[e.keyCode] = true;
    }
  });

  window.addEventListener('keyup', function (e) {
    if(e.keyCode >= 37 && e.keyCode <= 40){
      keysDown[e.keyCode] = false;
    }
  });
}


function drawGame() {

  if( ctx == null) { return; }

  var currentFrameTime = Date.now();
  var timeElapsed = currentFrameTime - lastFrameTime;

  var sec = Math.floor(Date.now()/1000);
  if( sec != currentSecond){
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  }else{ frameCount++; }


  if(!player.processMovement(currentFrameTime)){
    if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 1 ) {
      player.tileTo[1] -= 1;
    } else if (keysDown[40] && player.tileFrom[1] > (mapH - 1) && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] == 1 ) {
      player.tileTo[1] += 1;
    }
    if (keysDown[37] && player.tileFrom[0] > 0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[0])] == 1 ) {
      player.tileTo[0] -= 1;
    } else if (keysDown[39] && player.tileFrom[0] > (mapW - 1) && gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 1 ) {
      player.tileTo[0] += 1;
    }
  }


  for( var y = 0; y < mapH; y++){
    for( var x = 0; x < mapW; x++){
      switch( gameMap[((y * mapW) + x)]){
        case 0:
        ctx.fillStyle = '#999999';
        break;

        default:
        ctx.fillStyle = '#eeeeee';
      }

      ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
    }
  }

  ctx.fillStyle = '#ff0000';
  ctx.fillText("FPS:" + framesLastSecond, 10, 20);

  requestAnimationFrame(drawGame);
}







var mapX = 0;
var mapY = 0;
for(var x = 0; x < map1Parameters.mapW; x++){
   mapX++;
   mapY++;
   ctx.drawImage(tileMapImage, map1Parameters.x * map1Parameters.frameX, map1Parameters.y * map1Parameters.frameY, map1Parameters.tileW, map1Parameters.tileH, map1Parameters.x, map1Parameters.y + (map1Parameters.tileH * mapY), map1Parameters.tileW, map1Parameters.tileH);
   ctx.drawImage(tileMapImage, map1Parameters.x * map1Parameters.frameX, map1Parameters.y * map1Parameters.frameY, map1Parameters.tileW, map1Parameters.tileH, map1Parameters.x + (map1Parameters.tileW * mapX), map1Parameters.y, map1Parameters.tileW, map1Parameters.tileH);
   for(var y = 0; y < map1Parameters.mapH; y++){

      ctx.drawImage(tileMapImage, map1Parameters.x * map1Parameters.frameX, map1Parameters.y * map1Parameters.frameY, map1Parameters.tileW, map1Parameters.tileH, map1Parameters.x + map1Parameters.tileW * mapX, map1Parameters.y + (map1Parameters.tileH * mapY), map1Parameters.tileW, map1Parameters.tileH);

    }

  }
