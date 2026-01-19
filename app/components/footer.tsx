export default function Footer() {
  return (
    <footer className="bg-beige">
      <div className="container-px container-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="font-level-5">Tel: +44 (0) 207 730 2122</div>
            <div className="font-level-5">95-97 Pimlico Rd</div>
            <div className="font-level-5">London SW1W 8PH</div>
            <div className="font-level-5">hello@jamb.co.uk</div>
          </div>

          {/* Chimneypieces */}
          <div className="flex flex-col gap-4">
            <div className="font-level-4 mb-2">Reproduction Chimneypieces</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Marble
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Stone
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Grates & Accessories
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Guide to Jamb Marbles
            </a>
            <div className="font-level-4 mt-4 mb-2">Antique Chimneypieces</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              French & Italian
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Georgian
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Regency
            </a>
            <a href="#" className="font-level-5 hover:opacity-70 mt-2">
              Sell an Antique Chimneypiece
            </a>
          </div>

          {/* Lighting & Furniture */}
          <div className="flex flex-col gap-4">
            <div className="font-level-4 mb-2">Reproduction Lighting</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Hanging Globes
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Hanging Lanterns
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Wall Lights
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Dish Lights
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Table Lamps
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Chains & Brackets
            </a>
            <div className="font-level-4 mt-4 mb-2">Reproduction Furniture</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Seating
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Tables
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Mirrors
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              The Pantry Collection
            </a>
          </div>

          {/* Antique Furniture & Journal */}
          <div className="flex flex-col gap-4">
            <div className="font-level-4 mb-2">Antique Furniture</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Seating
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Tables
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Desks
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Bookcases & Cabinets
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Chests
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Mirrors
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Fire Accessories
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Objects
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Works of Arts
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Lighting
            </a>
            <div className="font-level-4 mt-4 mb-2">Journal</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Praesentium
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Voluptatibus
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Accusamus
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Iusto
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Dignissimos
            </a>
          </div>

          {/* About & Newsletter */}
          <div className="flex flex-col gap-4">
            <div className="font-level-4 mb-2">About</div>
            <a href="#" className="font-level-5 hover:opacity-70">
              Founders
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Team
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              History
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Galleries
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Workshops
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Showrooms
            </a>
            <a href="#" className="font-level-5 hover:opacity-70">
              Terms & Conditions
            </a>
            <div className="font-level-4 mt-4 mb-2">Newsletter</div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 border border-current bg-transparent font-level-5 focus:outline-none focus:ring-1 focus:ring-current"
                />
                <button className="btn-primary px-6 whitespace-nowrap">Subscribe</button>
              </div>
              <label className="flex items-center gap-2 font-level-6 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span>I agree to our Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
