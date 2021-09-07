
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
    if(terminalKeys[0]){
    }

    if(terminalPage == 'home'){
      //TAB
      if(terminalKeys[9] ){
      }
      //SPACEBAR
      else if(terminalKeys[32] ){
        setTerminalPage('charCreate');
      }
      //ENTER
      else if(terminalKeys[13]){
        setTerminalPage('charLoad');
      }
      //BACKSPACE
      else if(terminalKeys[8] ){
      }

    }else if(terminalPage == 'charCreate'){
        //TAB
        if(terminalKeys[9] ){
        }
        //SPACEBAR
        else if(terminalKeys[32] ){
          setTerminalPage('charCreate');
        }
        //ENTER
         if(terminalKeys[13]){
          setPlayerName();
          saveVar();
          if(playerStats.name !== '' ){
            currentRoom = 'pq';
            closeTerminal('pq',-5,-5);
          }else{
            alert('name');
          }
        }
        //BACKSPACE
        else if(terminalKeys[8] ){
          setTerminalPage('home');
        }

  }else if(terminalPage == 'charLoad'){
    //TAB
    if(terminalKeys[9] ){
    }
    //SPACEBAR
    else if(terminalKeys[32] ){
      setTerminalPage('charCreate');
    }
    //ENTER
    else if(terminalKeys[13]){
      setPlayerName();
      saveVar();
        currentRoom = 'pq';
        closeTerminal('pq',-5,-5);
    }
    //BACKSPACE
    else if(terminalKeys[8] ){
      setTerminalPage('home');
    }

}else if(terminalPage == 'statistics'){
  //TAB
  if(terminalKeys[9] ){
    setTerminalPage('repo');
  }
  //SPACEBAR
  else if(terminalKeys[32] ){
    setTerminalPage('terminalMenu');
  }
  //ENTER
  else if(terminalKeys[13]){

  }
  //BACKSPACE
  else if(terminalKeys[8] ){
    closeTerminal('','','');
  }

}else if(terminalPage == 'repo'){
  //TAB
  if(terminalKeys[9] ){
    setTerminalPage('statistics');
  }
  //SPACEBAR
  else if(terminalKeys[32] ){
    setTerminalPage('terminalMenu');
  }
  //ENTER
  else if(terminalKeys[13]){

  }
  //BACKSPACE
  else if(terminalKeys[8] ){
    closeTerminal('','','');
  }

}else if(terminalPage == 'terminalMenu'){
  //TAB
  if(terminalKeys[9] ){
  }
  //SPACEBAR
  else if(terminalKeys[32] ){
  }
  //ENTER
  else if(terminalKeys[13]){

  }
  //BACKSPACE
  else if(terminalKeys[8] ){
    closeTerminal('','','');
  }
}
  else if(terminalPage == 'cc'){
    //TAB
    if(terminalKeys[9] ){
    }
    //SPACEBAR
    else if(terminalKeys[32] ){
    }
    //ENTER
    else if(terminalKeys[13]){

    }
    //BACKSPACE
    else if(terminalKeys[8] ){
      closeTerminal('','','');
    }
}






  //else{return}
}else if(terminalState == false){
  //ENTER
  if(terminalKeys[13] && terminalPage == 'terminal'){
    accessTerminal('statistics');
  }
  else if(terminalKeys[13] && terminalPage == 'commandTable'){
    accessTerminal('cc');
  }
  else if(terminalKeys[13] && currentRoom == 'elev00'){
    currentRoom = 'elev01';
    tileCases(elev01MapLayout, elev01MapParameter);
    objectTileCases(elevObjectLayout, elevObjectParameter);

  }
  else if(terminalKeys[13] && currentRoom == 'elev01'){
    currentRoom = 'elev00';
    tileCases(elev00MapLayout, elev00MapParameter);
    objectTileCases(elevObjectLayout, elevObjectParameter);
  }
}
}







var terminalMenuBtnOpenStat = [0,0,];
var imgUrl = '#';







function setTerminalPage(page) {
  resetTerminalMenu();
  terminalKeys[0];
  if(page !== '0'){
    terminalPage = page
  }else{
    //terminalPage = page;
  }
  terminalLocation();
  if(terminalPage == 'home' && terminalState == true){
    $('#stage').css('display', 'flex');
    $('#actionMenu :is(button:nth-child(-n+' + 2 + '))').css('display', 'flex');

    setCoreBtn(2, 0,1,2,0,   0,'New Player','Load Player', 0,       'none', 'charCreate','charLoad', 'none');

    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      setTerminalPage('charCreate');
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      setTerminalPage('charLoad');
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
        closeTerminal('pq',-5,-5);
      }else{
        alert('name');
      }
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      setTerminalPage('home');
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
      closeTerminal('pq',-5,-5);
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      setTerminalPage('home');
    });
  }





  if(terminalPage == 'statistics' && terminalState == true){
    $('#playerStatMenu').css('display', 'flex');
    $('#playerRepository').css('display', 'none');
    characterLoad();
    $('#charNameCreate').css('display','none');
    $('#charNameLoad').css('display','flex');
    setCoreBtn(3, 1,2,0,3,   'Repository','Menu',0, 'Close');
    //buttons-------------
    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      setTerminalPage('repo');
    });
    $('#actionMenu > button:nth-child(' + 2 + ')').click(function () {
      setTerminalPage(terminalMenu);
    });
    $('#actionMenu > button:nth-child(' + 3 + ')').click(function () {
      closeTerminal('','','');
    });


  }


  if(terminalPage == 'repo' && terminalState == true){
    $('#playerRepository').css('display', 'flex');
    $('#playerStatMenu').css('display', 'none');
    setCoreBtn(3, 1,2,0,3,   'Statitics','Menu',0, 'Close');
  }





  if(terminalPage == 'terminalMenu' && terminalState == true){
    $('#terminalMenu').css('display', 'flex');
    $('.terminalMenuCol > #tmBtnCntr').css('display','flex');



    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(1)').click(function () {
      setTerminalPage('statistics');
    });

    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(1)').click(function () {
      setTerminalPage('cc');
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(1)').click(function () {
      setTerminalPage('cy');
    });
    $('#tmCol-gouvernment > span:nth-child(2) > button:nth-child(1)').click(function () {
      setTerminalPage('gov');
    });




    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(2)').click(function () {
      closeTerminal('pq',-6,-2.5);
    });
    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(2)').click(function () {
      closeTerminal('cc',-10,-2.5);
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(2)').click(function () {
      closeTerminal('','','');
    });
    setCoreBtn(1, 0,0,0,1,   0,0,0, 'Close');
    //buttons-------------
    $('#actionMenu > button:nth-child(' + 1 + ')').click(function () {
      closeTerminal('','','');
    });
}




if(terminalPage == 'cc' && terminalState == true){
  imgUrl = 'img/terminal/bunkerRooms/generalsTable.png'
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  setCoreBtn(3, 1,2,0,3,   'Map Room','Missions',0,'Back');
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

}





function closeTerminal(cR,x,y){
  resetTerminalMenu();
  terminalPage = 'initial';
  terminalState = false;
  terminalLocation();
  $('#canvasHp').css('display','flex')
  $('#canvasSp').css('display','flex')
  $('#canvasRp').css('display','flex');
  imgUrl = '#';
  $('#actionMenu :is(button:nth-child(-n+6))').off('click');
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  $('#stage').css('display', 'none');
  $('#terminalMenu').css('display', 'none');
  $('#playerStatMenu').css('display', 'none');
  $('#playerRepository').css('display', 'none');
  $('#bunkerCourtyard').css('display', 'none');
  $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
  $('#camera').css('display','flex');
  if (cR !== '' || x !== ''){
    currentRoom = cR;
    roomDisplace = [x,y];
  }else {
    return
  }


  if(currentRoom == 'pq'){
    tileCases(pqMapLayout, pqMapParameter);
    objectTileCases(pqObjectLayout, pqObjectParameter);
    //roomDisplace = [-6,-2.5];
  }else if (currentRoom == 'cc') {
    tileCases(ccMapLayout, ccMapParameter);
    objectTileCases(ccObjectLayout, ccObjectParameter);
    //roomDisplace = [-10,-2.5];
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
  $('#actionMenu > button:nth-child(' + tab + ')').css('color', palette.purpleHex);
  $('#actionMenu > button:nth-child(' + tab + ') > p:nth-child(-n+2)').css('color', palette.purpleHex);

  $('#actionMenu > button:nth-child(' + space +') > p:nth-child(1)').text(sText);
  $('#actionMenu > button:nth-child(' + space +') > p:nth-child(2)').text('(SPACE)');
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












var terminalLocationCrIndex = '';
var terminalLocationTpIndex = '';
var terminalLocationPlayerName = 'Anon';

//Termianl Location Index-----------
function terminalLocation() {

  if (playerStats.name !== ''){
    terminalLocation = playerStats.name;
  }


  if (terminalState == false) {
    findCurrentRoom();
    $('#currentRoomIndex > p').text('file:///User/' + terminalLocationPlayerName + '/oki-5-2.2/Location/' + terminalLocationCrIndex + '/');
  }else if (terminalState == true) {
    findCurrentRoom();
    findTerminalPage();
    $('#currentRoomIndex > p').text('file:///User/' + terminalLocationPlayerName + '/oki-5-2.2/Location/' + terminalLocationCrIndex + '/Terminal/' + terminalLocationTpIndex + '/');
  }
}




function findCurrentRoom() {
  if (currentRoom == 'pq') {
    terminalLocationCrIndex = 'PrivateQuarters';
  }else if (currentRoom == 'commandCenter') {
    terminalLocationCrIndex = 'commandCenter';
  }else if (currentRoom == 'elev00') {
    terminalLocationCrIndex = 'elev00';
  }else if (currentRoom == 'elev01') {
    terminalLocationCrIndex = 'elev01';
  }else{
    terminalLocationCrIndex = '#';
  }
}

function findTerminalPage() {
  if (terminalPage == 'initial') {
    terminalLocationTpIndex = 'hi';
  }else if (terminalPage == 'home'){
    terminalLocationTpIndex = 'home';
  }else if (terminalPage == 'statistics'){
    terminalLocationTpIndex = 'statistics';
  }else{
    terminalLocationTpIndex = '#';
  }
}
