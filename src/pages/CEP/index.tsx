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
import { useState } from "react";
import { FormContainer, InputData } from "./styles";
import axios from "axios";

const baseUrl = "https://viacep.com.br/ws/";
export function Cep() {
  const { register, handleSubmit, watch } = useForm();
  const [ceps, setCeps] = useState<any>({});
  const [dados, setDados] = useState<any>([])

  async function get_dados(cep: number){
    return await axios.get(`${baseUrl}/${cep}/json`).then(r => r.data).catch(() => alert(`CEP ${cep} não encontrado! Se o erro persistir, contate o suporte.`))
  }

  async function handleSubmitCeps(e) {
    setCeps(e);
    console.log(e);
    for(let i=1; i<6; i++){
      const dado =  await get_dados(e[`cep_${i}`])
      if(dado){
          setDados(dados => [...dados, dado])
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitCeps)}>
        <FormContainer>
          <div>
            <label htmlFor="cep_1">CEP 1: </label>
            <InputData
              type="number"
              id="cep_1"
              placeholder="00000000"
              {...register("cep_1", { valueAsNumber: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="cep_2">CEP 2: </label>
            <InputData
              type="number"
              id="cep_2"
              placeholder="00000000"
              {...register("cep_2", { valueAsNumber: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="cep_3">CEP 3: </label>
            <InputData
              type="number"
              id="cep_3"
              placeholder="00000000"
              {...register("cep_3", { valueAsNumber: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="cep_4">CEP 4: </label>
            <InputData
              type="number"
              id="cep_4"
              placeholder="00000000"
              {...register("cep_4", { valueAsNumber: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="cep_5">CEP 5: </label>
            <InputData
              type="number"
              id="cep_5"
              placeholder="00000000"
              {...register("cep_5", { valueAsNumber: true })}
              required
            />
          </div>
          <Button type="submit">Enviar</Button>
        </FormContainer>

        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>CEP</Th>
              <Th>Cidade</Th>
              <Th>UF</Th>
              <Th>Bairro</Th>
              <Th>Logrfadouro</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dados.map(item => {
             return  <Tr key={item.id}>
                <Td>{item.cep ?? '-'}</Td>
                <Td>{item.localidade ?? '-'}</Td>
                <Td>{item.uf ?? '-'}</Td>
                <Td>{item.bairro ?? '-'}</Td>
                <Td>{item.logradouro}</Td>
              </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>
      </form>
    </>
  );
}
