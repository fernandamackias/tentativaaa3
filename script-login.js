let btnAdd = document.querySelector('#addBotao');
//criar evento de click no botao que ira execultar a fuction anonima

btnAdd.addEventListener("clicK", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if(inputValor === ""){
        alert("Você não preencheu os campos!")
    }else{
        //alert("LOGIN REALIZADO COM SUCESSO")
        document.querySelector("#mensagem-ok").insertAdjacentHTML(
            "afterend",
            '<div class="card-teste">
            <span>login efetuado com sucesso </span>
            </div>

        )
    
    }
})