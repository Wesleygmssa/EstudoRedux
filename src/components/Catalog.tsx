import React, { useCallback, useEffect, useState } from "react";
import { useStore, useSelector, useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  // const store = useStore();
  // console.log("Catalog.tsx: store", store.getState());

  /*   const store = useSelector((state) => state);
  console.log("Catalog.tsx: store", store); */

  // const age = useSelector((state) => state.age);
  // console.log("Catalog.tsx: store", age);

  // const catalog = useSelector((state) => state);
  // console.log("Catalog.tsx: store", catalog); // { age: 0, name: "", books: [] }  // !!!

  const handleAddToCart = useCallback((product: any) => {
    dispatch(addProductToCart(product));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span>
          <button type="button" onClick={() => handleAddToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};
