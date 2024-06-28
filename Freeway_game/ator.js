// código do ator
let xAtor = 80;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor (){
    image (imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor () {
    if (keyIsDown(ARROW_UP)) {
        yAtor -= 3;
    }
    if (keyIsDown(ARROW_DOWN)) {
        if (podeSeMover ()) {
        yAtor += 3;
        }
    }
}

function verificaColisao () {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle (xCarros [i], yCarros [i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
        if (colisao) {
           voltaAtorParaPosicaoInicial ();
           somDaColisao.play ();
           if (pontosMaiorQueZero()) {
            meusPontos--;
           } 
           
        }
    }
}

function voltaAtorParaPosicaoInicial () {
    yAtor = 366;
}

function incluiPontos () {
    textAlign (CENTER);
    textSize (25);
    fill (color (255, 240, 60));
    text (meusPontos, width / 5, 27);
}

function marcaPonto () {
    if (yAtor < 15) {
        meusPontos++;
        somDoPonto.play ();
        voltaAtorParaPosicaoInicial ();
    }
}

function pontosMaiorQueZero () {
    return meusPontos > 0;
}

function podeSeMover () {
    return yAtor < 366;
}