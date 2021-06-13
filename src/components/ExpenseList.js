import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-xl">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
        <div className="flex justify-center items-center">
          {expenses.length > 0 && (
            <button className="px-3 py-1 mt-2 bg-red-500 text-white flex items-center">
              Clear Expenses <MdDelete className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
