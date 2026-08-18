import { NavLink } from "react-router"

export default function Contact() {
  return (
    <>
      <nav className="flex flex-col">
        <NavLink to="/" className={({ isActive }) => ( isActive ? "text-accent" : "" )}>
          Início
        </NavLink>

        <NavLink to="/contato" className={({ isActive }) => ( isActive ? "text-accent" : "" )}>
          Contato
        </NavLink>
      </nav>

      <h1>Contato</h1>
    </>
  )
}