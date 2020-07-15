 class CreditsScreen{
    constructor(){
        this.mainmenu = new Button(width/2, height - 50, "Main Menu");
    }

    Update(){
        if(this.mainmenu.DidClickButton()){
            console.log("Main Menu!");
            CurrentScene = MAIN_MENU;
        }
    }

    Draw(){

        text("Made by",width/2, height/2)
        text("Hyunwoo Nam",width/2, height/2+15)

        this.mainmenu.DrawButton();
    }
}