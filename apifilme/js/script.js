//dom
const apiKey = '303d4164' 
const frmPesquisa = document.querySelector("form")

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
   
    const pesquisa = ev.target.pesquisa.value

    if(pesquisa == ""){
        alert ('Preencha o campo!')
        return;
    }

    fetch(`http://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => carregaLista(json))
}

const carregaLista = (json) => {
    const lista = document.querySelector("div.lista")
    lista.innerHTML = ""

    if(json.Response == 'False'){
        alert('Nenhum filme encontrado!')
        return; 
    }

    json.Search.forEach(element => {

        let item = document.createElement("div")
        item.classList.add("item")

        item.innerHTML = `<img src= "${element.Poster}" /> <h2>${element.Title}</h2>`

        lista.appendChild(item) 
    });
}