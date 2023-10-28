import { Button } from "@chakra-ui/react";
import { FormContainer, MinutesAmoundInput } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IPalindromo } from "../../interfaces/IPalindromo";

export function Palidromos() {
  const { register, handleSubmit, watch } = useForm();
  const number = watch("number");
  const [palindromos, setPalindromos] = useState<Array<number>>([]);

  function check_palindromo(value: number) {
    const reverso = Number(value.toString().split("").reverse().join(""));
    return reverso === value;
  }

  function handleSubmitNumber(data: IPalindromo) {
    console.log(data);
    const palindromos_array = [];
    if (data.number) {
      for (let i = 1; i <= number; i++) {
        check_palindromo(i) && palindromos_array.push(i);
      }
      setPalindromos(palindromos_array);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitNumber)}>
        <FormContainer>
          <label htmlFor="number">Selecione um número</label>
          <MinutesAmoundInput
            type="number"
            id="number"
            placeholder="00"
            min={1}
            max={1000}
            {...register("number", { valueAsNumber: true })}
          />
          <Button type="submit" disabled={!number}>
            Enviar
          </Button>
        </FormContainer>
      </form>

      <div>
        <h1>Palíndromos de {number ?? 0} :</h1>
        {palindromos.map(item => (item + ' - '))}
        </div>
    </>
  );
}
