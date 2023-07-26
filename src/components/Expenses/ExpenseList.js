import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021, 2022");

  const selectDateHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectDate={selectDateHandler}
      />
      <p>Data for years {filterInfoText} is hidden</p>
      {props.expenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))};

    </Card>
  );
};

export default ExpenseList;
