// Hyunwoo Nam
// cs099
// summer 2020

let play;
let options;
let credits;
let CurrentScene;
let PlayScene;
let OptionsScreenScene;
let MainMenuScene;

function setup() {
  createCanvas(400, 400);
  
  const center_x = width / 2;
  play = new Button(center_x, height * 2/5, "Play");
  options = new Button(center_x, height * 3/5, "Options");
  credits = new Button(center_x, height * 4/5, "Credits");
  
  PlayScene = new Play();
  OptionsScreenScene = new OptionsScreen();
  MainMenuScene = new MainMenu();
  
  
}

function draw() {
  background(220);
  
  if(play.DidClickButton()){
            console.log("Play!");
            CurrentScene = PLAY_SCREEN;
    } 
  else if(options.DidClickButton())
    {
            console.log("Options!");
            CurrentScene = OPTIONS_SCREEN;
    } 
  else if(credits.DidClickButton()){
            console.log("Credits!");
            CurrentScene = CREDITS_SCREEN;
    }
  
  // play.DrawButton();
  // options.DrawButton();
  // credits.DrawButton();
  // PlayScene.Draw();
  MainMenuScene.Draw();
  
}

