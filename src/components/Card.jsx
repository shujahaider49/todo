import React from "react";

const Card = ({ todos,handleEditClick ,handleDeleteTodo}) => {
  return (
    <>
      <div className="mt-4">
        <ul className="list-group m-4 gap-3">
          {todos.map((todo) => (
            <li className="list-group-item bg-dark text-white" key={todo.id}>
              <h1 className="text-center display-6">Todo</h1>
              <h3>{todo.title}</h3>
              <hr />
              <p>{todo.description}</p>
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => handleEditClick(todo.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Card;
