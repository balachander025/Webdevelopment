// // getElementById
const title = document.getElementById('main-title');
console.log(title); // Logs the <h1> element
 title.innerHTML = 'Hello DOM!'; // Changes the text inside the <h1> element

// // getElementsByClassName
 const paragraphs = document.getElementsByClassName('text');
 console.log(paragraphs); // Logs an HTMLCollection of <p> elements
 for (let i = 0; i < paragraphs.length; i++) {
   paragraphs[i].style.color = 'blue'; // Changes the text color of all <p> elements to blue
 }

// // getElementsByTagName
 const listItems = document.getElementsByTagName('li');
console.log(listItems); // Logs an HTMLCollection of <li> elements
for (let i = 0; i < listItems.length; i++) {
     listItems[i].style.fontWeight = 'bold'; // Makes all list items bold
 }

// // querySelector
 const firstParagraph = document.querySelector('.text');
console.log(firstParagraph); // Logs the first <p> element with class 'text'
firstParagraph.classList.add('highlight'); // Adds the 'highlight' class to the first <p> element

// // querySelectorAll
const allParagraphs = document.querySelectorAll('.text');
console.log(allParagraphs); // Logs a NodeList of <p> elements
 allParagraphs.forEach(paragraph => {
     paragraph.setAttribute('style', 'color:red'); // Adds a 'data-info' attribute to all <p> elements
 });

// // style
const button = document.getElementById('change-btn');
 button.style.backgroundColor = 'green'; // Changes the background color of the button to green

// // setAttribute
title.setAttribute('title', 'Main Title'); // Sets a 'title' attribute to the <h1> element

// classList
button.classList.add('highlight'); // Adds the 'highlight' class to the button
