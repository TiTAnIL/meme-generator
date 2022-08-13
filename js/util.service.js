'use strict'

var increment = 0
function makeId() {
    increment = increment === 0 ? 1 : ++increment
    return increment
}


function ImgPath(id) {
    return `meme-imgs/${id}.jpg`
}


function isLetter(str) {
     if (str.length === 1 && str.match(/[a-z]/i))
        return true
    else return false
}

// function isNumber(val) {
// if (typeof(val) === 'number') return true
// else return false
// }

function isWriteable(value) {
    if (value >= 48 && value <= 57 ||
        value >= 65 && value <= 90 ||
        value >= 95 && value <= 105 ||
        value === 32) return true
            else return false
}

