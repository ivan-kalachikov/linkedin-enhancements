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

  setInterval(() => {
    const jobStates = document.querySelectorAll('.job-card-container__footer-job-state');
    jobStates.forEach((item) => {
      item.style.color = '#fff';
      item.style.backgroundColor = '#f00';
      item.style.padding = '5px';
      const parent = item.closest('.discovery-templates-entity-item');
      parent.style.opacity = '0.5';
    });
  }, 1000)
	
})();
