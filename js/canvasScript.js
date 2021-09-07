window.addEventListener("keydown", function(eventKey) {
  keys[eventKey.keyCode] = true;
});
window.addEventListener("keyup", function(eventKey) {
  delete keys[eventKey.keyCode];
});


const story1Canvas = document.getElementById('story1Canvas');
const ctxS1 = story1Canvas.getContext('2d');


const playerCanvas = document.getElementById('playerCanvas');
const ctxP = playerCanvas.getContext('2d');


const mapCanvas = document.getElementById('mapCanvas');
const ctxM = mapCanvas.getContext('2d');

const objectCanvas = document.getElementById('objectCanvas');
const ctxO = mapCanvas.getContext('2d');

const worldMapCanvas = document.getElementById('worldMapCanvas');
const ctxW = mapCanvas.getContext('2d');



//viewPort.width = window.innerWidth;
//viewPort.height = window.innerHeight;

const keys = [];
var cameraSize = [800,600];
var currentRoom = 'homePage';
var tileMapIndex = 'bunker';
var activeMapW = 0;
var activeMapH = 0;
var terminalState = false;
const tileSize = 32;






var viewport = {
	x: 0,
  y: 0,
  width: cameraSize[0],
  height: cameraSize[1]
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// TileMap Layouts /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//player
const player = {
  x: 0,
  y: 0,
  width: 1 * tileSize,
  height: 2 * tileSize,
  frameX: 0,
  frameY: 0,
  speed: 4,
  moving: false
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// TileMaps parameters /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////Bunker//////////////////////////////////////
//Private quarters======================================
//world map--------
const pqMapLayout = [
13,12,12,12,12,12,12,13,
13,18,21,21,21,21,24,13,
13,19,22,22,22,22,25,13,
13,4,4,4,4,4,4,13,
13,4,4,4,4,4,4,13,
13,4,4,4,4,4,4,13,
13,6,4,4,4,4,4,13,
13,8,4,4,4,4,4,13,
13,4,4,4,4,4,4,13,
13,4,4,4,4,4,4,13,
13,4,4,4,4,4,4,13,
12,12,12,12,12,12,12,12,
];

const pqBotWallLayout = [
  12,12,12,12,12,12,12,12,
  18,21,21,21,21,21,21,24,
  19,22,22,22,22,22,22,25,
];

const pqMapParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 8,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const pqBotWallParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 8,
  mapH: 3,
  frameX: 0,
  frameY: 0
}

//object map--------
const pqObjectLayout = [
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,.1,0,
  0,0,0,0,0,0,1,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,3,0,
  0,0,0,0,0,0,4,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
];
const pqObjectParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 8,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const pqTerminal = {
  x: 5 * tileSize,
  y: 0.5 * tileSize,
  w: 1 * tileSize,
  h: 2 * tileSize
}

const pqBed = {
  x: 5 * tileSize,
  y: 5.5 * tileSize,
  w: 1 * tileSize,
  h: 2 * tileSize
}

const pqElevCc = {
  x: -0.9 * tileSize,
  y: 4 * tileSize,
  w: 1 * tileSize,
  h: 2 * tileSize
}




















//Command Center======================================
//world map--------
const ccMapLayout = [
  13,12,12,12,12,12,12,12,12,12,12,13,
  13,18,21,21,21,21,21,21,21,21,24,13,
  13,19,22,22,22,22,22,22,22,22,25,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,.1,6,4,4,4,4,13,
  12,12,12,12,12,12,12,12,12,12,12,12,
];

const ccBotWallLayout = [
  13,12,12,12,12,27,30,12,12,12,12,13,
  13,18,21,21,24,28,31,18,21,21,24,13,
  13,19,22,22,25,29,32,19,22,22,25,13,
];

const ccMapParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 12,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const ccBotWallParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 12,
  mapH: 3,
  frameX: 0,
  frameY: 0
}


//object map--------
const ccObjectLayout = [
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,18,0,0,0,0,18,0,0,0,
  0,0,0,19,6,9,12,15,19,0,.1,0,
  0,0,0,0,7,10,13,16,0,0,1,0,
  0,0,0,0,0,11,14,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,
];
const ccObjectParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 12,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const ccTerminal = {
  x: 9 * tileSize,
  y: 0.5 * tileSize,
  w: 1 * tileSize,
  h: 2 * tileSize
}

const commandTable = {
  x: 3 * tileSize,
  y: 0 * tileSize,
  w: 4 * tileSize,
  h: 3.5 * tileSize
}

const ccDoorElev01 = {
  x: 5 * tileSize,
  y: 8.9 * tileSize,
  w: 2 * tileSize,
  h: 1 * tileSize
}



//Elevator rooms=====================================
//object map--------
const elev00MapLayout = [
  13,12,12,12,12,12,12,12,12,13,
  13,18,21,21,21,21,21,21,24,13,
  13,19,22,22,22,22,22,22,25,13,
  13,4,4,4,2,8,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  12,12,12,12,12,12,12,12,12,12,
];

const elev01MapLayout = [
  13,12,12,12,12,12,12,12,12,13,
  13,18,21,21,21,21,21,21,24,13,
  13,19,22,22,22,22,22,22,25,13,
  13,4,4,4,2,8,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,6,4,4,4,4,4,4,.1,13,
  13,8,4,4,4,4,4,4,2,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,.1,6,4,4,4,13,
  12,12,12,12,12,12,12,12,12,12,];

const elevBotWallLayout = [
  13,12,12,12,27,30,12,12,12,13,
  13,18,21,24,28,31,18,21,24,13,
  13,19,22,25,29,32,19,22,25,13,
];

const elev00MapParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const elev01MapParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const elevBotWallParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 3,
  frameX: 0,
  frameY: 0
}





//object map--------
const elevObjectLayout = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,21,24,24,27,0,0,0,
  0,0,0,22,25,25,28,0,0,0,
  0,0,0,22,25,25,28,0,0,0,
  0,0,0,23,26,26,29,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
];
const elevObjectParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 12,
  frameX: 0,
  frameY: 0
}

const elev00Elev01 = {
  x: 2 * tileSize,
  y: 3 * tileSize,
  w: 3 * tileSize,
  h: 4 * tileSize
}

const elev00DoorGate = {
  x: 4 * tileSize,
  y: 1 * tileSize,
  w: 2 * tileSize,
  h: 1 * tileSize
}

const elev01Elev00 = {
  x: 2 * tileSize,
  y: 3 * tileSize,
  w: 3 * tileSize,
  h: 4 * tileSize
}

const elev01DoorPq = {
  x: 7.9 * tileSize,
  y: 4 * tileSize,
  w: 1 * tileSize,
  h: 2 * tileSize
}

const elev01DoorCc = {
  x: 4 * tileSize,
  y: 1 * tileSize,
  w: 2 * tileSize,
  h: 1 * tileSize
}























//Gate Room ===================================================

const gateMapLayout = [
  13,12,12,42,45,48,51,12,12,13,
  13,18,21,43,46,49,52,21,24,13,
  13,19,22,44,47,50,53,22,25,13,
  13,4,4,33,36,36,39,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,34,37,37,40,4,4,13,
  13,4,4,35,38,38,41,4,4,13,
  13,4,4,4,4,4,4,4,4,13,
  13,4,4,4,.1,6,4,4,4,13,
  12,12,12,12,12,12,12,12,12,12,];

const gateMapParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 16,
  frameX: 0,
  frameY: 0
}





const gateBotWallLayout = [
  13,12,12,12,27,30,12,12,12,13,
  13,18,21,24,28,31,18,21,24,13,
  13,19,22,25,29,32,19,22,25,13,
  //9,10,10,10,10,10,10,10,10,9,
];
const gateBotWallParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 3,
  frameX: 0,
  frameY: 0
}


const gateObjectLayout = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
];
const gateObjectParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 10,
  mapH: 16,
  frameX: 0,
  frameY: 0
}

const gate = {
  x: 4 * tileSize,
  y: 1 * tileSize,
  w: 4 * tileSize,
  h: 1 * tileSize
}

const gateDoorElev00 = {
  x: 4 * tileSize,
  y: 12.9 * tileSize,
  w: 2 * tileSize,
  h: 1 * tileSize
}






/////////////////////////////World Map////////////////////////////
const wm0000Layout = [
    13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
    13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
    13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
    13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,.1,3,6,13,
    13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,.1,17,4,11,6,
    3,3,3,6,13,13,13,13,13,13,13,13,13,13,.1,17,4,4,4,11,
    4,4,4,11,3,3,3,3,3,6,13,13,13,.1,17,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,11,6,13,.1,17,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
    4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
  ];


const wm0000Parameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 20,
  mapH: 16,
  frameX: 0,
  frameY: 0
}











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Canvas Orientation /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



pqBotWallParameter.y = (pqMapParameter.mapH - pqBotWallParameter.mapH) * tileSize;
ccBotWallParameter.y = (ccMapParameter.mapH - ccBotWallParameter.mapH) * tileSize;
elevBotWallParameter.y = (elev01MapParameter.mapH - elevBotWallParameter.mapH) * tileSize;
gateBotWallParameter.y = (gateMapParameter.mapH - gateBotWallParameter.mapH) * tileSize;





playerCanvas.x = (cameraSize[0] / 2) - player.width;
playerCanvas.y = (cameraSize[1] - player.height) / 2;
playerCanvas.width = player.width;
playerCanvas.height = player.height;


var roomDisplace = [-5,-5];

mapCanvas.width = activeMapW;
mapCanvas.height = activeMapH;
mapCanvas.x = playerCanvas.x + (( roomDisplace[0]) * tileSize);
mapCanvas.y = playerCanvas.y + ( roomDisplace[1] * tileSize);

objectCanvas.x = mapCanvas.x;
objectCanvas.y = mapCanvas.y;
objectCanvas.width = activeMapW;
objectCanvas.height = activeMapH;

story1Canvas.x = mapCanvas.x;
story1Canvas.y = mapCanvas.y;
story1Canvas.width = activeMapW;
story1Canvas.height = activeMapH;





worldMapCanvas.width = activeMapW;
worldMapCanvas.height = activeMapH;
worldMapCanvas.x = playerCanvas.x + (( roomDisplace[0]) * tileSize);
worldMapCanvas.y = playerCanvas.y + ( roomDisplace[1] * tileSize);



function orientScene() {
  if (window.innerWidth > 1143){
    cameraSize = [800,500];
  }
  if (window.innerWidth <= 1143){
    cameraSize = [640,500];
  }


  if (window.innerWidth <= 914){
    cameraSize = [480,500];
  }
  mapCanvas.width = activeMapW;
  mapCanvas.height = activeMapH;
  objectCanvas.width = activeMapW;
  objectCanvas.height = activeMapH;
  objectCanvas.x = mapCanvas.x;
  objectCanvas.y = mapCanvas.y;


  worldMapCanvas.width = activeMapW;
  worldMapCanvas.height = activeMapH;
  worldMapCanvas.x = mapCanvas.x;
  worldMapCanvas.y = mapCanvas.y;

  $('#camera').css('width', cameraSize[0] + 'px');
  $('#camera').css('height', cameraSize[1] + 'px');


  $('#story1Canvas').css('left', story1Canvas.x  + 'px');
  $('#story1Canvas').css('top',  story1Canvas.y + 'px');

  $('#playerCanvas').css('left', playerCanvas.x  + 'px');
  $('#playerCanvas').css('top',  playerCanvas.y + 'px');

  $('#objectCanvas').css('left', objectCanvas.x + 'px');
  $('#objectCanvas').css('top', objectCanvas.y + 'px');

  $('#mapCanvas').css('left', mapCanvas.x + 'px');
  $('#mapCanvas').css('top', mapCanvas.y + 'px');


  $('#worldMapCanvas').css('left', worldMapCanvas.x + 'px');
  $('#worldMapCanvas').css('top', worldMapCanvas.y + 'px');
}










































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// TileMaps Parameter /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const playerSprite = new Image();
playerSprite.src = "img/sprites/turmSpriteSheet.png";




const bunkerTileMapImage = new Image();
bunkerTileMapImage.src = "img/16x16BunkerTileMap.png";

const bunkerObjectTileMapImage = new Image();
bunkerObjectTileMapImage.src = "img/16x16bunkerObjectTileMap.png";

const rotLandTileMapImage = new Image();
rotLandTileMapImage.src = "img/16x16RotLandTileMap.png";

const rotLandObjectTileMapImage = new Image();
rotLandObjectTileMapImage.src = "img/16x16rotLandObjectTileMap.png";

const worldMapTileMapImage = new Image();
worldMapTileMapImage.src = "img/16x16WorldMapTileMap.png";






const backgroundTileImage = new Image();
backgroundTileImage.src = "img/backgroundTile.png";







///////////////////////////////////////////////////////// TileMaps /////////////////////////////////////////////////////////

function tileCases(layout,parameter){
  for( var y = 0; y < parameter.mapH; y++){
    for( var x = 0; x < parameter.mapW; x++){
      switch(layout[(y * parameter.mapW) + x ]){

        case 0:
        if(tileMapIndex == 'bunker'){
          break;
        }else if (tileMapIndex == 'rotland') {
          ctxM.drawImage(backgroundTileImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
        }

          break;

        case 1:
        ctxM.drawImage(tileMapImage, parameter.tileW * 0, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 2:
        ctxM.drawImage(tileMapImage, parameter.tileW * 0, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 3:
        ctxM.drawImage(tileMapImage, parameter.tileW * 1, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 4:
        ctxM.drawImage(tileMapImage, parameter.tileW * 1, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 5:
        ctxM.drawImage(tileMapImage, parameter.tileW * 1, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 6:
        ctxM.drawImage(tileMapImage, parameter.tileW * 2, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 7:
        ctxM.drawImage(tileMapImage, parameter.tileW * 2, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 8:
        ctxM.drawImage(tileMapImage, parameter.tileW * 2, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 9:
        ctxM.drawImage(tileMapImage, parameter.tileW * 3, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 10:
        ctxM.drawImage(tileMapImage, parameter.tileW * 3, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 11:
        ctxM.drawImage(tileMapImage, parameter.tileW * 3, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 12:
        ctxM.drawImage(tileMapImage, parameter.tileW * 4, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 13:
        ctxM.drawImage(tileMapImage, parameter.tileW * 4, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 14:
        ctxM.drawImage(tileMapImage, parameter.tileW * 4, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 15:
        ctxM.drawImage(tileMapImage, parameter.tileW * 5, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 16:
        ctxM.drawImage(tileMapImage, parameter.tileW * 5, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 17:
        ctxM.drawImage(tileMapImage, parameter.tileW * 5, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 18:
        ctxM.drawImage(tileMapImage, parameter.tileW * 6, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 19:
        ctxM.drawImage(tileMapImage, parameter.tileW * 6, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 20:
        ctxM.drawImage(tileMapImage, parameter.tileW * 6, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 21:
        ctxM.drawImage(tileMapImage, parameter.tileW * 7, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 22:
        ctxM.drawImage(tileMapImage, parameter.tileW * 7, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 23:
        ctxM.drawImage(tileMapImage, parameter.tileW * 7, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 24:
        ctxM.drawImage(tileMapImage, parameter.tileW * 8, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 25:
        ctxM.drawImage(tileMapImage, parameter.tileW * 8, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 26:
        ctxM.drawImage(tileMapImage, parameter.tileW * 8, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 27:
        ctxM.drawImage(tileMapImage, parameter.tileW * 9, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 28:
        ctxM.drawImage(tileMapImage, parameter.tileW * 9, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 29:
        ctxM.drawImage(tileMapImage, parameter.tileW * 9, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 30:
        ctxM.drawImage(tileMapImage, parameter.tileW * 10, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 31:
        ctxM.drawImage(tileMapImage, parameter.tileW * 10, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 32:
        ctxM.drawImage(tileMapImage, parameter.tileW * 10, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 33:
        ctxM.drawImage(tileMapImage, parameter.tileW * 11, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 34:
        ctxM.drawImage(tileMapImage, parameter.tileW * 11, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 35:
        ctxM.drawImage(tileMapImage, parameter.tileW * 11, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 36:
        ctxM.drawImage(tileMapImage, parameter.tileW * 12, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 37:
        ctxM.drawImage(tileMapImage, parameter.tileW * 12, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 38:
        ctxM.drawImage(tileMapImage, parameter.tileW * 12, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 39:
       ctxM.drawImage(tileMapImage, parameter.tileW * 13, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 40:
        ctxM.drawImage(tileMapImage, parameter.tileW * 13, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 41:
        ctxM.drawImage(tileMapImage, parameter.tileW * 13, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 42:
        ctxM.drawImage(tileMapImage, parameter.tileW * 14, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 43:
        ctxM.drawImage(tileMapImage, parameter.tileW * 14, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 44:
        ctxM.drawImage(tileMapImage, parameter.tileW * 14, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 45:
        ctxM.drawImage(tileMapImage, parameter.tileW * 15, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 46:
        ctxM.drawImage(tileMapImage, parameter.tileW * 15, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 47:
        ctxM.drawImage(tileMapImage, parameter.tileW * 15, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 48:
        ctxM.drawImage(tileMapImage, parameter.tileW * 16, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 49:
        ctxM.drawImage(tileMapImage, parameter.tileW * 16, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 50:
        ctxM.drawImage(tileMapImage, parameter.tileW * 16, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 51:
        ctxM.drawImage(tileMapImage, parameter.tileW * 17, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 52:
        ctxM.drawImage(tileMapImage, parameter.tileW * 17, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 53:
        ctxM.drawImage(tileMapImage, parameter.tileW * 17, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


        case 54:
        ctxM.drawImage(tileMapImage, parameter.tileW * 18, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 55:
        ctxM.drawImage(tileMapImage, parameter.tileW * 18, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 56:
        ctxM.drawImage(tileMapImage, parameter.tileW * 18, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


        case 57:
        ctxM.drawImage(tileMapImage, parameter.tileW * 19, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 58:
        ctxM.drawImage(tileMapImage, parameter.tileW * 19, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 59:
        ctxM.drawImage(tileMapImage, parameter.tileW * 19, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 60:
        ctxM.drawImage(tileMapImage, parameter.tileW * 20, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 61:
        ctxM.drawImage(tileMapImage, parameter.tileW * 20, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 62:
        ctxM.drawImage(tileMapImage, parameter.tileW * 20, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;






        default:
          ctxM.drawImage(tileMapImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
      }


    }

  }

}








function objectTileCases(layout,parameter){



  for( var y = 0; y < parameter.mapH; y++){
    for( var x = 0; x < parameter.mapW; x++){
      switch(layout[(y * parameter.mapW) + x ]){


        case 0:

          break;

        case 1:
        ctxO.drawImage(mapObject, parameter.tileW * 0, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 2:
        ctxO.drawImage(mapObject, parameter.tileW * 0, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 3:
        ctxO.drawImage(mapObject, parameter.tileW * 1, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 4:
        ctxO.drawImage(mapObject, parameter.tileW * 1, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 5:
        ctxO.drawImage(mapObject, parameter.tileW * 1, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 6:
        ctxO.drawImage(mapObject, parameter.tileW * 2, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 7:
        ctxO.drawImage(mapObject, parameter.tileW * 2, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 8:
        ctxO.drawImage(mapObject, parameter.tileW * 2, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 9:
        ctxO.drawImage(mapObject, parameter.tileW * 3, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 10:
        ctxO.drawImage(mapObject, parameter.tileW * 3, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 11:
        ctxO.drawImage(mapObject, parameter.tileW * 3, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 12:
        ctxO.drawImage(mapObject, parameter.tileW * 4, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 13:
        ctxO.drawImage(mapObject, parameter.tileW * 4, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 14:
        ctxO.drawImage(mapObject, parameter.tileW * 4, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 15:
        ctxO.drawImage(mapObject, parameter.tileW * 5, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 16:
        ctxO.drawImage(mapObject, parameter.tileW * 5, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 17:
        ctxO.drawImage(mapObject, parameter.tileW * 5, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 18:
        ctxO.drawImage(mapObject, parameter.tileW * 6, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 19:
        ctxO.drawImage(mapObject, parameter.tileW * 6, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 20:
        ctxO.drawImage(mapObject, parameter.tileW * 6, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 21:
        ctxO.drawImage(mapObject, parameter.tileW * 7, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 22:
        ctxO.drawImage(mapObject, parameter.tileW * 7, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 23:
        ctxO.drawImage(mapObject, parameter.tileW * 7, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 24:
        ctxO.drawImage(mapObject, parameter.tileW * 8, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 25:
        ctxO.drawImage(mapObject, parameter.tileW * 8, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 26:
        ctxO.drawImage(mapObject, parameter.tileW * 8, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 27:
        ctxO.drawImage(mapObject, parameter.tileW * 9, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 28:
        ctxO.drawImage(mapObject, parameter.tileW * 9, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 29:
        ctxO.drawImage(mapObject, parameter.tileW * 9, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 30:
        ctxO.drawImage(mapObject, parameter.tileW * 10, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 31:
        ctxO.drawImage(mapObject, parameter.tileW * 10, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 32:
        ctxO.drawImage(mapObject, parameter.tileW * 10, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 33:
        ctxO.drawImage(mapObject, parameter.tileW * 11, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 34:
        ctxO.drawImage(mapObject, parameter.tileW * 11, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 35:
        ctxO.drawImage(mapObject, parameter.tileW * 11, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 36:
        ctxO.drawImage(mapObject, parameter.tileW * 12, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 37:
        ctxO.drawImage(mapObject, parameter.tileW * 12, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 38:
        ctxO.drawImage(mapObject, parameter.tileW * 12, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;




        default:
ctxO.drawImage(mapObject, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
        }
      }
    }

  }


















  function worldMapTileCases(layout,parameter){
    for( var y = 0; y < parameter.mapH; y++){
      for( var x = 0; x < parameter.mapW; x++){
        switch(layout[(y * parameter.mapW) + x ]){

          case 0:
          if(tileMapIndex == 'bunker'){
            break;
          }else if (tileMapIndex == 'rotland') {
            ctxW.drawImage(backgroundTileImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          }

            break;

          case 1:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 0, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


          case 2:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 0, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 3:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 1, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 4:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 1, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 5:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 1, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


          case 6:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 2, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 7:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 2, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 8:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 2, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 9:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 3, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 10:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 3, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 11:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 3, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 12:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 4, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 13:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 4, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 14:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 4, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 15:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 5, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 16:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 5, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 17:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 5, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 18:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 6, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 19:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 6, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 20:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 6, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 21:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 7, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 22:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 7, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 23:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 7, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 24:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 8, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 25:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 8, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 26:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 8, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


          case 27:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 9, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 28:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 9, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 29:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 9, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 30:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 10, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 31:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 10, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 32:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 10, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 33:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 11, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 34:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 11, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 35:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 11, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 36:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 12, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 37:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 12, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 38:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 12, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

         case 39:
         ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 13, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

         case 40:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 13, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

         case 41:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 13, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

         case 42:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 14, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 43:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 14, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 44:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 14, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 45:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 15, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 46:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 15, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 47:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 15, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;

          case 48:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 16, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 49:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 16, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 50:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 16, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;

          case 51:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 17, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 52:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 17, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 53:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 17, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;


          case 54:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 18, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 55:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 18, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 56:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 18, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;


          case 57:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 19, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 58:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 19, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 59:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 19, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;

          case 60:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 20, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 61:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 20, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

          case 62:
          ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 20, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
              break;






          default:
            ctxW.drawImage(worldMapTileMapImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
        }


      }

    }

  }

















  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////// Animation Function /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var mapAlpha = 1;
var elevDirection = 'none';
function animate(){
  movementKeyReset();
  ctxS1.clearRect( 0,0, story1Canvas.width, story1Canvas.height);
  ctxP.clearRect( 0,0, playerCanvas.width, playerCanvas.height);
  ctxO.clearRect( 0,0, objectCanvas.width, objectCanvas.height);
  ctxM.clearRect( 0,0, mapCanvas.width, mapCanvas.height);

  ctxW.clearRect( 0,0, worldMapCanvas.width, worldMapCanvas.height);

  ctxM.globalAlpha = mapAlpha;
  orientScene();

  defineTileMaps();


  if(currentRoom == 'pq'){
    tileCases(pqMapLayout, pqMapParameter);
    objectTileCases(pqObjectLayout, pqObjectParameter);
  }else if (currentRoom == 'cc') {
    tileCases(ccMapLayout, ccMapParameter);
    objectTileCases(ccObjectLayout, ccObjectParameter);
  }else if (currentRoom == 'gate') {
    tileCases(gateMapLayout, gateMapParameter);
    objectTileCases(gateObjectLayout, gateObjectParameter);


  }else if (currentRoom == 'elev00') {
    tileCases(elev00MapLayout, elev00MapParameter);
    objectTileCases(elevObjectLayout, elevObjectParameter);
  }else if (currentRoom == 'elev01') {
    tileCases(elev01MapLayout, elev01MapParameter);
    objectTileCases(elevObjectLayout, elevObjectParameter);
  }



  else if(currentRoom == 'wm'){
    worldMapTileCases(wm0000Layout, wm0000Parameter);
  }









  ctxP.drawImage(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height,      player.x, player.y, player.width, player.height);
  ctxM.globalAlpha = mapAlpha;

   if (currentRoom == 'cc') {
    activeMapW = ccMapParameter.mapW * tileSize;
    activeMapH = ccMapParameter.mapH * tileSize;
    tileCases(ccBotWallLayout, ccBotWallParameter);
  }else if (currentRoom == 'elev00') {
    activeMapW = elev00MapParameter.mapW * tileSize;
    activeMapH = elev00MapParameter.mapH * tileSize;
    tileCases(elevBotWallLayout, elevBotWallParameter);
  }else if (currentRoom == 'elev01') {
    activeMapW = elev01MapParameter.mapW * tileSize;
    activeMapH = elev01MapParameter.mapH * tileSize;
    tileCases(elevBotWallLayout, elevBotWallParameter);
  }else if (currentRoom == 'gate') {
      activeMapW = gateMapParameter.mapW * tileSize;
      activeMapH = gateMapParameter.mapH * tileSize;
      tileCases(gateBotWallLayout, gateBotWallParameter);
  }else if(currentRoom == 'pq'){
    activeMapW = pqMapParameter.mapW * tileSize;
    activeMapH = pqMapParameter.mapH * tileSize;
    tileCases(pqBotWallLayout, pqBotWallParameter);
  }


  else if(currentRoom == 'wm'){
    activeMapW = wm0000Parameter.mapW * tileSize;
    activeMapH = wm0000Parameter.mapH * tileSize;
    //tileCases(pqBotWallLayout, pqBotWallParameter);
  }





  movePlayer();
  setMapBorders();

  requestAnimationFrame(animate);
  setBunkerRooms();
}
animate();



///////////////////////////////////////////////////////////////////////////////////

function defineTileMaps() {
  if(tileMapIndex == 'bunker'){
    tileMapImage = bunkerTileMapImage;
    mapObject = bunkerObjectTileMapImage;
  }


  //  worldMapTileMapImage = worldMapTileMapImage;
}




function accessTerminal(page) {
  terminalLocation();
  //console.log(terminalPage);
  terminalState = true;
  if(terminalState = true){
    $('#camera').css('display','none')
    $('#canvasHp').css('display','none')
    $('#canvasSp').css('display','none')
    $('#canvasRp').css('display','none')
  }
  //terminalPage = 'pq';
  loadVar();
  //setPlayerStats();
  //playerStatDefine();
  //loadUserClass();
  //displayInitialStatDesc();
  //toggleStatAllocationBtn();

    setTerminalPage(page);

}



























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// key events /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






function movePlayer() {
  if (terminalState == false) {
    player.speed = 4;
    if(keys[87] ){
        moveUp();
        movementKeyAnimation(1,1);
    }
    if(keys[65] ){
        moveLeft();
        movementKeyAnimation(2,1);
    }
    if(keys[83] ){
        moveDown();
        movementKeyAnimation(2,2);
    }
    if(keys[68] ){
        moveRight();
        movementKeyAnimation(2,3);
    }
  }else if(terminalState == true){
    player.speed = 0;
  }
}


////////////////////////////////on player movement functions////////////////////////////////
function movementKeyAnimation(m,n) {
  //$('#playerMoveBtnMenu > span:nth-child('+ m +') > button:nth-child('+ n +')').css('background-color','white');
  //$('#playerMoveBtnMenu > span:nth-child('+ m +') > button:nth-child('+ n +') > p').css('color','black');
  $('#playerMoveBtnMenu > span:nth-child('+ m +') > button:nth-child('+ n +')').css('margin-top','10px');
}

function movementKeyReset() {
  //$('#playerMoveBtnMenu > span:nth-child(-n+2) > button').css('background','black');
  //$('#playerMoveBtnMenu > span:nth-child(-n+2) > button > p').css('color','white');
  $('#playerMoveBtnMenu > span:nth-child(-n+2) > button').css('margin-top','auto');
}


function moveUp() {
  mapCanvas.y += player.speed;
  objectCanvas.y += player.speed;
  player.frameX = 0;
  player.frameY = 1;
}

function moveLeft() {
  mapCanvas.x += player.speed;
  objectCanvas.x += player.speed;
  player.frameX = 0;
  player.frameY = 2;
}
function moveDown() {
  mapCanvas.y -= player.speed;
  objectCanvas.y -= player.speed;
  player.frameX = 0;
  player.frameY = 0;
}
function moveRight() {

  mapCanvas.x -= player.speed;
  objectCanvas.x -= player.speed;
  player.frameX = 0;
  player.frameY = 3;
}





function forceStop() {
  if(keys[87]){
    moveDown();
    player.frameX = 0;
    player.frameY = 1;
  }
  if(keys[65]){
    moveRight();
    player.frameX = 0;
    player.frameY = 2;
  }
  if(keys[83]){
    moveUp();
    player.frameX = 0;
    player.frameY = 0;
  }
  if(keys[68]){
    moveLeft();
    player.frameX = 0;
    player.frameY = 3;
  }
}



























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Collision Detect /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function setMapBorders() {


  if(mapCanvas.y > (0.5+6) * tileSize){
    forceStop();
  }

  if(mapCanvas.y + activeMapH < playerCanvas.y + player.height + 1 * tileSize){
    forceStop();
  }else if (mapCanvas.y + activeMapH < playerCanvas.y + player.height + 3 * tileSize ) {
    mapAlpha = 0;
  }else{
    mapAlpha = 1;
  }

  if(mapCanvas.x >  playerCanvas.x - 1 * tileSize){
    forceStop();
  }
  if(mapCanvas.x + activeMapW - 2 * tileSize  < playerCanvas.x ){
    forceStop();
  }









  //objectCollide

  if( currentRoom == 'pq' && terminalState == false){
    if(newCollideDetect(pqTerminal)){
      forceStop();
    }else if (newCollideDetect(pqBed)){
      forceStop();
    }
    if (newTripDetect(pqTerminal)) {
      terminalPage = 'terminal';

    }else if (newTripDetect(pqBed)) {
      terminalPage = 'playerBed';

    }else {
      terminalPage = 'initial';
    }




    if(newCollideDetect(pqElevCc)){
      currentRoom = 'elev01';
      roomDisplace = [-7.6,-5];
      orientCameraLayers();
    }
  }









  else if( currentRoom == 'cc' && terminalState == false){

    if(newCollideDetect(ccTerminal)){
      forceStop();
    }
    if(newTripDetect(ccTerminal)){
      terminalPage = 'terminal';
    }else {
      terminalPage = 'initial';
    }


    if(newCollideDetect(commandTable)){
      forceStop();
    }if(newTripDetect(commandTable)){
      terminalPage = 'commandTable';
    }



    if(newCollideDetect(ccDoorElev01)){
      currentRoom = 'elev01';
      roomDisplace = [-4.5,-2];
      orientCameraLayers();
    }
  }



  if( currentRoom == 'gate' && terminalState == false){
    if(newCollideDetect(gateDoorElev00)){
      currentRoom = 'elev00';
      roomDisplace = [-4.5,-2];
      orientCameraLayers();
    }

    if(newCollideDetect(gate)){
      terminalPage = 'gate';
    }else {
      terminalPage = 'initial';
    }
  }








  if( currentRoom == 'elev00' && terminalState == false){

    if(newCollideDetect(elev00DoorGate)){
      currentRoom = 'gate';
      roomDisplace = [-4.5,-13];
      orientCameraLayers();
    }


    if(newCollideDetect(elev01Elev00)){
      terminalPage = '00Elev01';
    }else {
      terminalPage = 'initial';
    }
  }




  if( currentRoom == 'elev01' && terminalState == false){

    if(newCollideDetect(elev01DoorPq)){
      currentRoom = 'pq';
      roomDisplace = [-1,-5];
      orientCameraLayers();
    }

    if(newCollideDetect(elev01DoorCc)){
      currentRoom = 'cc';
      roomDisplace = [-5.5,-9];
      orientCameraLayers();
    }


    if(newCollideDetect(elev01Elev00)){
      terminalPage = '01Elev00';
    }else {
      terminalPage = 'initial';
    }
  }
}















function newCollideDetect(a) {
    return objectCanvas.x + a.x < playerCanvas.x  &&
           objectCanvas.x + a.x + a.w + playerCanvas.width > playerCanvas.x &&
           objectCanvas.y + a.y < playerCanvas.y &&
           objectCanvas.y + a.y + a.h > playerCanvas.y;
}

function newTripDetect(a) {
    return (objectCanvas.x + a.x) - tileSize < playerCanvas.x  &&
           (objectCanvas.x + a.x + a.w + playerCanvas.width) + tileSize > playerCanvas.x &&
           (objectCanvas.y + a.y) - tileSize < playerCanvas.y &&
           (objectCanvas.y + a.y + a.h) + tileSize > playerCanvas.y;
}





function orientCameraLayers() {
  mapCanvas.x = playerCanvas.x + (( roomDisplace[0]) * tileSize);
  mapCanvas.y = playerCanvas.y + (( roomDisplace[1]) * tileSize);
  objectCanvas.x = mapCanvas.x;
  objectCanvas.y = mapCanvas.y;
  story1Canvas.x = mapCanvas.x;
  story1Canvas.y = mapCanvas.y;
}



























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Terminal button Fn /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







var terminalPage = 'initial';

// onload events=========================================================

$("body").ready(function(){
  $('title').html('Bunker');
  setBunkerRooms();
});





function setBunkerRooms() {
  terminalLocation();
  $('#playerMoveBtnMenu').css('display','none');

  if (terminalPage == 'initial' && currentRoom !== 'homePage') {
    $('#actionMenu > button:nth-child(-n+6)').css('display', 'none');
    $('#actionMenu :is(button:nth-child(-n+6))').off('click');
    $('#playerMoveBtnMenu').css('display','flex');
    $('#playerMoveBtnMenu button:nth-child(-n+4)').css('display','flex');
  }


  if (terminalPage == 'terminal' && terminalState == false) {
    setInteractBtn('Access Terminal');

    $('#actionMenu > button:nth-child(1)').click(function () {
      accessTerminal('statistics');

    });

  }


  if (terminalPage == 'playerBed' && terminalState == false) {
    setInteractBtn('sleep');

    $('#actionMenu > button:nth-child(1)').click(function () {
      accessTerminal('pq');
    });
  }


  if (terminalPage == 'commandTable' && terminalState == false) {
    setInteractBtn('Speak');

    $('#actionMenu > button:nth-child(1)').click(function () {

      accessTerminal('cc');
    });

  }


  if (terminalPage == 'gate' && terminalState == false) {
    setInteractBtn('Leave Bunker');

    $('#actionMenu > button:nth-child(1)').click(function () {
      accessTerminal('commandCenter');
      //location.assign('okiBattle.html');
      terminalPage = 'commandCenter';

    });

  }





  if (terminalPage == '01Elev00' && terminalState == false) {
    setInteractBtn('Elevator Up');

    $('#actionMenu > button:nth-child(1)').click(function () {
        currentRoom = 'elev00';
    });
  }

  if (terminalPage == '00Elev01' && terminalState == false) {
    setInteractBtn('Elevator Down');

    $('#actionMenu > button:nth-child(1)').click(function () {

      currentRoom = 'elev01';
    });
  }

}


function setWorldInteractKey() {
  if(terminalKeys[9] && terminalState == false){
    accessTerminal('statistics');
  }
}



function setInteractBtn(text) {
  $('#actionMenu :is(button:nth-child(-n+' + 1 + '))').css('display', 'flex');
  $('#actionMenu > button:nth-child(' + 1 +') > p:nth-child(1)').text(text);
  $('#actionMenu > button:nth-child(' + 1 +') > p:nth-child(2)').text('(ENTER)');
  $('#actionMenu > button:nth-child(' + 1 + ')').css('color', palette.greenHex);
  $('#actionMenu > button:nth-child(' + 1 + ') > p:nth-child(-n+2)').css('color', palette.greenHex);
}
