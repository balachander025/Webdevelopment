// Create a new paragraph and append it to the container
const container = document.getElementById('container');
const button = document.getElementById('add-btn');

button.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'New Paragraph';
    container.appendChild(newParagraph);
});
