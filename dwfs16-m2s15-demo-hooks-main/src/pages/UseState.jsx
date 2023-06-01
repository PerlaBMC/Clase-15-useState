import { useState } from "react";
import axios from "axios";

const UseState = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    inputEmail: "",
    inputPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const handleGetUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(form);

    setForm({
      inputEmail: "",
      inputPassword: "",
    });
  };

  const handleLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <>
      <main className="row">
        <article className="col">
          <h2>Use State</h2>
          <p>
            El useState es un Hook que te permite añadir el estado de React a un
            componente de función.
          </p>
        </article>
      </main>
      <section className="row">
        <article className="col-md-3">
          <h2>Listas</h2>
          <button className="btn btn-primary" onClick={handleGetUsers}>
            Obtener usuarios
          </button>
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="row mt-5">
        <article className="col-md-3">
          <h2>Formularios</h2>
          <form onSubmit={handleSumbit}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="inputEmail"
                value={form.inputEmail}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="inputPassword"
                value={form.inputPassword}
                onChange={changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </article>
      </section>

      <section className="row mt-5">
        <article className="col">
          <h2>Loader</h2>

          <button className="btn btn-success" onClick={handleLoader}>
            {loader ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span>Obtener Informacion</span>
            )}
          </button>
        </article>
      </section>
    </>
  );
};

export default UseState;
