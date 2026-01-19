export default function Footer() {
  return (
    <footer className="bg-[#E3E3E3]">
      <div className="container-padding section-block-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 md:gap-12 lg:gap-16 text-sm text-[#555555]">
          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <div>Tel: +44 (0) 207 730 2122</div>
            <div>95-97 Pimlico Rd</div>
            <div>London SW1W 8PH</div>
            <div>hello@jamb.co.uk</div>
          </div>

          {/* Chimneypieces */}
          <div className="flex flex-col gap-2">
            <div className="fl4">Reproduction Chimneypieces</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Marble
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Stone
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Grates & Accessories
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Guide to Jamb Marbles
            </a>
            <div className="fl4 mt-6">Antique Chimneypieces</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              French & Italian
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Georgian
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Regency
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70 mt-2">
              Sell an Antique Chimneypiece
            </a>
          </div>

          {/* Lighting & Furniture */}
          <div className="flex flex-col gap-2">
            <div className="fl4">Reproduction Lighting</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Hanging Globes
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Hanging Lanterns
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Wall Lights
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Dish Lights
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Table Lamps
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Chains & Brackets
            </a>
            <div className="fl4 mt-6">Reproduction Furniture</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Seating
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Tables
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Mirrors
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              The Pantry Collection
            </a>
          </div>

          {/* Antique Furniture & Journal */}
          <div className="flex flex-col gap-2">
            <div className="fl4">Antique Furniture</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Seating
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Tables
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Desks
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Bookcases & Cabinets
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Chests
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Mirrors
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Fire Accessories
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Objects
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Works of Arts
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Lighting
            </a>
            <div className="fl4 mt-6">Journal</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Praesentium
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Voluptatibus
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Accusamus
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Iusto
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Dignissimos
            </a>
          </div>

          {/* About & Newsletter */}
          <div className="flex flex-col gap-2">
            <div className="fl4">About</div>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Founders
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Team
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              History
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Galleries
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Workshops
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Showrooms
            </a>
            <a href="#" className="no-underline text-inherit hover:opacity-70">
              Terms & Conditions
            </a>
            <div className="fl4 mt-6">Newsletter</div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 border border-current bg-transparent px-4 py-2 focus:outline-none focus:ring-1 focus:ring-current"
                />
                <button className="btn-primary">Subscribe</button>
              </div>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input type="checkbox" className="h-4 w-4" />
                <span>I agree to our Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
