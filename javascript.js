$(document).ready(function() {
    $('#nav1, #nav2, #nav3, #nav4, #nav5, #nav6').on('click', function() {
        $(this).addClass('visited');
    });
});