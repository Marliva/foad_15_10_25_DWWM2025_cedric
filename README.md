# index.html

## Description
Proposition d'une variante du célèbre jeu Pierre-Feuille-Ciseaux, avec des éléments. 
Le joueur choisira parmi trois propositions : Feu, Eau, Terre. 
Il cliquera sur le bouton de l'élément choisi.
L'ordinateur fera également un choix aléatoire.
Le résultat de la manche s'affichera d'après les règles indiquées en-haut de l'encadré du jeu.

## Structure du projet
```
jeu_feu_eau_terre_cedric/
├── index.html          # Page principale
├── README.md           # Ce fichier
├── package.json        # Configuration npm
└── assets/
    ├── css/
    │   ├── reset.css    # Reset CSS
    │   └── style.css    # Styles principaux
    ├── js/
    │   └── script.js    # JavaScript principal
    ├── img/             # Images
    └── fonts/           # Polices locales
```

## Technologies utilisées
- HTML5
- CSS3
- JavaScript ES6+
- Google Fonts (TOUTES les polices populaires)
- Font Awesome 6.5.1 (Icônes)

## Les choix effectués dans le fichier js
- On effectue un tableau pour désigner les choix possibles lors de la partie (ici, les éléments FEU, EAU, TERRE)
- On établie la notion d'aléatoire pour l'ordinateur, et un choix par des boutons pour le joueur
- Plutôt que de définir chacun des boutons, j'utilise un querySelectorAll pour tous les appeler et donc alléger le code js
- J'effectue une condition "if" pour intégrer les règles de priorité des "pouvoirs"
- J'ajoute des addEventListener pour que les clics sur les boutons soient interprêtés par le navigateur 
- Je créé un bouton "rejouer" pour réinitialiser le score et éviter d'avoir à rafraichir la page lorsqu'un participant atteint 10 points et que les boutons se retrouvent disabled