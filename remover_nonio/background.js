 chrome.runtime.onInstalled.addListener(function() {
	   try {
		var thisVersion = chrome.runtime.getManifest().version;
		if (details.reason == "install") {
		  console.info("First version installed");
		  alert("Remover Nonio foi instalado pela primeira vez :)");
		  //Send message to popup.html and notify/alert user("Welcome")
		} else if (details.reason == "update") {
		  console.info("Remover Nonio atializado para a versão: " + thisVersion);
		  //Send message to popup.html and notify/alert user

		  chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			for( var i = 0; i < tabs.length; i++ ) {
				chrome.tabs.sendMessage(tabs[i].id, {name: "showPopupOnUpdated", version: thisVersion});
			}
			});
		}
	  } catch(e) {
		console.info("OnInstall Error - " + e);
	  }
	
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: 
		[
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.record.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.publico.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.jn.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'radiocomercial.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'aquelamaquina.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'autoportal.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'classificadoscm.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'cmjornal.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.dinheirovivo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'dn.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'expresso.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'flash.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'jornaldenegocios.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'maisfutebol.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'maxima.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'megahits.sapo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'motor24.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'noticiasmagazine.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'selfie.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'smoothfm.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'tvi.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'tvi24.iol.pt'},
			})
        ],
        actions: [
				new chrome.declarativeContent.ShowPageAction()
				
				]
      }]);
    });
  });

  
 // var toRemove = "";
// var triesNonio = 0;
// var triesCookies = 0;
// var sucCount = 0;
// remCookies();
 // function removeClass(elemName) {
	// var elem = document.getElementsByClassName(elemName);
	// elem[0].remove();
// };
 // function remCookies() {
	// document.body.style.cssText = 'overflow:auto !important';
	// document.getElementsByTagName('html')[0].style.overflow = "auto";
	// triesCookies = triesCookies + 1;
	// try {
		// removeClass("qc-cmp-ui-container qc-cmp-showing");
		// triesCookies = 0;
	// } catch(erro) {
		// console.log("erro=" + erro);
		// if (triesCookies < 5) {
			// setTimeout(function() {
				// remCookies();
			// }, 500);
		// }
	// }
// }


  
  
  