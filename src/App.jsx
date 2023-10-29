import "./App.css";
import Chocklates from "./components/Chocklates/Chocklates";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <h1>A factory of chocklate</h1>
      <Header />
      <Chocklates />
    </>
  );
}

export default App;
// let's challenge local storage

// check if already exist in the localStorage or not
// if exist then push item on there or create a new card
// show data initillay after check in local storage
