let onion = document.getElementById('onion');
let theSwitchOn = document.getElementById('switch-on');
let theSwitchOff = document.getElementById('switch-off');
let onOff = document.getElementById('on/off');


function switchOn(){
  onion.style.filter = 'brightness(40%)';
  theSwitchOn.style.display = 'none';
  theSwitchOff.style.display = 'inline';
  onOff.innerHTML = 'off';

};

function switchOff(){
  onion.style.filter = 'brightness(140%)';
  theSwitchOff.style.display = 'none';
  theSwitchOn.style.display = 'inline';
  onOff.innerHTML = 'on';
  
};


