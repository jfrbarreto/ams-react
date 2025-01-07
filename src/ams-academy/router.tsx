import { BrowserRouter, Route, Routes } from "react-router";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Frame } from "../ui/frame";
import { Component } from "./component";

console.log("aaa", process.env.ENV_TTT);

export function AcademyRouter() {
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
