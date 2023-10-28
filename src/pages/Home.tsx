import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Palidromos } from "./Palidromo";

export function Home() {
  return (
    <>
      <Tabs color="white">
        <TabList>
          <Tab >Palindromo</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Palidromos/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
