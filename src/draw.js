
    
    
// Render graphics
function draw(fps, t) {
   var ctx = global.ctx
   var canvas = global.canvas
    ctx.lineCap = 'round'
   
    //ctx.clearRect( 0, 0, canvas.width, canvas.height )
    for( var fi = 0 ; fi < global.nFadeSteps ; fi++ ){
        if( false && (fi == global.nFadeSteps-1) ){
            ctx.strokeStyle = global.backgroundColor
        } else {
            this.d = Math.floor(255*(fi/global.nFadeSteps))
            ctx.strokeStyle = `rgba(${d},${d},${d},${global.alpha})`
        }
        ctx.lineWidth = global.startThickness + global.dThickness*fi
        ctx.beginPath()
        global.currentPattern.draw(ctx,fi)
        ctx.stroke()
    }
    
    //debug
    //drawFilledChunks(ctx)
    
    //y += 30
    //ctx.fillText(`camera: ${cameraX.toFixed(2)}, ${cameraY.toFixed(2)}, ${zoomLevel.toFixed(2)}`, x, y);
    //y += 30
    //ctx.fillText(gameState, x, y);
    //y += 30 
    //ctx.fillText(`canvas pos: ${canvasMouseX}, ${canvasMouseY}`, x, y);
    //y += 30
    //ctx.fillText(`virtual pos: ${virtualMouseX}, ${virtualMouseY}`, x, y);
}