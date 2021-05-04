// ## Exo1

// ### Créer une class Objet
// ### _Propriétés : nom, prix

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.



class Objet {
    constructor (nom, prix) {
        this.nom = nom,
        this.prix = prix
    }
}

let lampe = new Objet ("lampre", 15);
let torche = new Objet ("torche", 5);
let boite = [lampe , torche];

class Personnage {
    constructor (nom, sac, argent) {
        this.nom = nom,
        this.sac = sac,
        this.argent = argent
    }
    prendre(objet){
        this.sac.push(boite[boite.indexOf(objet)]);
        boite.splice(boite.indexOf(objet),1);
    }
    acheter(vendeur, objet){
        if (this.argent >= vendeur.sac[vendeur.sac.indexOf(objet)].prix) {
            this.sac.push[vendeur.sac.indexOf(objet)];
            this.argent = this.argent - vendeur.sac[vendeur.sac.indexOf(objet)].prix;
            vendeur.argent = vendeur.argent + vendeur.sac[vendeur.sac.indexOf(objet)].prix;
        } else {
            console.log("vas travailler frr");
        }
    }
}

let ylias = new Personnage ("Ylias", [], 50);
let cactus = new Personnage ("Cactus", [], 50);

ylias.prendre(torche);
console.log(cactus);
cactus.acheter(ylias, torche)

console.log(cactus);
console.log(ylias);
