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

    {
        $(".contactpaperopen").click(function(e){
            e.preventDefault();
            $(".contantpaperMain").css({transform: "scale(1)"});
        });
        $(".cPaperClose").click(function(e){
            $(this).closest(".contantpaperMain").css({transform: "scale(0)"});
        });
    }

    {
        $('.otherServiceApplication').slick({
          slidesToShow: 3, 
          slidesToScroll: 1,
          dots: false,
          responsive: [
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2
                  }
              },
              {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
              }
          ]
        });
    
      }
});