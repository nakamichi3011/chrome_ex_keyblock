chrome.contextMenus.create({
    title: 'Block keys.',
    type: 'normal',
    contexts: ['all'],
    onclick: (info, tab) => {
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "is_block:true");
        });
    }
});

chrome.contextMenus.create({
    title: 'Unlock block keys.',
    type: 'normal',
    contexts: ['all'],
    onclick: (info, tab) => {
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "is_block:false");
        });
    }
});
