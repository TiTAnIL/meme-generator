'use strict'

const gElCanvas = document.getElementById('canvas')
const gCtx = gElCanvas.getContext('2d')


function writeOnCanvas(x = gElCanvas.width / 2, y = 30) {
    x += 5
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    gCtx.beginPath()
    gCtx.textAlign = getAlignment()
    gCtx.lineWidth = 1; 
    gCtx.fillStyle = getFontColor
    gCtx.font = getFontSize(), getFont()
    gCtx.fillText(getTxt(), x, y);
    gCtx.strokeText(getTxt(), x, y);
    gCtx.closePath()
}



function clearText() {
    console.log('clearing')
    gUserText = ''
    gCtx.clearRect(0, 0, gElUserText.width, gElUserText.height)
}