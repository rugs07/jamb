export default function Footer() {
  return (
    <footer className="bg-beige">
      <div className="container-padding section-y-lg">
        <div className="footer-grid">
          {/* Contact Info */}
          <div className="stack fl5">
            <div>Tel: +44 (0) 207 730 2122</div>
            <div>95-97 Pimlico Rd</div>
            <div>London SW1W 8PH</div>
            <div>hello@jamb.co.uk</div>
          </div>

          {/* Chimneypieces */}
          <div className="stack">
            <div className="fl4">Reproduction Chimneypieces</div>
            <a href="#" className="fl5 nav-item">
              Marble
            </a>
            <a href="#" className="fl5 nav-item">
              Stone
            </a>
            <a href="#" className="fl5 nav-item">
              Grates & Accessories
            </a>
            <a href="#" className="fl5 nav-item">
              Guide to Jamb Marbles
            </a>
            <div className="fl4 mt-24">Antique Chimneypieces</div>
            <a href="#" className="fl5 nav-item">
              French & Italian
            </a>
            <a href="#" className="fl5 nav-item">
              Georgian
            </a>
            <a href="#" className="fl5 nav-item">
              Regency
            </a>
            <a href="#" className="fl5 nav-item mt-8">
              Sell an Antique Chimneypiece
            </a>
          </div>

          {/* Lighting & Furniture */}
          <div className="stack">
            <div className="fl4">Reproduction Lighting</div>
            <a href="#" className="fl5 nav-item">
              Hanging Globes
            </a>
            <a href="#" className="fl5 nav-item">
              Hanging Lanterns
            </a>
            <a href="#" className="fl5 nav-item">
              Wall Lights
            </a>
            <a href="#" className="fl5 nav-item">
              Dish Lights
            </a>
            <a href="#" className="fl5 nav-item">
              Table Lamps
            </a>
            <a href="#" className="fl5 nav-item">
              Chains & Brackets
            </a>
            <div className="fl4 mt-24">Reproduction Furniture</div>
            <a href="#" className="fl5 nav-item">
              Seating
            </a>
            <a href="#" className="fl5 nav-item">
              Tables
            </a>
            <a href="#" className="fl5 nav-item">
              Mirrors
            </a>
            <a href="#" className="fl5 nav-item">
              The Pantry Collection
            </a>
          </div>

          {/* Antique Furniture & Journal */}
          <div className="stack">
            <div className="fl4">Antique Furniture</div>
            <a href="#" className="fl5 nav-item">
              Seating
            </a>
            <a href="#" className="fl5 nav-item">
              Tables
            </a>
            <a href="#" className="fl5 nav-item">
              Desks
            </a>
            <a href="#" className="fl5 nav-item">
              Bookcases & Cabinets
            </a>
            <a href="#" className="fl5 nav-item">
              Chests
            </a>
            <a href="#" className="fl5 nav-item">
              Mirrors
            </a>
            <a href="#" className="fl5 nav-item">
              Fire Accessories
            </a>
            <a href="#" className="fl5 nav-item">
              Objects
            </a>
            <a href="#" className="fl5 nav-item">
              Works of Arts
            </a>
            <a href="#" className="fl5 nav-item">
              Lighting
            </a>
            <div className="fl4 mt-24">Journal</div>
            <a href="#" className="fl5 nav-item">
              Praesentium
            </a>
            <a href="#" className="fl5 nav-item">
              Voluptatibus
            </a>
            <a href="#" className="fl5 nav-item">
              Accusamus
            </a>
            <a href="#" className="fl5 nav-item">
              Iusto
            </a>
            <a href="#" className="fl5 nav-item">
              Dignissimos
            </a>
          </div>

          {/* About & Newsletter */}
          <div className="stack">
            <div className="fl4">About</div>
            <a href="#" className="fl5 nav-item">
              Founders
            </a>
            <a href="#" className="fl5 nav-item">
              Team
            </a>
            <a href="#" className="fl5 nav-item">
              History
            </a>
            <a href="#" className="fl5 nav-item">
              Galleries
            </a>
            <a href="#" className="fl5 nav-item">
              Workshops
            </a>
            <a href="#" className="fl5 nav-item">
              Showrooms
            </a>
            <a href="#" className="fl5 nav-item">
              Terms & Conditions
            </a>
            <div className="fl4 mt-24">Newsletter</div>
            <div className="stack-sm">
              <div className="footer-input-row">
                <input
                  type="text"
                  placeholder="Search"
                  className="footer-input fl5"
                />
                <button className="btn-primary-compact nowrap">Subscribe</button>
              </div>
              <label className="footer-consent fl6">
                <input type="checkbox" className="checkbox" />
                <span>I agree to our Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
