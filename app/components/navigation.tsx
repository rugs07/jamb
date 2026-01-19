export default function Navigation() {
  const navItems = ["Fireplaces", "Lighting", "Furniture", "Journal"];

  return (
    <nav className="container-px container-py-sm">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {navItems.map((item, index) => (
          <span key={item} className="flex items-center">
            <a
              href={`#${item.toLowerCase()}`}
              className="font-level-5 hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
            {index < navItems.length - 1 && (
              <span className="mx-2 md:mx-4 font-level-5">|</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
