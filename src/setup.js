

// Initialize the game
function init() {
    var cvs = document.getElementById("gameCanvas");
    cvs.addEventListener("mousemove", mouseMove);
    cvs.addEventListener("click", mouseClick);
    global.canvas = cvs
    global.ctx = cvs.getContext("2d");
    
    resetRand()
    
    resetGame()
    requestAnimationFrame(gameLoop);
}


function resetGame(){
    resetRand(hard=true)
    global.autoResetCountdown = global.autoResetDelay
    global.t = 0
    fitToContainer()
    global.ctx.clearRect( 0, 0, global.canvas.width, global.canvas.height )
    global.currentPattern = getNextPattern()
    
    console.log( JSON.stringify(global.currentPattern.raw_xy, function(key, val) {
        return val.toFixed ? Number(val.toFixed(0)) : val;
    }))
    
    global.currentPattern.reset()
}

function fitToContainer(){
    
    var cvs = global.canvas
  cvs.style.width='100%';
  cvs.style.height='100%';  
  cvs.width  = cvs.offsetWidth;
  cvs.height = cvs.offsetHeight;
    
    var padding = 0; // (extra zoom IN) thickness of pixels CUT OFF around edges
    var dimension = Math.min(cvs.width, cvs.height) + padding*2;
    global.canvasScale = dimension;
    global.canvasOffsetX = (cvs.width - dimension) / 2;
    global.canvasOffsetY = (cvs.height - dimension) / 2;
    
    global.ctx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
    global.ctx.fillStyle = global.backgroundColor
    global.ctx.fillRect( 0, 0, cvs.width, cvs.height )
}



// Main game loop
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
    
    var msPassed = 0;
    if (oldTimeStamp) {
      msPassed = timeStamp - oldTimeStamp;
    }
    var secondsPassed = msPassed / 1000;
    oldTimeStamp = timeStamp;
    var fps = Math.round(1 / secondsPassed);


    msPassed = Math.min(msPassed,50)

    update(msPassed);
    draw(fps);

    requestAnimationFrame(gameLoop);
}


// Initialize the game
init();

