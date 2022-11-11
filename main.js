//armazenando a API na variável
var SpeechRecognition = window.webkitSpeechRecognition;

//criando um novo reconhecimento de fala utilizando a API e armazenando na variável
var recognition = new SpeechRecognition();

//armazenando na variável o elemento HTML cujo ID é textbox
var Textbox = document.getElementById("textbox"); 

function iniciar()
{
    //sempre que o start for pressionado, a area de texto será limpa
    

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

    if(Content == "selfie"){
        console.log("tirando selfie")
        falar()

    }


}

function falar(){
    var synth = window.speechSynthesis
    var speakdata = "tirando selfie em 3 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakdata)
    synth.falar(utterThis)
    Webcam.attach(camera)
    setTimeout(function()
    {
        tirarselfie()
        salvar()

    },3000)
}

camera = document.getElementById("webcam")
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
})

function tirarselfie(){

    Webcam.snap(function(data_uri) { document.getElementById("resultSelfie").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>'; });

}

function salvar(){
    var link = document.getElementById("downloadSelfie")
    var imagem = document.getElementById("selfieImage").scr 
    link.href = imagem
    link.click()
}