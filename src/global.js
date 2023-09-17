const global = {
    // graphics context
    canvas: null,
    ctx: null,
    
    // relate pixels to virtual units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,

    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //internal units

    // 
    backgroundColor: 'white',
    alpha: .1,
    nFadeSteps: 20,
    strokeDuration: 100, //ms
    startThickness: .001, // thickness of newly drawn line
    dThickness: .0001, // increase in thickness per fade step
    
    // total time elapsed in milliseconds
    t: 0,
    startError: 0.5,
    dError: 2e-4, // decrease in error per ms
    minError: 0,
    
    
    //
    currentPattern: null,
    autoResetCountdown: 0,
    autoResetDelay: 12000,

    
    //debug
    //debugPoint: v(0,0),
}