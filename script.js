const selectPlan = (planNumber) => {
    pomocnaFunkce()
    let domElement;
    if (planNumber == 1) {
        domElement = document.querySelector("#plan1")

        domElement.classList.add("plan--selected")
    }
    else if (planNumber == 2) {
        domElement = document.querySelector("#plan2")

        domElement.classList.add("plan--selected")
    }
    else if (planNumber == 3) {
        domElement = document.querySelector("#plan3")

        domElement.classList.add("plan--selected")
    }
}


const pomocnaFunkce = () => {
    let zrusTridu
    zrusTridu = document.querySelector("#plan1")
    zrusTridu.classList.remove("plan--selected")
    
    zrusTridu = document.querySelector("#plan2")
    zrusTridu.classList.remove("plan--selected")
    
    zrusTridu = document.querySelector("#plan3")
    zrusTridu.classList.remove("plan--selected")
}


selectPlan(2)

