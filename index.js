var randomNumber1 =Math.floor(Math.random()*6+1);
var randomImg1= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImg1);


var randomNumber2 =Math.floor(Math.random()*6+1);
var randomImg2= "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImg2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw! 🚩";
}