import { useState, useEffect } from "react";
import Loader from "./assets/loader";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000);
  }, []);
  return (
    <>
      <Header/>
      <Home />
        {loading && (
          <div className="loading-section">
            <Loader/>
          </div>
        )}
    </>
  );
}

export default App;
