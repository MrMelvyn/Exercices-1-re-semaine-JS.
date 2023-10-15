class Pokemon {
    constructor(name, attack, defense, healthpv, luckFactor) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.healthpv = healthpv;
        this.luckFactor = luckFactor;
    }

    isLucky() {
        return Math.random() < this.luckFactor;
    }

    attackOpponent(opponentPokemon) {
        if (this.isLucky()) {
            let damage = this.attack - opponentPokemon.defense;
            if (damage > 0) {
                opponentPokemon.healthpv -= damage;
            }
            console.log(
                this.name, "attaque", opponentPokemon.name, "et prends",
                damage, "dégâts. ", opponentPokemon.name, "dorénavant",
                opponentPokemon.healthpv, "points de vie."
            );
        } else {
            console.log(this.name, "loupe l'attaque sur", opponentPokemon.name);
        }
    }
}

let pokemonA = new Pokemon("Dracaufeu", 50, 30, 150, 0.9);
let pokemonB = new Pokemon("Herbizarre", 35, 25, 110, 0.5);

while (pokemonA.healthpv > 0 && pokemonB.healthpv > 0) {
    pokemonA.attackOpponent(pokemonB);
    if (pokemonB.healthpv <= 0) {
        console.log(pokemonB.name, "est K.O. ", pokemonA.name, "remporte le combat.");
        break;
    }

    pokemonB.attackOpponent(pokemonA);
    if (pokemonA.healthpv <= 0) {
        console.log(pokemonA.name, "est K.O. ", pokemonB.name, "remporte le combat.");
        break;
    }
}