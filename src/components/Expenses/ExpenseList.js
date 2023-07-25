import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseList = (props) => {

    const selectDateHandler = (selectedDate) => {
        console.log(selectedDate);
        console.log("in ExpenseList.js");
    }

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectDate={selectDateHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
};

export default ExpenseList;
