window.addEventListener("load", main, false);

function getMutedKeywords() {
    var mainRole = document.body.children[1].firstChild.firstChild.children[2].children[1]; // role="main"
    // console.log('mainRole'); // debug
    // console.log(mainRole); // debug
    var collection = mainRole.firstChild.firstChild.firstChild.children[1].firstChild.children;
    var mutedKeywords = [];
    for (var i = 1; i < collection.length; i++) {
        mutedKeywords.push(collection[i].firstChild.firstChild.firstChild.textContent);
    }
    /* mutedKeywords配列の中身をコンソールに出力 */
    mutedKeywords.forEach(element => console.log(element));
}

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 3000);
    function jsLoaded() {
        if (document.querySelector('#layers') != null) {
            clearInterval(jsInitCheckTimer);
            console.log('layers founded!!'); // debug
            getMutedKeywords();
        }
    }
}