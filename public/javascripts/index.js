const socket = io('http://localhost:3000');

$("#message").on("keyup", function (e) {
    if(e.which == 13) {
        socket.emit("message", "<b>" + $("#nom").val() + "</b> : " + $("#message").val());
        $("#message").val("");
    }
});

socket.on("message", function (data) {
    $("#chat").append("<li>" + data + "</li>");
});

