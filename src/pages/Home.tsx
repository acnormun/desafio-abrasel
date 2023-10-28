import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Palidromos } from "./Palidromo";
import { Notas } from "./Notas";

export function Home() {
  return (
    <>
      <Tabs color="white">
        <TabList>
          <Tab >Palindromo</Tab>
          <Tab>Notas</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Palidromos/>
          </TabPanel>
          <TabPanel>
            <Notas/>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
