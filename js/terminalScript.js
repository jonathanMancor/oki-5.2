
window.addEventListener("keydown", function(eventKey) {
  terminalKeys[eventKey.keyCode] = true;
  terminalKeyExecute();
});
window.addEventListener("keyup", function(eventKey) {
  delete terminalKeys[eventKey.keyCode];
});


const terminalKeys = [];


function terminalKeyExecute() {
  //terminalKeys[0];
  if (terminalState == true) {

    if(terminalPage == 'home'){
      //TAB
      if(terminalKeys[9] ){
      }
      //SPACEBAR
      if(terminalKeys[32] ){
        terminalPage = 'charCreate';
        setTerminalPage();
      }
      //ENTER
      if(terminalKeys[13]){
        terminalPage = 'charLoad';
        setTerminalPage();
      }
      //BACKSPACE
      if(terminalKeys[8] ){
      }

    }

    if(terminalPage == 'charCreate'){
      //SPACEBAR

    }

  }else{return}
}








var terminalMenuBtnOpenStat = [0,0,];
var imgUrl = '#';







function setTerminalPage() {
  resetTerminalMenu();


  if(terminalPage == 'home' && terminalState == true){
    $('#stage').css('display', 'flex');
    $('#actionMenu :is(button:nth-child(-n+' + 2 + '))').css('display', 'flex');

    setCoreBtn(2, 0,1,2,0,   0,'New Player','Load Player', 0,       'none', 'charCreate','charLoad', 'none');

    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      terminalPage = 'charCreate';
      setTerminalPage();
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      terminalPage = 'charLoad';
      setTerminalPage();
    });
  }



  if(terminalPage == 'charCreate' && terminalState == true){
    $('#playerStatMenu').css('display', 'flex');
    $('#playerRepository').css('display', 'none');
    characterCreation();
    $('#charNameCreate').css('display','flex');
    $('#charNameLoad').css('display','none');
    setCoreBtn(2, 0,0,1,2,   0,0,'Confirm','Back');


    //buttons-------------
    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      setPlayerName();
      saveVar();
      if(playerStats.name !== '' ){
        currentRoom = 'pq';
        closeTerminal();
      }else{
        alert('name');
      }
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      terminalPage = 'home';
      setTerminalPage();
    });

  }

  if(terminalPage == 'charLoad' && terminalState == true){
    $('#playerStatMenu').css('display', 'flex');
    $('#playerRepository').css('display', 'none');
    characterLoad();
    $('#charNameCreate').css('display','none');
    $('#charNameLoad').css('display','flex');
    setCoreBtn(2, 0,0,1,2,   0,0,'Confirm', 'Back');
    //buttons-------------
    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      setPlayerName();
      saveVar();

        currentRoom = 'pq';
        closeTerminal();

    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      terminalPage = 'home';
      setTerminalPage();
    });
    //keys-------------
    //SPACE
    if(terminalKeys[13]){
      setPlayerName();
      saveVar();
      currentRoom = 'pq';
      closeTerminal();
    }
    //BACKSPACE
    if(terminalKeys[8] ){
    }
    //TAB
    if(terminalKeys[9] ){
    }
  }
  }




  if(terminalPage == 'pq' && terminalState == true){
    $('#playerStatMenu').css('display', 'flex');
    $('#playerRepository').css('display', 'none');
    characterLoad();
    $('#charNameCreate').css('display','none');
    $('#charNameLoad').css('display','flex');

    //buttons-------------
    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      setPlayerName();
      saveVar();
      currentRoom = 'pq';
      closeTerminal();

    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      terminalPage = 'home';
      setTerminalPage();
    });
    //keys-------------
    //SPACE
    if(terminalKeys[13]){
      setPlayerName();
      saveVar();
      if(playerStats.name !== ''){
        currentRoom = 'pq';
        closeTerminal();
      }
    }
    //BACKSPACE
    if(terminalKeys[8] ){
    }
    //TAB
    if(terminalKeys[9] ){
    }
  }


  if(terminalPage == 'repo' && terminalState == true){
    $('#playerRepository').css('display', 'flex');
    $('#playerStatMenu').css('display', 'none');
    setCoreBtn(3,1,'Statistics','pq',2,3,0,'0','0');
  }





  if(terminalPage == 'terminalMenu' && terminalState == true){
    $('#terminalMenu').css('display', 'flex');
    $('.terminalMenuCol > #tmBtnCntr').css('display','flex');

    $('#actionMenu :is(button:nth-child(1))').css('display', 'inline');
    $('#actionMenu > button:nth-child(1)').text('Exit');



    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'pq';
      setTerminalPage();
    });

    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'cc';
      setTerminalPage();
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'cy';
      setTerminalPage();
    });
    $('#tmCol-gouvernment > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'gov';
      setTerminalPage();
    });




    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'pq';
      closeTerminal();
    });
    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'cc';

      closeTerminal();
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'cy';
      closeTerminal();
    });
    setCoreBtn(1,0,'-','#',0,1,0,'0','0');
}




if(terminalPage == 'cc' && terminalState == true){
  imgUrl = 'img/terminal/bunkerRooms/generalsTable.png'
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  setCoreBtn(3,1,'Missions','wm',2,3,0,'0','0');
}




if(terminalPage == 'cy' && terminalState == true){
  $('#bunkerCourtyard').css('display', 'flex');
  currentRoom = 'bf';
  setCoreBtn(3,0,'0','bf',2,3,1,'Provisions','Battlefield');

}



if(terminalPage == 'gov' && terminalState == true){
  $('#bunkerGovernment').css('display', 'flex');
  currentRoom = 'bf';
  setCoreBtn(2,0,'0','bf',1,2,0,'#','#');

}









function closeTerminal(){
  resetTerminalMenu();
  terminalPage = 'initial';
  terminalState = false;
  imgUrl = '#';
  terminalKeys['empty'];
  $('#actionMenu :is(button:nth-child(-n+6))').off('click');
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  $('#stage').css('display', 'none');
  $('#terminalMenu').css('display', 'none');
  $('#playerStatMenu').css('display', 'none');
  $('#playerRepository').css('display', 'none');
  $('#bunkerCourtyard').css('display', 'none');
  $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
  $('#camera').css('display','flex');
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
  orientCameraLayers();
}









function setCoreBtn(totalBtn, tab,space,enter,bksp,   tText,sText,eText, bText){
  $('#actionMenu :is(button:nth-child(-n+' + totalBtn + '))').css('display', 'flex');

  $('#actionMenu > button:nth-child(' + tab +') > p:nth-child(1)').text(tText);
  $('#actionMenu > button:nth-child(' + tab +') > p:nth-child(2)').text('(TAB)');
  $('#actionMenu > button:nth-child(' + tab + ')').css('color', 'white');
  $('#actionMenu > button:nth-child(' + tab + ') > p:nth-child(-n+2)').css('color', 'white');

  $('#actionMenu > button:nth-child(' + space +') > p:nth-child(1)').text(sText);
  $('#actionMenu > button:nth-child(' + space +') > p:nth-child(2)').text('(SACE)');
  $('#actionMenu > button:nth-child(' + space + ')').css('color', palette.yellowHex);
  $('#actionMenu > button:nth-child(' + space + ') > p:nth-child(-n+2)').css('color', palette.yellowHex);

  $('#actionMenu > button:nth-child(' + enter +') > p:nth-child(1)').text(eText);
  $('#actionMenu > button:nth-child(' + enter +') > p:nth-child(2)').text('(ENTER)');
  $('#actionMenu > button:nth-child(' + enter + ')').css('color', palette.greenHex);
  $('#actionMenu > button:nth-child(' + enter + ') > p:nth-child(-n+2)').css('color', palette.greenHex);

  $('#actionMenu > button:nth-child(' + bksp +') > p:nth-child(1)').text(bText);
  $('#actionMenu > button:nth-child(' + bksp +') > p:nth-child(2)').text('(BKSP)');
  $('#actionMenu > button:nth-child(' + bksp + ')').css('color', palette.pinkHex);
  $('#actionMenu > button:nth-child(' + bksp + ') > p:nth-child(-n+2)').css('color', palette.pinkHex);



}








function resetTerminalMenu(){
  for (var i = 0; i < 7; i++) {
    $('#actionMenu > button:nth-child(' + i +')').css('color','white');
  }
    terminalKeys['empty'];
    $('#camera').css('display','none');
    $('#playerStatMenu').css('display', 'none');
    $('#playerRepository').css('display', 'none');
    $('#stage').css('display', 'none');
    $('#terminalMenu').css('display', 'none');
    $('#bunkerCourtyard').css('display', 'none');
    imgUrl = '#';
    $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');

    $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
    $('#actionMenu :is(button:nth-child(-n+4))').off('click');

}
