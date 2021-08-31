var turnCounter = 0;
var selectedMoveVariable = 'none';
var selectedMoveSlot = 'none';

var moveTracker = 'none';
var menuTracker = 'none';

var selectedSlot = 0;







////////////////////////////////ENEMY BLANK ARRAYS//////////////////////////////////////////////
//these arrays will be filled once a specific enemy is selected
var enemyStats = [0, 'enemyName', 'enemyPortrait',      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0 ,    0, 0, 0, 0];
var enemyActiveStats = [0,0,0,    0,0,0,    0,0,0];
var enemyMoves = ['move0','move1','move2','move3'];


//these will be filled based off what what enemy inhabits each specific slot
//var enemyStandSelect = ['','','',''];
var enemyStatSlot1 = [0, 'enemyName', 'enemyPortrait',      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0 ,    0, 0, 0, 0];
var enemyStatSlot2 = [0, 'enemyName', 'enemyPortrait',      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0 ,    0, 0, 0, 0];
var enemyStatSlot3 = [0, 'enemyName', 'enemyPortrait',      0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0 ,    0, 0, 0, 0];

var enemyActiveStatSlot1 = [0,0,0,    0,0,0,    0,0,0];
var enemyActiveStatSlot2 = [0,0,0,    0,0,0,    0,0,0];
var enemyActiveStatSlot3 = [0,0,0,    0,0,0,    0,0,0];

var enemyMoveSlot1 = ['move0','move1','move2','move3'];
var enemyMoveSlot2 = ['move0','move1','move2','move3'];
var enemyMoveSlot3 = ['move0','move1','move2','move3'];











////////////////////////////////ENEMY STAT ARRAYS//////////////////////////////////////////////
//set enemy stat array to be later filled in as unique stats

//test opponent1
var testopponent1 = [2, 'Tester1', 'fechterClass.png',      1 ,2 ,3 ,4 ,5 ,2 ,7 ,8,  9 ,     10 ,11 ,12 ,13 ,14 ,15 ,    0, 0, 0, 0];
var testopponent1ActiveStats = [0,0,0,    0,0,0,    0,0,0];
var testopponent1Moves = ['Sickle','Tickle','Pickle','fickle'];



//test opponent 2
var testopponent2 = [2, 'Tester2', 'turmClass.png',      1 ,2 ,3 ,4 ,5 ,1 ,7 ,8,   9 ,     10 ,11 ,12 ,13 ,14 ,15 ,    1, 0, 0, 0];
var testopponent2ActiveStats = [0,0,0,    0,0,0,    0,0,0];
var testopponent2Moves = ['Sickle','Tickle','Pickle','fickle'];



//test opponent 3
var testopponent3 = [2, 'Tester3', 'zweilichtClass.png',      1 ,2 ,3 ,4 ,3 ,6 ,7 , 8,  9 ,     10 ,11 ,12 ,13 ,14 ,15 ,    2, 0, 0, 0];
var testopponent3ActiveStats = [0,0,0,    0,0,0,    0,0,0];
var testopponent3Moves = ['Sickle','Tickle','Pickle','fickle'];



//pheasant back
var pheasantBack1 = [2, 'Pheasant-Back', 'pheasantBack.png',      8 ,7 ,3 ,     4 ,0 ,3 ,0 ,2 ,0,     0, 0, 0, 0,   1002];
var pheasantBack1ActiveStats = [0,0,0,    0,0,0,    0,0,0];
var pheasantBack1Moves = ['Power Swing','Power Swing','Power Swing','Power Swing'];








































/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  Setup Battle   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
function initializeDuelPage(){

  $('#battleEndMenu').css('display','flex');
  $('#actionBtnCntr').css('display', "none");
  findMission();
  $('#battleEndBtn1').click(function () {
    //findBattleMusicTheme();
    $('#battleEndMenu').fadeOut(1000);
  })

}







////////////////////////////////DICE//////////////////////////////////////////////
var missionSelectionDice = Math.floor(Math.random() * 3) + 1;
//this function gets called in scripts.js




/////////////////////////////////////  FIND MISSION   /////////////////////////////////////


function findMission(){
  loadVar();
  modifyCombatStatusCheck();
  playerTurn();

  if ( missionSelectionDice == 1){
//if statements will select proper mission based on user progression stat
  //mission1EnemySelect();
  mission3EnemySelect();

  }

  if( missionSelectionDice == 2){
  //mission2EnemySelect();
  mission3EnemySelect();
  }

  if( missionSelectionDice == 3){
  mission3EnemySelect();
  }

// all this code must run regardless of what mission is selected



setEnemySelectBtn();
$('#enemyStand1').attr('src', 'img/terminal/classes/' + enemyStatSlot1[2]);
//$('#enemyStand2').attr('src', 'img/terminal/classes/' + enemyStatSlot2[2]);
//$('#enemyStand3').attr('src', 'img/terminal/classes/' + enemyStatSlot3[2]);
}







//mission 1
missionId = 'none';
//000000 : testMissionA
//000001 : testMissionB
  function mission1EnemySelect() {
    missionId = 000000;
    enemyStatSlot1 = testopponent1;
    enemyStatSlot2 = testopponent2;
    enemyStatSlot3 = testopponent3;

    enemyActiveStatSlot1 = testopponent1ActiveStats;
    enemyActiveStatSlot2 = testopponent2ActiveStats;
    enemyActiveStatSlot3 = testopponent3ActiveStats;

    setEnemyUniqueStats();
    setEnemyStandMargins();
    setInitialProgressBars();
  }

  function mission2EnemySelect() {
    missionId = 000001;
    enemyStatSlot1 = testopponent1;
    enemyStatSlot2 = testopponent2;

    enemyActiveStatSlot1 = testopponent1ActiveStats;
    enemyActiveStatSlot2 = testopponent2ActiveStats;

    setEnemyUniqueStats();
    setEnemyStandMargins();
    setInitialProgressBars();
  }

//pheasantBack
  function mission3EnemySelect() {
    missionId = 000002;
    enemyStatSlot1 = pheasantBack1;

    enemyActiveStatSlot1 = pheasantBack1ActiveStats;

    enemyMoveSlot1 = pheasantBack1Moves;

    setEnemyUniqueStats();
    setEnemyStandMargins();
    setInitialProgressBars();

    //$('#stage').css('background-image', 'url(' + 'img/terminal/backgrounds/rotLandDesert.png' + ')');
    imgUrl = 'img/terminal/backgrounds/rotLandDesert.png'
    $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');

  }






//set up battle field based on enemy count
  function setEnemyStandMargins() {

    if(enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] == 'enemyName' && enemyStatSlot3[1] == 'enemyName' ){
      $('#enemyDisplayTab > div:nth-child(1)').css('display', 'flex');

      //set hitbox margins if 2 opponents
      $('#enemyStand1').click(function () {
        $('#hitBoxCntr').css('margin-left', '30%');
      });
    }

    if (enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] == 'enemyName' ) {
      $('#enemyDisplayTab > div:nth-child(-n+2)').css('display', 'flex');

      //set hitbox margins if 2 opponents
      $('#enemyStand1').click(function () {
        $('#hitBoxCntr').css('margin-left', '7.5%');
      });
      $('#enemyStand2').click(function () {
        $('#hitBoxCntr').css('margin-left', '52.5%');
      });
    }

    if (enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] !== 'enemyName' ) {
      $('#enemyDisplayTab > div:nth-child(-n+3)').css('display', 'flex');

      //set hitbox margins if 3 opponents
      $('#enemyStand1').click(function () {
        $('#hitBoxCntr').css('margin-left', '0%');
      });
      $('#enemyStand2').click(function () {
        $('#hitBoxCntr').css('margin-left', '30%');
      });
      $('#enemyStand3').click(function () {
        $('#hitBoxCntr').css('margin-left', '60%');
      });
    }
  }



// set up enemy stand buttons that call up the correct stats based off what enemy is in the slot
function setEnemySelectBtn(){
  if(missionId == 000000){
    $('#enemyStand1').click(function () {
      enemyStats = testopponent1;
      enemyActiveStats = testopponent1ActiveStats;
      enemyMoves = testopponent1Moves;
      selectedSlot = 1;
      openTargetingSystem();
    });
    $('#enemyStand2').click(function () {
      enemyStats = testopponent2;
      enemyActiveStats = testopponent2ActiveStats;
      enemyMoves = testopponent2Moves;
      selectedSlot = 2;
      openTargetingSystem();
    });
    $('#enemyStand3').click(function () {
      enemyStats = testopponent3;
      enemyActiveStats = testopponent3ActiveStats;
      enemyMoves = testopponent3Moves;
      selectedSlot = 3;
      openTargetingSystem();
    });
  }

  if(missionId == 000001)
  $('#enemyStand1').click(function () {
    enemyStats = testopponent1;
    enemyActiveStats = testopponent1ActiveStats;
    enemyMoves = testopponent1Moves;
    selectedSlot = 1;
    openTargetingSystem();
  });
  $('#enemyStand2').click(function () {
    enemyStats = testopponent2;
    enemyActiveStats = testopponent2ActiveStats;
    enemyMoves = testopponent2Moves;
    selectedSlot = 2;
    openTargetingSystem();
  });

  if(missionId == 000002)
  $('#enemyStand1').click(function () {
    enemyStats = pheasantBack1;
    enemyActiveStats = pheasantBack1ActiveStats;
    enemyMoves = pheasantBack1Moves;
    selectedSlot = 1;
    openTargetingSystem();
  });

}



// once an enemy is selected and an action has been selected, the targeting system will open



function openTargetingSystem() {
  $('#enemySlotIndicate').css('display', 'none');
  if(selectedMoveVariable == 'none'){
    //$('#hitBoxCntr').css('display', 'flex');
    //$('#hitBoxCntr > div:nth-child(-n+6)').css('display', 'none');
    return
  }
  if (selectedMoveVariable[11] == 'Attack'){
      $('#hitBoxCntr').css('display', 'flex');
      $('#hitBoxCntr .hitBoxes').css('display', 'block');
      setPlayerAccValues();
}

if (selectedMoveVariable[11] == 'Attack/Buff' || selectedMoveVariable[11] == '2xAttack/Buff'){
    $('#hitBoxCntr').css('display', 'flex');
    $('#hitBoxCntr .hitBoxes').css('display', 'block');
    setPlayerAccValues();
}
}




function openHitSelfMenu(){
  $('#hitSelfCntr').css('display', 'flex');

}


function openEnemySlotIndicator() {
  $('#enemySlotIndicate').css('display', 'flex');

  if (enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] !== 'enemyName'){
    $('#enemySlotIndicate > .slotIndicator:nth-child(-n+3)').css('display', 'block');
  }

  if (enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] == 'enemyName'){
    $('#enemySlotIndicate > .slotIndicator:nth-child(-n+2)').css('display', 'block');
    $('#enemySlotIndicate > .slotIndicator:nth-child(-n+2)').css('margin', '0 10% 0 10%');
  }

  if (enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] == 'enemyName' && enemyStatSlot3[1] == 'enemyName'){
    $('#enemySlotIndicate > .slotIndicator:nth-child(1)').css('display', 'block');
  }
}

function checkStaminaLevel() {

  if(updateMoveSpVal < 0){

    $('#interactionPause').css('display', 'flex');
    $('#messageNotifCntr').css('display', 'flex');
    $('#messageNotifCntr h2').text( 'Insufficient Stamina');
    selectedMoveVariable = 'none';
    selectedMoveSlot = 'none';


    setTimeout(function(){
      setInitialPlayerMenu();
      $('#interactionPause').css('display', 'none');
      $('#messageNotifCntr').fadeOut(500);
    }, 1500);
  }

  if(turnCounter % 2 == 0 && selectedMoveVariable[11] == 'Attack'){
    openEnemySlotIndicator();
  }

}


//at this point the program should have done the following:
//---------------------------------------------------------
//-have chosen a missionId
//-have determined what enemies belong to mission
//-have placed enemies in their proper slots
//-have set the proper margines based on enemy count
//-have set buttons to slots to call up proper enemy stats




























////////////////////////////////Progress Bars //////////////////////////////////////////////



function setInitialProgressBars() {

//slot 1
  $('#enemySlot1 #enemyNameBar p').text(enemyStatSlot1[1]);
  //$('#enemySlot1 > #enemyNameBar > strong').text(enemyStatSlot1[17]);
  $('#enemySlot1 #enemyHpBar p').text(parseInt(enemyActiveStatSlot1[0]));
  $('#enemySlot1 .hpBar').attr({
   "max" : parseInt(enemyActiveStatSlot1[0]),
   "min" : 0
});
  $('#enemySlot1 .hpBar').val(parseInt(enemyActiveStatSlot1[0]));

  $('#enemySlot1 #enemyRotBar p').text(parseInt(enemyStatSlot1[5]));
  $('#enemySlot1 .rotBar').attr({
   "max" : 100 + parseInt(enemyActiveStatSlot1[2]),
   "min" : 0
});
  $('#enemySlot1 .rotBar').val(parseInt(enemyStatSlot1[5]));




//slot 2
  $('#enemySlot2 #enemyNameBar p').text(parseInt(enemyStatSlot2[1]));
  $('#enemySlot2 #enemyHpBar p').text(parseInt(enemyActiveStatSlot2[0]));
  $('#enemySlot2 .hpBar').attr({
   "max" : parseInt(enemyActiveStatSlot2[0]),
   "min" : 0
});
  $('#enemySlot2 .hpBar').val(parseInt(enemyActiveStatSlot2[0]));

  $('#enemySlot2 #enemyRotBar p').text(parseInt(enemyStatSlot2[5]));
  $('#enemySlot2 .rotBar').attr({
   "max" : 100 + parseInt(enemyActiveStatSlot2[2]),
   "min" : 0
});
  $('#enemySlot2 .rotBar').val(parseInt(enemyStatSlot2[5]));




//slot 3
  $('#enemySlot3 #enemyNameBar p').text(parseInt(enemyStatSlot3[1]));
  $('#enemySlot3 #enemyHpBar p').text(parseInt(enemyActiveStatSlot3[0]));
  $('#enemySlot3 .hpBar').attr({
   "max" : parseInt(enemyActiveStatSlot3[0]),
   "min" : 0
});
  $('#enemySlot3 .hpBar').val(parseInt(enemyActiveStatSlot3[0]));

  $('#enemySlot3 #enemyRotBar p').text(parseInt(enemyStatSlot3[5]));
  $('#enemySlot3 .rotBar').attr({
   "max" : 100 + parseInt(enemyActiveStatSlot3[2]),
   "min" : 0
});
  $('#enemySlot3 .rotBar').val(parseInt(enemyStatSlot3[5]));




//player
  $('#playerHpBar p').text(parseInt(playerActiveStats[0]));
  $('#playerProgressBarMenu .hpBar').attr({
   "max" : parseInt(playerActiveStats[0]),
   "min" : 0
});
  $('#playerProgressBarMenu .hpBar').val(parseInt(playerActiveStats[0]));

  $('#playerProgressBarMenu #enemyRotBar p').text(parseInt(playerActiveStats[2]));
  $('#playerProgressBarMenu .rotBar').attr({
   "max" : 100 + parseInt(playerActiveStats[2]),
   "min" : 0
});
  $('#playerProgressBarMenu .rotBar').val(parseInt(playerActiveStats[2]));
  $('#staminaBar').val(parseInt(playerActiveStats[1]));

}



//  * * * * * * * * * * = clean code = * * * * * * * * * * //











function newTurn() {
  turnCounter++;
  modifyCombatStatusCheck();
  //alert(turnCounter);
  if(turnCounter % 2 == 0){
    playerTurn();
    //alert('player');
  }
  if(turnCounter % 2 == 1){
    //alert('enemy');
    enemyTurn();

  }
}


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  Player Turn   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

function playerTurn() {
  $('#interactionPause').css('display', 'none');
  setInitialPlayerMenu();
  setPlayerTurnStats();

}















/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  Enemy Turn   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

function enemyTurn(){
//if 1 enemy
  if(enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] == 'enemyName' && enemyStatSlot3[1] == 'enemyName' ){
    //alert('slot1');
    enemySlot1Turn();

  }
//if 2 enemies
  if(enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] == 'enemyName' ){
    enemyTurnDice = Math.floor((Math.random() * 2) + 1 );

    if( enemyTurnDice == 1 ){
      alert('enemy 1 Turn');
    }
    if( enemyTurnDice == 2 ){
      alert('enemy 2 Turn');
    }
  }
//if 3 enemies
  if(enemyStatSlot1[1] !== 'enemyName' && enemyStatSlot2[1] !== 'enemyName' && enemyStatSlot3[1] !== 'enemyName' ){
    enemyTurnDice = Math.floor((Math.random() * 3) + 1 );

    if( enemyTurnDice == 1 ){
      alert('enemy 1 Turn');
    }
    if( enemyTurnDice == 2 ){
      alert('enemy 2 Turn');
    }
    if( enemyTurnDice == 3 ){
      alert('enemy 3 Turn');
    }
  }
}





function enemySlot1Turn() {
  //alert('decision ai');

  enemyStats = enemyStatSlot1;
  selectedMoveVariable = enemyMoveSlot1[1];

  findAttackSelection();
  setEnemyAccValues();
  enemyHitTorsoCal();
}

function enemySlot2Turn() {

}

function enemySlot3Turn() {

}






/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////   Player Menu   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


//////////////////////INITIAL//////////////////////////




function setInitialPlayerMenu(){
  menuTracker = 'initial';
  moveTracker = 'none';

  $('#battleMoveDataTab').css('display', 'none');
  $('#battleMenuCntr').css('display', 'none');
  $('#enemySlotIndicate').css('display', 'none');
  $('#playerBattleControls table input').css('color', 'white');


  $('#battleMenuCntr :is(button:nth-child(-n+4))').off('click');
  $('#playerBattleControls').css('display', 'flex');
  $('#playerProgressBarMenu').css('display', 'flex');
  $('#battleMenuCntr').css('display', 'flex');
  $('#battleMenuCntr :is(button:nth-child(-n+4))').css('display', 'inline');
  setPlayerTurnStats();
  setMenuTypes();





//==============resets player menu===============
  $('#battleMenuBackBtn').click( function () {
    menuTracker = 'initial';
    moveTracker = 'none';
    $('#battleMoveDataTab').css('display', 'none');
    $('#battleMenuCntr').css('display', 'none');
    $('#enemySlotIndicate').css('display', 'none');
    $('#playerBattleControls table input').css('color', 'white');
    $('#hitSelfCntr').css('display', 'none');
    $('#hitBoxCntr').css('display', 'none');
    setPlayerTurnStats();
    setMenuTypes();
  } );


}

function setMenuTypes() {


  $('#battleMenuCntr :is(button:nth-child(-n+4))').css('display', 'none');
  $('#battleMenuCntr :is(button:nth-child(-n+4))').off('click');


  if(menuTracker == 'initial'){
    $('#battleMenuCntr').css('display', 'flex');
    $('#battleMenuCntr :is(button:nth-child(-n+4))').css('display', 'inline');

    $('#battleMenuCntr > button:nth-child(1)').text( 'Attack' );
    $('#battleMenuCntr > button:nth-child(1)').css( 'color', '#FF4069');

    $('#battleMenuCntr > button:nth-child(2)').text( 'oki.exe' );
    $('#battleMenuCntr > button:nth-child(2)').css( 'color', '#5AFFAC');

    $('#battleMenuCntr > button:nth-child(3)').html( 'Talk');
    $('#battleMenuCntr > button:nth-child(3)').css( 'color', '#FFD56C');

    $('#battleMenuCntr > button:nth-child(4)').html( 'Flee' );
    $('#battleMenuCntr > button:nth-child(4)').css( 'color', '#D678D6');





    $('#battleMenuCntr > button:nth-child(1)').click( function () {
      menuTracker = 'attack';
      setMenuTypes();
    } );

    $('#battleMenuCntr > button:nth-child(2)').click( function () {
      menuTracker = 'oki.exe';
      setMenuTypes();
    } );

    $('#battleMenuCntr > button:nth-child(3)').click( function () {
      menuTracker = 'talk';
      setMenuTypes();
    } );

    $('#battleMenuCntr > button:nth-child(4)').click( function () {
      menuTracker = 'flee';
      setMenuTypes();
    } );
  }










//////////////////////ATTACK//////////////////////////



  if (menuTracker == 'attack') {
    $('#battleMenuCntr :is(button:nth-child(-n+4))').css('display', 'inline');

    $('#battleMenuCntr > button:nth-child(-n+4)').css( 'color', 'white');
    $('#battleMenuCntr > button:nth-child(1)').text( playerMoves[0] );
    $('#battleMenuCntr > button:nth-child(2)').text( playerMoves[1] );
    $('#battleMenuCntr > button:nth-child(3)').text( playerMoves[2] );
    $('#battleMenuCntr > button:nth-child(4)').text( playerMoves[3] );


    $('#battleMenuCntr > button:nth-child(1)').click( function () {
      moveTracker = playerMoves[0];
      moveSelector();
    });

    $('#battleMenuCntr > button:nth-child(2)').click( function () {
      moveTracker = playerMoves[1];
      moveSelector();
    });

    $('#battleMenuCntr > button:nth-child(3)').click( function () {
      moveTracker = playerMoves[2];
      moveSelector();
    });

    $('#battleMenuCntr > button:nth-child(4)').click( function () {
      moveTracker = playerMoves[3];
      moveSelector();
    });
  }











//////////////////////TALK//////////////////////////



  if (menuTracker == 'talk') {
    $('#battleMenuCntr :is(button:nth-child(-n+2))').css('display', 'inline');

    $('#battleMenuCntr > button:nth-child(-n+2)').css( 'color', 'white');
    $('#battleMenuCntr > button:nth-child(-n+2)').css( 'color', 'white');
    $('#battleMenuCntr > button:nth-child(1)').text( 'Talk' );
    $('#battleMenuCntr > button:nth-child(2)').text( 'Stats' );
  }

  if (menuTracker == 'oki.exe') {
    $('#battleMenuCntr :is(button:nth-child(-n+2))').css('display', 'inline');

    $('#battleMenuCntr > button:nth-child(-n+2)').css( 'color', 'white');
    $('#battleMenuCntr > button:nth-child(-n+2)').css( 'color', 'white');
    $('#battleMenuCntr > button:nth-child(1)').text( 'Vitals' );
    $('#battleMenuCntr > button:nth-child(2)').text( 'Items' );
  }


//////////////////////flee//////////////////////////



  if (menuTracker == 'flee') {

    $('#battleEndMenu').css('display','flex');
    $('#battleMenuCntr :is(button:nth-child(-n+4))').css('display', 'inline');
    $('#battleEndMenu  h1').text('Are you sure you wish to flee?');
    $('#battleEndBtn1').click(function () {
      location.assign("bunker.html");
    })
  }
}






//////////////////////ATTACK MENU//////////////////////////

function moveSelector() {
  $('#battleMenuCntr > button:nth-child(-n+4)').css( 'color', 'white');
  //$('#battleMenuCntr :is(button:nth-child(-n+4))').off('click');

  if (menuTracker == 'attack' && moveTracker == playerMoves[0]) {
    //define Move stats
    selectedMoveVariable = playerMoves[0];
    findAttackSelection();

  }

  if (menuTracker == 'attack' && moveTracker == playerMoves[1]) {
    //define Move stats
    selectedMoveVariable = playerMoves[1];
    findAttackSelection();

  }

  if (menuTracker == 'attack' && moveTracker == playerMoves[2]) {
    //define Move stats
    selectedMoveVariable = playerMoves[2];
    findAttackSelection();

  }

  if (menuTracker == 'attack' && moveTracker == playerMoves[3]) {
    //define Move stats
    selectedMoveVariable = playerMoves[3];
    findAttackSelection();

  }
}





function setMoveDataTab() {
  //define move info
  $('#battleMenuCntr').css('display','none');
  $('#battleMoveDataTab').css('display','flex');

  $('#battleMoveDataTab .moveDataName').css('color', selectedMoveVariable[9]);
  $('#battleMoveDataTab .moveDataName').text( selectedMoveVariable[10]);
  $('#battleMoveDataTab .moveDataType').text( selectedMoveVariable[11]);
  $('#battleMoveDataTab .moveDataDesc').text( selectedMoveVariable[13]);
  $('#battleMoveDataTab .moveDataIcon').attr('src', 'img/terminal/gameIcons/moveTypeIcons/' + selectedMoveVariable[12] );
}









































/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  Enemy Interaction   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////














/////////////////////////////////////  enemy stat page   /////////////////////////////////////

//the player has selected a specific enemy to interact widt
// enemyStats has been filled with corresponding data

//open Enemy stat sheet
$('#hitBoxCntr > div:nth-child(7)').click(function () {
  setUpEnemeyStatSheet();
  enemyStatDefine();
  setEnemyMoves();
  loadEnemyClass();
  $('#statDisplay > tbody > tr > td > button').css('display','none');
});

function setUpEnemeyStatSheet() {
  $('#enemyStatMenu').css('display', 'flex');
  $('#hitBoxCntr').css('display', 'none');
  $('#enemyDisplayTab').css('display', 'none');
}




//set appropriate enemy portrait


function loadEnemyClass() {
if (enemyStats[18] == 0) {
  $('#enemyClassDisplay > img').attr('src', 'img/terminal/classes/fechterClass.png');

}else if (enemyStats[18] == 1) {
  $('#enemyClassDisplay > img').attr('src', 'img/terminal/classes/turmClass.png');

}else if (enemyStats[18] == 2) {
  $('#enemyClassDisplay > img').attr('src', 'img/terminal/classes/zweilichtClass.png');

}else if (enemyStats == pheasantBack1) {
  $('#enemyClassDisplay > img').attr('src', 'img/terminal/classes/pheasantBack.png');
}}



//display enemy statistics

function enemyStatDefine() {
  $('#playerDesc > figcaption > p').text( enemyStats[1]);



  $("#hpStatValue").val(parseInt(enemyActiveStats[0]));
  $("#spStatValue").val(parseInt(enemyActiveStats[1]));
  $("#rpStatValue").val(parseInt(enemyActiveStats[2]));

  $("#attStatValue").val(parseInt(enemyActiveStats[3]));
  $("#crtStatValue").val(parseInt(enemyActiveStats[4]));
  $("#accStatValue").val(parseInt(enemyActiveStats[5]));

  $("#defStatValue").val(parseInt(enemyActiveStats[6]));
  $("#ddgStatValue").val(parseInt(enemyActiveStats[7]));
  $("#spdStatValue").val(parseInt(enemyActiveStats[8]));
}

function setEnemyMoves(){
  $('#move0').text(enemyMoves[0]);
  $('#move1').text(enemyMoves[1]);
  $('#move2').text(enemyMoves[2]);
  $('#move3').text(enemyMoves[3]);
}
























/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  COMBAT   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////










////////////////////////////////VARIABLE //////////////////////////////////////////////
var accuracyArray = [0,0,0,0,0,0];
var accModArray = [1.1,1.5,1.3,1.3,1.35,1.35];









////////////////////////////////B.A.T.S. //////////////////////////////////////////////
function setPlayerAccValues() {
  accuracyArray[0] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[0]);
  $('#hitHead').text( accuracyArray[0] + '%');

  accuracyArray[1] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[1]);
  $('#hitTorso').text( accuracyArray[1] + '%');

  accuracyArray[2] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[2]);
  $('#hitArmR').text( accuracyArray[2] + '%');

  accuracyArray[3] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[3]);
  $('#hitArmL').text( accuracyArray[3] + '%');

  accuracyArray[4] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[4]);
  $('#hitLegR').text( accuracyArray[4] + '%');

  accuracyArray[5] =  parseInt((50 + (updateMoveAccVal + updateMoveCrtVal) - enemyActiveStats[6]) * accModArray[5]);
  $('#hitLegL').text( accuracyArray[5] + '%');

  //alert( 'if hitOC is less than' + (accuracyArray[0])  + ' and greater than' + (accuracyArray[0] - (50 + (updateMoveAccVal * accModArray[0]))) + ' = hit');
  //alert( 'if hitOC is greater than' + (accuracyArray[0]) + ' = miss');
  //alert( 'if hitOC is less than' + (accuracyArray[0] - (50 + (updateMoveAccVal * accModArray[0])))   + ' = crit');
}

function setEnemyAccValues() {

  accuracyArray[0] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[0]);
  //$('#hitHead').text( accuracyArray[1] + '%');

  accuracyArray[1] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[1]);
  //$('#hitTorso').text( accuracyArray[2] + '%');

  accuracyArray[2] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[2]);
  //$('#hitArmR').text( accuracyArray[3] + '%');

  accuracyArray[3] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[3]);
  //$('#hitArmL').text( accuracyArray[4] + '%');

  accuracyArray[4] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[4]);
  //$('#hitLegR').text( accuracyArray[5] + '%');

  accuracyArray[5] =  parseInt((50 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[5]);
  //$('#hitLegL').text( accuracyArray[6] + '%');
  //alert(accuracyArray);
  modifyCombatEnemyAccuracy();
}



//determine hit outcome========================================================
var hitOutcome = 'none';

//==================player hit boxes ==========================
//hit head
function hitHeadCal(){

  bodyPartDmgMod = 1.2;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[0] && hitChanceDice > (accuracyArray[0] - (50 + (updateMoveAccVal * accModArray[0]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[0]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[0] - (50 + (updateMoveAccVal * accModArray[0]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }
}

//hit Torso
function hitTorsoCal(){

  bodyPartDmgMod = 1.1;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[1] && hitChanceDice > (accuracyArray[1] - (50 + (updateMoveAccVal * accModArray[1]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[1]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[1] - (50 + (updateMoveAccVal * accModArray[1]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }
}

//hit Arm Right
function hitArmRCal(){

  bodyPartDmgMod = 1.05;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[2] && hitChanceDice > (accuracyArray[2] - (50 + (updateMoveAccVal * accModArray[2]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[2]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[2] - (50 + (updateMoveAccVal * accModArray[2]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }

}

//hit Arm Left
function hitArmLCal(){
  bodyPartDmgMod = 1.05;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[3] && hitChanceDice > (accuracyArray[3] - (50 + (updateMoveAccVal * accModArray[3]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[3]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[3] - (50 + (updateMoveAccVal * accModArray[3]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }
}

//hit Leg Right
function hitLegRCal(){
  bodyPartDmgMod = 1.03;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[4] && hitChanceDice > (accuracyArray[4] - (50 + (updateMoveAccVal * accModArray[4]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[4]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[4] - (50 + (updateMoveAccVal * accModArray[4]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }
}

//hit Leg Left
function hitLegLCal(){
  bodyPartDmgMod = 1.03;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[5] && hitChanceDice > (accuracyArray[5] - (50 + (updateMoveAccVal * accModArray[5]))) ){
    hitOutcome = 'hit';
    attMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[5]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[5] - (50 + (updateMoveAccVal * accModArray[5]))) ){
    hitOutcome = 'crit';
    attCritMoveTypeCal();
  }
}




function hitSelfCal(){
  hitOutcome = 'self';
  $('#hitSelfCntr').css('display','none');
  setPlayerMoveStats();
  displayMoveOutcome();

}














//==================enemy hit boxes ==========================
//hit head
function enemyHitHeadCal(){

  bodyPartDmgMod = 1.2;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[0] && hitChanceDice > (accuracyArray[0] - (50 + (enemyActiveStats[6] * accModArray[0]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[0]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[0] - (50 + (enemyActiveStats[6] * accModArray[0]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}

//hit Torso
function enemyHitTorsoCal(){
  //alert(accuracyArray);

  bodyPartDmgMod = 1.1;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[1] && hitChanceDice > (accuracyArray[1] - (50 + (enemyActiveStats[6] * accModArray[1]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[1]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[1] - (50 + (enemyActiveStats[6] * accModArray[1]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}

//hit Arm Right
function enemyHitArmRCal(){

  bodyPartDmgMod = 1.05;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[2] && hitChanceDice > (accuracyArray[2] - (50 + (enemyActiveStats[6] * accModArray[2]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[2]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[2] - (50 + (enemyActiveStats[6] * accModArray[2]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}

//hit Arm Left
function enemyHitArmLCal(){
  bodyPartDmgMod = 1.05;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[3] && hitChanceDice > (accuracyArray[3] - (50 + (enemyActiveStats[6] * accModArray[3]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[3]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[3] - (50 + (enemyActiveStats[6] * accModArray[3]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}

//hit Leg Right
function enemyHitLegRCal(){
  bodyPartDmgMod = 1.03;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[4] && hitChanceDice > (accuracyArray[4] - (50 + (enemyActiveStats[6] * accModArray[4]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[4]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[4] - (50 + (enemyActiveStats[6] * accModArray[4]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}

//hit Leg Left
function enemyHitLegLCal(){
  bodyPartDmgMod = 1.03;
  var hitChanceDice = Math.floor(Math.random() * 100) + 1;

  if ( hitChanceDice < accuracyArray[5] && hitChanceDice > (accuracyArray[5] - (50 + (enemyActiveStats[6] * accModArray[5]))) ){
    hitOutcome = 'hit';
    enemyAttMoveTypeCal();
  }
  if (hitChanceDice > accuracyArray[5]) {
    hitOutcome = 'miss';
    displayMoveOutcome();
  }
  if ( hitChanceDice < (accuracyArray[5] - (50 + (enemyActiveStats[6] * accModArray[5]))) ){
    hitOutcome = 'crit';
    enemyAttCritMoveTypeCal();
  }
}




function enemyHitSelfCal(){
  hitOutcome = 'self';
}











//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  modified combat odds   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////




var playermModCombatStatus = 0;
function modifyCombatStatusCheck() {
var maxHp = (playerStats[3] * 3.2);


  if( playerActiveStats[0] == ( 100 / 100) * maxHp && playerActiveStats[0] > ( 90 / 100) * maxHp){
    //alert('between 100% and 90%');
    playermModCombatStatus = 0;
  }
  if( playerActiveStats[0] <= (90 / 100) * maxHp && playerActiveStats[0] > (80 / 100) * maxHp){
    //alert('between 90% and 80%');
    playermModCombatStatus = 1;
  }
  if( playerActiveStats[0] <= (80 / 100) * maxHp && playerActiveStats[0] > (70 / 100) * maxHp){
  //  alert('between 80% and 70%');
    playermModCombatStatus = 2;
  }
  if( playerActiveStats[0] <= (70 / 100) * maxHp && playerActiveStats[0] > (60 / 100) * maxHp){
    //alert('between 70% and 60%');
    playermModCombatStatus = 3;
  }
  if( playerActiveStats[0] <= (60 / 100) * maxHp && playerActiveStats[0] > (50 / 100) * maxHp){
    //alert('between 60% and 50%');
    playermModCombatStatus = 4;
  }
  if( playerActiveStats[0] <= (50 / 100) * maxHp && playerActiveStats[0] > (40 / 100) * maxHp){
    //alert('between 50% and 40%');
    playermModCombatStatus = 5;
  }
  if( playerActiveStats[0] <= (40 / 100) * maxHp && playerActiveStats[0] > (30 / 100) * maxHp){
    //alert('between 40% and 30%');
    playermModCombatStatus = 6;
  }
  if( playerActiveStats[0] <= (30 / 100) * maxHp && playerActiveStats[0] > (20 / 100) * maxHp){
    //alert('between 30% and 20%');
    playermModCombatStatus = 7;
  }
}




function modifyCombatEnemyAccuracy() {
  if (playermModCombatStatus > 4) {
    //alert('reduce Enemy Accuracy');
    accuracyArray[0] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[0]);
    //$('#hitHead').text( accuracyArray[1] + '%');

    accuracyArray[1] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[1]);
    //$('#hitTorso').text( accuracyArray[2] + '%');

    accuracyArray[2] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[2]);
    //$('#hitArmR').text( accuracyArray[3] + '%');

    accuracyArray[3] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[3]);
    //$('#hitArmL').text( accuracyArray[4] + '%');

    accuracyArray[4] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[4]);
    //$('#hitLegR').text( accuracyArray[5] + '%');

    accuracyArray[5] =  parseInt((40 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[5]);
    //$('#hitLegL').text( accuracyArray[6] + '%');
    //alert(accuracyArray);
  }
    if (playermModCombatStatus > 5) {
      //alert('reduce Enemy Accuracy');
      accuracyArray[0] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[0]);
      //$('#hitHead').text( accuracyArray[1] + '%');

      accuracyArray[1] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[1]);
      //$('#hitTorso').text( accuracyArray[2] + '%');

      accuracyArray[2] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[2]);
      //$('#hitArmR').text( accuracyArray[3] + '%');

      accuracyArray[3] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[3]);
      //$('#hitArmL').text( accuracyArray[4] + '%');

      accuracyArray[4] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[4]);
      //$('#hitLegR').text( accuracyArray[5] + '%');

      accuracyArray[5] =  parseInt((30 + (enemyActiveStats[6] + enemyActiveStats[5]) - playerActiveStats[7]) * accModArray[5]);
      //$('#hitLegL').text( accuracyArray[6] + '%');
      //alert(accuracyArray);
  }else{
    //alert('none');
  }

}





function modifyCombatEnemyDefence(){
  if (playermModCombatStatus >= 5) {
    attackDice(0, updateMoveAttVal + 1);
    defenceDice(0, (enemyActiveStats[4] / 3) +1);
    //alert(attackDiceOutcome + ' ' + defenceDiceOutcome);
  }else{
    //alert(attackDiceOutcome + '... ' + defenceDiceOutcome);
  }
}










//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  Combat  outcomes   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
var attackDiceOutcome = 0;
var defenceDiceOutcome = 0;

function  attackDice(min, max) {
  min = min;
  max = max;
  attackDiceOutcome =  (Math.random() * (max - min) + min);
}

function  defenceDice(min, max) {
  min = min;
  max = max;
  defenceDiceOutcome =  (Math.random() * (max - min) + min);
}
//============================== Player Dealing Damage ============================

//offencive move
var moveAttArray = ['playerBaseDmg', 'moveDmg', 'bodyPartDmgMod', 'criticalDmg'];
var moveAttCal = 0;


function setPlayerMoveAttArray() {
  attackDice(0, updateMoveAttVal + 1);
  defenceDice(0, enemyActiveStats[4] +1);
  modifyCombatEnemyDefence();
  moveAttArray[0] = attackDiceOutcome;
  moveAttArray[1] = selectedMoveVariable[3];
  moveAttArray[2] = bodyPartDmgMod;
  moveAttArray[3] = playerActiveStats[5];

}


function attMoveTypeCal() {
  setPlayerMoveAttArray();

  moveAttCal = (  moveAttArray[3] + ((moveAttArray[0] + moveAttArray[1]) * moveAttArray[2])  ) - (defenceDiceOutcome );


  if (moveAttCal < 0){
    moveAttCal = 0;
  }
  enemyActiveStats[0] = enemyActiveStats[0] - moveAttCal;
  updateEnemyHp();
}


function attCritMoveTypeCal() {
  setPlayerMoveAttArray();
  moveAttCal = (  (moveAttArray[3] * (Math.random() * 2) + 1) + ((moveAttArray[0] + moveAttArray[1]) * moveAttArray[2])  );
  if (moveAttCal < 0){
    moveAttCal = 0;
  }
  enemyActiveStats[0] = enemyActiveStats[0] - moveAttCal;
  updateEnemyHp();
}





//========================update progress bars==========================
function updateEnemyHp(){

  if(selectedSlot == 1){
    $('#enemySlot1 .hpBar').val(parseInt(enemyActiveStatSlot1[0]));
    $('#enemySlot1 > #enemyHpBar > p').text(parseInt(enemyActiveStatSlot1[0]));
  }

  if(selectedSlot == 2){
    $('#enemySlot1 .hpBar').val(parseInt(enemyActiveStatSlot2[0]));
  }

  if(selectedSlot == 3){
    $('#enemySlot1 .hpBar').val(parseInt(enemyActiveStatSlot3[0]));
  }
  displayMoveOutcome();
}





















//============================== Enemy Dealing Damage ============================
function setEnemyMoveAttArray() {
  attackDice(0, enemyActiveStats[3] + 1);
  defenceDice(0, playerActiveStats[4] +1);
  moveAttArray[0] = attackDiceOutcome;
  moveAttArray[1] = selectedMoveVariable[3];
  moveAttArray[2] = bodyPartDmgMod;
  moveAttArray[3] = enemyActiveStats[5];
}


function enemyAttMoveTypeCal() {
  setEnemyMoveAttArray();
  moveAttCal = (  moveAttArray[3] + ((moveAttArray[0] + moveAttArray[1]) * moveAttArray[2])  ) - (defenceDiceOutcome );
  if (moveAttCal < 0){
    moveAttCal = 0;
  }
  playerActiveStats[0] = playerActiveStats[0] - moveAttCal;
  updatePlayerHp();
}




function enemyAttCritMoveTypeCal() {
  setEnemyMoveAttArray();
  moveAttCal = (  (moveAttArray[3] * (Math.random() * 2) + 1) + ((moveAttArray[0] + moveAttArray[1]) * moveAttArray[2])  );
  if (moveAttCal < 0){
    moveAttCal = 0;
  }
  playerActiveStats[0] = playerActiveStats[0] - moveAttCal;
  updatePlayerHp();
}











//========================update progress bars==========================
function updatePlayerHp(){


    $('#playerHpBar .hpBar').val(parseInt(playerActiveStats[0]));
    $('#playerHpBar p').text(parseInt(playerActiveStats[0]));
    displayMoveOutcome();
}


















function checkHealth(){
  if(playerActiveStats[0] <= 0){
    deathScreen();
  }
  if(enemyActiveStatSlot1[0] < 1 && enemyActiveStatSlot2[1] < 1 && enemyActiveStatSlot3[2] < 1){
    victoryScreen();
  }
  if(enemyActiveStatSlot1[0] >= 1 || enemyActiveStatSlot2[0] >= 1 || enemyActiveStatSlot3[0] >= 1 ){
    setTimeout(function(){ newTurn(); }, turnTimer);
  }

}







function displayMoveOutcome() {

  playerActiveStats[1] = parseInt(updateMoveSpVal);
  $('#interactionPause').css('display', 'inline');
  $('#hitBoxCntr').css('display', 'none');
  $('#hitOutcomeDisplay').css('display', 'flex');



  if (hitOutcome == 'hit'){

    $('#hitOutcomeDisplay > p').text(parseInt(moveAttCal));
    setTimeout(function(){ $('#hitOutcomeDisplay').css('display', 'none'); }, 500);
    turnTimer = 2000;
  }


  if (hitOutcome == 'crit') {

    $('#hitOutcomeDisplay > p').text(parseInt(moveAttCal));
    setTimeout(function(){
      $('#hitOutcomeDisplay > p').css('color', '#FBB040');
      $('#hitOutcomeDisplay > p').text('Critical');
    }, 500);
    setTimeout(function(){
      $('#hitOutcomeDisplay').css('display', 'none');
      $('#hitOutcomeDisplay > p').css('color', 'white');
    }, 1000);
    turnTimer = 2500;
    findMoveSound();
  }


  if (hitOutcome == 'miss') {
    $('#hitOutcomeDisplay > p').text('Miss');
    setTimeout(function(){ $('#hitOutcomeDisplay').css('display', 'none'); }, 500);
    turnTimer = 2000;
  }

  if (hitOutcome == 'self') {
    $('#hitOutcomeDisplay > p').text('Buff');
    setTimeout(function(){ $('#hitOutcomeDisplay').css('display', 'none'); }, 500);
    turnTimer = 2000;
  }
  findMoveSound();
  checkHealth();

}











////////////////////////////////////////////Battle End Menu////////////////////////////////


function deathScreen() {
  setTimeout(function(){ $("#battleEndMenu").fadeIn(2000); }, 1000);
  $("#battleEndMenu h1").text('System Failure');
  $("#battleEndMenu h1").css('color', '#ee2d7b');
  setInterval(function(){
       $("#battleEndMenu h1").toggle();
  },700);

  $('#battleEndBtn1').click(function () {
    location.assign("bunker.html");
  })
}

function victoryScreen() {
  setTimeout(function(){ $("#battleEndMenu").fadeIn(2000); }, 1000);
  $("#battleEndMenu h1").text('Victory');
  $("#battleEndMenu h1").css('color', '#2BB673');


  $('#battleEndBtn1').click(function () {
    location.assign("bunker.html");
  })
}
