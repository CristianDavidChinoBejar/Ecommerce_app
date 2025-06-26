import { useEffect, useState} from "react";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    data ? setItems(JSON.parse(data)) : setItems([]);
  }, []);

  return (
    <div>
      {items.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;