// Fonction utilitaire pour générer une couleur aléatoire

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Méthode qui retourne la couleur random
export const randomcolor = () => {
    return `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`
}