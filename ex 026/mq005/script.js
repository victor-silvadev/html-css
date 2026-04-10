function abrirMenu(){

if (opcoes.style.display == 'block') {
    opcoes.style.display = 'none'
    burguer.style.background = `rgb(69, 29, 115`
} else {
    opcoes.style.display = 'block'
    burguer.style.background = "none"

}

}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        opcoes.style.display = 'block'
} 
    else {
    opcoes.style.display = 'none'
}
}