let scoreJoueur = 0
let scoreOrdinateur = 0
const SCORE_MAX = 10
const affichageScoreJoueur = document.getElementById("score-joueur")
const affichageScoreOrdinateur = document.getElementById("score-ordinateur")
const boutonRejouer = document.getElementById("btn-rejouer")

function powerPc() {
  const pouvoirs = ["feu", "eau", "terre"]
  const indexAleatoire = Math.floor(Math.random() * 3)
  const choixOrdinateur = pouvoirs[indexAleatoire]

  console.log("Choix de l'ordinateur:", choixOrdinateur)
  return choixOrdinateur
}

const boutons = document.querySelectorAll(".power-btn")

function powerPlayer(boutonClique) {
  const choixJoueur = boutonClique.getAttribute("data-power")
  console.log("Choix du joueur:", choixJoueur)

  return choixJoueur
}

function playGame(joueur, ordinateur) {
  let message = ""
  let typeResultat = ""

  if (joueur === ordinateur) {
    message = `Égalité ! Vous avez tous les deux choisi l'élément ${joueur} !`
    typeResultat = "draw"
  }
  else if (
    (joueur === "feu" && ordinateur === "terre") ||
    (joueur === "eau" && ordinateur === "feu") ||
    (joueur === "terre" && ordinateur === "eau")
  ) {
    message = `Vous avez gagné ! L'élément ${joueur} bat l'élément ${ordinateur} !`
    typeResultat = "win"
  }
  else {
    message = `Vous avez perdu ! L'élément ${ordinateur} bat l'élément ${joueur} !`
    typeResultat = "lose"
  }

  console.log("Résultat:", message)

  return {
    message: message,
    type: typeResultat,
  }
}

function mettreAJourScore(typeResultat) {
  if (typeResultat === "win") {
    scoreJoueur++
    console.log("Point pour le joueur ! Score:", scoreJoueur)
  }
  else if (typeResultat === "lose") {
    scoreOrdinateur++
    console.log("Point pour l'ordinateur ! Score:", scoreOrdinateur)
  }
  else {
    console.log("Égalité, pas de point marqué")
  }

  affichageScoreJoueur.textContent = scoreJoueur
  affichageScoreOrdinateur.textContent = scoreOrdinateur

  verifierFinDePartie()
}

function verifierFinDePartie() {
  if (scoreJoueur >= SCORE_MAX) {
    console.log("LE JOUEUR A GAGNÉ LA PARTIE !")
    afficherFinDePartie("Félicitations ! Vous avez gagné la partie !", "win")
  }
  else if (scoreOrdinateur >= SCORE_MAX) {
    console.log("L'ORDINATEUR A GAGNÉ LA PARTIE !")
    afficherFinDePartie("Dommage ! L'ordinateur a gagné la partie !", "lose")
  }
}

function afficherFinDePartie(message, type) {
  const zoneResultat = document.getElementById("result")

  zoneResultat.textContent = message
  zoneResultat.classList.remove("win", "lose", "draw")
  zoneResultat.classList.add(type)

  boutons.forEach((bouton) => {
    bouton.disabled = true
  })

  boutonRejouer.style.display = "block"
}

function reinitialiserPartie() {
  console.log("=== NOUVELLE PARTIE LANCÉE ===")

  scoreJoueur = 0
  scoreOrdinateur = 0

  affichageScoreJoueur.textContent = scoreJoueur
  affichageScoreOrdinateur.textContent = scoreOrdinateur

  boutons.forEach((bouton) => {
    bouton.disabled = false
  })

  boutonRejouer.style.display = "none"

  const zoneResultat = document.getElementById("result")
  const zoneChoix = document.getElementById("choices")
  zoneResultat.textContent = ""
  zoneResultat.classList.remove("win", "lose", "draw")
  zoneChoix.innerHTML = ""

  console.log("Partie réinitialisée ! Prêt à jouer.")
}


function afficherResultat(resultat, joueur, ordinateur) {
  const zoneResultat = document.getElementById("result")
  const zoneChoix = document.getElementById("choices")

  zoneResultat.textContent = resultat.message
  zoneResultat.classList.remove("win", "lose", "draw")
  zoneResultat.classList.add(resultat.type)
}

boutons.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    const choixJoueur = powerPlayer(this)
    const choixOrdinateur = powerPc()
    const resultat = playGame(choixJoueur, choixOrdinateur)

    afficherResultat(resultat, choixJoueur, choixOrdinateur)
    mettreAJourScore(resultat.type)
  })
})

boutonRejouer.addEventListener("click", () => {
  console.log("Bouton Rejouer cliqué !")
  reinitialiserPartie()
})