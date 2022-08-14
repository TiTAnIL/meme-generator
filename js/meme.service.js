'use strict'

let gImgs
const imgDB = 'imgDB'
const contentDB = 'contentDB'
_createImgs()


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
    let imgs = gImgs
    if (!imgs || !imgs.length) {
        const IMGS = [
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
        gImgs = IMGS
    }
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


function getGalleryDisplay() {
    return gImgs
}


function saveText(txt) {
    gMeme.lines[gMeme.selectedLineIdx]['txt'] = txt
    saveMemeToStorage()
}


function getTxt() {
    return gMeme.lines[gMeme.selectedLineIdx]['txt']
}




// function getImgId() {
//     return gImgs.selectedImgId
// }


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
    console.log(currLine)
    //if (getCurrLine() +1 >= gMeme.lines.length)
    
}


function getCurrLine() {
    return gMeme.selectedLineIdx
}


function setFont(id) {
    switch (id) {
        case '1':
            gMeme.font = 'impact'
        case '2':
            gMeme.font =  'ubuntu'
        case '3':
            gMeme.font =  'playfair'
    }
    saveMemeToStorage()
}


function saveMemeToStorage() {
    saveToStorage(memeDB, gMeme)
}

function saveImgToStorage() {
    saveToStorage(imgDB, gImgs)
}


function getFromStorage(key) {
    return key
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