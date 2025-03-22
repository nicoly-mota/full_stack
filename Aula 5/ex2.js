function valaleatorio(){
    let num = parseInt(document.getElementById("numero1").value)

    if(0 <= num <=10){
        alert("Insuficiente")
    } else if (10< num <= 15){
        alert("Bom")
    } else if (15 < num){
        alert("Muito bom")
    }
}