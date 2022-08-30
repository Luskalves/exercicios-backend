import FooCepAPI from "./FooCepAPI";

interface cep {
  cepApi: FooCepAPI;
}

export default class CepService implements cep {
  private readonly _cepApi: FooCepAPI;

  constructor(cepApi: FooCepAPI) {
    this._cepApi = cepApi;
  }

  get cepApi(): FooCepAPI {
    return this._cepApi
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

