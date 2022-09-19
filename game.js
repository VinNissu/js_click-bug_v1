// ____________________________________________________________________
//                              VARIÁVEIS E FUNÇÕES   

// ____________________________________________________________________



//lista com os invasores        
let invasores = document.getElementsByClassName('invasor')


// ________________________________________________ 
// lista com os bonzinhos 
let bonzinhos = document.getElementsByClassName('bonzinho')



// ________________________________________________
//Pontos
let score = 0



// ________________________________________________
//TEMPO 
let tempoRestante = 30


// ________________________________________________
// 


// 
//Para medir a largura de um elemento div
let larguraQuadro = document.getElementById('quadro').offsetWidth





// ________________________________________________


/*  :?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?*/

//Função para posicionar um elemento 
//recebe parâmetro el que informa o elemento 

const posicElement = (el) => {
    posX = Math.floor(Math.random() * 1000)    //Para sorter de 100 para 1000 | posX = Math.floor(Math.random()*900+100) |
    posY = Math.floor(Math.random() * 400)
    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top = posY + 'px'
}


//Desloca os elementos na tela
//recebe parâmetros elemento, velocidade , incremento
const moveElemento = (el, veloc, inc) => {

    //excuta a cada x milissegundos 
    const anima = setInterval(() => {
        veloc = veloc + inc
        el.style.left = (veloc + inc) + 'px'
        //Verifica se o elemento saiu do quadro
        //Ou se foi clicado (classe "morto")
        //retorna para uma posição
        //à esquerda quadro (re-entra)  
        if (veloc > larguraQuadro || el.classList.contains('morto')) {
            //sorteia um valor entre -50 e -500
            veloc = -Math.random() * 450 + 50
            inc = Math.random() * 5 + 7
            posicElement(el)
            el.classList.remove('morto')
        }
        //adiciona atributo velocidade para 
        //consulta no codigo javascript
        el.setAttribute('velocidade', inc)
    }, 24);
}



//AO CLICAR NOS INSETOS 

const clickBug = (el) => {
    //adiciona a classe morto
    el.classList.add('morto')
    //adiciona 10 pontos ao score 
    score += 10


    //se o inseto clicado pelo usuario for "bonzinho" perde 60 pontos
    if (el.classList.contains('bonzinho')) {
        score -= 70
    }

    document.getElementById('score').innerText = score
    //Se a velocidade for maior que 20 faz 100 pontos
    // apenas nos insetos que tenham a classe "invasores"  ou seja, somente nos malvados kkkka
    if (el.getAttribute('velocidade') > 10 && el.classList.contains('invasor')) {
        score += 100
        //Esconde +100 pontos apôs 1/2 segundos 
        let pts100 = document.getElementById('pts100')
        pts100.style.left = el.style.left
        pts100.style.top = el.style.top
        /* const mostra100pts = setInterval(() => {
            pts100.style.left = '-300px'
            //interrompe o setInterval 
            clearInterval(mostra100pts
                )
            
        }, 500); */
        const mostra100pts = setTimeout(() => {
            pts100.style.left = '-300px'
        }, 500);
    }
}



/*  :?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?*/



//                      EVENTOS E EXECUÇÕES AUTOMÁTICAS 


for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv, Math.random() * 1, Math.random() * 5)
    //evt.target = elemento que executa o evento - inseto clicado
    inv.addEventListener('mousedown', (evt) => { clickBug(evt.target) })
}

for (bom of bonzinhos) {
    posicElement(bom)
    moveElemento(bom, Math.random() * 1, Math.random() * 5)
    bom.addEventListener('mousedown', (evt) => { clickBug(evt.target) })
}

//Contagem regressiva 

setTimeout(() => {
    //Avisa ao usuário o FIM DO TEMPO 
    alert('TEMPO ESGOTADO!!!')
    document.location.reload(true);

    //RECARREGA A PÁGINA - SEMELHANTE A F5
}, tempoRestante * 1000);



const mostraTempo = setInterval(() => {
    //mostra tempo restante 
    document.getElementById('infoTR').innerText = tempoRestante --
    document.getElementById('temporest').innerText 
}, 1000);


// moveElemento(document.getElementById('inv1'),5,3)
// moveElemento(document.getElementById('inv2'),5,10)
// moveElemento(document.getElementById('inv3'),5,20)
// moveElemento(document.getElementById('bom1'),5,3)
// posicElement(document.getElementById('inv1'))
// posicElement(document.getElementById('inv2'))
// posicElement(document.getElementById('inv3'))