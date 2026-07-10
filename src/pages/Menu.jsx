import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import MenuSidebar from '../components/MenuSidebar'

function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('')

  const sectionRefs = useRef({})

  useEffect(() => {
    fetch('https://coffeegeney-api.onrender.com/api/menu')
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const grouped = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  const handleSelect = (cat) => {
    setActiveCategory(cat)
    sectionRefs.current[cat]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (loading) return <p className="text-center pt-40">Loading menu...</p>
  if (error) return <p className="text-center pt-40 text-red-600">Error: {error}</p>

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f6f1eb] pt-40 pb-20 px-[8%]">
        <div className="text-center mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <p className="text-[#a68a54] font-bold tracking-[3px] mb-3">OUR MENU</p>
          <h1 className="text-5xl font-bold text-[#2d1e17] mb-4">Crafted With Care</h1>
          <p className="text-[#5c4433] max-w-xl mx-auto">
            Every cup and bite made with premium ingredients and a whole lot of love.
          </p>
        </div>

        <div className="flex gap-10 items-start max-w-6xl mx-auto">
          <MenuSidebar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={handleSelect}
          />

          <div className="flex-1">
            {Object.entries(grouped).map(([category, items]) => (
              <div
                key={category}
                ref={(el) => (sectionRefs.current[category] = el)}
                className="mb-14 scroll-mt-32 animate-[fadeInUp_0.6s_ease-out]"
              >
                <h2 className="text-2xl font-bold text-[#6f4e37] border-b-2 border-[#a68a54] pb-2 mb-8 inline-block">
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <div
                    key={item._id}
                    className="flex flex-col bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-[3/4] rounded-lg object-cover mb-4"
                      />
                    )}

                    <h3 className="text-xl font-semibold text-[#2d1e17]">{item.name}</h3>

                    <span className="text-[#6f4e37] font-bold text-lg mt-1">
                      {item.price
                        ? `₱${item.price}`
                        : item.sizes
                        ? `₱${item.sizes.small} / ₱${item.sizes.large}`
                        : ''}
                    </span>

                    {item.description && (
                      <p className="text-sm text-[#8b6f5c] mt-2">{item.description}</p>
                    )}
                  </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu