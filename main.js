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

  jamon = cantidadJamon * 20000;

  return jamon;
}
function compraPiña() {
  let cantidadPiña = document.getElementById("cantidadPiña").value;
  piña = cantidadPiña * 22000;

  return piña;
}
function compraQueso() {
  let cantidadQueso = document.getElementById("cantidadQueso").value;
 queso = cantidadQueso * 25000;

  return queso;
}

function compraVegetariana() {
  let cantidadVegetariana = document.getElementById(
    "cantidadVegetariana"
  ).value;
  vegetal = cantidadVegetariana * 25000;
  return vegetal;
}

function compraPeperoni() {
  let cantidadPeperoni = document.getElementById("cantidadPeperoni").value;
  peperoni = cantidadPeperoni * 23000;
  return peperoni;
}
function compraDedos() {
  let cantiadDedos = document.getElementById("cantiadadDedos").value;
  dedos  = cantiadDedos * 4000;
  return dedos;
}
function compraAlitas() {
  let cantiadadAlitas = document.getElementById("cantidadAlitas").value;
  alitas = cantiadadAlitas * 5000;
  return alitas;
}
function compraEnsalada() {
  let cantidadEnsalda = document.getElementById("cantidadEnsalada").value;
  ensalada = cantidadEnsalda * 4000;
  return ensalada;
}
function compraNuggets() {
  let cantiadadNuggets = document.getElementById("cantidadNuggets").value;
  nuggets = cantiadadNuggets * 6000;
  return nuggets;
}
function compraRolls() {
  let cantidadRolls = document.getElementById("cantidadRolls").value;
  rolls = cantidadRolls * 5000;
  return rolls;
}
function compraHit() {
  let cantidadHits = document.getElementById("cantiadHit").value;
  hits = cantidadHits * 2500;
  return hits;
}
function compraHitL() {
  let cantidadHitL = document.getElementById("cantidadHiTL").value;
  hitl = cantidadHitL * 5000;
  return hitl;
}
function compraFanta() {
  let cantidadFanta = document.getElementById("cantidadFanta").value;
  fanta = cantidadFanta * 3000;
  return fanta;
}
function compraCocaCola() {
  let cantidadCocaCola = document.getElementById("cantidadCocaCola").value;
  coca = cantidadCocaCola * 6000;
  return coca;
}

function liquidar() {
  let totalLiquidacion = document.getElementById("capaMostrar");

  if (jamon > 0) {
    totalLiquidacion.innerHTML +="Total de Pizza de Jamon es: " + jamon + "<br>";   
  }else{
    totalLiquidacion.innerHTML +="No seleccionaste la Pizza de Jamon"+ "<br>";
  }

  if(piña > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Piña es: " + piña+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Pizza de Piña " + "<br>";
  }

  if(queso > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Queso es: " + queso+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Pizza de Queso" + "<br>";
  }

  if(vegetal > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Vegetariana es: " + vegetal+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Pizza de Vegetariana " + "<br>";
  }

  if(peperoni > 0){
    totalLiquidacion.innerHTML += "Total de Pizza de Peperoni es: " + peperoni+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Pizza de Peperoni " + "<br>";
  }

  if(dedos> 0){
    totalLiquidacion.innerHTML += "Total Dedos de Queso es: " + dedos+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste Dedos de Queso " + "<br>";
  }

  if(alitas > 0){
    totalLiquidacion.innerHTML += "Total Alitas de pollo es: " + alitas+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste Alitas de pollo " + "<br>";
  }

  if(ensalada > 0){
    totalLiquidacion.innerHTML += "Total de la Ensalada es: " + ensalada+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Ensalada" + "<br>";
  }


  if(nuggets> 0){
    totalLiquidacion.innerHTML += "Total de los Nuggets es: " + nuggets+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste los Nuggets" + "<br>";
  }

  
  if(rolls> 0){
    totalLiquidacion.innerHTML += "Total de los Rolls es: " + rolls+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste los Rolls" + "<br>";
  }

  if(hits> 0){
    totalLiquidacion.innerHTML += "Total Jugo Hits 500ML es: " + hits+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste los Jugo Hits 500ML" + "<br>";
  }

  if(hitl> 0){
    totalLiquidacion.innerHTML += "Total  Jugo HiT 1L: " + hitl+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste Jugo HiT 1L" + "<br>";
  }

  if(fanta> 0){
    totalLiquidacion.innerHTML += "Total la Gaseosa Fanta es: " + fanta+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la gaseosa Fanta " + "<br>";
  }

  if(coca> 0){
    totalLiquidacion.innerHTML += "Total la Gaseosa CocaCola es: " + coca+ "<br>";
  }else{
    totalLiquidacion.innerHTML += "No seleccionaste la Gaseosa CocaCola" + "<br>";
  }

  
    total = jamon+piña+queso+vegetal+peperoni+dedos+alitas+ensalada+nuggets+rolls+hitl+hits+fanta+coca;
    totalLiquidacion.innerHTML += "Total de la liquidacion:" +total+ "<br>"
}
   
