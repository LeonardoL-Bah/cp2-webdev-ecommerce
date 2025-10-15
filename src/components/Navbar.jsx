import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <nav className="flex gap-4">
      <Link to="/">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      </Link>
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/perfil" className="hover:underline">Perfil</Link>
        <Link to="/carrinho" className="hover:underline">Carrinho</Link>
      </nav>
     </div>
  );
}
