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
    $(".DesAddressBtn").click(function(){
        $(this).next(".addressEditMain").css({transform: "scale(1)"});
    });
    $(".editAddressMC").click(function(){
        $(this).closest(".addressEditMain").css({transform: "scale(0)"});
    });
});