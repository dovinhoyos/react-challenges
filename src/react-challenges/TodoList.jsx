import { useState } from "react";

export const TodoList = ({children}) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, inputValue]);
  };

  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <input onChange={handleInputChange} placeholder={children} />
      <button onClick={handleAddItem}>Agregar ciudad</button>
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li>
              {item}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
