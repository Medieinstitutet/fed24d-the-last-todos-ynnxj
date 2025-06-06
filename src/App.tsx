import "./App.scss"
import { ShoppingList } from "./components/Lists"
import { Title } from "./components/WindowTitle"

const App = () => {
  return (
    <>
      <section>
        <Title/>
        <ShoppingList/>
      </section>
    </>
  )
}

export default App
