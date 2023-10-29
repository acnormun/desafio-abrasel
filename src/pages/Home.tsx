import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Palidromos } from "./Palidromo";
import { Notas } from "./Notas";
import { Veiculos } from "./Veiculos";
import { Cep } from "./CEP";

export function Home() {
  return (
    <>
      <Tabs variant='enclosed' colorScheme='green'>
        <TabList color={"white"}>
          <Tab _selected={{color: 'white', bg:'#F1BA45'}} style={{color: "white"}}>Palindromo</Tab>
          <Tab _selected={{color: 'white',bg:'#F1BA45'}} style={{color: "white"}}>Notas</Tab>
          <Tab _selected={{color: 'white', bg:'#F1BA45'}} style={{color: "white"}}>Veículos</Tab>
          <Tab _selected={{color: 'white', bg:'#F1BA45'}} style={{color: "white"}}>CEP</Tab>
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
