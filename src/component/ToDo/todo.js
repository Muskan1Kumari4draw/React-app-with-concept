import React, { useEffect, useState } from "react";
import "./style.css";
import { MdDelete, MdEdit, MdOutlineAdd } from "react-icons/md";

import Button from "react-bootstrap/Button";
import "react-bootstrap";
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(getLocalData());
  const [editItem, setEditItem] = useState();
  const [toggle, setToggle] = useState(false);
  const addItem = () => {
    if (!inputData) {
      alert("Please enter a task");
    } else if (inputData && toggle) {
      setItem(
        item.map((curEle) => {
          if (curEle.id === editItem) {
            return { ...curEle, name: inputData };
          }
          return curEle;
        })
      );
      setInputData("");
      setEditItem(null);
      setToggle(false);
    } else {
      const myInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, myInputData]);
      setInputData("");
    }
  };

  const editItems = (id) => {
    const itemToEdit = item.find((curEle) => curEle.id === id);
    setInputData(itemToEdit.name);
    setEditItem(id);
    setToggle(true);
  };

  const deleteItem = (index) => {
    const updateItem = item.filter((curEle) => curEle.id !== index);
    setItem(updateItem);
  };
  const removeAll = () => {
    setItem([]);
  };
  // Storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="heading">
            <h1>To-Do List 📃</h1>
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              placeholder="✍ Add a new task"
            />
            {toggle ? (
              <button className="btn btn-primary" onClick={addItem}>
                <MdEdit />
              </button>
            ) : (
              <button onClick={addItem}>
                <MdOutlineAdd />
              </button>
            )}
          </div>
          <div className="showItems">
            {item.map((curEle) => {
              return (
                <div className="task-container" key={curEle.id}>
                  <ul>
                    <li>
                      <span>{curEle.name}</span>
                      <button onClick={() => deleteItem(curEle.id)}>
                        <MdDelete />
                      </button>
                      <Button
                        variant="primary"
                        onClick={() => editItems(curEle.id)}
                        className="btn btn-primary"
                      >
                        <MdEdit />
                      </Button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="showItem">
            <button
              className="btn  effect04"
              staat-sm-link-text="Remove All "
              onClick={removeAll}
            >
              <span>Remove All</span>
            </button>
          </div>

          <div className="footer">
            <p> items left</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
