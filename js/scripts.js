


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  INDEX.HTML   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// onload events=========================================================
function indexOnload(){
  basicUserInfoLoad();

}




//blank----------------------------------------------
function indexBlankLoad() {
  $('#playerStatMenu').css('display', 'none');
  $('#decisonTree').css('display', 'none');
  $('#treeDescCntr').css('display', 'none');
  $('#factionSelectionScreen').css('display', 'none');
  $('#userBasicInfo').css('display','none');
  allBtnBlank();
}


//basic user info
function basicUserInfoLoad() {
  indexBlankLoad();
  loadVar();
  $('#userBasicInfo').css('display','inline-block');
  basicUserInfoMenu();
}



//faction selection
function factionSelectionLoad() {
  indexBlankLoad();
  $('#factionSelectionScreen').css('display','flex');
//faction 1
  $('#facPort1 > img').attr('src','img/factions/hydnellischeKaiserreichSigil.png');
  $('#facPort1 > figcaption').text('Hydnellische Kaiserreich');

  $('#facPort1').click(function () {
    indexBlankLoad();
    charCreationLoad();
  });
//faction 2
  $('#facPort2 > img').attr('src','img/factions/clathrusUnionSigil.png');
  $('#facPort2 > figcaption').text('Clathrus Union');
//faction 3
  $('#facPort3 > img').attr('src','img/factions/tremellaStateSigil.png');
  $('#facPort3 > figcaption').text('Tremella State');
//faction 4
  $('#facPort4 > img').attr('src','img/factions/pharrisLegionSigil.png');
  $('#facPort4 > figcaption').text('Pharris Legion');
//faction 5
  $('#facPort5 > img').attr('src','img/factions/blackCapConfederacySigil.png');
  $('#facPort5 > figcaption').text('Black Cap Confederacy');


}



//character Creation load----------------------------------
function charCreationLoad() {
  toggleStatAllocationBtn();
  indexBlankLoad();
  allBtnBlank();
  $('#playerStatMenu').css('display', 'block');
  $('#statSaveBtnCntr').css('display', 'none');
  $('#playerClassDisplay > img').attr('src', 'img/terminal/classes/fechterClass.png');
  $('title').html('User Selection');
  setFechterStats();
  playerStatDefine();
  loadUserClass();
  displayInitialStatDesc();
  charCreationMenu();
  chooseClassBtns();
}

function decisionTreeLoad() {
  indexBlankLoad();
  $('#playerStatMenu').css('display', 'none');
  $('#decisonTree, #decisonTree > div').css('display', 'flex');
  $('title').html('Decision Tree');
  decisonTreeMenu();
}

function startGameLoad() {
  indexBlankLoad();

}




//class gallery=============================================================================
var classGallery = ['img/terminal/classes/fechterClass.png', 'img/terminal/classes/turmClass.png', 'img/terminal/classes/zweilichtClass.png'];
var classValue = 0;
function chooseClassBtns() {


    $('#nextClass').click(function () {
      classValue++;
      if (classValue==classGallery.length) classValue=0;
      $('#playerClassDisplay > img').attr('src', classGallery[classValue]);
      detClassDesc();
      playerStats[12] = classValue;
    });

    $('#prevClass').click(function () {
      if (classValue == 0) {
        classValue = 3;
      }
      classValue--;
      $('#playerClassDisplay > img').attr('src', classGallery[classValue]);
      detClassDesc();
    });
}






//This function calls the correct class info
function detClassDesc() {
  if ( classValue == 0) {
    setFechterStats();
    playerStatDefine();
  }
  else if (classValue == 1) {
    setTurmStats();
    playerStatDefine();
  }
  else if (classValue == 2) {
    setZweilichtStats();
    playerStatDefine();
  }
}








//action button Menus========================================================================
function basicUserInfoMenu() {
  $('#actionBtnCntr').css('display', 'flex')
  if (playerStats[1] == 'playerName' || playerStats[2] == 'playerKeyCode') {
   $('#actionBtnCntr :is(button:nth-child(1))').css('display', 'inline');
   $('#actionBtnCntr > button:nth-child(1)').html('new');
   $('#actionBtnCntr > button:nth-child(1)').click(function () {
     newPlayerInputReader();
   });
 }else{
   $('#actionBtnCntr :is(button:nth-child(-n+2))').css('display', 'inline');
   $('#actionBtnCntr > button:nth-child(1)').html('Continue');
   $('#actionBtnCntr > button:nth-child(1)').click(function () {
     loadPlayerInputReader();
   });

   $('#actionBtnCntr > button:nth-child(2)').html('Clear Save');
   $('#actionBtnCntr > button:nth-child(2)').click(function () {
     clearVar();
     location.reload();
   });
 }





}


function charCreationMenu() {
  $('#actionBtnCntr').css('display', 'flex')
  $('#actionBtnCntr :is(button:nth-child(-n+3))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('Decision Tree');
  $('#actionBtnCntr > button:nth-child(2)').html('Oki');
  $('#actionBtnCntr > button:nth-child(3)').html('Help');

  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    decisionTreeLoad();
  });
  $('#actionBtnCntr > button:nth-child(2)').click(function () {
    saveVar();
    location.assign("okiCanvas.html");
  });
}

function decisonTreeMenu() {
  $('#actionBtnCntr :is(button:nth-child(-n+3))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('User Selection');
  $('#actionBtnCntr > button:nth-child(2)').html('Oki');
 $('#actionBtnCntr > button:nth-child(3)').html('Help');

  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    charCreationLoad();
   });
}


// set start game button
function setStartGameBtn() {
  $('#actionBtnCntr > button:nth-child(2)').click(function () {

  });
}




/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  BUNKER.HTML   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


var bunkerRoomTracker = 'initial';

// onload events=========================================================

function bunkerOnload() {
  $('title').html('Bunker');
  setBunkerRooms();

}




function setBunkerRooms() {

  $('#stage').css('background', "0");
  $('#stage').css('background-color', "black");

  $('#bunkerMap').css('display', 'none');
  $('#commCenter').css('display', 'none');
  $('#playerStatMenu').css('display', 'none');
  $('#wpnDepotRoom').css('display', 'none');

  $('#actionBtnCntr').css('display', 'none');
  $('#actionBtnCntr :is(button:nth-child(-n+6))').css('display', 'none');

  $('#bunkerMap :is(button:nth-child(-n+4))').off('click');
  $('#actionBtnCntr :is(button:nth-child(-n+4))').off('click');




  if (bunkerRoomTracker == 'initial') {
    $('#bunkerMap').css('display', 'block');



    $('#bnkrCCMap').click(function () {
      bunkerRoomTracker = 'commandCenter';
      setBunkerRooms();
    });

    $('#bnkrPQMap').click(function () {
      bunkerRoomTracker = 'privateQuarters';
      setBunkerRooms();
    });

    $('#bnkrWpnDepotMap').click(function () {
      bunkerRoomTracker = 'weaponDepot';
      setBunkerRooms();
    });
  }


  if (bunkerRoomTracker == 'commandCenter') {
    $('#stage').css('background-image', "url(" + 'img/bunkerRooms/generalsTable.png' + ")");
    $('#stage').css('background-repeat', 'no-repeat')
    $('#stage').css('background-size', '1100px auto')
    $('#stage').css('background-position', 'center bottom')
    $('#commCenter').css('display', 'block');
    $('#worldMap').css('display', 'none');


    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+4))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('Map Room');
    $('#actionBtnCntr > button:nth-child(3)').html('Foreign Policy');
    $('#actionBtnCntr > button:nth-child(4)').html('Internal Affairs');



    $('#warRoomBtn').click(function () {
      $('#ministerBtnCntr').css('display', 'none');
      $('#openBrief').css('display', 'inline');
      mission1Desc();

      $('#acceptMissionBtn').click(function () {
        location.assign("duel.html");
      });
      $('#declineMissionBtn').click(function () {
        $('#openBrief').css('display', 'none');
        $('#ministerBtnCntr').css('display', 'flex');
      });
    });




    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'initial';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(2)').click(function () {
      bunkerRoomTracker = 'worldMap';
      setBunkerRooms();
    });
  }

  if (bunkerRoomTracker == 'worldMap'){
    $('#stage').css('background', "0");
    $('#stage').css('background-color', "black");

    $('.mapDisplay > figure').css('background-image', "url(" + 'img/bunkerRooms/maps/worldMap.png' + ")");
    $('.mapDisplay > figure').css('background-repeat', 'no-repeat')
    $('.mapDisplay > figure').css('background-size', 'cover ')
  //  $('.mapDisplay > figure').css('background-position', 'center')
    //$('.mapDisplay  img').attr('src', 'img/bunkerRooms/maps/worldMap.png');
    $('#worldMap').css('display', 'flex');
    $('#commCenter').css('display', 'none');





    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+4))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('World Map');
    $('#actionBtnCntr > button:nth-child(3)').html('Faction Map');
    $('#actionBtnCntr > button:nth-child(4)').html('Tactical Map');




    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'commandCenter';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(3)').click(function () {
      bunkerRoomTracker = 'factionMap';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(4)').click(function () {
      bunkerRoomTracker = 'tacticalMap';
      setBunkerRooms();
    });
  }


  if (bunkerRoomTracker == 'factionMap'){
    $('#stage').css('background', "0");
    $('#stage').css('background-color', "black");

    $('.mapDisplay > figure').css('background-image', "url(" + 'img/bunkerRooms/maps/factionMap.png' + ")");
    $('.mapDisplay > figure').css('background-repeat', 'no-repeat')
    $('.mapDisplay > figure').css('background-size', 'cover ')
  //  $('.mapDisplay > figure').css('background-position', 'center')
    //$('.mapDisplay  img').attr('src', 'img/bunkerRooms/maps/worldMap.png');
    $('#worldMap').css('display', 'flex');
    $('#commCenter').css('display', 'none');





    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+4))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('World Map');
    $('#actionBtnCntr > button:nth-child(3)').html('Faction Map');
    $('#actionBtnCntr > button:nth-child(4)').html('Tactical Map');




    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'commandCenter';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(2)').click(function () {
      bunkerRoomTracker = 'worldMap';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(4)').click(function () {
      bunkerRoomTracker = 'tacticalMap';
      setBunkerRooms();
    });
  }





  if (bunkerRoomTracker == 'tacticalMap'){
    $('#stage').css('background', "0");
    $('#stage').css('background-color', "black");

    $('.mapDisplay > figure').css('background-image', "url(" + 'img/bunkerRooms/maps/tacticalMap.png' + ")");
    $('.mapDisplay > figure').css('background-repeat', 'no-repeat')
    $('.mapDisplay > figure').css('background-size', 'cover ')
  //  $('.mapDisplay > figure').css('background-position', 'center')
    //$('.mapDisplay  img').attr('src', 'img/bunkerRooms/maps/worldMap.png');
    $('#worldMap').css('display', 'flex');
    $('#commCenter').css('display', 'none');





    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+4))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('World Map');
    $('#actionBtnCntr > button:nth-child(3)').html('Faction Map');
    $('#actionBtnCntr > button:nth-child(4)').html('Tactical Map');




    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'commandCenter';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(2)').click(function () {
      bunkerRoomTracker = 'worldMap';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(3)').click(function () {
      bunkerRoomTracker = 'factionMap';
      setBunkerRooms();
    });
  }










////////////////////////Private Quarters////////////////////////////////////

  if (bunkerRoomTracker == 'privateQuarters'){
    $('#stage').css('background-image', "url(" + 'img/bunkerRooms/privateQuarters.png' + ")");
    $('#stage').css('background-repeat', 'no-repeat');
    $('#stage').css('background-size', '1100px auto');
    $('#stage').css('background-position', 'center');

    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+3))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('Terminal');
    $('#actionBtnCntr > button:nth-child(3)').html('Bed');


    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'initial';
      setBunkerRooms();
    });

    $('#actionBtnCntr > button:nth-child(2)').click(function () {
      bunkerRoomTracker = 'terminal';
      setBunkerRooms();

    });

    $('#actionBtnCntr > button:nth-child(3)').click(function () {
      alert('You are now full rested');
    });
  }

  if (bunkerRoomTracker == 'terminal'){
    terminalLoad();
    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(1))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');

    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'privateQuarters';
      setBunkerRooms();
    });
  }



////////////////////////Weapons Depot////////////////////////////////////

  if (bunkerRoomTracker == 'weaponDepot'){
    $('#stage').css('background-image', "url(" + 'img/bunkerRooms/weaponDepot.png' + ")");
    $('#stage').css('background-repeat', 'no-repeat');
    $('#stage').css('background-size', '2000px auto');
    $('#stage').css('background-position', 'center top');

    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(-n+2))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');
    $('#actionBtnCntr > button:nth-child(2)').html('View Wares');



    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'initial';
      setBunkerRooms();
    });
    $('#actionBtnCntr > button:nth-child(2)').click(function () {
      bunkerRoomTracker = 'weaponDepotWares';
      setBunkerRooms();
    });
  }

  if (bunkerRoomTracker == 'weaponDepotWares'){
    $('#wpnDepotRoom').css('display', 'inline-block');
    wpnDepotLoadWares();

    $('#actionBtnCntr').css('display', 'flex');
    $('#actionBtnCntr :is(button:nth-child(1))').css('display', 'inline');
    $('#actionBtnCntr > button:nth-child(1)').html('Exit');

    $('#actionBtnCntr > button:nth-child(1)').click(function () {
      bunkerRoomTracker = 'weaponDepot';
      setBunkerRooms();
    });
  }
}





function terminalLoad() {
  $('#stage').css('background', "0");
  $('#stage').css('background-color', "black");
  $('#playerStatMenu').css('display', 'flex');
  loadVar();
  setPlayerStats();
  playerStatDefine();
  loadUserClass();
  displayInitialStatDesc();
  toggleStatAllocationBtn();
}

























//commandCenter---------------------------------------------------------------------
function commCenterLoad() {
  bunkerBlankLoad();

  commCenterBtnMenu();

  $('#warRoomBtn').click(function () {
    $('#ministerBtnCntr').css('display', 'none');
    $('#openBrief').css('display', 'inline');
    mission1Desc();

    $('#acceptMissionBtn').click(function () {
      location.assign("duel.html");
    });
    $('#declineMissionBtn').click(function () {
      $('#openBrief').css('display', 'none');
      $('#ministerBtnCntr').css('display', 'flex');
    });
  });
}





//private Quarters---------------------------------------------------------------------
function privateQuartersLoad(){
  bunkerBlankLoad();
  $('#stage').css('background-image', "url(" + 'img/bunkerRooms/privateQuarters.png' + ")");
  $('#stage').css('background-repeat', 'no-repeat')
  $('#stage').css('background-size', '1100px auto')
  $('#stage').css('background-position', 'center')
  privateQuartersBtnMenu();
}







//toggles buttons based on spores available to allocate



//Weapons Depot---------------------------------------------------------------------


function wpnDepotLoad() {
  bunkerBlankLoad();
  $('#stage').css('background-image', "url(" + 'img/bunkerRooms/weaponDepot.png' + ")");
  $('#stage').css('background-repeat', 'no-repeat')
  $('#stage').css('background-size', '2000px auto')
  $('#stage').css('background-position', 'center top')
  wpnDepotBtnMenu();
}


//this gives funtionality to buttons in weapon display
function wpnDepotStatBtn(){
//upgrade buttons

//equip button
$('#wpnDispEquip').click(function () {

});


//close button
  $('#wpnDispClose').click(function () {
    $('#wpnStatWindow').css('display', 'none');
    $('#interactionPause').css('display', 'none');
  });
}

//action button Menus========================================================================
function allBtnBlank() {
  $('#actionBtnCntr > button').css('display', 'none');
}

//level2--------------------------------
//command center
function commCenterBtnMenu() {
  $('#actionBtnCntr').css('display', 'flex');
  $('#actionBtnCntr :is(button:nth-child(-n+4))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('Exit');
  $('#actionBtnCntr > button:nth-child(2)').html('Map Room');
  $('#actionBtnCntr > button:nth-child(3)').html('War Room');
  $('#actionBtnCntr > button:nth-child(4)').html('Diplomacy Room');

  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    $('#stage').css('background', 'black');
    bunkerMapLoad();
  });
}

//private Quarters
function privateQuartersBtnMenu() {
  $('#actionBtnCntr').css('display', 'flex');
  $('#actionBtnCntr :is(button:nth-child(-n+3))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('Exit');
  $('#actionBtnCntr > button:nth-child(2)').html('Terminal');
  $('#actionBtnCntr > button:nth-child(3)').html('Bed');


  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    $('#stage').css('background', 'black');
    bunkerMapLoad();
  });
  $('#actionBtnCntr > button:nth-child(2)').click(function () {
    terminalLoad();
    terminalBtnMenu();
    $('#playerStatMenu').css('display', 'flex');
  });
}

function terminalBtnMenu() {
  $('#actionBtnCntr').css('display', 'flex');
  $('#actionBtnCntr :is(button:nth-child(-n+3))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('Exit');
  $('#actionBtnCntr > button:nth-child(2)').html('Oki');
  $('#actionBtnCntr > button:nth-child(3)').html('Clear');


  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    privateQuartersLoad();
  });
  $('#actionBtnCntr > button:nth-child(2)').click(function () {
    saveVar();
    $('#playerStatMenu').css('display', 'block');
  });
  $('#actionBtnCntr > button:nth-child(3)').click(function () {
    loadVar();
    toggleStatAllocationBtn();
    setPlayerStats();
    $('#playerStatMenu').css('display', 'block');
  });
}

//level3--------------------------------
//weaponDepot
function wpnDepotBtnMenu() {
  $('#actionBtnCntr').css('display', 'flex');
  $('#actionBtnCntr :is(button:nth-child(-n+2))').css('display', 'inline');
  $('#actionBtnCntr > button:nth-child(1)').html('Exit');
  $('#actionBtnCntr > button:nth-child(2)').html('View Wares');



  $('#actionBtnCntr > button:nth-child(1)').click(function () {
    $('#stage').css('background', 'black');
    bunkerMapLoad();
  });
  $('#actionBtnCntr > button:nth-child(2)').click(function () {
    $('#wpnDepotRoom').css('display', 'inline-block');


  });
}








/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  DUEL.HTML   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////



//mission 1: Scout our borders

var missionDescriptions = [];
missionDescriptions[0] = "Our Intelligence units have reported hostile actors crossing our border from Morel Creek heading towards Twin-Truffle Town at night. Unfortunatley We were unable to identify on who's behalf they were acting, but we cannot wait for whoever it is to stage a full on invasion. This could escalate into a border conflict, which could give other factions agency to act against us. Find who is crossing the border and eliminate all trespassers. Show them the might of the Empire. No one can know that they made it onto our land land. Prisoners are not necessary. Glory to the New Amanite Empire!"






function mission1Desc() {
  $('#openBrief > article > h1').html('Troubles by the Score')
  $('#openBrief > article > p').html(missionDescriptions[0])
}



function mission1TestPlay(){


}
