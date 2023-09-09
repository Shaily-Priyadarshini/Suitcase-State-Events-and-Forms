import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Fun Trip 💼</h1>;
}
function Form() {
  const [description,setDescription]=useState("")
  const [count,setCount]=useState(1)
  function handleSubmit(e){
    e.preventDefault();
    if (!description)
    return;
  const newItem ={ description,count,packed :false , id:Date.now()}
  console.timeLog(newItem);

  //after getting data, make input in initial state
  setDescription("");
  setCount(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={count} onChange={(e)=>setCount(Number(e.target.value))}>
      
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num} >
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼You have x items in your list, and you already packed x (X%)</em>
    </footer>
  );
}
