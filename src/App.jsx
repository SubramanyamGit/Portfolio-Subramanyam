import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="bg-dark text-slateLight min-h-screen font-sans scroll-smooth">
        <Home />
      </div>
    </Router>
  );
}

export default App;
