'use strict';

document.addEventListener('selectionchange', () => {
    const word = document.getSelection().toString().toLocaleLowerCase();
    if (word.length > 3) {
        fetch('https://www.dictionary.com/browse/' + word).then(response => {
            return response.text();
        }).then(htmlString => {
            const parser = new DOMParser();
            const html = parser.parseFromString(htmlString, 'text/html');
            const items = html.querySelectorAll("span.one-click-content");
            const values = [];
            for (let i = 0; i < items.length; i++) {
                values.push(items[i].innerText);
            }
            console.log(values.join(' '));
            console.log($x("//body"))
        });
    }
});
