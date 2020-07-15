class OptionsScreen{
    constructor(){
      const center_x = width/2;
      this.background = new Button(center_x, height/2, "Random Color");
      this.mainmenu = new Button(center_x, height - 50, "Main Menu");
    }

    Update(){
      if(this.background.DidClickButton()){
          BackgroundColor = color(random(255), random(255), random(255));
        }
      else if(this.mainmenu.DidClickButton()){
          CurrentScene = MAIN_MENU;
        }
    }

    Draw(){
        
        this.background.DrawButton();
        this.mainmenu.DrawButton();
    }
}