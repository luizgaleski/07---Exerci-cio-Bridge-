import IConsole from "./IConsole";

export default class PlayStation implements IConsole{

constructor(){
this.configureGame();
        console.log("PlayStation: Sessão Iniciada");
}

configureGame(): void {
this.authToken();
        console.log("PlayStation: Configurando o sistema")
}
authToken(): void {
        console.log("PlayStation: Autorizando a Aplicação");
    }
}
