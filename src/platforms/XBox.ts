import IConsole from "./IConsole";

export default class XBox implements IConsole{

    constructor(){
this.configureGame();
        console.log("XBox: Sessão iniciada");
    }

    configureGame(): void {
this.authToken();
        console.log("XBox: Configurando o sistema")
    }
authToken(): void {
console.log("XBox: Autorizando a Aplicação");
    }
}
