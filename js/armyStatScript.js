

$(document).ready(function() {
  loadArmyArrays();
  unitSlotPlace();
  setArmyStats();
  setAllUnitStats();
  setupDivisions();
 });












////////////unit allocation functions///////////////

function setArmyStats() {

  saveArmyArrays();
  if (terminalPage == 'cy') {
    garrison.value = resources.garrison;
  }

  $('#garrisonValue').val(Math.floor(garrison.value));
  $('#lightInfValue').val(Math.floor(lightInf.value));
  $('#heavyInfValue').val(Math.floor(heavyInf.value));
  $('#riflemenValue').val(Math.floor(riflemen.value));
  $('#motCavValue').val(Math.floor(motCav.value));
  $('#armCavValue').val(Math.floor(armCav.value));
  $('#tankValue').val(Math.floor(tank.value))
  setPoolVals(infPool,lightInf,heavyInf);
  setPoolVals(riflePool,riflemen,empty);
  setPoolVals(motCavPool,motCav,empty);
  setPoolVals(armCavPool,armCav,empty);
  setPoolVals(tankPool,tank,empty);
  ifnan();
}


$('#resetArmyBtn').click(function () {
  resetArmy();
});




$('#minusLightInf').click(function () {
  garrison.value++;
  lightInf.value--;
  infPool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusLightInf').click(function () {
  garrison.value--;
  lightInf.value++;
  infPool.value++;
  setArmyStats();
  setAllUnitStats();
});

$('#minusHeavyInf').click(function () {
  garrison.value++;
  heavyInf.value--;
  infPool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusHeavyInf').click(function () {
  garrison.value--;
  heavyInf.value++;
  infPool.value++;
  setArmyStats();
  setAllUnitStats();
});







$('#minusRifle1').click(function () {
  garrison.value++;
  riflemen.value--;
  riflePool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusRifle1').click(function () {
  garrison.value--;
  riflemen.value++;
  riflePool.value++;
  setArmyStats();
  setAllUnitStats();
});


$('#minusMotCav1').click(function () {
  garrison.value++;
  motCav.value--;
  motCavPool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusMotCav1').click(function () {
  garrison.value--;
  motCav.value++;
  motCav.value++;
  setArmyStats();
  setAllUnitStats();
});



$('#minusArmCav1').click(function () {
  garrison.value++;
  armCav.value--;
  armCavPool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusArmCav1').click(function () {
  garrison.value--;
  armCav.value++;
  armCav.value++;
  setArmyStats();
  setAllUnitStats();
});


$('#minusTank1').click(function () {
  garrison.value++;
  tank.value--;
  tankPool.value--;
  setArmyStats();
  setAllUnitStats();
});

$('#plusTank1').click(function () {
  garrison.value--;
  tank.value++;
  tankPool.value++;
  setArmyStats();
  setAllUnitStats();
});




///////////unit pool calculations////////
function setPoolVals(pool,a,b) {
  pool.value = Math.floor(a.value + b.value);

  pool.hp = Math.floor(a.hp * a.value + b.hp * b.value);

  //takes the average of a and b stat
  pool.sp = Math.floor((a.sp * a.value + b.sp * b.value) / (a.value + b.value));
  pool.rp = Math.floor((a.rp * a.value + b.rp * b.value) / (a.value + b.value));

  pool.att = Math.floor((a.att * a.value + b.att * b.value) / (a.value + b.value));
  pool.dex = Math.floor((a.dex * a.value + b.dex * b.value) / (a.value + b.value));
  pool.acc = Math.floor((a.acc * a.value + b.acc * b.value) / (a.value + b.value));

  pool.def = Math.floor((a.def * a.value + b.def * b.value) / (a.value + b.value));
  pool.ddg = Math.floor((a.ddg * a.value + b.ddg * b.value) / (a.value + b.value));
  pool.spd = Math.floor((a.spd * a.value + b.spd * b.value) / (a.value + b.value));
}








function saveArmyArrays(){
    localStorage.garrisonValue = garrison.value;
    localStorage.lightInfValue = lightInf.value;
    localStorage.heavyInfValue = heavyInf.value;
    localStorage.riflemenValue = riflemen.value;
    localStorage.motCavValue = motCav.value;
    localStorage.armCavValue = armCav.value;
    localStorage.tankValue = tank.value;

    localStorage.infPoolMultipes = unitSlotMultiples[0];
    localStorage.riflePoolMultipes = unitSlotMultiples[1];
    localStorage.motCavPoolMultipes = unitSlotMultiples[2];
    localStorage.armCavPoolMultipes = unitSlotMultiples[3];
    localStorage.tankPoolMultipes = unitSlotMultiples[4];
    localStorage.emptyPoolMultipes = unitSlotMultiples[5];

    localStorage.formationLr = formationGrid[0];
    localStorage.formationLc = formationGrid[1];
    localStorage.formationLf = formationGrid[2];
    localStorage.formationCr = formationGrid[3];
    localStorage.formationCc = formationGrid[4];
    localStorage.formationCf = formationGrid[5];
    localStorage.formationFr = formationGrid[6];
    localStorage.formationFc = formationGrid[7];
    localStorage.formationFf = formationGrid[8];
}



function loadArmyArrays(){
    garrison.value = localStorage.garrisonValue;
    lightInf.value = localStorage.lightInfValue;
    heavyInf.value = localStorage.heavyInfValue;
    riflemen.value = localStorage.riflemenValue;
    motCav.value = localStorage.motCavValue;
    armCav.value = localStorage.armCavValue;
    tank.value = localStorage.tankValue;

    unitSlotMultiples[0] = localStorage.infPoolMultipes;
    unitSlotMultiples[1] = localStorage.riflePoolMultipes;
    unitSlotMultiples[2] = localStorage.motCavPoolMultipes;
    unitSlotMultiples[3] = localStorage.armCavPoolMultipes;
    unitSlotMultiples[4] = localStorage.tankPoolMultipes;
    unitSlotMultiples[5] = localStorage.emptyPoolMultipes;
    formationGrid = [
      localStorage.formationLr,
      localStorage.formationLc,
      localStorage.formationLf,
      localStorage.formationCr,
      localStorage.formationCc,
      localStorage.formationCf,
      localStorage.formationFr,
      localStorage.formationFc,
      localStorage.formationFf,
    ];
    $('#garrisonValue').val(localStorage.garrisonValue);
    $('#lightInfValue').val(localStorage.lightInfValue);
    $('#heavyInfValue').val(localStorage.heavyInfValue);
    $('#riflemenValue').val(localStorage.riflemenValue);
    $('#motCavValue').val(localStorage.motCavValue);
    $('#armCavValue').val(localStorage.armCavValue);
    $('#tankValue').val(localStorage.tankValue);
}





function resetArmy(){
  localStorage.garrisonValue = resources.garrison;
  localStorage.lightInfValue = 0;
  localStorage.heavyInfValue = 0;
  localStorage.riflemenValue = 0;
  localStorage.motCavValue = 0;
  localStorage.armCavValue = 0;
  localStorage.tankValue = 0;

  localStorage.InfPool = 0;
  localStorage.riflemenPool = 0;
  localStorage.motCavPool = 0;
  localStorage.armCavPool = 0;
  localStorage.tankPool = 0;

  localStorage.infPoolMultipes = 0;
  localStorage.riflePoolMultipes = 0;
  localStorage.motCavPoolMultipes = 0;
  localStorage.armCavPoolMultipes = 0;
  localStorage.tankPoolMultipes = 0;
  localStorage.emptyPoolMultipes = 0;

  localStorage.formationLr = 'empty';
  localStorage.formationLc = 'empty';
  localStorage.formationLf = 'empty';
  localStorage.formationCr = 'empty';
  localStorage.formationCc = 'empty';
  localStorage.formationCf = 'empty';
  localStorage.formationFr = 'empty';
  localStorage.formationFc = 'empty';
  localStorage.formationFf = 'empty';

  formationGrid = [
    'empty','empty','empty',
    'empty','empty','empty',
    'empty','empty','empty',
  ];

  $('#garrisonValue').val(localStorage.garrisonValue);
  $('#lightInfValue').val(localStorage.lightInfValue);
  $('#heavyInfValue').val(localStorage.heavyInfValue);
  $('#riflemenValue').val(localStorage.riflemenValue);
  $('#motCavValue').val(localStorage.motCavValue);
  $('#armCavValue').val(localStorage.armCavValue);
  $('#tankValue').val(localStorage.tankValue);


  unitSlotPlace();
  //setArmyStats();
  setAllUnitStats();
  //saveArmyArrays();
  //alert(1);
}










///////////////////////////////////////formations//////////////////////////////////////////////
var formationGrid = [
  'empty','empty','empty',
  'empty','empty','empty',
  'empty','empty','empty',
];









var armyFormationArray = [
  0,0,0,
  0,0,0,
  0,0,0
];

$('#formationOverview .armyPosUnitSelect').click(function () {
  $('#formationOverview .armyPosUnitSelect').css('display','none');
});
$('#armyPosLr > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    1,0,0,
    0,0,0,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosLc > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,1,0,
    0,0,0,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosLf > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,1,
    0,0,0,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosCr > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    1,0,0,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosCc > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    0,1,0,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosCf > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    0,0,1,
    0,0,0
  ];
  unitPosBtn();
});
$('#armyPosRr > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    0,0,0,
    1,0,0
  ];
  unitPosBtn();
});
$('#armyPosRc > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    0,0,0,
    0,1,0
  ];
  unitPosBtn();
});
$('#armyPosRf > figure:nth-child(2) > img').click(function () {
  armyFormationArray = [
    0,0,0,
    0,0,0,
    0,0,1
  ];
  unitPosBtn();
});



function unitPosBtn() {
  $('#formationOverview .armyPosUnitSelect').css('display','none');

  if(armyFormationArray[0] == 1){
    $('#armyPosLr > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[1] == 1) {
    $('#armyPosLc > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[2] == 1) {
    $('#armyPosLf > figure:nth-child(1) > div').css('display','block');
  }else if(armyFormationArray[3] == 1){
    $('#armyPosCr > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[4] == 1) {
    $('#armyPosCc > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[5] == 1) {
    $('#armyPosCf > figure:nth-child(1) > div').css('display','block');
  }else if(armyFormationArray[6] == 1){
    $('#armyPosRr > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[7] == 1) {
    $('#armyPosRc > figure:nth-child(1) > div').css('display','block');
  }else if (armyFormationArray[8] == 1) {
    $('#armyPosRf > figure:nth-child(1) > div').css('display','block');
  }
}






/////////////////////////unit selection butons////////////////////////////////
//1. formationGrid[x] = 'unitType';
//-change formationgrid[x] & mig:nth-child(x) & #armyPos
//2.unitSlotPlace();
//-change #armyPos & formationGrid[x]


var armyPos = 'none;'
////left Rear////////////////////////////
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[0] = 'infantry';
  unitSlotPlace();
});
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[0] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[0] = 'motCav';
  unitSlotPlace();
});
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[0] = 'armCav';
  unitSlotPlace();
});
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[0] = 'tank';
  unitSlotPlace();
});
$('#armyPosLr > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[0] = 'empty';
  unitSlotPlace();
});




////left Center////////////////////////////
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[1] = 'infantry';
  unitSlotPlace();
});
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[1] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[1] = 'motCav';
  unitSlotPlace();
});
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[1] = 'armCav';
  unitSlotPlace();
});
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[1] = 'tank';
  unitSlotPlace();
});
$('#armyPosLc > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[1] = 'empty';
  unitSlotPlace();
});


////left Fronline////////////////////////////
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[2] = 'infantry';
  unitSlotPlace();
});
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[2] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[2] = 'motCav';
  unitSlotPlace();
});
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[2] = 'armCav';
  unitSlotPlace();
});
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[2] = 'tank';
  unitSlotPlace();
});
$('#armyPosLf > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[2] = 'empty';
  unitSlotPlace();
});


////Center RearGuard////////////////////////////
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[3] = 'infantry';
  unitSlotPlace();
});
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[3] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[3] = 'motCav';
  unitSlotPlace();
});
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[3] = 'armCav';
  unitSlotPlace();
});
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[3] = 'tank';
  unitSlotPlace();
});
$('#armyPosCr > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[3] = 'empty';
  unitSlotPlace();
});


////CenterCenter////////////////////////////
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[4] = 'infantry';
  unitSlotPlace();
});
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[4] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[4] = 'motCav';
  unitSlotPlace();
});
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[4] = 'armCav';
  unitSlotPlace();
});
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[4] = 'tank';
  unitSlotPlace();
});
$('#armyPosCc > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[4] = 'empty';
  unitSlotPlace();
});


////Center Frontline////////////////////////////
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[5] = 'infantry';
  unitSlotPlace();
});
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[5] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[5] = 'motCav';
  unitSlotPlace();
});
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[5] = 'armCav';
  unitSlotPlace();
});
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[5] = 'tank';
  unitSlotPlace();
});
$('#armyPosCf > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[5] = 'empty';
  unitSlotPlace();
});


////Center Rearguard////////////////////////////
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[6] = 'infantry';
  unitSlotPlace();
});
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[6] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[6] = 'motCav';
  unitSlotPlace();
});
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[6] = 'armCav';
  unitSlotPlace();
});
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[6] = 'tank';
  unitSlotPlace();
});
$('#armyPosRr > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[6] = 'empty';
  unitSlotPlace();
});



////Right Center////////////////////////////
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[7] = 'infantry';
  unitSlotPlace();
});
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[7] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[7] = 'motCav';
  unitSlotPlace();
});
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[7] = 'armCav';
  unitSlotPlace();
});
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[7] = 'tank';
  unitSlotPlace();
});
$('#armyPosRc > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[7] = 'empty';
  unitSlotPlace();
});



////Right Frontline////////////////////////////
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(1)').click( function(){
  formationGrid[8] = 'infantry';
  unitSlotPlace();
});
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(2)').click( function(){
  formationGrid[8] = 'riflemen';
  unitSlotPlace();
});
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(3)').click( function(){
  formationGrid[8] = 'motCav';
  unitSlotPlace();
});
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(4)').click( function(){
  formationGrid[8] = 'armCav';
  unitSlotPlace();
});
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(5)').click( function(){
  formationGrid[8] = 'tank';
  unitSlotPlace();
});
$('#armyPosRf > figure:nth-child(1) > div > img:nth-child(6)').click( function(){
  formationGrid[8] = 'empty';
  unitSlotPlace();
});



function unitSlotPlace() {
    multiplyUnitStats(infPool,0);
    multiplyUnitStats(riflePool,1);
    multiplyUnitStats(motCavPool,2);
    multiplyUnitStats(armCavPool,3);
    multiplyUnitStats(tankPool,4);
    setAllUnitStats();


    if(formationGrid[0] == 'infantry'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }else if(formationGrid[0] == 'riflemen'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }else if(formationGrid[0] == 'motCav'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }else if(formationGrid[0] == 'armCav'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }else if(formationGrid[0] == 'tank'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }else if(formationGrid[0] == 'empty'){
      $('#armyPosLr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[0] + '.png')
      $('#armyPosLr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[0] + '.png')
    }

    if(formationGrid[1] == 'infantry'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }else if(formationGrid[1] == 'riflemen'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }else if(formationGrid[1] == 'motCav'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }else if(formationGrid[1] == 'armCav'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }else if(formationGrid[1] == 'tank'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }else if(formationGrid[1] == 'empty'){
      $('#armyPosLc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[1] + '.png')
      $('#armyPosLc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[1] + '.png')
    }

    if(formationGrid[2] == 'infantry'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }else if(formationGrid[2] == 'riflemen'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }else if(formationGrid[2] == 'motCav'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }else if(formationGrid[2] == 'armCav'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }else if(formationGrid[2] == 'tank'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }else if(formationGrid[2] == 'empty'){
      $('#armyPosLf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[2] + '.png')
      $('#armyPosLf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[2] + '.png')
    }

    if(formationGrid[3] == 'infantry'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }else if(formationGrid[3] == 'riflemen'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }else if(formationGrid[3] == 'motCav'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }else if(formationGrid[3] == 'armCav'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }else if(formationGrid[3] == 'tank'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }else if(formationGrid[3] == 'empty'){
      $('#armyPosCr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[3] + '.png')
      $('#armyPosCr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[3] + '.png')
    }

    if(formationGrid[4] == 'infantry'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }else if(formationGrid[4] == 'riflemen'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }else if(formationGrid[4] == 'motCav'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }else if(formationGrid[4] == 'armCav'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }else if(formationGrid[4] == 'tank'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }else if(formationGrid[4] == 'empty'){
      $('#armyPosCc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[4] + '.png')
      $('#armyPosCc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[4] + '.png')
    }

    if(formationGrid[5] == 'infantry'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }else if(formationGrid[5] == 'riflemen'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }else if(formationGrid[5] == 'motCav'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }else if(formationGrid[5] == 'armCav'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }else if(formationGrid[5] == 'tank'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }else if(formationGrid[5] == 'empty'){
      $('#armyPosCf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[5] + '.png')
      $('#armyPosCf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[5] + '.png')
    }

    if(formationGrid[6] == 'infantry'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }else if(formationGrid[6] == 'riflemen'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }else if(formationGrid[6] == 'motCav'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }else if(formationGrid[6] == 'armCav'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }else if(formationGrid[6] == 'tank'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }else if(formationGrid[6] == 'empty'){
      $('#armyPosRr > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[6] + '.png')
      $('#armyPosRr > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[6] + '.png')
    }

    if(formationGrid[7] == 'infantry'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }else if(formationGrid[7] == 'riflemen'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }else if(formationGrid[7] == 'motCav'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }else if(formationGrid[7] == 'armCav'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }else if(formationGrid[7] == 'tank'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }else if(formationGrid[7] == 'empty'){
      $('#armyPosRc > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[7] + '.png')
      $('#armyPosRc > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[7] + '.png')
    }

    if(formationGrid[8] == 'infantry'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }else if(formationGrid[8] == 'riflemen'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }else if(formationGrid[8] == 'motCav'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }else if(formationGrid[8] == 'armCav'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }else if(formationGrid[8] == 'tank'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }else if(formationGrid[8] == 'empty'){
      $('#armyPosRf > figure:nth-child(2) > img').attr('src','img/icons/armySlots/' + formationGrid[8] + '.png')
      $('#armyPosRf > figure:nth-child(1) > figcaption > img').attr('src','img/icons/units/' + formationGrid[8] + '.png')
    }

  armyFormationArray = [
  0,0,0,
  0,0,0,
  0,0,0
];
  $('#formationOverview .armyPosUnitSelect').css('display','none');
}




function setAllUnitStats() {
  findUnitMyltiples();
  if (formationGrid[0] == 'infantry') {
    setUnitSlotStatsLr(infPool);
  }else if (formationGrid[0] == 'riflemen') {
    setUnitSlotStatsLr(riflePool);
  }else if (formationGrid[0] == 'motCav') {
    setUnitSlotStatsLr(motCavPool);
  }else if (formationGrid[0] == 'armCav') {
    setUnitSlotStatsLr(armCavPool);
  }else if (formationGrid[0] == 'tank') {
    setUnitSlotStatsLr(tankPool);
  }else if (formationGrid[0] == 'empty') {
    setUnitSlotStatsLr(emptyPool);
  }

  if (formationGrid[1] == 'infantry') {
    setUnitSlotStatsLc(infPool);
  }else if (formationGrid[1] == 'riflemen') {
    setUnitSlotStatsLc(riflePool);
  }else if (formationGrid[1] == 'motCav') {
    setUnitSlotStatsLc(motCavPool);
  }else if (formationGrid[1] == 'armCav') {
    setUnitSlotStatsLc(armCavPool);
  }else if (formationGrid[1] == 'tank') {
    setUnitSlotStatsLc(tankPool);
  }else if (formationGrid[1] == 'empty') {
    setUnitSlotStatsLc(emptyPool);
  }

  if (formationGrid[2] == 'infantry') {
    setUnitSlotStatsLf(infPool);
  }else if (formationGrid[2] == 'riflemen') {
    setUnitSlotStatsLf(riflePool);
  }else if (formationGrid[2] == 'motCav') {
    setUnitSlotStatsLf(motCavPool);
  }else if (formationGrid[2] == 'armCav') {
    setUnitSlotStatsLf(armCavPool);
  }else if (formationGrid[2] == 'tank') {
    setUnitSlotStatsLf(tankPool);
  }else if (formationGrid[2] == 'empty') {
    setUnitSlotStatsLf(emptyPool);
  }

  if (formationGrid[3] == 'infantry') {
    setUnitSlotStatsCr(infPool);
  }else if (formationGrid[3] == 'riflemen') {
    setUnitSlotStatsCr(riflePool);
  }else if (formationGrid[3] == 'motCav') {
    setUnitSlotStatsCr(motCavPool);
  }else if (formationGrid[3] == 'armCav') {
    setUnitSlotStatsCr(armCavPool);
  }else if (formationGrid[3] == 'tank') {
    setUnitSlotStatsCr(tankPool);
  }else if (formationGrid[3] == 'empty') {
    setUnitSlotStatsCr(emptyPool);
  }

  if (formationGrid[4] == 'infantry') {
    setUnitSlotStatsCc(infPool);
  }else if (formationGrid[4] == 'riflemen') {
    setUnitSlotStatsCc(riflePool);
  }else if (formationGrid[4] == 'motCav') {
    setUnitSlotStatsCc(motCavPool);
  }else if (formationGrid[4] == 'armCav') {
    setUnitSlotStatsCc(armCavPool);
  }else if (formationGrid[4] == 'tank') {
    setUnitSlotStatsCc(tankPool);
  }else if (formationGrid[4] == 'empty') {
    setUnitSlotStatsCc(emptyPool);
  }

  if (formationGrid[5] == 'infantry') {
    setUnitSlotStatsCf(infPool);
  }else if (formationGrid[5] == 'riflemen') {
    setUnitSlotStatsCf(riflePool);
  }else if (formationGrid[5] == 'motCav') {
    setUnitSlotStatsCf(motCavPool);
  }else if (formationGrid[5] == 'armCav') {
    setUnitSlotStatsCf(armCavPool);
  }else if (formationGrid[5] == 'tank') {
    setUnitSlotStatsCf(tankPool);
  }else if (formationGrid[5] == 'empty') {
    setUnitSlotStatsCf(emptyPool);
  }

  if (formationGrid[6] == 'infantry') {
    setUnitSlotStatsRr(infPool);
  }else if (formationGrid[6] == 'riflemen') {
    setUnitSlotStatsRr(riflePool);
  }else if (formationGrid[6] == 'motCav') {
    setUnitSlotStatsRr(motCavPool);
  }else if (formationGrid[6] == 'armCav') {
    setUnitSlotStatsRr(armCavPool);
  }else if (formationGrid[6] == 'tank') {
    setUnitSlotStatsRr(tankPool);
  }else if (formationGrid[6] == 'empty') {
    setUnitSlotStatsRr(emptyPool);
  }

  if (formationGrid[7] == 'infantry') {
    setUnitSlotStatsRc(infPool);
  }else if (formationGrid[7] == 'riflemen') {
    setUnitSlotStatsRc(riflePool);
  }else if (formationGrid[7] == 'motCav') {
    setUnitSlotStatsRc(motCavPool);
  }else if (formationGrid[7] == 'armCav') {
    setUnitSlotStatsRc(armCavPool);
  }else if (formationGrid[7] == 'tank') {
    setUnitSlotStatsRc(tankPool);
  }else if (formationGrid[7] == 'empty') {
    setUnitSlotStatsRc(emptyPool);
  }

  if (formationGrid[8] == 'infantry') {
    setUnitSlotStatsRf(infPool);
  }else if (formationGrid[8] == 'riflemen') {
    setUnitSlotStatsRf(riflePool);
  }else if (formationGrid[8] == 'motCav') {
    setUnitSlotStatsRf(motCavPool);
  }else if (formationGrid[8] == 'armCav') {
    setUnitSlotStatsRf(armCavPool);
  }else if (formationGrid[8] == 'tank') {
    setUnitSlotStatsRf(tankPool);
  }else if (formationGrid[8] == 'empty') {
    setUnitSlotStatsRf(emptyPool);
  }
}






function setUnitSlotStatsLr(poolType){
  $('#armyPosLr > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosLr > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosLr > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosLr > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosLr > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosLr > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosLr > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosLr > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosLr > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}


function setUnitSlotStatsLc(poolType){
  $('#armyPosLc > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosLc > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosLc > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosLc > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosLc > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosLc > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosLc > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosLc > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosLc > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}


function setUnitSlotStatsLf(poolType){
  $('#armyPosLf > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosLf > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosLf > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosLf > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosLf > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosLf > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosLf > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosLf > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosLf > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}





function setUnitSlotStatsCr(poolType){
  $('#armyPosCr > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosCr > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosCr > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosCr > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosCr > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosCr > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosCr > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosCr > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosCr > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}

function setUnitSlotStatsCc(poolType){
  $('#armyPosCc > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosCc > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosCc > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosCc > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosCc > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosCc > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosCc > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosCc > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosCc > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}

function setUnitSlotStatsCf(poolType){
  $('#armyPosCf > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosCf > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosCf > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosCf > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosCf > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosCf > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))
  $('#armyPosCf > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosCf > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosCf > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}

function setUnitSlotStatsRr(poolType){
  $('#armyPosRr > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosRr > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosRr > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosRr > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosRr > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosRr > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosRr > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosRr > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosRr > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}

function setUnitSlotStatsRc(poolType){
  $('#armyPosRc > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosRc > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosRc > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosRc > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosRc > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosRc > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosRc > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosRc > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosRc > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}

function setUnitSlotStatsRf(poolType){
  $('#armyPosRf > aside > figure:nth-child(1) > span:nth-child(1) > input').val(Math.floor(poolType.hp))
  $('#armyPosRf > aside > figure:nth-child(1) > span:nth-child(2) > input').val(Math.floor(poolType.att))
  $('#armyPosRf > aside > figure:nth-child(1) > span:nth-child(3) > input').val(Math.floor(poolType.def))

  $('#armyPosRf > aside > figure:nth-child(2) > span:nth-child(1) > input').val(Math.floor(poolType.sp))
  $('#armyPosRf > aside > figure:nth-child(2) > span:nth-child(2) > input').val(Math.floor(poolType.dex))
  $('#armyPosRf > aside > figure:nth-child(2) > span:nth-child(3) > input').val(Math.floor(poolType.ddg))

  $('#armyPosRf > aside > figure:nth-child(3) > span:nth-child(1) > input').val(Math.floor(poolType.rp))
  $('#armyPosRf > aside > figure:nth-child(3) > span:nth-child(2) > input').val(Math.floor(poolType.acc))
  $('#armyPosRf > aside > figure:nth-child(3) > span:nth-child(3) > input').val(Math.floor(poolType.spd))
}


var unitSlotMultiples = [0,0,0,0,0,0];
function findUnitMyltiples(){
  unitSlotMultiples = [0,0,0,0,0,0];
  for (var i = 0; i < formationGrid.length; i++) {
    if (formationGrid[i] == 'infantry'){
      unitSlotMultiples[0]++;
    }else if (formationGrid[i] == 'riflemen'){
      unitSlotMultiples[1]++;
    }else if (formationGrid[i] == 'motCav'){
      unitSlotMultiples[2]++;
    }else if (formationGrid[i] == 'armCav'){
      unitSlotMultiples[3]++;
    }else if (formationGrid[i] == 'tank'){
      unitSlotMultiples[4]++;
    }else if (formationGrid[i] == 'empty'){
      unitSlotMultiples[5]++;
    }
  }
  divideUnitStats(infPool,0);
  divideUnitStats(riflePool,1);
  divideUnitStats(motCavPool,2);
  divideUnitStats(armCavPool,3);
  divideUnitStats(tankPool,4);
}


function divideUnitStats(a,i) {
  if(unitSlotMultiples[i] > 1){
    a.hp = Math.floor(a.hp / unitSlotMultiples[i]);
  }
}



function multiplyUnitStats(a,i) {
  if(unitSlotMultiples[i] > 1){
  a.hp = Math.floor(a.hp * unitSlotMultiples[i]);
}
}





function ifnan() {
  if (isNaN(infPool.hp)) infPool.hp = 0;
  if (isNaN(infPool.sp)) infPool.sp = 0;
  if (isNaN(infPool.rp)) infPool.rp = 0;

  if (isNaN(infPool.att)) infPool.att = 0;
  if (isNaN(infPool.dex)) infPool.dex = 0;
  if (isNaN(infPool.acc)) infPool.acc = 0;

  if (isNaN(infPool.def)) infPool.def = 0;
  if (isNaN(infPool.ddg)) infPool.ddg = 0;
  if (isNaN(infPool.spd)) infPool.spd = 0;


  if (isNaN(riflePool.hp)) riflePool.hp = 0;
  if (isNaN(riflePool.sp)) riflePool.sp = 0;
  if (isNaN(riflePool.rp)) riflePool.rp = 0;

  if (isNaN(riflePool.att)) riflePool.att = 0;
  if (isNaN(riflePool.dex)) riflePool.dex = 0;
  if (isNaN(riflePool.acc)) riflePool.acc = 0;

  if (isNaN(riflePool.def)) riflePool.def = 0;
  if (isNaN(riflePool.ddg)) riflePool.ddg = 0;
  if (isNaN(riflePool.spd)) riflePool.spd = 0;


  if (isNaN(motCavPool.hp)) motCavPool.hp = 0;
  if (isNaN(motCavPool.sp)) motCavPool.sp = 0;
  if (isNaN(motCavPool.rp)) motCavPool.rp = 0;

  if (isNaN(motCavPool.att)) motCavPool.att = 0;
  if (isNaN(motCavPool.dex)) motCavPool.dex = 0;
  if (isNaN(motCavPool.acc)) motCavPool.acc = 0;

  if (isNaN(motCavPool.def)) motCavPool.def = 0;
  if (isNaN(motCavPool.ddg)) motCavPool.ddg = 0;
  if (isNaN(motCavPool.spd)) motCavPool.spd = 0;



  if (isNaN(armCavPool.hp)) armCavPool.hp = 0;
  if (isNaN(armCavPool.sp)) armCavPool.sp = 0;
  if (isNaN(armCavPool.rp)) armCavPool.rp = 0;

  if (isNaN(armCavPool.att)) armCavPool.att = 0;
  if (isNaN(armCavPool.dex)) armCavPool.dex = 0;
  if (isNaN(armCavPool.acc)) armCavPool.acc = 0;

  if (isNaN(armCavPool.def)) armCavPool.def = 0;
  if (isNaN(armCavPool.ddg)) armCavPool.ddg = 0;
  if (isNaN(armCavPool.spd)) armCavPool.spd = 0;


  if (isNaN(tankPool.hp)) tankPool.hp = 0;
  if (isNaN(tankPool.sp)) tankPool.sp = 0;
  if (isNaN(tankPool.rp)) tankPool.rp = 0;

  if (isNaN(tankPool.att)) tankPool.att = 0;
  if (isNaN(tankPool.dex)) tankPool.dex = 0;
  if (isNaN(tankPool.acc)) tankPool.acc = 0;

  if (isNaN(tankPool.def)) tankPool.def = 0;
  if (isNaN(tankPool.ddg)) tankPool.ddg = 0;
  if (isNaN(tankPool.spd)) tankPool.spd = 0;
}

















////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////flank info drop menu/////////////////////////
////////////////////////////////////////////////////////////////////////////////



var flankVar = 'none';

      $("#armyLeftFlank > button").click(function(){
        if (flankVar == 'left'){
          flankVar = 'none';
        }else{
          flankVar = 'left';
        }
        openFlankMenu();
        });
        $("#armyCenterFlank > button").click(function(){
          if (flankVar == 'Center'){
            flankVar = 'none';
          }else{
            flankVar = 'Center';
          }
          openFlankMenu();
          });
          $("#armyRightFlank > button").click(function(){
            if (flankVar == 'Right'){
              flankVar = 'none';
            }else{
              flankVar = 'Right';
            }
            openFlankMenu();
            });


function openFlankMenu() {
resetFlankSelection();

  if (flankVar == 'left') {
    $("#armyLeftFlank > button").css('color', 'black');
    $("#armyLeftFlank > button").css('background', 'white');
    $("#armyLeftFlank > button").css('border-color', 'white');

    //$("#armyLeftFlank").css('border-color', 'white');
    $("#armyLeftFlank").css('z-index', 10);
    $("#armyLeftFlank").css('height', '230px');
    $("#armyLeftFlank").css('position', 'relative');
    $("#armyLeftFlank").css('margin-bottom', '-60px');
  }if (flankVar == 'Center') {
    $("#armyCenterFlank > button").css('color', 'black');
    $("#armyCenterFlank > button").css('background', 'white');
    $("#armyCenterFlank > button").css('border-color', 'white');


    $("#armyCenterFlank").css('z-index', 10);
    $("#armyCenterFlank").css('height', '230px');
    $("#armyCenterFlank").css('position', 'relative');
    $("#armyCenterFlank").css('margin-bottom', '-60px');
  }if (flankVar == 'Right') {
    $("#armyRightFlank > button").css('color', 'black');
    $("#armyRightFlank > button").css('background', 'white');
    $("#armyRightFlank > button").css('border-color', 'white');


    $("#armyRightFlank").css('z-index', 10);
    $("#armyRightFlank").css('height', '230px');
    $("#armyRightFlank").css('position', 'relative');
    $("#armyRightFlank").css('margin-bottom', '-60px');
  }
  if (flankVar == 'none') {
    resetFlankSelection();
  }
}




function resetFlankSelection() {

  $("#armyLeftFlank > button").css('color', 'white');
  $("#armyLeftFlank > button").css('background', 'black');
  $("#armyLeftFlank > button").css('border-color', 'white');

  $("#armyCenterFlank > button").css('color', 'white');
  $("#armyCenterFlank > button").css('background', 'black');
  $("#armyCenterFlank > button").css('border-color', 'white');

  $("#armyRightFlank > button").css('color', 'white');
  $("#armyRightFlank > button").css('background', 'black');
  $("#armyRightFlank > button").css('border-color', 'white');


  $("#armyLeftFlank").css('z-index', 0);
  $("#armyLeftFlank").css('height', '170px');
  $("#armyLeftFlank").css('position', 'block');
  $("#armyLeftFlank").css('margin-bottom', '0px');


  $("#armyCenterFlank").css('z-index', 0);
  $("#armyCenterFlank").css('height', '170px');
  $("#armyCenterFlank").css('position', 'block');
  $("#armyCenterFlank").css('margin-bottom', '0px');


  $("#armyRightFlank").css('z-index', 0);
  $("#armyRightFlank").css('height', '170px');
  $("#armyRightFlank").css('position', 'block');
  $("#armyRightFlank").css('margin-bottom', '0px');
}
























////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////battlefield placement/////////////////////////
////////////////////////////////////////////////////////////////////////////////


var division00 = {
  posX: 1,
  posY: 1,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[0],

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

var division01 = {
  posX: 2,
  posY: 1,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[1],

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

var division02 = {
  posX: 3,
  posY: 1,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[2],

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

var division03 = {
  posX: 1,
  posY: 2,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[3],

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

var division04 = {
  posX: 2,
  posY: 2,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[4],

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

var division05 = {
  posX: 3,
  posY: 2,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[5],

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

var division06 = {
  posX: 1,
  posY: 3,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[6],

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

var division07 = {
  posX: 2,
  posY: 3,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[7],

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

var division08 = {
  posX: 3,
  posY: 3,
  bfGrid: 0,

  active: false,
  interact: false,
  unit: formationGrid[8],


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


var battlefieldGrid = [
  'none','none','none',   'none','none','none',   'none','none','none',   'none','none','none',
  'none','none','none',   'none','none','none',   'none','none','none',   'none','none','none',
  'none','none','none',   'none','none','none',   'none','none','none',   'none','none','none',
];



function divisionSetup() {
  divideDivisionStats(infPool,0);
  divideDivisionStats(riflePool,1);
  divideDivisionStats(motCavPool,2);
  divideDivisionStats(armCavPool,3);
  divideDivisionStats(tankPool,4);
}

function divideDivisionStats(a,i) {
  if(unitSlotMultiples[i] > 1){
    a.hp = Math.floor(a.hp / unitSlotMultiples[i]);
  }
}

function setupBattleField() {
  battlefieldGrid[0] = 'division00';
  battlefieldGrid[1] = 'division01';
  battlefieldGrid[2] = 'division02';

  battlefieldGrid[12] = 'division03';
  battlefieldGrid[13] = 'division04';
  battlefieldGrid[14] = 'division05';

  battlefieldGrid[24] = 'division06';
  battlefieldGrid[25] = 'division07';
  battlefieldGrid[26] = 'division08';


  division00.unit = formationGrid[0];
  division01.unit = formationGrid[1];
  division02.unit = formationGrid[2];

  division03.unit = formationGrid[3];
  division04.unit = formationGrid[4];
  division05.unit = formationGrid[5];

  division06.unit = formationGrid[6];
  division07.unit = formationGrid[7];
  division08.unit = formationGrid[8];



}

function setDivisonStats(pool,div) {
  if (div.unit == 'empty'){
    div.unit = 'none';
    div.active = false;
    hideBfGridStatMenus();
  }else {
    div.active = true;
  }

  div.hp = pool.hp;
  div.sp = pool.sp;
  div.rp = pool.rp;

  div.att = pool.att;
  div.dex = pool.dex;
  div.acc = pool.acc;

  div.def = pool.def;
  div.ddg = pool.ddg;
  div.spd = pool.spd;
  $('#battleGrid > span:nth-child(' + div.posY + ') > figure:nth-child(' + div.posX + ') > img').attr( 'src', 'img/icons/armySlots/' + div.unit + '.png');

  if (div.active == false) {
      $('#battleGrid > span:nth-child(' + div.posY + ') > figure:nth-child(' + div.posX + ') > figcaption > table').css('display','none');
  }

}



function setDivisonXY() {

}



function hideBfGridStatMenus() {
  for (var i = 0; i < 12; i++) {
    if (battlefieldGrid[i] == 'none') {
      $('#battleGrid > span:nth-child(' + 1 + ') > figure:nth-child(' + (i + 1) + ') > figcaption > table').css('display','none');
    }else {
    //  $('#battleGrid > span:nth-child(' + 1 + ') > figure:nth-child(' + (i + 1) + ') > img').css('-webkit-box-shadow','inset 0px 0px 0px 2px rgba(255,255,255,0.5)');
    //  $('#battleGrid > span:nth-child(' + 1 + ') > figure:nth-child(' + (i + 1) + ') > img').css('-moz-box-shadow','inset 0px 0px 0px 2px rpga(250,250,250,0.5)');
      //$('#battleGrid > span:nth-child(' + 1 + ') > figure:nth-child(' + (i + 1) + ') > img').css('box-shadow','inset 0px 0px 0px 2px rpga(250,250,250,0.5)');
    }
  }

  for (var i = 12; i < 24; i++) {
    if (battlefieldGrid[i] == 'none') {
      $('#battleGrid > span:nth-child(' + 2 + ') > figure:nth-child(' + (i -11) + ') > figcaption > table').css('display','none');
    }
  }

  for (var i = 24; i < 36; i++) {
    if (battlefieldGrid[i] == 'none') {
      $('#battleGrid > span:nth-child(' + 3 + ') > figure:nth-child(' + (i - 23) + ') > figcaption > table').css('display','none');
    }
  }


}







function setupDivisions() {
setupBattleField();


hideBfGridStatMenus();


  if (battlefieldGrid[0] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[0] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[0] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[0] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[0] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[0] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[0] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[0] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[0] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }

  if (battlefieldGrid[1] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[1] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[1] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[1] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[1] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[1] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[1] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[1] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[1] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }

  if (battlefieldGrid[2] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[2] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[2] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[2] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[2] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[2] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[2] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[2] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[2] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }










  if (battlefieldGrid[12] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[12] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[12] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[12] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[12] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[12] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[12] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[12] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[12] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }


  if (battlefieldGrid[13] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[13] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[13] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[13] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[13] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[13] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[13] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[13] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[13] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }


  if (battlefieldGrid[14] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[14] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[14] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[14] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[14] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[14] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[14] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[14] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[14] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }






  if (battlefieldGrid[24] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[24] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[24] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[24] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[24] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[24] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[24] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[24] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[24] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }


  if (battlefieldGrid[25] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[25] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[25] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[25] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[25] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[25] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[25] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[25] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[25] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }


  if (battlefieldGrid[26] == 'division00') {
    setDivisonStats(infPool,division00);
  }else if (battlefieldGrid[26] == 'division01') {
    setDivisonStats(riflePool,division01);
  }else if (battlefieldGrid[26] == 'division02') {
    setDivisonStats(motCavPool,division02);
  }else if (battlefieldGrid[26] == 'division03') {
    setDivisonStats(armCavPool,division03);
  }else if (battlefieldGrid[26] == 'division04') {
    setDivisonStats(tankPool,division04);
  }else if (battlefieldGrid[26] == 'division05') {
    setDivisonStats(emptyPool,division05);
  }else if (battlefieldGrid[26] == 'division06') {
    setDivisonStats(armCavPool,division06);
  }else if (battlefieldGrid[26] == 'division07') {
    setDivisonStats(tankPool,division07);
  }else if (battlefieldGrid[26] == 'division08') {
    setDivisonStats(emptyPool,division08);
  }

}























///////////////////////////////////tile interaction/////////////////////////////////
function interactBundle(){
  interact(division00);
  interact(division01);
  interact(division02);
  interact(division03);
  interact(division04);
  interact(division05);
  interact(division06);
  interact(division07);
  interact(division08);
}
function interact(div) {

  //$('#battleGrid > span > figure').off('click');

  $('#battleGrid > span:nth-child(' + div.posY + ') > figure:nth-child(' + div.posX + ')').click(function () {
    $('#battleGrid > span > figure').css('-webkit-box-shadow','none');
    $('#battleGrid > span > figure').css('-moz-box-shadow','none');
    $('#battleGrid > span > figure').css('box-shadow','none');
    $('#battleGrid > span > figure').css('background', 'none');
    if (div.unit == 'infantry' && div.interact == false) {
      div.interact = true;
      indicateMoveSlots(div, 0, 0, palette.pinkHex, palette.pinkRgb, '0.5');
      indicateMoveSlots(div, 0, 1, palette.pinkHex, palette.pinkRgb, '0.5');
      indicateMoveSlots(div, 1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
      indicateMoveSlots(div, 0, -1, palette.pinkHex, palette.pinkRgb, '0.5');
      indicateMoveSlots(div, -1, 0, palette.pinkHex, palette.pinkRgb, '0.5');

  }else if (div.unit == 'riflemen' && div.interact == false){
    div.interact = true;
    indicateMoveSlots(div, 0, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, 1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, 2, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 2, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, -1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, -1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, -2, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, -2, 0, palette.pinkHex, palette.pinkRgb, '0.5');
  }else if (div.unit == 'motCav' || div.unit == 'armCav' && div.interact == false){
    indicateMoveSlots(div, 0, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, 1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, 2, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 2, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, -1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, -1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, -2, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, -2, 0, palette.pinkHex, palette.pinkRgb, '0.5');
  }else if (div.unit == 'tank' && div.interact == false){
    indicateMoveSlots(div, 0, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, 1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, 0, -1, palette.pinkHex, palette.pinkRgb, '0.5');
    indicateMoveSlots(div, -1, 0, palette.pinkHex, palette.pinkRgb, '0.5');
  }else if (div.interact == true) {
      div.interact = false;
      $('#battleGrid > span > figure').css('-webkit-box-shadow','none');
      $('#battleGrid > span > figure').css('-moz-box-shadow','none');
      $('#battleGrid > span > figure').css('box-shadow','none');
      $('#battleGrid > span > figure').css('background', 'none');
    }
  });
}

function indicateMoveSlots(div, m, n, hex, rgb, a) {
  $('#battleGrid > span:nth-child(' + (div.posY + m) + ') > figure:nth-child(' + (div.posX + n) + ')').css('-webkit-box-shadow','0px 0px 0px 2px '+ hex);
  $('#battleGrid > span:nth-child(' + (div.posY + m) + ') > figure:nth-child(' + (div.posX + n) + ')').css('-moz-box-shadow','0px 0px 0px 2px '+ hex);
  $('#battleGrid > span:nth-child(' + (div.posY + m) + ') > figure:nth-child(' + (div.posX + n) + ')').css('box-shadow','0px 0px 0px 2px '+ hex);
  $('#battleGrid > span:nth-child(' + (div.posY + m) + ') > figure:nth-child(' + (div.posX + n) + ')').css('background-color','rgba(' + rgb + a);
}



function battlefieldGridDivPlacement(div) {
  let x = div.posX - 1;
  let y = 0;
  if(div.posY == 1){
    y = 0;
  }else if (div.posY == 2) {
    y = 12;
  }else if (div.posY == 3) {
    y = 24;
  }
  div.bfGrid = x + y;
}


function battlefieldGridDivPlacementBundle() {
  battlefieldGridDivPlacement(division00);
  battlefieldGridDivPlacement(division01);
  battlefieldGridDivPlacement(division02);
  battlefieldGridDivPlacement(division03);
  battlefieldGridDivPlacement(division04);
  battlefieldGridDivPlacement(division05);
  battlefieldGridDivPlacement(division06);
  battlefieldGridDivPlacement(division07);
  battlefieldGridDivPlacement(division08);
}
