function executar() {
    console.log("Executando ...")


    const input_01_value = Number(document.getElementById("numero_01").value);
    const input_02_value = Number(document.getElementById("numero_02").value);
    const input_03_value = Number(document.getElementById("numero_03").value);
    const input_04_value = Number(document.getElementById("numero_04").value);
    const input_05_value = Number(document.getElementById("numero_05").value);
    const busca = Number(document.getElementById("numero_06").value);
    const array = [input_01_value, input_02_value, input_03_value, input_04_value, input_05_value, busca]

    const digitado = array
    console.log(digitado)
    const inputDigitado = document.getElementById("digitado")
    inputDigitado.innerHTML = digitado    
    const busca = Number(document.getElementById("busca").value);
    function pesquisar(){
        console.log("Pesquisando ...")
    console.log(array.includes(busca))
   
    if(true){
        var x;
        x = "O número pesquisado está presente na lista"
    }else{
        
        x = "O número pesquisado não está na lista"
    }
        
    }
}



