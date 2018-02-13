/* STEAM */
var steam_key = "1D29EFF6C881E00273F89E464AAF7738";
var steam_id = "76561197970590580";

var endpoint = "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" + steam_key + "&steamid=" + steam_id + "&format=json";

var request = new XMLHttpRequest();
request.open("GET", endpoint, true);
request.onload = function (e) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.responseText);
        } else {
            console.error(request.statusText);
        }
    }
};
request.onerror = function (e) {
    console.error(request.statusText);
};
request.send(null)