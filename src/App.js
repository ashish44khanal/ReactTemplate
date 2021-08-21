import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import './css/master.scss'
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
