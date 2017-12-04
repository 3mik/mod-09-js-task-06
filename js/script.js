var list = document.getElementById('list'),
    addButton = document.getElementById('js-addElem'),
    countItem = 0;

addButton.addEventListener('click', function(e) {
        countItem += 1;
        var li = document.createElement('li');
        li.innerHTML = 'item ' + countItem;
        list.appendChild(li);
});