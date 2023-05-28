function addToCart(){
    var price = parseInt(document.getElementById("price"))
    console.log(toString(price))
    localStorage.setItem("cartValue", price)
}