import React from "react";

const product = {
  apple: {
    price: 45,
    name: "Apple",
  },
  milk: {
    price: 30,
    name: "Milk",
  },
  coffee: {
    price: 130,
    name: "Coffee",
  },
};

const Wallet = ({ buyProduct }) => {
  //   console.log("Wallet");
  return (
    <>
      <div>
        <h2>apple</h2>
        <button onClick={() => buyProduct(product.apple, 5)}>
          buy: {product.apple.name}
        </button>
      </div>
      <div>
        <h2>milk</h2>
        <button onClick={() => buyProduct(product.milk, 1)}>
          buy: {product.milk.name}
        </button>
      </div>
      <div>
        <h2>coffee</h2>
        <button onClick={() => buyProduct(product.coffee, 1)}>
          buy: {product.coffee.name}
        </button>
      </div>
    </>
  );
};

export default Wallet;
