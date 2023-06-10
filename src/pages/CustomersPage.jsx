import { useState, useEffect, cloneElement } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, doc, getDocs,  updateDoc, deleteDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const formInitialState = {
  name: "",
  lastName: "",
  email: "",
  telefono: "",
  fecha: "",
  hora: "",
};

const CustomersPage = () => {
const [form, setForm] = useState(formInitialState)
const [users, setUsers] = useState ([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log (form);
    await crearUsuario ();

    setForm (formInitialState);
 
  }

  const crearUsuario = async () => {
    const collectionUsuarios = collection (db, "usuarios");
    await addDoc (collectionUsuarios, form);
    await obtenerUsuario ();
  }

  const eliminarUsuario = async (id) => {
    const registro = doc(db, "usuarios", id);
    await deleteDoc (registro); 
    await obtenerUsuario ();
  }

  const obtenerUsuario = async () => {
    const collectionUsuarios = collection (db, "usuarios");
    const resp = await getDocs (collectionUsuarios, form);
    const usuarios = resp.docs.map ((usuario) => ({
      id: usuario.id,
      ...usuario.data(),
    })); 

setUsers (usuarios)
  }

  const handleChange= (e) => {
    setForm ({
      ...form, 
      [e.target.name] : e.target.value,
    });
  }

useEffect (() => {
obtenerUsuario ()
  }, [])


 

  return (
    <>

<div className="card text-bg-dark">
  <img src="https://vocesescritas.com.mx/contenitdo/upoloads/2021/11/Rosa-Negra-Satelite.jpg" className="card-img" alt="fondo" />
  <div className="card-img-overlay">
<form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="name" className="form-label">First name</label>
    <input type="text" className="form-control" id="name" autoComplete="off" name="name" value={form.name} onChange={handleChange}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="lastName" className="form-label">Last name</label>
    <input type="text" className="form-control" id="lastName" autoComplete="off" name="lastName" value={form.lastName} onChange={handleChange} />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="email" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="email" autoComplete="off" name="email" value={form.email} onChange={handleChange} />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="telefono" className="form-label">Teléfono</label>
    <input type="number" className="form-control" id="telefono" autoComplete="off" name="telefono" value={form.telefono} onChange={handleChange}/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="fecha" className="form-label">Fecha de reservación</label>
    <input type="text" className="form-control" id="fecha" autoComplete="off" name="fecha" value={form.fecha} onChange={handleChange}/>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="hora" className="form-label">Hora</label>
    <input type="number" className="form-control" id="hora" autoComplete="off" name="hora" value={form.hora} onChange={handleChange}/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form> <br />

<div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((usuario) => (
          <div key={usuario.id} className="col">
            <div className="card h-100">
            <img src="https://www.revelbrunch.com/img/Revel-Brunch-Logo.png"  width={90} height={50} />              <div className="card-body">
                <h5 className="card-title">{usuario.name} {usuario.lastName} </h5>
                <p className="card-text">Direccion email: {usuario.email}, número telefóncio: {usuario.telefono}, fecha {usuario.fecha} y hora de reserva {usuario.hora} hrs</p>
                <button
                  type="buttton"
                  className="btn btn-danger"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

</div>
</div>
    </>
  );
};

export default CustomersPage;
