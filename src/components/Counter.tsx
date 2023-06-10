import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
//     <button class="increment" onClick={() => "https://google.com"}>
//       Clicks: {OPEN URL}
//     </button>
    <a href="https://google.com" target="_self">
          start.solidjs.com
        </a>
  );
}
