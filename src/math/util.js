// shorthands
var pi = Math.PI
var pio2 = Math.PI/2
var twopi = 2*Math.PI
function v(){return new Vector(...arguments)}
function vp(){return Vector.polar(...arguments)}


function randRange(min,max){
    return min + rand()*(max-min)
}

function dist(a,b){
    var dx = a[0]-b[0]
    var dy = a[1]-b[1]
    return Math.sqrt( dx*dx + dy*dy )
}

function avg2(a,b,r=.5){
    return [
        a[0]*(1-r) + b[0]*r,
        a[1]*(1-r) + b[1]*r,
    ]
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}