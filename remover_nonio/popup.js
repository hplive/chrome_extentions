
	let record= document.getElementById('record');
	record.onclick = function(element) {
    //let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          //tabs[0].id,
          //{code: ''},
		  {code: 'document.getElementById("layer_gatting").remove();'+
				  'document.getElementsByTagName("body")[0].style = "overflow:auto";'+
				  'document.getElementsByTagName("html")[0].style = "overflow:auto";'
				  
			}
		  );
    });
	}



	let jn= document.getElementById('jn');
		jn.onclick = function(element) {
		//let color = element.target.value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
			  //tabs[0].id,
			  //{code: ''},
			  {code:  'document.getElementsByClassName("tp-modal")[0].remove();'+
					  'document.getElementsByClassName("tp-backdrop")[0].remove();'+
					  'document.getElementsByTagName("body")[0].classList.remove("tp-modal-open");'+
					  'document.getElementsByTagName("body")[0].style = "overflow:auto";'
					  
				}
			  );
		});
		}

	
	
	
  // let changeColor = document.getElementById('changeColor');


  // chrome.storage.sync.get('color', function(data) {
    // changeColor.style.backgroundColor = data.color;
    // changeColor.setAttribute('value', data.color);
  // });
  
    // changeColor.onclick = function(element) 
	// {
		// let color = element.target.value;
		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  // chrome.tabs.executeScript(
			  // tabs[0].id,
			  // {code: 'document.body.style.backgroundColor = "' + color + '";'});
		// });
	// }
	
	
/*
'if(document.body.style.removeAttribute)  document.body.style.removeAttribute("overflow"); else document.body.style.removeProperty("overflow");'+
				  'if(document.html.style.removeAttribute)  document.html.style.removeAttribute("overflow"); else document.html.style.removeProperty("overflow");'
*/
  
  