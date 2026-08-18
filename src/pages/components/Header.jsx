import { NavLink } from 'react-router'

function navLinkClass({ isActive }) {
  return isActive ? "text-accent font-bold" : ""
}

export default function Header() {
    return (
        <header>
            <nav className="flex flex-col">
                <NavLink to="/" className={navLinkClass}>
                    Início
                </NavLink>

                <NavLink to="/contato" className={navLinkClass}>
                    Contato
                </NavLink>
            </nav>
        </header>
    )
}