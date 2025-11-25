function calculate() {
    let originalPrice = Number(document.getElementById("originalPrice").value)
    let discountPrice = Number(document.getElementById("discountPrice").value)
    let sellPrice = Number(document.getElementById("sellPrice").value)

    let discountPercent = (discountPrice / 100) * originalPrice
    document.getElementById("discountResult").innerHTML = "Discount Amount: " + discountPercent

    let finalPrice = originalPrice - discountPercent

    if (sellPrice > finalPrice) {
        let profit = sellPrice - finalPrice
        document.getElementById("profitResult").innerHTML = "Profit: " + profit
        document.getElementById("lossResult").innerHTML = ""
    }

    else if (sellPrice < finalPrice) {
        let loss = finalPrice - sellPrice
        document.getElementById("lossResult").innerHTML = "Loss: " + loss
        document.getElementById("profitResult").innerHTML = ""
    }

    else {
        document.getElementById("profitResult").innerHTML = "There's no profit as well as no loss."
        document.getElementById("lossResult").innerHTML = ""

    }
}