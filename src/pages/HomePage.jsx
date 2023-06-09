import React, {useState} from "react";


const HomePage = () => {
 
 
const style = {
  background: "gray",
  color: "white",
  fontFamily:"Courier",
}


  return (
    <>
<body>
<div id="carouselExampleDark" className="carousel carousel-gray slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://images.myguide-cdn.com/md/mexico/companies/n-a/large/n-a-716438.jpg" className="d-block w-100" alt="..." width={800} height={455}  />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://www.rosanegra.com.mx/images/Inicio/slide_cancun.jpg" className="d-block w-100"  width={800} height={455}  />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.travelmania.mx/wp-content/uploads/2021/11/restaurante-rosa-negra-polanco-destacada.jpg" className="d-block w-100" alt="..." width={800} height={455}  />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="w3-container" style={style}>
<h1  class= "text-center">  B R U N C H   </h1>
</div>

<div className="card-group">
  <div className="card">
    <img src="https://rosanegra.com.mx/images/sucursales/cdmx_01.jpg" className="card-img-top" alt="uno" />
    <div className="card-body">
      <h5 className="card-title">REVEL BRUNCH CLUB</h5>
      <p className="card-text">Revel Brunch Club es una experiencia de fiesta fascinante, donde podrás disfrutar la vida a la orilla del mar. Vive la magia del Caribe Mexicano, con botellas de tequila en un ambiente de celebración y seducción.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://rosanegra.com.mx/images/sucursales/cdmx_02.jpg" className="card-img-top" alt="dos" />
    <div className="card-body">
      <h5 className="card-title">MIXOLOGIA</h5>
      <p className="card-text">Las bebidas están inspiradas en la Alquimia latinoamericana, su esencia, historia e ingredientes naturales sorprenderán a tus sentidos y harán que tu experiencia sea grandiosa.</p>
     
    </div>
  </div>
  <div className="card">
    <img src="https://rosanegra.com.mx/images/sucursales/cdmx_03.jpg" className="card-img-top" alt="tres" />
    <div className="card-body">
      <h5 className="card-title">EL MEJOR AMBIENTE</h5>
      <p className="card-text">Somos un espacio que celebra la pasión por vivir en un ambiente de celebración total, inspirado por la majestuosidad de diversos países de Latinoamérica como Colombia, Perú, Argentina, Brasil y México.</p>
    </div>
  </div>
</div>

<br />

<div className="clearfix">
  <img src="https://rosanegra.com.mx/images/sucursales/cdmx_04.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" width={800} height={300} />
<br />
<br />
<p class= "text-center"> 
La terraza, con vista hacia la avenida, se convierte en testigo de la dinámica única del área, conformada por transeúntes, ciclistas, autos de lujo y las imponentes boutiques.
</p>
<p class= "text-center">Su interior fue diseñado preservando parte de la estructura de la casa colonial, que alguna vez existió en el lugar. Aún puede observarse el bello arco de estuco típico de la época, así como parte de las paredes de ladrillo originales que fueron restauradas.
</p>
</div>

<div className="clearfix">
  <img src="https://cdn.create.vista.com/api/media/small/450991930/stock-video-saxophone-player-performing-a-solo?videoStaticPreview=true&token=" className="col-md-6 float-md-start mb-1 ms-md-1" width={800} height={300} />
<br />
<br />
<p  class= "text-center" >
<strong>LOCATION & RESTAURANT SERVICES </strong> <br />
- Valet parking con estacionamiento. <br />
- Tarjetas Bancarias: Visa, Mastercard y American Express.<br />
- Sillas para niños disponibles. <br />
- Menú para niños disponible. <br />
- Menú vegano disponible. <br />
- Restaurante con DJ en Polanco. <br />
- Menu RosaNegra Polanco <br />

</p>
</div>

<br />
<div className="clearfix">
  <img src="https://i.ytimg.com/vi/MSrYXBce_p8/maxresdefault.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" width={800} height={300} />
<br />
<br />
<p class= "text-center"> 
<strong>Revel Brunch</strong> se encuentra sobre Av. Masaryk, muy cerca de los mejores hoteles en México como Hyatt Regency, Presidente Intercontinental, JW Marriot, W México City, Four Seasons México City o Camino Real Polanco; y a minutos de la Zona Rosa y Colonia Roma.</p>
<p class= "text-center">Su interior fue diseñado preservando parte de la estructura de la casa colonial, que alguna vez existió en el lugar. Aún puede observarse el bello arco de estuco típico de la época, así como parte de las paredes de ladrillo originales que fueron restauradas.
</p>
</div>
</body>
    </>
  );
};

export default HomePage;
