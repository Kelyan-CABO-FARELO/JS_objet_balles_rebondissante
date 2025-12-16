import { Ball } from "./balls.js";

export class Diamond extends Ball {
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        // On définit une largeur un peu plus petite que la hauteur (le rayon 'size')
        // pour donner un joli style "Carreau" (carte à jouer).
        // Si vous voulez un carré parfait tourné, remplacez 0.7 par 1.
        const width = this.size * 0.7; 

        // 1. Point du haut
        ctx.moveTo(this.x, this.y - this.size);

        // 2. Point de droite
        ctx.lineTo(this.x + width, this.y);

        // 3. Point du bas
        ctx.lineTo(this.x, this.y + this.size);

        // 4. Point de gauche
        ctx.lineTo(this.x - width, this.y);

        ctx.closePath();
        ctx.fill();
    }
}