let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let currentguestScore = 0
let currenthomeScore = 0


function guestAdd1(){
    currentguestScore++;
    guestScore.textContent = currentguestScore
}

function guestAdd2(){
    currentguestScore+=2
    guestScore.textContent = currentguestScore
}

function guestAdd3(){
    currentguestScore+=3
    guestScore.textContent = currentguestScore
}

function homeAdd1(){
    currenthomeScore++
    homeScore.textContent = currenthomeScore
}

function homeAdd2(){
    currenthomeScore += 2
    homeScore.textContent = currenthomeScore
}

function homeAdd3(){
    currenthomeScore += 3
    homeScore.textContent = currenthomeScore
}

function reset(){
    currentguestScore = 0
    currenthomeScore = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}