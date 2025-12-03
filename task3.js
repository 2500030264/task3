functionconvertNumbers(){
    const num = parseInt(document.getElementById("input1").value);
    const format = document.getElementById("formatSelect").value;
    const resultDiv = document.getElementById("result");

    if(isNaN(num)){
        resultDiv.innerText="please enter a valid name";
        resultDiv.style.color="red";
        return;
    }
     let result ="";
     if (format=== "oct"){
        result = num.toString(8);
     } else if (format === "hex"){
        result = num.toString(16).toUpperCase();
     }
     resultDiv.style.color="green"; 
     resultDiv.innerText=`Converted Value:${result}`;
}