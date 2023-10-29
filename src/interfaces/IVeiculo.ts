export interface IVeiculo {
    modelo: string,
    anoFabricacao: number, 
    marca: string,
    tipo?: "carro" | "moto"
}
