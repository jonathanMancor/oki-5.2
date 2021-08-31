/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  user stats   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////



equippedWpnArray = 'none';

//save stats



























////////////////////////////////PLAYER FILL STAT SHEET//////////////////////////////////////////////



//active statistics





function setEquippedWpnStats(){
  if( playerStats[16] == 1001){
    equippedWpnArray = twinHygrocybeArray;
  }

  if( playerStats[16] == 1002){
    equippedWpnArray = ostoyaeArmArray;
  }

  playerStats.att = playerStats.att + equippedWpnArray[4];
  playerStats.dex = playerStats.dex + equippedWpnArray[5];
  playerStats.acc = playerStats.acc + equippedWpnArray[6];

  playerStats.def = playerStats.def + equippedWpnArray[7];
  playerStats.ddg = playerStats.ddg + equippedWpnArray[8];
  playerStats.spd = playerStats.spd + equippedWpnArray[9];

  playerStats.move0 = equippedWpnArray[11];
  playerStats.move2 = equippedWpnArray[12];
  playerStats.move3 = equippedWpnArray[13];



}




//duel.html
function setPlayerTurnStats() {
  $('#staminaBar').val( parseInt(playerStats.sp));

  $('#moveAttVal').val( parseInt(playerStats.att));
  $('#moveCrtVal').val( parseInt(playerStats.dex));
  $('#moveAccVal').val( parseInt(playerStats.acc));

  $('#moveDefVal').val( parseInt(playerStats.def));
  $('#moveDdgVal').val( parseInt(playerStats.ddg));
  $('#moveSpdVal').val( parseInt(playerStats.spd));

  $('#move1').text(playerStats.move1);
  $('#move2').text(playerStats.move2);
  $('#move3').text(playerStats.move3);
}


//this is the temporary stat display to see changes made to stats before confirming them
function displayPlayerMoveStats() {
  updateMoveHpVal = parseInt(playerStats.hp + selectedMoveVariable[0]);
  updateMoveSpVal = parseInt(playerStats.sp + selectedMoveVariable[1]);
  updateMoveRpVal = parseInt(playerStats.rp + selectedMoveVariable[2]);

  updateMoveAttVal = parseInt(playerStats.att + selectedMoveVariable[3]);
  updateMoveCrtVal = parseInt(playerStats.dex + selectedMoveVariable[4]);
  updateMoveAccVal = parseInt(playerStats.acc + selectedMoveVariable[5]);

  updateMoveDefVal = parseInt(playerStats.def + selectedMoveVariable[6]);
  updateMoveDdgVal = parseInt(playerStats.ddg + selectedMoveVariable[7]);
  updateMoveSpdVal = parseInt(playerStats.spd + selectedMoveVariable[8]);

  $('#staminaBar').val( parseInt(updateMoveSpVal));

  $('#moveAttVal').val( parseInt(updateMoveAttVal));
  $('#moveAccVal').val( parseInt(updateMoveAccVal));
  $('#moveCrtVal').val( parseInt(updateMoveCrtVal));

  $('#moveDefVal').val( parseInt(updateMoveDefVal));
  $('#moveDdgVal').val( parseInt(updateMoveDdgVal));
  $('#moveSpdVal').val( parseInt(updateMoveSpdVal));
}


function setPlayerMoveStats() {
  playerStats.hp = updateMoveHpVal;//health
  playerStats.sp = updateMoveSpVal;//stamina
  playerStats.rp = updateMoveRpVal;//rot

  playerStats.att = updateMoveAttVal;//attack
  playerStats.dex = updateMoveCrtVal;//critical %
  playerStats.acc = updateMoveAccVal;//accuracy

  playerStats.def = updateMoveDefVal;//defence
  playerStats.ddg = updateMoveDdgVal;//dodge
  playerStats.spd = updateMoveSpdVal;//speed


}




function loadUserClass() {

if (playerStats[12] == 0) {
  $('#playerClassDisplay > img').attr('src', 'img/terminal/classes/fechterClass.png');
  $('#classNameDisplay').text('Fechter');
  fechterClassDesc();

}else if (playerStats[12] == 1) {
  $('#playerClassDisplay > img').attr('src', 'img/terminal/classes/turmClass.png');
  $('#classNameDisplay').text('Turm');
  turmClassDesc();

}else if (playerStats[12] == 2) {
  $('#playerClassDisplay > img').attr('src', 'img/classes/terminal/zweilichtClass.png');
  $('#classNameDisplay').text('Zweilicht');
  zweilichtClassDesc();
}
}

















/////////////////////////////////////  CITIZEN REGISTRATION   /////////////////////////////////////




function newPlayerInputReader() {
//  var playerName = document.getElementById('userNameInput').value;
//  var playerKeyCode = document.getElementById('userIncKeyInput').value;
  //playerStats.name = playerName;
// playerStats.keyCode = playerKeyCode;



//if (playerStats.name == 'playerName' || playerStats.keyCode == 'playerKeyCode') {
//  alert('Invalid Registration');

//}else if ( playerName == '' || playerKeyCode == '') {
  //alert('empty');
//  playerStats.name = "playerName";
  //playerStats.keyCode = "playerKeyCode";
//}else {
  factionSelectionLoad();
//}

}


function loadPlayerInputReader(){
//  var playerName = document.getElementById('userNameInput').value;
  //var playerKeyCode = document.getElementById('userIncKeyInput').value;



//  if (playerStats.name == playerName && playerStats.keyCode == playerKeyCode ){
//    location.assign('bunker.html');
//  }else{
  //  alert('incorrect name or code');
  //}
}













////////////////////////////////SET CLASS STATS//////////////////////////////////////////////

  function defineClassStats(){





    $('#healthStatValue').val( playerStats.health);
    $('#staminaStatValue').val( playerStats.stamina);
    $('#rotStatValue').val( playerStats.rot);

    $('#strengthStatValue').val( playerStats.strength);
    $('#dexterityStatValue').val( playerStats.dexterity);
    $('#perceptionStatValue').val( playerStats.perception);

    $('#vigorStatValue').val( playerStats.vigor);
    $('#agilityStatValue').val( playerStats.agility);
    $('#luckStatValue').val( playerStats.speed);




    playerStats.move0 = userClassArray[10];
    $('#move0').text(playerStats.move0);


    playerStatDefine();
  //  setEquippedWpnStats();
  }




  //class stats

  function setFechterStats() {
    setClassStats(fechterClassStats);
    defineClassStats();
    $('#playerDesc > figcaption > p').text('Fechter');
    zweilichtClassDesc();
  }

  function setTurmStats() {
    setClassStats(turmClassStats);
    defineClassStats();

    $('#playerDesc > figcaption > p').text('Turm');
    turmClassDesc();
  }

  function setZweilichtStats() {
    setClassStats(zweilichtClassStats);
    defineClassStats();
    //defineMoves();
    $('#playerDesc > figcaption > p').text('Zweilicht');
    fechterClassDesc();
  }







////////////////////////////////CLASS DESCRIPTIONS//////////////////////////////////////////////
function fechterClassDesc(){
  //$('#classNameDisplay').text('Fechter');
  $('#classDesc > h1').text('Fechter');
  $('#classDesc > p').text('Practitioner of the ancient Sword Art known as the Schwertertanz, he is a master duelist and a reviered martial artist. He wears micro-alloy composit-mail with lightweight ceramic plating in order to preserve mobility. He carries two twin techno-blade rapiers called the Mother and the Father.');
}

function turmClassDesc(){
  //$('#classNameDisplay').text('Turm');
  $('#classDesc > h1').text('Turm');
  $('#classDesc > p').text('A giant amongst men; by the mear sight of this behemoth he strikes fear into his enemies. His thick riveted steel plated armour is fully mechanized and powered by a Lithium Spore-Core allowing him to use it in combat effectively.');
}

function zweilichtClassDesc(){
  //$('#classNameDisplay').text('Zweilicht');
  $('#classDesc > h1').text('Zweilicht');
  $('#classDesc > p').text('Known as the knight of the night, the Zweilicht comes from an order of skilled killers. Originating from the Sporous Forest, this organized groupe of assassins has a long history of murduring on the behalf of others. Rather than sprinting into battle, the Zweilicht preferes to strike from the shadows.');
}







////////////////////////////////STAT DESCRIPTIONS//////////////////////////////////////////////

function displayInitialStatDesc() {
  $("#statDesc > figure > img").attr("src", "img/icons/stats/hpStat.png");
  $("#statDesc > .statDescription > h1").text("Health");
  $("#statDesc > .statDescription > p").text("Health governs the user's  Health-Points (HP). One Health level is equivalent to 5 HP. If the user's HP is reduced to 0, the user dies and returns back to the bunker.");

  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('HP :');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
  $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');


  $("#statDesc > .fungusDescription > h2").text("Amanita Muscaria");
  $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. It reproduces by releasing it's basidiospore into the atmosphere that get transported through air currents.");
}

  $("#statWindow1").mouseover(function(){
    displayInitialStatDesc();
  });



  $("#statWindow2").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spStat.png");
    $("#statDesc > .statDescription > h1").text("Stamina");
    $("#statDesc > .statDescription > p").text("Stamina governs the user's Stamina-Points (SP). One Stamina level is equivalent to 5 SP. Each attack costs you some SP. If the user's SP is reduced to 0, the user can no longer perform in combat until SP is restored.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('SP :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Amanita phalloides");
    $("#statDesc > .fungusDescription > p").text("The amanita phalloides, colloquially called death cap, is, like its cousin the amanita muscaria, a poisonous basidiomycota fungus belonging to the amanita genus. It one of the most lethal of all known mushrooms, which is aided by its resemblance to edible mushrooms. It's convex cap is generally green, but white variats have been found as well. Its white and scaly stem connects its cap to its swollen, sac-like base. ");
  });

  $("#statWindow3").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/rpStat.png");
    $("#statDesc > .statDescription > h1").text("Rot");
    $("#statDesc > .statDescription > p").text("Rot governs the user's Rot-Points (RP). For each Rot level, the user recieves 1% increase to offencive skills aswell as 1% decrease to defenive skills. Some spore based attacks cost RP instead of SP to perform. If the user's RP reaches 200, they die and return to the bunker.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT | CRT | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'inline');


    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(1)').text('DEF | DDG | ACC :');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text('-0.5');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').css('color' , '#EA5C9D');

    $("#statDesc > .fungusDescription > h2").text("Cortinarius violaceus");
    $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. The basidiomycosis enduced by ingestion of this higher fungus. ");
  });












  $("#statWindow4").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/attStat.png");
    $("#statDesc > .statDescription > h1").text("Strength");
    $("#statDesc > .statDescription > p").text("Strength governs the user's Attack-Damage (ATT). This trait is coveted by those who weild large melee weapons and wearing heavy mechanized armour.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Hygrocybe miniata");
    $("#statDesc > .fungusDescription > p").text("The hygroctbe miniata, commonly known as vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow5").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/dexStat.png");
    $("#statDesc > .statDescription > h1").text("Dexterity");
    $("#statDesc > .statDescription > p").text("Dexterity governs the user's Attack-Damage (ATT) & Accuracy (ACC).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Chlorophos");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow6").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/accStat.png");
    $("#statDesc > .statDescription > h1").text("Perception");
    $("#statDesc > .statDescription > p").text("This is still an empty stat");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | + 0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Entoloma Hochstetteri");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });


  $("#statWindow7").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/defStat.png");
    $("#statDesc > .statDescription > h1").text("Vigor");
    $("#statDesc > .statDescription > p").text("Perception governs the user's Accuracy (ACC) & Critical (CRT).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DEF :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Omphalotus Illudens");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow8").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/ddgStat.png");
    $("#statDesc > .statDescription > h1").text("Agility");
    $("#statDesc > .statDescription > p").text("Agility governs the user's Speed (SPD). In combat, the player with the highest SPD level recieves the FIRST-STRIKE bonus, which grants the first turn with +1 to ATT, CRT & ACC for that turn.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DDG | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | +1.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Pura");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow9").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spdStat.png");
    $("#statDesc > .statDescription > h1").text("Luck");
    $("#statDesc > .statDescription > p").text("Luck governs your Accuracy (ACC) & Dodge (DDG). In addition, each point in Luck grants you 1% chance to recieveing the FIRST-STRIKE bonus against enemies with higher speed than you.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | DDG | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.3 | +0.3 | +0.3');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Tricholomopsis Decora");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });












  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////  character creation   /////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////










  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////  Weapons   /////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////






function wpnDepotLoadWares(){
  $('#wpnDisplay1 > figcaption > .wpnQuicklvl').val( twinHygrocybeArray[3]  );
  $('#wpnDisplay1 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + twinHygrocybeArray[1]);
  $('#wpnDisplay1 > img').css('width', twinHygrocybeArray[2] + 'px');
  $('#wpnDisplay1 > figcaption > p').text(twinHygrocybeArray[0]);

  $('#wpnDisplay2 > figcaption > .wpnQuicklvl').val( ostoyaeArmArray[3]  );
  $('#wpnDisplay2 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + ostoyaeArmArray[1]);
  $('#wpnDisplay2 > img').css('width', ostoyaeArmArray[2] + 'px');
  $('#wpnDisplay2 > figcaption > p').text(ostoyaeArmArray[0]);

  $('#wpnDisplay3 > figcaption > .wpnQuicklvl').val( westEnokiStalfArray[3]  );
  $('#wpnDisplay3 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + westEnokiStalfArray[1]);
  $('#wpnDisplay3 > img').css('width', westEnokiStalfArray[2] + 'px');
  $('#wpnDisplay3 > figcaption > p').text(westEnokiStalfArray[0]);


  $('#wpnDisplay1').click(function () {
    wpnSelectArray = twinHygrocybeArray;
    wpnSelectDesc = twinHygrocybeDesc;
    setWpnStats();
  });

  $('#wpnDisplay2').click(function () {
    wpnSelectArray = ostoyaeArmArray;
    wpnSelectDesc = ostoyaeArmDesc;
    setWpnStats();
  });

  $('#wpnDisplay3').click(function () {
    wpnSelectArray = westEnokiStalfArray;
    wpnSelectDesc = westEnokiStalfDesc;
    setWpnStats();
  });

}

function setWpnStats() {
  $('#interactionPause').css('display', 'block')
  $('#wpnStatWindow').css('display', 'flex');
  $('#wpnStatWindow > span > h1').text(wpnSelectArray[0]);
  $('#wpnStatImg').attr('src','img/bunkerRooms/weaponDepotItems/' + wpnSelectArray[1]);
  $('#wpnDesc').text( wpnSelectDesc);

  $('#wpnStatLvl').val(wpnSelectArray[3]);
  $('#wpnStatAtt').val(wpnSelectArray[4]);
  $('#wpnStatCrt').val(wpnSelectArray[5]);
  $('#wpnStatAcc').val(wpnSelectArray[6]);
  $('#wpnStatDef').val(wpnSelectArray[7]);
  $('#wpnStatDdg').val(wpnSelectArray[8]);
  $('#wpnStatSpd').val(wpnSelectArray[9]);


  wpnDepotStatBtn();
}
