import { Link } from "react-router"

export default function Login() {
  return (
    <>
      <h1>Entrar</h1>

      <p className="flex flex-col">
        Ainda não posssui uma conta?

        <Link to='/cadastro'>Cadastrar</Link>
      </p>
    </>
  )
}