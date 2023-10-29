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
import { ICepForm } from "../../interfaces/ICepForm";

const baseUrl = "https://viacep.com.br/ws/";
export function Cep() {
  //TODO: Acertar as tipagens
  const { register, handleSubmit } = useForm();
  const [ceps, setCeps] = useState<any>({});
  const [dados, setDados] = useState<any>([]);

  async function get_dados(cep: number) {
    return await axios
      .get(`${baseUrl}/${cep}/json`)
      .then((r) => r.data)
      .catch(() =>
        alert(
          `CEP ${cep} não encontrado! Se o erro persistir, contate o suporte.`
        )
      );
  }

  async function handleSubmitCeps(e: ICepForm) {
    setCeps(e);
    console.log(e);
    for (let i = 1; i < 6; i++) {
      const dado = await get_dados(e[`cep_${i}`]);
      if (dado) {
        setDados((dados) => [...dados, dado]);
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitCeps)}>
        <FormContainer>
          {[...Array(5)].map((_, i) => {
            return (
              <div key={i}>
                <label htmlFor={`cep_${i + 1}`} key={`label_${i}`}>CEP {i + 1}: </label>
                <InputData
                  type="text"
                  id={`cep_${i + 1}`}
                  placeholder="00000000"
                  {...register(`cep_${i + 1}`)}
                  required
                  key={`input_${i}`}
                />
              </div>
            );
          })}
          <Button type="submit">Enviar</Button>
        </FormContainer>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="white">CEP</Th>
                <Th color="white">Cidade</Th>
                <Th color="white">UF</Th>
                <Th color="white">Bairro</Th>
                <Th color="white">Logradouro</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dados.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td color="white">{item.cep ?? "-"}</Td>
                    <Td color="white">{item.localidade ?? "-"}</Td>
                    <Td color="white">{item.uf ?? "-"}</Td>
                    <Td color="white">{item.bairro ?? "-"}</Td>
                    <Td color="white">{item.logradouro}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </form>
    </>
  );
}
