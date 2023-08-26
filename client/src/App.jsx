
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import AppRouter from './components/router/AppRouter'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
