function zgetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function zloadParm(parmKey) {
    var parmValue = getParameterByName(parmKey);
    var ul = document.getElementById("parms");
    ul.appendChild(document.createElement("li").appendChild(document.createTextNode(parmKey + ": " + parmValue)));
}
function printAccessToken() {
    var accessToken = getAccessToken();
    var ul = document.getElementById("parms");
    ul.appendChild(document.createElement("li").appendChild(document.createTextNode("access_token: " + accessToken)));
}


function getParameterByName(name) {
    var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getAccessToken() {
    return getParameterByName('access_token');
}