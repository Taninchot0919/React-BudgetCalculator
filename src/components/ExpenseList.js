import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-xl">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
        <div className="flex justify-center items-center">
          {expenses.length > 0 && (
            <button
              className="px-3 py-1 mt-2 bg-red-500 text-white flex items-center"
              onClick={clearItems}
            >
              Clear Expenses <MdDelete className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
