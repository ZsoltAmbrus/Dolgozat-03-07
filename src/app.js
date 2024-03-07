const AInput = document.querySelector("#A")
const BInput = document.querySelector("#B")
const CInput = document.querySelector("#C")
const DInput = document.querySelector("#D")

const TeruletSzOutput = document.querySelector("#teruletSz")

const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {
    startCalc();
}) 


function startCalc(){
    let A = Number(AInput.value)
    let B = Number(BInput.value)  
    let C = Number(DInput.value)
    let D = Number(DInput.value)
    const felkerulet = (A+B+C+D)/2
    const terulet = Math.sqrt((felkerulet - A)*(felkerulet-B)*(felkerulet - C)*(felkerulet-D))
    console.log("hurnegyszög területe: ", terulet)
    TeruletSzOutput.value = terulet
}

// function teruletSz(){
//     const terulet = Math.sqrt((felkerulet - A)*(felkerulet-B)*(felkerulet - C)*(felkerulet-D))
// }


