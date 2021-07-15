import React, {useState} from 'react';
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "./Card";
import './styles/ExpenseItem.css';

interface expense {
    date: Date,
    title: string,
    price: number
  }

  const ExpenseItem : React.FC<expense> = (props) => {

    const [title, setTitle] = useState<string>(props.title);
    const handleClick = () =>{
        setTitle("Updated!");
    }

    return (
        <Card className = "expense-item">
            <ExpenseItemDate date = {props.date}/>
            <div className = 'expense-item__description'>
                <h2>{title}</h2>
                <div className = 'expense-item__price'>€{props.price}</div>
            </div>
            <button onClick={handleClick}> Change Title </button>
        </Card>
    )
}

export default ExpenseItem;