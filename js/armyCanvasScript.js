/////////////////background canvas//////////////////////
var activeMapW = 38;
var activeMapH = 10;
const tileSize = 48;

const battlefieldBg = document.getElementById('battlefieldfBg');
const ctxBf = battlefieldBg.getContext('2d');

$(document).ready(function() {
  setupBattleFieldMenu();
  requestAnimationFrame(animate);
  interactBundle();
  battlefieldGridDivPlacementBundle();
  
 });




 var battlefieldCanvas = {
   width: 1824,
   height: 480
 }
//object map--------
const battlefieldBgLayout = [


  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,13,13,13,13,  13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,37,13,13,13,13,13,     47,42,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,
  28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,37,13,13,13,13,13,  13,47,42,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,
  29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,38,51,13,13,13,13,  13,13,47,39,42,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,14,24,13,  13,13,13,13,13,47,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,14,   24,13,13,13,13,13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,  37,13,13,13,13,13,43,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,
  28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,  37,13,13,13,13,13,43,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,
  29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,  37,13,13,13,13,13,43,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  10,13,13,13,13,13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  10,13,13,13,13,13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,  37,13,13,13,13,13,43,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,
  28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,  37,13,13,13,13,13,43,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,
  29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,  37,13,13,13,13,13,43,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  10,13,13,13,13,13,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,


];


const battlefieldBgParameter = {
  x: 0,
  y: 0,
  tileW: 32,
  tileH: 32,
  mapW: 60,
  mapH: 15,
  frameX: 0,
  frameY: 0
}




const battlefieldTileImage = new Image();
battlefieldTileImage.src = "img/48x48BattlefieldTileMap.png";







///////////////////////////////////////////////////////// TileMaps /////////////////////////////////////////////////////////
var randomTile1 = 0;
function randomizeTile1() {
  for (var i = 0; i < battlefieldBgLayout.length; i++) {

    if(battlefieldBgLayout[i] == 0){
      randomTile1 = Math.floor(Math.random()*9);
      battlefieldBgLayout[i] = randomTile1;
    }
  }
}

function tileCases(layout,parameter){
  randomizeTile1();
  for( var y = 0; y < parameter.mapH; y++){
    for( var x = 0; x < parameter.mapW; x++){
      switch(layout[(y * parameter.mapW) + x ]){

        case 0:
          ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);

          break;

        case 1:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 0, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 2:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 0, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 3:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 1, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 4:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 1, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 5:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 1, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 6:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 2, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 7:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 2, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 8:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 2, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 9:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 3, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 10:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 3, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 11:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 3, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 12:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 4, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 13:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 4, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 14:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 4, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 15:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 5, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 16:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 5, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 17:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 5, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 18:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 6, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 19:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 6, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 20:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 6, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 21:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 7, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 22:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 7, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 23:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 7, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 24:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 8, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 25:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 8, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 26:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 8, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;


        case 27:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 9, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 28:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 9, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 29:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 9, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 30:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 10, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 31:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 10, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 32:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 10, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 33:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 11, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 34:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 11, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 35:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 11, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 36:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 12, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 37:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 12, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 38:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 12, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 39:
       ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 13, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 40:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 13, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 41:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 13, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

       case 42:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 14, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 43:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 14, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 44:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 14, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 45:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 15, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 46:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 15, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 47:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 15, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 48:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 16, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 49:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 16, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 50:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 16, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 51:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 17, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 52:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 17, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 53:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 17, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


        case 54:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 18, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 55:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 18, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 56:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 18, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;


        case 57:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 19, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 58:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 19, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 59:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 19, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;

        case 60:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 20, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 61:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 20, parameter.tileH * 1, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
          break;

        case 62:
        ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 20, parameter.tileH * 2, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
            break;






        default:
        //  ctxBf.drawImage(battlefieldTileImage, parameter.tileW * 0, parameter.tileH * 0, parameter.tileW, parameter.tileH, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
      }


    }

  }

}










function animate(){

  ctxBf.clearRect( 0,0, battlefieldCanvas.width, battlefieldCanvas.height);
  tileCases(battlefieldBgLayout, battlefieldBgParameter);
  //ctxBf.drawImage(battlefieldTileImage, 0, 0, battlefieldCanvas.width, battlefieldCanvas.height, parameter.x + (parameter.tileW * x), parameter.y + (parameter.tileH * y), parameter.tileW, parameter.tileH);
  requestAnimationFrame(animate);
}
animate();




var bfMenuPage = 'initial';

function setupBattleFieldMenu() {
  resetBattlefieldMenu();



  if(bfMenuPage == 'initial'){
    setBfBtn(4,   1,2,3,4,   'Divisions','Provisions','Statisitc','Retreat',   palette.greenHex,palette.yellowHex,palette.pinkHex,palette.pinkHex,    3)
  }
}


function setBfBtn(totalBtn,   btn1,btn2,btn3,btn4,   btn1Txt,btn2Txt,btn3Txt,btn4Txt,   color1,color2,color3,color4,   endTurn){
  $('#battlefieldMenuCntr :is(button:nth-child(-n+' + totalBtn + '))').css('display', 'inline');

  $('#battlefieldMenuCntr > button:nth-child(' + btn1 +')').text(btn1Txt);
  $('#battlefieldMenuCntr > button:nth-child(' + btn1 + ')').css('color', color1);
  $('#battlefieldMenuCntr > button:nth-child(' + btn1 + ')').click(function () {
    bfMenuPage = bfPage;
    setupBattleFieldMenu();
  });

  $('#battlefieldMenuCntr > button:nth-child(' + btn2 +')').text(btn2Txt);
  $('#battlefieldMenuCntr > button:nth-child(' + btn2 + ')').css('color', color2);
  $('#battlefieldMenuCntr > button:nth-child(' + btn2 + ')').click(function () {
    bfMenuPage = bfPage;
    setupBattleFieldMenu();
  });

  $('#battlefieldMenuCntr > button:nth-child(' + btn3 +')').text(btn3Txt);
  $('#battlefieldMenuCntr > button:nth-child(' + btn3 + ')').css('color', color3);
  $('#battlefieldMenuCntr > button:nth-child(' + btn3 + ')').click(function () {
    bfMenuPage = bfPage;
    setupBattleFieldMenu();
  });

  $('#battlefieldMenuCntr > button:nth-child(' + btn4 +')').text(btn4Txt);
  $('#battlefieldMenuCntr > button:nth-child(' + btn4 + ')').css('color', color4);
  $('#battlefieldMenuCntr > button:nth-child(' + btn4 + ')').click(function () {
    bfMenuPage = bfPage;
    setupBattleFieldMenu();
  });

  //$('#battlefieldMenuCntr > button:nth-child(' + endTurn +')').text('End Turn');
//  $('#battlefieldMenuCntr > button:nth-child(' + endTurn + ')').css('color', palette.pinkHex);
//  $('#battlefieldMenuCntr > button:nth-child(' + endTurn + ')').click(function () {
  //  bfMenuPage = bfPage;
  //  setupBattleFieldMenu();
//  });


}


function resetBattlefieldMenu(){
  for (var i = 0; i < 7; i++) {
    $('#actionMenu > button:nth-child(' + i +')').css('color','white');
  }


    $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
    $('#actionMenu :is(button:nth-child(-n+4))').off('click');
}
