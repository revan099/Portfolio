// Task Seasom
let season = prompt("Mövsümü seçin: (Yaz, Yay, Payız, Qıs)");

switch (season) {
  case 'yaz':
    alert("Yaz movsumundeki aylar: Mart, Aprel, May");
    break;
  case 'yay':
    alert("Yay  movsumundeki aylar: İyun, İyul, Avqust");
    break;
  case 'payız':
    alert("Payız movsumundeki  aylar: Sentyabr, Oktyabr, Noyabr");
    break;
  case 'qış':
    alert("Qıs movsumundeki aylar: Dekabr, Yanvar, Fevral");
    break;
  default:
    alert("Zehmet olmasa, duzgum bir movsum adi secin(Yaz, Yay, Payız, Qıs).");
    break;}