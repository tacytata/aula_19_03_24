//Comand Line Interface (cli)

import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";



//1) criar uma variável para recepcionar o caminho via terminal
const caminho=process.argv;
console.log(caminho);


pegaArquivo(caminho[2]);
//função assíncrona
async function processaTexto(argumentos){
    const caminho=argumentos[2];
    if(fs.lstatSync(caminho).isFile()){
const resultado =await pegaArquivo(caminho);
console.log(chalk.yellow('lista de links'),resultado);
}else if(fs.istatSyns(caminho).isDiretory()){
        const arquivos=await fs.promises.readdir(caminho);
         arquivos.forEach(async(nomeDoArquivo)=>{
            const lista=await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
            console.log(`${caminho}/${nomeDoArquivo}`);
            console.log(lista);

        })
}

}
processaTexto(caminho);
