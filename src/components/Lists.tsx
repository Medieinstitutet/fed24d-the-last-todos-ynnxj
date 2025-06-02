type Items = {
  name: string
  amount: number
  isDone: boolean
}

export const Lists = () => {
  const items: Items[] = [
    {name: "Avocado", amount: 3, isDone: false},
    {name: "Milk", amount: 1, isDone: false},
    {name: "Pork Belly", amount: 2, isDone: false},
    {name: "Apples", amount: 5, isDone: false},
    {name: "Cereal", amount: 1, isDone: false},
    {name: "Tofu", amount: 1, isDone: false}
  ]

  return (
    <>
    <ul className="shopping-list">
      {items.map((item) =>
        <li key={item.name} className="item">
        <h3>Item: {item.name}</h3>
        <p>Amount: {item.amount}</p>
        <span>Got it: </span><input type="checkbox" checked={item.isDone} />
        </li>
      )}
    </ul>
    </>
  )
}

