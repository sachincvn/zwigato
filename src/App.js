import Home from "./pages/Home";
import {BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
