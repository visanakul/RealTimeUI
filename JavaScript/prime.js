function fnPrime(){
    //debugger;
    var numRef=document.getElementById("num");
    if(numRef==null){
        alert('Element not found');
        return;
    }
    var numStr=numRef.value;
    if(numStr==''){
        alert('Enter value');
        return;
    }
    var n=Number(numStr);
    if(isNaN (n)){
        alert('Enter only number');
        return;
    }
    console.log('Number : '+n);
    var flag=true;
    
    var msg="Number is Prime";
    for(i=2;i<n/2;i++){
        if(n%i==0){
            flag=false;
            msg="Not a prime number";
            break;
        }
    }
    numRef.style.color='yellow';
    if(flag){
        numRef.style.backgroundColor='green';
    }
    else{
    numRef.style.backgroundColor='red';
    }
    var resRef=document.getElementById("res");
    resRef.innerText=msg;
}