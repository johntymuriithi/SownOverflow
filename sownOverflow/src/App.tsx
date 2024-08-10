import { Fragment } from 'react'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <Fragment>
      <section>
        <NavBar  />
        <HomePage />
      </section>
    </Fragment>
  )
}

export default App
