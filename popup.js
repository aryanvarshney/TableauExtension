
window.addEventListener('load', init)

function init() {
    document.getElementById('visual').addEventListener('click', showVisual)
}

function showVisual() {
    chrome.tabs.create({active: true, url: '/tableau-visual.html'})
}