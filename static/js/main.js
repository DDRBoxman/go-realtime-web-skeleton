function websocketURL() {
	var loc = window.location, new_uri;
	if (loc.protocol === "https:") {
	    new_uri = "wss:";
	} else {
	    new_uri = "ws:";
	}
	new_uri += "//" + loc.host;
	new_uri += loc.pathname + "ws";

	return new_uri
}

var socket = new WebSocket(websocketURL());
socket.onopen = function() {
	socket.send("taco");
};

socket.onmessage = function(evt) {
	console.log(evt.data);
};
