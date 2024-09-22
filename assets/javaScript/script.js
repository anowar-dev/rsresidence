$(document).ready(function() {
    // Remove active class from all links first, including "Home"
    $('.desktopMlink').removeClass('active');
    
    // Check if there's an active index in localStorage and apply the active class
    let activeIndex = localStorage.getItem('activeIndex');
    if (activeIndex !== null) {
      $('.desktopMlink').eq(activeIndex).addClass('active');
    } else {
      // If no index is stored, set "Home" (index 0) as active by default
      $('.desktopMlink').eq(0).addClass('active');
    }
  
    // Add click event to update the active link based on index
    $('.desktopMlink').click(function() {
      // Remove the active class from all links
      $('.desktopMlink').removeClass('active');
      
      // Add active class to the clicked link
      $(this).addClass('active');
      
      // Store the index of the clicked link in localStorage
      let index = $('.desktopMlink').index(this);
      localStorage.setItem('activeIndex', index);
    });

    
    $(".MobileSMlink").click(function(){
      $(this).next(".MobileSubMenu2").toggleClass("height-fits");
    });
    
    $(".Mobilelink").click(function(){
      $(this).next(".MobileSubmenu").toggleClass("height-fits");
    });
  
  });
  