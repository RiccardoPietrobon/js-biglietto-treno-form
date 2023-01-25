//ELEMENTI DI INPUT
//Button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);
//Name
const inputuserName = document.getElementById("userNameIns");
console.log("nome ", inputuserName);
//Il numero di chilometri da percorrere
const inputKM = document.getElementById("userKmIns");
console.log("distanza ", inputKM);
//Età del passeggero
const inputAge = document.getElementById("userAgeIns");
console.log("età ", inputAge);


//ELEMENTI DI OUTPUT
//name
const outputName = document.getElementById("stamp_name");
//Ticket code
const outputCode = document.getElementById("stamp_code");
//Ticket price
const finalTicketoutput = document.getElementById("stamp_price");


mybutton.addEventListener("click", function () {
    //Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    //Il prezzo del biglietto è definito in base ai km(0.21 € al km)
    const inserimento = inputuserName.value;
    console.log("nome output ", inserimento);

    //età utente
    const userAge = inputAge.value;
    console.log("age output ", userAge);

    //km utente
    const userKM = inputKM.value;
    console.log("km output ", userKM);

    //ticket code
    let ticketcode = Math.floor(Math.random() * 1000) + 1;

    const priceKM = .21;
    let priceTicket = userKM * priceKM;
    console.log("costo biglietto ", priceTicket);
    let finalTicket;


    //Va applicato uno sconto del 20 % per i minorenni
    if (userAge < 18) {
        //sconto percentuale u18
        const discountU18 = 0.2;
        //sconto effettivo
        const priceDiscountU18 = priceTicket * discountU18;
        //prezzo biglietto scontato
        priceTicket = priceTicket - priceDiscountU18;
        console.log("prezzo scontato under è ", priceTicket);

        finalTicket = `Il prezzo del biglietto sarà di € ${priceTicket.toFixed(2)}`;
        console.log("bigkietto ", finalTicket);
    }

    //Va applicato uno sconto del 40 % per gli over 65.
    else if (userAge > 65) {
        //sconto percentuale o65
        const discountO65 = 0.4;
        //sconto effettivo
        const priceDiscountO65 = priceTicket * discountO65;
        //prezzo biglietto scontato
        priceTicket = priceTicket - priceDiscountO65;
        console.log("prezzo scontato over è ", priceTicket);

        finalTicket = `Il prezzo del biglietto sarà di € ${priceTicket.toFixed(2)}`;
        console.log("bigkietto ", finalTicket);
    }

    //Altrimenti nessun sconto
    else (18 > userAge > 65); {

        finalTicket = `Il prezzo del biglietto sarà di € ${priceTicket.toFixed(2)}`;
        console.log("bigkietto ", finalTicket);

    }
    finalTicketoutput.innerHTML = finalTicket;
    outputCode.innerHTML = "Il codice del biglietto è " + ticketcode;
    outputName.innerHTML = "Il tuo nome è " + inserimento;

}
)



