import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-full w-60 shadow-md bg-slate-900 text-slate-50">
      <div className="p-4 border-b">
        <NavLink to="/">Stephen</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;