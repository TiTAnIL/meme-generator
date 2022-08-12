'use strict'
const elGalleryContainer = document.querySelector('.gallery-container')
const elEditorContainer = document.querySelector('.editor-container')
let gElUserText


function init() {
    console.log('Hello')
    renderGallery(getGalleryDisplay())
}


function renderGallery(gallery) {
    let strHTML = gallery.map(img => `
    <img src="${img.url}"class="gallery-img gallery-img${img.id}" onclick="onImg(${img.id})"></img>
    `)
    elGalleryContainer.innerHTML = strHTML.join('')
}


function onImg(id) {
    switchViews()
    renderMemeEditor(id)
}


function onAdd() {
    uploadImg()
}


function onKey() {
    let text = document.querySelector('[name=user-text]').value
    drawText(text)
}


function onSubmit(ev) {
    ev.preventDefault()
    // clearText()
}