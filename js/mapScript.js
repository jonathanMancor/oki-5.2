var rotlandLegendVar = [];
  rotlandLegendVar[0] = 'The Rotpit',
  rotlandLegendVar[1] = 'The earth and the air die there where the rot sets in. It eats away at the earth as its ever expanding mass seeps deep into the ground.'
  rotlandLegendVar[2] = 'Factionless';
  rotlandLegendVar[3] = '';
  rotlandLegendVar[4] = 'The poisonous nature of this environment makes this region uninhabitable';



var amaniteValleyLegendVar = [];
  amaniteValleyLegendVar[0] = 'Amanite Valley'
  amaniteValleyLegendVar[1] = 'This is one of the most strategic positions in the Rotland. The sourrounding mountains provide natural defencive walls leaving the only entry point by the bay-shore.';
  amaniteValleyLegendVar[2] = 'Hydnellische Kaiserreich';
  amaniteValleyLegendVar[3] = 'hydnellischeKaiserreichSigil.png';
  amaniteValleyLegendVar[4] = 'This militaristic state has a long tradition of war.';


var fungalJungleLegendVar = [];
  fungalJungleLegendVar[0] = 'Fungal Jungle';
  fungalJungleLegendVar[1] = 'This dence cluster of giant mushrooms stits in the center of the Rotland. Within this ecosystem, the different type of mushrooms fight eachother for dominance. Because of the hightend state of survivalism, the spores that the mushrooms release have also developed self defence mechanisms, that when injested can lead to strange and painful deaths.';
  fungalJungleLegendVar[2] = 'Factionless';
  fungalJungleLegendVar[3] = '';
  fungalJungleLegendVar[4] = 'The poisonous nature of this environment makes this region uninhabitable';


var pharrisLegionLegendVar = [];
  pharrisLegionLegendVar[0] = 'West-Valley';
  pharrisLegionLegendVar[1] = 'The West Valley is a cornered region of the Rotland. Although defenively strategic, its prone to strong winds and destructive sporestorms. This is caused by the mountains that funnel all the air into the region.';
  pharrisLegionLegendVar[2] = 'Pharris Legion';
  pharrisLegionLegendVar[3] = 'pharrisLegionSigil.png';
  pharrisLegionLegendVar[4] = 'Warriors of Wind they call themselves. They follow the the ideals of their founder, a man named Arthur Pharris who saught to unify the Rotland under his vision. What they dont have in industrial resources they make up in military prowess.';

var tremellaStateLegendVar = [];
  tremellaStateLegendVar[0] = 'Fungal Shore';
  tremellaStateLegendVar[1] = 'Along the shores of the bay, ajacent to the Fungal Jungle are some of the fertile lands as long as the wind doesnt blow north. When it does, all the spores from the jungle south get transported to the beach.';
  tremellaStateLegendVar[2] = 'Tremella State';
  tremellaStateLegendVar[3] = 'tremellaStateSigil.png';
  tremellaStateLegendVar[4] = 'Warriors of Wind they call themselves. They follow the the ideals of their founder, a man named Arthur Pharris who saught to unify the Rotland under his vision. What they dont have in industrial resources they make up in military prowess.';


var clathrusUnionLegendVar = [];
  clathrusUnionLegendVar[0] = 'Mushdunes';
  clathrusUnionLegendVar[1] = 'Along the shores of the bay, ajacent to the Fungal Jungle are some of the fertile lands as long as the wind doesnt blow north. When it does, all the spores from the jungle south get transported to the beach.';
  clathrusUnionLegendVar[2] = 'Clathrus Union';
  clathrusUnionLegendVar[3] = 'clathrusUnionSigil.png';
  clathrusUnionLegendVar[4] = 'Warriors of Wind they call themselves. They follow the the ideals of their founder, a man named Arthur Pharris who saught to unify the Rotland under his vision. What they dont have in industrial resources they make up in military prowess.';


var blackCapConfederacyLegendVar = [];
  blackCapConfederacyLegendVar[0] = 'South Dunes';
  blackCapConfederacyLegendVar[1] = 'Along the shores of the bay, ajacent to the Fungal Jungle are some of the fertile lands as long as the wind doesnt blow north. When it does, all the spores from the jungle south get transported to the beach.';
  blackCapConfederacyLegendVar[2] = 'Black Cap Confederacy';
  blackCapConfederacyLegendVar[3] = 'blackCapConfederacySigil.png';
  blackCapConfederacyLegendVar[4] = 'Warriors of Wind they call themselves. They follow the the ideals of their founder, a man named Arthur Pharris who saught to unify the Rotland under his vision. What they dont have in industrial resources they make up in military prowess.';






function worldMapButtons(){
  $('#rotlandMapSect').hover(function(){
    legendVar = rotlandLegendVar;
    setMapLegend();
    }, function(){
      return
    });

  $('#northDuneMapSect').hover(function(){
    legendVar = rotlandLegendVar;
    setMapLegend();
    }, function(){
      return
    });
  $('#northCoastMapSect').mouseover(function(){});
  $('#northOceanMapSect').mouseover(function(){});











  $('#westValleyMapSect').hover(function(){
    legendVar = pharrisLegionLegendVar;
    setMapLegend();
    }, function(){
      return
    });

  $('#sulfurValleyMapSect').mouseover(function(){});

  $('#fungalShoreMapSect').hover(function(){
    legendVar = tremellaStateLegendVar;
    setMapLegend();
    }, function(){
      return
    });

  $('#mushDunesMapSect').hover(function(){
    legendVar = clathrusUnionLegendVar;
    setMapLegend();
    }, function(){
      return
    });

  $('#longCoastMapSect').mouseover(function(){});











  $('#northFlMapSect').hover(function(){
    legendVar = fungalJungleLegendVar;
    setMapLegend();
    }, function(){
      return
    });
  $('#westFlMapSect').hover(function(){
    legendVar = fungalJungleLegendVar;
    setMapLegend();
    }, function(){
      return
    });
  $('#fungalJungleMapSect').hover(function(){
    legendVar = fungalJungleLegendVar;
    setMapLegend();
    }, function(){
      return
    });










  $('#amaniteValleyMapSect').hover(function(){
    legendVar = amaniteValleyLegendVar;
    setMapLegend();
    }, function(){
      return
    });







  $('#brokenHillMapSect').mouseover(function(){});
  $('#southDuneMapSect').hover(function(){
    legendVar = blackCapConfederacyLegendVar;
    setMapLegend();
    }, function(){
      return
    });
  $('#islandMapSect').mouseover(function(){});
  $('#southCoastMapSect').mouseover(function(){});
  $('#longPeninsulaMapSect').mouseover(function(){});
}









function setMapLegend() {
  $('#mapLegend > h1:nth-child(1)').text(legendVar[0]);
  $('#mapLegend > p:nth-child(2)').text(legendVar[1]);
  $('#mapLegend > h1:nth-child(3)').text(legendVar[2]);
  $('#mapLegend > img:nth-child(4)').attr('src', 'img/factions/' + legendVar[3]);
  $('#mapLegend > p:nth-child(5)').text(legendVar[4]);
}
