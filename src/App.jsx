import "./App.css";
import { signal } from "@preact/signals-react";

const count = signal(0);
function App() {
   return (
      <>
         <button onClick={() => count.value++}>count is {count.value}</button>
      </>
   );
}

export default App;
