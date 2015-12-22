(function(){
  var snow = document.createElement('eager-app-snow');
  snow.innerHTML = '<eager-app-snow-a></eager-app-snow-a><eager-app-snow-b></eager-app-snow-b><eager-app-snow-c></eager-app-snow-c>';
  document.body.appendChild(snow);

  setTimeout(function(){
    snow.setAttribute('eager-app-snow-fade-out', '');
  }, 3 * 1000);

  setTimeout(function(){
    snow.parentNode.removeChild(snow);
  }, 20 * 1000);
})();
