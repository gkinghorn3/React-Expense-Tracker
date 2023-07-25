import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 60,
      date: new Date(2022, 2, 12),
    },
    { id: "e2", title: "Fuel", amount: 120, date: new Date(2022, 2, 8) },
    { id: "e3", title: "Gym", amount: 42, date: new Date(2019, 2, 1) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
