import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectDateHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  let expenseListContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {

    expenseListContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectDate={selectDateHandler}
      />

      {expenseListContent}

        
    </Card>
  );
};

export default ExpenseList;
