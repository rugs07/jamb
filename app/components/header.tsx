export default function Header() {
  return (
    <header className="container-padding py-8 flex items-center justify-between">
      <div className="">
        <img src="/landing/jamb-logo.png" alt="" />
      </div>
      <div className="flex items-center gap-8">
        <button aria-label="Search">
         <img src="/global/search.png" alt="" />
        </button>
        <button aria-label="Contact">
          <img src="/global/msg.png" alt="" />
        </button>
        <button aria-label="Menu">
          <img src="/global/nav.png" alt="" />
        </button>
      </div>
    </header>
  );
}
