let jamon =  0;
let piña = 0;
let queso = 0;
let vegetal = 0;
let peperoni = 0;
let dedos = 0;
let alitas = 0;
let ensalada = 0;
let nuggets = 0;
let rolls = 0;
let hits = 0;
let hitl = 0;
let fanta = 0;
let coca = 0;
let total = 0;

function compraJamon() {
  let cantidadJamon = document.getElementById("cantiadJamon").value;
  if(cantidadJamon <= 0){
   jamon = 0 ;
   return jamon;
  }else{
    jamon = cantidadJamon * 20000;
    return jamon;
  }

  
}
function compraPiña() {
  let cantidadPiña = document.getElementById("cantidadPiña").value;
  if(cantidadPiña <= 0){
    piña = 0 ;
    return piña;
   }else{
    piña = cantidadPiña * 22000;
    return piña;
  }
  
}
function compraQueso() {
  let cantidadQueso = document.getElementById("cantidadQueso").value;
  if(cantidadQueso <= 0){
    queso= 0;
    return queso;
  }else{
    queso = cantidadQueso * 25000;
    return queso;
  }


  
}

function compraVegetariana() {
  let cantidadVegetariana = document.getElementById(
    "cantidadVegetariana"
  ).value;
  if(vegetal <= 0){
    vegetal = 0;
    return vegetal;
  }else{
    vegetal = cantidadVegetariana * 25000;
    return vegetal;

  }
  
}

function compraPeperoni() {
  let cantidadPeperoni = document.getElementById("cantidadPeperoni").value;
  if(cantidadPeperoni <=0){
    peperoni = 0;
    return peperoni;
  }else{
    peperoni = cantidadPeperoni * 23000;
    return peperoni;
  }
  
}
function compraDedos() {
  let cantiadDedos = document.getElementById("cantiadadDedos").value;
  if(cantiadDedos <= 0){
    dedos = 0;
    return dedos;
  }else{
    dedos  = cantiadDedos * 4000;
    return dedos;
  }
  
}
function compraAlitas() {
  let cantiadadAlitas = document.getElementById("cantidadAlitas").value;
  if(cantiadadAlitas <=0){
    alitas = 0;
    return alitas;
  }else{
    alitas = cantiadadAlitas * 5000;
    return alitas;
  }
  
}
function compraEnsalada() {
  let cantidadEnsalda = document.getElementById("cantidadEnsalada").value;
  if(cantidadEnsalda <= 0){
    ensalada = 0;
    return ensalada;
  }else{
    ensalada = cantidadEnsalda * 4000;
    return ensalada;
  }
  
}
function compraNuggets() {
  let cantiadadNuggets = document.getElementById("cantidadNuggets").value;
  if(cantiadadNuggets <=0){
    nuggets = 0;
    return nuggets;
  }else{
    nuggets = cantiadadNuggets * 6000;
    return nuggets;
  }
  
}
function compraRolls() {
  let cantidadRolls = document.getElementById("cantidadRolls").value;
  if(cantidadRolls <= 0){
    rolls = 0;
    return rolls;
  }else{
    rolls = cantidadRolls * 5000;
    return rolls;
  }
  
}
function compraHit() {
  let cantidadHits = document.getElementById("cantiadHit").value;
  if(cantidadHits <= 0){
    hits = 0;
    return hits;
  }else{
    hits = cantidadHits * 2500;
    return hits;
  }
  
}
function compraHitL() {
  let cantidadHitL = document.getElementById("cantidadHiTL").value;
  if(cantidadHitL <= 0){
    hitl = 0;
    return hitl;
  }else{
    hitl = cantidadHitL * 5000;
    return hitl;
  }
  
}
function compraFanta() {
  let cantidadFanta = document.getElementById("cantidadFanta").value;
  if(cantidadFanta <= 0){
    hitl = 0;
    return fanta;
  }else{
    fanta = cantidadFanta * 3000;
    return fanta;
  }
  
}
function compraCocaCola() {
  let cantidadCocaCola = document.getElementById("cantidadCocaCola").value;
  if(cantidadCocaCola <= 0){
    coca = 0;
    return coca;
  }else{
    coca = cantidadCocaCola * 6000;
    return coca;
  }
  
}

function liquidar() {

  let totalLiquidacion = document.getElementById("capaMostrar");
    prompt("Ingresa tu direccion");

  if (jamon > 0) {
    totalLiquidacion.innerHTML +="Total de Pizza de Jamon es: " + jamon + "<br>";   
  }

  if(piña > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Piña es: " + piña+ "<br>";
  }

  if(queso > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Queso es: " + queso+ "<br>";
  }
  if(vegetal > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Vegetariana es: " + vegetal+ "<br>";
  }
  if(peperoni > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Peperoni es: " + peperoni+ "<br>";
  }

  if(dedos> 0){
    totalLiquidacion.innerHTML += "Total Dedos de Queso es: " + dedos+ "<br>";
  }

  if(alitas > 0){
    totalLiquidacion.innerHTML += "Total Alitas de pollo es: " + alitas+ "<br>";
  }
  if(ensalada > 0){
    totalLiquidacion.innerHTML += "Total de la Ensalada es: " + ensalada+ "<br>";
  }

  if(nuggets> 0){
    totalLiquidacion.innerHTML += "Total de los Nuggets es: " + nuggets+ "<br>";
  }

  if(rolls> 0){
    totalLiquidacion.innerHTML += "Total de los Rolls es: " + rolls+ "<br>";
  }

  if(hits> 0){
    totalLiquidacion.innerHTML += "Total Jugo Hits 500ML es: " + hits+ "<br>";
  }

  if(hitl> 0){
    totalLiquidacion.innerHTML += "Total  Jugo HiT 1L: " + hitl+ "<br>";
  }

  if(fanta> 0){
    totalLiquidacion.innerHTML += "Total la Gaseosa Fanta es: " + fanta+ "<br>";
  }

  if(coca> 0){
    totalLiquidacion.innerHTML += "Total la Gaseosa CocaCola es: " + coca+ "<br>";
  }
    total = jamon+piña+queso+vegetal+peperoni+dedos+alitas+ensalada+nuggets+rolls+hitl+hits+fanta+coca+2500;
    totalLiquidacion.innerHTML += "Recuerda que tu pedido tiene un valor de: "+2500 +"<br>";
    totalLiquidacion.innerHTML += "Total de la liquidacion:" +total+ "<br>";
}
   
