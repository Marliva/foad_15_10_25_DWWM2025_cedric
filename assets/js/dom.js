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
  })
})