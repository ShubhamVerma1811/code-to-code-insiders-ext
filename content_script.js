chrome.runtime.onMessage.addListener(replaceLinks);

// get all links on the page that contains "vscode:" in them
var links = document.querySelectorAll('a[href^="vscode:"]');

replaceLinks({ convert: true });

// function to replace all the links containing "vscode:" to "vscode-insiders:"
function replaceLinks(message) {
  if (message?.convert) {
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');
      var newHref = href.replace('vscode:', 'vscode-insiders:');
      link.setAttribute('href', newHref);
    }
  } else {
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');
      var newHref = href.replace('vscode-insiders:', 'vscode:');
      link.setAttribute('href', newHref);
    }
  }
}
