
document.addEventListener("DOMContentLoaded", function(event) {

    //-------------------------------------- Le jeu
    class Jeu{ // Declaration
        constructor(_idSvg, _idPointage) {
            console.log("Jeu");

            this.s = Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);
            this.grandeurCarre = 20;
            this.grandeurGrille = 15;
        }

        nouvellePartie(){

        }

        finPartie(){

        }

        affichagePointage(){
            
        }
    }

    //-------------------------------------- Le serpent
    class Serpent{
        constructor() {
            console.log("Serpent");
        }
    }

    //-------------------------------------- La pomme
    class Pomme{
        constructor() {
            console.log("Pomme");
        }
    }

    var unePartie = new Jeu("#jeu", "#pointage"); // Creation d'un objet avec une classe. --- #jeu == id pour le jeu -- APPELLE LE CONSTRUCTOR

});