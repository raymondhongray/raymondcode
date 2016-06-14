$(document).ready(function() {
    $('#index-search > button').click(function() {
        window.location.href = 'map.html?site=' + $('#index-search > select').val();
    });

});
