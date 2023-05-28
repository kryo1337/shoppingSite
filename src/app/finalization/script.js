function printData(){
    const full_name = "Imię: " + document.getElementById("name").value + "\n" + "Nazwisko: " + document.getElementById("surname").value + "\n" + "Adres: " + document.getElementById("address").value
    + "\n" + "Adres e-mail: " + document.getElementById("email").value  + "\n" + "Numer karty: " + document.getElementById("card_num").value;
    console.log(full_name);
}