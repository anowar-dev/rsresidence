$(document).ready(function(){
    var countrySearch = new Choices('#signupCountry', {
        searchEnabled: true, // Enable live search
        itemSelectText: '', // Remove the default 'Press to select' text
        placeholderValue: 'Select a country...', // Add a placeholder
    });
});