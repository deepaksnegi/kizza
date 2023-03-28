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
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    id: "italiaPizza",
    name: "Italian Pizza",
    price: [160, 230, 290],
    image: mushroomPizza,
  },
  {
    id: "deluxePizzaC",
    name: "Deluxe Pizza Cheese Burst",
    price: [200, 270, 350],
    image: chickenPizza,
  },
  {
    id: "indiePizza",
    name: "Indie Pizza",
    price: [140, 200, 270],
    image: thinPizza,
  },
  {
    id: "cheesePizza",
    name: "Cheese Burst Pizza",
    price: [120, 170, 200],
    image: cheesePizza,
  },
  {
    id: "peperoniPizza",
    name: "Pepperoni Pizza",
    price: [140, 200, 270],
    image: pepperoniPizza,
  },
];
