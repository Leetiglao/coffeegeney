import { useState } from 'react'
import Navbar from '../components/Navbar'

function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: replace with fetch POST to your backend once /api/reservations exists
    console.log('Reservation submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center bg-[#f6f1eb] px-[10%]">
          <div className="text-center bg-white rounded-3xl shadow-lg p-12 max-w-md animate-[fadeInUp_0.6s_ease-out]">
            <div className="text-5xl mb-4">☕</div>
            <h1 className="text-3xl font-bold text-[#2d1e17] mb-3">You're all set!</h1>
            <p className="text-[#5c4433] mb-6">
              We've received your reservation for {form.guests} {form.guests === '1' ? 'guest' : 'guests'} on{' '}
              {form.date} at {form.time}. We'll see you soon!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#6f4e37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5c3f2c] transition"
            >
              Book Another Table
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f6f1eb] pt-40 pb-20 px-[10%]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <p className="text-[#a68a54] font-bold tracking-[3px] mb-3">RESERVATION</p>
            <h1 className="text-5xl font-bold text-[#2d1e17] mb-4">Book Your Table</h1>
            <p className="text-[#5c4433] max-w-md mx-auto">
              Secure your spot at Coffee Geney — we'll have it ready for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-10 animate-[fadeInUp_0.8s_ease-out]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                Number of Guests
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#2d1e17] mb-2">
                Special Requests <span className="text-[#8b6f5c] font-normal">(optional)</span>
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Window seat, celebrating a birthday, etc."
                className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6f4e37] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#5c3f2c] transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservation