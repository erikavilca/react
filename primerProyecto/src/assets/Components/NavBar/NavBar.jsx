import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      {/* Aca va a estar lo que es el logo, buscador y barra de navegacion */}
      <div className="container">
        <h1>Shopping</h1>
        <input id="buscador" type="text" placeholder="buscar..." />
        <CartWidget/>
      </div>

      <div className="containerBtn">
        
        <button className="btn">Productos</button>

        <button className="btn">Nosotros</button>
        <button className="btn">Trabaja con nosotros</button>
      </div>
    </>
  );
}

export default NavBar;
