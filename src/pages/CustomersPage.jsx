import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomersPage = () => {
  const [clientes, setClientes] = useState([]);

  const handleCustomers = async () => {
    const resp = await axios.get(
      "https://ucamp-api.onrender.com/api/v1/customers"
    );
    console.log(resp.data.data);
    setClientes(resp.data.data);
  };

  return (
    <>
      <main className="row">
        <article className="col">
          <h2>CustomersPage</h2>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <button className="btn btn-info" onClick={handleCustomers}>
            Obtener clientes
          </button>
        </article>
      </section>
      <section className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <th scope="row">{cliente.id}</th>
                  <td>{cliente.firstName}</td>
                  <td>{cliente.lastName}</td>
                  <td>
                    <NavLink
                      className="btn btn-primary"
                      to={`/customers/${cliente.id}`}
                    >
                      Ver mas
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>

<div className="card text-bg-dark">
  <img src="https://vocesescritas.com.mx/contenitdo/upoloads/2021/11/Rosa-Negra-Satelite.jpg" className="card-img" alt="..." />
  <div className="card-img-overlay">
<form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value>Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required />
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
</form>

  </div>
</div>


    </>
  );
};

export default CustomersPage;
