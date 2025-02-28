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
        <Link to="/" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pr-[50px]' : 'pr-[100px]'} text-turqoise font-focus text-[16px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Home</Link>
      }
      <Link to="/shop" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pr-[50px]' : 'pr-[100px]'} text-turqoise font-focus text-[16px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Shop</Link>
      <Link to="/community" className={`${isColumn ? 'pb-1' : ''} ${width < 800 ? 'pr-[50px]' : 'pr-[100px]'} text-turqoise font-focus text-[16px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Community</Link>
      <Link to="/custom" className="text-turqoise font-focus text-[16px]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Custom</Link>
    </nav>
  )
}

export default Navbar
