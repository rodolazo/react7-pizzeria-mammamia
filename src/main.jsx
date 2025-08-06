import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PizzaProvider from './context/PizzaContext.jsx'

createRoot(document.getElementById('root')).render(
  <PizzaProvider>
    <App />
  </PizzaProvider>
)
