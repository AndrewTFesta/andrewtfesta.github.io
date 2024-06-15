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

