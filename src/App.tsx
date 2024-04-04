import Router from "components/Router";
import { app } from "firebaseApp";
import { useState } from "react";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  return (
    <>
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
