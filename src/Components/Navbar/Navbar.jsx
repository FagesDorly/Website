import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="#" className="logo">Logo</a>

        <nav className="navbar">
            <a href="#">Accueil</a>
            <a href="#">A propos</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
  )
}

export default Navbar
