import { Outlet } from "react-router-dom";

function App() {

  return (
    <main>
      <Outlet />
      <div className="Bg__circle one"/>
      <div className="Bg__circle two"/>
    </main>
  );
}

export default App;
