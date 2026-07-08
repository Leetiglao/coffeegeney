import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
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

  // Group flat items by category, since your DB stores them flat
  const grouped = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  if (loading) return <p className="text-center pt-40">Loading menu...</p>
  if (error) return <p className="text-center pt-40 text-red-600">Error: {error}</p>

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f6f1eb] pt-40 pb-20 px-[10%]">
        <div className="text-center mb-16">
          <p className="text-[#a68a54] font-bold tracking-[3px] mb-3">OUR MENU</p>
          <h1 className="text-5xl font-bold text-[#2d1e17] mb-4">Crafted With Care</h1>
          <p className="text-[#5c4433] max-w-xl mx-auto">
            Every cup and bite made with premium ingredients and a whole lot of love.
          </p>
        </div>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-14">
            <h2 className="text-2xl font-bold text-[#6f4e37] border-b-2 border-[#a68a54] pb-2 mb-8 inline-block">
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold text-[#2d1e17]">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-[#8b6f5c] mt-1">{item.description}</p>
                    )}
                  </div>

                  <span className="text-[#6f4e37] font-bold whitespace-nowrap">
                    {item.price
                      ? `₱${item.price}`
                      : item.sizes
                      ? `₱${item.sizes.small} / ₱${item.sizes.large}`
                      : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Menu