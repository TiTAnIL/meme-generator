'use strict'

function saveToStorage(key, val) {
    const STR = JSON.stringify(val)
    localStorage.setItem(key, STR)
}


function loadFromStorage(key) {
    const STR = localStorage.getItem(key)
    return JSON.parse(STR)
}

