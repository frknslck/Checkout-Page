// buttons
let decr = document.querySelectorAll(".decr")
let incr = document.querySelectorAll(".incr")
let remove = document.querySelectorAll(".remove")
// pricetags
let quantity = document.querySelectorAll(".quantityNum")
let productTotalNum = document.querySelectorAll(".productTotalNum")
let subTotal = document.querySelector(".subtotal")
let tax = document.querySelector(".tax")
let total = document.querySelector(".total")

let sum = 146.97;
let taxx ;
let toto ;
let fixedprod ;

console.log(quantity.innerText);

decr.forEach(num => {
    
    num.addEventListener("click", () => {
        if (num.nextElementSibling.innerText > 1){
            --num.nextElementSibling.innerText

            let price = +num.parentElement.previousElementSibling.children[0].children[0].textContent

            fixedprod = +num.parentElement.children[1].textContent * price

            productTotalNum = fixedprod.toFixed(2)

            num.parentElement.nextElementSibling.nextElementSibling.children[0].textContent = `${productTotalNum}`

            sum -= price

            subTotal.innerText = sum.toFixed(2)
            taxx = (sum * 0.18).toFixed(2)
            tax.innerText = taxx
            toto = sum + +taxx + 15
            total.innerText = toto.toFixed(2)
    }
    })
})

incr.forEach(num => {
    num.addEventListener("click", () => {
        ++num.previousElementSibling.innerText

        let price = +num.parentElement.previousElementSibling.children[0].children[0].textContent

        fixedprod = +num.parentElement.children[1].textContent * price

        productTotalNum = fixedprod.toFixed(2)

        num.parentElement.nextElementSibling.nextElementSibling.children[0].textContent = `${productTotalNum}`

        sum += price

        subTotal.innerText = sum.toFixed(2)
        taxx = (sum * 0.18).toFixed(2)
        tax.innerText = taxx
        toto = sum + +taxx + 15
        total.innerText = toto.toFixed(2)
    })
})

remove.forEach(display => {
    display.addEventListener("click", () => {
        display.parentElement.parentElement.remove()

        sum -= display.nextElementSibling.children[0].textContent

        console.log(sum);

        subTotal.innerText = sum.toFixed(2)

        taxx = (sum * 0.18).toFixed(2)
        tax.innerText = taxx

        if (sum < 30 || sum == 0) {
            document.querySelector(".shipping").innerText = "$0.00"
            subTotal.innerText = "0.00"
            tax.innerText = "0.00"
            total.innerText = "0.00"
        } else {
            toto = sum + +taxx
            document.querySelector(".total").innerText = toto.toFixed(2)
        }
    })
})
