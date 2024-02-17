import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import Home from "./components/Home";

import NewArrival from "./components/NewArrival";
import Banner from "./components/Banner";
import BestSelling from "./components/BestSelling";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <Home />
                <NewArrival />
                <Banner />
                <BestSelling />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
