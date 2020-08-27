class Game{
    constructor(){

    }

    start(){
        if(gameState===START){
            form=new Form();
            form.display();
            
        }
    }

    play(){
        form.hide();
        background(bg); 
    }
}