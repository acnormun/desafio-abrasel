import axios from "axios";
class CepService{
   private baseUrl = "https://viacep.com.br/ws/";

    public async get_dados_cep(cep: number){
        return axios.get(`${this.baseUrl}/${cep}/json`)
    }
}

export default new CepService()
