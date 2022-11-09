function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if(!Number(c)){
        alert("O valor do capital deve ser um número.");
        document.getElementById("capital").value = "";
        document.getElementById("capital").focus();
        return 
    }
    if(!Number(j)){
        alert("O valor dos juros deve ser um número.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return 
    }
    if(!Number(t)){
        alert("A quantidade de meses deve ser um número.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return 
    }
    let m = 0;
    for(let i = 1; i <= t; i++){
        m = c * (1 + (j/100));
        //document.write("Valor no mês " + i + " = " + m + "<br>");
        c = m;
    }
    document.getElementById("total").innerHTML = m;
    //document.write("Montante: " + m);
}

function calculaRaiz(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    //ax2 + bx + c = 0
    let delta = (b*b) - (4*a*c);

    if (delta < 0){
        document.getElementById("raiz").innerHTML = "Não possui raiz real";
    } else if (delta == 0){
        let x1 = (-b)/(2*a);
        document.getElementById("raiz").innerHTML = "x1 = x2 = " + x1;
    } else {
        let x1 = ((-b) + Math.sqrt(delta))/(2*a);
        let x2 = ((-b) - Math.sqrt(delta))/(2*a);
        document.getElementById("raiz").innerHTML = "x1 = " + x1 + " x2 = " + x2;
    }
}

