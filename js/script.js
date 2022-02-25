let jogo = []; // vai rodar os comandos
let tabuleiro = []; // onde os jogo vai se passar
let quemJoga = 0; // 0 = jogador, 1 = cpu
let verifica; // verificar se teve vencedor ou não
let jogando = true; // Indica se o jogo esta rodando 
let nivel = 1; // nivel de dificuldade
let jogadaCpu = 1; // indicar qual jogada da cpu
let quemComeca = 1; // se vai ser o jogador 0 ou 1
let player1 = '<img src="./img/X.png" height="90px">';
let cpu = '<img src="./img/circulo.png" height="90px">';
const jogador1 = '<img src="./img/circulo.png" height="40px">'
const jogador0 = '<img src="./img/X.png" height="40px">'

function cpuJoga() {
    if(jogando) {
        let linha; let coluna;
        if(nivel == 1){
            do {
                linha = Math.round(Math.random()*2);
                coluna = Math.round(Math.random()*2);
            }while(jogo[linha][coluna] != "");
            jogo[linha][coluna] = "O";
        }else if(nivel == 2){
            // nivel 2
        }
        verifica = verificaVitoria();
        if(verifica != ""){
            alert(verifica + " venceu");
            jogando = false;
        }
        atulizaTabuleiro();
        quemJoga = 0;

    }
}

function verificaVitoria() {
    let linha; let coluna;
    // Linhas
    for(linha = 0; linha < 3; linha++ ){
        if( (jogo[linha][0] == jogo[linha][1])&&(jogo[linha][1] == jogo [linha][2])) {
            return jogo[linha][0];
        }
    }

    // Coluna
    for(coluna = 0; coluna < 3; coluna++ ){
        if( (jogo[0][coluna] == jogo[1][coluna])&&(jogo[1][coluna] == jogo[2][coluna])) {
            return jogo[0][coluna];
        }
    }
    // Diagonais
        if( (jogo[0][0] == jogo[1][1])&&(jogo[1][1] == jogo[2][2])) {
            return jogo[0][0];
        }
        if( (jogo[0][2] == jogo[1][1])&&(jogo[1][1] == jogo[2][0])) {
            return jogo[0][2];
        }
        return "";
}

 function jogar(p) {
     if((jogando)&&(quemJoga == 0)) {
        switch(p) {
            case 1:
                if(jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 2:
                if(jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
            break;
            case 3:
                if(jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
            break;
            case 4:
                if(jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 5:
                if(jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
            break;
            case 6:
                if(jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
            break;
            case 7:
                if(jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
            break;
            case 8:
                if(jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
            break;
            default: // case 9
                if(jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
            break;
        }
        if (quemJoga == 1){
            atulizaTabuleiro();
            verifica = verificaVitoria();
            if(verifica != ""){
                alert(verifica + " venceu");
                jogando = false;
            }
            cpuJoga();
        }
      
     }

 }

 function atulizaTabuleiro() {
     for(let linha = 0; linha<3 ;linha++) {
         for(let coluna = 0; coluna<3; coluna++) {
            if(jogo[linha][coluna] == 'X') {
                tabuleiro[linha][coluna].innerHTML= player1;
                tabuleiro[linha][coluna].style.cursor="default";
            }else if(jogo[linha][coluna] == 'O') {
                tabuleiro[linha][coluna].innerHTML = cpu;
                tabuleiro[linha][coluna].style.cursor="default";
            }else {
                tabuleiro[linha][coluna].innerHTML = "";
                tabuleiro[linha][coluna].style.cursor="pointer";
            }
         }
     }
 }

 function iniciar() {
     jogando = true;
     jogadaCpu = 1;
     jogo = [
        ["","",""],
        ["","",""],
        ["","",""]
     ];
     tabuleiro = [
         [document.getElementById('a1'), document.getElementById('a2'), document.getElementById('a3')],
         [document.getElementById('b1'), document.getElementById('b2'), document.getElementById('b3')],
         [document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3')]
     ];
     atulizaTabuleiro();
     if (quemComeca == 1) {
         quemComeca = 0;
         quemJoga = quemComeca;
        document.getElementById("quemComeca").innerHTML = `<b>Quem começa: Jogador</b> ${jogador0}`
     }else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("quemComeca").innerHTML = `<b>Quem começa: Jogador</b> ${jogador1}`
        cpuJoga();
     }
 }

 window.addEventListener("load",iniciar);