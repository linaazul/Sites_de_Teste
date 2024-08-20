//dom 
const dias = document.querySelector('#dias')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dataFinal = new Date( new Date().getFullYear()+1,0,1)

const tempo = setInterval(function  time(){
    let horaDoSistema = new Date()

    //conta
    const conta = dataFinal-horaDoSistema

    //math.floor basicamente arredonda valores
    const days = Math.floor(conta/(1000*60*60*24))
    const hours = Math.floor((conta%(1000*60*60*24))/(1000*60*60))
    const minutes = Math.floor((conta%(1000*60*60))/(1000*60))
    const seconds = Math.floor((conta%(1000*60))/1000)

    //print
    dias.innerHTML= days<10?"0"+days:days;
    horas.innerHTML = hours<10?"0"+hours:hours;
    minutos.innerHTML = minutes<10?"0"+minutes:minutes;
    segundos.innerHTML = seconds<10?"0"+seconds:seconds;

    if(conta<=0){
        clearInterval(tempo)
        dias.innerHTML = "00"
        horas.innerHTML = "00"
        minutos.innerHTML = "00"
        segundos.innerHTML = "00"
    }
},1000)