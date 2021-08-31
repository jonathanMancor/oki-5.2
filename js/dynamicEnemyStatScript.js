////////////////////////////////SET UNIQUE STATS//////////////////////////////////////////////
//These functions create unique stats based off the players stats for each enemy type.
//This ensures that no matter what level the player is, the enemies will alwats have relevant and balanced stats


//active stat multiplier














/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  ENEMY STAT CALCULATOR   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//these functions are called up if the enemy is found in a slot. It calculates enemy stats based on player class



///////////////////////////////   -PHEASANT BACK- ///////////////////////////////////////






function pheasantBack1Stats(){
  pheasantBack1[0] = parseInt(playerStats[0]) + Math.floor(Math.random()*4)+2;

  if (pheasantBack1[0] <= 10) {
    pheasantBack1[3] =  pheasantBack1[3] + (pheasantBack1[0] * 0.3);
    pheasantBack1[4] = (pheasantBack1[0] * 0.1) + pheasantBack1[4];
    pheasantBack1[5] = (pheasantBack1[0] * 0.1) + pheasantBack1[5];
    pheasantBack1[6] = (pheasantBack1[0] * 0.2) + pheasantBack1[6];
    pheasantBack1[7] = (pheasantBack1[0] * 0) + pheasantBack1[7];
    pheasantBack1[8] = (pheasantBack1[0] * 0.1) + pheasantBack1[8];
    pheasantBack1[9] = (pheasantBack1[0] * 0.1) + pheasantBack1[9];
    pheasantBack1[10] = (pheasantBack1[0] * 0.1) + pheasantBack1[10];
    pheasantBack1[11] = (pheasantBack1[0] * 0) + pheasantBack1[11];
  }










    //active Stats=======================================
    //active stat multiplieres are the same across all classes
    pheasantBack1ActiveStats[0] = (pheasantBack1[3] * 3.2);//health
    pheasantBack1ActiveStats[1] = (pheasantBack1[4] * 3.2);//stamina
    pheasantBack1ActiveStats[2] = (pheasantBack1[5] * 1);//rot

    pheasantBack1ActiveStats[3] = (pheasantBack1[6] * 1.5) + (pheasantBack1[7] * 1.2) + (pheasantBack1ActiveStats[2] / 100);//attack
    pheasantBack1ActiveStats[4] = (pheasantBack1[8] * 1.3) - (pheasantBack1ActiveStats[2] / 100);//critical %
    pheasantBack1ActiveStats[5] = (pheasantBack1[9] * 0.5) + (pheasantBack1[11] * 0.3) + (pheasantBack1ActiveStats[2] / 100);//accuracy

    pheasantBack1ActiveStats[6] = (pheasantBack1[7] * 1.2) + (pheasantBack1[9] * 2.3) + (pheasantBack1[11] * 0.3) - (pheasantBack1ActiveStats[2] / 100);//defence
    pheasantBack1ActiveStats[7] = (pheasantBack1[10] * 1.5) + (pheasantBack1[11] * 0.3);//dodge
    pheasantBack1ActiveStats[8] = (pheasantBack1[10] * 1.2) + (pheasantBack1ActiveStats[2] / 100);//speed

    //for(i = 0; i < pheasantBack1ActiveStats.length; i++){
      //if(pheasantBack1ActiveStats[i] <= 0){pheasantBack1ActiveStats[i] = 0;}
  //}

}






/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  ENEMY FINDER   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//this function finds what enemy is in each slot and cals up their specific stat calculation scripts
function setEnemyUniqueStats() {

  if(  enemyStatSlot1 == testopponent1 || enemyStatSlot2 == testopponent1 || enemyStatSlot3 == testopponent1){
    testopponent1Stats();
  }
  if( enemyStatSlot1 == testopponent2 || enemyStatSlot2 == testopponent2 || enemyStatSlot3 == testopponent2){
     testopponent2Stats();
  }
  if(  enemyStatSlot1 == testopponent3 || enemyStatSlot2 == testopponent3 || enemyStatSlot3 == testopponent3){
     testopponent3Stats();
  }
  if(  enemyStatSlot1 == pheasantBack1 || enemyStatSlot2 == pheasantBack1 || enemyStatSlot3 == pheasantBack1){
   pheasantBack1Stats();
 }
}




function openFunc() {
  //if player class == Fechter
    if(playerStats[18] == 0){

    }
  //if player class == Turm
    if(playerStats[18] == 1){

    }
  //if player class == Zweilicht
    if(playerStats[18] == 2){

    }
}
