class obstacle{
    constructor(position,velocity,id){
        this.position=position;
        this.element=document.getElementById(id);
        this.id=id;
        this.velocity=velocity;
    }
        obstacle(){
            return this.element;
        }
        getPosition(){
            return this.position;
    }
        setPosition(newPosition){
            this.position=newPosition;
        }
        getVelocity(){
            return this.velocity;
        }
        setVelocity(){
            this.velocity=-Math.random()*2;
        }

}

// obstacle variables
let cactusArray =new Array(); //new obstacle(1000,-Math.random()-0.5,"cactus1");
for(j=1;j<4;j++){
    cactusArray[j]=new obstacle(1000*j,-Math.random()*2,"cactus"+j);
    console.log(cactusArray[j]);
}
// variable for the ball or player
var ball=document.getElementById("ball");
var y=400;
var v=-1;
var g=-0.011;

// variable for distance
var distance;
// now we are going to make animation with a loop
var audio = new Audio('jump.wav');

//document.getElementById("ad").play();
document.body.onkeydown=function(e){
    if(e.key==" " || e.code=="Space" || e.KeyCode==32){
        game();
        document.getElementById("over").style.visibility="hidden";
        document.getElementById("over").innerHTML="GAME OVER<button onclick='location.reload()'>RELOAD</button>";
       
    }
}
var loop;
function game(){
loop=setInterval(function(){
    y=y+v;
    v=v+g;
    cactusArray.forEach(cactus => {
        cactus.setPosition(cactus.getPosition()+cactus.getVelocity());
    });
    
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
    cactusArray.forEach(cactus => {
        if(cactus.getPosition()<200 && cactus.getPosition()>100){
            if(y<60){
                clearInterval(loop);
                document.getElementById("over").style.visibility="visible";    
            }
           }
    });
    
    obstaclesLoop();
    ball.style.bottom= y+"px";
    cactusArray.forEach(cactus => {
        document.getElementById(cactus.id).style.left=cactus.getPosition()+"px";

    });
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
        cactusArray.forEach(cactus => {
            if(cactus.getPosition() < 0){
                cactus.setPosition(document.querySelector("body").offsetWidth+ Math.random()*500);
                cactus.setVelocity();
                increaseScore();
            }
        });
       
    }

}

