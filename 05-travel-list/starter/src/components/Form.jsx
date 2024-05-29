import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ handleAddList }) => {
  const [description, setDescription] = useState({ quantity: 1, text: "" });

  const handleSubmit = (e) => {
    const { quantity, text } = description;
    e.preventDefault();
    handleAddList({
      id: uuid(),
      description: text,
      quantity,
      completed: false,
    });
    setDescription({ quantity: 1, text: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={description.quantity}
        onChange={(e) =>
          setDescription((d) => ({ ...d, quantity: e.target.value }))
        }
      >
        {[...Array(20)].map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description.text}
        onChange={(e) =>
          setDescription((d) => ({ ...d, text: e.target.value }))
        }
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
