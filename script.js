// 無視リストの参考例
// "S", "D", "R", " "

var ignore_input_keys;
var is_block = false;

chrome.storage.local.get('ignore_input_keys', function (items) {
    ignore_input_keys = items.ignore_input_keys;
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key == 'ignore_input_keys') {
            ignore_input_keys = newValue;
            break;
        }
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if (message == "is_block:true") {
        is_block = true;
        alert("Block on.");
        return true;
    };
    if (message == "is_block:false") {
        is_block = false;
        alert("Block off.");
        return true;
    };
    return true;
});

document.onkeydown = function (e) {
    
    if (!is_block) {
        return true;
    }

    if (ignore_input_keys) {

        let split_keys = ignore_input_keys.toUpperCase().split(',');
        
        for (i = 0; i < split_keys.length; i++) {
            split_keys[i] = split_keys[i].trim().slice(1, 2);
        }

        let input_key = e.key.toUpperCase();
        
        console.log(split_keys);
        console.log(input_key);

        if (split_keys.indexOf(input_key) > -1){
            return true;
        }

        // 特殊キー (デバッグのみ？)
        if (input_key == "F5" || input_key == "F12") {
            return true;
        }
    }

    return false;
}
