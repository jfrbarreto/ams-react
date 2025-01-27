import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { CssBased } from "./css-based/css.based";
import { InlineBased } from "./inline-based/inline.based";
import { JssBased } from "./jss/jss.based";

export const ReactStyling: React.FC = () => {
  const [exampleInView, setExampleInView] = useState<string | null>("first");

  const handleChangeExample = (tab: string | null) => {
    setExampleInView(tab);
  };

  return (
    <Tabs value={exampleInView} onChange={(tab) => handleChangeExample(tab)}>
      <Tabs.List grow>
        <Tabs.Tab value="first">Css</Tabs.Tab>
        <Tabs.Tab value="second">Inline</Tabs.Tab>
        <Tabs.Tab value="third">JSS</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">
        <CssBased />
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <InlineBased />
      </Tabs.Panel>
      <Tabs.Panel value="third">
        <JssBased />
      </Tabs.Panel>
    </Tabs>
  );
};
