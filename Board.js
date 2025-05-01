class Board {
    constructor() {
        this.kolloner = 8;
        this.rækker = 6;  
        this.størrelse = 80;
        this.win = windowWidth/5;
        this.radius = this.størrelse/2;
        this.grid = [
            [2, 1, 1, 1, 0, 0, 2, 1],  // række 0
            [1, 1, 1, 2, 1, 1, 1, 1],  // række 1
            [2, 1, 1, 1, 0, 0, 2, 1],   // række 2
            [0, 0, 0, 0, 0, 0, 0, 0], // række 3
            [6, 5, 5, 5, 5, 5, 5, 0], // række 4
            [6, 5, 5, 5, 5, 5, 5, 0] // række 5
        ];
  //kollone  0  1  2  3  4  5  6  7 
   // 5 for start feltet for brikker og 6 for der hvor man skal trække brikker
        //this.grid[2][0] = 0;
    }
    tegnBoard(){
        for (let række = 0; række < this.rækker; række++) {
            for (let kollon = 0; kollon < this.kolloner; kollon++) {        //kører igennem alle felter i this.grid
                if (this.grid[række][kollon] === 1) {  // hvis der i this.grid er vaiablen 1 skal der:
                    fill(100, 100, 100); // grå farve for fyldte felter
                    stroke(0);
                    rect(kollon*this.størrelse+this.win, række*this.størrelse+300, this.størrelse, this.størrelse);
                } 
                else if (this.grid[række][kollon] === 2) {   // hvis der er vaiablen 2:
                    fill(130, 100, 100); // rød farve for speciele felter
                    stroke(0);
                    rect(kollon*this.størrelse+this.win, række*this.størrelse+300, this.størrelse, this.størrelse);
                    noFill();
                    stroke(255, 0, 0); 
                    triangle(kollon*this.størrelse+this.win+(this.størrelse/8), række*this.størrelse+300+(this.størrelse-20), kollon*this.størrelse+this.win+(this.størrelse/2), række*this.størrelse+300+(this.størrelse/8), kollon*this.størrelse+this.win+(this.størrelse-this.størrelse/8), række*this.størrelse+300+(this.størrelse-20)); // lang linje kode men tegner stjernen
                    triangle(kollon*this.størrelse+this.win+(this.størrelse/8), række*this.størrelse+300+(this.størrelse/8+10), kollon*this.størrelse+this.win+(this.størrelse/2), række*this.størrelse+300+(this.størrelse-20+10), kollon*this.størrelse+this.win+(this.størrelse-this.størrelse/8), række*this.størrelse+300+(this.størrelse/8+10));
                    //console.log(kollon*this.størrelse+this.win);
                } 
                else if (this.grid[række][kollon] === 5) {   // hvis der er vaiablen 5:
                    fill(200,165 ,0 ); // gul farve for brikkers startfelter
                    stroke(0);
                    rect(kollon*this.størrelse+this.win, række*this.størrelse+300, this.størrelse, this.størrelse);
                } 
                else if (this.grid[række][kollon] === 6) {   // hvis der er vaiablen 6:
                    fill(150,10 ,10 ); // rød farve for felt hvor brikkerne skal trækkes fra
                    stroke(0);
                    rect(kollon*this.størrelse+this.win, række*this.størrelse+300, this.størrelse, this.størrelse);
                } 
                else {}  
            }
        }
    }
}
