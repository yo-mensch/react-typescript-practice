import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './styles/Expenses.css';

const Expenses : React.FC = () => {
  const expenses = [
        {
          date: new Date(2020, 5, 12),
          title: "yadda",
          price: 25.12
        },
        {
          date: new Date(2021, 3, 1),
          title: "yadda",
          price: 30
        },
        {
          date: new Date(2021, 6, 12),
          title: "yadda",
          price: 65.02
        }
      ];
    return (
        <Card className = 'expenses'>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price}/>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price}/>
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price}/>
        </Card>
    )
}

export default Expenses;