class Data {
  private _dia: string;
  private _mes: string;
  private _ano: string;
  private _date: string;

  constructor(dia: string, mes: string, ano: string) {  
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
    this._date = ''
    
  }
  getDate() {
    this._date = `${this._dia}/${this._mes}/${this._ano}`
  }
}