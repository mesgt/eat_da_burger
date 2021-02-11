$(function () {

    //ADD a burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#burgerName").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added a new burger");
                location.reload();
            }
        );
    });

    //DELETE burger
    // $(".delBurger").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted id ", id);
    //             location.reload();
    //         }
    //     );
    // });

    // //Consume burger status
    // $(".update-form").on("submit", function (event) {
    //     event.preventDefault();

    //     var consumedBurger = {
    //         burgerName: $("#burgerName").val().trim(),
    //     };

    //     var id = $(this).data("id");

    //     // Send the POST request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: consumedBurger
    //     }).then(
    //         function () {
    //             console.log("You ate da burger!");
    //             location.reload();
    //         }
    //     );
    // });
});
