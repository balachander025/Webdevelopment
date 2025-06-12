// Change the text content of the main title
const title = document.getElementById('main-title');
title.innerHTML = 'Hello DOM!';

// Change the text color of all paragraphs to blue
const paragraphs = document.getElementsByClassName('text');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// Add 'highlight' class to the first paragraph
const firstParagraph = document.querySelector('.text');
firstParagraph.classList.add('highlight');

// Change the button's background color
const button = document.getElementById('change-btn');
button.style.backgroundColor = 'green';
