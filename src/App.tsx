import './App.css';
import { Users } from './components/users/Users';
import { GreenCard } from './components/greenCard/GreenCard';
import { Message } from './components/message/Message';
import { InpitMessage } from './components/inputMessage/InputMessage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Users />
        <GreenCard />
        <Message />
        <InpitMessage />
      </div>
    </div>
  );
}

export default App;
