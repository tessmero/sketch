allPatterns = [
    butterflyPattern,
    dragonPattern,
    skullPattern,
    carPattern,
    atomPattern,
]
shuffle(allPatterns)
patternIndex = 0

function getNextPattern(){
    patternIndex += 1
    if( patternIndex >= allPatterns.length ){
        shuffle(allPatterns)
        patternIndex = 0
    }
    return allPatterns[patternIndex]
}