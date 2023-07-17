
import ExpenseList from "./components/Expenses/ExpenseList";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 60,
      date: new Date(2023, 2, 12),
    },
    { id: "e2", title: "Fuel", amount: 120, date: new Date(2023, 2, 8) },
    { id: "e3", title: "Gym", amount: 42, date: new Date(2023, 2, 1) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
