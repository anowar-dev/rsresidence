$(document).ready(function(){
    $(".cartProductClose").on('click', function(){
        $(this).closest(".cartProductRow").css({display: "none"});
    });
    $(".checkoutSB").click(function(e){
        e.preventDefault();
        let couponSBD = $(this).closest("#accordionCheckoutCoupon");
        couponSBD.hide();
        couponSBD.next(".appliedCoupon").show();
    });
    $(".pResetBtn").click(function(e){
        e.preventDefault();
        let passwordMain = $(this).closest(".password_up");
        passwordMain.hide();
        passwordMain.next(".passResetAmassage").show();
    });
});