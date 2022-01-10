import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const submit = (e)=>{
      e.preventDefault();
      if(!title){
          alert("enter the item")
      }
      else{
          addTodo(title);
          let newText = '';
          setTitle(newText)
      }
  }
  return (
    <div className="container">
      <h4 className="text-center">My Todos</h4>
      <form onSubmit={submit}>
        <div class="mb-3 d-flex justify-content-center">
          <input
            type="email"
            class="form-control w-50 mx-2"
            id="title"
            value={title}
            onChange={handleOnChange}
            placeholder="Add Item"
          />
          <button className="btn btn-success btn-sm mx-2">Add</button>
        </div>
      </form>
    </div>
  );
};
