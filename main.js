'use strict';

// call the Dog API to generate URLs to random dog images and then have them displayed in the console by calling displayResults
function getDogImage(selectedBreed) {
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
    // converts JSON back into in-memory JS object
    .then(response => response.json())
    // pass the JS object as an argument to the displayResults function
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



// print the value of the message key (dog image URLs) to the console
function displayResults(responseJson) {
  if (responseJson.message == "Breed not found (master breed does not exist)") {
    alert("Breed requested not available in Dog API.");
  } else {
    const breedPhotos = responseJson.message.length;
    let newImages = [];
    for (let i = 0; i < breedPhotos; i++) {
    let newImage = `<img src="${responseJson.message[i]}" alt="dog image ${i}" class="results-img">`
    newImages.push(newImage);
  };
    $('.results-img').remove();
    $('.dog-header').after(newImages);
    // display the results section
    $('.results').removeClass('hidden');
  };
}

// when a breed is submitted by user, pass it as an argument to the checkForBreed function 
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // store the number entered
    const breed = $('.input').val();
    getDogImage(breed);
    console.log(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});