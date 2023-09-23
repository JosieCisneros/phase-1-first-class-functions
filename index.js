function receivesAFunction (cb) {
    console.log (cb())
}
receivesAFunction (function(){
    return "pinapples"
})

function returnsANamedFunction () {
    const namedFunction = (argument) => argument
    return namedFunction
}

function returnsAnAnonymousFunction () {
    return function (argument) {
        return argument
    } 
}