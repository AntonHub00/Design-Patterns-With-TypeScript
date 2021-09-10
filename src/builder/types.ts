export type Cheese = 'mozzarella' | 'cheddar'
export type Crust = 'thick' | 'thin' | 'no crust'
export type ToppingsAmount = 1 | 2 | 3 | 4
export type SlicesAmount = 0 | 4 | 8
export type Size = 'small' | 'medium' | 'large'
export type MeetToppings = 'pepperoni' | 'sausage' | 'ham' | 'bacon'
export type VegetarianToppings = 'pineapple' | 'olives' | 'mushrooms'
export type Toppings = (MeetToppings | VegetarianToppings)[]
