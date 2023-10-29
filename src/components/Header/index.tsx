import { Container, HeaderTitle } from "./styles";
import { Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Container>
            <HeaderTitle>
                    <Image src="../assets/logo_abrasel.png"/>
            </HeaderTitle>
            
        </Container>
    )
}