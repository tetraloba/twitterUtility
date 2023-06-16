window.addEventListener("load", main, false);

function killAnnoying() {
    var header = document.body.children[1].firstChild.firstChild.children[2].firstChild; // header
    // console.log('mainRole'); // debug
    // console.log(mainRole); // debug
    var mainMenu = header.firstChild.firstChild.firstChild.firstChild.children[1].firstChild;
    mainMenu.children[7].remove();
}

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 3000);
    function jsLoaded() {
        if (document.querySelector('#layers') != null) {
            clearInterval(jsInitCheckTimer);
            console.log('layers founded!!'); // debug
            killAnnoying();
        }
    }
}