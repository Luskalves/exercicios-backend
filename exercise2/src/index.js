"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var MesesDoAno;
(function (MesesDoAno) {
    MesesDoAno[MesesDoAno["janeiro"] = 1] = "janeiro";
    MesesDoAno[MesesDoAno["fevereiro"] = 2] = "fevereiro";
    MesesDoAno[MesesDoAno["marco"] = 3] = "marco";
    MesesDoAno[MesesDoAno["abril"] = 4] = "abril";
    MesesDoAno[MesesDoAno["maio"] = 5] = "maio";
    MesesDoAno[MesesDoAno["junho"] = 6] = "junho";
    MesesDoAno[MesesDoAno["julho"] = 7] = "julho";
    MesesDoAno[MesesDoAno["agosto"] = 8] = "agosto";
    MesesDoAno[MesesDoAno["setembro"] = 9] = "setembro";
    MesesDoAno[MesesDoAno["outubro"] = 10] = "outubro";
    MesesDoAno[MesesDoAno["novembro"] = 11] = "novembro";
    MesesDoAno[MesesDoAno["dezembro"] = 12] = "dezembro";
})(MesesDoAno || (MesesDoAno = {}));
var Estacoes;
(function (Estacoes) {
    Estacoes["inverno"] = "inverno";
    Estacoes["verao"] = "ver\u00E3o";
    Estacoes["outono"] = "outono";
    Estacoes["primavera"] = "primavera";
})(Estacoes || (Estacoes = {}));
;
var EstacoesTest;
(function (EstacoesTest) {
    EstacoesTest[EstacoesTest["inverno"] = 3] = "inverno";
    // verao = 'verão',
    // outono = 'outono',
    // primavera = 'primavera'
})(EstacoesTest || (EstacoesTest = {}));
;
var Mes = Number(readline.question('Escolha um mês: '));
console.log('Mês escolhido: ', MesesDoAno[Mes]);
