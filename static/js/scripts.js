/*!
<<<<<<< HEAD
 * Start Bootstrap - Business Casual v7.0.5 (https://startbootstrap.com/theme/business-casual)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
 */
=======
* Start Bootstrap - Business Casual v7.0.5 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
>>>>>>> 12e076efd21c6c10890e0566ea21362fccda2684
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

<<<<<<< HEAD
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$('#myCarousel').on('slide.bs.carousel', function() {
    // do something…
})

<
script >

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('uf').value = ("");

    }

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}


function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

//api para aumentar a letra

window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}

//Linux
// Início do código de Aumentar/ Diminuir a letra

// Para usar coloque o comando:
// "javascript:mudaTamanho('tag_ou_id_alvo', -1);" para diminuir
// e o comando "javascript:mudaTamanho('tag_ou_id_alvo', +1);" para aumentar

var tagAlvo = new Array('p'); //pega todas as tags p//

// Especificando os possíveis tamanhos de fontes, poderia ser: x-small, small...
var tamanhos = new Array('9px', '10px', '11px', '12px', '13px', '14px', '15px');
var tamanhoInicial = 2;

function mudaTamanho(idAlvo, acao) {
    if (!document.getElementById) return
    var selecionados = null,
        tamanho = tamanhoInicial,
        i, j, tagsAlvo;
    tamanho += acao;
    if (tamanho < 0) tamanho = 0;
    if (tamanho > 6) tamanho = 6;
    tamanhoInicial = tamanho;
    if (!(selecionados = document.getElementById(idAlvo))) selecionados = document.getElementsByTagName(idAlvo)[0];

    selecionados.style.fontSize = tamanhos[tamanho];

    for (i = 0; i < tagAlvo.length; i++) {
        tagsAlvo = selecionados.getElementsByTagName(tagAlvo[i]);
        for (j = 0; j < tagsAlvo.length; j++) tagsAlvo[j].style.fontSize = tamanhos[tamanho];
    }
}
// Fim do código de Aumentar/ Diminuir a letra
=======
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

$('#myCarousel').on('slide.bs.carousel', function () {
    // do something…
  })
>>>>>>> 12e076efd21c6c10890e0566ea21362fccda2684
