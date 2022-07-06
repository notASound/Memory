var score = 0; // Variable that counts clicked pairs
var clickedElement = []; // Array that stores source of the clicked HTML element in ordrer to compare if they are like in function storeClick
var clickedElementSrc = []; // / Array that stores source of clicked HTML element (image) which we need in order to remove class "clicked" in function storeClick
var numberOfImages = document.querySelectorAll("img").length;
var pair = []; // Array that stores paired images

for (var i = 0; i < numberOfImages; i++) {

  document.querySelectorAll("img")[i].src = "images/0.png";
}

// Array with image numbers
var images = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

// Shuffle Array
function shuffleArray(images) {
  var curId = images.length;

  while (0 !== curId) {
    var randId = Math.floor(Math.random() * curId);
    curId -= 1;

    var tmp = images[curId];
    images[curId] = images[randId];
    images[randId] = tmp;
  }
  return images;
}

images = shuffleArray(images); // shuffled array

// Assign randomized images to image positions
for (var i = 0; i < numberOfImages; i++) {
  var imageName = "images/" + images.pop() + ".png";
  document.querySelectorAll("img")[i].src = imageName;
  document.querySelectorAll("img")[i].classList.add("hidden");
  console.log(imageName);
}

// Function that detects click
for (var i = 0; i < numberOfImages; i++) {

  document.querySelectorAll("img")[i].addEventListener("click", function() {
    if (clickedElement.length < 2 && pair.includes(this.src) !== true && this.classList.contains("hidden") === true ) { // condition checks if clicked image is stored i array pair
      console.log(this);
      uncoverImage(this);
      storeClick(this, this.src);

    } else if (clickedElement.length === 2) {
      checkImages();
    }
  })
}

// Function thats stores clicked HTML element and source of clicked HTML element in arrays
function storeClick(click, clickSrc) {
  clickedElement.push(click);
  clickedElementSrc.push(clickSrc);
}

// Function that uncovers image
function uncoverImage(image) {
  image.classList.remove("hidden");
}

// Function that covers both clicked images
function coverImages(image1, image2) {
  clickedElement[0].classList.add("hidden");
  clickedElement[1].classList.add("hidden");
}

// Function that empty arryas
function emptyArrays() {
  clickedElement = [] // empties an array with clicked HTML elements
  clickedElementSrc = [] // empties an array with sources of clicked HTML elements
}

// Function that checks if images are like
function checkImages() {

  if
  (clickedElementSrc[0] === clickedElementSrc[1]) {
    storePair(clickedElementSrc[0], clickedElementSrc[1]);
    console.log(pair);
    score++;
    document.querySelectorAll("p")[1].innerHTML=score;
    emptyArrays();

  } else {
    coverImages();
    emptyArrays();
  }
}

// Function that stores paired images in array
function storePair(element1, element2) {
  pair.push(element1);
  pair.push(element2);
}
