class Escola {
  _matricula: number;
  _nome: string;
  _prova1: number;
  _prova2: number;
  _prova3: number;
  _prova4: number;
  _trabalho1: number;
  _trabalho2: number;

  constructor(
    matricula: number,
    nome: string,
    prova1: number,
    prova2: number,
    prova3: number,
    prova4: number,
    trabalho1: number,
    trabalho2: number,
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova1 = prova1;
    this._prova2 = prova2;
    this._prova3 = prova3;
    this._prova4 = prova4;
    this._trabalho1 = trabalho1;
    this._trabalho2 = trabalho2;
  }

  somaNotas(): number {
    return this._prova1 + this._prova2 + this._prova3 + this._prova4;
  }

  mediaNotas(): number {
    const notas = this.somaNotas();
    const media = notas / 4
    return media;
  }
}