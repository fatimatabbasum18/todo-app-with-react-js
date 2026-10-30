import { useState } from "react";

function TodoInput({ onAdd }) {
  // State: input box ka text
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return; // khali todo add nahi hoga
    onAdd(text.trim());
    setText(""); // input khali karo
  };

  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Naya task likho..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
