let amigos = [];

function adicionar(){

    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    if (amigo.value == ''){
        alert('ERRO, nenhum amigo adicionado');
        return;
    }
        if (amigos.includes(amigo.value)){
            amigo.value = amigo.value + 1;
            amigos.push(amigo.value);
            lista.textContent = lista.textContent +', ' + amigo.value;
        }
        else{
            amigos.push(amigo.value);
            if (lista.textContent == ''){
                lista.textContent = amigo.value;
            }
            else{
                lista.textContent = lista.textContent +', ' + amigo.value;
            }
            amigo.value = '';
        }
    
}

function sortear(){
    if (amigos.length < 4){
        alert('numero insuficiente de participantes')
    }
    else{
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';

}


function embaralhar(lista){
    for (let indice = amigos.length;indice;indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio],lista[indice - 1]];
    }

}

console.log('atulizando')
console.log('é isso')