class PessoaCliente {
  public _nome: string;  
  constructor(nome: string) {
    this._nome = nome
  }
}

class Item extends PessoaCliente {
  public _nomeItem: string;
  public _preco: number;

  constructor(nome: string, nomeItem: string, preco: number) {
    super(nome);
    this._nomeItem = nomeItem;
    this._preco = preco
  }
}

export default class Pedido extends Item {
  private _pagamento: string;
  private _desconto: number;

  constructor(
    cliente: string,
    item: string,
    preco: number,
    pagamento: string,
    desconto: number,
    ) {
    super(cliente, item, preco)
    this._pagamento = pagamento;
    this._nomeItem = item;
    this._desconto = desconto;
    
  }

  pagarPedido(): string {
    return `O cliente ${this._nome} deve pagar: R$${this._preco} e vai pagar em ${this._pagamento}`
  }

  pagarPedidoComDesconto(): string {
    const valorFinal = this._preco - this._preco * (this._desconto / 100)
    return `O cliente ${this._nome} deve pagar: R$${valorFinal} e vai pagar em ${this._pagamento}`
  }
}

const p1 = new Pedido('luska', 'sandubão', 100, 'dinheiros', 15)

console.log(p1.pagarPedido())
console.log(p1.pagarPedidoComDesconto())