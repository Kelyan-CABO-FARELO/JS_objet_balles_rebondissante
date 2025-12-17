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
npm install```

**Présentation**

Ce dépôt contient une petite simulation visuelle en JavaScript qui anime des entités (balles, étoiles, cœurs, etc.) sur un `canvas` HTML5. Les objets rebondissent sur les bords et gèrent des collisions entre eux.

**Démo rapide**

- **Ouvrir localement** : double-cliquez sur `index.html` ou servez le projet avec un serveur de développement.

**Installation**

- **Prérequis** : `Node.js` et `npm` (si vous utilisez les scripts NPM).
- Depuis la racine du projet, installez les dépendances :

```bash
npm install
```

**Lancement**

- Mode développement (si présent dans `package.json`) :

```bash
npm run dev
```

- Ouvrir directement (sans serveur) :

```bash
xdg-open index.html   # Linux
open index.html       # macOS
```

**Contrôles**

- **P** : Pause / reprise
- **+** : Ajouter une entité
- **-** : Retirer la dernière entité
- **1 / 2 / 3** : Sélectionner respectivement `ball`, `star`, `heart` (ou autre selon la palette)
- **0** : Mode automatique (forme aléatoire)
- **Clic sur le canvas** : Faire apparaître une entité à la position du clic

Consultez `src/engine.js` pour plus de détails sur les interactions et événements.

**Configuration**

- Les paramètres globaux sont dans `src/config.js` : nombre initial d'entités, tailles (`minSize`, `maxSize`), vitesse (`maxSpeed`), couleur de fond, et `shapeMix` pour les probabilités en mode aléatoire.

**Structure du projet**

- `index.html` — point d'entrée et `canvas`
- `style.css` — styles de l'interface
- `package.json` — scripts NPM (si présents)
- `src/`
  - `main.js` — bootstrap de l'application
  - `config.js` — configuration globale
  - `engine.js` — boucle, gestion d'événements, création d'entités
  - `entities/` — classes d'entités (`balls.js`, `star.js`, `heart.js`, ...)
  - `utils/random.js` — utilitaires aléatoires

**Dépannage rapide**

- Si vous voyez des erreurs dans la console du navigateur, regardez d'abord `src/entities/balls.js` et `src/engine.js` (gestion des collisions et des appels de méthode). 
- Pour tester rapidement : ouvrez la console DevTools (F12) et vérifiez l'absence d'erreurs JS.

**Contribuer / Remarques**

- PRs bienvenues pour améliorer le rendu, ajouter des formes, ou corriger la physique.
- Pour des changements locaux rapides, modifiez `src/config.js` et rechargez la page.

**Licence & Crédits**

- Code : usage personnel / pédagogique par défaut. Indiquez-moi si vous souhaitez ajouter une licence explicite.

---

Si vous voulez, je peux aussi :

- ajouter des captures d'écran, 
- documenter les fonctions publiques (ex. `Ball.createRandom`, `Engine.addEntity`),
- ou créer un script `npm run start` dans `package.json` si nécessaire.

Fin du README
*** End Patch