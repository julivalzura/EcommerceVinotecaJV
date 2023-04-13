import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce Vinoteca</h3>
      <div>
        <button>Tintos</button>
        <button>Blancos</button>
        <button>Rosados</button>
        <button>Espumantes</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
