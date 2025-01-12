import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import Register from "./components/Register/Register";
import PostDetail from "./components/PostDetail/PostDetail";
import AnalyticsPage from "./components/AnalyticsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/main" element={<PostList />}></Route>
          <Route path="/post/:id" element={<PostDetail />}></Route>
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
