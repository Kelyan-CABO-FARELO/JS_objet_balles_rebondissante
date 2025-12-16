import { Skull } from "./entities/skull.js";
import { Rabbit } from "./entities/rabbit.js";
import { Squid } from "./entities/squid.js";
import { Diamond } from "./entities/diamond.js";
import { Star } from "./entities/star.js";
import { Heart } from "./entities/heart.js";
import { Ball } from "./entities/balls.js";
import { pickshape } from "./utils/random.js";
import { config } from "./config.js";


export class Engine {
    constructor(canvas, userConfig = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.entities = [];
        this.running = true;
        this.config = { ...config, ...this.config, userConfig };
        this.selectedShape = "auto"; // star | ball | heart | auto
        this.resize();
        this.bindEvents();
        this.populate();
        this.updatePaletteUI();
    }

    // Accès aux bornes du canvas
    get bounds() {
        return { width: this.width, height: this.height };
    }

    // Gérer le ratio d'affichage et le redimensionnement
    resize() {
        const ratio = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width * ratio;
        this.canvas.height = this.height * ratio;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(ratio, ratio);
    }

    // Événement clavier + souris
    bindEvents() {
        window.addEventListener("resize", () => {
            this.resize();
            this.reseed();
        });

        window.addEventListener("keydown", (e) => {
            const code = e.code; // Indépendant du layout
            const key = e.key; // Dépendant du layout (utile sur certain clavier)
            if (key === "p" || key === "P") this.running = !this.running;
            if (key === "+") this.addEntity(undefined, this.selectedShape);
            if (key === "-") this.removeEntity();

            let newShape = null;
            if (code === "Digit1" || key === "1") newShape = "ball";
            if (code === "Digit2" || key === "2") newShape = "star";
            if (code === "Digit3" || key === "3") newShape = "heart";
            if (code === "Digit4" || key === "4") newShape = "diamond";
            if (code === "Digit5" || key === "5") newShape = "skull";
            if (code === "Digit6" || key === "6") newShape = "rabbit";
            if (code === "Digit7" || key === "7") newShape = "squid";
            if (code === "Digit0" || key === "0") newShape = "auto";
            if (newShape) {
                this.selectedShape = newShape;
                this.updatePaletteUI();
            }
        });
        this.canvas.addEventListener("click", (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.addEntity({ x, y }, this.selectedShape);
        })

    }

    // Peupler selon la config (ici 0 => scène vide)
    populate() {
        while (this.entities.length < this.config.ballCount) {
            this.entities.push(this.createRandomEntity())
        }
    }

    // Reinitialisé les entités (ex: lors d'un resize)
    reseed() {
        this.entities.length = 0;
        this.populate();
    }

    // Méthode qui va rajouter une entité
    addEntity(position, shapeOverride = "auto") {
        this.entities.push(this.createRandomEntity(position, shapeOverride));
        this.updatePaletteUI();
    }

    // Méthode qui retire une entité
    removeEntity() {
        if (this.entities.length > 0) this.entities.pop();
    }

    // Construire une entité (polymorphe) selon la forme choisie
    createRandomEntity(position, shapeOverride = "auto") {
        const shape = shapeOverride === "auto" ? pickshape(this.config.shapeMix) : shapeOverride;

        const bounds = this.bounds;
        const cfg = this.config;
        const pos = position ? { x: position.x, y: position.y } : undefined;
        let entity;
        switch (shape) {
            case "squid":
                entity = Squid.createRandom(bounds, cfg, pos);
                break;
            case "rabbit":
                entity = Rabbit.createRandom(bounds, cfg, pos);
                break;
            case "skull":
                entity = Skull.createRandom(bounds, cfg, pos);
                break;
            case "diamond":
                entity = Diamond.createRandom(bounds, cfg, pos);
                break;
            case "star":
                entity = Star.createRandom(bounds, cfg, pos);
                break;
            case "heart":
                entity = Heart.createRandom(bounds, cfg, pos);
                break;
            default:
                entity = Ball.createRandom(bounds, cfg, pos);
        }
        this.resolveSpawnOverlap(entity);
        return entity;
    }

    // Méthode qui évite le spawn exactement sur un autre objet
    resolveSpawnOverlap(entity) {
        const maxAttempts = 12;
        const jitterBase = entity.size * 1.2;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            let overlapping = false;
            for (const other of this.entities) {
                if (entity.collidesWith(other)) {
                    overlapping = true;
                    // Petit décalage aléatoire pour sortir du chevauchement
                    entity.x += (Math.random() * 2 - 1) * jitterBase;
                    entity.y += (Math.random() * 2 - 1) * jitterBase;
                    break;
                }
            }
        }
    }

    // Mise à jour physique et collisions
    update() {
        for (const entity of this.entities) {
            entity.bounce(this.bounds);
            entity.move();
        }

        for (let i = 0; i < this.entities.length; i++) {
            for (let j = i + 1; j < this.entities.length; j++) {
                if (this.entities[i].collidesWith(this.entities[j]))
                    this.entities[i].resolveCollision(this.entities[j]);
            }
        }
    }

    // Le Rendu
    render() {
        this.ctx.fillStyle = this.config.background;
        this.ctx.fillRect(0, 0, this.width, this.height);
        for (const entity of this.entities) {
            entity.draw(this.ctx);
        }
    }

    // Boucle principale
    loop() {
        if (this.running) {
            this.update();
            this.render();
        }
        requestAnimationFrame(() => this.loop());
    }

    // Démarrage
    start() {
        this.loop();
    }

    // Synchro UI Palette
    updatePaletteUI() {
        const palette = document.getElementById('palette');
        if (!palette) return;
        for (const btn of palette.querySelectorAll("button")) {
            btn.classList.toggle("active", btn.dataset.shape === this.selectedShape);
        }
    }
}