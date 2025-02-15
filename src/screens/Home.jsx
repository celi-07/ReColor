import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function Home() {
  const navigate = useNavigate()

  const handleGoToProfile = () => {
    navigate("/profile", { state: { name: "John Doe", age: 25 } })
  }

  return (
    <div>
      <Header />
      <button onClick={handleGoToProfile}>Go to John's Profile</button>
    </div>
  )
}

export default Home
