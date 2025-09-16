'use client'

import { useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook into Formspree / API later
    console.log('Submitted:', formData)

    gsap.to('#submit-btn', {
      scale: 0.9,
      yoyo: true,
      repeat: 1,
      duration: 0.2,
      ease: 'power1.inOut',
    })
  }

  return (
    <section
      id="connect"
      className="relative w-screen bg-black py-32 px-6 text-blue-50"
    >
      <div className="flex flex-col items-center">
        <p className="font-general text-sm uppercase tracking-widest">
          Work with CodeCut Studio
        </p>

        <AnimatedTitle
          title="let&#39;s c<b>r</b>eate <br/> s<b>t</b>ories that <br/> d<b>o</b>minate."
          containerClass="special-font !text-5xl md:!text-6xl !font-black mt-5 text-center"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mx-auto mt-16 max-w-3xl rounded-xl border border-white/10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Your Good Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="video-editing">Video Editing</option>
              <option value="content-farm">Content Farm (Clipping)</option>
              <option value="mvp">MVP Development</option>
              <option value="website">Web Development</option>
            </select>
          </div>

          {/* Budget */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            >
              <option value="" disabled>
                Select your budget
              </option>
              <option value="1k-5k">$1K - $5K</option>
              <option value="5k-10k">$5K - $10K</option>
              <option value="10k-50k">$10K - $50K</option>
              <option value="50k-plus">$50K+</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="rounded-md bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10 flex justify-center">
          <button
            id="submit-btn"
            type="submit"
            className="relative overflow-hidden rounded-full bg-[#5542ff] px-10 py-3 text-sm uppercase tracking-wide text-white shadow-lg transition-all"
          >
            <span className="relative z-10">Send it</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
