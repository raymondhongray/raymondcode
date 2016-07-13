$(".remove-popup-done-icon, .checked-done").click(function(event) {
    event.preventDefault();

    $(".popup-done").css('display', 'none');
    window.location.href = 'map.html';
});
