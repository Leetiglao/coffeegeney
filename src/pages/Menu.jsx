import Navbar from '../components/Navbar'

const menuItems = [
  { category: 'Coffee', items: [
    { name: 'Espresso', desc: 'Rich and bold single shot', price: '₱120' },
    { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam', price: '₱150' },
    { name: 'Caramel Macchiato', desc: 'Vanilla, milk, espresso, caramel drizzle', price: '₱170' },
    { name: 'Cafe Latte', desc: 'Smooth espresso with steamed milk', price: '₱160' },
  ]},
  { category: 'Pastries', items: [
    { name: 'Butter Croissant', desc: 'Flaky, buttery, baked fresh daily', price: '₱90' },
    { name: 'Chocolate Muffin', desc: 'Moist muffin with dark chocolate chips', price: '₱110' },
    { name: 'Cinnamon Roll', desc: 'Warm roll with cream cheese glaze', price: '₱130' },
  ]},
]

function Menu() {
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

        {menuItems.map((section) => (
          <div key={section.category} className="mb-14">
            <h2 className="text-2xl font-bold text-[#6f4e37] border-b-2 border-[#a68a54] pb-2 mb-8 inline-block">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold text-[#2d1e17]">{item.name}</h3>
                    <p className="text-sm text-[#8b6f5c] mt-1">{item.desc}</p>
                  </div>
                  <span className="text-[#6f4e37] font-bold whitespace-nowrap">{item.price}</span>
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