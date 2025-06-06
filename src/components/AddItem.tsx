import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Item } from "../models/Item"
import { Title } from "../components/WindowTitle"

interface AddItemProps {
  addItem: (item: Item) => void
}

/**
 * Add new items to list.
 * Render from with user input.
 */
export const AddItem =  ({addItem}: AddItemProps) => {
  const [item, setItem] = useState<Item>({name: "", amount: 0, isDone: false})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case "text":
        setItem({ ...item, [e.target.id]: e.target.value })
        break

      case "number":
        setItem({ ...item, [e.target.id]: e.target.valueAsNumber })
        break
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    addItem(item) 
    console.log("Item:", item)
  }

  return (
    <>
      <Title mode="add"/>
      <div className="add-item-form">
        <form onSubmit={handleSubmit}>
          <label>Item: 
            <input type="text" value={item.name} onChange={handleChange} required id="name"/>
          </label>
          <label>Amount: 
            <input type="number" value={item.amount} onChange={handleChange} required min={1} id="amount" />
          </label>
          <button>Add Item</button>
        </form>
      </div>
    </>
  )
}