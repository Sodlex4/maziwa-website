import { useEffect, useState } from 'react'

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 20
      const y = ((e.clientY / window.innerHeight) - 0.5) * 20
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          backgroundImage: `url(${import.meta.env.BASE_URL}images/milk-lorry.png)`,
        }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className={`hero-text ${visible ? 'fade-in' : ''}`}>
          <div className="hero-badge">Farm Fresh</div>
          <h1>Fresh Milk<br />Delivered Every Day</h1>
          <p>
            We collect, transport and deliver fresh quality milk
            directly from trusted dairy farmers across Kenya.
          </p>
          <div className="buttons">
            <a href="https://wa.me/254719842212" className="btn">
              <i className="fab fa-whatsapp"></i>
              Order Now
            </a>
          </div>
          <a href="mailto:roswaklogisticslimited@gmail.com" className="hero-contact">
            <i className="far fa-envelope"></i>
            roswaklogisticslimited@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
