'use strict'

 function displayResults(responseJson) {
    var numDogs = $('#number').val();
    if (numDogs > 1) {
        console.log(responseJson)
        for (let i = 0; i < numDogs; i ++) {
            var imgSrc = responseJson.message[i]
            $('.results').append('<img src="' + imgSrc + '" class="results-img">')
    
    }
    $('.results').removeClass('hidden')
    } else {
        console.log(responseJson);
        $('.results').append(
          `<img src="${responseJson.message}" class="results-img">`
        )
        $('.results').removeClass('hidden');
    }
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    var numDogs = $('#number').val();
    $('.results').empty();
    if (numDogs > 1) {
        fetch('https://dog.ceo/api/breeds/image/random' + '/' + numDogs)
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    } else {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    };
})}
watchForm();