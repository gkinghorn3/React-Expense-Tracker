import React, { useState } from "react";


import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectDateHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );


  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectDate={selectDateHandler}
      />

      <ExpensesList filteredExpenses={filteredExpenses} />

        
    </Card>
  );
};

export default ExpenseList;
