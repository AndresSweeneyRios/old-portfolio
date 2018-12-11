const $ = e => document.querySelector(e), a$ = e => document.querySelectorAll(e);

const page = new Vue({
    el: '#page',
    data: {
        entries: []
    }
});

fetch (location.origin + '/entries.json')
    .then(d=>d.json())
    .then(d=>page.entries=d.entries)
    .catch(console.error);

