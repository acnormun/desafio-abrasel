import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  ButtonField,
  Container,
  FormContainer,
  InputData,
  SelectInput,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3030/veiculos";

export function Veiculos() {
  const { register, handleSubmit, watch } = useForm();
  const tipo = watch("tipo");
  const [veiculos, setVeiculos] = useState<Array<any>>([]);

  function handleSubmitForm(e: unknown) {
    axios.post(baseUrl, e).then(({ data }) => setVeiculos(data));
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
          <label htmlFor="id">Placa: </label>
          <InputData
            type="text"
            id="id"
            placeholder="XXX-0000"
            {...register("id")}
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
        <ButtonField>
          <Button type="submit">Enviar</Button>
        </ButtonField>
      </form>

      <TableContainer>
        <Table variant="simple" colorScheme="facebook">
          <Thead>
            <Tr>
              <Th color="white">Placa</Th>
              <Th color="white"> Tipo</Th>
              <Th color="white">Marca</Th>
              <Th color="white">Modelo</Th>
              <Th color="white">Ano</Th>
              <Th color="white">Portas</Th>
              <Th color="white">Rodas</Th>
              <Th color="white">Passageiros</Th>
            </Tr>
          </Thead>
          <Tbody>
            {veiculos.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td color="white">{item.id}</Td>
                  <Td color="white">{item.tipo}</Td>
                  <Td color="white">{item.marca}</Td>
                  <Td color="white">{item.modelo}</Td>
                  <Td color="white">{item.ano}</Td>
                  <Td color="white">{item.qtdPortas ?? "-"}</Td>
                  <Td color="white">{item.rodas ?? 4}</Td>
                  <Td color="white">{item.passageiros ?? "-"}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
