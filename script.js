const selectPlan = (planNumber) => {
   
    let domElement = document.querySelector("#plan1")

if (planNumber == 1) {
    domElement = document.querySelector("#plan1")
 
    return domElement = domElement.classList.add("plan--selected")
}
else if (planNumber == 2) {
     domElement = document.querySelector("#plan2")
return domElement = domElement.classList.add("plan--selected")
}
else if (planNumber == 3) {
    domElement = document.querySelector("#plan3")

return domElement = domElement.classList.add("plan--selected")
}
}
console.log(selectPlan(1))
console.log(selectPlan(2))
console.log(selectPlan(3))

