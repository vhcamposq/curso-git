var hr = 0
var min = 0
var seg = 0
var intervalo = 0

function zero(digito){
    if (digito < 10){
        return ('0' + digito) 
    }else{
        return digito
    }
}

function iniciar(){
    intervalo = setInterval(inicio, 1000)
}
function pausar(){
    clearInterval(intervalo)
}
function parar(){
    clearInterval(intervalo)
    var hr = 0
    var min = 0
    var seg = 0
    document.getElementById('contador').innerText = zero(hr) + ':' + zero(min) + ':' + zero(seg)
}

function inicio(){
    seg++
    if (seg === 60) {
        seg = 0
        min++
        if (min === 60) {
            min = 0
            hr++
        }
    }
    document.getElementById('contador').innerText = zero(hr) + ':' + zero(min) + ':' + zero(seg)
}
