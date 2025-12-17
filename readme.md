# 🎾 JS Objet : Balles Rebondissantes

Une simulation physique interactive développée en **JavaScript (ES6)** et **HTML5 Canvas**. Ce projet illustre les concepts de **Programmation Orientée Objet** (héritage, polymorphisme) à travers un générateur de formes ludiques qui s'entrechoquent.

---

## ✨ Fonctionnalités Principales

* **⚡ Moteur Physique Maison** : Gestion de la vélocité, rebonds sur les parois et résolution des collisions (rebond élastique + anti-chevauchement).
* **🎨 Polymorphisme** : 7 formes uniques héritant d'une classe mère `Ball` (Balle, Étoile, Cœur, Losange, Crâne, Lapin, Calamar).
* **🎮 Interactivité Totale** : Contrôle complet via clavier et souris (ajout, suppression, pause, changement de forme).
* **📱 Responsive** : Le canvas s'adapte dynamiquement à la taille de la fenêtre.

---

## 🚀 Installation & Démarrage

Assurez-vous d'avoir **[Node.js](https://nodejs.org/)** installé.

1.  **Installez les dépendances** (Vite, etc.) :

  ```bash
  npm install
  ```

2.  **Lancez le projet** (Mode développement) :

  ```bash
  npm run dev
  ```

  > Ouvrez ensuite le lien local affiché (ex: `http://localhost:5173/`).

3.  *(Optionnel)* **Pour la mise en production** :

  ```bash
  npm run build
  npm run preview
  ```

---

## 🎮 Contrôles

Toute la logique d'interaction est centralisée dans le moteur de jeu (`src/engine.js`).

### ⌨️ Clavier

| Touche | Action |
| :---: | :--- |
| **P** | ⏸️ **Pause** / Lecture |
| **+** | ➕ **Ajouter** une entité (au centre ou aléatoirement) |
| **-** | ➖ **Supprimer** la dernière entité |
| **0** | 🎲 Mode **Aléatoire** (forme au hasard au prochain clic) |
| **1** | 🔴 **Balle** |
| **2** | ⭐ **Étoile** |
| **3** | ❤️ **Cœur** |
| **4** | 🔶 **Losange** |
| **5** | 💀 **Crâne** |
| **6** | 🐰 **Lapin** |
| **7** | 🦑 **Calamar** |

### 🖱️ Souris

* **Clic Gauche (sur le canvas)** : Fait apparaître (`spawn`) une forme à la position du curseur.
* **Clic sur la palette** : Change la forme active visuellement.

---

## ⚙️ Configuration

Vous pouvez ajuster les paramètres globaux dans `src/config.js` sans toucher au moteur.

```javascript
export const config = {
  ballCount: 0,             // Nombre d'objets au démarrage
  minSize: 12,              // Taille min (px)
  maxSize: 22,              // Taille max (px)
  maxSpeed: 3,              // Vitesse max
  background: "rgba(0,0,0,0.22)",  // Couleur de fond (transparence pour effet traînée)
  shapeMix: {               // Probabilités pour le mode "Aléatoire"
    ball: 0.14,
    star: 0.14,
    heart: 0.14,
    diamond: 0.14,
    skull: 0.14,
    rabbit: 0.14,
    squid: 0.16
  }
}
```

---

## 📂 Structure du projet

- `index.html` — point d'entrée et `canvas`
- `style.css` — styles de l'interface
- `package.json` — scripts NPM (si présents)
- `src/`
  - `main.js` — bootstrap de l'application
  - `config.js` — configuration globale
  - `engine.js` — boucle, gestion d'événements, création d'entités
  - `entities/` — classes d'entités (`balls.js`, `star.js`, `heart.js`, ...)
  - `utils/random.js` — utilitaires aléatoires

---

## 🩺 Dépannage rapide

- Ouvrez la console DevTools (F12) et regardez les erreurs JS si le rendu ne s'affiche pas.
- Erreurs fréquentes : appel de méthode mal orthographié (ex: `collidesWith`), `randomColor` non appelé (`randomColor()`), ou erreurs lors du `import`.

---

## 🤝 Contribuer

- PRs bienvenues : ajout de formes, amélioration physique, optimisation.
- Pour contribuer localement : modifiez `src/` puis soumettez une PR.

---

## 📝 Licence

Usage personnel / pédagogique.
