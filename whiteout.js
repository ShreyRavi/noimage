localStorage["Blackout"] = "false";

chrome.tabs.onUpdated.addListener(function(id, info, tab){

    var bool = localStorage["Blackout"];
    

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
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    var bool = localStorage["Blackout"];
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
        localStorage["Blackout"] = "true";
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
        localStorage["Blackout"] = "false";
    }


//autoupdate feature
/*
chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});

chrome.runtime.requestUpdateCheck(function(status) {
  
});
*/
});