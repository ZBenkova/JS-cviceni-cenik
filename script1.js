const selectPlan = (planNumber) => {

//   If (planNumber == 1) {
//     domElement = document.querySelector("plan1")
//     domElement.classList.add("plan--selected")

//     domElement1 = document.querySelector("plan2")
//     domElement1.classList.remove("plan--selected")

//     domElement2 = document.querySelector("plan3")
//     domElement2.classList.remove("plan--selected")

  if (planNumber == 1) {
    addSelectedClass("#plan1")
    removeSelectedClass("#plan2")
    removeSelectedClass("#plan3")

  }

  if (planNumber == 2) {
    addSelectedClass("#plan2")
    removeSelectedClass("#plan1")
    removeSelectedClass("#plan3")
  }

  if (planNumber == 3) {
    
    addSelectedClass("#plan3")
    removeSelectedClass("#plan1")
    removeSelectedClass("#plan2")
  }
}

const addSelectedClass = (idElement) => {
    const domElement = document.querySelector(idElement)
    domElement.classList.add("plan--selected")
}

const removeSelectedClass = (idElementRemove) => {
    const domElement = document.querySelector(idElementRemove)
    domElement.classList.remove("plan--selected")
}



selectPlan(2)