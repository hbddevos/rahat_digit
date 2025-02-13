

export default function Navbar() {
  return (
    <nav className="w-full h-24 py-8 flex justify-between items-center text-xl border border-white">
      <div className="" id="logo">
        RahatDigit
      </div>
      <div className="text-xl sm:hidden">
        icon
      </div>
      <ul className="sm:flex [&>li]:mr-6 hidden">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Moi</a>
        </li>
        <li>
          <a href="#">Produits</a>
        </li>
        <li>
          <a href="#">WhatsApp</a>
        </li>
      </ul>
    </nav>
  );
}
