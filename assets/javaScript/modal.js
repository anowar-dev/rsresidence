$(document).ready(function(){
    $(".cartProductClose").on('click', function(){
        $(this).closest(".cartProductRow").css({display: "none"});
    });
});