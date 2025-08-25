import React, { useState, useEffect } from "react";
import { commonAPI } from "../services/commonAPI";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Fetch all todos
  const fetchTodos = async () => {
    const data = await commonAPI("get", "/todos");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const data = await commonAPI("post", "/todos", { title: newTodo, completed: false });
    setTodos([...todos, data]);
    setNewTodo("");
  };

  // Toggle complete
  const toggleTodo = async (todo) => {
    await commonAPI("put", `/todos/${todo.id}`, { ...todo, completed: !todo.completed });
    fetchTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await commonAPI("delete", `/todos/${id}`);
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Editing
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.title);
  };

  // Save edited todo
  const saveEdit = async (id) => {
    if (!editingText.trim()) return;
    await commonAPI("put", `/todos/${id}`, { title: editingText, completed: todos.find(t => t.id === id).completed });
    setEditingId(null);
    setEditingText("");
    fetchTodos();
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Todo List</h2>

      <div style={styles.inputContainer}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>

      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={styles.editInput}
                />
                <div>
                  <button onClick={() => saveEdit(todo.id)} style={styles.saveButton}>Save</button>
                  <button onClick={cancelEdit} style={styles.cancelButton}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleTodo(todo)}
                  style={{
                    ...styles.todoText,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#a0c4ff" : "#ffffff",
                  }}
                >
                  {todo.title}
                </span>
                <div>
                  <button onClick={() => startEdit(todo)} style={styles.editButton}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


const styles = {
  container: {
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
    letterSpacing: "1px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
    maxWidth: "500px",
    margin: "0 auto",
  },
  todoItem: {
    backgroundColor: "#2563eb",
    padding: "12px 20px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  editButton: {
    padding: "6px 10px",
    marginRight: "5px",
    backgroundColor: "#facc15",
    border: "none",
    borderRadius: "5px",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
  deleteButton: {
    padding: "6px 10px",
    backgroundColor: "#ef4444",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  editInput: {
    padding: "6px 10px",
    borderRadius: "5px",
    border: "none",
    marginRight: "10px",
    width: "200px",
  },
  saveButton: {
    padding: "6px 10px",
    backgroundColor: "#10b981",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "5px",
  },
  cancelButton: {
    padding: "6px 10px",
    backgroundColor: "#6b7280",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Task;
