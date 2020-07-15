// Hyunwoo Nam
// Project Checkpoint: final
// cs099
// summer 2020

let play;
let options;
let credits;
let CurrentScene;
let PlayScene;
let OptionsScreenScene;
let MainMenuScene;
let CreditsScreenScene;

function setup() {
  createCanvas(800, 600);
  
  // const center_x = width / 2;
  // play = new Button(center_x, height * 2/5, "Play");
  // options = new Button(center_x, height * 3/5, "Options");
  // credits = new Button(center_x, height * 4/5, "Credits");
  
  PlayScene = new Play();
  OptionsScreenScene = new OptionsScreen();
  MainMenuScene = new MainMenu();
  CreditsScreenScene = new CreditsScreen();
}

function draw() {
  background(220);
  
  CurrentScenes();
  
  // if(MainMenuScene.play.DidClickButton()){
  //           console.log("Play!");
  //           CurrentScene = PlayScene.Draw();
  //   } 
  // else if(MainMenuScene.options.DidClickButton())
  //   {
  //           console.log("Options!");
  //           CurrentScene = OptionsScreenScene.Draw();
  //   } 
  // else if(MainMenuScene.credits.DidClickButton()){
  //           console.log("Credits!");
  //           CurrentScene = CreditsScreenScene.Draw();
  //   }
  
  // play.DrawButton();
  // options.DrawButton();
  // credits.DrawButton();
  // PlayScene.Draw();
  // MainMenuScene.Draw();
}

function CurrentScenes(){
  if(MainMenuScene.play.DidClickButton()){
            console.log("Play!");
            CurrentScene = PlayScene.Draw();
    } 
  else if(MainMenuScene.options.DidClickButton())
    {
            console.log("Options!");
            CurrentScene = OptionsScreenScene.Draw();
    } 
  else if(MainMenuScene.credits.DidClickButton()){
            console.log("Credits!");
            CurrentScene = CreditsScreenScene.Draw();
    }
  else
  {
    CurrentScene = MainMenuScene.Draw();
  }
}

