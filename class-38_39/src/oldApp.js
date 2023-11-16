import { useState } from "react";
import './App.css';
// import List from './components/List';
// import Todo from './components/Todo';
// import TodoReduced from './components/TodoReduced';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    import("./data").then((module) => {
      setMovies(module.moviesData);
    });
  };

  return (
    <div className="App">
    This is your movie data
    <button onClick={getMovies}>Get Movies</button>
    <br />
    {movies.length > 0 ? JSON.stringify() : ""}
    </div>
  );
}

export default App;