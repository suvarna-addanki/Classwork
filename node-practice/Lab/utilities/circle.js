function area(radiusparam) {
    return(Math.PI* radiusparam*radiusparam).toFixed(2)
        
}

function circumference(radiusparam) {
    return(2 * Math.PI * radiusparam).toFixed(4)
}

module.exports = {circumference,area}
// module.exports = area;

// let circle = {

// }