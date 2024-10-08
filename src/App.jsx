import "./App.css";
import { signal } from "@preact/signals-react";

const numbers = signal([1, 2, 3, 4, 5]);
const count = signal(0);
function App() {
   return (
      <>
         <button
            onClick={() => {
               numbers.value = [...numbers.value, numbers.value.length + 1];
               count.value = count.value + 1;
            }}
         >
            count:{count} <br />
            count.value:{count.value}
         </button>

         {numbers.value.map((i) => (
            <div key={i}>{i}</div>
         ))}
      </>
   );
}

export default App;
