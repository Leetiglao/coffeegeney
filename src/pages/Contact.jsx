import { useState } from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f6f1eb] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-[10%]">
        <div className="text-center mb-10 md:mb-14 animate-[fadeInUp_0.6s_ease-out]">
          <p className="text-[#a68a54] font-bold tracking-[3px] mb-3 text-sm md:text-base">GET IN TOUCH</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2d1e17] mb-4">Contact Us</h1>
          <p className="text-[#5c4433] max-w-md mx-auto text-sm md:text-base">
            Questions, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 animate-[fadeInUp_0.7s_ease-out]">
            <h2 className="text-xl md:text-2xl font-bold text-[#2d1e17] mb-6">Visit Us</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-[#2d1e17]">Address</p>
                  <p className="text-[#5c4433] text-sm">123 Coffee Street, Quezon City, PH</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-semibold text-[#2d1e17]">Hours</p>
                  <p className="text-[#5c4433] text-sm">Mon–Sun: 7:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-[#2d1e17]">Phone</p>
                  <p className="text-[#5c4433] text-sm">+63 900 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-[#2d1e17]">Email</p>
                  <p className="text-[#5c4433] text-sm">hello@coffeegeney.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 animate-[fadeInUp_0.9s_ease-out]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d1e17] mb-2">Message sent!</h3>
                <p className="text-[#5c4433] mb-6 text-sm md:text-base">We'll get back to you as soon as we can.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="bg-[#6f4e37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5c3f2c] transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#2d1e17] mb-2">Full Name</label>
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

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#2d1e17] mb-2">Email</label>
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

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#2d1e17] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-[#e5dcd0] focus:outline-none focus:ring-2 focus:ring-[#a68a54] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6f4e37] text-white py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#5c3f2c] transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact