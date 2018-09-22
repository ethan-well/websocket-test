var sliderData = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

var gameData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 2, 2, 2]
];

var $sliderArea = document.getElementById('slider');
var $gameArea = document.getElementById('game');

function initGame() {
  for(var i = 0; i < gameData.length; i++) {
    for(var j = 0; j< gameData[0].length; j++) {
      var div = document.createElement('div');
      div.className = getColor(gameData[i][j]);
      div.style.top = i*20 + 'px';
      div.style.left = j*20 + 'px';
      $gameArea.appendChild(div);
    }
  }
}

function initSlider() {
  for(var i = 0; i < sliderData.length; i++) {
    for(var j = 0; j < sliderData[0].length; j++) {
      var div = document.createElement('div');
      div.className = getColor(sliderData[i][j]);
      div.style.top = i*20 + 'px';
      div.style.left = j*20 + 'px';
      $sliderArea.appendChild(div);
    }
  }
}

function getColor(num) {
  if (num === 0 ) {
    return 'none';
  } else if (num === 1) {
    return 'current';
  } else {
    return 'down';
  }
}

initSlider();
initGame();