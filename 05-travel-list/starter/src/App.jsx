import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { v4 as uuid } from "uuid";

function App() {
  const [listData, setListData] = useState([
    {
      id: uuid(),
      description: "Tickets",
      quantity: 5,
      completed: false,
    },
    {
      id: uuid(),
      description: "Charger",
      quantity: 2,
      completed: true,
    },
  ]);

  const handleAddList = (newList) => setListData((curr) => [...curr, newList]);

  const handleToggleList = (id) => {
    setListData((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteList = (id) =>
    setListData((curr) => curr.filter((item) => item.id !== id));

  const handleDeleteAll = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) setListData([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddList={handleAddList} />
      <PackingList
        listData={listData}
        handleToggleList={handleToggleList}
        handleDeleteList={handleDeleteList}
        handleDeleteAll={handleDeleteAll}
      />
      <Stats listData={listData} />
    </div>
  );
}

export default App;
