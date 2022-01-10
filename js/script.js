/*INTERAÇÃO BTN MOBILE*/

// INTERAGINDO COM O BTN MOBILE
document.querySelector('.barras_menu')
.addEventListener('click', function(){

    //PEGANDO A NAV COM OS LINKS
    var ativar = document.querySelector('#mobile');
    // ATIVANDO E DESATIVANDO
    ativar.classList.toggle('nav_mobile');


});

/* FIM INTERAÇÃO BTN MOBILE*/

/* ANIMAÇÃO fade in */

setTimeout(function(){
    //TITULO
    var fadeIn = document.querySelector('.header_conteudo h1');
    fadeIn.style.opacity="1";

    //SUBTITULO
    var fadeIn2 = document.querySelector('.header_conteudo h4');
    fadeIn2.style.opacity="1";

    //IMG LOGO
    var fadeIn3 = document.querySelector('.header_img img');
    fadeIn3.style.opacity="1";

    //HEADER DESCRIÇÃO
    var fadeIn4 = document.querySelector('.header_conteudo p');
    fadeIn4.style.opacity="1";


},1500);







