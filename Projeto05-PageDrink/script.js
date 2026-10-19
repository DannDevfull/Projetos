let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");


// count = 3
// 0, 1, 2
let count = list.length;
let active = 0;

// função arrow
// Quando eu clicar no botão next, ele vai executar alguma função
next.onclick = () => {
    // Basicamente, o que quero fazer é, primeiro, remover o active da classe em que está.
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Agora vamos adicionar o active para outra classe
    // Lembre-se de nossa let list que se parece com um array
    // temos três item que começam a contagem a partir do 0
    // Vamos realizar uma espécie de contador
    // active = active + 1
    // Ou
    // Realizaremos um ternário ppara que o active não ultrapasse todo o length de nossa list --> [0] [1] [2] 
    // Ao mesmo tempo que estamos tratando com o comprimento de nossa list, estamos trabalhando com identificadores
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
};

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
};
