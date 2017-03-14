(function(){
  var snow = document.createElement('cloudflare-app-snow');
  snow.innerHTML = '<cloudflare-app-snow-a></cloudflare-app-snow-a><cloudflare-app-snow-b></cloudflare-app-snow-b><cloudflare-app-snow-c></cloudflare-app-snow-c>';
  document.body.appendChild(snow);

  setTimeout(function(){
    snow.setAttribute('cloudflare-app-snow-fade-out', '');
  }, 3 * 1000);

  setTimeout(function(){
    snow.parentNode.removeChild(snow);
  }, 20 * 1000);
})();
