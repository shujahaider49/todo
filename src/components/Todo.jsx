import React, { createContext, useState } from 'react'
import Form from './Form'
import Card from './Card'

export const TodoData = createContext();

const Todo = () => {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
    if (title && description) {
      const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
    }
  };

  const handleEditClick = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
      setEditingId(id);
    }
  };

  const handleEditTodo = () => {
    if (title && description && editingId !== null) {
      const updatedTodos = todos.map(todo =>
        todo.id === editingId ? { ...todo, title, description } : todo
      );
      setTodos(updatedTodos);
      setTitle('');
      setDescription('');
      setEditingId(null);
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
    <div className='container'>
      <TodoData.Provider value={{title,handleTitleChange,editingId,description,handleDescriptionChange,handleEditTodo,handleAddTodo,setTitle,setDescription,setEditingId}}>
      <Form />
       </TodoData.Provider>


      <Card todos={todos}
      handleEditClick={handleEditClick}
      handleDeleteTodo={handleDeleteTodo}
       />
    </div>
    </>
  )
}

export default Todo
