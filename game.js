// ____________________________________________________________________
//                              VARIÁVEIS E FUNÇÕES   

// ____________________________________________________________________



//lista com os invasores        
let invasores= document.getElementsByClassName('invasor')
console.log(invasores)


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
// declaração global para as variáveis posX e posY (posicionamentos)
let posX 
let posY 

/*  :?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?:?*/

//Função para posicionar um elemento 
//recebe parâmetro el que informa o elemento 

const posicElement = (el) => {
    posX = Math.floor(Math.random()*100)
    alert(posX)
}















//                      EVENTOS E EXECUÇÕES AUTOMÁTICAS 

posicElement('text')