import { Link } from "react-router-dom"

const Navbar = ({
  width,
  isHome = false,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  className = '',
  isColumn = false,
}) => {
  return (
    <nav className={`${className}`}>
      {!isHome &&
        <Link to="/" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pl-[50px]' : 'pl-[50px] pr-[50px]'} text-turqoise font-focus text-[16px] hover:opacity-50`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Home</Link>
      }
      <Link to="/shop" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pl-[50px]' : 'pl-[50px] pr-[50px]'} text-turqoise font-focus text-[16px] hover:opacity-50`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Shop</Link>
      <Link to="/community" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pl-[50px]' : 'pl-[50px] pr-[50px]'} text-turqoise font-focus text-[16px] hover:opacity-50`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Community</Link>
      <Link to="/custom" className={`text-turqoise font-focus text-[16px] hover:opacity-50 ${width < 800 ? 'pl-[50px]' : 'pl-[50px] pr-[50px]'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Custom</Link>
    </nav>
  )
}

export default Navbar
