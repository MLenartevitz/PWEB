const windows_id = "janela";
const text_id = "texto";
 
const windows_open = "janelaaberta.jpg";
const windows_closed = "janelafechada.jpg";
const windows_broken = "janelaquebrada.png";
 
function setJanela(img, text) {
    document.getElementById(windows_id).setAttribute("src", img);
    document.getElementById(text_id).innerHTML = text;
}
 
function quebra() {
    setJanela(windows_broken, "Janela Quebrada");
}
 
function abre() {
    setJanela(windows_open, "Janela Aberta");
}
 
function fecha() {
    setJanela(windows_closed, "Janela Fechada")
}