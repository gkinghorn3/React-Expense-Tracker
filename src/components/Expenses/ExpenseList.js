import react, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseList = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const selectDateHandler = (selectedDate) => {
        setFilteredYear(selectedDate);
    }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onSelectDate={selectDateHandler} />
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
