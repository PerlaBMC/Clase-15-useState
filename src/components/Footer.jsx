import { NavLink} from "react-router-dom";

const Footer = () => {
    const estilo = { 
        fw: "fw-bold",
        color: "darkgoldenrod"
    }


    return (
    <>
    <footer>
    <div className="card text-center">
  <div className="card-header" style={estilo} >
    <h6> ¡¡TE ESPERAMOS!! </h6>
  </div>
  <div className="card-body">
    <h5 className="card-title">Teléfono: 55 5564 4398</h5>
    <p className="card-text">C. Antonio M. Anza 20, C. U. Benito Juárez, Cuauhtémoc, 06760 Ciudad de México, CDMX</p>

    <NavLink      
    className="btn btn-outline-secondary"
    to = "/customers" >
   RESERVA CON NOSOTRSO
    </NavLink> 
        
  

  </div>
  <div className="card-footer text-body-secondary">
    Sucursal Condesa
  </div>
</div>
    </footer>
    </>
  )
}

export default Footer