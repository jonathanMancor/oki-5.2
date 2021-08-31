////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////WEAPON STAT ARRAYS//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



//weapon id codes:
//first digit: weapon type
// 1(melee) | 2(range) | 3(Spore)
//1001(twin Hygrocybe)
//1002(ostoyae Arm)
//1002(west Enoki Stalf)

var twinHygrocybeArray = ['Hygrocybe Miniata & Virescence','twinHygrocybe.png',300,   3,  1,0,0,  1,0,0,  1001, 'Flurry', 'Focus', 'Whirlwind'];
const twinHygrocybeDesc = "Twin HygroCybric techno-blades, Miniata and Virescence. These seperate weapons can com together to create a singular mushroom-shaped sword."

var ostoyaeArmArray = ["Queen Ostoyae's Arm",'ostoyaeArm.png',450,   0,  2,-1,0,  0,-1,0,   1002, 'Power Swing', 'Last Stand', 'Overcharge'];
const ostoyaeArmDesc = "Twin HygroCybric techno-blades, Miniata and Virescence. These seperate weapons can com together to create a singular mushroom-shaped sword."

var westEnokiStalfArray = ["Western Enoki Stalf",'westernEnokiStalf.png',450,   0,  0,0,0,  0,0,0,    1003];
const westEnokiStalfDesc = "Twin HygroCybric techno-blades, Miniata and Virescence. These seperate weapons can com together to create a singular mushroom-shaped sword."












////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////COMBAT MOVE ARRAYS//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
var swordSongMoveStats = [0,-3,0,   2.5,0,0,   -0.3,0,0,    '#00A79D', 'Sword Song', '2xAttack/Buff' , 'turm/powerSwing.png', 'Assume T.U.R.M. stance to brace an onslaught.'];
var turmMoveStats = [0,-2,0,   0,1,0,   0,-1.2,0,    '#00A79D', 'T.U.R.M.', 'Buff' , 'turm/powerSwing.png', 'Assume T.U.R.M. stance to brace an onslaught.'];





//ostoyaeArm
var powerSwingMoveStats = [0,-5,0,   1.5,0,0,   0,0,0,    '#DA1C5C', 'Power Swing', 'Attack' , 'turm/powerSwing.png', 'A sweep attack, enhanced by your mechanzied armor.'];

var overChargeMoveStats = [0,2.5,0,   0,-0.5,0,   0,0,0,    '#FBB040', '0ver-Charge', 'Buff' , 'turm/powerSwing.png', "Overcharging your armor's batteries for maximum output. (2 Turns)"];

var lastStandMoveStats = [0,-3,0,    1,0,0,   0,0,4,    '#DA1C5C', 'Last Stand', 'Attack', 'turm/retaliate.png', "The closer you are to death, the stronger you become."];
var lastStandBuffedMoveStats = [0,-3,0,    2.5,0,0,   1,0,0,    '#DA1C5C', 'Last Stand', 'Attack', 'turm/retaliate.png', "Your mind's eye is focused and your objective is clear. Sieze the moment."];





//twinHygrocybe
var flurryMoveStats = [0,-2,0,   1.5,0,0,   1,0,0,    '#DA1C5C', 'Flurry', 'Attack' , 'turm/powerSwing.png', 'A sweep attack, enhanced by your mechanzied armor.'];

var focusMoveStats = [0,0,0,   3,0,0,   2,-2,1,    '#DA1C5C', 'Focus', 'Buff' , 'turm/powerSwing.png', 'A sweep attack, enhanced by your mechanzied armor.'];
var reFocusMoveStats = [0,0,0,   -3,0,0,   -2,2,-1,    '#DA1C5C', 'Focus', 'Buff' , 'turm/powerSwing.png', 'A sweep attack, enhanced by your mechanzied armor.'];

var whirlWindMoveStats = [0,-3,0,   0,0,0,   1.5,1.5,0,    '#DA1C5C', 'Whirlwind', 'Buff' , 'turm/powerSwing.png', 'A sweep attack, enhanced by your mechanzied armor.'];









////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////COMBAT FiND MOVES//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
function findAttackSelection(){




////////////////////////////////CLASS SPECIFIC MOVES//////////////////////////////////////////////




if(selectedMoveVariable == 'Sword Song' ){
  selectedMoveVariable = swordSongMoveStats;
  if(turnCounter % 2 == 0){
    $('#moveAttVal').css('color','#00FF7F');
    $('#moveAccVal').css('color','#FF4370');

    $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatName').text('Attack');
    $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatVal').text('+' + selectedMoveVariable[4]);

    $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatName').text('Accuracy');
    $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatVal').text(selectedMoveVariable[6]);
  }
}




  if(selectedMoveVariable == 'T.U.R.M.' ){
    selectedMoveVariable = turmMoveStats;
    if(turnCounter % 2 == 0){
      $('#moveDefVal').css('color','#00FF7F');
      $('#moveDdgVal').css('color','#FF4370');

      openHitSelfMenu();

      $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatName').text('Defence');
      $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatVal').text('+' + selectedMoveVariable[4]);

      $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatName').text('Dodge');
      $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatVal').text(selectedMoveVariable[7]);
    }
  }





















////////////////////////////////wEAPON SPECIFIC MOVES//////////////////////////////////////////////


//------------Twin Hygrocybe-------------//
  if(selectedMoveVariable == 'Flurry' ){
    selectedMoveVariable = flurryMoveStats;
    if(turnCounter % 2 == 0){
      $('#moveAttVal').css('color','#00FF7F');
      $('#moveAccVal').css('color','#00FF7F');
    }
  }



  if(selectedMoveVariable == 'Focus' ){
    selectedMoveVariable = focusMoveStats;
    playerMoves[2] = 'Re-Focus'
    if(turnCounter % 2 == 0){
      $('#moveAttVal').css('color','#00FF7F');
      $('#moveCrtVal').css('color','#00FF7F');
      openHitSelfMenu();
    }
  }

  if(selectedMoveVariable == 'Re-Focus' ){
    selectedMoveVariable = focusMoveStats;
    playerMoves[2] = 'Focus'
    if(turnCounter % 2 == 0){
      $('#moveAttVal').css('color','#00FF7F');
      $('#moveCrtVal').css('color','#00FF7F');
      openHitSelfMenu();
    }
  }


  if(selectedMoveVariable == 'Whirlwind' ){
    selectedMoveVariable = whirlWindMoveStats;
    if(turnCounter % 2 == 0){
      $('#moveAttVal').css('color','#00FF7F');
      $('#moveCrtVal').css('color','#00FF7F');
      openHitSelfMenu();
    }
  }







//------------Ostoyae Arm-------------//
  if(selectedMoveVariable == 'Power Swing' ){
    selectedMoveVariable = powerSwingMoveStats;
    if(turnCounter % 2 == 0){
      $('#moveAttVal').css('color','#00FF7F');
      $('#moveCrtVal').css('color','#00FF7F');
    }
  }



  if(selectedMoveVariable == 'Overcharge' ){
    selectedMoveVariable = overChargeMoveStats;
    if(turnCounter % 2 == 0){
      $('#moveDefVal').css('color','#FF4370');
      //$('#moveAttVal').css('color','#00FF7F');

      openHitSelfMenu();

      $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatName').text('Stamina');
      $('#hitSelfCntr > div > table > tbody > tr:nth-child(1) > .hitSelfStatVal').text('+' + selectedMoveVariable[1]);

      //$('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatName').text('Attack');
      //$('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatVal').text('+' + selectedMoveVariable[3]);

      $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatName').text('Defence');
      $('#hitSelfCntr > div > table > tbody > tr:nth-child(2) > .hitSelfStatVal').text(selectedMoveVariable[4]);
    }
  }


  if(selectedMoveVariable == 'Last Stand' ){
    selectedMoveVariable = lastStandMoveStats;
    if (playerActiveStats[0] <= 10) {
      selectedMoveVariable = lastStandBuffedMoveStats;
    }

    if(turnCounter % 2 == 0){
      $('#moveAccVal').css('color','#00FF7F');
      $('#moveAttVal').css('color','#00FF7F');

    }
  }




//------------Poison Fire-------------//







  if(turnCounter % 2 == 0){
    setMoveDataTab();
    displayPlayerMoveStats();
    checkStaminaLevel();
  }

}
