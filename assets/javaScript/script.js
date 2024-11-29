$(window).on("scroll", function() {
  let scrollTop = $(window).scrollTop();

  // Toggle header section style and logos
  if (scrollTop > 10) {
      $(".header_section").addClass('scrolled');
      $(".whiteLogo").hide();
      $(".blueLogo").show();
      $(".topnavBarMain").hide();
      $(".topnavbar .footerRsingle").hide();
      $(".Mobile_menuOpen i").css({color: "rgba(0, 0, 0, .5)"});
  } else {
      $(".header_section").removeClass('scrolled');
      $(".blueLogo").hide();
      $(".whiteLogo").show();
      $(".topnavBarMain").show();
      $(".topnavbar .footerRsingle").show();
      $(".Mobile_menuOpen i").css({color: "rgba(255, 255, 255, .7)"});
      $(".Mobile_menuOpen i").hover(
        function() {
          // Mouse enter
          $(this).css({ color: "#4AB7F4" }); // Change color on hover
        },
        function() {
          // Mouse leave
          // Check the scroll state to determine the original color
          if ($(".header_section").hasClass('scrolled')) {
            $(this).css({ color: "rgba(0, 0, 0, 0.5)" }); // Original color when scrolled
          } else {
            $(this).css({ color: "rgba(255, 255, 255, 0.7)" }); // Original color when not scrolled
          }
        }
      );
  }

  // Toggle back-to-top button visibility
  if (scrollTop > 50) {
      $(".backTop").show();
  } else {
      $(".backTop").hide();
  }
});

$(document).ready(function() {


  // {
  //   // Remove all active classes initially
  //   $('.desktopMlink').removeClass('active');
    
  //   // Get the current page URL path (e.g., "mentorship.html")
  //   const currentPath = window.location.pathname.split('/').pop();

  //   // Check if the current URL matches a main menu item or a submenu item
  //   const matchingMainMenuItem = $(`.desktopMlink[href="${currentPath}"]`);
  //   const matchingSubMenuItem = $(`.deskSubLink2[href="${currentPath}"]`);

  //   // If it's a main menu item, add the active class to that
  //   if (matchingMainMenuItem.length) {
  //       matchingMainMenuItem.addClass('active');
  //   } 
  //   // If it's a submenu item, find its parent main menu and add active to the main menu
  //   else if (matchingSubMenuItem.length) {
  //       matchingSubMenuItem.closest('.desktop_mItem').find('.desktopMlink').addClass('active');
  //   }
  //   else {
  //       // Default to Home menu if no match
  //       $('.desktopMlink[href="index.html"]').addClass('active');
  //   }

  //   // Event handler for main and submenu links
  //   $('.desktopMlink, .deskSubLink2').on('click', function () {
  //       // Remove active class from all menu links
  //       $('.desktopMlink').removeClass('active');

  //       // If it's a submenu link, add active class to the parent menu
  //       if ($(this).hasClass('deskSubLink2')) {
  //           $(this).closest('.desktop_mItem').find('.desktopMlink').addClass('active');
  //       }
  //       // For main menu links
  //       else {
  //           $(this).addClass('active');
  //       }
  //   });
  // }

  {
    $('.desktopMlink').removeClass('active');
    $('.deskSubLink2').removeClass('active'); // Ensure submenu links also don't have the 'active' class
    $('.desktopSMlink').removeClass('active'); // Ensure submenu links also don't have the 'active' class

    // Get the current page URL path (e.g., "mentorship.html")
    const currentPath = window.location.pathname.split('/').pop();

    // Check if the current URL matches a main menu item or a submenu item
    const matchingMainMenuItem = $(`.desktopMlink[href="${currentPath}"]`);
    const matchingSubMenuItem = $(`.deskSubLink2[href="${currentPath}"]`);
    const matchingSubMenuItem2 = $(`.desktopSMlink[href="${currentPath}"]`);

    // If it's a main menu item, add the active class to that
    if (matchingMainMenuItem.length) {
        matchingMainMenuItem.addClass('active');
    }
    // If it's a submenu item, find its parent main menu and add active to the main menu
    else if (matchingSubMenuItem.length) {
        matchingSubMenuItem.closest('.desktop_mItem').find('.desktopMlink').addClass('active');
    }
    else if (matchingSubMenuItem2.length) {
      matchingSubMenuItem2.closest('.desktop_mItem').find('.desktopMlink').addClass('active');
  }
    else {
        // Default to Home menu if no match
        $('.desktopMlink[href="index.html"]').addClass('active');
    }

    // Event handler for main and submenu links
    $('.desktopMlink, .deskSubLink2, .deskSubItem').on('click', function () {
        // Remove active class from all menu links
        $('.desktopMlink').removeClass('active');
        $('.deskSubLink2').removeClass('active');
        $('.deskSubItem').removeClass('active');

        // If it's a submenu link, add active class to the parent menu
        if ($(this).hasClass('deskSubLink2')) {
            $(this).addClass('active');
            $(this).closest('.desktop_mItem').find('.desktopMlink').addClass('active');
        }
        else if ($(this).hasClass('deskSubItem')) {
          $(this).addClass('active');
          $(this).closest('.desktop_mItem').find('.desktopMlink').addClass('active');
      }
        // For main menu links
        else {
            $(this).addClass('active');
        }
    });
  }
  {
    $('.footerLinks').removeClass('active');

    // Get the current page URL path (e.g., "mentorship.html")
    const currentPath = window.location.pathname.split('/').pop();

    // Check if the current URL matches any footer link
    const matchingFooterLink = $(`.footerLinks[href="${currentPath}"]`);

    // If a matching link is found, add the active class
    if (matchingFooterLink.length) {
        matchingFooterLink.addClass('active');
    }
  }

  // Mobile sub-menu toggle
  $(".MobileSMlink").click(function() {
    $(this).next(".MobileSubMenu2").toggleClass("height-fits");
  });

  $(".Mobilelink").click(function() {
    $(this).next(".MobileSubmenu").toggleClass("height-fits");
  });

  // Top slider logic
  {
    let currentIndex = 0;
    const sliders = $('.sicgle_slider');
    const totalSliders = sliders.length;

    // Function to change slider
    function changeSlider(nextIndex) {
        sliders.eq(currentIndex).removeClass('z-indexing');
        currentIndex = nextIndex;
        sliders.eq(currentIndex).addClass('z-indexing');
        $('.indic').removeClass('active');
        $('.indic').eq(currentIndex).addClass('active');
        setTimeout(() => {
          $(".z-indexing .sliderparagraph").css({visibility: 'visible'});
        }, 500);
        setTimeout(() => {
          $(".z-indexing .sliderparagraph").css({marginTop: '0'});
        }, 1000);
    }

    // Handle slider navigation
    $('.Tslider-next').click(function() { nextSlider(); });
    $('.Tslider-prev').click(function() { prevSlider(); });
    $('.indic').click(function() {
      const indicatorIndex = $(this).index();
      if (indicatorIndex !== currentIndex) {
          changeSlider(indicatorIndex);
      }
    });

    // Function to go to the next slider
    function nextSlider() {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= totalSliders) { nextIndex = 0; }
      changeSlider(nextIndex);
    }

    // Function to go to the previous slider
    function prevSlider() {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) { prevIndex = totalSliders - 1; }
      changeSlider(prevIndex);
    }

    // Auto change slider every 6 seconds
    setInterval(function() {
      nextSlider();
    }, 6000); 
  }

  // Change header appearance on scroll
  let scrollTop = $(window).scrollTop();

    if (scrollTop > 10) {
        $(".header_section").addClass('scrolled');
        $(".whiteLogo").hide();
        $(".blueLogo").show();
        $(".topnavBarMain").hide();
        $(".topnavbar .footerRsingle").hide();
        $(".Mobile_menuOpen i").css({color: "rgba(0, 0, 0, .5)"});
    } else {
        $(".header_section").removeClass('scrolled');
        $(".blueLogo").hide();
        $(".whiteLogo").show();
        $(".topnavBarMain").show();
        $(".topnavbar .footerRsingle").show();
        $(".Mobile_menuOpen i").hover(
          function() {
            // Mouse enter
            $(this).css({ color: "#4AB7F4" }); // Change color on hover
          },
          function() {
            // Mouse leave
            // Check the scroll state to determine the original color
            if ($(".header_section").hasClass('scrolled')) {
              $(this).css({ color: "rgba(0, 0, 0, 0.5)" }); // Original color when scrolled
            } else {
              $(this).css({ color: "rgba(255, 255, 255, 0.7)" }); // Original color when not scrolled
            }
          }
        );
        
    }

    if (scrollTop > 50) {
        $(".backTop").show();
    } else {
        $(".backTop").hide();
    }

  // Sidebar product close
  $(".cProductClose").click(function(){
    $(this).closest(".SCPsingleMain").hide();
  });


  // Sitebar show hide
  $(".SaddToCard").click(function(e){
    e.preventDefault();
    $(".sidebarcardMain").show();
    setTimeout(() => {
      $(".sidebarCard").css({transform: "translateX(0)"});
    }, 10);
  });
  $(".sCardHeader").click(function(){
    $(".sidebarCard").css({transform: "translateX(100%)"});
    setTimeout(() => {
      $(".sidebarcardMain").hide();
    }, 410);
  });


  // Home calender
{


$('#homeCalender').bsCalendar({
  locale: 'en',
  url: null,
  width: 'fit',
  icons: {
    prev: 'fa-solid fa-arrow-left fa-fw',
    next: 'fa-solid fa-arrow-right fa-fw',
    eventEdit: 'fa-solid fa-edit fa-fw',
    eventRemove: 'fa-solid fa-trash fa-fw'
  },
  showTodayHeader: false,
  showEventEditButton: true,
  showEventRemoveButton: true,
  showPopover: false
});

// Remove current date highlight after calendar is initialized
setTimeout(function() {
  $('.js-cell-inner').removeClass('current today');
}, 500);



// Function to remove default active class from the current date
function clearCurrentDateActive() {
  // Remove any active styling from the current date if the plugin applies it
  $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("bgDeepBlue text-white border-secondary");
}

// Function to set click event and apply active color across months
function setDateClickEvent() {
  $("td.position-relative.p-1").css({ cursor: "pointer" });

  $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").off("click").on("click", function() {
    // Remove active color from any previously selected date
    $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("bgDeepBlue text-white border-secondary");

    // Add active color to the clicked date
    $(this).addClass("bgDeepBlue text-white").removeClass("border-secondary");
  });
}

// Apply the click events on initial load and clear any default active date
setDateClickEvent();
clearCurrentDateActive();

// Reapply events and clear default active date on month change
$(".btn-next-month, .btn-prev-month").click(function() {
  setTimeout(() => {
    setDateClickEvent();
    clearCurrentDateActive();
  }, 50);
});


$(".timeBtn").click(function(){
  $(".timeBoxSingle").removeClass("next");
  $(this).closest(".timeBoxSingle").addClass("next");
});

$(".timeNextBtn").click(function(){
  $(this).closest(".consultationCalenderDiv").hide();
  $(".appointmentMain").show();
});
$("td.position-relative.p-1").click(function(){
  $(".calenderOverlay").hide();
});



}
  

  // Testimonial slider
  {
    $('.testimonialSlider').slick({
      slidesToShow: 3, 
      slidesToScroll: 1,
      dots: true,
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
  {
    $('.othersServiceSlider').slick({
      slidesToShow: 2, 
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
  }
  
  

});
