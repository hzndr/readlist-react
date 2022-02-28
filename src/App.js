import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Readlist from "./components/Readlist";
import Read from "./components/Read";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Readlist />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/read" element={<Read />}></Route>
          </Routes>
        </main>
      </Router>
    </GlobalProvider>
  );
}

export default App;
