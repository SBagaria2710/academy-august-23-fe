function Product() {
  let productArr = [
    { id: 1, name: "Laptop", price: 35000 },
    { id: 2, name: "Headphone", price: 5000 },
    { id: 3, name: "Watch", price: 5000 },
    { id: 4, name: "Mouse", price: 200 },
  ];
  return (
    <ul>
      {productArr.map(({ id, name, price }, _) => (
        <li key={id}>
          {name}: {price}
        </li>
      ))}
    </ul>
  );
}

export default Product;
