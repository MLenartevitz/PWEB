var aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Mateus Paulo";
console.log("ra= " + aluno1.ra + " nome= " + aluno1.nome);

var aluno2 = {};
aluno2.ra = "00001234";
aluno2["nome"] = "Mateus Paulo";
console.log("ra= " + aluno2.ra + " nome= " + aluno2.nome);

var aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Mateus Paulo";
console.log("ra= " + aluno1.ra + " nome= " + aluno1.nome);

var aluno3 = {
    ra: "00001234",
    nome: "Mateus Paulo"
};
alert("ra= " + aluno3.ra + " nome= " + aluno3.nome);

function Aluno(ra,nome){
    this.ra = ra;
    this.nome = nome;

    this.mostradados = function(){
        return "ra= " + this.ra + " nome= " + this.nome;
    }
}   

var aluno4 = new aluno("123", "igor");
console.log(aluno4.mostradados());
console.log(aluno4.nome);

var aluno5 = {}
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5["nome"] = "vitor";
console.log(aluno5.ra + " " + aluno5.nome);