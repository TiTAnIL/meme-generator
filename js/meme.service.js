'use strict'

const imgDB = 'imgDB'
const contentDB = 'contentDB'
let gImgs = false

if (!gImgs || !gImgs.length) {
    _createImgs()
}


let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'lorem ipsum dolor',
            size: 20,
            align: 'left',
            color: 'black',
            font: 'impact'
        }
    ]
}


function _createImg(keywords = []) {
    const id = makeId()
    const url = ImgPath(id)
    return {
        id: id,
        url: url,
        keywords
    }
}


function _createImgs() {
    const imgs = [
        _createImg(['politics', 'crazy', 'celeb']),
        _createImg(['animal', 'cute']),
        _createImg(['funny', 'animal', 'cute']),
        _createImg(['animal', 'cute']),
        _createImg(['baby', 'cute']),
        _createImg(['crazy', 'aliens', 'sarcastic']),
        _createImg(['baby', 'cute']),
        _createImg(['funny']),
        _createImg(['baby', 'funny']),
        _createImg(['politics', 'sarcastic', 'funny', 'celeb']),
        _createImg(['politics', 'sarcastic']),
        _createImg(['funny', 'sarcastic']),
        _createImg(['movies', 'celeb']),
        _createImg(['movies', 'celeb']),
        _createImg(['movies', 'celeb']),
        _createImg(['movies', 'celeb']),
        _createImg(['politics', 'sarcastic', 'celeb']),
        _createImg(['movies', 'sarcastic']),
    ]
    gImgs = true
    saveImgsToStorage(imgs)
}


function switchViews() {
    // switch view between gallery to meme editor
    var isGallery = elEditorContainer.style.display === 'grid' ? true : false
    if (!isGallery) {
        elGalleryContainer.style.display = 'none'
        elEditorContainer.style.display = 'grid'
    } else {
        elGalleryContainer.style.display = 'grid'
        elEditorContainer.style.display = 'none'
    }
}


function getMeme() {
    return gMeme
}


function getGallery() {
    return loadFromStorage(imgDB)
}


function saveText(txt) {
    gMeme.lines[gMeme.selectedLineIdx]['txt'] = txt
    saveMemeToStorage()
}


function getTxt() {
    return gMeme.lines[gMeme.selectedLineIdx]['txt']
}


function selectedMeme(id) {
    gMeme.selectedImgId = id
}


function buildToCanvas() {
    writeOnCanvas(gMeme.lines[gMeme.selectedLineIdx])
}


function dropdown() {
    document.getElementById("my-drop-down").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function ChangeLine() {
    const currLine = getCurrLine()
    
}


function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}


function setFont(id) {
    switch (id) {
        case '1':
            getCurrLine().font = 'impact'
            break
        case '2':
            getCurrLine().font = 'ubuntu'
            break
        case '3':
            getCurrLine().font = 'playfair'
            break
    }
    saveMemeToStorage()
    renderText()
}


function getFont() {
    return getCurrLine().font
}


function getFontSize() {
    return getCurrLine().size
}


function getFontColor() {
    return getCurrLine().color
}


function getAlignment() {
    return getCurrLine.align
}


function getContent() {
    return loadFromStorage(contentDB)
}


function saveMemeToStorage() {
    saveToStorage(contentDB, gMeme)
}


function saveImgsToStorage(imgs) {
    saveToStorage(imgDB, imgs)
}


function setFontSize(operator) {
    operator === '-' ? getCurrLine().size-- : getCurrLine().size++
    renderText()
}


function setTextAligment(align) {
    getCurrLine.align = align
    renderText()
}


// function handleMouse(ev) {
//     console.log('event type', ev)
//     document.querySelector('.mouse h2').innerText = ev.type
// }

// function handleTouch(ev) {
//     // ev.preventDefault()
//     ev.stopPropagation()
//     console.log('event type:', ev)
//     document.querySelector('.touch h2').innerText = ev.type
// }


