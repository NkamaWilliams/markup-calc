function load() {
    var stream = getStream();
    display(stream);
}
function equals() {
    var expression = getCompute();
    var valDisp = /\.\d+(0+)$/;
    var stream = getStream();
    expression += stream;
    if (expression == "") {
        display("");
        return;
    }
    try {
        expression = Number(eval(expression));
    }
    catch (err) {
        display("Invalid expression!");
        clearCompute();
        clearStream();
    }
    if (Number.isInteger(expression)) {
        expression = expression.toString();
    }
    else {
        expression = expression.toFixed(10);
        expression = valDisp.test(expression) ? expression.replace(/0+$/, "") : expression;
    }
    clearCompute();
    setStream(expression);
    display(expression);
}
function clearAll() {
    clearStream();
    clearCompute();
    var stream = getStream();
    console.log("Clear stream -> ".concat(stream));
    display(stream);
}
function del() {
    var stream = getStream();
    stream = stream.slice(0, stream.length - 1);
    setStream(stream);
    display(stream);
}
function input(val) {
    var stream = getStream();
    if (val == '.' && stream.includes('.')) {
        stream += "";
    }
    else {
        stream += val;
    }
    display(stream);
    setStream(stream);
}
function operator(val) {
    setCompute(getCompute() + getStream());
    clearStream();
    var exp = getCompute() + " ".concat(val, " ");
    setCompute(exp);
    display(val);
}
function display(stream) {
    var scr = document.getElementById("screen");
    if (scr === null) {
        return;
    }
    else {
        scr.innerHTML = stream;
    }
}
function getStream() {
    return sessionStorage.getItem("stream") || "";
}
function getCompute() {
    return sessionStorage.getItem('compute') || "";
}
function setStream(stream) {
    sessionStorage.setItem("stream", stream);
}
function setCompute(stream) {
    sessionStorage.setItem('compute', stream);
}
function clearStream() {
    sessionStorage.setItem("stream", "");
}
function clearCompute() {
    sessionStorage.setItem('compute', '');
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
