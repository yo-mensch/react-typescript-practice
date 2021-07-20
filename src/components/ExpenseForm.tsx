import React, {useState} from 'react';
import './styles/ExpenseForm.css';

interface newExpense{
    title: string,
    amount: string,
    date: string
}

const ExpenseForm: React.FC = () => {

    const [expense, setExpense] = useState<newExpense>({
        title: "",
        amount: "",
        date: ""
    });

    const titleChangeHandler = (event :React.ChangeEvent<HTMLInputElement>) => {
        setExpense((prevState) => {
            return {...prevState,
            title: event.target.value}
        });
    }

    const amountChangeHandler = (event :React.ChangeEvent<HTMLInputElement>) => {
        setExpense((prevState) => {
            return {...prevState,
            amount: event.target.value}
        });
    }

    const dateChangeHandler = (event :React.ChangeEvent<HTMLInputElement>) => {
        setExpense((prevState) => {
            return {...prevState,
            date: event.target.value}
        });
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitted");

        let submittedExpense = {
            title: expense.title,
            amount: parseFloat(expense.amount),
            date: new Date(expense.date).toJSON()
        };

        console.log(submittedExpense);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title {expense.title}</label>
                    <input type="text" onChange={titleChangeHandler} name='expenseTitle' value={expense.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount {expense.amount}</label>
                    <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date {expense.date}</label>
                    <input type="date" onChange={dateChangeHandler} max ={new Date().toJSON().slice(0,10)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;