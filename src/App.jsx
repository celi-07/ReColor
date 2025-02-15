import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Profile from "./screens/Profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
