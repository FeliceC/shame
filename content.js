var s = document.createElement('script');
s.src = chrome.extension.getURL('shame.js');
(document.head || document.documentElement).appendChild(s);
