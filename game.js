// ____________________________________________________________________
//                              VARIÁVEIS E FUNÇÕES   

// ____________________________________________________________________



//lista com os invasores        
let invasores= document.getElementsByClassName('invasor')


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
    posX = Math.floor(Math.random()*1000)    //Para sorter de 100 para 1000 | posX = Math.floor(Math.random()*900+100) |
    posY = Math.floor(Math.random()*400) 
    el.style.position = 'absolute'
    el.style.left = -posX+'px'
    el.style.top  = posY+'px'
}


//Desloca os elementos na tela
//recebe parâmetros elemento, velocidade , incremento
const moveElemento = (el, veloc, inc) => {

                            //excuta a cada x milissegundos 
                            const anima = setInterval(() => {
                                veloc = veloc + inc
                                el.style.left = (veloc + inc) + 'px'
                                //Verifica se o elemento saiu do quadro
                                //classe emtela 
                                //remove a classe e volta para uma posicao initial
                                if(veloc > larguraQuadro && el.classList.contain('emtela')){
                                el.classList.remove('emtela') 
                                    posicElement(el)
                                }
                            }, 33);
}





/*  :?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?*/



//                      EVENTOS E EXECUÇÕES AUTOMÁTICAS 


for(inv of invasores){
    posicElement(inv)
    posicElement(bom1)
    moveElemento(inv,Math.random()*25,Math.random()*25)
    moveElemento(document.getElementById('bom1'),5,3)
}



// moveElemento(document.getElementById('inv1'),5,3)
// moveElemento(document.getElementById('inv2'),5,10)
// moveElemento(document.getElementById('inv3'),5,20)
// moveElemento(document.getElementById('bom1'),5,3)
// posicElement(document.getElementById('inv1'))
// posicElement(document.getElementById('inv2'))
// posicElement(document.getElementById('inv3'))