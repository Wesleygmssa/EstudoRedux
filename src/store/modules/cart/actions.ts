export function addProductToCart(product: any) {
  return {
    type: "@cart/ADD",
    payload: {
      product,
    },
  };
}
