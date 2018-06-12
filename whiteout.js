//whiteout.js
//Shreyas Tallamraju
//NoImage 2 - Using Chrome Storage API

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.storage.sync.get(['blackout'], function(items) {
    var bool = items.blackout;
    

    if(bool.indexOf("true") > -1){
        chrome.tabs.executeScript({
code: 'var x = document.images; var i; for (i = 0; i < x.length; i++) { x[i].style.visibility="hidden";}'
});

        chrome.browserAction.setIcon({
            path: {
                //19: "iconon19.png",
                38: "iconon.png"
            },
            tabId: tab.id
        });

    }

    else{

        chrome.tabs.executeScript({
code: 'var x = document.images; var i; for (i = 0; i < x.length; i++) { x[i].style.visibility="visible";}'
});

        chrome.browserAction.setIcon({
            path: {
                //19: "icon19.png",
                38: "icon.png"
            },
        tabId: tab.id
        });
    }});
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(['blackout'], function(items) {
    var bool = items.blackout;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("false") > -1){
        chrome.browserAction.setIcon({
            path: {
                //19: "iconon19.png",
                38: "iconon.png"
            },
            tabId: tab.id
        });
        chrome.tabs.executeScript({
code: 'var x = document.images; var i; for (i = 0; i < x.length; i++) { x[i].style.visibility="hidden";}'
});
        chrome.storage.sync.set({'blackout': 'true'}, function() {});    

    }
    else{
        chrome.browserAction.setIcon({
            path: {
                //19: "icon19.png",
                38: "icon.png"
            },
        tabId: tab.id
        });
        chrome.tabs.executeScript({
code: 'var x = document.images; var i; for (i = 0; i < x.length; i++) { x[i].style.visibility="visible";}'
});
        chrome.storage.sync.set({'blackout': 'false'}, function() {});    
    }
});
    });