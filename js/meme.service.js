'use strict'

let gImgs
const imgDB = 'imgDB'
_createImgs()
const gElCanvas = document.getElementById('canvas');
const gCtx = gElCanvas.getContext('2d');

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
    console.log(gImgs)
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


function renderMemeEditor(id) {
    console.log(gElCanvas.width, gElCanvas.height)
    const img = new Image()
    img.src = `meme-imgs/${id}.jpg` // ?? Y ${img.url} failing ??
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function getGalleryDisplay() {
    return gImgs
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

