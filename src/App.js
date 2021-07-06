import Routing from './components/Features/Routing/Routing';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import ChatBox from './components/Features/ChatBox/ChatBox';

function App() {
  return (
    <div>
            <Router>
              <Routing/>
            </Router>
            <ChatBox/>
    </div>


  );
}

export default App;
