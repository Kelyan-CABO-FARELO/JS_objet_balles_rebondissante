# 🎾 JS Objet : Balles Rebondissantes

Ce projet est une simulation interactive de physique en **JavaScript (ES6)** utilisant l'API **HTML5 Canvas**. Il génère divers objets géométriques et ludiques (balles, étoiles, cœurs, crânes, etc.) qui rebondissent sur les parois de l'écran et entrent en collision les uns avec les autres.

Le projet est construit avec une architecture modulaire et utilise **Vite** comme environnement de développement.

## ✨ Fonctionnalités

* **Moteur Physique** : Gestion des déplacements, rebonds sur les bords et résolution des collisions entre entités.
* **Formes Polymorphes** : Support de multiples formes (Balle, Étoile, Cœur, Losange, Crâne, Lapin, Calamar).
* **Interactivité** : Contrôles au clavier et à la souris pour ajouter/retirer des objets ou changer de forme.
* **Interface UI** : Une palette visuelle pour sélectionner la forme à faire apparaître.
* **Responsive** : Le canvas s'adapte automatiquement à la taille de la fenêtre.
* **Configuration** : Fichier de configuration centralisé pour ajuster la vitesse, la taille et les probabilités d'apparition.

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

* [Node.js](https://nodejs.org/) (version 14 ou supérieure recommandée)
* npm (normalement inclus avec Node.js)

## 🚀 Installation

1.  **Cloner ou télécharger** les fichiers du projet dans un dossier local.
2.  Ouvrez un terminal dans ce dossier.
3.  Installez les dépendances nécessaires (notamment Vite) avec la commande suivante :

```bash
npm install

📘 Documentation du Projet : Simulation InteractiveCe projet est une simulation visuelle interactive réalisée avec l'API Canvas HTML5. Il permet de faire apparaître et d'animer différentes entités géométriques avec une gestion physique simple.▶️ DémarrageMode DéveloppementPour lancer le serveur local avec rechargement automatique (HMR) :Bashnpm run dev
Cliquez sur le lien local qui s'affiche (ex: http://localhost:5173/) pour ouvrir l'application.Mode Production (Build)Pour compiler le projet en fichiers statiques optimisés (dans le dossier /dist) :Bashnpm run build
Pour prévisualiser le build localement :Bashnpm run preview
🎮 Contrôles et UtilisationL'application se contrôle à la fois au clavier et à la souris. La logique principale est gérée dans src/engine.js.⌨️ Raccourcis ClavierToucheActionDescriptionPPauseFige ou reprend l'animation.+AjouterAjoute une entité (selon la forme sélectionnée) au centre ou aléatoirement.-SupprimerRetire la dernière entité créée.0Auto / RandomMode aléatoire : le clic générera une forme au hasard.1BalleSélectionne la forme : 🔴 Cercle.2ÉtoileSélectionne la forme : ⭐ Étoile à 5 branches.3CœurSélectionne la forme : ❤️ Cœur.4LosangeSélectionne la forme : 🔶 Losange (Carreau).5CrâneSélectionne la forme : 💀 Tête de mort.6LapinSélectionne la forme : 🐰 Tête de lapin.7CalamarSélectionne la forme : 🦑 Calamar (👾).🖱️ SourisClic Gauche (Canvas) : Fait apparaître ("Spawn") une nouvelle entité exactement à l'endroit cliqué.Clic Gauche (Palette) : Permet de changer la forme active visuellement via l'interface en haut de l'écran.⚙️ ConfigurationLe fichier src/config.js permet de régler les variables globales de la simulation sans toucher au code logique.JavaScript// Exemple de contenu de src/config.js
export const config = {
    ballCount: 0,           // Nombre d'objets créés au lancement
    minSize: 12,            // Rayon minimum des objets (px)
    maxSize: 22,            // Rayon maximum des objets (px)
    maxSpeed: 3,            // Vitesse max en x et y
    background: "rgba(0,0,0,0.22)", // Couleur de fond (l'alpha < 1 crée l'effet de trainée)
    
    // Probabilités d'apparition pour le mode "Aléatoire" (Total ~ 1.0)
    shapeMix: {
        skull: 0.14,
        rabbit: 0.14,
        squid: 0.14,
        ball: 0.14,
        star: 0.14,
        heart: 0.14,
        diamond: 0.14
    }
}
📂 Architecture du ProjetVoici comment sont organisés les fichiers sources :Plaintext📁 Racine du projet
├── index.html          # Point d'entrée HTML (Structure DOM + Canvas)
├── style.css           # Styles globaux (Interface, Header, Reset CSS)
├── package.json        # Configuration NPM et scripts
├── vite.config.js      # (Optionnel) Configuration Vite si présente
└── 📁 src/
    ├── main.js         # Point d'entrée JS : Initialise l'Engine et l'UI
    ├── config.js       # Paramètres globaux (Vitesse, Taille, Couleurs...)
    ├── engine.js       # Cœur du système : Boucle de jeu, Events, Resize
    │
    ├── 📁 utils/
    │   └── random.js   # Fonctions helpers (Aléatoire, Couleurs RGB)
    │
    └── 📁 entities/    # Classes Objets (Logique de dessin propre à chaque forme)
        ├── balls.js    # Classe Mère (Physique de base)
        ├── diamond.js  # Forme : Losange
        ├── heart.js    # Forme : Cœur
        ├── rabbit.js   # Forme : Lapin
        ├── skull.js    # Forme : Crâne
        ├── squid.js    # Forme : Calamar
        └── star.js     # Forme : Étoile
💻 TechnologiesLangage : JavaScript (ECMAScript Modules - ESM)Rendu : API Canvas 2D HTML5Build Tool : Vite (Rapide et léger)Style : CSS3Projet réalisé dans le cadre d'un apprentissage JavaScript Orienté Objet.