console.log("Something wicked this way comes");
$(function() {
    
    var socket = io();

    $("#send").on("click", function(event){
        console.log("Hey");
        var msg = $('#m').val();
        socket.emit('chat message', msg);
        $('#m').val('');
        
        $("#messages").append($("<li>").text(msg));
    });

    socket.on('chat message', function(msg) {
        $("#messages").append($("<li>").text(msg));
    });
});
