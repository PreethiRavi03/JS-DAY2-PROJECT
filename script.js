//function add(){
//  let a=5;
//  let b=6;
//  let c=a+b;
// document.write(c);
//}
function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    let d=a-b;
    let e=a*b;
    let f=a/b;
    document.getElementById("b1").innerHTML="ADDITION:"+c;
    document.getElementById("b2").innerHTML="SUBTRACTION:"+d;
    document.getElementById("b3").innerHTML="MULTIPLICATION:"+e;
    document.getElementById("b4").innerHTML="DIVISION:"+f;
}