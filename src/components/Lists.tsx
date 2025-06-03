import { useState } from "react"
import type { Item } from "../models/Item"

/**
 * Renders and handle a shopping list.
 * 
 * Renders a list of items that can be checked off or removed.
 * Items are loaded from localStorage, or defaulted if none exist.
 */
export const ShoppingList = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const stored = localStorage.getItem("items")

    if (stored) {
      return JSON.parse(stored) as Item[]
    }

    const defaults: Item[] = [
      {name: "Avocado", amount: 3, isDone: false},
      {name: "Milk", amount: 1, isDone: false},
      {name: "Apples", amount: 5, isDone: false},
      {name: "Cereal", amount: 1, isDone: false}
    ]

    localStorage.setItem("items", JSON.stringify(defaults))
    return defaults
  })

  const toggleDone = (name: string) => {
    const updatedList = items.map(item => item.name === name ? { ...item, isDone: !item.isDone } : item)

    setItems(updatedList)
    localStorage.setItem("items", JSON.stringify(updatedList))
  }

  const removeItem = (name: string) => {
    const updatedList = items.filter(item => item.name !== name)

    setItems(updatedList)
    localStorage.setItem("items", JSON.stringify(updatedList))
  }

  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <li key={item.name} className="item">
          <h3>Item: {item.name}</h3>
          <p>Amount: {item.amount}</p>
          <span>Got it: </span>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleDone(item.name)}
          />
          <button onClick={() => removeItem(item.name)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}



