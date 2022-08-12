'use strict'

const gElCanvas = document.getElementById('canvas')
const gCtx = gElCanvas.getContext('2d')
const gTextCanv = document.getElementById('txt-canvas')
const gCtxTxt1 = gTextCanv.getContext('2d')
let gUserText = ''

function drawText(txt, x = gTextCanv.width / 2, y = 90) {
    x += 5
    gCtxTxt1.clearRect(0, 0, gTextCanv.width, gTextCanv.height);
    gCtxTxt1.beginPath()
    gCtxTxt1.textBaseline = 'middle';
    gCtxTxt1.textAlign = 'center';
    gCtxTxt1.lineWidth = 1;
    gCtxTxt1.font = '40px david';
    // gCtxTxt1.fillStyle = 'yellow';
    gCtxTxt1.fillText(txt, x, y);
    // gCtxTxt1.strokeStyle = 'green';
    gCtxTxt1.strokeText(txt, x, y);
    gCtxTxt1.closePath()
}


function drawImg(id) {
    const img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    };
}


function clearText() {
    console.log('clearing')
    gUserText = ''
    gCtxTxt1.clearRect(0, 0, gElUserText.width, gElUserText.height)
}