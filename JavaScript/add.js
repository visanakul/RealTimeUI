function fnAdd(){
    debugger;
    var num1Ref=document.getElementById("num1");
    var num2Ref=document.getElementById("num2");
    var n1=num1Ref.value;
    var n2=num2Ref.value;
    document.getElementById("res").innerText='Addition : '+(Number(n1)+Number(n2));
}