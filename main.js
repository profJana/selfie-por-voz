//armazenando a API na variável
var SpeechRecognition = window.webkitSpeechRecognition;
  
//criando um novo reconhecimento de fala utilizando a API e armazenando na variável
var recognition = new SpeechRecognition();

//armazenando na variável o elemento HTML cujo ID é textbox
var Textbox = document.getElementById("textbox"); 

function iniciar()
{
    //sempre que o start for pressionado, a area de texto será limpa
    Textbox.innerHTML = ""; 

    //a função start aqui, é predefinida da API e irá iniciar a conversão de fala para texto
    recognition.start();
} 
 
//onresult contém todos os valores da fala convertidos em texto
recognition.onresult = function(event) {

    console.log(event); 

    //pegando o conteudo do que foi falado
    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);

      
}