let op = null;
let num1 = null;

function saveInput(num){
    return num
}

function tampil(out){
    document.getElementById("out").innerHTML = out;
}

function tambah(){
    num1 = saveInput(document.getElementById("userInput").value)
    tampil(num1)
    document.getElementById("userInput").value = ""
    op = 1;
}

function kurang(){
    num1 = saveInput(document.getElementById("userInput").value)
    tampil(num1)
    document.getElementById("userInput").value = ""
    op = 2;
}

function kali(){
    num1 = saveInput(document.getElementById("userInput").value)
    tampil(num1)
    document.getElementById("userInput").value = ""
    op = 3;
}

function bagi(){
    num1 = saveInput(document.getElementById("userInput").value)
    tampil(num1)
    document.getElementById("userInput").value = ""
    op = 4;
}

function equal(){
    let num2 = saveInput(document.getElementById("userInput").value);
    if (op === 1){
        let num3 = parseInt(num1) + parseInt(num2)
        tampil(num3)
    }else if (op === 2){
        let num3 = parseInt(num1) - parseInt(num2)
        tampil(num3)
    }else if (op === 3){
        let num3 = parseInt(num1) * parseInt(num2)
        tampil(num3)
    }else if (op === 4){
        let num3 = parseInt(num1) / parseInt(num2)
        tampil(num3)
    }
}