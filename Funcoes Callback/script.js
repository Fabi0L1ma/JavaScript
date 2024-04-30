function exibirArtigo(id, sucesso, erro){

    if(true){
        sucesso(" Callback de sucesso!", "ok")
    }else{
        erro(" Callback de erro!")
    }
}

var sucesso = function(titulo, descricao){
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr/>")
    document.write("<p>" + descricao + "</p>")
}

var erro = function(erro){
    document.write("<p><b>ERRO</b>" + erro + "</p>")
}

exibirArtigo(1, sucesso, erro)