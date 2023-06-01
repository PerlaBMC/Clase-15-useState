import React, {useState} from "react";

const HomePage = () => {
 const [contador, setCounter] = useState (0);
 
 const aumentarContador = () => {
  setCounter (contador + 1); 
 }
 
  return (
    <>
    <header>
      <h1>Pagina de constado</h1>
    </header>
    <main>
      <article>
        <h2> contador: {contador} </h2>
        <button onClick={aumentarContador}>Aumentar contador</button>
      </article>
    </main>
    </>
  );
};

export default HomePage;
