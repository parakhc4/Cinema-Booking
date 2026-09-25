import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const categories = {
    classic: { name: "Classic", price: 150 },
    prime: { name: "Prime", price: 200 },
    xl: { name: "XL", price: 300 },
    gold: { name: "Gold", price: 500 },
  };

  const layout = [
    { row: "D", category: "gold", seats: [1, 2, null, 3, 4] },
    { row: "C", category: "xl", seats: [1, 2, 3, null, 4, 5, 6] },
    { row: "B", category: "prime", seats: [1, 2, 3, null, 4, 5, 6] },
    { row: "A", category: "classic", seats: [1, 2, 3, null, 4, 5, 6] },
  ];


  return (
    <div style = {{padding:20}}>
    <h1>Cinema Booking</h1>
    <ul>
      {layout.map((r) =>(
        <div key={r.row}>
          <p>
            {r.row} - {categories[r.category].name} ₹{categories[r.category].price}
          </p>

          <div style={{display:"flex", gap:6, justifyContent: "center"}}>
            {r.seats.map((s)=>(
              s==null?
              <div style={{width:30}}></div>
              :
              <button key={r.row + s} style={{ width: 30, height: 30 }}>{s}</button>
            ))}
          </div>
        </div>
      ))}
    </ul>
    </div>
  )
}

export default App
