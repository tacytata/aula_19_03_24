//Comand Line Interface (cli)

import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";
import listaValidada from "./http-validacao.js";




//1) criar uma variável para recepcionar o caminho via terminal
const caminho=process.argv;
//console.log(caminho);


//pegaArquivo(caminho[2]);

    function imprimeLista(valida, resultado, identificador=""){
        if(valida){
            console.log(chalk.yellow('Lista de links'),chalk.black.bgGreen(identificador),listaValidada(resultado));
        }else{
            console.log(chalk.yellow('Lista de links'),chalk.black.bgGreen(identificador),resultado);
        }





        
       }

//função assíncrona
async function processaTexto(argumentos){
    const caminho=argumentos[2];

    const valida = argumentos[3];
    

    try{
        fs.statSync(caminho)

    }
    catch(erro){
        if(erro.code==="ENOENT"){
            console.log("Arquivo ou diretório não encontrado!");
            return;
        }

    }
    if(fs.lstatSync(caminho).isFile()){
        const resultado =await pegaArquivo(caminho);
        imprimeLista(resultado);
//console.log(chalk.yellow('lista de links'),resultado);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos=await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDoArquivo)=>{
        const lista=await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
            //console.log(`${caminho}/${nomeDoArquivo}`);
            //console.log(lista);
        imprimeLista(lista, nomeDoArquivo);

        })
}

}
processaTexto(caminho);
