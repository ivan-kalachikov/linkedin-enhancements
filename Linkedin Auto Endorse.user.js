// ==UserScript==
// @name Linkedin Enhancements
// @namespace OrangeMonkey Scripts
// @grant none
// ==/UserScript==

(function() {
  'use strict';

  const { host } = window.location;
  if (host !== 'www.linkedin.com') {
    return;
  }
  
	const jobStates = document.querySelectorAll('.job-card-container__footer-job-state');
  jobStates.forEach((item) => {
    item.style.color = '#f00';    
  });
	
})();
