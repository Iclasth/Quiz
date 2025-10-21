// Resposta de Alternativas
function Verificar() 
{
    let dResposta = document.querySelector("#dResposta").value
     

    switch (dResposta){
        case "A".toLowerCase():
            document.querySelector("#resposta").textContent = "A sua resposta está correta!"

        case "B".toLowerCase():
            case "C".toLowerCase():
                case "D".toLowerCase():
                    document.querySelector("#resposta").textContent = "A sua resposta está incorreta!"

        default:
            document.querySelector("#resposta").textContent = "Digite uma resposta válida"

        
    }
}