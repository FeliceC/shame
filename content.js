var src = chrome.extension.getURL('shame.js');
var script = document.querySelector('script[src="' + src + '"]');

if (script) {
  createScript(true);
} else {
  createScript(false);
}

function createScript(remove) {
  if (remove) {
    script.parentNode.removeChild(script);
  }
  var s = document.createElement('script');
  s.src = src;
  (document.head || document.documentElement).appendChild(s);
}
