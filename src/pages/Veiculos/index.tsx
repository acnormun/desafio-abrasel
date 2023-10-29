import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Container, FormContainer, InputData, SelectInput } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://raw.githubusercontent.com/acnormun/desafio-abrasel/main/api/veiculos.json";

export function Veiculos() {
  const { register, handleSubmit, watch } = useForm();
  const tipo = watch("tipo");
  const [veiculos, setVeiculos] = useState();

  function handleSubmitForm(e) {
    console.log(e);
  }

  useEffect(() => {
    axios.get(`${baseUrl}`).then(({ data }) => setVeiculos(data));
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormContainer>
          <label htmlFor="tipo">Tipo: </label>
          <SelectInput id="tipo" {...register("tipo")} required>
            <option value="carro">Carro</option>
            <option value="moto">Moto</option>
          </SelectInput>
          <label htmlFor="placa">Placa: </label>
          <InputData
            type="text"
            id="placa"
            placeholder="XXX-0000"
            {...register("placa")}
            required
          />
          <label htmlFor="ano">Ano: </label>
          <InputData
            type="number"
            id="ano"
            min={1950}
            max={new Date().getFullYear()}
            {...register("ano")}
            required
          />
        </FormContainer>
        <FormContainer>
          <label htmlFor="marca">Marca: </label>
          <InputData
            type="text"
            id="marca"
            placeholder="Ex: Chevrolet"
            required
            {...register("marca")}
          />
          <label htmlFor="modelo">Modelo: </label>
          <InputData
            type="text"
            id="modelo"
            placeholder="Ex: Prisma"
            required
            {...register("modelo")}
          />
        </FormContainer>
        {tipo === "carro" ? (
          <FormContainer>
            <label htmlFor="portas">Número de Portas: </label>
            <SelectInput id="portas" {...register("portas")} required>
              <option value="2">2</option>
              <option value="4">4</option>
            </SelectInput>
          </FormContainer>
        ) : (
          <FormContainer>
            <label htmlFor="rodas">Número de Rodas: </label>
            <SelectInput id="rodas" {...register("rodas")} required>
              <option value="2">2</option>
            </SelectInput>
            <label htmlFor="passageiros">Passageiros: </label>
            <SelectInput id="passageiros" {...register("passageiros")} required>
              <option value="1">1</option>
              <option value="2">2</option>
            </SelectInput>
          </FormContainer>
        )}

        <Button type="submit">Enviar</Button>
      </form>

      {JSON.stringify(veiculos.data)}


    </Container>
  );
}
