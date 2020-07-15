class MainMenu{
    constructor(){
        const center_x = width / 2;
        this.play = new Button(center_x, height * 2/5, "Play");
        this.options = new Button(center_x, height * 3/5, "Options");
        this.credits = new Button(center_x, height * 4/5, "Credits");
    }

    Update(){
       if(play.DidClickButton()){
            console.log("Play!");
            CurrentScene = PlayScene.Draw();
    } 
  else if(options.DidClickButton())
    {
            console.log("Options!");
            CurrentScene = OptionsScreenScene.Draw();
    } 
  else if(credits.DidClickButton()){
            console.log("Credits!");
            CurrentScene = CreditsScreenScene.Draw();
    }
    }

    Draw(){
        
        this.play.DrawButton();
        this.options.DrawButton();
        this.credits.DrawButton();
    }
}