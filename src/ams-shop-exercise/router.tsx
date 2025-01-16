import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { Header } from "./ui/components/header.component";
import { ProductListPage } from "./ui/pages/productList.page";

import { useGlobalState } from "./lib/state";
import { CheckoutPage } from "./ui/pages/checkout.page";

export function ShopRouter() {
  const {
    productList,
    setProductList,
    addProductToCart,
    cartCount,
    buildCheckoutProductList
  } = useGlobalState();

  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Header cartCount={cartCount} />}>
            <Route
              path={"/"}
              element={
                <ProductListPage
                  productList={productList}
                  setProductList={setProductList}
                  addProductToCart={addProductToCart}
                />
              }
            />
            <Route
              path={"/checkout"}
              element={
                <CheckoutPage
                  buildCheckoutProductList={buildCheckoutProductList}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
