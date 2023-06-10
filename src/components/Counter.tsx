import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
//     <button class="increment" onClick={() => "https://google.com"}>
//       Clicks: {OPEN URL}
//     </button>
    <a href="https://purevpndev.fusionauth.io/oauth2/authorize?code_challenge=t6HLer1y0jZDFGGxw6TXBV1U_vJC9rSZjZWd0OR84sY&redirect_uri=puredome%3A%2F%2Fhome&response_type=code&scope=offline_access&state=8745964D&code_challenge_method=S256&client_id=4c339c2d-05e6-47e8-a195-4d4b7ced8cf1" target="_self">
          login without idp
        </a>
  );
}
