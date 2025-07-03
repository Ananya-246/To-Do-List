import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/todos";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");


    const fetchTodos = async () => {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    };

    useEffect(() => {
      fetchTodos();
    }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post(API_URL, {
      text,
      description,
      dueDate
    });
    setText("");
    setDescription("");
    setDueDate("");
    fetchTodos();
  };

  const toggleComplete = async (id, current) => {
    console.log("Toggling:", id, "From:", current, "To:", !current);
    await axios.put(`${API_URL}/${id}`, { completed: !current });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  return (
    <div className="main">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        style={{ padding: "8px", width: "200px" }}
      />
      <div style={{ marginBottom: "20px" }}>

        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            rows={3}
            style={{ padding: "8px", width: "300px" }}
          />

          <br /><br />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{ padding: "8px" }}
          />

          <br /><br />

          <button
            onClick={addTodo}
            style={{ padding: "8px 16px" }}
          >
            Add Task
          </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
        <li key={todo._id} style={{ marginBottom: "20px", textAlign: "left" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo._id, todo.completed)}
          />
          <strong style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginLeft: "10px"
          }}>
            {todo.text}
          </strong>

          <div style={{ marginLeft: "28px", fontStyle: "italic" }}>
            {todo.description || <em>No description</em>}
          </div>

          {todo.dueDate && (
            <div style={{ marginLeft: "28px", color: "black", fontSize: "20px" }}>
              <strong>Due: {new Date(todo.dueDate).toLocaleDateString()}</strong>
            </div>
          )}

          <button
            onClick={() => deleteTodo(todo._id)}
            style={{ marginTop: "5px", marginLeft: "10px" }}
          >
            ❌
          </button>
        </li>
      ))}
      </ul>

    </div>
  );
};

export default TodoList;
