import { Link, useNavigate } from "react-router"

export default function Register() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    navigate('/login')
  }
  
  return (
    <>
      <h1>Cadastrar</h1>

      <form action="">
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>

          <input type="text" id="name" name="name" className="bg-blue-300" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>

          <input type="email" id="email" name="email" className="bg-blue-300" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>

          <input type="password" id="password" name="password" className="bg-blue-300" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="repeated-password">Confirmar senha</label>

          <input type="password" id="repeated-password" name="repeated-password" className="bg-blue-300" />
        </div>

        <button>Cadastrar</button>
      </form>

      <p className="flex flex-col">
        Já possui uma conta?

        <Link to='/login'>Login</Link>
      </p>
    </>
  )
}