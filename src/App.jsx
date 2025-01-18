import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [addNewItem, setAddNewItem] = useState([]);

  const handleDelete = (id) => {
    setAddNewItem((addNewItem) => addNewItem.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    setAddNewItem((addNewItem) =>
      addNewItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} setAddNewItem={setAddNewItem} />
      <PackingList
        addNewItem={addNewItem}
        setAddNewItem={setAddNewItem}
        handleDelete={handleDelete}
        handleUpdate ={handleUpdate}
        
      />
      <Stats addNewItem={addNewItem} />
    </div>
  );
}

export default App;
