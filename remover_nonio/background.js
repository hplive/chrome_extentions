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
				pageUrl: {hostEquals: 'www.aquelamaquina.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'autoportal.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.classificadoscm.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.cmjornal.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.dinheirovivo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.dn.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'expresso.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.flash.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.jornaldenegocios.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'maisfutebol.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.maxima.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'megahits.sapo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.motor24.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.noticiasmagazine.pt'},
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
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'blitz.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'cidade.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.evasoes.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'm80.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'rr.sapo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.tsf.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'rfm.sapo.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.sabado.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.sic.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'sicmulher.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'sicnoticias.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'sicradical.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'sickapa.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'siccaras.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'tviplayer.iol.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.vidas.pt'},
			}),
			new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'www.ojogo.pt'},
			})
        ],
        actions: [
				new chrome.declarativeContent.ShowPageAction()
				
				]
      }]);
    });
  });



  
  
  