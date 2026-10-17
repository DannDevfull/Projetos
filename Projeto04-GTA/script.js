function alterar(mudar){
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
    }else{
        nomeImagem = "IMG/cj.png"
        nome = "Cj"
        document.querySelector(".nome").style.color="#7ed37e"
    }

    document.getElementById("person").src = nomeImagem
    document.querySelector(".nome").innerHTML = nome
   
   
}