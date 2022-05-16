import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Layout from "../components/Layout/Layout";
import Error from "../components/Error/Error";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer greeting="Ciudades" />} />
            <Route
              path="/Category/:continente"
              element={<ItemListContainer greeting="Ciudades" />}
            />
            <Route
              path="/Item/:detail"
              element={<ItemDetailContainer/>}
            />
            <Route path="/Cart" element={<Cart />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
