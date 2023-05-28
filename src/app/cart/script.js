function getCartValue(){
    var totalPrice = localStorage.getItem("cartValue")
    document.getElementById("checkValue").style.visibility = "hidden"
    document.getElementById("cartValue").innerHTML = "Wartość koszyka: " + toString(totalPrice) + "zł"
}