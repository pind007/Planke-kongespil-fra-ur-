class Terning {
    constructor(){
        this.værdi = [];
        let terning1 = Math.floor(random(1,5)); // genererer et tilfældigt tal mellem 1 og 4 (hele tal som er math.floor)
        let terning2 = Math.floor(random(1,5));
        let terning3 = Math.floor(random(1,5));
        let terning4 = Math.floor(random(1,5)); //4 terninger
        this.værdi.push(terning1); //den værdi som er slået bliver gemt i arrayet this.værdi
        this.værdi.push(terning2);
        this.værdi.push(terning3);
        this.værdi.push(terning4);
        //this.erstatVærdi();
    }
    erstatVærdi(){  // metode til at erstatte terningernes værdi hvis man ikke bruger drawTerning (bliver ikke brugt)
       for(let i = 0; i<this.værdi.length; i++){
           if(this.værdi[i] === 1 || this.værdi[i] === 3){
            this.værdi[i]= 0;
           }
           if(this.værdi[i] === 2 || this.værdi[i] === 4){
            this.værdi[i]=1;
           }
        }
    }
    drawTerning(){
        for(let i=0; i<this.værdi.length; i++){ //gemmemgår arrayet this.værdi
          if(this.værdi[i] === 1){ // hvis der er slået 1 tegnes en terning med en prik
            fill(255, 255, 255); // hvid farve for brikker
            //rect(200+i*70, 50, 50, 50);
            triangle(200+i*120, 10, 300+i*120, 10, 250+i*120, 106,8);
            line(200+i*120, 10, 250+i*120, 39);
            line(300+i*120, 10, 250+i*120, 39);
            line(250+i*120, 39, 250+i*120, 106,8);
            fill(0,0,0);
            ellipse(250+i*120, 39, 10, 10);
            ellipse(200+i*120+2, 10+2, 10, 10);
          }
          else if(this.værdi[i] === 2){ //slået 2 tegnes en terning med 0 prikker (alså der er slået)
            fill(255,255,255);
            //rect(200+i*70, 50, 50, 50);
            triangle(200+i*120, 10, 300+i*120, 10, 250+i*120, 106,8);
            line(200+i*120, 10, 250+i*120, 39);
            line(300+i*120, 10, 250+i*120, 39);
            line(250+i*120, 39, 250+i*120, 106,8);
            fill(0,0,0);
            ellipse(200+i*120+2, 10+2, 10, 10);
            ellipse(300+i*120-2, 10+2, 10, 10);
          }
          else if(this.værdi[i] === 3){ // hvis 3 en terning med 1 prik men anden orienterning
            fill(255,255,255);
            //rect(200+i*70, 50, 50, 50);
            triangle(200+i*120, 10, 300+i*120, 10, 250+i*120, 106,8);
            line(200+i*120, 10, 250+i*120, 39);
            line(300+i*120, 10, 250+i*120, 39);
            line(250+i*120, 39, 250+i*120, 106,8);
            fill(0,0,0);
            ellipse(250+i*120, 39, 10, 10);
            ellipse(300+i*120-2, 10+2, 10, 10);
          }
          else if(this.værdi[i] === 4){ // 0 prikker der vender op
            fill(255,255,255);
            //rect(200+i*70, 50, 50, 50);
            triangle(200+i*120, 10, 300+i*120, 10, 250+i*120, 106,8);
            line(200+i*120, 10, 250+i*120, 39);
            line(300+i*120, 10, 250+i*120, 39);
            line(250+i*120, 39, 250+i*120, 106,8);
            fill(0,0,0);
            ellipse(300+i*120-2, 10+2, 10, 10);
            ellipse(250+i*120, 106.8-2, 10, 10);
          }

        }
    }
}

