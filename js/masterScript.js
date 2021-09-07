//colors===========================================================
const palette =
{
  pinkHex: '#ee2d7b',
  pinkRgb : '238,45,123,',

  greenHex: '#53d39b',

  yellowHex: '#fbb041',

  purpleHex: '#A459FF'
}



var gameData = {
  faction: 'name',
  headQuarters: 'bunkerName',
  factionleader: 'name'
}


var resources = {

  //funcional
  water: 100,
  food: 100,

  population: 10000,
  manPower: 0,

  garrison: 0,
  research: 0,
}




var empireFactionGameData = ['empire', 'bunker-001', 'Jorchlom Nalvdztol',   100,100,10000,0,0,0];







////////////////////////////////////////////////////////////////////////////Player Stats/////////////////////////////////////////////////////
////////////////////////////////PLAYER STATS ARRAYS//////////////////////////////////////////////
var playerStats = [0, 'playerName', 'playerKeyCode',      0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0,     0, 0, 0, 0,   1234];
var playerActiveStats = [0,0,0,    0,0,0,    0,0,0];
var moves = ['move0','move1','move2','move3'];


////////////////////////////////CLASS STAT ARRAYS//////////////////////////////////////////////






var playerStats = {
  name: '',
  keyCode: 'code',

  level: 0,
  class: 'class',
  img: 'none',
  experience: 0,
  spores: 0,


  health: 0,
  stamina: 0,
  rot: 0,

  strength: 0,
  dexterity: 0,
  perception: 0,

  vigor: 0,
  agility: 0,
  speed: 0,

  move0: 'none',
  move1: 'none',
  move2: 'none',
  move3: 'none',

  hp: 0,
  sp: 0,
  rp: 0,
  att: 0,
  dex: 0,
  acc: 0,
  def: 0,
  ddg: 0,
  spd: 0,
}



var fechterClassArray = [7,9,2,  0,4,2,0,3,0,   1001, 'Sword Song'];
var turmClassArray = [9,9,0,  3,0,4,2,0,0,   1002, 'T.U.R.M.'];
var zweilichtClassArray = [5,9,4,  0,0,0,4,2,3,   1001, 'Piercing Eyes'];



var fechterClassStats = {
  class: 'Fechter',

  img: 'fechterClass',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  move0: 'Thirsty Blade',
}

var turmClassStats = {
  class: 'Turm',

  img: 'turmClass',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  move0: 'T.U.R.M.',
}

var zweilichtClassStats = {
  class: 'Zweilicht',

  img: 'zweilichtClass',

  health: 7,
  stamina: 9,
  rot: 2,

  strength: 3,
  dexterity: 1,
  perception: 2,

  vigor: 0,
  agility: 3,
  speed: 0,

  move0: 'Nachtigale',
}

function setGameData(a,b){
  a.faction = b[0];
  a.bunkerName = b[1];
  a.factionleader = b[2];
}










function setClassStats(c) {
  playerStats.class = c.class;
  playerStats.img = c.img;

  playerStats.health = c.health;
  playerStats.stamina = c.stamina;
  playerStats.rot = c.rot;

  playerStats.strength = c.strength;
  playerStats.dexterity = c.dexterity;
  playerStats.perception = c.perception;

  playerStats.vigor = c.vigor;
  playerStats.agility = c.agility;
  playerStats.speed = c.speed;

  playerStats.move0 = c.move0;
}




function playerStatDefine() {
  playerStats.hp = (playerStats.health * 3.2);//health
  playerStats.sp = (playerStats.stamina * 3.2);//stamina
  playerStats.rp = (playerStats.rot * 1);//rot

  playerStats.att = (((playerStats.strength * 1.5) + (playerStats.dexterity * 1.2)) + (playerStats.rp / 100));//attack
  playerStats.dex = ((playerStats.vigor * 0.5) + (playerStats.speed * 0.3) + (playerStats.rp / 100));//critical %
  playerStats.acc = ((playerStats.dexterity * 1.2) + (playerStats.vigor * 2) + (playerStats.speed * 0.3) - (playerStats.rp / 100));//accuracy

  playerStats.def = (playerStats.perception * 1.3) - (playerStats.rp / 100);//defence
  playerStats.ddg = ((playerStats.agility * 1.5) + (playerStats.speed * 0.3));//dodge
  playerStats.spd = ((playerStats.agility * 1.2) + (playerStats.rp / 100));//speed
}





////////////////////////////////SAVE / LOAD / CLEAR//////////////////////////////////////////////
function saveVar(){
  localStorage.playerName  = playerStats.name;
  localStorage.playerKeyCode = playerStats.keyCode;
  localStorage.playerImg = playerStats.img;


  localStorage.playerLevelValue = playerStats.level;
  localStorage.playerClass = playerStats.class;
  localStorage.playerExp = playerStats.experience;
  localStorage.playerSpores = playerStats.spores;

  localStorage.healthStatValue = playerStats.health;
  localStorage.staminaStatValue = playerStats.stamina;
  localStorage.rotStatValue = playerStats.rot;

  localStorage.strengthStatValue = playerStats.strength;
  localStorage.dexterityStatValue = playerStats.dexterity;
  localStorage.perceptionStatValue = playerStats.perception;

  localStorage.vigorStatValue = playerStats.vigor;
  localStorage.agilityStatValue = playerStats.agility;
  localStorage.luckStatValue = playerStats.speed;

  localStorage.move0 = playerStats.move0;
  localStorage.move1 = playerStats.move1;
  localStorage.move2 = playerStats.move2;
  localStorage.move3 = playerStats.move3;

  localStorage.playerEquippedWpn = playerStats[16];
}

function clearVar(){

  localStorage.playerName  = 'name';
  localStorage.playerKeyCode = 'code';
  localStorage.playerImg ='none';


  localStorage.playerLevelValue = 0;
  localStorage.playerClass = 'class';
  localStorage.playerExp = 0;
  localStorage.playerSpores = 0;

  localStorage.healthStatValue = 0;
  localStorage.staminaStatValue = 0;
  localStorage.rotStatValue = 0;

  localStorage.strengthStatValue = 0;
  localStorage.dexterityStatValue = 0;
  localStorage.perceptionStatValue = 0;

  localStorage.vigorStatValue = 0;
  localStorage.agilityStatValue = 0;
  localStorage.luckStatValue = 0;

  localStorage.move0 = 'none';
  localStorage.move1 = 'none';
  localStorage.move2 = 'none';
  localStorage.move3 = 'none';

  localStorage.playerEquippedWpn = 1234;

}


function loadVar() {


  playerStats.name = localStorage.playerName;
  playerStats.keyCode = localStorage.playerKeyCode;
  playerStats.img = localStorage.playerImg;

  playerStats.level = localStorage.playerLevelValue;
  playerStats.class = localStorage.playerClass;
  playerStats.experience = localStorage.playerExp;
  playerStats.spores = localStorage.playerSpores;

  playerStats.health = localStorage.healthStatValue;
  playerStats.stamina = localStorage.staminaStatValue;
  playerStats.rot = localStorage.rotStatValue;

  playerStats.strength = localStorage.strengthStatValue;
  playerStats.dexterity = localStorage.dexterityStatValue;
  playerStats.perception = localStorage.perceptionStatValue;

  playerStats.vigor = localStorage.vigorStatValue;
  playerStats.agility = localStorage.agilityStatValue;
  playerStats.speed = localStorage.luckStatValue;

  playerStats.move0 = localStorage.move0;
  playerStats.move1 = localStorage.move1;
  playerStats.move2 = localStorage.move2;
  playerStats.move3 = localStorage.move3;


  //for(i = 0; i < playerActiveStats.length; i++){
  //  if(playerActiveStats[i] <= 0){playerActiveStats[i] = 0;}
//  }

  playerStatDefine();
//  setEquippedWpnStats();
}


function sporePointAllocation() {
  playerStats.spores--;
  $("#sporeStatValue").val(playerStats.spores);
}

function toggleStatAllocationBtn() {
  if(playerStats.spores == 0){
    $('#statDisplay > tbody > tr > td > button').css('display','none');
  }else {
      $('#statDisplay > tbody > tr > td > button').css('display','block');
  }}









  function setPlayerStats() {
    playerStatDefine();

    $('#playerLevelValue').val( playerStats.level);
    $('#playerNameDisplay').val( playerStats.name);
    $('#classNameDisplay').text( playerStats.class);
    $('#playerCharImg').attr('src','img/classes/' + playerStats.img + '.png');
    $('#playerMetaData > tbody > tr > td:nth-child(3)').val(playerStats.spores);

    $('#healthStatValue').val( playerStats.health);
    $('#staminaStatValue').val( playerStats.stamina);
    $('#rotStatValue').val( playerStats.rot);

    $('#strengthStatValue').val( playerStats.strength);
    $('#dexterityStatValue').val( playerStats.dexterity);
    $('#perceptionStatValue').val( playerStats.perception);

    $('#vigorStatValue').val( playerStats.vigor);
    $('#agilityStatValue').val( playerStats.agility);
    $('#luckStatValue').val( playerStats.speed);

    $('#sporeStatValue').val( player.spores);




    $("#hpStatValue").val(parseInt(playerStats.hp));
    $("#spStatValue").val(parseInt(playerStats.sp));
    $("#rpStatValue").val(parseInt(playerStats.rp));

    $("#attStatValue").val(parseInt(playerStats.att));
    $("#crtStatValue").val(parseInt(playerStats.dex));
    $("#accStatValue").val(parseInt(playerStats.acc));

    $("#defStatValue").val(parseInt(playerStats.def));
    $("#ddgStatValue").val(parseInt(playerStats.ddg));
    $("#spdStatValue").val(parseInt(playerStats.spd));
    setmoves();
  }

  function setmoves(){
    $('#move0').text(playerStats.move0);
    $('#move1').text(playerStats.move1);
    $('#move2').text(playerStats.move2);
    $('#move3').text(playerStats.move3);
  }


  ////////////////////////////////STAT SHEET POINT ALLOCATION BUTTONS//////////////////////////////////////////////
  function plusHealth() {
    playerStats.level++;
    playerStats.health++;
    $("#healthStatValue").val(playerStats.health);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusStamina() {
    playerStats.level++;
    playerStats.stamina++;
    $("#staminaStatValue").val(playerStats.stamina);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusRot() {
    playerStats.level++;
    playerStats.rot++;
    $("#rotStatValue").val(playerStats.rot);
    sporePointAllocation();
    playerStatDefine();
  }



  function plusStrength() {
    playerStats.level++;
    playerStats.strength++;
    $("#strengthStatValue").val(playerStats.strength);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusDexterity() {
    playerStats.level++;
    playerStats.dexterity++;
    $("#dexterityStatValue").val(playerStats.dexterity);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusPerception() {
    playerStats.level++;
    playerStats.perception++;
    $("#perceptionStatValue").val(playerStats.perception);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusVigor() {
    playerStats.level++;
    playerStats.vigor++;
    $("#perceptionStatValue").val(playerStats.vigor);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusAgility() {
    playerStats.level++;
    playerStats.agility++;
    $("#agilityStatValue").val(playerStats.agility);
    sporePointAllocation();
    playerStatDefine();
  }
  function plusLuck() {
    playerStats.level++;
    playerStats.speed++;
    $("#luckStatValue").val(playerStats.speed);
    sporePointAllocation();
    playerStatDefine();
  }





































////////////////////////////////////////////////////////////////////////////ARMY/////////////////////////////////////////////////////

var garrison = {
  value: 0
}


////////////Unit pool types//////////////////
var infPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var riflePool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var motCavPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var armCavPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var tankPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var emptyPool = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 0,
  ddg: 0,
  spd: 0
}

var infPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var riflePoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var motCavPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var armCavPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var tankPoolArray = [0,0,0,0,0,0,0,0,0,0,0];
var emptyPoolArray = [0,0,0,0,0,0,0,0,0,0,0];

////////////Unit types//////////////////

var lightInf = {
  value: 0,

  hp: 3,
  sp: 10,
  rp: 3,

  att: 40,
  dex: 2,
  acc: 40,

  def: 30,
  ddg: 14,
  spd: 3
}

var heavyInf = {
  value: 0,

  hp: 5,
  sp: 5,
  rp: 3,

  att: 70,
  dex: 0,
  acc: 20,

  def: 60,
  ddg: 10,
  spd: 3
}

var riflemen = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var motCav = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var armCav = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var tank = {
  value: 0,

  hp: 1.3,
  sp: 10,
  rp: 3,

  att: 1,
  dex: 1,
  acc: 1,

  def: 5,
  ddg: 0.1,
  spd: 3
}

var empty = {
  value: 0,

  hp: 0,
  sp: 0,
  rp: 0,

  att: 0,
  dex: 0,
  acc: 0,

  def: 05,
  ddg: 0,
  spd: 0
}














$(document).ready(function() {
  setResourceStats();
  setGameData(gameData,empireFactionGameData);
  setStage();
 });






























function onloadExtrArmyStatParameters(){
  garrison.value = resources.garrison;
  $('#garrisonValue').val(Math.floor(garrison.value));
}


function setResourceStats() {
  resources.manPower = resources.population / 10;
  resources.garrison = resources.manPower / 10;
  resources.research = Math.floor(resources.manPower / 20);
}


function setStage(){
  var currentRoom = 'empty';
  currentRoom = 'homePage';
  //terminalPage


  if(currentRoom == 'homePage'){
    accessTerminal('home');
    loadVar();
  }
}



function characterCreation() {
  displayInitialStatDesc();
  toggleStatAllocationBtn();
  chooseClassBtns();
  setPlayerStats();
}

function characterLoad() {
  displayInitialStatDesc();
  loadVar();
  setPlayerStats();
  toggleStatAllocationBtn();
}




//class gallery=============================================================================
var classValue = 0;
function chooseClassBtns() {
  setClassStats(fechterClassStats);
  setPlayerStats();


    $('#nextClass').click(function () {
      classValue++;
      if (classValue == 3){
        classValue = 0;
      }
      findClass();
    });

    $('#prevClass').click(function () {
      classValue--;
      if (classValue == -3){
        classValue = 0;
      }
      findClass();
    });
}


function findClass(){
  if(classValue == 0){
    setClassStats(fechterClassStats);
    setPlayerStats();
  }
  if(classValue == 1){
    setClassStats(turmClassStats);
    setPlayerStats();
  }
  if(classValue == 2){
    setClassStats(zweilichtClassStats);
    setPlayerStats();
  }
  if(classValue == -1){
    setClassStats(zweilichtClassStats);
    setPlayerStats();
  }
  if(classValue == -2){
    setClassStats(turmClassStats);
    setPlayerStats();
  }
  saveVar();
}


function setPlayerName(){
  var playerName = document.querySelector("#playerNameInput").value;
  playerStats.name = playerName;

}
