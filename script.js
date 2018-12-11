const $ = e => document.querySelector(e), a$ = e => document.querySelectorAll(e);

const page = new Vue({
    el: '#page',
    data: {
        entries: [],
        page: 'home'
    }
});

fetch (location.origin + '/entries.json')
    .then(d=>d.json())
    .then(d=>page.entries=d.entries)
    .catch(console.error);

window.addEventListener('click', e => {
    switch (e.target.id) {
        case 'home': page.page = 'home'; break;
        case 'about': page.page = 'about'; break;
        case 'contact': page.page = 'contact'; break;
    }
});