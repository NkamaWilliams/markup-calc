function load():void{
    let stream = getStream()
    display(stream)
}

function equals(){
    let expression:string|number = getCompute()
    let valDisp = /\.\d+(0+)$/
    let stream = getStream()
    expression += stream

    if (expression == ""){
        display("")
        return
    }

    try{
        expression = Number(eval(expression))
    }
    catch(err){
        display("Invalid expression!")
        clearCompute()
        clearStream()
    }

    if (Number.isInteger(expression)){
        expression = expression.toString()
    }
    else{
        expression = expression.toFixed(10)
        expression = valDisp.test(expression)? expression.replace(/0+$/, ""):expression
    }
    clearCompute()
    setStream(expression)
    display(expression)
}

function clearAll():void{
    clearStream()
    clearCompute()
    let stream = getStream()
    console.log(`Clear stream -> ${stream}`)
    display(stream)
}

function del():void{
    let stream = getStream()
    stream = stream.slice(0, stream.length - 1)
    setStream(stream)
    display(stream)
}

function input(val:string):void{
    let stream:string = getStream()
    if (val == '.' && stream.includes('.')){
        stream += ""
    }
    else{
        stream += val
    }
    display(stream)
    setStream(stream)
}

function operator(val:string){
    setCompute(getCompute() + getStream())
    clearStream()
    let exp = getCompute() + ` ${val} `
    setCompute(exp)
    display(val)
}

function display(stream:string):void{
    let scr = document.getElementById("screen")
    if (scr === null){
        return
    }
    else{
        scr.innerHTML = stream
    }
}

function getStream():string{
    return sessionStorage.getItem("stream") || ""
}

function getCompute():string{
    return sessionStorage.getItem('compute') || ""
}

function setStream(stream:string):void{
    sessionStorage.setItem("stream", stream)
}

function setCompute(stream:string):void{
    sessionStorage.setItem('compute', stream)
}

function clearStream():void{
    sessionStorage.setItem("stream", "")
}

function clearCompute():void{
    sessionStorage.setItem('compute', '')
}

// function completeExpression(exp:string):boolean{
//     const ops = ['+', '-', '*', '/']
//     console.log("Checking expression...")
//     for (let i = 0; i < ops.length; i++){
//         if (exp.includes(ops[i])){
//             return true
//         }
//     }
//     return false
// }