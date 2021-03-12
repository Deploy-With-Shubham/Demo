import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import CounterComponent from "./components/counterComponent"

function App() {
  return (
    <Router>
      <Route exact path = "/app"/>
      <Route exact path="/counter"component={CounterComponent}/>
    </Router>
  );
}

export default App;
