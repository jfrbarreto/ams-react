import { BrowserRouter, Route, Routes } from "react-router";
import { Frame } from "./ui/frame";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Component } from "./ams-academy/component";

export function Router() {
  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route path={"/component"} element={<Component text={"LABEL"} />} />
            <Route path={"/other"} element={<p>OTHER ROUTE</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
