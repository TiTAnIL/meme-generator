'use strict'
const elGalleryContainer = document.querySelector('.gallery-container')
const elEditorContainer = document.querySelector('.editor-container')


function init() {
    console.log('Hello')
    renderGallery(getGallery())
}


function renderGallery(gallery) {
    const strHTML = gallery.map(img => `
    <img src="${img.url}"class="gallery-img gallery-img${img.id}" onclick="onImg(${img.id})"></img>
    `)
    elGalleryContainer.innerHTML = strHTML.join('')
}


function renderMeme(id) {
    const img = new Image()
    img.src = `meme-imgs/${id}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    renderText()
}


function renderText() {
    const elText = document.querySelector('.text-box')
    elText.style.fontSize = getFontSize()
    elText.style.fontFamily = getFont()
    elText.style.textAlign = getAlignment()
    const strHTML = gMeme.lines.map( line => `<div class="text-box box">${line.txt}</div>`)
    elText.innerHTML = strHTML.join('')
    console.log('dsfds')
}


function onTxt(el) {
    saveText(el.value)
    renderText()
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


function onChoiceFont(ev) {
    setFont(ev.id)
}


function onChangeLine() {
    ChangeLine()
}


// function onKey() {
//     let text = document.querySelector('[name=user-text]').value
//     drawText(text)
// }


// function onSubmit(ev) {
//     ev.preventDefault()
//     // clearText()
// }

