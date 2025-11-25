
import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  const [counter, setCounter] = useState(-1);
  useEffect(() => {
    console.log('dans la fonction useEffect' ,counter);
    return () =>{

    };
  }, [counter])

  useEffect(() => {
    setCounter(0);
    }, [])

  return (
    <div>
      counter: {counter}
      <Button
        type="button"
        color="skyblue"
        onButtonClick={() => {
          console.log("-1 click");
          setCounter(counter-1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        type="button"
        color="aquamarine"
        onButtonClick={() => {
          console.log("+1 click");
          setCounter(counter+1);
          console.log(counter);
        }
      }
      >
        +1
      </Button>
    </div>
  );
}

export default App;
