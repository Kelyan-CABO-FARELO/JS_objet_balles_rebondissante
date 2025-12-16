// rabbit.js
import { Ball } from "./balls.js";

export class Rabbit extends Ball {
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        const headSize = this.size * 0.6;
        const earLength = this.size * 0.7;
        const earWidth = this.size * 0.25;

        // 1. La tête (cercle principal, légèrement décalé vers le bas)
        ctx.arc(this.x, this.y + this.size * 0.2, headSize, 0, Math.PI * 2);

        // 2. Oreille gauche (Ellipse pivotée)
        // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
        ctx.moveTo(this.x - headSize * 0.3, this.y - headSize * 0.1);
        ctx.ellipse(
            this.x - headSize * 0.4, // Position X centre oreille
            this.y - headSize * 0.5, // Position Y centre oreille
            earWidth,                // Rayon X (largeur)
            earLength,               // Rayon Y (longueur)
            -Math.PI / 6,            // Rotation (inclinaison vers la gauche)
            0, Math.PI * 2           // Angle complet
        );

        // 3. Oreille droite (Miroir de la gauche)
        ctx.moveTo(this.x + headSize * 0.3, this.y - headSize * 0.1);
        ctx.ellipse(
            this.x + headSize * 0.4,
            this.y - headSize * 0.5,
            earWidth,
            earLength,
            Math.PI / 6,             // Rotation (inclinaison vers la droite)
            0, Math.PI * 2
        );

        ctx.closePath();
        ctx.fill();
    }
}