/**
 * EXO 1
 */

// 1 Récupérer les balises html et les stocker dans des variables JS 

const form2 = document.querySelector(".form-2")
const input2 = document.querySelector(".input-2")
const textToDisplay = document.querySelector(".text-to-display-2")

form2.addEventListener("submit", onForm2Submit)

function onForm2Submit(event) {
    event.preventDefault();
    textToDisplay.textContent = input2.value
}



/**
 * EXO 2
 */

const input3 = document.querySelector(".input-3")
const displayedText3 = document.querySelector(".text-to-display-3")

input3.addEventListener ("input", meantimeCopy)

function meantimeCopy(event) {
    event.preventDefault();
    displayedText3.textContent = input3.value;
}



/**
 * EXO 3
 */

const select6 = document.querySelector(".select-6") 
const displayedTex6 = document.querySelector(".text-to-display-6")

select6.addEventListener ("change", pickedOnList)

function pickedOnList(event) {
    const selectedOption6 = select6.options[select6.selectedIndex].value;

    displayedTex6.textContent = selectedOption6
}



/**
 * EXO 4
 */

const input5 = document.querySelector(".input-5")
const displayedText5 = document.querySelector(".text-to-display-5")

input5.addEventListener ("change", rangeMove)
// "input" aurait pu être préférable à "change"

function rangeMove(event) {
    const selectedRange5 = input5.value;

    displayedText5.textContent = selectedRange5
}



/**
 * EXO 5
 */

const btnContainer1 = document.querySelector(".btn-container-1")
const coloredRound = document.querySelector(".div-to-color-1")
const buttons1 = document.querySelectorAll(".btn-1")

// Première fonction : permet de faire de chaque clic une user data 

buttons1.forEach(function(button) {
    button.addEventListener ("click", clickUser)
})

// Deuxième fonction : 1 Récupérer la user data (nous voulons : l'évènement puis on target pour rendre les données liées accessible et on choisi textContent pour indiquer qu'on récupère du contenu texte     2. On assigne à la data récupérée un backgroundcolor au cercle)

function clickUser(event) {

    const userChoice = event.target.textContent

    if (userChoice == "red") {
        coloredRound.style.backgroundColor = "red" ;
    }
    if (userChoice == "green") {
        coloredRound.style.backgroundColor = "green" ;
    }
    if (userChoice == "blue") {
        coloredRound.style.backgroundColor = "blue" ;
    }
}



/**
 * EXO 6
 */

const input7 = document.querySelector(".input-7")
const toColor = document.querySelector(".div-to-color-7")

input7.addEventListener('input',switchColor)

function switchColor(event) {
    const color = event.target.value
    toColor.style.backgroundColor = color  
}



/**
 * EXO 7
 */

const inputs4 = document.querySelectorAll('.input-4')
const txtToDisplay4 = document.querySelector('.text-to-display-4')

inputs4[0].addEventListener('change', (e) => {
    txtToDisplay4.textContent = `Trip last ${calculTheGap(inputs4[0].value, inputs4[1].value)} days `
})

inputs4[1].addEventListener('change', (e) => {
    txtToDisplay4.textContent = `Trip last ${calculTheGap(inputs4[0].value, inputs4[1].value)} days `
})

function calculTheGap(date1, date2) {
    const startDate = new Date(date1)
    const endDate = new Date(date2)
    let tripLast = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24)
    return tripLast
}

/**
 * EXO 8
 *
 */ 

const btns8 = document.querySelectorAll('.btn-8')
const divToColor8 = document.querySelector('.div-to-color-8')

btns8.forEach((el) => {
    el.addEventListener('click', (e) => {
    divToColor8.style.backgroundColor = e.target.getAttribute('data-color')
    })
})



/**
 * EXO 9
 *
 */

const checkbox = document.querySelectorAll('.checkbox')
const textToDisplay9 = document.querySelector('.text-to-display-9')

checkbox.forEach((el) => {
    el.addEventListener('change', (e) => {
        const checkedCheck = Array.from(checkbox).filter((cb) => cb.checked)
        const values = checkedCheck.map((cb) => cb.value)
        textToDisplay9.textContent = values.join(' - ')
    })
})
