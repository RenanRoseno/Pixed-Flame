const flamePixed = []
const flameWidth = 20
const flameHeight = 11      



function start(){
    createStructure()
    console.log(flamePixed)
    renderFlame()
}

function calculateFlamePropagation(){
    
}

function createStructure(){
    const numberOfPixels = flameHeight * flameWidth

    for(let i = 0; i < numberOfPixels;i++){
        flamePixed[i] = 0
    }
}

function renderFlame(){
    let html = '<table cellpadding=0 cellspacing=0 align=center>'

    for(let row = 0; row < flameHeight; row++){
        html += '<tr>'

        for(let column = 0; column < flameWidth;column++){
            const pixelIndex = column + (flameWidth * row)
            const flameIntesity = flamePixed[pixelIndex]

            html += '<td>'
            html += `<div class= "pixel-index">${pixelIndex}</div>`
            html += flameIntesity
            html += '</td>'
        }

        html += '</tr>'
    }
    html += '</table>'

    document.querySelector('#Flame').innerHTML = html
}


start()