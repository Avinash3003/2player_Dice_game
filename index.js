var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;


var randDiceImg="dice"+rand1+".png";
var randDiceImg2="dice"+rand2+".png";


var randImgSrc= "images/"+randDiceImg;
var randImgSrc2= "images/"+randDiceImg2;


var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",randImgSrc);
img2.setAttribute("src",randImgSrc2);

if(rand1>rand2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML="Player2 wins";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}




