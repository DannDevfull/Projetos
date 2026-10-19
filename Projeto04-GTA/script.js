function alterar(mudar, photo){
    let nomeImagem;
    let nome;
   
    if(mudar == 0){
        nomeImagem = "IMG/lucia.png"
        nome = "Lucia"
           document.querySelector(".nome").style.color="#ff3cac"
    } else if( mudar == 1){
        nomeImagem = "IMG/jason.png"
        nome = "Jason"
         document.querySelector(".nome").style.color="#61B5CB "
    }else if ( mudar == 2){
        nomeImagem = "IMG/cj.png"
        nome = "Cj"
        document.querySelector(".nome").style.color="#7ed37e"
    } else{
        nomeImagem = photo
        nome = 'Você'
        document.querySelector(".nome").style.color ="#e428"

    }

    document.getElementById("person").src = nomeImagem
    document.querySelector(".nome").innerHTML = nome
}








function LerFoto(foto){
// ALERTA - ESSA PARTE É CHATINHA, ENTÃO ME ACOMPANHA
// TEM COISAS QUE VOCE NAO TEM QUE ENTENDER AGORA, SÓ FAZ
// BOMBA, POMBA ? ANTES DE P e B é M
// onchange() = quando mudar algo, faça algo
// onclick() = quando clicar em algo, faça algo
// onload() = quando carregar algo, faça algo
// toda vez que eu tenho que ir no SERVIDOR - ASYNC / AWAIT 

let leitor = new FileReader() // FileReader = Leitor de arquivos
leitor.readAsDataURL(foto.files[0]) // readAsDataURL = fiz a leitura da foto, e transformei em URL (link)

leitor.onload = async function(){

  let desenho =  await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.", 
        {
            model: "replicate:openai/gpt-image-2.5-flare",
            provider: "openai",
            input_image: leitor.result,
            quality: "medium",
            providerOptions: { background: "transparent" }
        })
        console.log(desenho)
        alterar(3, desenho)
}
    // Faça algo com a imagem lida
}