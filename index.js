'use strict';

//function for when the user clicks the search button after inputing a github handle
function searchButtonHandle() {
    $('#selection-form').on('submit', function(event) {
        event.preventDefault();
        getUserData();
    })
}




//function to retrieve the data using API request 
function getUserData() {
    let userInput = $('#user-selection').val();
    let url = `https://api.github.com/users/${userInput}/repos`
    fetch(url)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
        $('.results-area').show();
}





//function to display the retrieved data onto the DOM
function displayUserData(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        $('.info-list').append(
            
        )
    }
}



$(searchButtonHandle);