'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', document.querySelectorAll('div'));
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Actions');
