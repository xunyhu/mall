const setFontSize = () => {
    var w = window;
    var doc = w.document;
    var docEl = doc.documentElement;
    var timer;

    function refresh() {
        var width = docEl.getBoundingClientRect().width;
        var designWidth = 375; //750宽度 1rem = 100px  375  1rem=50px
        if (width > designWidth) {
            width = designWidth;
        }
        var rem = width * 100 / designWidth;
        docEl.style.fontSize = rem + "px";
    }
    w.addEventListener('resize', function () {
        timer && clearTimeout(timer);
        timer = setTimeout(refresh, 400);
    })

    w.addEventListener('pageshow', function () {
        timer && clearTimeout(timer);
        timer = setTimeout(refresh, 400)
    })
}

export {
    setFontSize
}