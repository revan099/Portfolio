//Fuel Station
let dizelPrice = 0.9;    
let benzinPrice = 1;    
let premiumPrice = 1.5;  

let fuelType = prompt(`Yanacaq növü secin:
  1. Dizel (0.9 AZN)
  2. Benzin (1 AZN)
  3. Premium (1.5 AZN)`);

let fuelPrice;
switch (fuelType) {
  case '1':
    fuelPrice = dizelPrice;
    break;
  case '2':
    fuelPrice = benzinPrice;
    break;
  case '3':
    fuelPrice = premiumPrice;
    break;
  default:
    alert("Duzgun Yanacaq Tipi daxil edin.");
   
}

let fuelAmount = parseFloat(prompt("Almaq istdiyiniz yanacağin miqdarini daxil edin:"));
let userBalance = parseFloat(prompt("Movcud budcenizi daxil edin:"));

let totalCost = fuelAmount * fuelPrice;

if (userBalance >= totalCost) {
  let remainingBalance = userBalance - totalCost;
  alert(`Yanacaq alindi. Umumi mebleğ: ${totalCost} AZN. Qalan balans: ${remainingBalance} AZN.`);
} else {
  let deficit = totalCost - userBalance;
  alert(`Ümumi mebleğ: ${totalCost} budceniz kifayet etmir. Budceniz: ${userBalance} Yetersiz budce: ${deficit} AZN.`);
}
