$(document).ready(function(){
    var countrySearch = new Choices('#signupCountry', {
        searchEnabled: true, // Enable live search
        itemSelectText: '', // Remove the default 'Press to select' text
        placeholderValue: 'Select a country...', // Add a placeholder
    });
    var countrySearch = new Choices('#dvState', {
        searchEnabled: true, // Enable live search
        itemSelectText: '', // Remove the default 'Press to select' text
        placeholderValue: 'Select a state...', // Add a placeholder
    });

    var countrySearch = new Choices('#billingCountry', {
        searchEnabled: true, // Enable live search
        itemSelectText: '', // Remove the default 'Press to select' text
        placeholderValue: 'Select a country...', // Add a placeholder
    });
    var countrySearch = new Choices('#shipingState', {
        searchEnabled: true, // Enable live search
        itemSelectText: '', // Remove the default 'Press to select' text
        placeholderValue: 'Select a state...', // Add a placeholder
    });
    

    $(".freeConsulBtn").click(function(e){
        e.preventDefault();
        $(this).next(".success_massage").show();
    });

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
});