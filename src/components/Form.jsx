/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ addNewItem, setAddNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setAddNewItem([...addNewItem, newItem]);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onClick={handleOnSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        id=""
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
