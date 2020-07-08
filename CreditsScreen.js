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
        DrawTitle("Credits");

        text("Made by",width/2, height/2)
        text("Rudy Castan",width/2, height/2+15)
        text("Daehyeon Kim",width/2, height/2+30)
        text("Hyunwoo Nam",width/2, height/2+45)
        text("Taehoon Lim",width/2, height/2+60)
        text("Jaehyeon Nam",width/2, height/2+75)
        text("Namjun Kim",width/2, height/2+90)

        this.mainmenu.DrawButton();
    }
}