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

  // Initialize active class based on saved index
  $('.desktopMlink').removeClass('active');
  let activeIndex = localStorage.getItem('activeIndex');
  if (activeIndex !== null) {
    $('.desktopMlink').eq(activeIndex).addClass('active');
  }

  // Main menu link click event
  $('.desktopMlink').click(function() {
    $('.desktopMlink').removeClass('active'); // Remove active class from all main menu links
    $(this).addClass('active'); // Add active class to clicked main menu link
    let index = $('.desktopMlink').index(this);
    localStorage.setItem('activeIndex', index); // Store the index in localStorage
  });

  // Sub-menu and sub-submenu link click event
  $('.desktoplink, .desktopSMlink, .deskSubLink2').click(function() {
    $('.desktopMlink').removeClass('active'); // Remove active from all main menu links
    let parentMenuItem = $(this).closest('.desktop_mItem').find('> .desktopMlink');
    parentMenuItem.addClass('active'); // Add active to the parent main menu link
    let index = $('.desktopMlink').index(parentMenuItem);
    localStorage.setItem('activeIndex', index); // Store parent menu index in localStorage
  });

  // Footer link click event
  $('.footerLinks').click(function() {
    let targetHref = $(this).attr('href'); // Get the href of the clicked footer link
    let isMatchFound = false; // Flag to check for matching header link

    // Find corresponding header link based on href
    $('.desktopMlink').each(function(index) {
      if ($(this).attr('href') === targetHref) {
        $('.desktopMlink').removeClass('active'); // Remove active from all header links
        $('.footerLinks').removeClass('active'); // Remove active from all footer links
        $(this).addClass('active'); // Add active to matched header link
        $(this).closest('.footerLinks').addClass('active'); // Add active to footer link
        localStorage.setItem('activeIndex', index); // Store index in localStorage
        isMatchFound = true; // Set flag if match found
        return false; // Break loop
      }
    });

    // If no matching header link is found, clear all active classes and localStorage
    if (!isMatchFound) {
      $('.desktopMlink').removeClass('active'); // Remove active from all header links
      $('.footerLinks').removeClass('active'); // Remove active from all footer links
      $(this).addClass('active'); // Add active to only the clicked footer link
      localStorage.removeItem('activeIndex'); // Clear localStorage
    }
  });

  // Initialize active class based on saved index
// $('.desktopMlink').removeClass('active');
// $('.footerLinks').removeClass('active'); // Remove active from all footer links
// let activeIndex = localStorage.getItem('activeIndex');
// if (activeIndex !== null) {
//   $('.desktopMlink').eq(activeIndex).addClass('active');
//   syncFooterActiveLink(activeIndex); // Sync active footer link
// } else {
//   $('.desktopMlink').eq(0).addClass('active'); // Default to Home
//   $('.footerLinks').eq(0).addClass('active');
// }

// // Main menu link click event
// $('.desktopMlink').click(function() {
//   $('.desktopMlink').removeClass('active'); // Remove active class from all main menu links
//   $(this).addClass('active'); // Add active class to clicked main menu link
//   let index = $('.desktopMlink').index(this);
//   localStorage.setItem('activeIndex', index); // Store the index in localStorage
//   syncFooterActiveLink(index); // Sync active footer link
// });

// // Sub-menu and sub-submenu link click event
// $('.desktoplink, .desktopSMlink, .deskSubLink2').click(function() {
//   $('.desktopMlink').removeClass('active'); // Remove active from all main menu links
//   let parentMenuItem = $(this).closest('.desktop_mItem').find('> .desktopMlink');
//   parentMenuItem.addClass('active'); // Add active to the parent main menu link
//   let index = $('.desktopMlink').index(parentMenuItem);
//   localStorage.setItem('activeIndex', index); // Store parent menu index in localStorage
//   syncFooterActiveLink(index); // Sync active footer link
// });

// // Footer link click event
// $('.footerLinks').click(function() {
//   let targetHref = $(this).attr('href'); // Get the href of the clicked footer link

//   // Find corresponding header link based on href and set active class
//   $('.desktopMlink').each(function(index) {
//     if ($(this).attr('href') === targetHref) {
//       $('.desktopMlink').removeClass('active'); // Remove active from all header links
//       $(this).addClass('active'); // Add active to matched header link
//       localStorage.setItem('activeIndex', index); // Store index in localStorage
//       syncFooterActiveLink(index); // Sync active footer link
//       return false; // Break out of each loop once matched
//     }
//   });
// });

// // Helper function to synchronize footer active link
// function syncFooterActiveLink(index) {
//   $('.footerLinks').removeClass('active'); // Remove active from all footer links
//   $('.footerLinks').each(function() {
//     if ($(this).attr('href') === $('.desktopMlink').eq(index).attr('href')) {
//       $(this).addClass('active'); // Add active to matching footer link
//       return false; // Break out once matched
//     }
//   });
// }


  


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

  // {
  //   $('#homeCalender').bsCalendar({
  //     locale: 'en',
  //     url: null,
  //     width: 'fit',
  //     icons: {
  //       prev: 'fa-solid fa-arrow-left fa-fw',
  //       next: 'fa-solid fa-arrow-right fa-fw',
  //       eventEdit: 'fa-solid fa-edit fa-fw',
  //       eventRemove: 'fa-solid fa-trash fa-fw'
  //     },
  //     showTodayHeader: false,
  //     showEventEditButton: true,
  //     showEventRemoveButton: true,
  //     showPopover: false
  //   });

  //   $(".timeBtn").click(function(){
  //     $(".timeBoxSingle").removeClass("next");
  //     $(this).closest(".timeBoxSingle").addClass("next");
  //   });

  //   $(".timeNextBtn").click(function(){
  //     $(this).closest(".consultationCalenderDiv").hide();
  //     $(".appointmentMain").show();
  //   });
  //   $("td.position-relative.p-1").click(function(){
  //     $(".calenderOverlay").hide();
  //   });
  //   $("td.position-relative.p-1").css({cursor: "pointer"});
  //   $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-bg-primary");
  //   $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").click(function(){
  //     $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("bg-primary");
  //     $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-white");
  //     $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-white");
  //     $(this).addClass("bg-primary");
  //     $(this).addClass("text-white");
  //     $(this).removeClass("border-secondary");
  //   });
    

  //   $(".appointmentSubmitBtn").click(function(e){
  //     e.preventDefault();
  //     $(".appointmentMain").hide();
  //     $(".consultConfirm_main").show();
  //   });

  // }

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
