'use strict'

const gElCanvas = document.getElementById('canvas')
const gCtx = gElCanvas.getContext('2d')


function writeOnCanvas(txt, x = gElCanvas.width / 2, y = 30) {
    x += 5
    // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    gCtx.beginPath()
    gCtx.textAlign = "center"
    gCtx.lineWidth = 1;
    gCtx.font = '40px david';
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}



function clearText() {
    console.log('clearing')
    gUserText = ''
    gCtx.clearRect(0, 0, gElUserText.width, gElUserText.height)
}