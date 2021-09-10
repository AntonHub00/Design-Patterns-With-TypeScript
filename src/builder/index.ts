import { Pizza } from './pizza'
import { PizzaBuilder } from './pizzaBuilder'

const tonysPizza: Pizza = new PizzaBuilder(5.5, "Tony's pizza")
  .setCheese('cheddar')
  .setToppings(['bacon', 'mushrooms'])
  .build()

const johnsPizza: Pizza = new PizzaBuilder(6.5, "John's pizza")
  .setSlicesAmount(4)
  .setSize('medium')
  .setCrust('thin')
  .setToppings(['bacon', 'mushrooms'])
  .build()

tonysPizza.printPizza()
console.log()
johnsPizza.printPizza()
