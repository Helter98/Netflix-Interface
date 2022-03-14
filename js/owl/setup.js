$('.owl-carousel').owlCarousel({
    stagePadding: -80,
    loop:true, //efeito pra ta sempre girando
    margin:320, //alterar a margem entre um e outro
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})