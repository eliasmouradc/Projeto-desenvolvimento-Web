const valordaConta = 100;
const percentualGorgeta = 15;

const valorGorgeta = valordaConta *(percentualGorgeta / 100);

const valorTotal = valordaConta + valorGorgeta;

console.log("valor da conta: R$" + valordaConta.toFixed(2)+
"gorgeta (" + percentualGorgeta + "%):R$" + valorGorgeta.toFixed(2)+
"total a pagar R$" + valorTotal.toFixed(2));