import Navbar from '../components/Navbar'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'




function Home() {
  const navigate = useNavigate()
return (
<> <Navbar />

```
  <section className="hero">

    <div className="hero-content">

      <p className="tagline">
        GENE + Y = GENEY
      </p>

      <h1>
        Grants your coffee desires
      </h1>

      <p className="description">
        Experience handcrafted coffee made with passion,
        premium beans, and a cozy atmosphere.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn" onClick={() => navigate('/menu')}>
          View Menu
        </button>

        <button className="secondary-btn" onClick={() => navigate('/reservation')}>
          Book Table
        </button>
      </div>

    </div>

    <div className="hero-image">
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        alt="Coffee"
      />
    </div>

  </section>
</>
)
}

export default Home
