import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>S P A C E</span><span className="highlight"> Y</span>
      </div>
      <ul className="nav-links">
        <li>Services</li>
        <li>Blog</li>
        <li>Shop Now</li>
      </ul>
    </nav>
  );
};

export default Navbar;
