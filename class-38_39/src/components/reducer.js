import uuid from "react-uuid";

const taskReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK': {
      const newTask = { ...action.payload, id: uuid(), isDone: false }
      return [...state, newTask];
    }

    case "MARK_AS_DONE": {
      const index = state.findIndex((task) => task.id === action.payload);
      const doneTasks = [...state];
      doneTasks[index].isDone = true;
      return doneTasks;
    }

    case "REMOVE_TASK": {
      const remainingTask = state.filter(task => task.id !== action.payload);
      return remainingTask;
    }

    default: return state
  }
};

const formReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_TASK_CHANGE': {
      return { ...state, [action.field]: action.payload }
    }

    default: return state
  }
}

export { taskReducer, formReducer };