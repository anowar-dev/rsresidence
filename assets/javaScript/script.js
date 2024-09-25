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
    $('.desktopMlink, .header_user, .header_card').removeClass('active');
    
    // Add active class to the user icon
    $(this).addClass('active');
    
    // Remove stored active index for menu links, since user icon is now active
    localStorage.removeItem('activeIndex');
  });

  // Handle click event for .header_card (shopping cart icon)
  $('.header_card').click(function() {
    // Remove active class from all links and icons
    $('.desktopMlink, .header_user, .header_card').removeClass('active');
    
    // Add active class to the cart icon
    $(this).addClass('active');
    
    // Remove stored active index for menu links, since cart icon is now active
    localStorage.removeItem('activeIndex');
  });

    
    $(".MobileSMlink").click(function(){
      $(this).next(".MobileSubMenu2").toggleClass("height-fits");
    });
    
    $(".Mobilelink").click(function(){
      $(this).next(".MobileSubmenu").toggleClass("height-fits");
    });


    // Top slider
    {
      let currentIndex = 0;
      const sliders = $('.sicgle_slider');
      const totalSliders = sliders.length;

      // Function to change slider
      function changeSlider(nextIndex) {
          // Remove z-indexing from current slider
          sliders.eq(currentIndex).removeClass('z-indexing');
          
          // Add z-indexing to next slider
          currentIndex = nextIndex;
          sliders.eq(currentIndex).addClass('z-indexing');
          
          // Update indicator
          $('.indic').removeClass('active');
          $('.indic').eq(currentIndex).addClass('active');
          setTimeout(() => {
            $(".z-indexing .sliderparagraph").css({visibility: 'visible'});
          }, 500);
          setTimeout(() => {
            $(".z-indexing .sliderparagraph").css({marginTop: '0'});
          }, 1000);
      }

      // Click on the next button
      $('.Tslider-next').click(function() {
          nextSlider();
      });

      // Click on the previous button
      $('.Tslider-prev').click(function() {
          prevSlider();
      });

      // Click on indicators
      $('.indic').click(function() {
          const indicatorIndex = $(this).index();
          if (indicatorIndex !== currentIndex) {
              changeSlider(indicatorIndex);
          }
      });

      // Function to go to the next slider
      function nextSlider() {
          let nextIndex = currentIndex + 1;
          if (nextIndex >= totalSliders) {
              nextIndex = 0;  // Loop back to the first slider
          }
          changeSlider(nextIndex);
      }

      // Function to go to the previous slider
      function prevSlider() {
          let prevIndex = currentIndex - 1;
          if (prevIndex < 0) {
              prevIndex = totalSliders - 1;  // Loop to the last slider
          }
          changeSlider(prevIndex);
      }

      // Auto change slider every 2 seconds
      setInterval(function() {
          nextSlider();
      }, 6000); 
    }
  
    $(window).on("scroll", function(){
      if($(window).scrollTop() >10){
        $(".header_section").css({background: "#ffffff", padding: "0"});
        $(".desktop_mItem .desktopMlink").css({color: "#222222"});
        $(".desktoplink span").css({color: "#222222"});
        $(".desktoplink i").css({color: "#222222"});
        $(".desktop_rightSide a i").css({color: "#747d8c"});
        $(".desktop_rightSide").css({borderColor: "#747d8c"});
      }
      else{
        $(".header_section").css({background: "transparent", padding: "1rem 0"});
        $(".desktop_mItem .desktopMlink").css({color: "#ffffff"});
        $(".desktoplink span").css({color: "#ffffff"});
        $(".desktoplink i").css({color: "#ffffff"});
        $(".desktop_rightSide a i").css({color: "#ffffff"});
        $(".desktop_rightSide").css({borderColor: "#ffffff"});
      }
    });
  
  });
  