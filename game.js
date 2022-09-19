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
        if(veloc > larguraQuadro || el.classList.contains('morto')){
            //sorteia um valor entre -50 e -500
            veloc= -Math.random()*450+50
            inc = Math.random()*5+7
            posicElement(el)
            el.classList.remove('morto')
        }
        //adiciona atributo velocidade para 
        //consulta no codigo javascript
        el.setAttribute('velocidade',inc)   
    }, 24);
}



//AO CLICAR NOS INSETOS 

const clickBug = (el) => {
    //adiciona a classe morto
    el.classList.add('morto')
    //adiciona 10 pontos ao score 
    score += 10
    document.getElementById('score').innerText = score
    //Se a velocidade for maior que 20 faz 100 pontos
    if(el.getAttribute('velocidade')> 20){
        score += 100
    }
}



/*  :?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?*/



//                      EVENTOS E EXECUÇÕES AUTOMÁTICAS 


for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv, Math.random() * 1, Math.random() * 5)
    //evt.target = elemento que executa o evento - inseto clicado
    inv.addEventListener ('mousedown',(evt)=>{clickBug(evt.target)})
}





// moveElemento(document.getElementById('inv1'),5,3)
// moveElemento(document.getElementById('inv2'),5,10)
// moveElemento(document.getElementById('inv3'),5,20)
// moveElemento(document.getElementById('bom1'),5,3)
// posicElement(document.getElementById('inv1'))
// posicElement(document.getElementById('inv2'))
// posicElement(document.getElementById('inv3'))