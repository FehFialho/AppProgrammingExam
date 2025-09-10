import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Counter } from '../Components/Counter.jsx'
import { MyInput } from '../Components/MyInput.jsx'
import { DissapearBtn } from '../Components/DissapearBtn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* A */}
    <Counter></Counter>
    {/* B */}
    <MyInput></MyInput>
    {/* C */}
    <DissapearBtn></DissapearBtn>
  </StrictMode>,
)
