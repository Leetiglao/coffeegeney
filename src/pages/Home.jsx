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
            src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/625003964_1503213191813838_6246052779838316595_n.jpg?stp=dst-jpg_tt6&cstp=mx1640x924&ctp=s1640x924&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGGA7MLSp2FEbZIHw16qY0TVwrbgPC5DehXCtuA8LkN6Ib62eLTOLWR-1HPsK5LnUiG567EG8KW35T4k2_YaBQd&_nc_ohc=V-O1VTBL698Q7kNvwEXMIXZ&_nc_oc=AdolESFICD3pICCajyEk8u3yTeTfQpb8pIAumHezCGHOIAXeOmamMoonhL4nXOY3qcU&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=CLzQfIcCFiyBSV44To5j1w&_nc_ss=7b2a8&oh=00_AQBj17ScHJJq6uJe6Skhjx3OzwRhq-piAn31sro1inampg&oe=6A54AF41"
            alt="Coffee"
            className="w-200  rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="px-[10%] py-24 bg-white flex flex-col md:flex-row items-center gap-16">
        <img
          src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/499972236_1271018618366631_4302065422726417738_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHCYMsZsfN9ffU3LftPFCiuCK0P_rb7X3kIrQ_-tvtfeVIpl31Kqohz-3ji5n-nzYj6ojM6qg4GeR-9aFgDGlkg&_nc_ohc=9yObf36iZYIQ7kNvwEnZQwt&_nc_oc=AdrAmiOVw_XolPOsAE7kkJplwRNeKw9nG2sQTbbnRX9JFzp9xy8ALkS9Dan9KUS9ANI&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=YVqQmyCcOrK1UEIkqKaukw&_nc_ss=7b2a8&oh=00_AQASn0NQxScM_KkrSNlL-L4ii0lTJEwOTwQkSeqRx93jIA&oe=6A55129E"
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