import { Ball } from "./balls.js";

export class Skull extends Ball {
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        const s = this.size;

        // --- 1. FORME GLOBALE (Tête + Mâchoire) ---
        // On dessine dans le sens HORAIRE (Clockwise)

        // Partie haute (Le crâne rond)
        // On dessine un arc de cercle qui s'arrête en bas pour laisser la place à la mâchoire
        // Arc de 35° à 145° (en radians : ~0.6 à PI-0.6)
        ctx.arc(this.x, this.y - s * 0.15, s * 0.75, 0.6, Math.PI - 0.6, true); 
        // Note: 'true' ici dessine l'arc extérieur (le grand tour), ce qui crée la forme du casque

        // Coté gauche de la mâchoire (descend un peu en biais)
        ctx.lineTo(this.x - s * 0.45, this.y + s * 0.6);
        
        // Bas de la mâchoire (arrondi)
        ctx.quadraticCurveTo(this.x, this.y + s * 0.8, this.x + s * 0.45, this.y + s * 0.6);
        
        // Remontée coté droit vers le crâne
        ctx.lineTo(this.x + s * 0.70, this.y + s * 0.25); // Point de raccord approximatif
        
        // On ferme la forme extérieure implicitement ici, mais on continue le chemin pour faire les trous...

        // --- 2. LES TROUS (Yeux, Nez, Dents) ---
        // On dessine dans le sens ANTI-HORAIRE (Counter-Clockwise) pour "gommer" l'intérieur

        // Oeil Gauche (Gros et ovale)
        ctx.moveTo(this.x - s * 0.25, this.y - s * 0.1);
        ctx.ellipse(this.x - s * 0.28, this.y - s * 0.1, s * 0.18, s * 0.22, 0, 0, Math.PI * 2, true);

        // Oeil Droit (Gros et ovale)
        ctx.moveTo(this.x + s * 0.28, this.y - s * 0.1);
        ctx.ellipse(this.x + s * 0.28, this.y - s * 0.1, s * 0.18, s * 0.22, 0, 0, Math.PI * 2, true);

        // Le Nez (Triangle inversé au milieu)
        ctx.moveTo(this.x, this.y + s * 0.15); // Pointe bas
        ctx.lineTo(this.x - s * 0.1, this.y + s * 0.35);
        ctx.lineTo(this.x + s * 0.1, this.y + s * 0.35);
        ctx.lineTo(this.x, this.y + s * 0.15); // Retour pointe

        // Les Dents (3 petits bâtons verticaux en bas)
        const toothW = s * 0.06;
        const toothH = s * 0.15;
        const toothY = this.y + s * 0.5;

        // Dent gauche
        ctx.rect(this.x - s * 0.2, toothY, toothW, toothH);
        // Dent milieu
        ctx.rect(this.x - toothW/2, toothY, toothW, toothH);
        // Dent droite
        ctx.rect(this.x + s * 0.2 - toothW, toothY, toothW, toothH);

        // Important : Pour que les trous fonctionnent avec ctx.rect, 
        // il faudrait normalement gérer le sens, mais ctx.fill("evenodd") est plus simple :
        ctx.closePath();
        
        // Remplissage avec la règle "evenodd" qui gère parfaitement les trous
        ctx.fill("evenodd");
    }
}