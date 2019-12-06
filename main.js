'use strict';

// call the Dog API to generate URLs to random dog images and then have them displayed in the console by calling displayResults
function getDogImage(selectedNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${selectedNum}`)
    // converts JSON back into in-memory JS object
    .then(response => response.json())
    // pass the JS object as an argument to the displayResults function
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// print the value of the message key (dog image URLs) to the console
function displayResults(responseJson) {
  const photoCount = responseJson.message.length
  let newImages = [];
  for (let i = 0; i < photoCount; i++) {
    let newImage = `<img src="${responseJson.message[i]}" alt="dog image ${i}" class="results-img">`
    newImages.push(newImage);
  };
    console.log(newImages)
    $('.results-img').remove();
    $('.dog-header').after(newImages);
    // display the results section
    $('.results').removeClass('hidden');
}

// when a number of requested photos is submitted by user, pass it as an argument to the getDogImage function
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // store the number entered
    const num = $('.input').val();
    getDogImage(num);
    console.log(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});