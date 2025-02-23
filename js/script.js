// mudar cor do botão
document.getElementById("botao").addEventListener("click", function() {
    if (this.style.backgroundColor === "red") {
        this.style.backgroundColor = "blue"
    } else {
        this.style.backgroundColor = "red"
    }
});

// inserindo na lista

const addItemBtn = document.getElementById('addItemBtn');
const textInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

const addItemFunction = () => {
    const texto = textInput.value.trim(); // obtem o que o usuario digitou

    if (texto !== '') {
        const novoItem = document.createElement('li'); // Cria o item de lista
        novoItem.textContent = texto; // Define o texto do item

        // Cria o botão de remoção
        const removebtn = document.createElement('button');
        removebtn.textContent = "Remover";
        removebtn.classList.add('remove-btn');
        
        // Evento para remover o item da lista
        removebtn.addEventListener('click', () => {
            itemList.removeChild(novoItem);
        });

        novoItem.appendChild(removebtn); // Adiciona o botão ao item
        itemList.appendChild(novoItem); // Adiciona o item à lista

        // Limpa o campo de texto e foca novamente
        textInput.value = '';
        textInput.focus();
    }
};

// Evento de clique no botão para adicionar o item
addItemBtn.addEventListener('click', addItemFunction);






 
