let especiais = "?/.;,:!\"'()[]{}<>|~+=-"
let numeros = "0123456789";
let letrasmaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let senha= "abcdfghijklmnopqrstuvwxyz"

let addEsp = document.getElementById("especial");
let addMai = document.getElementById("maiusculo");
let addNum = document.getElementById("numeros");


function gerarSenha(){
let tamanho = document.getElementById('tamSenha').value;
let quantidade = document.getElementById("quantidades").value;

if(tamanho <= 3){
alert("A senha deve ter no mínimo 4 caracteres como tamanho")
return;
 }
 else if(tamanho > 20) {
    alert("No máximo a senha pode ter 20 caracteres.")
   return;
 }

console.log(quantidade)
 if(quantidade < 1 || quantidade > 10){
    alert("A quantidade de senhas a serem geradas é inválida!");
    return;
 }


if( addEsp.checked){
    senha += especiais
}
if(addMai.checked) {
    senha+= letrasmaiusculas
}
if (addNum.checked) {
   senha += numeros  
}

let senhaGerada = "";



for(let i = 1 ; i <= quantidade ; i++){

  for( let i = 0 ; i < tamanho ; i++ ){
     senhaGerada += senha.charAt(Math.floor(Math.random() * senha.length))
   }
   senhaGerada+="\n"
}
 document.getElementById('senha').innerHTML = senhaGerada;

}

function limparCampos(){
    document.getElementById('senha').innerHTML =  "";
}