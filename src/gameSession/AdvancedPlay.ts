import IConsole from "../platforms/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor (game : IConsole){
        super(game);
    }

    challenge() : void {
        console.log("Desafio iniciado!!");
    }
}