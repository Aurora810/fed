$(function () {
    $('#clickme').click(function () {
        $("#cat").animate({
            opacity: 0.25,
            height: "toggle"
        }, 5000, function () {

        });
    });
})