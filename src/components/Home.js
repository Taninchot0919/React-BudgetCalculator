import React, { useState } from "react";
import Alert from "./Alert";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { v4 as uuid } from "uuid";

// const initArrayValue = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   { id: uuid(), charge: "credit card bill", amount: 1200 },
// ];

// Init Value
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const Home = () => {
  // All Expense
  const [expenses, setExpense] = useState(initArrayValue);

  // Single ExpenseCharge
  const [charge, setCharge] = useState("");

  // Single Amount
  const [amount, setAmount] = useState("");

  // Alert
  const [alert, setAlert] = useState({ show: false });

  // Edit
  const [isEdit, setIsEdit] = useState(false);

  // Edit Item
  const [id, setId] = useState(0);

  // *************************** Function *************************************
  const handleCharge = (e) => {
    console.log(`Charge : ${e.target.value}`);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(`Amount : ${e.target.value}`);
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    // หมายความว่าเซ็ต Object ให้ Alert มี show เป็น true แล้วก็ใส่ type กับ text ลงไปใน Object
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit : ${charge} , ${amount}`);
    if (charge !== "" && amount > 0) {
      if (isEdit) {
        let tempExpenses = expenses.map((item) => {
          return item.id == id ? { ...item, charge, amount } : item;
        });
        setExpense(tempExpenses);
        setIsEdit(false);
      } else {
        const newExpense = { id: uuid(), charge: charge, amount: amount };
        console.log(newExpense);
        // เพื่อเป็นการนำ expense ของเก่าแล้วนำมาต่อดว้ยของใหม่
        setExpense([...expenses, newExpense]);
        handleAlert({ type: "green", text: "Item Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "red",
        text: "Charge can't be empty and Amount Value has to be more than zero",
      });
    }
  };

  const clearItems = () => {
    console.log("Clear All Items");
    setExpense([]);
  };

  const handleDelete = (id) => {
    console.log(`Delete ${id}`);
    const tempExpenses = expenses.filter((item) => item.id !== id);
    setExpense(tempExpenses);
    handleAlert({ type: "red", text: "Item has been deleted" });
  };

  const handleEdit = (id) => {
    console.log(`Edit ${id}`);
    let expense = expenses.find((item) => item.id === id);
    console.log(expense);
    const oldCharge = expense.charge;
    const oldAmount = expense.amount;
    setIsEdit(true);
    setCharge(oldCharge);
    setAmount(oldAmount);
    setId(id);
  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
          isEdit={isEdit}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
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
