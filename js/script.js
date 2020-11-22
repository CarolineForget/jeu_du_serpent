
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

        nouvellePartie(){ //------- Cree les objets sur la scene.

            this.affichagePointage(1);
            this.pomme = new Pomme();
            this.serpent = new Serpent();
        }

        finPartie(){

        }

        affichagePointage(_lePointage){
            this.sortiePointage.innerHTML = _lePointage;
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

    var unePartie = new Jeu("#jeu", "#pointage"); // Creation d'un objet avec une classe. (le jeu) --- #jeu == id pour le jeu -- APPELLE LE CONSTRUCTOR DE LA CLASSE JEU


    //-------------------------------------- Faire la nouvellePartie
    var btnJouer = document.querySelector("#btnJouer"); // Recupere le btnJouer.
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie(){
        unePartie.nouvellePartie(); // Car unePartie == objet Jeu();
    }





});