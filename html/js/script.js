'use strict'

var btn = document.getElementById('btnSommaire');
var sommaire =  document.getElementById('sommaireToggle');
	btn.setAttribute('class','close');
	btn.addEventListener("click",function(){
		sommaire.classList.toggle("is-hidden");
		if (sommaire.classList.contains('is-hidden')){
			btn.setAttribute('aria-expanded','false');
			btn.setAttribute('class','close')
		}
		else{
			btn.setAttribute('aria-expanded','true');
			btn.setAttribute('class','open')
		}
	})
