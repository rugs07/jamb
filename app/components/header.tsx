export default function Header() {
  return (
    <header className="container-padding py-8 flex items-center justify-between">
      <div className="">
        <img src="/landing/jamb-logo.png" alt="" className="w-20 md:w-auto" />
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <button aria-label="Search">
         <img src="/global/search.png" alt="" className="w-6 md:w-auto" />
        </button>
        <button aria-label="Contact">
          <img src="/global/msg.png" alt="" className="w-6 md:w-auto" />
        </button>
        <button aria-label="Menu">
          <img src="/global/nav.png" alt="" className="w-6 md:w-auto" />
        </button>
      </div>
    </header>
  );
}
