var toRemove = "";

let maquina= document.getElementById('maquina');
maquina.onclick = function(element) {
	toRemove = ["layer_gatting", "sso_layer"];
	removeIdNonio(toRemove);
	}

let comercial= document.getElementById('comercial');
comercial.onclick = function(element) {
	toRemove=["nonioBox"];
	removeClassNonio(toRemove);
	}

let record= document.getElementById('record');
record.onclick = function(element) {
	toRemove=["layer_gatting"];
	removeIdNonio(toRemove);
	}

let jn= document.getElementById('jn');
jn.onclick = function(element) {
		toRemove=["tp-modal","tp-backdrop"];
		removeClassNonio(toRemove);
		}

let publico= document.getElementById('publico');
publico.onclick = function(){
	toRemove =["warning-nonio-overlay"];
	removeClassNonio(toRemove);
};

//add
let autoportal= document.getElementById('autoportal');
autoportal.onclick = function(){
	toRemove =["nonioBox"];
	removeClassNonio(toRemove);
};

let classificadoscm= document.getElementById('classificadoscm');
classificadoscm.onclick = function(){
	toRemove =["sso_layer"];
	removeIdNonio(toRemove);
};

let cmjornal= document.getElementById('cmjornal');
cmjornal.onclick = function(){
	toRemove = ["layer_gatting", "sso_layer"];
	removeIdNonio(toRemove);
};

let dinheirovivo= document.getElementById('dinheirovivo');
dinheirovivo.onclick = function(){
		removeIframesNonio();
};

let dn= document.getElementById('dn');
dn.onclick = function(){
	toRemove = ["tp-modal", "tp-backdrop tp-active"];
	removeClassNonio(toRemove);
};
let expresso= document.getElementById('expresso');
expresso.onclick = function(){
	toRemove = ["imp-content-gate-root"];
	removeIdNonio(toRemove);
};
let flash= document.getElementById('flash');
flash.onclick = function(){
	toRemove = ["layer_gatting"];
	removeIdNonio(toRemove);
};

let jornaldenegocios= document.getElementById('jornaldenegocios');
jornaldenegocios.onclick = function(){
	toRemove = ["layer_gatting", "sso_layer"];	
	removeIdNonio(toRemove);
};

let maisfutebol= document.getElementById('maisfutebol');
maisfutebol.onclick = function(){
	toRemove = ["nonioBox"];
	removeClassNonio(toRemove);
};

let maxima= document.getElementById('maxima');
maxima.onclick = function(){
	toRemove = ["layer_gatting", "sso_layer"];
	removeIdNonio(toRemove);
};

let megahits= document.getElementById('megahits');
megahits.onclick = function(){
	toRemove = ["wrapperContentGatingNonio"];
	removeIdNonio(toRemove);
};

let motor24= document.getElementById('motor24');
motor24.onclick = function(){
	removeIframesNonio();
};

let noticiasmagazine= document.getElementById('noticiasmagazine');
noticiasmagazine.onclick = function(){
	removeIframesNonio();
};

let selfie= document.getElementById('selfie');
selfie.onclick = function(){
	toRemove = ["nonioBox"];
	removeClassNonio(toRemove);
};

let smoothfm= document.getElementById('smoothfm');
smoothfm.onclick = function(){
	toRemove = ["nonioBox"];
	removeClassNonio(toRemove);
};

let tvi= document.getElementById('tvi');
tvi.onclick = function(){
	toRemove = ["nonioBox"];
	removeClassNonio(toRemove);
};

let tvi24= document.getElementById('tvi24');
tvi24.onclick = function(){
	toRemove = ["nonioBox"];
	removeClassNonio(toRemove);
};




function removeClass(elemName) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
			  {code:  'document.getElementsByClassName("'+elemName+'")[0].remove();'}
			);
			  
			chrome.tabs.executeScript(
			  {code:  				  
					  'document.getElementsByTagName("body")[0].style = "overflow:auto";'+
					  'document.getElementsByTagName("html")[0].style = "overflow:auto";'
				}
			  );
		});
	
};

function removeClassNonio(remArray) {
	var i;
	for (i = 0; i < remArray.length; i++) {
		try {
			removeClass(remArray[i]);
		} catch (erro) {
			console.log("ERROR =" + erro);
		}
	}
};

function removeIdNonio(remArray) {	
	var i;
	for (i = 0; i < remArray.length; i++) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
			  {code:  
					  'document.getElementById("'+remArray[i]+'").remove();'					  
				}
			  );
			  
			chrome.tabs.executeScript(
			  {code:  				  
					  'document.getElementsByTagName("body")[0].style = "overflow:auto";'+
					  'document.getElementsByTagName("html")[0].style = "overflow:auto";'
				}
			  );
		});
	}
};

function removeIframesNonio() {	
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.executeScript(null,
			  {code: 
			  
					 'document.querySelectorAll("iframe").forEach(el => el.remove());	'+
					' document.getElementsByTagName("body")[0].style = "overflow:auto"; '+
					' document.getElementsByTagName("html")[0].style = "overflow:auto";'
				}
			  );
			  
		});
	
		
		
	}



