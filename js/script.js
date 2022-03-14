document.querySelector('#itens').addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrolBy(300, 0)
    }else {
        event.target.scrolBy(-3 00, 0)
    }
})