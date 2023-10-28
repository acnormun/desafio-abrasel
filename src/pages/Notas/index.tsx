import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormContainer, MinutesAmoundInput } from "../Palidromo/styles";
import { INotas, ITroco } from "../../interfaces/INotas";

export function Notas() {
  const { register, handleSubmit, watch} = useForm();
  const compra = watch("valor_compra")
  const pago = watch("valor_pago")
  const [notas, setNotas] = useState<ITroco>({
    troco: 0,
    notas_100: 0,
    notas_10: 0,
    notas_1: 0
  })

  function handleSubmitPagamento(data: INotas) {
   const {valor_compra, valor_pago} = data
   const troco = valor_pago - valor_compra
   const notas_100 = Math.floor(troco/100)
   const notas_10 = Math.floor((troco-100*notas_100)/10)
   const notas_1 = Math.floor((troco-100*notas_100-10*notas_10))

   setNotas({
    troco: troco,
    notas_100: notas_100,
    notas_10: notas_10,
    notas_1: notas_1
   })
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitPagamento)}>
        <FormContainer>
          <label htmlFor="valor_compra">Insira o valor da compra: </label>
          <MinutesAmoundInput
            type="number"
            id="valor_compra"
            placeholder="00"
            min={1}
            {...register("valor_compra", { valueAsNumber: true })}
          />
           <label htmlFor="valor_pago">Insira o valor pago: </label>
          <MinutesAmoundInput
            type="number"
            id="valor_pago"
            placeholder="00"
            min={1}
            {...register("valor_pago", { valueAsNumber: true })}
          />
          <Button type="submit" isDisabled={(pago<compra)}>
            Enviar
          </Button>
        </FormContainer>
      </form>

      <div>
        <p>Troco: {notas.troco ?? 0}</p>
        <p>Notas de 100: {notas.notas_100 ?? 0}</p>
        <p>Notas de 10: {notas.notas_10 ?? 0}</p>
        <p>Notas de 1: {notas.notas_1 ?? 0}</p>
      </div>

    </>
  );
}
