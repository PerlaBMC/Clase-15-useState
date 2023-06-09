import { useState } from "react"
import axios from "axios"

const UseStatePage = () => {

const [customers, setCustomers] = useState ([])

    const obtenerUsuarios = async () => {
        const resp = await axios.get ("https://jsonplaceholder.typicode.com/users")
        console.log (resp.data)
        setCustomers (resp.data)
    }

  return (
    <>
    <header className="row">
        <article className="col">
        <h1>Use State Page </h1>
        </article>
    </header>
    <main className="row">
        <article className="col">
        <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={obtenerUsuarios}>
        Obtener Usuarios
        </button>
        </article>
    </main>
    <section className="row">
        <article className="col">
        <ol class="list-group list-group-numbered">
        {customers.map ((customer) => ( <li key={customer.id} class="list-group-item">{customer.name}</li>))}
        </ol>
        </article>
    </section>
    </>
  )
}

export default UseStatePage