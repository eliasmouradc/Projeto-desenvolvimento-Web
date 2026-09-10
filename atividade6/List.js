const input = document.getElementById('tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista');

botao.addEventListener('click', function(){
    const texto = input.value;

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = texto;

    lista.appendChild(novaTarefa);

    input.value = "";

});

    lista.addEventListener('click', function(event){
        event.target.remove();
    })