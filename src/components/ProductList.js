import { useDeferredValue } from 'react';

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  console.log({products},{deferredProducts})
  // console.log({products})

  return (
    <ul>
      {products.map((product, i) => (
        <li key={i}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
// import React from 'react';

// const ProductList = ({ products }) => {
//   return (
//     <ul>
//       {products.map((product, index) => (
//         <li key={index}>{product}</li>
//       ))}
//     </ul>
//   );
// };

// export default ProductList;
