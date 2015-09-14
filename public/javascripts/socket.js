console.log("Something wicked this way comes");
$(function() {
    var socket = io();

    $("#send").on("click", function(event){
        console.log("Hey");
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
    });
});
