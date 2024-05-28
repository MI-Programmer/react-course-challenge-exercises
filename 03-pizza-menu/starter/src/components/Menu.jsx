import { pizzaData } from "../data/data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        {pizzaData.map((pizza, id) => (
          <Pizza pizza={pizza} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
