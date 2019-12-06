'use strict';

// call the Dog API to generate URLs to random dog images and then have them displayed in the console by calling displayResults
function getDogImage(selectedNum) {
    fetch(`https://dog.ceo/api/breeds/image/random/${selectedNum}`)
    // converts JSON back into in-memory JS object
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// print the vale of the message key (dog image URLs) to the console
function displayResults(responseJson) {
  console.log(responseJson.message);
}

// when a number is submitted by user, pass it as an argument to the getDogImage function
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // store the number entered
    const num = $('.input').val();
    getDogImage(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});