'use strict'

function saveToStorage(key, val) {
    const STR = JSON.stringify(val)
    localStorage.setItem(key, str)
}


function loadFromStorage(key) {
    const STR = localStorage.getItem(key)
    return JSON.parse(str)
}

