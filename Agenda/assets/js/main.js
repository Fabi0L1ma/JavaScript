const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function cirarLI() {
    const li = document.createElement('li');
    return li;
}

function criarTarefa(tarefa) {
    
    let li = cirarLI();

    li.innerHTML = tarefa;

    tarefas.appendChild(li);

    criarBotaoApagar(li);
}

function criarBotaoApagar(li){

    let btnApagar = document.createElement('button');
    
    btnApagar.innerHTML = 'Deletar';

    btnApagar.style.backgroundColor = 'red';
    btnApagar.style.padding = '5px';
    btnApagar.style.width = '60px';
    btnApagar.style.marginLeft = '5%';

    // Atribui A class do elemento 
    
    btnApagar.setAttribute('class', 'apagar');

    li.appendChild(btnApagar);
}

inputTarefa.addEventListener('keypress', function (e) {
    
    // keyCode é codigo da tecla pressionada 

    if (e.keyCode === 13){

        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);
        
        inputTarefa.value = '';
    }
});

btnTarefa.addEventListener('click', function () {

    if (!inputTarefa.value) return;

    criarTarefa(inputTarefa.value);

    inputTarefa.value = '';
});

// Verifica qual elemento esta sendo acionado 

document.addEventListener('click', function(e){
    let elemento = e.target;
    
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
    }
});
