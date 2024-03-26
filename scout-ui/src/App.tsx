import Login from "./pages/Login/Login.tsx";
import Root from "./pages/Root/Root.tsx";

export default function App() {
  let isLoggedIn = false;

  if (sessionStorage.getItem("isLoggedIn")! === "true") {
    isLoggedIn = true;
  }

  return (
    <div>
      {isLoggedIn ? <Root/> : <Login/>}
    </div>
  );
}