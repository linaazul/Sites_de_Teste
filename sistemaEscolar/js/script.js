//dom

// cost "nome no js" = document.querySelector('nome da div ou class . #')

const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const btnOpenModal = document.querySelector('#btnOpenModal')
const resultado = document.querySelector('#resultado')
const modal = document.querySelector('.modal-container')

btnOpenModal.addEventListener('click',calcularNota)

function calcularNota(){

event.preventDefault()

//Extraindo valores

let valor1 = nota1.value
let valor2 = nota2.value
let valor3 = nota3.value

let media = ((parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3))/3).toFixed(1)

if (media>=7) {
    
    resultado.innerHTML = `<h3> Você foi aprovado e sua média foi de: ${media}</h3>`
}
else if(media >4 && media<7){
    resultado.innerHTML = `<h3> Você fará a prova final, sua média foi de: ${media}</h3>`
}
else{
    resultado.innerHTML = `<h3> Você foi reprovado, sua média foi de: ${media}</h3>`
}
}

function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}



