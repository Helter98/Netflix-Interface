$('.owl-carousel').owlCarousel({
    stagePadding: -300,
    loop:true, //efeito pra ta sempre girando
    margin:320, //alterar a margem entre um e outro
    nav:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:5
        },
        900:{
            items:6
        },
        1000:{
            items:7
        }
    }
})