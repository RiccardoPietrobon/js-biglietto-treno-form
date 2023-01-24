//Nome passegero
const inputuserName = document.getElementById("userNameIns").value;
console.log("nome ", inputuserName);

inputuserName.a
function registrazione() {
}



//Il numero di chilometri da percorrere
const userKM = document.getElementById("userKmIns").value;

console.log("distanza ", userKM);

document.getElementById("stamp_km").innerHTML = userKM;



//Età del passeggero
const userAge = document.getElementById("userAgeIns").value;
console.log("età ", userAge);
document.getElementById("stamp_age").innerHTML = userAge;



//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//Il prezzo del biglietto è definito in base ai km(0.21 € al km)
const priceKM = .21;
let priceTicket = userKM * priceKM;
console.log("costo biglietto ", priceTicket);

//Va applicato uno sconto del 20 % per i minorenni
if (userAge < 18) {
    //sconto percentuale u18
    const discountU18 = 0.2;
    //sconto effettivo
    const priceDiscountU18 = priceTicket * discountU18;
    //prezzo biglietto scontato
    const ticketUnder = priceTicket - priceDiscountU18;
    console.log("prezzo scontato under è ", ticketUnder);

    finalTicket = "Il prezzo del biglietto sarà di € ", ticketUnder.toFixed(2);
}
//Va applicato uno sconto del 40 % per gli over 65.
else if (userAge > 65) {
    //sconto percentuale o65
    const discountO65 = 0.4;
    //sconto effettivo
    const priceDiscountO65 = priceTicket * discountO65;
    //prezzo biglietto scontato
    const ticketOver = priceTicket - priceDiscountO65;
    console.log("prezzo scontato over è ", ticketOver);

    finalTicket = "Il prezzo del biglietto sarà di € ", ticketOver.toFixed(2);

}
//Altrimenti nessun sconto
else {
    finalTicket = "Il prezzo del biglietto sarà di € ", priceTicket.toFixed(2);
}

//document.getElementById('biglietto_finale').innerHTML = finalTicket;


