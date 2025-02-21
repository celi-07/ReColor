import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Shop from "./screens/Shop"
import Community from "./screens/Community"
import Custom from "./screens/Custom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/community" element={<Community />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
