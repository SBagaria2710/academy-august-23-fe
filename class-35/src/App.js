import './App.css';

// import Family from './components/context-api/family';

// Context
// import { FamilyContext } from './components/context-api/FamilyContext';
// import RefHook from './components/RefHook';
import MemoHook from "./components/MemoHook";

function App() {
  // const state = {
  //   familyName: "Scaler",
  //   onlyForParents: () => {
  //     console.log("Info for the Parents");
  //   },
  //   onlyForTheGrandChildren: () => {
  //     console.log("Info for the GrandChildren");
  //   }
  // };

  return (
    <div className="App">
      {/* <FamilyContext.Provider value={state}>
        <Family />
      </FamilyContext.Provider> */}

      <MemoHook />
    </div>
  );
}

export default App;
