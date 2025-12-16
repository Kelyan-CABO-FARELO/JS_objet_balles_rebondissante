import { Ball } from "./balls.js";

export class Squid extends Ball {
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        const headTop = this.y - this.size;
        const bodyWidth = this.size * 0.7;
        const finSize = this.size * 0.4;
        const bottomY = this.y + this.size * 0.8;

        // 1. Pointe du haut de la tête
        ctx.moveTo(this.x, headTop);

        // 2. Aileron Droit (triangle sortant)
        ctx.lineTo(this.x + bodyWidth, this.y - this.size * 0.4); 
        ctx.lineTo(this.x + bodyWidth + finSize, this.y - this.size * 0.1); // Pointe aileron
        ctx.lineTo(this.x + bodyWidth, this.y + this.size * 0.1); // Retour au corps

        // 3. Descente vers le bas droit
        ctx.lineTo(this.x + bodyWidth, bottomY);

        // 4. Les Tentacules (ondulations en bas)
        // On dessine 3 vagues pour faire le bas du calamar
        const waveCount = 3;
        const step = (bodyWidth * 2) / waveCount;
        let currentX = this.x + bodyWidth;

        for(let i = 0; i < waveCount; i++) {
            // Pour chaque vague, on fait une courbe vers le haut puis vers le bas
            // Point de contrôle au milieu de la vague, un peu plus haut
            ctx.quadraticCurveTo(
                currentX - step / 2, bottomY - this.size * 0.5, // Control point (remonte)
                currentX - step, bottomY // End point (revient en bas)
            );
            currentX -= step;
        }

        // 5. Remontée côté gauche
        ctx.lineTo(this.x - bodyWidth, this.y + this.size * 0.1);

        // 6. Aileron Gauche
        ctx.lineTo(this.x - bodyWidth - finSize, this.y - this.size * 0.1);
        ctx.lineTo(this.x - bodyWidth, this.y - this.size * 0.4);

        // Fermeture sur la pointe haute
        ctx.lineTo(this.x, headTop);

        ctx.closePath();
        ctx.fill();
    }
}