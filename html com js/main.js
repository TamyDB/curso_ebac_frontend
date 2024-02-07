document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form-check')
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const campoA = document.getElementById('campo-A')
        const campoB = document.getElementById('campo-B')
        const resultMessage = document.querySelector('.resultMessage')

        if(campoA.value < campoB.value){
            resultMessage.innerText = "Números válidos"
        }else{
            resultMessage.innerText = "Números inválidos"
        }
    })
})