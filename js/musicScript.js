

$('#battleMenuCntr > button').click( function() {
  okiClick();
});






function okiClick() {
var okiClickSound = document.getElementById("okiClickSound");
okiClickSound.volume = 0.2;
  okiClickSound.play();
}


///////////////////////////////////MBattle music themes//////////////////////////////

function findBattleMusicTheme(){

    deadlyDuelBattleTheme();

}



function deadlyDuelBattleTheme() {
var deadlyDuelBattleTheme = document.getElementById("deadlyDuel");
deadlyDuelBattleTheme.volume = 0.8;
  deadlyDuelBattleTheme.play();
}




///////////////////////////////////Move sounds effects//////////////////////////////

function findMoveSound(){
  if(selectedMoveVariable[10] == 'Power Swing'){
    powerSwingSound();
  }
}


function powerSwingSound() {
  var powerSwingHit = document.getElementById("powerSwingHit");
  var powerSwingMiss = document.getElementById("powerSwingMiss");
  var powerSwingCrit = document.getElementById("powerSwingCrit");
  powerSwingHit.volume = 1;
  powerSwingMiss.volume = 1;
  powerSwingCrit.volume = 1;
  if (hitOutcome == 'hit') {
    powerSwingHit.play();
  }
  if (hitOutcome == 'miss') {
    powerSwingMiss.play();
  }
  if (hitOutcome == 'crit') {
    powerSwingCrit.play();
  }


}















function bootingUpSound() {
var bootingUpSound = document.getElementById("bootingUpSound");
  bootingUpSound.play();
}




function playOkiTyping() {
var okiTyping = document.getElementById("okiTyping");
  okiTyping.play();
}
function pauseOkiTyping() {
var okiTyping = document.getElementById("okiTyping");
  okiTyping.pause();
}




function playOkiIntroTutorial() {
var okiIntroTutorial = document.getElementById("okiIntroTutorial");
  okiIntroTutorial.play();
}
function pauseOkiIntroTutorial() {
var okiIntroTutorial = document.getElementById("okiIntroTutorial");
  okiIntroTutorial.pause();
}
