var goTop = document.getElementById('goTop')
goTop.onclick = function () {
    pageScroll()
}

function pageScroll() {
    window.scrollBy(0, -10)
    var scrollDelay = setTimeout('pageScroll()', 1)
    if (document.documentElement.scrollTop === 0) {
        clearTimeout(scrollDelay)
    }
}