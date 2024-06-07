
import { Provider } from 'react-redux';
import './App.css';
import Header from './componets/Header';
import TableData from './componets/TableData';
import AppStore from './componets/store/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
      <Header />
      <TableData />
    
    </div>
    </Provider>
    
  );
}

export default App;
