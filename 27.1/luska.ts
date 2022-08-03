class Luska {
  fraseDoida: string;

  constructor(frase: string) {
    this.fraseDoida = frase
  }

  get loucuras(): string {
    return this.fraseDoida
  }
}

const frase1 = new Luska('MEU DEUS QUE TRISTEZA');

console.log(frase1.loucuras);