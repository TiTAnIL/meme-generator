'use strict'

var increment = 0
function makeId() {
    increment = increment === 0 ? 1 : ++increment
    return increment
}


function ImgPath(id) {
    return `meme-imgs/${id}.jpg`
}

