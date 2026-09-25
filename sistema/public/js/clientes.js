// ============================================================
// public/js/clientes.js
// ============================================================
// ESTE ARQUIVO É COM VOCÊ (ALUNO DESENVOLVE).
//
// A estrutura abaixo (elementos, eventos já conectados, nomes de
// função) já está pronta para vocês seguirem o mesmo padrão usado
// em outros projetos do curso (inicializar() no topo, funções
// carregarX() e renderizarX() separadas). O que falta é o conteúdo
// de cada função marcada com TODO.
//
// Requisitos envolvidos neste arquivo: RC-12, RC-13, RC-14, RC-15, RC-17
// ============================================================

const corpoTabela = document.getElementById('corpo-tabela-clientes');
const tabela = document.getElementById('tabela-clientes');
const mensagemClientes = document.getElementById('mensagem-clientes');

const inputBusca = document.getElementById('input-busca');
const btnBuscar = document.getElementById('btn-buscar');

const formCliente = document.getElementById('form-cliente');
const clienteIdInput = document.getElementById('cliente-id');
const clienteNomeInput = document.getElementById('cliente-nome');
const clienteCpfInput = document.getElementById('cliente-cpf');
const clienteTelefoneInput = document.getElementById('cliente-telefone');
const btnCancelarEdicao = document.getElementById('btn-cancelar-edicao');

inicializar();

async function inicializar() {
    await carregarClientes();
}

// ------------------------------------------------------------
// RC-12: listar clientes
// RC-14: também é usada para a busca (aceita um termo opcional)
// ------------------------------------------------------------
async function carregarClientes(termoBusca = '') {
    try {
        // TODO: monte a URL da requisição. Se termoBusca não for
        // vazio, inclua como query string, ex:
        //   /api/clientes?busca=' + encodeURIComponent(termoBusca)
        // Se for vazio, chame só /api/clientes

        // TODO: faça o fetch, trate resposta.status === 401
        // (redirecionar para /login.html), depois pegue o JSON

        // TODO: chame renderizarClientes(clientes) com o resultado

    } catch (erro) {
        mensagemClientes.textContent = 'Erro ao carregar clientes.';
        console.error(erro);
    }
}

// ------------------------------------------------------------
// Desenha a tabela de clientes na tela
// ------------------------------------------------------------
function renderizarClientes(clientes) {
    // TODO: se a lista estiver vazia, mantenha mensagemClientes
    // visível com um texto tipo "Nenhum cliente encontrado." e a
    // tabela escondida (classe d-none)

    // TODO: caso contrário, esconda mensagemClientes, mostre a
    // tabela (remova d-none) e monte uma linha <tr> para cada
    // cliente dentro de corpoTabela.innerHTML, com:
    //   - nome, cpf (já vindo pronto para exibição - ver rota),
    //     telefone
    //   - um botão "Editar" com data-id="${cliente.id}"
    //   - um botão "Excluir" com data-id="${cliente.id}"
    //
    // Depois de montar o innerHTML, é necessário adicionar os
    // addEventListener nos botões recém-criados (igual ao exemplo
    // de "Remover" visto em aula) - eles ainda não existem no HTML
    // até esse innerHTML ser inserido.
}

// ------------------------------------------------------------
// RC-14: busca
// ------------------------------------------------------------
btnBuscar.addEventListener('click', () => {
    // TODO: pegue o valor de inputBusca.value e chame
    // carregarClientes(termo)
});

// ------------------------------------------------------------
// RC-15 / RC-17: salvar (inserir novo ou editar existente)
// ------------------------------------------------------------
formCliente.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const cliente = {
        nome: clienteNomeInput.value.trim(),
        cpf: clienteCpfInput.value.trim(),
        telefone: clienteTelefoneInput.value.trim()
    };

    const id = clienteIdInput.value;

    try {
        // TODO: se "id" estiver preenchido, é uma edição (RC-17) ->
        //   fetch PUT /api/clientes/{id}
        // Se estiver vazio, é um novo cadastro (RC-15) ->
        //   fetch POST /api/clientes
        // Em ambos os casos: enviar "cliente" como JSON no body,
        // conferir resposta.ok, e se der certo:
        //   - limpar o formulário (formCliente.reset())
        //   - esconder o botão de cancelar edição
        //   - chamar carregarClientes() de novo para atualizar a lista

    } catch (erro) {
        alert('Erro ao salvar cliente.');
        console.error(erro);
    }
});

btnCancelarEdicao.addEventListener('click', () => {
    formCliente.reset();
    clienteIdInput.value = '';
    btnCancelarEdicao.classList.add('d-none');
});

// ------------------------------------------------------------
// Chamada pelos botões "Editar" criados em renderizarClientes()
// ------------------------------------------------------------
function preencherFormularioParaEdicao(cliente) {
    // TODO: preencher clienteIdInput, clienteNomeInput, clienteCpfInput,
    // clienteTelefoneInput com os dados de "cliente", e mostrar o
    // botão btnCancelarEdicao (remover a classe d-none)
}

// ------------------------------------------------------------
// RC-13: excluir cliente
// Chamada pelos botões "Excluir" criados em renderizarClientes()
// ------------------------------------------------------------
async function excluirCliente(id) {
    if (!confirm('Deseja realmente excluir este cliente?')) return;

    try {
        // TODO: fetch DELETE /api/clientes/{id}, conferir resposta.ok,
        // e se der certo, chamar carregarClientes() de novo

    } catch (erro) {
        alert('Erro ao excluir cliente.');
        console.error(erro);
    }
}
