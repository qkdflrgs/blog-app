import { Link } from "react-router-dom";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/posts">Post Link</Link>
        </li>
        <li>
          <Link to="/posts/:id">Post Detail</Link>
        </li>
        <li>
          <Link to="/posts/new">Post New</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/posts" element={<h1>Post List</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail</h1>} />
        <Route path="/posts/new" element={<h1>Post New</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
