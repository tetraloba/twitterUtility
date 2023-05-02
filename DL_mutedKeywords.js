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
    /* BlobとそのURLを作成して表示 */
    const bom  = new Uint8Array([0xEF, 0xBB, 0xBF]); // utf-8 BOM
    let str_blob = '';
    mutedKeywords.forEach(function(mutedKeyword){
        str_blob += mutedKeyword + "\n";
    });
    const str_url = URL.createObjectURL(new Blob([bom, str_blob], {type: "text/csv"})); // URLの生成
    const title = mainRole.firstChild.firstChild.firstChild.firstChild;
    const new_element = document.createElement("a");
    new_element.download = 'mutedKeywords.csv';
    new_element.href = str_url;
    new_element.textContent = 'Download mutedKeywords.csv here!';
    title.appendChild(new_element); // コメント部分にURLを追加
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