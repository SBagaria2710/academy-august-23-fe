const MyComponent1 = () => {
  const name = "Anil";

  const showMessage = () => {
    return <p>hello this is a message from showMessage function'</p>;
  };

  return (
    <div>
      <h5>My name is {name}!</h5>
      {showMessage()}
    </div>
  );
}

export { MyComponent1 };
