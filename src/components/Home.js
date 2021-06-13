import React, { useState } from "react";
import Alert from "./Alert";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { v4 as uuid } from "uuid";

const initArrayValue = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

const Home = () => {
  // All Expense
  const [expenses, setExpense] = useState(initArrayValue);

  // Single ExpenseCharge
  const [charge, setCharge] = useState("");

  // Single Amount
  const [amount, setAmount] = useState("");

  // *************************** Function *************************************
  const handleCharge = (e) => {
    console.log(`Charge : ${e.target.value}`);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(`Amount : ${e.target.value}`);
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit : ${charge} , ${amount}`);
    if (charge !== "" && amount > 0) {
      const newExpense = { id: uuid(), charge: charge, amount: amount };
      console.log(newExpense);
      // เพื่อเป็นการนำ expense ของเก่าแล้วนำมาต่อดว้ยของใหม่
      setExpense([...expenses, newExpense]);
    }
  };

  return (
    <div>
      <Alert />
      <h2 className="text-center text-3xl font-bold tracking-widest">
        Budget Calculator
      </h2>
      <div className="bg-yellow-200 p-5 m-2">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </div>
      <h1 className="text-center text-xl font-bold">
        Total spending :{" "}
        <span className="text-xl bg-red-500 px-3 py-1 text-white font-normal">
          ${" "}
          {expenses.reduce((acc, expense) => {
            return (acc += parseInt(expense.amount));
          }, 0)}
        </span>
      </h1>
    </div>
  );
};

export default Home;
