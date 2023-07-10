
import Twitch from "./platforms/XBox";
import AdvancedLive from "./gameSession/AdvancedPlay";
import PlayStation from "./platforms/PlayStation";
import Play from "./gameSession/Play";
import IConsole from "./platforms/IConsole";

function startGame(game : IConsole){
    console.log("Aguarde...");
    const play = new Play(game);
    play.playing();
    play.result();
}

function startAdvancedPlay(game : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedLive(game);
    play.playing();
    play.result();
    play.challenge();
}

startGame(new Twitch());
startGame(new PlayStation());

startAdvancedPlay(new Twitch());
startAdvancedPlay(new PlayStation());