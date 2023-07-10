import IConsole from "../platforms/IConsole";
import IGame from "./IGame";

export default class Play implements IGame{

  
constructor(privateplatform: IConsole){}

playing(): void {
console.log("Iniciando a sessão!")
    }
result(): void {
       console.log("Logado");
    }
}
