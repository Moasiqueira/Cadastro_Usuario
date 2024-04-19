// CRIAR LISTA
// LISTAR
//ATUALIZAR
// DELETAR


//LOGICA DE CADASTRO

//ABRIR O MODAL
//INSERIR INFORMÇOES
// CLICAR NO BOTÃO SALVAR
//SALVAR OS DADOS LOCALSTORAGE
//FECHAR MODAL
// RECARREGAR A PAGINA


// FUNÇÃO DE EXIBIR USUARIOS
// PEGAR OS ITENS NO LOCALSTORAGE(GETITEM)
//COLOCAR OS DADOS DENTRO DE UM ARRAY
//UTILIZAR METODO FOREACH PARA PERCORRER O ARRAY
// CRIAR A  TABELA USANDO O DOM(ID DO TBODY)

// UPDATE
//FUNCTIONUPDATEUSERINFO(){}

// CLICAR NO BOTÃO
// ABRIR O MODAL
//SETAR OS CAMPOS COM OS VALORES DO USUARIO DO LOCALSTORAGE
// TROCAR O BOTÃO SALVAR PARA ATUALIZAR
// SALVAR AS INFORMAÇOES NO LOCALSTORAGE
// FECHAR O MODAL
//RECARREGAR A PAGINA



//ABRIR SUBPAGINA
const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);


//CADASTRAR DADOS 

function cadastrarUsuario(event) {
    event.preventDefault()

    let dado = cadastrar()
     
    cadastrarUsuarios(dado)

    window.location.reload()
    
}

const cadastrar = () => {


    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const  celular = document.getElementById('celular').value;
    const cidade = document.getElementById('cidade').value;

    const dadosCadastrados = {
        nome: nome,
        email: email,
        celular: celular,
        cidade: cidade
    }
    return dadosCadastrados

}

//INSERIR DADOS NO LOCALSTORAGE

function cadastrarUsuarios(usuario) {
  
    let dados = []

    if (localStorage.getItem("cadastro")) {

        dados = JSON.parse(localStorage.getItem("cadastro"));
    }

    // PUXANDO DADOS PRO ARRAY
    dados.push(usuario)

    localStorage.setItem("cadastro",JSON.stringify(dados))
}

const atualizar = () =>{

    let listaUsuario = []

    if(localStorage.getItem("registroUsuario")){

        listaUsuario = JSON.parse(localStorage.getItem("registroUsuario"))
    }

    BuildTable (listaUsuario)
}

    window.addEventListener('DOMContentLoaded', () => atualizar())




