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

let objet1 = new Objet ("voiture téléguidée", 42);
let objet2 = new Objet ("tenue de camouflage", 66);

let tableau = [];
tableau.push(objet1, objet2);
console.log(tableau);

class Personnage {
    constructor (nom, sac, argent) {
        this.nom = nom,
        this.sac = sac,
        this.argent = argent,
        this.prendre = (obj) => {
            this.sac.push(obj);
            tableau.splice(tableau.indexOf(obj),1)
        };
        this.acheter = (vendeur, obj) => {
            if (this.argent >= obj.prix) {
                this.sac.push(vendeur.sac.indexOf(obj));
                vendeur.sac.pop();
                vendeur.argent = vendeur.argent+obj.prix
                this.argent = this.argent - obj.prix
            } else {
                return console.log("ciao")
            }
        }
    }
}

let perso1 = new Personnage ("Joseph", [], 10);
let perso2 = new Personnage ("Yves", [], 100);

perso1.acheter(perso2,objet1);
perso2.prendre(objet1)

console.log(perso2)
