import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const formInitialState = {
  name: "",
  lastName: "",
  email: "",
  telefono: "",
  fecha: "",
  hora: "",
};

const CustomerPage = () => {
    const [form, setForm] = useState(formInitialState);
    const [usuario, setUsuario] = useState([]);
    const { idUsuario } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await actualizarUsuario();
    };
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const actualizarUsuario = async () => {
      const coleccion = doc(db, "usuario", idUsuario);
      await updateDoc(coleccion, form);
      await obtenerUsuario();
    };
  
    const obtenerUsuario= async () => {
      const resp = await getDoc(doc(db, "usuario", idUsuario));
      setUsuario(resp.data());
      setForm(resp.data());
    };
  
    useEffect(() => {
      async function obtenerUsuario() {
        const resp = await getDoc(doc(db, "usuarios", idUsuario));
        setUsuario(resp.data());
        setForm(resp.data());
      }
      obtenerUsuario();
    }, [idUsuario]);
  
    return (
      <>
        <main className="row">
          <article className="col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  autoComplete="off"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  autoComplete="off"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  autoComplete="off"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fecha"
                  autoComplete="off"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hora" className="form-label">
                  Hora
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hora"
                  autoComplete="off"
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-warning">
                Actualizar
              </button>
            </form>
          </article>
        </main>
        <section className="row pt-5">
          <article className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                <img src="https://www.revelbrunch.com/img/Revel-Brunch-Logo.png"  width={90} height={50} />  
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{usuario.name}</h5>
                    <p className="card-text">{usuario.lastName}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </>
  )
}

export default CustomerPage