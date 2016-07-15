$(document).ready(function() {
    console.log("ready");
    init();
})
function init() {
    console.log("init");
    $("#button-by-id").click(getById);
}
function getById() {
    var id = $("#item-id").val()
    console.log("id:")
    console.log(id);
    var successCallback = function(result) {
        console.log('success result:');
        console.log(result);
        $("#item-info").html("<div><p>ID: </p><p>" + result.id + "</p><div>" + "<div><p>name: </p><p>" + result.name + "</p><div>" + "<div><p>Description: </p><p>" + result.description + "</p><div>")
    }
    $.getJSON({
        url: "http://localhost:8090/remote/item/" + id,
        success: successCallback
    }).done(function(result) {
            console.log('done data:');
            console.log(result);
        }).fail(function(result) {
            console.log("fail result:")
            console.log(result);
        }).always(function() {
            console.log("always")
        })
}

