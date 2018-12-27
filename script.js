const $ = e => document.querySelector(e), a$ = e => document.querySelectorAll(e);

const page = new Vue({
    el: '#page',
    data: {
        entries: [],
        page: 'home',
        bio: '',
        skillset: []
    }
});

const get = w => fetch (location.origin + '/' + w).then(d=>d.text())
const getJSON = w => fetch (location.origin + '/' + w).then(d=>d.json())

getJSON ('entries.json')
    .then(d=>page.entries = d.entries)
    .catch(console.error);

get ('bio.html')
    .then(d=>page.bio = d)
    

window.addEventListener('click', e => {
    switch (e.target.id) {
        case 'home': page.page = 'home'; break;
        case 'about': page.page = 'about'; break;
        case 'contact': page.page = 'contact'; break;
    }
});

const renderHTML = () => {
    if ($('#html-canvas')) {
        $('#html-canvas').getContext('2d').clearRect(0,0,$('#html-canvas').width,$('#html-canvas').height);
        $('#html-canvas').remove();
    }

    html2canvas(document.body).then(canvas => {
        canvas.id = "html-canvas";
        document.body.prepend(canvas);
    });
}