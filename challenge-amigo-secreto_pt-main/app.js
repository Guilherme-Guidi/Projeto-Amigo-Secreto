//Para armazenar
let amigos = [];

//Atualiza a lista
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');

    //Nome
    const span = document.createElement('span');
    span.textContent = amigo;

    //remover nome
    const Remover = document.createElement('button');
    Remover.textContent = '✖';
    Remover.title = 'Remover este nome';
    Remover.classList.add('remover-btn');

    Remover.onclick = () => {
      amigos.splice(index, 1);
      atualizarLista();
    };

    li.appendChild(span);
    li.appendChild(Remover);
    lista.appendChild(li);
  });
}

//mensagens (aviso/erro)
function mostrarMensagem(texto) {
  const resultado = document.getElementById('resultado');
  resultado.textContent = texto;
  resultado.style.color = "#FF0000";
  setTimeout(() => resultado.textContent = '', 3000);
}

//Adiciona à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (!nome) {
    mostrarMensagem('Digite um nome antes de adicionar!');
    return;
  }
  if (amigos.includes(nome)) {
    mostrarMensagem('Esse nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = '';
}

//Sorteio aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensagem('Não há mais nomes para sortear!');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos.splice(indice, 1)[0];

  document.getElementById('resultado').textContent = 'Sorteado: ' + sorteado;
  document.getElementById('resultado').style.color = "#05DF05";

  atualizarLista();
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    adicionarAmigo();
  }
});
