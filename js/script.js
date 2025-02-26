// mudar cor do botão
document.getElementById("botao").addEventListener("click", function () {
  if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = "blue";
  } else {
    this.style.backgroundColor = "red";
  }
});

// inserindo na lista

const addItemBtn = document.getElementById("addItemBtn");
const textInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

const addItemFunction = () => {
  const texto = textInput.value.trim(); // obtem o que o usuario digitou

  if (texto !== "") {
    const novoItem = document.createElement("li"); // Cria o item de lista
    novoItem.textContent = texto; // Define o texto do item

    // Cria o botão de remoção
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remover";
    removebtn.classList.add("remove-btn");

    // Evento para remover o item da lista
    removebtn.addEventListener("click", () => {
      itemList.removeChild(novoItem);
    });

    novoItem.appendChild(removebtn); // Adiciona o botão ao item
    itemList.appendChild(novoItem); // Adiciona o item à lista

    textInput.value = "";
    textInput.focus();
  }
};

addItemBtn.addEventListener("click", addItemFunction);

document.getElementById("api-btn").addEventListener("click", function () {
  fetch("http://demo9888670.mockable.io/teste")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Exibe a resposta completa da API no console
      if (data.teste) {
        document.getElementById("api-input").value = data.teste;
      } else {
        console.error('A chave "teste" não foi encontrada na resposta da API.');
      }
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
});

//5 -
document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  console.log('Enviando dados:', { nome, email }); // Log dos dados enviados

  fetch('http://demo9888670.mockable.io/testandoPOST', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          nome: nome,
          email: email
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Dados recebidos da API:', data); // Log da resposta da API
      const responseDiv = document.getElementById('post-response');
      if (data.status === 'success') {
          responseDiv.textContent = data.message;
          responseDiv.style.color = 'green';
          atualizarTabela(data);
      } else {
          responseDiv.textContent = 'Erro ao enviar dados.';
          responseDiv.style.color = 'red';
      }
  })
  .catch(error => {
      console.error('Erro ao enviar dados:', error);
      const responseDiv = document.getElementById('post-response');
      responseDiv.textContent = 'Erro ao enviar dados.';
      responseDiv.style.color = 'red';
  });
});

function atualizarTabela(data) {
  console.log('Atualizando tabela com:', data); // Log dos dados recebidos

  const tableBody = document.querySelector('#data-table tbody');
  const newRow = document.createElement('tr');
  
  const nomeCell = document.createElement('td');
  nomeCell.textContent = data.nome || data.Name || 'N/A'; // Tentando várias possibilidades

  const emailCell = document.createElement('td');
  emailCell.textContent = data.email || data.Email || 'N/A'; // Tentando várias possibilidades

  console.log('Nome:', nomeCell.textContent); // Log do nome
  console.log('Email:', emailCell.textContent); // Log do email

  newRow.appendChild(nomeCell);
  newRow.appendChild(emailCell);
  tableBody.appendChild(newRow);
}
