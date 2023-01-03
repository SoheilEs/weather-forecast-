import { Provider } from 'react-redux';
import './App.css';
import Cites from './components/Cites';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
  
        <Cites />
  
 
    </Provider>
  );
}

export default App;
