import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {


  }
  
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData />
    </div>
  );
};

export default NewExpense;
