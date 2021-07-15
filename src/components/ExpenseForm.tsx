import './styles/ExpenseForm.css';

const ExpenseForm: React.FC = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" name="" id="" />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" max ={new Date().toJSON().slice(0,10)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;