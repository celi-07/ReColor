import Header from "../components/Header"
import WaterMelon from "../assets/icon/ic_watermelon.svg"
import WaterMelonHovered from "../assets/icon/ic_watermelon_hovered.svg"
import InteractiveButton from "../elements/InteractiveButton"
import SectionHome1 from "../components/SectionHome1"
import SectionHome2 from "../components/SectionHome2"
import SectionHome3 from "../components/SectionHome3"
import SectionHome4 from "../components/SectionHome4"
import SectionHome5 from "../components/SectionHome5"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

const Home = ({ width }) => {
  const navigate = useNavigate()
  
  const handleImportance = () => {
    const section = document.getElementById("section1")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleArrowDown = () => {
    const section = document.getElementById("section1")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnHow = () => {
    const section = document.getElementById("section3")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="bg-lightPink">
      <Header 
        width={width}
        isHome={true}
        imgHover={WaterMelonHovered}
        imgNotHover={WaterMelon}
        title={(
          <h1 className=
            {`
              font-maurenTrial text-turqoise
              ${width < 500 ? 'text-[20px]' : width < 700 ? 'text-[40px]' : width < 768 ? 'text-[56px]' : width < 1150 ? 'text-[64px]' : width < 1300 ? 'text-[80px]' : 'text-[112px]'}
            `}
          >
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
          </h1>
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
            className={width < 650 ? 'w-[240px] bg-turqoise' : 'w-[360px] bg-turqoise'}
            textStyle={width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'}
          />
        )}
        handleArrowDown={handleArrowDown}
      />
      <SectionHome1 width={width} />
      <SectionHome2 width={width} handleLearnHow={handleLearnHow} />
      <SectionHome3 width={width} handleCheckout={handleCheckout} />
      <SectionHome4 width={width} />
      <SectionHome5 width={width} />
      <Footer width={width} />
    </div>
  )
}

export default Home
