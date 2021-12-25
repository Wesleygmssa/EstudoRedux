import React from "react";
import { useStore, useSelector } from "react-redux";

export const Catalog = () => {
  // const store = useStore();
  // console.log("Catalog.tsx: store", store.getState());

  /*   const store = useSelector((state) => state);
  console.log("Catalog.tsx: store", store); */

  // const age = useSelector((state) => state.age);
  // console.log("Catalog.tsx: store", age);

  const catalog = useSelector((state) => state);
  console.log("Catalog.tsx: store", catalog); // { age: 0, name: "", books: [] }  // !!!

  return (
    <div>
      <h1>Catalog</h1>
    </div>
  );
};
