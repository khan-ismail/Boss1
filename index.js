var randNumber1 = Math.floor(Math.random()*6)+1;
var randNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").src = "images/dice"+randNumber1+".png";
document.querySelector(".img2").src = "images/dice"+randNumber2+".png";

if (randNumber1 > randNumber2){
    
    showStatus("Player 1 Wins!");


} else if (randNumber1 < randNumber2){
   
    showStatus("Player 2 Wins!");

}
else {
    showStatus("Draw!!");
}


function showStatus(status){
    document.querySelector("h1").textContent = status;
}