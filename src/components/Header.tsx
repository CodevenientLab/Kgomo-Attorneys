import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="brand">
        <img src="/logo.png" alt="Kgomo Attorneys Inc logo" />
      </div>
      <nav>
        <a href="#standing">The Firm</a>
        <a href="#docket">Practice Areas</a>
        <a href="#team">The Team</a>
        <a href="#contact" className="nav-cta">
          Book a Consult
        </a>
      </nav>
    </header>
  )
}
