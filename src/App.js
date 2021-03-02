import Router from "./Router";
import "./App.css";
import "./App.scss";
import ContextRecommended from "./Contexts/ContextRecommended";
function App() {
  return (
    <ContextRecommended>
      <Router />
    </ContextRecommended>
  );
}

export default App;
