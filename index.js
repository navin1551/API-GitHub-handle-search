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
        .then(responseJson => {console.log(responseJson), displayUserData(responseJson)});
        $('.results-area').show();
}



//function to display the retrieved data onto the DOM
function displayUserData(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        $('.info-list').append(
            `<li>
                <h3>Name: ${responseJson[i].name}
                <a href= "${responseJson[i].html_url}" target="_blank">Link</a></h3>
            </li>`
        )
    }
};



$(searchButtonHandle);