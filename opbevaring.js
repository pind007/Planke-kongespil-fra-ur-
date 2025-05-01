for(let placeringx=100; placeringx<500; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 100,100,100);
}
for(let placeringx=100; placeringx<500; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 200,100,100);
}
for(let placeringx=100; placeringx<500; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 300,100,100);
}
for(let placeringx=500; placeringx<700; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 200,100,100);
}
for(let placeringx=700; placeringx<900; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 100,100,100);
}
for(let placeringx=700; placeringx<900; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 200,100,100);
}
for(let placeringx=700; placeringx<900; placeringx+=100){
    fill(200,200,200);
    rect(placeringx, 300,100,100);
}
class opbevaring{
    constructor(){
    }
    slåBrikkerHjemHvid(valgRække, valgKolonne){
        //console.log(valgRække, valgKolonne);
        //console.log(this.række, this.kolonne);
        if(valgRække === 4 && valgKolonne === 0){ // udelukker startbane for sort brik som mulighed for at slå hjem
            valgRække = null;
            valgKolonne = null;
        }
        else { 
            if(this.brikkerGrid[valgRække][valgKolonne] === 3){
                if(this.brikkerGrid[this.række][this.kolonne] === 4){
                    this.brikkerGrid[valgRække][valgKolonne] = 4; // skifter sort brik ud med hvid
                    this.brikkerGrid[this.række][this.kolonne] = 0; // sætter gammle position til 0
                    for(let i=0; i<this.kolloner-1; i++){
                        if(this.brikkerGrid[4][i] === 0){
                            this.brikkerGrid[4][i] = 3; 
                            break; 
                        }
                    }
                    
                }
            }
        }
    }
    slåBrikkerHjemSort(valgRække, valgKolonne){
        if(valgRække === 5 && valgKolonne === 0){ // udelukker startbane for sort brik som mulighed for at slå hjem
            valgRække = null;
            valgKolonne = null;
        }
        else { 
            if(this.brikkerGrid[valgRække][valgKolonne] === 4){
                if(this.brikkerGrid[this.række][this.kolonne] === 3){
                    this.brikkerGrid[valgRække][valgKolonne] = 3; // skifter hvid brik ud med sort
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
        //console.log(this.brikkerGrid);3
    }
}
//else if (this.grid[række][kollon] === 3) {   // hvis der er vaiablen 3:
                    //fill(60,60,60); // sort farve for brikker
                    //stroke(20);
                    //ellipse(kollon*this.størrelse+this.win+this.radius, række*this.størrelse+300+this.radius, this.størrelse/2);
                //}
                //else if (this.grid[række][kollon] === 4) {   // hvis der er vaiablen 4:
                    //fill(230,230,230); // hvid farve for brikker
                    //stroke(0);
                    //ellipse(kollon*this.størrelse+this.win+this.radius, række*this.størrelse+300+this.radius, this.størrelse/2);
                //}