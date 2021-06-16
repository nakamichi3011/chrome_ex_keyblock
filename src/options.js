function Save() {
    let ignore_input_keys = document.getElementById('ignore_input_keys').value;

    chrome.storage.local.set({'ignore_input_keys': ignore_input_keys}, function () { });
}

function Load() {
    chrome.storage.local.get('ignore_input_keys', function (items) {
        document.getElementById('ignore_input_keys').value = items.ignore_input_keys;
    });
}

document.addEventListener('DOMContentLoaded', Load);

document.getElementById('save_button').addEventListener('click', Save);