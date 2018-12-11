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
    .then(d=>{
        page.entries = d.entries;
        if (html2canvas) page.$nextTick(renderHTML);
    }).catch(console.error);

window.addEventListener('click', e => {
    switch (e.target.id) {
        case 'home': page.page = 'home'; break;
        case 'about': page.page = 'about'; break;
        case 'contact': page.page = 'contact'; break;
    }
});

const renderHTML = () => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ($('#html-canvas')) {
            $('#html-canvas').getContext('2d').clearRect(0,0,$('#html-canvas').width,$('#html-canvas').height);
            $('#html-canvas').remove();
        }

        html2canvas(document.body).then(canvas => {
            canvas.id = "html-canvas";
            document.body.prepend(canvas);
        });
    }

}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    $('body').style.backgroundImage = 'url(static_bg.png)';