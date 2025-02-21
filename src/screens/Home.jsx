import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import WaterMelon from "../assets/icon/ic_watermelon.svg"
import WaterMelonHovered from "../assets/icon/ic_watermelon_hovered.svg"
import InteractiveButton from "../elements/InteractiveButton"
import { useEffect, useState } from "react"

function Home() {
  const [width, setWidth] = useState(window.innerWidth)

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleGoToProfile = () => {
    navigate("/profile", { state: { name: "John Doe", age: 25 } })
  }

  const handleImportance = () => {
    console.log("Importance of Recolor")
  }

  return (
    <div className="bg-lightPink">
      <Header 
        isHome={true}
        imgHover={WaterMelonHovered}
        imgNotHover={WaterMelon}
        title={(
          <>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span> </span>
            <span className="underline">N</span>
            <span className="underline decoration-orange">A</span>
            <span className="underline decoration-blue">T</span>
            <span className="underline">U</span>
            <span className="underline decoration-orange">R</span>
            <span className="underline decoration-blue">A</span>
            <span className="underline">L</span>
            <span> </span>
            <span>D</span>
            <span className="text-orange">Y</span>
            <span className="text-blue">E</span>
            <span>S</span>
          </>
        )}
        subtitle={(
          <>
            <span>FROM YOUR DAILY </span>
            <span className="text-orange">FOOD </span>
            <span className="text-blue">WASTE</span>
          </>
        )}
        text="Welcome to ReColor, your go-to destination for biodegradable natural dyes crafted from food waste! Our mission is to inspire creativity while championing sustainability, offering a vibrant selection of eco-friendly dyes derived from everyday kitchen scraps. At ReColor, you'll find easy-to-follow guides, tips for using our skin-safe dyes, and a community passionate about transforming waste into beautiful, artistic expressions. Join us in making a positive impact on the planet, one color at a time!"
        child={(
          <InteractiveButton
            handlePress={handleImportance}
            text='SEE THE IMPORTANCE OF NATURAL DYES'
            className={width < 650 ? 'w-[240px]' : 'w-[360px]'}
            textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
          />
        )}
      />
      <button className="bg-slate-600 w-full" onClick={handleGoToProfile}>Go to John's Profile</button>
    </div>
  )
}

export default Home
