import Routing from './components/Features/Routing/Routing';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
            <Router>
              <Routing/>
            </Router>
    </div>


  );
}

export default App;
