import "./styles.css";
import Counter from "./Component/Count";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        increment
      </button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}
