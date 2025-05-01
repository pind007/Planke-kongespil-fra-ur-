let terning;
let brikker;
let board;
let musX;
let musY;
function setup(){
    createCanvas(windowWidth, windowHeight);
    brikker = new Brikker();
    board = new Board();
    terning = new Terning();
    let button = createButton("Kast terning");
    button.position(10,10);
    button.mousePressed(terningKast);
    button.style('font-size', '28px');
    button.size(130,70);
    let nytSpilButton = createButton("Nyt spil");
    nytSpilButton.position(10,300);
    nytSpilButton.mousePressed(nytSpil);
    nytSpilButton.style('font-size', '28px');
    nytSpilButton.size(110,50);
}
function terningKast() {
    terning = new Terning(); // opretter et nyt terning objekt
    terningVærdi = terning.værdi; // for at kunne skrive terningens værdi
    //console.log(terning.værdi);
}
function draw(){
    background(150, 188, 221);
    textSize(26);
    text('Points for hvid:', 0,150 );
    text('Points for sort:', 0,220 );
    board.tegnBoard();
    brikker.tegnBrikker();
    textSize(45);
    fill(0,0,0);
    //text(terning.værdi, 170, 55);
    terning.drawTerning();
    brikker.rykBrikkerPåStart();
    brikker.tællePointsHvid()
    brikker.tællePointsSort();
    fill(255,255,255);
    text(brikker.pointsHvid, 175, 155);
    fill(0,0,0);
    text(brikker.pointsSort, 175, 225);
    musX = mouseX; // opdaterer musens x-position
    musY = mouseY; // opdaterer musens y-position   
    //console.log(musX, musY); // udskriver musens position i konsollen
}
function mousePressed() {
    // registrer hvilken brik der blev trykket på
    let valgt = brikker.registrerKlik(mouseX, mouseY);
}
function mouseReleased() {
    // beregn ny position baseret på musens position
    let nyRække = Math.floor((mouseY - 300) / brikker.størrelse);
    let nyKolonne = Math.floor((mouseX - brikker.win) / brikker.størrelse);
    
    // tjek om den nye position er inden for grænserne af brættet
    if(nyRække < 0 || nyRække >= brikker.rækker || nyKolonne < 0 || nyKolonne >= brikker.kolloner){
        return; // ugyldig position gør ikke noget
    }
    // Flyt den valgte brik
    brikker.flytBrik(nyRække, nyKolonne);
    if(mouseReleased){
        brikker.slåBrikkerHjemHvid(nyRække, nyKolonne);
        brikker.slåBrikkerHjemSort(nyRække, nyKolonne);
        //console.log(nyRække, nyKolonne);
    }
}
function nytSpil() {
    // genindlæser spillet ved at oprette nye objekter
    brikker = new Brikker();
    board = new Board();
    terning = new Terning();
    //console.log("Nyt spil startet");
}

