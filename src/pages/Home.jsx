import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const featured = [
  { name: 'Caramel Macchiato', desc: 'Espresso, milk, vanilla, caramel drizzle', price: '₱140' },
  { name: 'Spanish Latte', desc: 'Bold espresso with creamy condensed milk', price: '₱140' },
  { name: 'Butter Croissant', desc: 'Flaky, buttery, baked fresh daily', price: '₱90' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-[10%] pt-40 pb-20 bg-[#f6f1eb]">
        <div className="flex-1 animate-[fadeInUp_0.8s_ease-out]">
          <p className="text-[#8b5e3c] font-bold tracking-[3px] mb-4">GENE + Y = GENEY</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d1e17] leading-tight mb-6">
            Grants your <span className="text-[#a68a54]">coffee</span> desires
          </h1>
          <p className="text-[#5c4433] text-lg max-w-md mb-8 leading-relaxed">
            Experience handcrafted coffee made with passion, premium beans, and a cozy atmosphere.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/menu')}
              className="bg-[#6f4e37] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5c3f2c] transition"
            >
              View Menu
            </button>
            <button
              onClick={() => navigate('/reservation')}
              className="border-2 border-[#6f4e37] text-[#6f4e37] px-8 py-3 rounded-full font-medium hover:bg-[#6f4e37] hover:text-white transition"
            >
              Book Table
            </button>
          </div>
        </div>

        <div className="flex-1 animate-[fadeInUp_1s_ease-out]">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Coffee"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="px-[10%] py-24 bg-white flex flex-col md:flex-row items-center gap-16">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          alt="Coffee shop interior"
          className="flex-1 rounded-3xl shadow-lg w-full max-w-md object-cover"
        />
        <div className="flex-1">
          <p className="text-[#8b5e3c] font-bold tracking-[3px] mb-3">OUR STORY</p>
          <h2 className="text-4xl font-bold text-[#2d1e17] mb-5">More than just coffee</h2>
          <p className="text-[#5c4433] leading-relaxed mb-6">
            Coffee Geney started with one goal — bring genuinely great coffee and a warm space
            to the neighborhood. Every cup is brewed with locally-sourced beans and a whole lot of care.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="text-[#6f4e37] font-semibold underline underline-offset-4 hover:text-[#a68a54] transition"
          >
            Read our story →
          </button>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="px-[10%] py-24 bg-[#f6f1eb]">
        <div className="text-center mb-14">
          <p className="text-[#8b5e3c] font-bold tracking-[3px] mb-3">CUSTOMER FAVORITES</p>
          <h2 className="text-4xl font-bold text-[#2d1e17]">Fan Favorites</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-bold text-[#2d1e17] mb-2">{item.name}</h3>
              <p className="text-[#8b6f5c] text-sm mb-4">{item.desc}</p>
              <span className="text-[#6f4e37] font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/menu')}
            className="bg-[#6f4e37] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5c3f2c] transition"
          >
            See Full Menu
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[10%] py-20 bg-[#2d1e17] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to grab a cup?
        </h2>
        <p className="text-[#d9c7b8] mb-8">Open daily 7AM – 6PM. Reserve your table today.</p>
        <button
          onClick={() => navigate('/reservation')}
          className="bg-[#a68a54] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8b5e3c] transition"
        >
          Book a Table
        </button>
      </section>
    </>
  )
}

export default Home