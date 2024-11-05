let count = 0;
let spanRemovido = null;

function adicionar() {
    // Recuperando o valor do elemenbto tarefa
    let tarefa = document.getElementById("tarefa").value;

    //Verificar se existe uma tarefa digitada
    if(tarefa) {

        // COntador do id tarefa
        count++;

        //recuperando lista de ul lista de tarefas
        let lista = document.getElementsByClassName("tarefas")[0];

        // criando os elementos li e button
        let li = document.createElement("li");
        let btn = document.createElement("button");

        //Atribuindo valores para o elemento LI
        li.id = count;
        li.className = "tarefa-item";
        li.textContent = tarefa;

        //atribuindo valores para o elemento button 
        btn.className ="btn";
        btn.textContent = "remover";
        btn.onclick = () => {
            lista.removeChild(li);
            atualizarMensagem(lista);
        }

        //adicionando o buttojn criado no li 
        li.appendChild(btn);

        //Adicionando o li criado na lista
        lista.appendChild(li);

        atualizarMensagem(lista);

    } else {
        alert("Insira uma tarefa!")
    }

    document.getElementById("tarefa").value = "";
}


function atualizarMensagem(lista){
    if(lista.children.length === 0){
        if (spanRemovido) {
            document.querySelector(".tarefas").insertBefore(spanRemovido, document.querySelector(".tarefas").firstChild);
            spanRemovido = null;
        }
    } else {
        let mensagemNaoExiste = document.getElementById("nao-existe");
        if(mensagemNaoExiste){
            spanRemovido = mensagemNaoExiste;
            mensagemNaoExiste.remove();
        }
    } 
}