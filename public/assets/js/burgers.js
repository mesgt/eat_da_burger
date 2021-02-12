$(function () {

    //ADD a burger
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#burgerName").val().trim(),
        };
        console.log($("#burgerName").val().trim())
        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
                location.reload();
            }
        );
    });

    // DELETE burger
    $(".delBurger").on("click", function (event) {
        var id = this.id;
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
                location.reload();
            }
        );
    });

    //Consume burger status
    $(".eatBurger").on("click", function (event) {
        var id = this.id;

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
                location.reload();
            }
        );
    });
});
