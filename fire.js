const flamePixed = []
const flameWidth = 10 
const flameHeight = 10      



function start(){
    createStructure()
    createFlameSource()
    renderFlame()

    setInterval(calculateFlamePropagation, 1000)
}

function calculateFlamePropagation(){
    for(let column = 0; column < flameWidth; column++){
        for(let row = 0; row < flameHeight; row++){
            const pixelIndex = column + ( flameWidth * row)
            console.log(pixelIndex)
            updateFlameIntensityPerPixels(pixelIndex)
        }
    }
    renderFlame()
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

function createFlameSource(){
    for(let column = 0; column <= flameWidth; column++){
        const overFlowPixelIndex = flameWidth * flameHeight
        const pixelIndex = (overFlowPixelIndex - flameWidth) + column
        flamePixed[pixelIndex] = 36
    }
}

function updateFlameIntensityPerPixels(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + flameWidth
    
    if(belowPixelIndex >= flameWidth * flameHeight){
        return
    }

    const decay = 1
    const belowPixelFireIntensity = flamePixed[belowPixelIndex]
    const newIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

    flamePixed[currentPixelIndex] = newIntensity
}   

start()