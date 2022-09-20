function compraJamon(){
    let cantidadJamon = document.getElementById("cantiadJamon").value;

    let total = cantidadJamon * 5000;

    return total;    
}
function compraPiña(){
    let cantidadPiña = document.getElementById("cantidadPiña").value;
    let total = cantidadPiña * 8000;

    return total;

}
function compraQueso(){
    let cantidadQueso = document.getElementById("cantidadQueso").value;
    let total = cantidadQueso * 7000;

    return total;
}

function compraVegetariana(){
    let cantidadVegetariana= document.getElementById("cantidadVegetariana").value;
    let total = cantidadVegetariana * 5000;
    return total;
}

function compraPeperoni(){
    let cantidadPeperoni = document.getElementById("cantidadPeperoni").value; 
    let total = cantidadPeperoni * 7000;
    return total;
}



function liquidar(){

    let totalLiquidacion = document.getElementById("capaMostrar");  
    let total =  compraJamon()+compraPeperoni()+compraPiña()+compraQueso()+compraQueso()

    return totalLiquidacion.innerHTML = 
    "La cantidad de pizza de Jamon es:" + compraJamon()+ 
    '<br>'+
    "La cantidad de pizza de Piña es:" + compraPiña()+
    '<br>'+
    "La cantidad de pizza de Tres Quesos es:" + compraQueso()+
    '<br>'+
    "La cantidad de pizza Vegetariana es:" + compraVegetariana()+
    '<br>'+
    "La cantidad de pizza Peperoni es:" + compraPeperoni() +
    '<br>'+
    "Total de la liquidacion es:" + total;
}















