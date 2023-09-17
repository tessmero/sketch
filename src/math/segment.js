// Continuous stroke path

class Segment{
    constructor( xy ){        
        this.xy = xy
        this.error = 0
    }
    
    reset(error,hard=false){ 
        if( isNaN(error ) ){
            console.log('poop')
        }
    
        this.fadeIndex = hard ? (Math.floor((.5-Math.random())*global.nFadeSteps)) : 0
        var r = .05//.2+Math.random()*.2
        this.exy = this.xy.map( p => {
            
            return [Math.random(),Math.random()]
            
            var a = Math.atan2( p[1]-.5, p[0]-.5 )
            return [.5+r*Math.cos(a),.5+r*Math.sin(a)]
        } )
        this.error = error
    }
    
    draw(g){
        g.moveTo(...this.p(0))
        g.bezierCurveTo(...this.p(1), ...this.p(2), ...this.p(3) )
    }
    
    // used in draw 
    p(i){ 
        
        // apply error
        var a = this.xy[i]
        var b = this.exy[i]
        return avg2(a,b,this.error)
    }
}