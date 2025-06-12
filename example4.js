// Remove the last item from the list
const list = document.getElementById('list');
const button = document.getElementById('remove-btn');

button.addEventListener('click', () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
