'use strict'
const elGalleryContainer = document.querySelector('.gallery-container')
const elEditorContainer = document.querySelector('.editor-container')
// let elMemeContainer = document.querySelector('.gallery-container')
// let elMemeContainer = document.querySelector('.gallery-container')

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

