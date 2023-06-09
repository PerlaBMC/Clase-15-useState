import {useState} from 'react'
import axios from 'axios'

const EjercicioPage = () => {
  const [usuarios, setUsuarios] = useState ([])
  
  const obtenerClientes = async () => {
    const resp = await axios.get ("https://jsonplaceholder.typicode.com/posts")
    console.log (resp.data)
    setUsuarios (resp.data)
  }

    return (
    <>
    <header className='row'>
        <article className='col'> 
        <h2>Ejercicio No. 1</h2>
        </article>
    </header>
    <main className='row'> 
        <article className='col'>
<button
class="btn btn-primary" 
type="button"
onClick={obtenerClientes}>
    Extraer información 
</button>
        </article>
    </main>
<section className='row'>
    <article className='col'>
    <ul class="list-group">
        {usuarios.map ((usuario) => (  <li key = {usuario.id}class="list-group-item">{usuario.body}</li>))}
</ul>
    </article>
</section>

    </>
  )
}

export default EjercicioPage