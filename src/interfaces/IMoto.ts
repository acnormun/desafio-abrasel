import { IVeiculo } from "./IVeiculo";

export interface IMoto extends IVeiculo{
    rodas: 2,
    passageiros: 1 | 2
}