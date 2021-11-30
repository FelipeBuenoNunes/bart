let heightDiv = document.querySelector("article > div").offsetHeight;

let quadro = document.getElementById("quadro");

function nada(){
    quadro.innerText = "";
    const qtd = parseInt(document.querySelector("input[type = 'number']").value);
    const frase = " O aquecimento global não comeu meu dever de casa"; //47
    let cont = 0;
    let n = 0;
    let i = 0;
    console.log(qtd);
    while(n < qtd){
        while(i < 49){
            if(quadro.offsetHeight > heightDiv){
                quadro.innerText = "";
                cont++;
            }

            if(frase[i] == " "){
            quadro.innerText += " " + frase[i+1];
            i++;
            console.log("a");
            }else{
            quadro.innerText += frase[i];
            console.log("b");
            } 
            i++;
        }
        i = 0;
        n++;
    }

    document.getElementById("apago").innerText = "Quantas vezes o quadro foi apagado: " + cont;
}