import * as PizzaTypes from './types'
import { Pizza } from './pizza'

export class PizzaBuilder {
  private _cheese: PizzaTypes.Cheese = 'mozzarella'
  private _crust: PizzaTypes.Crust = 'thick'
  private _toppings: PizzaTypes.Toppings = []
  private _slicesAmount: PizzaTypes.SlicesAmount = 8
  private _size: PizzaTypes.Size = 'large'
  private _price: number
  private _clientName: string

  constructor(price: number, clientName: string) {
    this._price = price
    this._clientName = clientName
  }

  get cheese(): PizzaTypes.Cheese {
    return this._cheese
  }

  setCheese(value: PizzaTypes.Cheese): PizzaBuilder {
    this._cheese = value
    return this
  }

  get crust(): PizzaTypes.Crust {
    return this._crust
  }

  setCrust(value: PizzaTypes.Crust): PizzaBuilder {
    this._crust = value
    return this
  }

  get toppings(): PizzaTypes.Toppings {
    return this._toppings
  }

  setToppings(value: PizzaTypes.Toppings): PizzaBuilder {
    this._toppings = value
    return this
  }

  get slicesAmount(): PizzaTypes.SlicesAmount {
    return this._slicesAmount
  }

  setSlicesAmount(value: PizzaTypes.SlicesAmount): PizzaBuilder {
    this._slicesAmount = value
    return this
  }

  get size(): PizzaTypes.Size {
    return this._size
  }

  setSize(value: PizzaTypes.Size): PizzaBuilder {
    this._size = value
    return this
  }

  get price(): number {
    return this._price
  }

  get clientName(): string {
    return this._clientName
  }

  build(): Pizza {
    return new Pizza(this)
  }
}
