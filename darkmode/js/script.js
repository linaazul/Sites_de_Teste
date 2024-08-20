//dom 
const nome = document.querySelector('#nome');
const salarioBruto = document.querySelector('#salarioBruto')
const butao = document.querySelector('#butao')
const salarioLiquido = document.querySelector('#salarioLiquido')
const body = document.querySelector('.body')
const modal = document.querySelector('.modal-container')

let sistema = new Date()
let hora = sistema.getHours();
let minutos = sistema.getMinutes();

const tempo = setInterval(function time(){
    if(hora>=5 && hora <=17 && minutos>=0 && minutos <=59){
        body.classList.add('dia')
    }else{
        body.classList.add('noite')
    }
},1000)

butao.addEventListener('click',calcular)

function calcular(){
    event.preventDefault()

    let nomeFuncionario = nome.value
    let salarioB = salarioBruto.value
    let salarioL;

    if(salarioB>3500){
        
        salarioL = (parseFloat(salarioB) - parseFloat(salarioB) * 18/100) - parseFloat(salarioB) * 5/100
    }else{
        salarioL = ( parseFloat(salarioB) - parseFloat(salarioB) * 8/100) - parseFloat(salarioB) * 5/100;
    }

    salarioLiquido.innerHTML = `<h3> Olá ${nomeFuncionario} seu salário líquido é de: R$ ${salarioL} </h3>`
}

//função modal
function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}


