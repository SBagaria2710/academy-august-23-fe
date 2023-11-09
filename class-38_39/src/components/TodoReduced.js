import { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";

import { taskReducer, formReducer } from "./reducer";

const TodoReduced = () => {
  const [state, dispatch] = useReducer(taskReducer, []); // list
  const [task, setTask] = useReducer(formReducer, {
    title: "",
    by: ""
  });

  const handleTaskChange = (event) => {
    const { name, value } = event.target || {};
    setTask({ type: "HANDLE_TASK_CHANGE", field: name, payload: value });
  };

  return (
    <>
      <div>
        <h1>My TodoList (Reduced)</h1>
        <div>
          I want to do <input type="text" name="title" onChange={handleTaskChange} />{" "}
          by <input type="date" name="by" onChange={handleTaskChange} />
          <button className="wishBtn" onClick={() => dispatch({ type: "ADD_TASK", payload: task })}>
            Add a Task
          </button>
        </div>
        <ul>
          {(state || []).map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title}</strong> is due by {item.by}
              </span>
              <span>
                <TiTick size={24} onClick={() => dispatch({ type: "MARK_AS_DONE", payload: item.id })} />
              </span>
              <span>
                <TiTrash size={24} onClick={() => dispatch({ type: "REMOVE_TASK", payload: item.id })} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoReduced;
