
import './App.css'
import Button from './components/ui/Button/Button';

function App() {
  return (
      <div><Button titre="Button1" 
      type="reset"
      boolean={true} 
      number={245}
      str="hi"
      functionLog= { () => {
        console.log("coucou");
        
      }
    }
      /></div>
  )
}

export default App
