chrome.browserAction.onClicked.addListener(popupClicked);

let convert = true;
function popupClicked(tab) {
  convert = !convert;
  const msg = {
    convert,
  };

  chrome.browserAction.setIcon({
    path: convert ? './assets/code-insiders-19.png' : './assets/code-19.png',
  });

  chrome.tabs.sendMessage(tab.id, msg);
}
