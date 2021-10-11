import React from 'react'
import Balance from './components/Balance';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { ContextProvider } from './context/GlobalState';
import "./style.css";
const App = () => {
  return (

    <ContextProvider>

      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>

    </ContextProvider>
  )
}

export default App
