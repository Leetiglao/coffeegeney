import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl px-8 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg z-50 animate-[slideDown_0.6s_ease-out]">
      <Link to="/" className="no-underline">
        <span className="text-2xl font-bold text-[#2d1e17] tracking-tight">
          Coffee <span className="text-[#8b5e3c]">Geney</span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        <Link to="/" className="no-underline text-[#2d1e17] font-medium transition duration-300 hover:text-[#8b5e3c]">
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
      </div>
    </nav>
  )
}

export default Navbar