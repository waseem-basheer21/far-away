import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [addNewItem, setAddNewItem] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} setAddNewItem={setAddNewItem} />
      <PackingList addNewItem={addNewItem} setAddNewItem={setAddNewItem} />
      <Stats />
    </div>
  );
}

export default App;
