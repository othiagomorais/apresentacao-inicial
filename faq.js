/* com esse estilo ppode comentar com quebra de linha -enter- */
// deste modo o comentário só pode ficar em uma linha
alert('Olá, seja bem vindo e bem vinda! \n Esta é uma apresentação de curriculo do professor Thiago Morais. \n Neste projeto foi utilizado recursos de Front end, quais sejam:\n - HTMl5;\n - CSS e;\n - Javascript')

//BUSCAR OS ITENS DA TELA
const ItemsPerguntaseResposta = document.querySelectorAll('.item');
console.log(ItemsPerguntaseResposta)

//ENTENDER QUE O ITEM FOI CLICADO
ItemsPerguntaseResposta.forEach(function (item) {
    item.addEventListener('click', function () {
        //VERIFICAR SE A PERGUNTA CLICADA ESTÁ ATIVA
        const estaAtiva = item.classList.contains('ativo')
         // EU PRECISO FECHAR TODAS
         ItemsPerguntaseResposta.forEach(function(item) {
            item.classList.remove('ativo')
        })

        // SE A PERGUNTA NAO ESTA ATIVA
        if(!estaAtiva) {

            // ABRIR RESPOSTA ATUAL
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }
    })
})
