import { Menu, X } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

interface NavbarProps {
    isMenuOpen: boolean
    closeMenu: () => void
    openMenu: () => void
}

export function Navbar( { closeMenu, isMenuOpen, openMenu }: NavbarProps) {
    const {score} = useContext(ThemeContext)!
    return (
        <div className="bg-blue-900 px-14 py-4 flex justify-between items-center fixed w-screen">
            <div>
                <Link to="/">
                    <img src="/logo.png" alt="imagem focus" className="w-24 sm:w-36 cursor-pointer" />
                </Link>
            </div>
            <div>
                <ul className="hidden sm:flex gap-6">
                    <li className="text-zinc-50 cursor-pointer hover:text-zinc-400"><Link to="/">Home</Link></li>
                    <li className="text-zinc-50 cursor-pointer hover:text-zinc-400"><Link to="/presentes">Presentes</Link></li>
                    <li className="text-zinc-50 cursor-pointer hover:text-zinc-400"><Link to="/meus-presentes">Meus Presentes</Link></li>
                    <span className="text-zinc-400">{score} pontos</span>
                </ul>

                <div className="block sm:hidden">
                    {isMenuOpen ? (
                        <X onClick={closeMenu} className="size-7 text-zinc-50" />
                    ) : (
                        <Menu onClick={openMenu} className="size-7 text-zinc-50" />
                    )}
                    <div>
                        {isMenuOpen && (
                            <ul className="absolute bg-blue-900 w-full left-0 p-4 ">
                                <li className="text-zinc-50 mb-4 hover:text-zinc-300"><Link to="/">Home</Link></li>
                                <li className="text-zinc-50 mb-4 hover:text-zinc-300"><Link to="/presentes">Presentes</Link></li>
                                <li className="text-zinc-50 mb-4 hover:text-zinc-300"><Link to="/meus-presentes">Meus Presentes</Link></li>
                                <span className="text-zinc-400">{score} pontos</span>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}