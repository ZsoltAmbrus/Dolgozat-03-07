/*
* File: app.js
* Author: Ambrus Zsolt
* Copyright: 2024, Ambrus Zsolt
* Group: Szoft I-1-N
* Date: 2024-03-07
* Github: https://github.com/AmbrusZsolt/Dolgozat-03-07
* Licenc: GNU GPL
*/
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


