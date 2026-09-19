import { useState } from "react";
import './App.css'

function App(){

    const[tarefas, setTarefas] = useState([])
    const[texto, setTexto] = useState('')

    function adicionarTarefa(){
        if(texto.trim() === ''){
            return
        }
    

    const novaTarefas = {
        id:Date.now(), text: texto
    }

    setTarefas([...tarefas, novaTarefas])
    setTexto('') 

}

function removerTarefa(id){
    const novaTarefas = tarefas.filter(function(tarefas){
        return tarefas.id !== id
    })
    setTarefas(novaTarefas)
}

return(
    <main>
        <h1>Lista da Tarefas</h1>
        <input type="text" placeholder="Digite a tarefa" value={texto}
                onChange={function(event){
                    setTexto(event.target.value)
                }} />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
            {tarefas.map(function(tarefa){
                return(
                    <li key={tarefa.id}>
                        {tarefa.text}
                        <button onClick={function(){removerTarefa(tarefa.id)

                        }}>
                            remover
                        </button>
                    </li>
                )
            })}
        </ul>

    </main>
    )

}
export default App