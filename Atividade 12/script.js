class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
 
    calcularArea() {
        return this.base * this.altura;
    }
}
 
objRetangulo = new Retangulo(10, 5);
alert(objRetangulo.calcularArea());
 
function Conta(nomeCorrentista, banco, numeroDaConta, saldo) {
  this.nomeCorrentista = nomeCorrentista;
  this.banco = banco;
  this.numeroDaConta = numeroDaConta;
  this.saldo = saldo;
}
 
Conta.prototype.getNomeCorrentista = function() {
  return this.nomeCorrentista;
};
 
Conta.prototype.setNomeCorrentista = function(nomeCorrentista) {
  this.nomeCorrentista = nomeCorrentista;
};
 
Conta.prototype.getBanco = function() {
  return this.banco;
};
 
Conta.prototype.setBanco = function(banco) {
  this.banco = banco;
};
 
Conta.prototype.getNumeroDaConta = function() {
  return this.numeroDaConta;
};
 
Conta.prototype.setNumeroDaConta = function(numeroDaConta) {
  this.numeroDaConta = numeroDaConta;
};
 
Conta.prototype.getSaldo = function() {
  return this.saldo;
};
 
Conta.prototype.setSaldo = function(saldo) {
  this.saldo = saldo;
};
 
class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroDaConta, saldo);
    this.saldoEspecial = saldoEspecial;
  }
 
  getSaldoEspecial = function() {
    return this.saldoEspecial;
  };
 
  setSaldoEspecial = function(saldoEspecial) {
    this.saldoEspecial = saldoEspecial;
  };
}
 
class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroDaConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  }
 
  getJuros = function() {
    return this.juros;
  };
 
  setJuros = function(juros) {
    this.juros = juros;
  };
 
  getDataVencimento = function() {
    return this.dataVencimento;
  };
 
  setDataVencimento = function(dataVencimento) {
    this.dataVencimento = dataVencimento;
  };
}
 
const contaCorrente = new Corrente("Fulano de Tal", "NuBank", "1234-5678-9012-3456", 1000, 500);
const contaPoupanca = new Poupanca("Ciclano de Tal", "Santander", "9876-5432-1098-7654", 2000, 10, new Date());
 
console.log(contaCorrente.getNomeCorrentista()); 
console.log(contaCorrente.getBanco()); 
console.log(contaCorrente.getNumeroDaConta()); 
console.log(contaCorrente.getSaldo()); 
console.log(contaCorrente.getSaldoEspecial()); 
 
console.log(contaPoupanca.getNomeCorrentista()); 
console.log(contaPoupanca.getBanco()); 
console.log(contaPoupanca.getNumeroDaConta()); 
console.log(contaPoupanca.getSaldo()); 
console.log(contaPoupanca.getJuros()); 
console.log(contaPoupanca.getDataVencimento()); 
 