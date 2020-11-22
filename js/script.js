
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

            this.finPartie();
            this.affichagePointage(1);
            this.pomme = new Pomme(this);
            this.serpent = new Serpent(this);
        }

        finPartie(){
            if(this.pomme !== undefined) {
                this.pomme.supprimePomme();
                this.pomme = undefined; // Libere la memoire de la pomme precedente.
            }

        }

        affichagePointage(_lePointage){
            this.sortiePointage.innerHTML = _lePointage;
        }
    }

    //-------------------------------------- Le serpent
    class Serpent{
        constructor(_leJeu) {
            console.log("Serpent");

            this.leJeu = _leJeu;
        }

        verifTouche(evt) { //------ Ecouteur de touches

        }

        deplacement(dirCode) {

        }

        controleSerpent() {

        }

        dessineCarre(x, y) {

        }

        supprimeSerpent() {

        }
    }

    //-------------------------------------- La pomme
    class Pomme{
        constructor(_leJeu) {
            console.log("Pomme");

            this.leJeu = _leJeu;
            this.pomme = [];
            this.ajoutePomme();
        }

        ajoutePomme(){
            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: "red"}), posX, posY]; // Cree rectangle + modifie l'attribut.


        }

        supprimePomme(){
            this.pomme[0].remove();
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