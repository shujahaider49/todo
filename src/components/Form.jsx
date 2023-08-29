import React, { useContext } from 'react'
import { TodoData } from './Todo';


const Form = () => {

  const Data = useContext(TodoData);
   


  return (
    <>
        
    <div className="container mt-5 ">
      <div className="card">
        <div className="card-body bg-dark text-white">
          <h5 className="card-title text-center display-6">{Data.editingId !== null ? 'Edit Todo' : 'ADD TODO'}</h5>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control bg-dark text-white" 
              id="title"
              value={Data.title}
              onChange={Data.handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
             rows="5" cols="33"
             placeholder='Write your text here'
              type="text"
              className="form-control bg-dark text-white"
              id="description"
              value={Data.description}
              onChange={Data.handleDescriptionChange}
            />
          </div>
          {Data.editingId !== null ? (
            <button type="button" className="btn btn-primary me-2" onClick={Data.handleEditTodo}>Save</button>
          ) : (
            <button type="button" className="btn btn-primary me-2" onClick={Data.handleAddTodo}>Add</button>
          )}
          <button type="button" className="btn btn-secondary" onClick={() => { Data.setTitle(''); Data.setDescription(''); Data.setEditingId(null); }}>Cancel</button>
        </div>
      </div>

     
    </div>
    
      
    </>
  )
}

export default Form
