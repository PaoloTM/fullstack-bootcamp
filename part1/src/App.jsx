/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import './App.css'
import Mensaje from './Mensaje'

const App = () => {
  const text = 'Hello world'
  
  return (
    <div className="App">
      <Mensaje color='blue' message='Estamos trabajando' />
      <Mensaje color='red' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
    </div>
  )
}

export default App