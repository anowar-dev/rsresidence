$(document).ready(function() {
  $('.desktopMlink, .header_user, .header_card').removeClass('active');

  // Check if there's an active index in localStorage and apply the active class to desktop menu links
  let activeIndex = localStorage.getItem('activeIndex');
  if (activeIndex !== null) {
    $('.desktopMlink').eq(activeIndex).addClass('active');
  } else {
    // If no index is stored, set "Home" (index 0) as active by default
    $('.desktopMlink').eq(0).addClass('active');
  }

  // Handle click event for .desktopMlink (menu items)
  $('.desktopMlink').click(function() {
    // Remove active class from all links
    $('.desktopMlink').removeClass('active');
    $('.header_user, .header_card').removeClass('active');  // Make sure user and card icons don't have active class
    
    // Add active class to the clicked link
    $(this).addClass('active');
    
    // Store the index of the clicked link in localStorage
    let index = $('.desktopMlink').index(this);
    localStorage.setItem('activeIndex', index);
  });

  // Handle click event for .header_user (user icon)
  $('.header_user').click(function() {
    // Remove active class from all links and icons
    $('.desktopMlink, .header_user, .desktoplink, .header_card').removeClass('active');
    
    // Add active class to the user icon
    $(this).addClass('active');
    
    // Remove stored active index for menu links, since user icon is now active
    localStorage.removeItem('activeIndex');
  });

  // Handle click event for .header_card (shopping cart icon)
  $('.header_card').click(function() {
    // Remove active class from all links and icons
    $('.desktopMlink, .header_user, .desktoplink, .header_card').removeClass('active');
    
    // Add active class to the cart icon
    $(this).addClass('active');
    
    // Remove stored active index for menu links, since cart icon is now active
    localStorage.removeItem('activeIndex');
  });

  // Handle click event for .desktopSMlink or .deskSubLink2
  $('.desktopSMlink, .deskSubLink2').click(function(e) {
    e.preventDefault(); // Prevent default link behavior
    $('.desktopMlink, .desktoplink').removeClass('active'); // Remove active class from all menu links

    // Add active class to the parent .desktoplink
    $(this).closest('.desktop_mItem').find('.desktoplink').addClass('active');
  });

  // Handle sub-menu toggles for mobile
  $(".MobileSMlink").click(function(){
    $(this).next(".MobileSubMenu2").toggleClass("height-fits");
  });
  
  $(".Mobilelink").click(function(){
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
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      $(".header_section").addClass('scrolled');
    } else {
      $(".header_section").removeClass('scrolled');
    }
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".backTop").show();
    } else {
      $(".backTop").hide();
    }
  });

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
    $("td.position-relative.p-1").css({cursor: "pointer"});
    $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-bg-primary");
    $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").click(function(){
      $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("bg-primary");
      $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-white");
      $(".js-cell-inner.justify-content-center.align-items-center.rounded-circle").removeClass("text-white");
      $(this).addClass("bg-primary");
      $(this).addClass("text-white");
      $(this).removeClass("border-secondary");
    });

    $(".appointmentSubmitBtn").click(function(e){
      e.preventDefault();
      $(".appointmentMain").hide();
      $(".consultConfirm_main").show();
    });

  }

  // Testimonial slider
  {
    $('.testimonialSlider').slick({
      slidesToShow: 2, 
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
  }
});
