var hr = 0
var min = 0
var seg = 0
var intervalo = 0



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
    document.getElementById('contador').innerText = hr + ':'+ min+ ':' +seg
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
    document.getElementById('contador').innerText = hr + ':'+ min+ ':' +seg
}
