

function update(dt) {    
    global.t += dt
    
    global.currentPattern.update(dt)
    
    if( true ){
        global.autoResetCountdown -= dt
        if( global.autoResetCountdown < 0 ){
            resetGame()
        }
    }
}