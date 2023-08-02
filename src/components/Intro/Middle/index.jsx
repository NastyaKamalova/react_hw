import React, { useState } from "react";
import SubHeader from "../../../ui/SubHeader";
import style from "./middle.module.css";
import Product from "./Product";

const initialProducts = [
  {
      id: 0,
      name: 'Baklava',
      count: 1,
  },
  {
      id: 1,
      name: 'Cheese',
      count: 5,
  },
  {
      id: 2,
      name: 'Spaghetti',
      count: 2,
  },
];


function Middle() {
  const [products, setProducts] = useState(initialProducts); 

  function changeCount(id, func) {
    const updProducts = products.map(product => {
      if (product.id === id) {
        product.count = func ? product.count + 1 : product.count - 1 
      }
      return product;
    })
    setProducts(updProducts);
  }

  return (
    <div>
      <SubHeader>Middle</SubHeader>
        <ul className={style.ul}>
          {
            products.map(product => (
              product.count
                ? (
                  <Product 
                    changeCount={changeCount} 
                    product={product} 
                    key={product.id}
                  />
                ) : undefined
            ))
          }
        </ul>

    </div>
  );
}

export default Middle;