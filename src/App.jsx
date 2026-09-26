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

  const handleSeatClick = (seatID) => {
    // setSelectededSeats([...selectedSeats,seatID]);
    if (selectedSeats.includes(seatID)){
      setSelectededSeats(selectedSeats.filter((id)=>id!=seatID));
    }
    else{
      setSelectededSeats([...selectedSeats,seatID]);
    }
  };

  const getSeatPrice = (seatID) => {
    // find row number of the seat
    const thisRow = seatID[0];
    console.log(thisRow);

    // find category of row number
    const thisCategory = categories[layout.find(row=> row.row == thisRow).category];
    console.log(thisCategory);


    return thisCategory.price;

  };
  
  const cartPrice = (selectedSeats) => {
    let total = 0;
    for (let i=0;i<selectedSeats.length;i++){
      total += getSeatPrice(selectedSeats[i]);
    }
    return total;
  }

  const [selectedSeats,setSelectededSeats] = useState([]);

  const [bookedSeats,setBookedSeats] = useState(["A1","B2","C1"])

  return (
    <div style = {{padding:20}}>
    <h1>Cinema Booking</h1>
    <ul>
      {layout.map((r) =>(
        <div key={r.row}>
          <p>
            {r.row} - {categories[r.category].name} ₹{categories[r.category].price}
          </p>
          {getSeatPrice("B4")}
          <div style={{display:"flex", gap:6, justifyContent: "center"}}>
            {r.seats.map((s)=>(
              s==null?
              <div style={{width:30}}></div>
              :
              <button onClick={()=>handleSeatClick(r.row+s)} key={r.row + s} style={{ width: 30, height: 30, backgroundColor:selectedSeats.includes(r.row+s)?"green":"black" }}>{s}</button>
            ))}
          </div>
        </div>
      ))}
    </ul>

    <p>Selected Seats : {selectedSeats.join(" ")}</p>
    <p>Total Price : {cartPrice(selectedSeats)}</p>
    </div>
  )
}

export default App
