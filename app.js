function smallBig(arr){
    return [Math.min(...arr), Math.max(...arr)]
}


console.log(smallBig([0,0,0,0]))


module.exports=smallBig