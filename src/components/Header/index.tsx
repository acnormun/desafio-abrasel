import { Container, HeaderSubtitle, HeaderTitle } from "./styles";
import { Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Container>
      <HeaderTitle>Desafio</HeaderTitle>
      <Image
        src="https://static.wixstatic.com/media/c5b34d_9f5262f3183647468e6dd79cf50ba783~mv2.png/v1/fill/w_336,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Abrasel---negativo%20(1)%20(1).png"
        boxSize="150px"
        objectFit="contain"
      />
      <HeaderSubtitle>- by Ana Clara Noronha</HeaderSubtitle>
       
    </Container>
  );
}
