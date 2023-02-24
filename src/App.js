import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, SetToDo] = useState("");
  const [deletedToDos, setDeletedToDos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Saturday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          onChange={(e) => SetToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])   
          }
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">


        <h2 className="activeTask">ACTIVE TASKS</h2>


        {toDos.map((obj, index) => {
          return (
            <div key={index} className="todo">
              <div className="left">

                <input
                  onChange={(e) => {

                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p> {obj.text}</p>
              </div>
              <div className="right">

                <i
                  onClick={(e) => {
                    setDeletedToDos([...deletedToDos, obj]);

                    setToDos(
                      toDos.filter((obj2) => {
                        let temp;
                        if (obj2.id !== obj.id) {
                          temp = 412;
                        }
                        return temp;
                      })
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}


<h2 id="completed">COMPLETED TASKS</h2>


        {toDos.map((obj, index) => {
         
          if (obj.status) {
            return (
              <div className="todo">
                <div className="left">
                  <h3 key={index}>
                    {obj.text}
                  </h3>
                </div>
                <div className="right"></div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
