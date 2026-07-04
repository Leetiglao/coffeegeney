import { Link } from 'react-router-dom'
import logo from '../assets/coffeegeneylogo.jpg'

function Navbar() {
  return (
    <nav className="w-full px-[15%] py-[25px] flex justify-between items-center absolute top-0 left-0">
      <img className="h-[100px] rounded-full ml-0 " src={logo} alt="Logo" />

      <div className="flex gap-[30px]">
        <Link to="/" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c] mr-8">
          Home
        </Link>
        <Link to="/menu" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c]">
          Menu
        </Link>
        <Link to="/about" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c]">
          About
        </Link>
        <Link to="/contact" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c]">
          Contact
        </Link>
        <Link to="/reservation" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c]">
          Reservation
        </Link>
      </div>
    </nav>
  )
}

export default Navbar