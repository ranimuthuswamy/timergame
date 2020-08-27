class Form{
    constructor(){
        this.timerValue = "1:00";
        this.input=createInput('Name');
        this.input2=createInput(this.timerValue);
        this.input2.id('timer');
        this.button=createButton("Let's Start");
        this.title=createElement("h1");
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.greeting3=createElement("h2");
        //this.image = loadImage("gkimage.jpg");
        this.image = gkImg;
    }
    
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
       
        this.title.hide();
    }

     startTimer() {
        var presentTime = document.getElementById('timer').value;//this.timerValue;
        //console.log(presentTime);
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = timeArray[1] - 1;
        //var s = this.checkSecond((timeArray[1] - 1));
        if (s < 10 && s >= 0) {s = "0" + s}; // add zero in front of numbers < 10
        if (s < 0) {s = "59"};
        if(s==59){m=m-1}
        //if(m<0){alert('timer completed')}
        //this.timerValue = m + ":" + s;
        //this.input2.value(m + ":" + s);
        document.getElementById('timer').value = m + ":" + s;
        if(m ==0 && s == 0){
            this.setGameState();
        }
        //console.log(m)
        setTimeout(this.startTimer, 1000);
      }
      
       checkSecond(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
        if (sec < 0) {sec = "59"};
        return sec;
      }

      setGameState(){
          gameState = PLAY;
      }
    
      display(){
        background(formBg);
        this.title.html("Deal Or No Deal");
        this.title.position(displayWidth/2 - 90, 0);
        this.title.style('color','lightgreen');
        this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
        this.input2.position(displayWidth/2 - 80 , displayHeight/2 - 200);
        this.button.position(displayWidth/2 + 10, displayHeight/2);
        this.input2.attribute('disabled','disabled');
        image(this.image,displayWidth/4-50,displayHeight/4+50,200,200);
        //image(this.image,100,100,200,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
           var playerName = this.input.value();
            this.greeting.html("Hello " + playerName )
            this.greeting.position(displayWidth/2 - 80, displayHeight/4);
            this.greeting2.html( "Your Game Starts in Few Seconds" )
            this.greeting2.position(displayWidth/2 - 170, displayHeight/4+65);
            this.greeting3.html( "Till Then Rack Your Brains to be Victorious" )
            this.greeting3.position(displayWidth/2 - 170, displayHeight/4+95); 
            //gameState = PLAY;           
            this.startTimer();
        });
      }
}