import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Palidromos } from "./Palidromo";
import { Notas } from "./Notas";
import { Veiculos } from "./Veiculos";
import { Cep } from "./CEP";

export function Home() {
  return (
    <>
      <Tabs color="white">
        <TabList>
          <Tab >Palindromo</Tab>
          <Tab>Notas</Tab>
          <Tab>Veículos</Tab>
          <Tab>CEP</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Palidromos/>
          </TabPanel>
          <TabPanel>
            <Notas/>
          </TabPanel>
          <TabPanel>
            <Veiculos/>
          </TabPanel>
          <TabPanel>
            <Cep/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
