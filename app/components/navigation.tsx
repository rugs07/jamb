export default function Navigation() {
  const navItems = ["Fireplaces", "Lighting", "Furniture", "Journal"];

  return (
    <nav className="container-padding section-block-top">
      <div className="flex flex-wrap items-center justify-center gap-3 text-base sm:text-lg">
        {navItems.map((item, index) => (
          <span key={item} className="flex items-center gap-3">
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#9C9C9D] transition-opacity hover:text-black"
            >
              {item}
            </a>
            {index < navItems.length - 1 && <span className="opacity-70">|</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
