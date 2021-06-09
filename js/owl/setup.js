$('.owl-carousel').owlCarousel({
    loop:false, // faz um loop entre os filmes
    margin:10, // margem entre os filmes
    nav:false, // botão de navegação
    responsive:{ // quando a tela se adapta de acordo com o tamanho
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})