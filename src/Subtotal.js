import React from "react";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ total }, dispatch] = useStateValue();

  return (
    <div>
      <h2>hello</h2>
      <h1>{total}</h1>
    </div>
  );
}

export default Subtotal;
