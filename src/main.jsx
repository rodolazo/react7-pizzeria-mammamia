import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PizzaProvider from './context/PizzaContext.jsx'
import UserProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <PizzaProvider>
    <App />
  </PizzaProvider>
  </UserProvider>
)
