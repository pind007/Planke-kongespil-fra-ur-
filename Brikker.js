class Brikker extends Board {
    constructor() {
            super(); // arver værdier fra Board klassen. så som radius og windues størrelse
            this.test = 0; // test variabel (kan slettes)
            this.brikkerGrid = [
            [0, 0, 0, 0, 0, 0, 0, 0],  // række 0
            [0, 0, 0, 0, 0, 0, 0, 0],  // række 1
            [0, 0, 0, 0, 0, 0, 0, 0],   // række 2
            [0, 0, 0, 0, 0, 0, 0, 0], // række 3
            [3, 3, 3, 3, 3, 3, 3, 0], // række 4
            [4, 4, 4, 4, 4, 4, 4, 0] // række 5
        ];
            this.valgtBrikRække = null; // starter med ingen valgt brik række
            this.valgtBrikKolonne = null; // starter med ingen valgt brik kolonne
            this.pointsHvid = 0; // points for hvid
            this.pointsSort= 0; // points for sort
    }
   
    tegnBrikker() {
        for (let række = 0; række < this.rækker; række++) {
            for (let kollon = 0; kollon < this.kolloner; kollon++) {        //kører igennem alle felter i this.grid
                if (this.brikkerGrid[række][kollon] === 3) {   // hvis der er vaiablen 3:
                    fill(60,60,60); // sort farve for brikker
                    stroke(20);
                    ellipse(kollon*this.størrelse+this.win+this.radius, række*this.størrelse+300+this.radius, this.størrelse/2);
                }
                else if (this.brikkerGrid[række][kollon] === 4) {   // hvis der er vaiablen 4:
                    fill(230,230,230); // hvid farve for brikker
                    stroke(0);
                    ellipse(kollon*this.størrelse+this.win+this.radius, række*this.størrelse+300+this.radius, this.størrelse/2);
                }
                else {}  
            }
        }
    }
     // Metode til at registrere hvilken brik der er trykket på
     registrerKlik(mouseX, mouseY) {
        for (let række = 0; række < this.rækker; række++) {
            for (let kollon = 0; kollon < this.kolloner; kollon++) {
                let x = kollon * this.størrelse + this.win + this.radius;
                let y = række * this.størrelse + 300 + this.radius;
                // tjek om musen er inden for brikkens område
                if (dist(mouseX, mouseY, x, y) < this.størrelse / 2) {
                    if (this.brikkerGrid[række][kollon] === 3 || this.brikkerGrid[række][kollon] === 4) {
                        this.valgtBrikRække = række; // Gem den valgte briks række
                        this.valgtBrikKolonne = kollon; // Gem den valgte briks kolonne
                        //return true; // returner true for at indikere at en brik blev valgt
                    }
                }
            }
        }
        //return false; // ingen brik blev valgt
    }

    // Metode til at flytte den valgte brik
    flytBrik(nyRække, nyKolonne) {
        if (this.valgtBrikRække !== null && this.valgtBrikKolonne !== null) { // hvis der er vlagt brik så:
            let række = this.valgtBrikRække; // Gem den valgte briks række 
            let kollon = this.valgtBrikKolonne; // Gem den valgte briks kolonne
            this.række = række;
            this.kolonne = kollon;
            // Tjek om destinationen er tom
            if (this.brikkerGrid[nyRække][nyKolonne] === 0) { 
                // Flyt brikken
                this.brikkerGrid[nyRække][nyKolonne] = this.brikkerGrid[række][kollon];
                this.brikkerGrid[række][kollon] = 0; // Sæt den gamle position til tom
                this.valgtBrikRække = null; // Nulstil den valgte briks række
                this.valgtBrikKolonne = null; // Nulstil den valgte briks kolonne
            }
        }
    }
    rykBrikkerPåStart(){
        if (this.brikkerGrid[4][0] === 0){ // tjekker om der er tom plads på det røde startfelt. Hvis der er det:
            for(let i=0; i<this.kolloner; i++){ // kører igennem alle kolonner i række 4
                if(this.brikkerGrid[4][i] === 3){ // hvis der er en sort brik i række 4 på kolonne i:
                    this.brikkerGrid[4][i-1]= 3; // flytter den til venstre
                    this.brikkerGrid[4][i] = 0; // og sætter den gamle position til 0.
                }  
            }
        }
        if (this.brikkerGrid[5][0] === 0){ // gøre det samme for række 5 (hvide brikker)
            for(let i=0; i<this.kolloner; i++){
                if(this.brikkerGrid[5][i] === 4){
                    this.brikkerGrid[5][i-1]= 4;
                    this.brikkerGrid[5][i] = 0;
                }
            }
        }
        else{}
    }
    slåBrikkerHjemHvid(nyRække, nyKolonne){
        if(nyRække === 4 && nyKolonne === 0){ // udelukker startbane for sort brik som mulighed for at slå hjem
            nyRække = null;
            nyKolonne = null;
        }
        else if(nyRække === 1 && nyKolonne === 3){ // udelukker den heldige plads for mulighed for at slå hjem
            nyRække = null;
            nyKolonne = null; 
        }
        else { 
            if(this.brikkerGrid[nyRække][nyKolonne] === 3){ // hvis der på den nye destination er en sort brik
                //console.log("virker");
                if(this.brikkerGrid[this.række][this.kolonne] === 4){ // hvis der er valgt en hvid brik
                    this.brikkerGrid[nyRække][nyKolonne] = 4; // skifter sort brik ud med hvid
                    this.brikkerGrid[this.række][this.kolonne] = 0; // sætter gammle position til 0
                    for(let i=0; i<this.kolloner-1; i++){ // kører igennem alle kolonner i række 4
                        if(this.brikkerGrid[4][i] === 0){ // hvis der er tom plads i række 4 på kolonne i:
                            this.brikkerGrid[4][i] = 3; //flyt brikken der er slået hjem til den tomme plads
                            break;  //stop når dette har være true.
                        }
                    }
                    
                }
            }
        }
    }
    slåBrikkerHjemSort(nyRække, nyKolonne){
        if(nyRække === 5 && nyKolonne === 0){ // udelukker startbane for sort brik som mulighed for at slå hjem
            nyRække = null;
            nyKolonne = null;
        }
        else if(nyRække === 1 && nyKolonne === 3){ // udelukker den heldige plads for mulighed for at slå hjem
            nyRække = null;
            nyKolonne = null; 
        }
        else { 
            if(this.brikkerGrid[nyRække][nyKolonne] === 4){
                if(this.brikkerGrid[this.række][this.kolonne] === 3){
                    this.brikkerGrid[nyRække][nyKolonne] = 3; // skifter hvid brik ud med sort
                    this.brikkerGrid[this.række][this.kolonne] = 0; // sætter gammle position til 0
                    for(let i=0; i<this.kolloner-1; i++){
                        if(this.brikkerGrid[5][i] === 0){
                            this.brikkerGrid[5][i] = 4;
                            break; 
                        }
                    }
                }
            }
        }
        //console.log(this.brikkerGrid);
    }
    tællePointsHvid(){
        if(this.brikkerGrid[0][5] === 4){ // hvis brikken er kommet igennem banen og lander på feltet række 0 kolonne 5
            this.pointsHvid = this.pointsHvid + 1; // tæller points
            //console.log(this.pointsHvid);
            this.brikkerGrid[0][5] = 0; // fjerne brik og tæller points
            if(this.pointsHvid === 7){ // alle brikker er kommet igennem banen
                console.log("Hvid vinder");
            }
        }
    }
    tællePointsSort(){
        if(this.brikkerGrid[2][5] === 3){ // hvis den sorte brik er komet igennem banen.
            this.pointsSort = this.pointsSort + 1; // tæller points
            //console.log(this.pointsSort);
            this.brikkerGrid[2][5] = 0; // fjerne brik og tæller points
        }
        if(this.pointsSort === 7){ //hvis sort vinder
            console.log("Sort vinder"); 
        }
    }
}