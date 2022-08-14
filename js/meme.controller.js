'use strict'
const elGalleryContainer = document.querySelector('.gallery-container')
const elEditorContainer = document.querySelector('.editor-container')


function init() {
    console.log('Hello')
    renderGallery(getGalleryDisplay())
}


function renderGallery(gallery) {
    const strHTML = gallery.map(img => `
    <img src="${img.url}"class="gallery-img gallery-img${img.id}" onclick="onImg(${img.id})"></img>
    `)
    elGalleryContainer.innerHTML = strHTML.join('')
}


function renderMeme(id) {
    // getMeme()
    const img = new Image()
    img.src = `meme-imgs/${id}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function renderText(txt) {
    const elText = document.querySelector('.text-box')
    const strHTML = gMeme.lines.map( line => `<div class="text-box box">${line.txt}</div>`)
    elText.innerHTML = strHTML.join('')

}


function onTxt(el) {
    saveText(el.value)
    renderText(el.value)
}


function onImg(id) {
    selectedMeme(id)
    renderMeme(id)
    switchViews()
}


function onAddLine() {
    gMeme.lines[gMeme.lines.length] = {
        txt: 'lorem ipsum dolor',
        size: 20,
        align: 'left',
        color: 'black'
    }
console.log(gMeme.lines)
}


function onChangeLine() {
    ChangeLine(getCurrLine())
}


// function onKey() {
//     let text = document.querySelector('[name=user-text]').value
//     drawText(text)
// }


// function onSubmit(ev) {
//     ev.preventDefault()
//     // clearText()
// }

