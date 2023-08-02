import React from "react";
import style from "./middle.module.css";

function Product({
	product,
	changeCount
}) {
  return (
		<li className={style.li}>
			{product.name} ({product.count}) {" "}
			<button 
				onClick={()=>changeCount(product.id, true)} 
				className={style.button}
			>+</button>
			{" "}
			<button 
				onClick={()=>changeCount(product.id, false)}
				className={style.button}
			>-</button>
		</li>
  );
}

export default Product;