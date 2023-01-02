import "./App.css";
// components
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import Profile from "./components/Profile";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main className="column">
      <h1>AUTH0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Profile />
          <LoginBtn />
          <LogoutBtn />
        </>
      )}
    </main>
  );
}

export default App;
