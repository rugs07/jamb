export default function Footer() {
  return (
    <footer className="bg-[#E3E3E3]">
      <div className="container-padding py-6 lg:py-8 3xl:py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 lg:pb-12 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:gap-16 xl:gap-18 3xl:gap-28">
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
          <div className="w-full lg:w-auto">
            <div className="fl4 mb-3">Newsletter</div>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 lg:w-[400px] bg-white px-4 py-2.5 fl4 placeholder:text-[#999999] focus:outline-none"
              />
              <button className="bg-white text-[#9c9c9c] px-6 py-2.5 fl4 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <label className="flex items-center gap-3 text-[10px] lg:text-[11px] cursor-pointer text-[#999999]">
              <input
                type="checkbox"
                className="h-4 w-4 appearance-none rounded-full border border-[#999999] checked:bg-[#0083a8] checked:border-[#0083a8] focus:outline-none cursor-pointer
    "
              />
              <span className="fl4">I agree to our Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="grid grid-cols-1  lg:grid-cols-5 gap-4 lg:gap-12 pt-4 lg:pt-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 lg:pb-0">
            <div className="fl4 !text-black lg:border-t border-[#9c9c9d] border-t py-2 pt-4 lg:pb-1">
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

            <div className="fl4 !text-black mb-1 md:my-2 pt-2 md:pt-4 lg:border-t border-[#9c9c9d] pb-0 lg:pb-0">
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
              className="fl4 hover:text-[#555555] !text-black mb-1 md:my-2 pt-2 md:pt-4 lg:border-t border-[#9c9c9d] pb-2 lg:pb-0"
            >
              Sell an Antique Chimneypiece
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 pb-2 lg:pb-0">
            <div className="fl4 !text-black mb-1 lg:border-t border-[#9c9c9d] border-t py-2 pt-4 lg:pb-1">
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
          <div className="flex flex-col gap-2 pb-2 lg:pb-0">
            <div className="fl4 !text-black mb-1 border-t border-[#9c9c9d] py-2 pt-4 lg:pb-1">
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

            <div className="fl4 !text-black mb-1 md:my-2 pt-2 md:pt-4 lg:border-t border-[#9c9c9d] pb-2 lg:pb-1">
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
          <div className="flex flex-col gap-2 pb-2 lg:pb-0">
            <div className="fl4 !text-black mb-1 border-[#9c9c9d] border-t py-2 pt-4 lg:pb-1">
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
            <div className="fl4 !text-black mb-1 border-t border-[#9c9c9d] py-2 pt-4 lg:pb-1">
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
