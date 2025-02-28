import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Shop from "./screens/Shop"
import Community from "./screens/Community"
import Custom from "./screens/Custom"
import { useEffect, useState } from "react"
import Checkout from "./screens/Checkout"

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home width={width} />} />
        <Route path="/shop" element={<Shop width={width} />} />
        <Route path="/community" element={<Community width={width} />} />
        <Route path="/custom" element={<Custom width={width} />} />
        <Route path='/checkout' element={<Checkout width={width} />} />
      </Routes>
    </Router>
  )
}

export default App
