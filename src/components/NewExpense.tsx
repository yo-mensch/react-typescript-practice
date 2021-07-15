import ExpenseForm from './ExpenseForm';
import './styles/NewExpense.css';

const NewExpense: React.FC = () => {
    return (
        <div className = 'new-expense'>
            <ExpenseForm/>
        </div>
    )
};

export default NewExpense;