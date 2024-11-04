let count = 0;

function adicionar() {
    let tarefa = document.getElementById("tarefa").value;

    if(tarefa) {
        count++;
        let lista = document.getElementsByClassName("tarefas")[0];

        let li = document.createElement("li");
        let btn = document.createElement("button");

    } else {
        alert("Insira uma tarefa!")
    }
}