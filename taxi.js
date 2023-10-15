let prenom = 'John' 
let sante_mentale = 10
let listes_music = ['Anissa : Wejdene',
                     'SDM freestyle 8 ocho',
                     'Diddi Trix Fondu',
                      '4 juin 2022',
                       
                ]
let nb_feu_rouge = 30
let nb_changement = 0

function musique_en_cours() {
    nb_feu_rouge--;

    const radio = Math.floor(Math.random() * 4 );

    if (listes_music[radio] == listes_music[0]){
        sante_mentale -= 1,
        nb_changement += 1
    }

    return radio
}

while (nb_feu_rouge > 0 && sante_mentale > 0){
    const musique = musique_en_cours();
    console.log(`Musique qui passe actuellement à la radio ) ${musique}. Feu rouge restant ${nb_feu_rouge} feux a parcourir.` )
}

if (nb_feu_rouge > 0) {
    console.log(`Bien arrivée, il vous aura fallu ${nb_changement} changement(s) pour arriver chez vous. La sante mentale est de ${sante_mentale}.`)
}

if (sante_mentale == 0) {
    console.log(`Explosion!`)
}