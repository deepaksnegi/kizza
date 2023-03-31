import deluxePizza from "../p1.jpg";
import mushroomPizza from "../pepperoni-pizza-mushroom.jpg";
import chickenPizza from "../chicken-pizza.jpg";
import thinPizza from "../pizza-thin.jpg";
import cheesePizza from "../pizza-cheese.jpg";
import pepperoniPizza from "../pepperoni-pizza-sliced.jpg";

export const menuItems = [
  {
    id: "deluxePizza",
    name: "Deluxe Pizza",
    price: { small: 170, regular: 250, large: 300 },
    image: deluxePizza,
  },
  {
    id: "italiaPizza",
    name: "Italian Pizza",
    price: { small: 180, regular: 260, large: 310 },
    image: mushroomPizza,
  },
  {
    id: "deluxePizzaC",
    name: "Deluxe Pizza Cheese Burst",
    price: { small: 200, regular: 270, large: 350 },
    image: chickenPizza,
  },
  {
    id: "indiePizza",
    name: "Indie Pizza",
    price: { small: 140, regular: 200, large: 270 },
    image: thinPizza,
  },
  {
    id: "cheesePizza",
    name: "Cheese Burst Pizza",
    price: { small: 120, regular: 170, large: 200 },
    image: cheesePizza,
  },
  {
    id: "peperoniPizza",
    name: "Pepperoni Pizza",
    price: { small: 140, regular: 200, large: 270 },
    image: pepperoniPizza,
  },
];
