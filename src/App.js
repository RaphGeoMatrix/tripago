import './App.css';
import TripList from './components/TripList';
import { useState } from "react"

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      {showTrips && <TripList/>}
      {showTrips &&
      <button onClick={() => setShowTrips(false)}> 
        hide list
      </button>}
      {!showTrips &&
      <button onClick={() => setShowTrips(true)}> 
        show list
      </button>}
    </div>
  );
}

export default App;
