import React, { useState, useTransition } from "react";

const LIST_SIZE = 15000;

function List() {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item) => <div>{item}</div>)
      )}
    </div>
  );
}

export default List;
