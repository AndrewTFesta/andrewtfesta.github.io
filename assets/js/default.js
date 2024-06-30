// Toggle open all details elements, onload
// Regardless of their initial status
function openAllDetails() {
    var detailsElems = document.body.querySelectorAll('details');
    detailsElems.forEach((e) => {
        if(!e.hasAttribute('open')) {
            e.setAttribute('open',true);
        }
    });
}

function closeAllDetails() {
    var detailsElems = document.body.querySelectorAll('details');
    detailsElems.forEach((e) => {
        if(e.hasAttribute('open')) {
            e.removeAttribute('open');
        }
    });
}
function toggleAllDetails() {
    var detailsElems = document.body.querySelectorAll('details');
    detailsElems.forEach((e) => {
        if(!e.hasAttribute('open')) {
            e.setAttribute('open',true);
        } else {
            e.removeAttribute('open');
        }
    });
}

// How to make it site-wide?
function enableHacker() {
    var toggle_style = document.getElementById('toggle_style');
    toggle_style.setAttribute('href', '../assets/css/hacker.css');
}

function enableCayman() {
    var toggle_style = document.getElementById('toggle_style');
    toggle_style.setAttribute('href', '../assets/css/cayman.css');
}
