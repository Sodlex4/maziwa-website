import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
        <h2>Maziwa Dairy</h2>
      </div>

      <nav>
        <a href="#">Home</a>
      </nav>

      <a href="https://wa.me/254719842212" className="nav-btn">
        <i className="fab fa-whatsapp"></i> WhatsApp
      </a>
    </header>
  )
}
