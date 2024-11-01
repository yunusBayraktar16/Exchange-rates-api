let amountEURelement = document.querySelector("#amount")
let amountTRY = document.querySelector("#tl")
let button = document.getElementById("change")

//our key and url
const url = "https://api.exchangeratesapi.io/v1/latest?"
const key = "1e02d376b78bc43ea33b210db6e5174b"



//when your click..
button.addEventListener("click" , getData);
function getData () {
    let amountEUR = amountEURelement.value;//takes euro value
    if(amountEUR<0) {
       alert("you entered the wrong number")
    }
    else if (amountEUR==0) {
            alert("enter a number")
    }
   
    else {
        let query = `${url}access_key=${key}& base = USD`
        fetch(query)
        .then(response => response.json())//returns an rates object
        .then(data =>  amountTRY.value = (data.rates.TRY*amountEUR).toFixed(2))
        
    }
    
    
}

