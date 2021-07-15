import React from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const App : React.FC = () => {
  return (
    <div className="App">
      <NewExpense/>
      <Expenses/>
    </div>
  );
}

export default App;
