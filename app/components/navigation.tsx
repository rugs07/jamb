export default function Navigation() {
  const navItems = ["Fireplaces", "Lighting", "Furniture", "Journal"];

  return (
    <nav className="container-padding section-y-sm">
      <div className="nav fl5">
        {navItems.map((item, index) => (
          <span key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-item">
              {item}
            </a>
            {index < navItems.length - 1 && <span className="nav-sep">|</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
