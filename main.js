function compraJamon(){
    let cantidadJamon = document.getElementById("cantiadJamon").value;
    let resultado = document.getElementById("capaMostrar")

    let total = cantidadJamon * 5000;

    return resultado.innerHTML = "total es:" + total;    

}
