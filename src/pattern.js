class Pattern {
    constructor(m,bx,by, all_xy){
              
        this.raw_xy = all_xy
              
        // break  segments  
        if( true ){
            var mind2 = .01
            var segs = []
            var batch = []
            all_xy.forEach( part => {
              part.forEach( p => {
                batch.push(p)
                if( batch.length > 1 ){
                    var a = batch[batch.length-2]
                    var b = batch[batch.length-1]
                    var d2 = Math.pow(a[0]-b[0],2) + Math.pow(a[1]-b[1],2)
                    if( d2 < 2e5*m ){
                        batch.pop()
                    }
                }
                if( batch.length >= 4 ){
                    segs.push(batch)
                    batch = [batch[1],batch[2],batch[3]]
                }
              })        
              batch = []
            })
            all_xy = segs
        }
        
        // break up big segments        
        if( false ){
            var targetCount = 50
            while( all_xy.length < targetCount ){
                var r = .4+Math.random()*.2
                var ls = this.longestSeg(all_xy)
                var i = Math.floor(ls.length*r)
                var ln = ls.splice(i,ls.length-i)
                for( var j = 0 ; j < 5 ; j ++ ){
                    if( j >= ln.length ) break
                    ls.push(ln[j])
                }
                all_xy.push( ln )
            }
        }
        
        this.segments = all_xy.map( xy => 
            new Segment(xy.map( p=> [
                m*p[0] + bx,
                m*p[1] + by
            ])) 
        )
        
        this.dt = 0
        this.t = 0
    }
    
    // used in setup.js
    reset(){
        this.error = global.startError
        this.dt = 0
        this.t = 0
        this.segments.forEach(s=>s.reset(this.error,hard=true))
    }
    
    // used in constructor
    longestSeg(all_xy){
        var result = []
        all_xy.forEach(s => {
            if( s.length > result.length ){
                result=s 
            }
        })
        return result
    }
    
    update(dt){
        this.dt = dt
        this.t += dt
        this.error -= global.dError*dt * (this.error/(.5*global.startError))
        if( this.error<global.minError ) this.error = global.minError
        
        // prepare for draw
        if( this.t > global.strokeDuration ) {
            this.segments.forEach(s => {
                s.fadeIndex += 1
                if( s.fadeIndex >= global.nFadeSteps ){
                    s.reset(this.error)
                }
            })
            this.t -= global.strokeDuration
            return
        }
    }
    
    draw(g, fadeIndex){
        this.segments.forEach( s => {
            if( s.fadeIndex != fadeIndex ) return
            s.draw(g)
        })
    }
}