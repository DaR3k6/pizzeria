function compraJamon() {
  let cantidadJamon = document.getElementById("cantiadJamon").value;

  cantidadJamon * 20000;

  return cantidadJamon;
}
function compraPiña() {
  let cantidadPiña = document.getElementById("cantidadPiña").value;
  cantidadPiña * 22000;

  return cantidadPiña;
}
function compraQueso() {
  let cantidadQueso = document.getElementById("cantidadQueso").value;
  cantidadQueso * 25000;

  return cantidadQueso;
}

function compraVegetariana() {
  let cantidadVegetariana = document.getElementById(
    "cantidadVegetariana"
  ).value;
  cantidadVegetariana * 25000;
  return cantidadVegetariana;
}

function compraPeperoni() {
  let cantidadPeperoni = document.getElementById("cantidadPeperoni").value;
  cantidadPeperoni * 23000;
  return cantidadPeperoni;
}
function compraDedos() {
  let cantiadDedos = document.getElementById("cantiadadDedos").value;
  cantiadDedos * 4000;
  return cantiadDedos;
}
function compraAlitas() {
  let cantiadadAlitas = document.getElementById("cantidadAlitas").value;
  cantiadadAlitas * 5000;
  return cantiadadAlitas;
}
function compraEnsalada() {
  let cantidadEnsalda = document.getElementById("cantidadEnsalada").value;
  cantidadEnsalda * 4000;
  return cantidadEnsalda;
}
function compraNuggets() {
  let cantiadadNuggets = document.getElementById("cantidadNuggets").value;
  cantiadadNuggets * 6000;
  return cantiadadNuggets;
}
function compraRolls() {
  let cantidadRolls = document.getElementById("cantidadRolls").value;
  cantidadRolls * 5000;
  return cantidadRolls;
}
function compraHit() {
  let cantidadHits = document.getElementById("cantiadHit").value;
  cantidadHits * 2500;
  return cantidadHits;
}
function compraHitL() {
  let cantidadHitL = document.getElementById("cantidadHiTL").value;
  cantidadHitL * 5000;
  return cantidadHitL;
}
function compraFanta() {
  let cantidadFanta = document.getElementById("cantidadFanta").value;
  cantidadFanta * 3000;
  return cantidadFanta;
}
function compraCocaCola() {
  let cantidadCocaCola = document.getElementById("cantidadCocaCola").value;
  cantidadCocaCola * 6000;
  return cantidadCocaCola;
}

function liquidar() {
  let totalLiquidacion = document.getElementById("capaMostrar");

  if (compraJamon() > 0) {
    totalLiquidacion.innerHTML ="Total de pizza de Jamon es: " + compraJamon();
  }
}
