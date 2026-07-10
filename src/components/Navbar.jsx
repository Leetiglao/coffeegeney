import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl px-6 md:px-8 py-4 bg-white/90 backdrop-blur-md rounded-3xl md:rounded-full shadow-lg z-50 animate-[slideDown_0.6s_ease-out]">
      <div className="flex justify-between items-center">
        <Link to="/" className="no-underline">
          <span className="text-xl md:text-2xl font-bold text-[#2d1e17] tracking-tight">
            Coffee <span className="text-[#8b5e3c]">Geney</span>
          </span>
        </Link>

        {/* Desktop links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="no-underline text-[#2d1e17] font-medium hover:text-[#8b5e3c] transition">Home</Link>
          <Link to="/menu" className="no-underline text-[#2d1e17] font-medium hover:text-[#8b5e3c] transition">Menu</Link>
          <Link to="/about" className="no-underline text-[#2d1e17] font-medium hover:text-[#8b5e3c] transition">About</Link>
          <Link to="/contact" className="no-underline text-[#2d1e17] font-medium hover:text-[#8b5e3c] transition">Contact</Link>
          <button
            onClick={() => navigate('/reservation')}
            className="bg-[#6f4e37] text-white px-5 py-2 rounded-full hover:bg-[#5c3f2c] transition"
          >
            Book Table
          </button>
        </div>

        {/* Hamburger button - only shows on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 bg-[#2d1e17] transition ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#2d1e17] transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#2d1e17] transition ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="no-underline text-[#2d1e17] font-medium">Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)} className="no-underline text-[#2d1e17] font-medium">Menu</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="no-underline text-[#2d1e17] font-medium">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="no-underline text-[#2d1e17] font-medium">Contact</Link>
          <button
            onClick={() => { setMenuOpen(false); navigate('/reservation') }}
            className="bg-[#6f4e37] text-white px-5 py-2 rounded-full"
          >
            Book Table
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar