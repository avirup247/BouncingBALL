// variable for the ball or player
var ball=document.getElementById("ball");
var y=400;
var v=-1;
var g=-0.0098;

//variables for the cactus
var cactus= document.getElementById("cactus");
var cac_x = 1000;
var cac_v= -1;
// variable for distance
var distance;
// now we are going to make animation with a loop
var audio = new Audio('jump.wav');

//document.getElementById("ad").play();
document.body.onkeydown=function(e){
    if(e.key==" " || e.code=="Space" || e.KeyCode==32){
        game();
        document.getElementById("over").style.visibility="hidden";
        document.getElementById("over").innerHTML="GAME OVER";
        //audio.play();
       
    }
}
var loop;
function game(){
    loop=setInterval(function(){
    y=y+v;
    v=v+g;
    cac_x=cac_x+cac_v;
    // create bounce effect
    if(y<0){
        v=0;
        y=0;
    }
    // spacebar click
    document.body.onkeydown=function(e){
        if((e.key==" " || e.code=="Space" || e.KeyCode==32) && y<2){
            y=1;
            v=2;
            audio.play();
        }
    }
    // for collision detection
    if(cac_x<200 && cac_x>100){
        if(y<60){
            clearInterval(loop);
            document.getElementById("over").style.visibility="visible";    
        }
       }
    obstaclesLoop();
    ball.style.bottom= y+"px";
    cactus.style.left=cac_x+"px";
    },1);
    //for score 
    var scoreElement=document.getElementById("score");
    var score=0;
    function increaseScore(){
        score++;
        scoreElement.innerHTML="score : "+score;
    }
    // loop for obstacles
    function obstaclesLoop(){
        if(cac_x < 0){
            cac_x=document.querySelector("body").offsetWidth+ Math.random()*500;
            increaseScore();
        }
    }

}
function cl(){
if(loop==null){
game();
}
audio.play();
      y=1;
      v=2;
}
