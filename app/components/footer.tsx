export default function Footer() {
  return (
    <footer className="bg-[#E3E3E3]">
      <div className="container-padding py-6 md:py-8 3xl:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 md:pb-12 border-b border-[#C5C5C5] gap-8">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-18 3xl:gap-28">
            <div className="flex flex-col gap-1 fl4">
              <div>Tel: +44 (0) 207 730 2122</div>
              <div>95-97 Pimlico Rd</div>
              <div>London SW1W 8PH</div>
            </div>

            {/* Email */}
            <div className="fl4">
              <div>hello@jamb.co.uk</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <div className="fl4 mb-3">Newsletter</div>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 md:w-[200px] lg:w-[250px] bg-white px-4 py-2.5 fl4 placeholder:text-[#999999] focus:outline-none"
              />
              <button className="bg-white text-[#9c9c9c] px-6 py-2.5 fl4 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <label className="flex items-center gap-3 text-[10px] md:text-[11px] cursor-pointer text-[#999999]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-full"
              />
              <span className="fl4">I agree to our Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 pt-8 md:pt-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 pb-8 md:pb-0">
            <div className="fl4 !text-black mb-1 pt-0 md:pt-0 border-t border-[#C5C5C5] md:border-t-0 pb-4 md:pb-1">
              Reproduction Chimneypieces
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Marble
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Stone
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Grates & Accessories
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Guide to Jamb Marbles
            </a>

            <div className="fl4 !text-black mt-6 mb-1 pt-4 border-t border-[#C5C5C5] pb-4 md:pb-1">
              Antique Chimneypieces
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              French & Italian
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Georgian
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Regency
            </a>

            <a
              href="#"
              className="fl4 hover:text-[#555555] !text-black mt-6 pt-4 border-t border-[#C5C5C5] pb-4 md:pb-0"
            >
              Sell an Antique Chimneypiece
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 pb-8 md:pb-0">
            <div className="fl4 !text-black mb-1 pt-0 md:pt-0 border-t border-[#C5C5C5] md:border-t-0 pb-4 md:pb-1">
              Reproduction Lighting
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Hanging Globes
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Hanging Lanterns
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Wall Lights
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Dish Lights
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Table Lamps
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Chains & Brackets
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 pb-8 md:pb-0">
            <div className="fl4 !text-black mb-1 pt-0 md:pt-0 border-t border-[#C5C5C5] md:border-t-0 pb-4 md:pb-1">
              Reproduction Furniture
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Seating
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Tables
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Mirrors
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              The Pantry Collection
            </a>

            <div className="fl4 !text-black mt-6 mb-1 pt-4 border-t border-[#C5C5C5] pb-4 md:pb-1">
              Antique Furniture
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Seating
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Tables
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Desks
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Bookcases & Cabinets
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Chests
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Mirrors
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Fire Accessories
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Objects
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Works of Arts
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Lighting
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-2 pb-8 md:pb-0">
            <div className="fl4 !text-black mb-1 pt-0 md:pt-0 border-t border-[#C5C5C5] md:border-t-0 pb-4 md:pb-1">
              Journal
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Praesentium
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Voluptatibus
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Accusamus
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Iusto
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Dignissimos
            </a>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-2">
            <div className="fl4 !text-black mb-1 pt-0 md:pt-0 border-t border-[#C5C5C5] md:border-t-0 pb-4 md:pb-1">
              About
            </div>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Founders
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Team
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              History
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Galleries
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Workshops
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Showrooms
            </a>
            <a href="#" className="fl4 hover:text-[#555555] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}