import {Addemploy} from "./components/addemploy";
import {Showemploy} from "./components/showemploy";
import {useState} from "react"

function App() {
  const [data,setData] = useState(false);
  function showdata(){
    setData((d)=>{
      return !d;
    })
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={showdata}>registaration</button>
      {data ? <Addemploy></Addemploy> : <Showemploy></Showemploy>}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}

    </div>
  );
}

export default App;
