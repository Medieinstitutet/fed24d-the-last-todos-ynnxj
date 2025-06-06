import { useState } from "react"
import type { Item } from "../models/Item"
import { Title } from "../components/WindowTitle"
import { AddItem } from "./AddItem"

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

  const addItem = (item: Item) => {
    const updated = [...items, item]

    setItems(updated)
    localStorage.setItem("items", JSON.stringify(updated))
  }

  const removeItem = (name: string) => {
    const updatedList = items.filter(item => item.name !== name)

    setItems(updatedList)
    localStorage.setItem("items", JSON.stringify(updatedList))
  }

  console.log("Updated Shopping List:", items)

  return (
    <>
      <Title mode="list"/>
      <div className="shopping-list">
        <ul>
          {items.map((item) => (
            <li key={item.name} className="item">
              <h3>{item.name}</h3>
              <p>Amount: {item.amount}</p>
              <label>In cart:
                <input className="checkbox" type="checkbox" checked={item.isDone} onChange={() => toggleDone(item.name)}/>
              </label>
              <button onClick={() => removeItem(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <AddItem addItem={addItem} />
    </>
  )
}



