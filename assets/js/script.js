function powerPc() {
  const pouvoirs = ["feu", "eau", "terre"]
  const indexAleatoire = Math.floor(Math.random() * 3)
  const choixOrdinateur = pouvoirs[indexAleatoire]

  console.log("Choix de l'ordinateur:", choixOrdinateur)
  return choixOrdinateur
}