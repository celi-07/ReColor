import Header from "../components/Header"
import WaterMelon from "../assets/icon/ic_watermelon.svg"
import WaterMelonHovered from "../assets/icon/ic_watermelon_hovered.svg"
import InteractiveButton from "../elements/InteractiveButton"
import SectionHome1 from "../components/SectionHome1"

function Home({ width }) {
  const handleImportance = () => {
    console.log("Importance of Recolor")
  }

  return (
    <div className="bg-lightPink">
      <Header 
        width={width}
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
      <SectionHome1 width={width} />
    </div>
  )
}

export default Home
