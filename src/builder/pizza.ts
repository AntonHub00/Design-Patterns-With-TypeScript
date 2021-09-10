import * as PizzaTypes from './types'
import { PizzaBuilder } from './pizzaBuilder'

export class Pizza {
  // Making private the fields ensure the object inmutability. This is optional
  // since depends on the needs of each case.
  private _cheese: PizzaTypes.Cheese
  private _crust: PizzaTypes.Crust
  private _toppings: PizzaTypes.Toppings
  private _slicesAmount: PizzaTypes.SlicesAmount
  private _size: PizzaTypes.Size
  private _price: number
  private _clientName: string

  constructor(builder: PizzaBuilder) {
    this._cheese = builder.cheese
    this._crust = builder.crust
    this._toppings = builder.toppings
    this._slicesAmount = builder.slicesAmount
    this._size = builder.size
    this._price = builder.price
    this._clientName = builder.clientName
  }

  get cheese(): PizzaTypes.Cheese {
    return this._cheese
  }

  get crust(): PizzaTypes.Crust {
    return this._crust
  }

  get toppings(): PizzaTypes.Toppings {
    return this._toppings
  }

  get slicesAmount(): PizzaTypes.SlicesAmount {
    return this._slicesAmount
  }

  get size(): PizzaTypes.Size {
    return this._size
  }

  get price(): number {
    return this._price
  }

  get clientName(): string {
    return this._clientName
  }

  printPizza(): void {
    console.log(`Name: ${this._clientName}`)
    console.log(`Price: ${this._price}`)
    console.log(`Size: ${this._size}`)
    console.log(`Slices amount: ${this._slicesAmount}`)
    console.log(`Cheese: ${this._cheese}`)
    console.log(`Crust: ${this._crust}`)
    console.log(`Toppings: ${this._toppings}`)
  }
}
