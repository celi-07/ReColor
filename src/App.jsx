import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Shop from "./screens/Shop"
import Community from "./screens/Community"
import Custom from "./screens/Custom"
import { useEffect, useState } from "react"
import Checkout from "./screens/Checkout"
import More from "./screens/More"
import { CheckoutProvider } from "./context/CheckoutContext"

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
    <CheckoutProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home width={width} />} />
          <Route path="/shop" element={<Shop width={width} />} />
          <Route path="/community" element={<Community width={width} />} />
          <Route path="/custom" element={<Custom width={width} />} />
          <Route path='/checkout' element={<Checkout width={width} />} />
          <Route path='/more' element={<More width={width} />} />
        </Routes>
      </Router>
    </CheckoutProvider>
  )
}

export default App
