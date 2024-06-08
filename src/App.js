import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './componets/store/AppStore';
import Header from './componets/Header';
import CreateUsers from './componets/CreateUsers';
import TableData from './componets/TableData';
import Edit from './componets/Edit';


function App() {
  return (
    <Provider store={AppStore}>
      <Router>
        <div className="App bg-gray-100 min-h-screen">
          <Header />
          <div className="content p-4">
            <Routes>
              <Route path="/" element={<TableData />} />
              <Route path="/adduser" element={<CreateUsers />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
